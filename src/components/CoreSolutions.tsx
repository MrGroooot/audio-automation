import React, { useState } from 'react';
import { 
  PhoneIncoming, 
  PhoneOutgoing, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Bot, 
  Calendar, 
  Users, 
  Sparkles, 
  ChevronRight,
  Headphones,
  Check
} from 'lucide-react';

export const CoreSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inbound' | 'outbound'>('inbound');

  const inboundFeatures = [
    {
      title: 'Answer Routine Incoming Calls 24/7',
      desc: 'Pick up customer inquiries instantly without long hold times, busy tones, or unanswered voicemail queues.'
    },
    {
      title: 'Approved Vehicle & Dealership Information',
      desc: 'Provide verified details on vehicle trims, opening hours, showroom location, directions, and current inventory guidelines.'
    },
    {
      title: 'Capture Precise Customer Requirements',
      desc: 'Understand buyer intent, trade-in considerations, fuel or EV preferences, and budget ranges in natural spoken language.'
    },
    {
      title: 'Identify High-Intent Sales Opportunities',
      desc: 'Detect hot buying interest and immediately initiate scheduling or live transfer to an available showroom sales executive.'
    },
    {
      title: 'Schedule Supported Appointments',
      desc: 'Book test-drive slots, showroom consultations, and periodic maintenance drop-offs into integrated dealer calendars.'
    },
    {
      title: 'Guaranteed Human Handover Protocol',
      desc: 'Route customer complaints, out-of-scope technical questions, or complex pricing negotiations directly to designated dealership personnel.'
    }
  ];

  const outboundFeatures = [
    {
      title: 'Follow Up on New Sales Enquiries Instantly',
      desc: 'Initiate approved outbound outreach to digital leads within minutes of submission to capture buyer momentum while interest is peak.'
    },
    {
      title: 'Engage Approved Lead & Campaign Lists',
      desc: 'Contact targeted lists of previous inquiries, seasonal prospects, or lease-renewal cohorts with personalized, relevant context.'
    },
    {
      title: 'Post-Test-Drive & Showroom Follow-Ups',
      desc: 'Call prospects who visited the dealership to gauge impression, answer pending questions, and coordinate next steps.'
    },
    {
      title: 'Automated Periodic Service Reminders',
      desc: 'Proactively notify car owners when maintenance, tire inspection, or scheduled inspections are due and book service slots.'
    },
    {
      title: 'Missed-Call Recovery & Permitted Callbacks',
      desc: 'Automatically ring back callers whose calls were missed during peak showroom rushes, converting lost rings into conversations.'
    },
    {
      title: 'Structured Customer Feedback & CSAT Collection',
      desc: 'Gather post-purchase and post-service satisfaction feedback, flagging dissatisfied customers for immediate manager intervention.'
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 relative bg-navy-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/30 mb-4">
            <Bot className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              Complete Dual-Stream Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One AI Voice Platform for Customer Conversations
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Unlike simple chatbots or one-way dialing tools, Voxaro delivers a full-spectrum conversational voice engine built specifically for dealership workflows. Both inbound response and outbound calling are first-class platform capabilities.
          </p>

          {/* Interactive Capability Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-navy-950 border border-slate-800 mt-8 shadow-inner">
            <button
              onClick={() => setActiveTab('inbound')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'inbound'
                  ? 'bg-gradient-to-r from-electric-blue to-electric-cyan text-white shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PhoneIncoming className="w-4 h-4" />
              <span>1. Inbound AI Calling</span>
            </button>

            <button
              onClick={() => setActiveTab('outbound')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'outbound'
                  ? 'bg-gradient-to-r from-electric-blue to-electric-cyan text-white shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PhoneOutgoing className="w-4 h-4" />
              <span>2. Outbound AI Calling</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Inbound Calling Deep Dive */}
        {activeTab === 'inbound' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-electric-cyan uppercase tracking-wider">
                  Always-On Reception & Qualification
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Inbound AI Calling: Never Lose an Interested Customer
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  Provide immediate voice answers to incoming calls with zero wait times. Voxaro engages callers using approved dealership data, identifies high-intent leads, schedules showroom visits, and escalates to staff whenever needed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {inboundFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                    <div className="p-1 rounded bg-electric-blue/20 text-electric-cyan shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inbound Visual Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 bg-navy-950 border border-slate-700/80 shadow-card-dark relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <PhoneIncoming className="w-5 h-5 text-electric-cyan" />
                    <span className="font-bold text-sm text-white">Inbound Dealership Reception Flow</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Active Channel
                  </span>
                </div>

                <div className="py-5 space-y-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">1. Customer Dials In</span>
                    <span className="text-slate-200">Zero Ring Delay</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">2. Knowledge Base Query</span>
                    <span className="text-electric-cyan">Approved Dealership FAQs</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">3. Intent Identification</span>
                    <span className="text-emerald-400">Sales / Service / Parts</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">4. Booking / Escalation</span>
                    <span className="text-white font-semibold">Calendar Sync or Warm Transfer</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Safety & Human Oversight
                  </div>
                  <p className="text-[11px] text-slate-400">
                    If an inbound caller expresses distress, complex financing requests, or asks an out-of-bounds question, Voxaro immediately initiates a warm transfer to on-duty staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Outbound Calling Deep Dive */}
        {activeTab === 'outbound' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-electric-cyan uppercase tracking-wider">
                  Targeted Outreach & Follow-Up Automation
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Outbound AI Calling: Turn Leads into Showroom Footfall
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  Automate approved outgoing calls to follow up with digital leads within minutes, reconnect with missed callers, schedule maintenance reminders, and collect post-service feedback without overloading your staff.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {outboundFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                    <div className="p-1 rounded bg-electric-cyan/20 text-electric-cyan shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outbound Visual Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 bg-navy-950 border border-slate-700/80 shadow-card-dark relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <PhoneOutgoing className="w-5 h-5 text-electric-cyan" />
                    <span className="font-bold text-sm text-white">Outbound Campaign Execution Flow</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Consent-Verified
                  </span>
                </div>

                <div className="py-5 space-y-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">1. Approved Lead List Import</span>
                    <span className="text-slate-200">CRM / CSV / Webhook</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">2. Compliance & Calling Hours Check</span>
                    <span className="text-emerald-400">Permitted Time Window</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">3. Conversational Qualification</span>
                    <span className="text-electric-cyan">Dynamic Intent Analysis</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">4. Outcome Synchronization</span>
                    <span className="text-white font-semibold">Live CRM Record Update</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                    <Sparkles className="w-4 h-4 text-electric-cyan" />
                    Smart Calling Cadence
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Voxaro honors contact preferences and do-not-call requirements. If a lead requests a later callback, the system automatically schedules the attempt for the specified time slot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
