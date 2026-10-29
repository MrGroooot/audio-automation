import React, { useState } from 'react';
import { 
  Database, 
  Settings, 
  Bot, 
  CalendarCheck, 
  BarChart3, 
  ArrowRight, 
  Check, 
  Layers,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Connect the Data',
      subtitle: 'Seamless Data Ingestion',
      icon: Database,
      summary: 'Receive approved customer or lead information through supported uploads (CSV/Excel) or direct CRM and DMS integrations.',
      details: [
        'Ingest inbound web leads, showroom walk-ins, or scheduled service cohorts',
        'Verify customer consent preferences and suppression lists',
        'Map custom attributes such as vehicle model of interest, mileage, or prior purchase history'
      ],
      tag: 'Step 1: Input & Context'
    },
    {
      step: '02',
      title: 'Define the Objective',
      subtitle: 'Guardrails & Business Rules',
      icon: Settings,
      summary: 'Configure the call purpose, approved dealership information, conversation flow, permitted calling hours, and escalation thresholds.',
      details: [
        'Set exact dealership inventory parameters and verified promotional pricing',
        'Enforce local regulatory calling windows (e.g. 9:00 AM – 8:00 PM)',
        'Specify human transfer triggers for complex trade-in or financing inquiries'
      ],
      tag: 'Step 2: Configuration'
    },
    {
      step: '03',
      title: 'AI Handles the Conversation',
      subtitle: 'Natural Voice Engagement',
      icon: Bot,
      summary: 'The voice agent responds to the customer, asks relevant questions, addresses inquiries with verified data, and accurately identifies intent.',
      details: [
        'Ultra-low conversational latency (< 600ms) for natural dialog pacing',
        'Handles interruptions, customer clarifications, and model comparisons smoothly',
        'Never promises unconfirmed discounts or unverified vehicle availability'
      ],
      tag: 'Step 3: Execution'
    },
    {
      step: '04',
      title: 'Take the Next Action',
      subtitle: 'Autonomous Fulfillment',
      icon: CalendarCheck,
      summary: 'The workflow records a clear outcome, requests or locks an appointment, schedules an eligible callback, or warm-transfers to an employee.',
      details: [
        'Directly books test-drive or service bay slots into shared team calendars',
        'Dispatches instant SMS or email booking confirmation with dealership directions',
        'Alerts sales specialists or service advisors with structured call summaries'
      ],
      tag: 'Step 4: Action & Escalation'
    },
    {
      step: '05',
      title: 'Track Every Outcome',
      subtitle: 'Structured Intelligence',
      icon: BarChart3,
      summary: 'Present call outcomes, lead status, appointments, and follow-up activity in real time through the reporting dashboard.',
      details: [
        'Access searchable audio recordings and word-by-word transcripts',
        'Inspect conversion funnel from call connected to appointment completed',
        'Audit compliance, opt-out requests, and agent performance analytics'
      ],
      tag: 'Step 5: Reporting'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-navy-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 mb-4">
            <Layers className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              End-to-End Operational Lifecycle
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Customer List to Completed Follow-Up
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured five-step architecture that translates messy raw lead lists into booked showroom visits and completed service slots.
          </p>
        </div>

        {/* 5-Step Timeline Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-b from-navy-850 to-navy-900 border-electric-cyan shadow-glow-cyan'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-xs font-mono font-bold ${
                    isCurrent ? 'text-electric-cyan' : 'text-slate-500'
                  }`}>
                    {st.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${
                    isCurrent ? 'bg-electric-blue text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className={`text-xs sm:text-sm font-bold ${
                  isCurrent ? 'text-white' : 'text-slate-300'
                }`}>
                  {st.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Panel */}
        <div className="rounded-2xl p-6 sm:p-10 bg-navy-950 border border-slate-800 shadow-card-dark relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-electric-cyan text-xs font-mono">
                <span>{steps[activeStep].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Step {steps[activeStep].step} — {steps[activeStep].title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {steps[activeStep].summary}
              </p>

              <div className="pt-3 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Key Operational Safeguards:
                </span>
                {steps[activeStep].details.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <span>Next: Step {steps[(activeStep + 1) % steps.length].step}</span>
                  <ArrowRight className="w-4 h-4 text-electric-cyan" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Diagram */}
            <div className="lg:col-span-5">
              <div className="rounded-xl p-6 bg-slate-900/90 border border-slate-800 text-xs font-mono space-y-3">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                  <span className="font-bold text-white uppercase">Automotive Flow Pipeline</span>
                  <span className="text-emerald-400">Step {activeStep + 1} of 5</span>
                </div>

                <div className="space-y-2 pt-2">
                  {steps.map((s, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border flex items-center justify-between transition-all ${
                        idx === activeStep
                          ? 'bg-electric-blue/20 border-electric-cyan text-white shadow'
                          : idx < activeStep
                          ? 'bg-slate-950/80 border-slate-800 text-slate-400 line-through opacity-70'
                          : 'bg-slate-950/40 border-slate-850 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          idx === activeStep ? 'bg-electric-cyan text-navy-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {s.step}
                        </span>
                        <span>{s.title}</span>
                      </div>
                      <span className="text-[11px] opacity-80">
                        {idx === activeStep ? 'Processing' : idx < activeStep ? 'Completed' : 'Queued'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Consent & DNC Safe
                  </span>
                  <span>Latency: ~500ms</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
