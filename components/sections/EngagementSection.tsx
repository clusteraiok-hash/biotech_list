import React from 'react';
import { Section } from '../Section';
import { Shield, Check, AlertCircle } from 'lucide-react';
import { BOOKING_URL } from '../../constants';

export const EngagementSection: React.FC = () => {
  return (
    <Section id="engagement" className="relative overflow-hidden pb-4 md:pb-6 pt-36 md:pt-48">
      {/* Premium Background for Engagement Section */}
      <div className="absolute inset-0 -z-10 bg-neutral-950">
         {/* Deep Spotlight */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[120%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/30 via-neutral-950/80 to-neutral-950 pointer-events-none"></div>
         {/* Subtle Noise Texture Simulation via Gradient */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] opacity-80"></div>
         {/* Tech Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Intro Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Private Engagement Badge - Moved inside for better spacing control */}
          <div className="inline-flex mb-6 relative group">
              {/* Subtle Glow Behind */}
              <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Badge Container */}
              <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                 {/* Animated Gradient Border */}
                 <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#78350f_50%,#fbbf24_100%)]" />
                 
                 {/* Badge Content */}
                 <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-950 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-amber-500 backdrop-blur-3xl shadow-[inset_0_0_10px_rgba(251,191,36,0.1)]">
                   Private Engagement
                 </span>
              </div>
          </div>
        </div>

        {/* Performance Guarantee - Redesigned & Aligned - ULTRA PREMIUM */}
        <div className="mb-8 max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl bg-neutral-900/50 backdrop-blur-sm">
            {/* Luxurious Dark Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-[#0a0a0a] to-black z-0"></div>
            
            {/* Subtle Amber Glow Top Right */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Content Z-Index 10 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-white mb-2 shadow-sm">
                  <Shield className="w-3 h-3 text-amber-500" />
                  <span>Firm Commitment</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white drop-shadow-md">
                  The 6-Month Performance Guarantee
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Every engagement is backed by our outcome accountability model. We guarantee <strong className="text-white">five high-quality, decision-maker introductions</strong> within six months. If alignment is not met, we continue working at no additional cost until it is.
                </p>
              </div>
              
              {/* Visual Stats/Graphics */}
              <div className="flex gap-6 shrink-0 justify-center md:justify-end w-full md:w-auto">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center min-w-[120px] md:min-w-[140px] shadow-inner shadow-white/5 transition-transform hover:scale-105">
                   <span className="block text-4xl font-serif text-white mb-1">6</span>
                   <span className="text-[10px] uppercase tracking-widest text-neutral-500">Months</span>
                </div>
                 <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-center min-w-[120px] md:min-w-[140px] shadow-inner shadow-white/5 transition-transform hover:scale-105">
                   <span className="block text-4xl font-serif text-white mb-1">5</span>
                   <span className="text-[10px] uppercase tracking-widest text-neutral-500">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Monthly Card - Now with Effect */}
          <div className="relative group rounded-2xl p-[1px] overflow-hidden">
            {/* Silver/White Rotation Effect */}
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#737373_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#404040_50%,#171717_100%)] opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            
            <div className="relative h-full bg-obsidian rounded-2xl p-10 flex flex-col backdrop-blur-xl border border-white/5">
              <div className="mb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  Flexible Access
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif text-white">$12,000</span>
                  <span className="text-neutral-500">/ mo</span>
                </div>
                <p className="text-xs text-neutral-500 mt-3 font-light">Billed monthly. Cancel anytime.</p>
              </div>
              
              <div className="h-px w-full bg-white/5 mb-8"></div>

              <ul className="space-y-5 mb-10 flex-1">
                 <li className="flex items-start gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span><strong>Performance Guarantee</strong> Included</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>Monthly Strategy Reviews</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>Direct Decision-Maker Intros</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>Standard Market Coverage</span>
                </li>
              </ul>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 border border-neutral-700 bg-neutral-900/50 text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-widest text-xs font-semibold rounded-lg shadow-lg hover:shadow-white/10 text-center block"
              >
                Select Monthly
              </a>
            </div>
          </div>

          {/* Annual Card - Ultra Premium */}
          <div className="relative group rounded-2xl p-[1px] overflow-hidden shadow-2xl shadow-black/50 transform md:-translate-y-4">
            {/* Gold Rotation Effect */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#b45309_50%,#fbbf24_100%)]" />
            <div className="relative h-full bg-obsidian rounded-2xl p-10 flex flex-col backdrop-blur-xl border border-white/5">
              
              <div className="absolute top-0 right-0 p-6">
                 <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b] animate-pulse"></div>
              </div>

              <div className="mb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-4">
                  Priority Partner
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif text-white">$110,000</span>
                  <span className="text-neutral-500">/ yr</span>
                </div>
                <p className="text-xs text-amber-500/80 mt-3 font-medium">Save $34,000 annually</p>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-amber-900/50 to-transparent mb-8"></div>

              <ul className="space-y-5 mb-10 flex-1">
                <li className="flex items-start gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Performance Guarantee</strong> Included</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Priority</strong> Deal Flow & Matching</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Extended Global Coverage</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Dedicated Relationship Strategist</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Early Access to New Markets</span>
                </li>
              </ul>
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-amber-200 to-amber-100 text-black hover:from-white hover:to-white transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] text-center block"
              >
                Apply for Annual
              </a>
            </div>
          </div>
        </div>
        
        {/* High Visibility Disclaimers - Removed border-t and pt-8 */}
        <div className="mt-8 text-center space-y-4">
           <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-[11px] uppercase tracking-widest text-white font-medium flex items-center gap-2">
               <AlertCircle className="w-3 h-3 text-red-500" />
               AccessDeal operates a selective review process.
            </p>
            <p className="text-[11px] uppercase tracking-widest text-neutral-400">
              Meeting invitations are extended only where strategic alignment exists.
            </p>
           </div>
        </div>
      </div>
    </Section>
  );
};