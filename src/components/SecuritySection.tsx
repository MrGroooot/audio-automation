import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  PhoneOff, 
  FileCheck, 
  Lock, 
  Headphones, 
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      icon: Lock,
      title: 'Approved Use of Customer Data',
      desc: 'Voxaro only accesses customer records explicitly authorized by your dealership for defined outreach campaigns, with encrypted storage and access-controlled endpoints.'
    },
    {
      icon: PhoneOff,
      title: 'Respect for Opt-Outs & DNC Rules',
      desc: 'Automatic real-time suppression lists honor customer contact preferences and applicable national or regional do-not-call requirements.'
    },
    {
      icon: FileCheck,
      title: 'Consent & Call-Recording Practices',
      desc: 'Calls announce AI identity and record consent disclosures where required by applicable telecommunications laws, maintaining transparent audio logging.'
    },
    {
      icon: Headphones,
      title: 'Clear Escalation to Human Staff',
      desc: 'The AI never traps customers in a loop. When a caller requests a representative, the call is transferred to an on-duty staff member with context preserved.'
    },
    {
      icon: AlertTriangle,
      title: 'Human Review for Complaints & Safety',
      desc: 'Safety-related concerns, vehicle defect reports, and customer disputes are immediately tagged for prompt human supervisor intervention.'
    },
    {
      icon: UserCheck,
      title: 'Configurable Calling Windows',
      desc: 'Enforce strict calling hours (e.g., no outbound calls before 9:00 AM or after 8:00 PM local customer time) to protect dealership reputation.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-900 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Enterprise Governance
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trust, Privacy & Human Handover
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Enterprise automotive calling requires strict adherence to customer permissions, verified data governance, and reliable human supervision.
          </p>
        </div>

        {/* 6 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Enforced at platform runtime</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible AI Disclaimer Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-4xl mx-auto text-xs text-slate-400 space-y-2">
          <h4 className="font-bold text-slate-200 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-electric-cyan" />
            <span>Our Commitment to Responsible Automotive AI</span>
          </h4>
          <p className="leading-relaxed">
            We do not claim that AI eliminates every human role. We position Voxaro as a tool to automate suitable repetitive calling tasks, freeing human professionals to focus on high-value sales, test drives, and customer relationships. All client deployments adhere to agreed security specifications and verified regulatory protocols.
          </p>
        </div>

      </div>
    </section>
  );
};
