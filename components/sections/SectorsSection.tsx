import React from 'react';
import { Section } from '../Section';
import { SECTORS } from '../../constants';
import { ArrowUpRight, Atom, Shield, Plane, Users, Cpu } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

const SECTOR_ICONS = [
  Atom,      // Biotechnology
  Shield,    // Pharma Services
  Plane,     // Aerospace
  Users,     // Recruitment
  Cpu        // Enterprise Tech
];

export const SectorsSection: React.FC = () => {
  return (
    <Section id="sectors" title="Who We Work With" subtitle="Strategic Sectors" className="border-t border-neutral-900 relative z-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SECTORS.map((sector, idx) => {
           const Icon = SECTOR_ICONS[idx % SECTOR_ICONS.length];
           return (
             <TiltCard key={idx} className="h-full" glowColor="rgba(255, 255, 255, 0.1)">
                <div className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 p-10 h-64 flex flex-col justify-between group rounded-xl hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" />
                  </div>

                  <div className="relative z-10">
                     <h3 className="text-xl font-serif text-neutral-300 group-hover:text-white transition-colors tracking-wide leading-tight">
                       {sector}
                     </h3>
                     <div className="h-0.5 w-0 bg-amber-500 mt-4 transition-all duration-500 group-hover:w-12"></div>
                  </div>
                </div>
             </TiltCard>
           );
        })}
      </div>
    </Section>
  );
};
