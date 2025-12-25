import React from 'react';

interface FooterProps {
  scrollToSection: (e: React.MouseEvent<HTMLElement> | null, href: string) => void;
  handleLegalNavigation: (view: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToSection, handleLegalNavigation }) => {
  return (
    <footer className="bg-black border-t border-white/5 py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
               <img 
                 src="https://i.postimg.cc/Kz7vhMSQ/Whats-App-Image-2025-12-18-at-6-18-55-PM.png" 
                 alt="AccessDeal" 
                 className="h-8 w-auto brightness-0 invert opacity-80"
               />
               <span className="text-2xl font-serif text-white tracking-tight">AccessDeal</span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-light">
              A private B2B connector and access infrastructure. We introduce partners to decision-makers who are already buying, hiring, or actively evaluating solutions.
            </p>
            <div className="pt-4 flex flex-col gap-1">
               <span className="text-[10px] uppercase tracking-widest text-neutral-600">General Inquiries</span>
               <a href="mailto:info@accessdeal.in" className="text-white hover:text-amber-500 transition-colors font-medium tracking-wide">
                 info@accessdeal.in
               </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#philosophy" onClick={(e) => scrollToSection(e, '#philosophy')} className="text-neutral-500 hover:text-white text-sm transition-colors">Philosophy</a></li>
              <li><a href="#model" onClick={(e) => scrollToSection(e, '#model')} className="text-neutral-500 hover:text-white text-sm transition-colors">The Model</a></li>
              <li><a href="#sectors" onClick={(e) => scrollToSection(e, '#sectors')} className="text-neutral-500 hover:text-white text-sm transition-colors">Sectors</a></li>
              <li><a href="#wall-of-success" onClick={(e) => scrollToSection(e, '#wall-of-success')} className="text-neutral-500 hover:text-white text-sm transition-colors">Wall of Success</a></li>
              <li><a href="#engagement" onClick={(e) => scrollToSection(e, '#engagement')} className="text-neutral-500 hover:text-white text-sm transition-colors">Private Engagement</a></li>
            </ul>
          </div>

          {/* Column 3: Legal/Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">Legal & Access</h4>
            <ul className="space-y-4">
              <li 
                onClick={() => handleLegalNavigation('privacy')} 
                className="text-neutral-500 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Privacy Policy
              </li>
              <li 
                onClick={() => handleLegalNavigation('terms')}
                className="text-neutral-500 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Terms of Service
              </li>
              <li className="pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                   <span className="text-[10px] uppercase tracking-widest text-neutral-400">Systems Operational</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-[10px] uppercase tracking-widest">
            © 2025 AccessDeal. All rights reserved.
          </p>
          <p className="text-neutral-600 text-[10px] uppercase tracking-widest">
            Designed for Exclusivity.
          </p>
        </div>
      </div>
    </footer>
  );
};
