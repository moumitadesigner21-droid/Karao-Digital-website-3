import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [tailwindcss(), react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        chunkSizeWarningLimit: 800,
        // Use esbuild for minification (default, fast) — removes dead code aggressively
        minify: 'esbuild',
        // Enable CSS code-splitting so each chunk only loads its own styles
        cssCodeSplit: true,
        // Raise target to modern browsers for smaller output (no legacy transforms)
        target: ['es2020', 'chrome90', 'firefox90', 'safari14'],
        rollupOptions: {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom'],
              'vendor-three': ['three'],
              'vendor-icons': ['lucide-react'],
            },
            // Consistent hash-based asset naming for long-lived caching
            chunkFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash][extname]',
          }
        }
      }
    };
});
