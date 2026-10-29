import React from 'react';
import { 
  Compass, 
  FileText, 
  Sliders, 
  FlaskConical, 
  CheckCircle2, 
  Rocket, 
  CreditCard,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export const ImplementationProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Workflow Assessment',
      icon: Compass,
      desc: 'We map your existing calling processes, identify repetitive inbound and outbound workflows suitable for automation, and define success metrics.'
    },
    {
      number: '02',
      title: 'Proposal & Scope Agreement',
      icon: FileText,
      desc: 'We confirm the agreed project scope, technical integrations, custom call scripts, timeline milestones, and mutual responsibilities.'
    },
    {
      number: '03',
      title: 'Configuration & Integration Planning',
      icon: Sliders,
      desc: 'We ingest your approved vehicle information, dealership FAQs, calling schedules, CRM fields, and human escalation rules.'
    },
    {
      number: '04',
      title: 'Test Deployment & Version 1 Review',
      icon: FlaskConical,
      desc: 'We deploy an interactive Version 1 pilot on test phone numbers for your sales and service leadership to evaluate conversation quality.'
    },
    {
      number: '05',
      title: 'Client Testing & Refinement',
      icon: CheckCircle2,
      desc: 'Your internal team conducts test calls, refines responses, fine-tunes vehicle terminology, and provides formal sign-off.'
    },
    {
      number: '06',
      title: 'Production Deployment & Support',
      icon: Rocket,
      desc: 'Live launch across agreed phone lines, with ongoing monitoring, reporting dashboard access, and agreed technical support.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/30 mb-4">
            <Rocket className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              Client Onboarding Roadmap
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Agreement to Production Launch
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured, collaborative implementation process ensuring your AI voice agents are thoroughly trained, tested, and aligned with dealership guidelines before going live.
          </p>
        </div>

        {/* 6 Onboarding Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-electric-cyan px-2.5 py-1 rounded bg-slate-800 border border-slate-700">
                      Step {s.number}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-400 group-hover:text-electric-cyan transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proposed Milestone Schedule (Example - Prompt Section M) */}
        <div className="rounded-3xl p-6 sm:p-8 bg-navy-900 border border-slate-800 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-electric-cyan" />
                <h3 className="text-lg font-bold text-white">
                  Proposed Milestone Structure (Configurable Example)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Transparent milestone-based delivery subject to mutual agreement during formal quotation.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
              Total = 100%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-2xl font-black text-electric-cyan font-mono">25%</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-1">
                Milestone 1: Kickoff
              </h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Payable after proposal signing & discovery kickoff
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-2xl font-black text-electric-blue font-mono">35%</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-1">
                Milestone 2: Version 1 Pilot
              </h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Payable upon test deployment & internal team review
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <span className="text-2xl font-black text-emerald-400 font-mono">40%</span>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-1">
                Milestone 3: Production
              </h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Payable upon client approval & live production launch
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-start gap-2 text-[11px] text-slate-400">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <p>
              *This payment schedule represents a proposed example subject to agreement in the final client statement of work. Actual timelines, milestones, and commercial terms are tailored to each dealership or OEM network’s scope.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
