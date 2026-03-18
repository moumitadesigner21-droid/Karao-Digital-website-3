import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => (
  <a href="/" onClick={onClick} className={`flex items-center gap-2 group ${className}`}>
    {/* Using the transparent extracted image logo aligned with the text */}
    <picture>
      <source srcSet="/logo-transparent.webp" type="image/webp" />
      <img
        src="/logo-transparent.png"
        alt="Karao logo"
        width="32"
        height="32"
        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        decoding="async"
      />
    </picture>
    <span className="text-white font-semibold text-lg tracking-tight leading-none transition-colors duration-300 group-hover:text-slate-200">
      karao<span style={{ color: '#00BFCB', transition: 'color 0.3s' }}>.</span>digital
    </span>
  </a>
);

export default Logo;
