import React from 'react';
import { NAV_LINKS, BOOKING_URL } from '../../constants';

interface NavbarProps {
  scrolled: boolean;
  scrollToSection: (e: React.MouseEvent<HTMLElement> | null, href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, scrollToSection }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
      ${scrolled 
        ? 'bg-black/20 backdrop-blur-md border-white/5 py-3 shadow-2xl' 
        : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center w-full">
        <div className="flex items-center group cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <img 
             src="https://i.postimg.cc/Bn0xDd4h/Whats-App-Image-2025-12-18-at-6-01-53-PM.png" 
             alt="AccessDeal" 
             className={`object-contain transition-all duration-700 brightness-0 invert ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'} w-auto transform scale-125 md:scale-150 origin-left`}
           />
        </div>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[9px] lg:text-[10px] uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors duration-300 relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-white transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        <a 
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex overflow-hidden rounded-full p-[1px] group shrink-0"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#78350f_50%,#fbbf24_100%)] group-hover:animate-[spin_1.5s_linear_infinite]" />
          <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-500 backdrop-blur-3xl transition-all duration-500 whitespace-nowrap gap-2 shadow-[inset_0_0_20px_rgba(251,191,36,0.1)] ${scrolled ? 'px-4 py-2 md:px-6 md:py-2' : 'px-5 py-2.5 md:px-8 md:py-3'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
            Private Access
          </span>
        </a>
      </div>
    </nav>
  );
};
