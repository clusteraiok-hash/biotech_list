import React, { useState, useEffect } from 'react';
import { PrivacyPolicy, TermsOfService } from './components/Legal';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ModelSection } from './components/sections/ModelSection';
import { SectorsSection } from './components/sections/SectorsSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { WallOfSuccessSection } from './components/sections/WallOfSuccessSection';
import { EngagementSection } from './components/sections/EngagementSection';
import { QualificationSection } from './components/sections/QualificationSection';
import { Footer } from './components/layout/Footer';
import { PartnerModal } from './components/PartnerModal';
import { Partner } from './types';
import { useSecurityProtocols } from './hooks/useSecurityProtocols';

type ViewState = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [activePartnerModal, setActivePartnerModal] = useState<Partner | null>(null);

  // Initialize Security Protocols (Right-click disable, Keydown restrictions)
  useSecurityProtocols();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement> | null, href: string) => {
    if (e) e.preventDefault();
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleLegalNavigation = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => handleLegalNavigation('home')} />;
  }

  if (currentView === 'terms') {
    return <TermsOfService onBack={() => handleLegalNavigation('home')} />;
  }

  return (
    <div className="min-h-screen text-neutral-300 font-sans selection:bg-neutral-800 selection:text-white relative overflow-x-hidden">
      {/* Global Fixed Background with negative z-index to stay behind content */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-obsidian to-obsidian"></div>

      {/* Navigation */}
      <Navbar scrolled={scrolled} scrollToSection={scrollToSection} />

      {/* Main Content Sections */}
      <Hero />
      <ModelSection onPartnerSelect={setActivePartnerModal} />
      <SectorsSection />
      <PhilosophySection />
      <WallOfSuccessSection />
      <EngagementSection />
      <QualificationSection />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} handleLegalNavigation={handleLegalNavigation} />
      
      {/* Active Partner Details Modal */}
      {activePartnerModal && (
        <PartnerModal 
          partner={activePartnerModal} 
          onClose={() => setActivePartnerModal(null)} 
        />
      )}
    </div>
  );
};

export default App;
