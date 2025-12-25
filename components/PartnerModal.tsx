import React from 'react';
import { X, Zap, Database, Server, Globe, Lock, Clock, BarChart, Shield, TrendingUp, Activity } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import { Partner } from '../types';

interface PartnerModalProps {
  partner: Partner;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ partner, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop - lighter, not black */}
        <div 
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md transition-opacity animate-fade-in" 
            onClick={onClose}
        ></div>
        
        {/* Modal Card - Glassmorphism */}
        <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl max-w-lg w-full animate-fade-in overflow-hidden ring-1 ring-white/10">
            {/* Background Decor - Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                  src={partner.image} 
                  alt="Background" 
                  className="w-full h-2/3 object-cover opacity-30 mix-blend-overlay"
                />
                {/* Gradient from transparent to dark but not solid black, utilizing the glass effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90"></div>
            </div>

            <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 bg-black/20 backdrop-blur-md"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="relative z-10 p-8 md:p-10 space-y-8">
                {/* Header Section */}
                <div className="flex flex-col gap-3">
                     <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold uppercase tracking-widest text-amber-500 shadow-sm backdrop-blur-md">
                        <Zap className="w-3 h-3" />
                        <span>Live Engagement</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight drop-shadow-lg">{partner.name}</h3>
                    <p className="text-neutral-400 text-sm font-medium flex items-center gap-2 uppercase tracking-wide">
                       <Database className="w-3 h-3 text-neutral-500" />
                       {partner.type}
                    </p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-6 py-6 border-y border-white/5 bg-white/[0.02] -mx-8 px-8 md:-mx-10 md:px-10">
                    <div>
                        <p className="text-neutral-500 text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><Server className="w-3 h-3" /> System Node</p>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                            <p className="text-white font-mono text-sm tracking-tight">{partner.nodeId}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-neutral-500 text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><Globe className="w-3 h-3" /> Region</p>
                        <p className="text-white text-sm leading-tight">{partner.region}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-neutral-500 text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><Lock className="w-3 h-3" /> Access Level</p>
                        <p className="text-white text-sm font-medium">{partner.accessLevel}</p>
                    </div>
                    <div>
                        <p className="text-neutral-500 text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><Clock className="w-3 h-3" /> Duration</p>
                        <p className="text-white text-sm">{partner.duration}</p>
                    </div>
                     <div>
                        <p className="text-neutral-500 text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><BarChart className="w-3 h-3" /> Velocity</p>
                        <p className="text-amber-500 text-sm">{partner.velocity}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-neutral-500 text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><Shield className="w-3 h-3" /> Compliance</p>
                        <p className="text-neutral-300 text-sm">{partner.compliance}</p>
                    </div>
                </div>

                {/* Success Metrics - New Section */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                       <TrendingUp className="w-4 h-4 text-green-400" />
                       <span className="text-[10px] uppercase tracking-widest text-white font-bold">Impact Generated</span>
                    </div>
                    <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-white/5 rounded-xl p-5 relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Activity className="w-16 h-16 text-white" />
                       </div>
                       <div className="relative z-10">
                          <div className="flex items-baseline gap-2 mb-1">
                             <span className="text-3xl font-serif text-white">{partner.valueGenerated}</span>
                             <span className="text-[10px] uppercase tracking-wide text-neutral-400">{partner.successMetric}</span>
                          </div>
                          <p className="text-sm text-neutral-400 leading-relaxed font-light">
                             {partner.description}
                          </p>
                       </div>
                    </div>
                </div>
                
                <a 
                  href={BOOKING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 text-center rounded-lg border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  Private Access
                </a>
            </div>
        </div>
    </div>
  );
};
