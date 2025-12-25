import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const LegalLayout: React.FC<{ children: React.ReactNode; title: string; onBack: () => void }> = ({ children, title, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-neutral-800 selection:text-white py-12 px-6 md:px-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to AccessDeal
        </button>
        
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">{title}</h1>
        
        <div className="space-y-8 text-neutral-400 font-light leading-relaxed">
          {children}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center md:text-left">
           <p className="text-[10px] uppercase tracking-widest text-neutral-600">© 2025 AccessDeal. Legal Documentation.</p>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicy: React.FC<LegalPageProps> = ({ onBack }) => (
  <LegalLayout title="Privacy Policy" onBack={onBack}>
    <div className="space-y-6">
        <p><strong>Effective Date:</strong> January 1, 2025</p>
        <p>AccessDeal ("we", "us", or "our") is committed to protecting the confidentiality and privacy of our partners. This Privacy Policy outlines how we collect, use, and safeguard information within our private B2B network.</p>
        
        <h3 className="text-xl text-white font-serif mt-8 mb-4">1. Information Collection</h3>
        <p>We collect information strictly for the purpose of facilitating B2B introductions and assessing engagement eligibility. This includes company operational data, strategic goals, and contact information of key stakeholders.</p>

        <h3 className="text-xl text-white font-serif mt-8 mb-4">2. Private Network Usage</h3>
        <p>AccessDeal operates as a closed environment. Partner information is never published publicly, indexed by search engines, or shared with third-party marketers. Data is shared exclusively with qualified counterparties when a potential strategic alignment is identified.</p>

        <h3 className="text-xl text-white font-serif mt-8 mb-4">3. Data Security</h3>
        <p>We employ enterprise-grade security measures to protect proprietary information. Access to partner data is restricted to AccessDeal personnel and relevant decision-makers within the network.</p>

        <h3 className="text-xl text-white font-serif mt-8 mb-4">4. Contact</h3>
        <p>For privacy-related inquiries, please contact <a href="mailto:info@accessdeal.in" className="text-white hover:underline">info@accessdeal.in</a>.</p>
    </div>
  </LegalLayout>
);

export const TermsOfService: React.FC<LegalPageProps> = ({ onBack }) => (
  <LegalLayout title="Terms of Service" onBack={onBack}>
     <div className="space-y-6">
        <p><strong>Last Updated:</strong> January 1, 2025</p>
        <p>By applying for or engaging with AccessDeal, you agree to the following Terms of Service. These terms govern the relationship between AccessDeal and its partners.</p>
        
        <h3 className="text-xl text-white font-serif mt-8 mb-4">1. Service Scope</h3>
        <p>AccessDeal provides strategic B2B introductions. We are not a broker, agent, or sales representative. We do not guarantee specific commercial outcomes, although we commit to providing qualified access as defined in our engagement agreements.</p>

        <h3 className="text-xl text-white font-serif mt-8 mb-4">2. Eligibility & Acceptance</h3>
        <p>AccessDeal reserves the right to accept or decline any application at its sole discretion. Eligibility is based on operational maturity, sector alignment, and current network capacity.</p>

        <h3 className="text-xl text-white font-serif mt-8 mb-4">3. Confidentiality</h3>
        <p>Partners agree to maintain the confidentiality of introductions made through AccessDeal. Unauthorized disclosure of network relationships or contact details is strictly prohibited.</p>

        <h3 className="text-xl text-white font-serif mt-8 mb-4">4. Fees & Payments</h3>
        <p>Engagement fees are non-refundable except where explicitly stated in a specific performance guarantee. Payments are for access infrastructure and network facilitation.</p>
        
        <h3 className="text-xl text-white font-serif mt-8 mb-4">5. Intellectual Property</h3>
        <p>All methodologies, network structures, and content provided by AccessDeal remain the proprietary property of AccessDeal.</p>
        
        <h3 className="text-xl text-white font-serif mt-8 mb-4">6. Contact</h3>
        <p>For inquiries regarding these terms, please contact <a href="mailto:info@accessdeal.in" className="text-white hover:underline">info@accessdeal.in</a>.</p>
    </div>
  </LegalLayout>
);