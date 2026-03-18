import React, { useEffect, useRef, useState } from 'react';
import { Zap, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    if (!containerRef.current) return;
    const container = containerRef.current;

    // Dynamic import — Three.js loads as a separate async chunk after initial paint
    let animationFrameId: number;
    let cleanup: (() => void) | null = null;

    import('three').then((THREE) => {
      if (!container) return;

      const scene = new THREE.Scene();

      // Setup Fog (using Karao's dark theme: #020617)
      scene.fog = new THREE.FogExp2(0x020617, 0.0015);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      camera.position.z = 400;

      // Disable antialias on high-DPI screens where it's less visible — cuts fill rate
      const isMobile = window.innerWidth < 768;
      const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      // Cap pixel ratio at 1 on mobile to halve fill rate, 1.5 on desktop
      renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));

      // Clear previous before appending if HMR triggers
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);

      // Mobile: 120 particles (lower O(n²) cost), Desktop: 160
      const particleCount = isMobile ? 120 : 160;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      // Karao digital colors
      const colorTeal = new THREE.Color(0x00BFCB);
      const colorGold = new THREE.Color(0xC4A028);

      for (let i = 0; i < particleCount; i++) {
          const radius = 600 * Math.cbrt(Math.random());
          const theta = Math.random() * 2 * Math.PI;
          const phi = Math.acos(2 * Math.random() - 1);

          positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[i * 3 + 2] = radius * Math.cos(phi) - 100;

          const mixedColor = colorTeal.clone().lerp(colorGold, Math.random());
          colors[i * 3] = mixedColor.r;
          colors[i * 3 + 1] = mixedColor.g;
          colors[i * 3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
          size: 3,
          vertexColors: true,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      const lineMaterial = new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.2,
          blending: THREE.AdditiveBlending
      });

      // Pre-allocate fixed-size buffers for lines to avoid GC every frame
      // Fewer max lines on mobile since there are fewer particles
      const maxLines = isMobile ? 800 : 1200;
      const linePositionArray = new Float32Array(maxLines * 6);
      const lineColorArray = new Float32Array(maxLines * 6);
      const lineGeometry = new THREE.BufferGeometry();
      const linePosAttr = new THREE.BufferAttribute(linePositionArray, 3);
      const lineColAttr = new THREE.BufferAttribute(lineColorArray, 3);
      linePosAttr.setUsage(THREE.DynamicDrawUsage);
      lineColAttr.setUsage(THREE.DynamicDrawUsage);
      lineGeometry.setAttribute('position', linePosAttr);
      lineGeometry.setAttribute('color', lineColAttr);
      const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(linesMesh);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;

      // Throttle mousemove to ~30fps on mobile, ~60fps on desktop
      let lastMoveTime = 0;
      const moveThrottle = isMobile ? 33 : 16;
      const handleMouseMove = (event: MouseEvent) => {
          const now = Date.now();
          if (now - lastMoveTime < moveThrottle) return;
          lastMoveTime = now;
          mouseX = (event.clientX - windowHalfX) * 0.05;
          mouseY = (event.clientY - windowHalfY) * 0.05;
      };
      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      const startTime = performance.now();

      // Pause/resume RAF when Hero scrolls in/out of viewport
      let isPaused = false;

      const animate = () => {
          if (isPaused) return;
          animationFrameId = requestAnimationFrame(animate);
          const time = (performance.now() - startTime) * 0.0002; // ms → seconds, then × 0.2

          targetX = mouseX * 0.5;
          targetY = mouseY * 0.5;
          camera.position.x += (targetX - camera.position.x) * 0.02;
          camera.position.y += (-targetY - camera.position.y) * 0.02;
          camera.lookAt(scene.position);

          const posArray = particles.geometry.attributes.position.array as Float32Array;
          const particleColors = particles.geometry.attributes.color.array as Float32Array;

          particles.rotation.y = time * 0.5;
          linesMesh.rotation.y = time * 0.5;
          particles.rotation.z = time * 0.2;
          linesMesh.rotation.z = time * 0.2;

          // Build lines by updating the pre-allocated buffer in-place
          let lineCount = 0;
          // Tighter connection radius → fewer lines, less GPU overdraw
          const connectionDistSq = isMobile ? 8000 : 10000;

          for (let i = 0; i < particleCount && lineCount < maxLines; i += 2) {
              const i3 = i * 3;
              for (let j = i + 1; j < particleCount && lineCount < maxLines; j++) {
                  const j3 = j * 3;
                  const dx = posArray[i3] - posArray[j3];
                  const dy = posArray[i3 + 1] - posArray[j3 + 1];
                  const dz = posArray[i3 + 2] - posArray[j3 + 2];
                  const distSq = dx * dx + dy * dy + dz * dz;

                  if (distSq < connectionDistSq) {
                      const offset = lineCount * 6;
                      linePositionArray[offset]     = posArray[i3];
                      linePositionArray[offset + 1] = posArray[i3 + 1];
                      linePositionArray[offset + 2] = posArray[i3 + 2];
                      linePositionArray[offset + 3] = posArray[j3];
                      linePositionArray[offset + 4] = posArray[j3 + 1];
                      linePositionArray[offset + 5] = posArray[j3 + 2];

                      lineColorArray[offset]     = particleColors[i3];
                      lineColorArray[offset + 1] = particleColors[i3 + 1];
                      lineColorArray[offset + 2] = particleColors[i3 + 2];
                      lineColorArray[offset + 3] = particleColors[j3];
                      lineColorArray[offset + 4] = particleColors[j3 + 1];
                      lineColorArray[offset + 5] = particleColors[j3 + 2];

                      lineCount++;
                  }
              }
          }

          lineGeometry.setDrawRange(0, lineCount * 2);
          linePosAttr.needsUpdate = true;
          lineColAttr.needsUpdate = true;

          lineMaterial.opacity = 0.1 + Math.sin(time * 5) * 0.05;

          renderer.render(scene, camera);
      };

      animate();

      // Pause when Hero leaves viewport, resume when it enters
      const heroSection = container.closest('section');
      const visibilityObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting && isPaused) {
              isPaused = false;
              animate();
          } else if (!entry.isIntersecting) {
              isPaused = true;
              cancelAnimationFrame(animationFrameId);
          }
      }, { threshold: 0 });
      if (heroSection) visibilityObserver.observe(heroSection);

      const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize, { passive: true });

      cleanup = () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', handleResize);
          cancelAnimationFrame(animationFrameId);
          visibilityObserver.disconnect();
          renderer.dispose();
          geometry.dispose();
          material.dispose();
          lineGeometry.dispose();
          lineMaterial.dispose();
      };
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      cleanup?.();
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#020617] flex items-center border-b border-white/5">
      {/* ThreeJS Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-60"
        style={{
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      {/* Ambient background gradients to merge visually */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,_rgba(0,191,203,0.06)_0%,_transparent_65%)] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(196,160,40,0.05)_0%,_transparent_55%)] z-0 pointer-events-none" />

      {/* Hologram Stage — classes defined in index.css */}
      <div className="hologram-stage hidden lg:block">
        <div className="stage-floor"></div>
        <div className="emitter"></div>
        <div className="light-cone"></div>
        <svg className="orbits" viewBox="0 0 1200 600">
            <path d="M 100,300 Q 600,0 1100,300 Q 600,600 100,300"></path>
            <path d="M 200,300 Q 600,100 1000,300 Q 600,500 200,300"></path>
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-2xl">
          <div className={`inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(0,191,203,0.15)] transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00BFCB' }} />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">System Initialization :: Online</span>
          </div>

          <h1 className={`text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05] text-white transition-all duration-1000 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Crafting the Future <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #00BFCB, #C4A028, #00939E)' }}>of Digital Excellence</span>
          </h1>

          <p className={`max-w-xl text-slate-400 text-lg md:text-xl font-medium mb-10 leading-relaxed border-l-2 pl-6 transition-all duration-1000 delay-200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ borderColor: 'rgba(196,160,40,0.5)' }}>
            Precision. Performance. Perfection.<br />
            Designed to Lead. Built to Scale.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,191,203,0.4)] hover:-translate-y-1 hover:bg-[#e0fafb] interactive-element">
              Initialize Project
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 interactive-element">
              <Zap className="w-5 h-5" style={{ color: '#C4A028' }} />
              Explore Capabilities
            </button>
          </div>

          <div className={`flex items-center gap-8 border-t border-white/10 pt-8 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div>
              <p className="text-3xl font-black text-white">99<span style={{ color: '#00BFCB' }}>.9%</span></p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Uptime SLA</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-3xl font-black text-white">10<span style={{ color: '#C4A028' }}>x</span></p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Dev Velocity</p>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <p className="text-3xl font-black text-white">4<span style={{ color: '#00BFCB' }}>w</span></p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">MVP Launch</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
