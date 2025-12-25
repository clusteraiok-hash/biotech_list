import React from 'react';
import { Section } from '../Section';
import { Lock } from 'lucide-react';

export const WallOfSuccessSection: React.FC = () => {
  return (
    <Section id="wall-of-success" title="Track Record" subtitle="Wall of Success" className="border-t border-neutral-900 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
         <div className="p-12 md:p-16 rounded-2xl bg-gradient-to-b from-neutral-900/50 to-neutral-950/50 border border-white/5 relative overflow-hidden group">
            {/* Premium Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
            
            <Lock className="w-12 h-12 text-neutral-700 mx-auto mb-8" />
            
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Wall of Success (Without Promotion)</h3>
            
            <div className="h-px w-24 bg-neutral-800 mx-auto mb-8"></div>
            
            <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              AccessDeal does not publish case studies, logos, or public testimonials. 
              <br /><br />
              <span className="text-white">In private systems, reputation travels quietly. Visibility is optional. Credibility is not.</span>
            </p>
         </div>
      </div>
    </Section>
  );
};
