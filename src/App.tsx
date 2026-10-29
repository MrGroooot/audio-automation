import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { CoreSolutions } from './components/CoreSolutions';
import { InteractiveDemo } from './components/InteractiveDemo';
import { UseCases } from './components/UseCases';
import { HowItWorks } from './components/HowItWorks';
import { PlatformDashboard } from './components/PlatformDashboard';
import { BusinessBenefits } from './components/BusinessBenefits';
import { IntegrationsSection } from './components/IntegrationsSection';
import { SecuritySection } from './components/SecuritySection';
import { ImplementationProcess } from './components/ImplementationProcess';
import { FaqSection } from './components/FaqSection';
import { FinalConversion } from './components/FinalConversion';
import { DemoFormSection } from './components/DemoFormSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenDemo = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    const demoElement = document.getElementById('demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-electric-cyan selection:text-navy-950">
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section with Interactive Call Simulation Widget */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* Trust & Positioning Strip */}
        <TrustStrip />

        {/* Problem Section: The Automotive Calling Challenge */}
        <ProblemSection />

        {/* Core Solution: Inbound & Outbound Calling Architecture */}
        <CoreSolutions />

        {/* Interactive Conversational Demonstration */}
        <InteractiveDemo />

        {/* High Impact Automotive Use Cases */}
        <UseCases />

        {/* How It Works: 5-Step Operational Pipeline */}
        <HowItWorks />

        {/* Real-time Platform Dashboard & Call Analytics Preview */}
        <PlatformDashboard />

        {/* Business Benefits & Interactive ROI Calculator */}
        <BusinessBenefits />

        {/* Technical Integrations & Ecosystem Compatibility */}
        <IntegrationsSection />

        {/* Security, Privacy, Consent & Human Handover */}
        <SecuritySection />

        {/* Implementation Process & Milestone Blueprint */}
        <ImplementationProcess />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final Conversion Call-to-Action */}
        <FinalConversion 
          onOpenDemo={handleOpenDemo} 
          onOpenConsultation={handleOpenConsultation} 
        />

        {/* Demo Booking & Lead Generation Form (Backend Validated) */}
        <DemoFormSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenDemo={handleOpenDemo}
      />

      {/* Legal Review Modals (Draft Privacy & Terms) */}
      <LegalModals
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
};

export default App;
