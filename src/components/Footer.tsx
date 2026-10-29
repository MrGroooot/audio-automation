import React from 'react';
import { PhoneCall, Mail, Shield, FileText, ArrowUp, ChevronRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms, onOpenDemo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-blue to-electric-cyan flex items-center justify-center p-0.5 shadow-glow-cyan">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <span className="text-electric-cyan font-mono font-black text-base">V</span>
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                VOXARO
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Enterprise B2B AI voice automation platform for automobile manufacturers, dealership groups, and service networks. Automating routine calls, accelerating lead follow-ups, and reducing call center costs.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-electric-cyan" />
                <span className="font-mono text-xs">Business Contact:</span>
                <a href="mailto:contact@voxaro.ai" className="text-electric-cyan hover:underline font-mono">
                  contact@voxaro.ai
                </a>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Domain & email configurable for enterprise client deployments.
              </p>
            </div>
          </div>

          {/* Col 2: Platform Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#solutions" className="hover:text-electric-cyan transition-colors">Inbound AI Calling</a></li>
              <li><a href="#solutions" className="hover:text-electric-cyan transition-colors">Outbound AI Campaigns</a></li>
              <li><a href="#how-it-works" className="hover:text-electric-cyan transition-colors">How It Works</a></li>
              <li><a href="#platform" className="hover:text-electric-cyan transition-colors">Reporting Dashboard</a></li>
              <li><a href="#calculator" className="hover:text-electric-cyan transition-colors">ROI Cost Calculator</a></li>
            </ul>
          </div>

          {/* Col 3: Automotive Use Cases */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Use Cases
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#use-cases" className="hover:text-electric-cyan transition-colors">New Lead Follow-Up</a></li>
              <li><a href="#use-cases" className="hover:text-electric-cyan transition-colors">Test-Drive Scheduling</a></li>
              <li><a href="#use-cases" className="hover:text-electric-cyan transition-colors">Service Bay Reminders</a></li>
              <li><a href="#use-cases" className="hover:text-electric-cyan transition-colors">Missed-Call Recovery</a></li>
              <li><a href="#use-cases" className="hover:text-electric-cyan transition-colors">Customer Feedback (CSAT)</a></li>
            </ul>
          </div>

          {/* Col 4: Enterprise & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-4">
              Governance & Support
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#faq" className="hover:text-electric-cyan transition-colors">Frequently Asked Questions</a></li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-electric-cyan transition-colors text-left">
                  Privacy Policy (Draft)
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-electric-cyan transition-colors text-left">
                  Terms of Service (Draft)
                </button>
              </li>
              <li>
                <button onClick={onOpenDemo} className="text-electric-cyan font-semibold hover:underline">
                  Request B2B Demo &rarr;
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Voxaro Technologies. All rights reserved. Built for automotive retail, wholesale, and service networks.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
