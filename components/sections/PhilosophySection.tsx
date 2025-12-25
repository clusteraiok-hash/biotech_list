import React from 'react';
import { Section } from '../Section';
import { PHILOSOPHY_COMPARISON } from '../../constants';
import { Activity, Target } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';

export const PhilosophySection: React.FC = () => {
  return (
    <Section id="philosophy" title="A Different Model of Growth" subtitle="Philosophy">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Card 1: Volume Models (The "Standard") - Industrial/Cold feel */}
        <div className="relative p-8 md:p-10 rounded-2xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm overflow-hidden group hover:border-white/10 transition-colors duration-500">
           {/* Background Grid Pattern - Moving slightly */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
           
           {/* Subtle Scanline Animation */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[50%] w-full -translate-y-full animate-[shimmer_5s_infinite] pointer-events-none"></div>

           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8 opacity-60">
                 <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/5">
                   <Activity className="w-4 h-4 text-neutral-400" />
                 </div>
                 <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">Volume-Driven</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-neutral-400 mb-6 group-hover:text-neutral-300 transition-colors">
                {PHILOSOPHY_COMPARISON.traditional.title}
              </h3>
              
              <div className="h-px w-12 bg-neutral-800 mb-8"></div>

              <ul className="space-y-4">
                {PHILOSOPHY_COMPARISON.traditional.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-neutral-700 shrink-0 group-hover:bg-neutral-600 transition-colors"></div>
                    <span className="font-light tracking-wide leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Card 2: AccessDeal (The "Premium") - Alive/Organic/Gold */}
        <TiltCard className="h-full">
          <div className="relative h-full rounded-2xl p-[1px] overflow-hidden group shadow-2xl shadow-black/80">
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#451a03_50%,#d97706_100%)]" />
              <div className="relative h-full bg-[#080808] rounded-2xl p-8 md:p-10 overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-600/10 blur-[80px] rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_70%)]"></div>
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>

                  <div className="relative z-10">
                     <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                              <Target className="w-4 h-4 text-amber-500" />
                           </div>
                           <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold">Access Engineering</span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-amber-950/30 border border-amber-500/20 backdrop-blur-md relative overflow-hidden">
                           <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></span>
                           <span className="text-[9px] uppercase tracking-widest text-amber-200 relative z-10">Preferred</span>
                        </div>
                     </div>

                     <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 drop-shadow-lg">
                        {PHILOSOPHY_COMPARISON.accessDeal.title}
                     </h3>
                     <p className="text-neutral-500 text-[10px] uppercase tracking-widest mb-8 flex items-center gap-2">
                       <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                       Live Outcome Monitoring
                     </p>

                     <div className="h-px w-full bg-gradient-to-r from-amber-500/50 via-amber-900/20 to-transparent mb-8"></div>

                     <ul className="space-y-4">
                        {PHILOSOPHY_COMPARISON.accessDeal.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-neutral-200 group-hover:text-white transition-colors">
                            <div className="mt-1 relative flex items-center justify-center w-4 h-4 shrink-0">
                               <div className="absolute inset-0 bg-amber-500/40 rounded-full blur-[2px] animate-pulse"></div>
                               <div className="w-1.5 h-1.5 bg-amber-500 rounded-sm transform rotate-45 relative z-10"></div>
                            </div>
                            <span className="font-light tracking-wide leading-relaxed">{point}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
              </div>
          </div>
        </TiltCard>
      </div>
    </Section>
  );
};
