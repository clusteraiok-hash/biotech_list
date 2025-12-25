import React from 'react';
import { Section } from '../Section';
import { Zap, Target, Server } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import { ACTIVE_PARTNERS_DATA, BOOKING_URL } from '../../constants';
import { Partner } from '../../types';

interface ModelSectionProps {
  onPartnerSelect: (partner: Partner) => void;
}

export const ModelSection: React.FC<ModelSectionProps> = ({ onPartnerSelect }) => {
  return (
    <Section id="model" title="A Selective Engagement Model" subtitle="Operational Requirement">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-8 relative order-2 lg:order-1">
           <div className="absolute -left-20 top-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
           <div className="relative z-10 space-y-6">
               <p className="text-xl md:text-2xl font-serif text-white leading-tight">
                 We work with a maximum of six companies per year.
               </p>
               <div className="h-px w-12 bg-amber-500/50"></div>
               <p className="text-neutral-400 font-light leading-relaxed">
                This limit is intentional. Our work depends on timing, trust, and relationship depth — not volume.
                Selectivity is not a positioning choice. It is an operational requirement.
               </p>
           </div>
           <div className="space-y-6 pt-4">
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 shrink-0">
                     <Zap className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                     <h4 className="text-white font-serif text-lg">Connectors, Not Sellers</h4>
                     <p className="text-neutral-500 text-xs font-light mt-1">We do not sell lists. We do not run mass outreach.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5 shrink-0">
                     <Target className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                     <h4 className="text-white font-serif text-lg">Outcome-Based Commitment</h4>
                     <p className="text-neutral-500 text-xs font-light mt-1">Six-month guarantee. Five high-quality, decision-maker-level clients.</p>
                  </div>
               </div>
           </div>
        </div>

        {/* Right Column: Premium Active Partner Monitor (3D Interactive) */}
        <div className="order-1 lg:order-2">
          <TiltCard className="w-full" glowColor="rgba(245, 158, 11, 0.2)">
              <div className="relative w-full rounded-xl bg-[#080808] border border-white/10 overflow-hidden shadow-2xl group">
                  {/* Background Grid & Scanline */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent h-[40%] w-full animate-[scan_6s_linear_infinite] pointer-events-none"></div>

                  {/* Header of the Monitor */}
                  <div className="relative p-6 border-b border-white/5 bg-white/5 backdrop-blur-md flex justify-between items-center z-10">
                      <div className="flex items-center gap-3">
                         <Server className="w-4 h-4 text-amber-500" />
                         <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">Deal Flow Monitor</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                         <span className="text-[9px] uppercase tracking-widest text-green-500">Online</span>
                      </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="p-8 relative z-10">
                      <div className="flex justify-between items-end mb-8">
                          <div>
                              <h3 className="text-4xl font-serif text-white mb-1 drop-shadow-md">4 <span className="text-neutral-600 text-2xl font-light">/ 6</span></h3>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-amber-500">Slots Allocated</p>
                          </div>
                          <div className="text-right">
                              <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Available Capacity</p>
                              <p className="text-xl text-white font-mono">33%</p>
                          </div>
                      </div>

                      {/* Visual Bars / Blades */}
                      <div className="flex gap-3 h-32 items-end">
                          {/* Active Slots - Now Interactive */}
                          {ACTIVE_PARTNERS_DATA.map((partner) => (
                              <div 
                                  key={partner.id} 
                                  onClick={() => onPartnerSelect(partner)}
                                  className="flex-1 relative group/blade h-full flex flex-col justify-end transition-all duration-300 hover:h-[110%] cursor-pointer"
                              >
                                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/blade:opacity-100 transition-opacity text-[9px] text-amber-500 whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-amber-500/30 backdrop-blur-sm pointer-events-none z-20">
                                     {partner.name}
                                  </div>
                                  <div className="w-full h-[80%] bg-gradient-to-t from-amber-900/40 to-amber-600/20 border border-amber-500/30 rounded-sm relative overflow-hidden backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all group-hover/blade:border-amber-500/60 group-hover/blade:shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                                      <div className="absolute bottom-0 w-full h-1 bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
                                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent animate-pulse"></div>
                                      {/* Data particles */}
                                      <div className="absolute w-0.5 h-1 bg-white opacity-50 bottom-2 left-1/2 animate-[fade-in_2s_infinite]"></div>
                                  </div>
                              </div>
                          ))}
                          
                          {/* Open Slots - Interactive */}
                          {[5, 6].map((slot) => (
                              <a
                                key={slot}
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 relative group/blade h-full flex flex-col justify-end cursor-pointer transition-all duration-300 hover:scale-105 block"
                              >
                                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/blade:opacity-100 transition-opacity text-[9px] text-green-400 whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-green-500/30 backdrop-blur-sm pointer-events-none z-20">
                                     Click to Apply
                                  </div>
                                  <div className="w-full h-full border border-dashed border-white/20 bg-white/[0.02] rounded-sm flex items-center justify-center relative overflow-hidden transition-colors group-hover/blade:bg-white/[0.05] group-hover/blade:border-green-500/30">
                                      <div className="absolute inset-0 opacity-0 group-hover/blade:opacity-100 bg-gradient-to-t from-green-500/10 to-transparent transition-opacity duration-500"></div>
                                      <span className="text-[8px] text-neutral-600 uppercase tracking-widest -rotate-90 whitespace-nowrap group-hover/blade:text-green-500 transition-colors">
                                          Open Slot
                                      </span>
                                  </div>
                              </a>
                          ))}
                      </div>
                  </div>
                  
                  {/* Bottom Status Bar */}
                  <div className="bg-black/60 p-3 flex justify-between items-center text-[9px] uppercase tracking-widest text-neutral-600 font-mono border-t border-white/5">
                      <span>Sys.Monitor_v2.1</span>
                      <span className="animate-pulse">Live Feed</span>
                  </div>
              </div>
          </TiltCard>
        </div>
      </div>
    </Section>
  );
};
