import React from 'react';
import { Play } from 'lucide-react';
import { BOOKING_URL } from '../../constants';
import { TiltCard } from '../ui/TiltCard';

export const Hero: React.FC = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24 md:pt-32 pb-8 z-10">
      <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center justify-center h-full w-full">
        
        {/* Badge - High Visibility & Active Effect */}
        <div className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-6 animate-fade-in shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-shadow duration-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] group hover:scale-105 transition-transform">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7f1d1d_50%,#ef4444_100%)]" />
          <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-obsidian px-6 py-2 backdrop-blur-3xl relative z-10 gap-3 border border-white/5">
             <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
             </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-100 font-semibold drop-shadow-md">Restricted Availability: 4/6 Active</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[0.9] tracking-tight drop-shadow-lg">
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-500">Private Access to</span>
          <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-white to-amber-100">High-Intent</span> <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500">Buyers.</span>
        </h1>

        {/* Premium Video & Description Group */}
        <div className="flex flex-col items-center max-w-6xl mx-auto mb-8 z-20 w-full">
          {/* 3D Tilt Video Container - Widened */}
          <TiltCard className="w-full max-w-5xl mb-6" glowColor="rgba(255, 255, 255, 0.1)">
             <div className="relative group cursor-pointer w-full rounded-xl overflow-hidden shadow-2xl">
                {/* Glowing Border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 via-neutral-800 to-white/10 opacity-70 blur-sm rounded-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-md"></div>
                
                {/* Video Content */}
                <div className="relative aspect-video bg-neutral-950 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Scanline overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none z-[2]"></div>
                    
                    {/* Play Button with Pulse */}
                    <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                       <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                         <Play className="w-6 h-6 text-white fill-white ml-1 opacity-80 group-hover:opacity-100" />
                       </div>
                       <div className="absolute inset-0 rounded-full border border-white/10 animate-[ping_2s_linear_infinite] opacity-50"></div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/50 z-[3]"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/50 z-[3]"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/50 z-[3]"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/50 z-[3]"></div>
                </div>
             </div>
          </TiltCard>

           <div className="text-center px-4 max-w-2xl mx-auto animate-fade-in relative z-10">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3">
                  This is not a lead generation service. <span className="text-white">This is controlled deal access.</span>
              </p>
             <p className="text-lg md:text-xl font-serif text-white leading-relaxed">
                We introduce partners to decision-makers who are already buying, hiring, or actively evaluating solutions.
             </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 z-20">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex overflow-hidden rounded-full p-[1px] group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#0a0a0a_50%,#22c55e_100%)] group-hover:animate-[spin_1.5s_linear_infinite]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-obsidian px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-3xl border border-white/10 transition-colors hover:bg-neutral-900 relative z-10">
              Private Access
            </span>
          </a>

          <div className="flex items-center gap-5 mt-1">
             <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-green-500/30 to-transparent hidden sm:block"></div>
             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-green-100/60 font-medium drop-shadow-[0_0_10px_rgba(34,197,94,0.2)]">
               Private B2B Connection
             </span>
             <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-green-500/30 to-transparent hidden sm:block"></div>
          </div>
        </div>
      </div>
    </header>
  );
};