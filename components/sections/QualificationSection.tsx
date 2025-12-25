import React from 'react';
import { BOOKING_URL } from '../../constants';
import { Fingerprint, ChevronRight, Lock } from 'lucide-react';

export const QualificationSection: React.FC = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-2xl bg-[#080808] border border-white/10 p-10 md:p-12 text-center group shadow-2xl">
                
                {/* Animated Background Mesh */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50"></div>
                
                {/* Subtle spotlight from top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-amber-500/5 blur-[80px] pointer-events-none rounded-full"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    
                    {/* Icon Badge */}
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse"></div>
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-amber-500/30 transition-colors duration-500">
                            <Fingerprint className="w-8 h-8 text-amber-500 opacity-90" />
                            <div className="absolute -bottom-1 -right-1 bg-neutral-900 rounded-full p-1 border border-white/10">
                                <Lock className="w-2.5 h-2.5 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Title Group */}
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 tracking-tight drop-shadow-2xl">
                        Qualification <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600 italic">Protocol</span>
                    </h2>
                    
                    <div className="flex items-center justify-center gap-4 mb-8 w-full">
                       <div className="h-px w-8 md:w-32 bg-gradient-to-r from-transparent to-amber-900/50"></div>
                       <div className="px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-[9px] font-bold uppercase tracking-widest text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                          Restricted Access Window
                       </div>
                       <div className="h-px w-8 md:w-32 bg-gradient-to-l from-transparent to-amber-900/50"></div>
                    </div>

                    <p className="text-base text-neutral-400 font-light max-w-lg mx-auto mb-8 leading-relaxed">
                        We strictly limit our network to <span className="text-white font-medium border-b border-white/20 pb-0.5">6 strategic partners</span> annually. 
                        Verify your alignment before the allocation closes.
                    </p>

                    {/* Premium Button */}
                    <a 
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden rounded-lg bg-neutral-950 border border-amber-500/40 transition-all duration-500 hover:border-amber-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]"
                    >
                        {/* Button Background Effects */}
                        <span className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                        
                        {/* Animated Scanline inside button */}
                        <span className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-amber-500/20 to-transparent transform skew-x-12 transition-all duration-1000 group-hover/btn:left-[200%]"></span>

                        <div className="relative flex items-center gap-3">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-amber-500 group-hover/btn:text-amber-400 transition-colors drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                                Initiate Access Protocol
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-amber-500 transform group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                    </a>

                    {/* Status Text */}
                    <div className="mt-8 flex items-center gap-6 opacity-60">
                       <p className="text-[9px] uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
                          System Status: Active
                       </p>
                       <p className="text-[9px] uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span>
                          Encryption: 256-bit
                       </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};