import React from 'react';
import { 
  Layers, 
  Database, 
  PhoneCall, 
  Calendar, 
  FileSpreadsheet, 
  BarChart, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Workflow
} from 'lucide-react';

export const IntegrationsSection: React.FC = () => {
  const categories = [
    {
      icon: Database,
      title: 'CRM Systems',
      desc: 'Synchronize inbound lead profiles, customer communication history, and sales stage milestones directly into your existing automotive CRM.',
      method: 'REST APIs & Webhooks'
    },
    {
      icon: Layers,
      title: 'Dealer Management Systems (DMS)',
      desc: 'Coordinate service appointment requests, maintenance intervals, and inventory availability with your dealership back-office system.',
      method: 'Structured Batch & API Connectors'
    },
    {
      icon: PhoneCall,
      title: 'Telephony Providers',
      desc: 'Connect with existing SIP trunks, VoIP infrastructure, or virtual DID numbers to answer incoming calls and place authorized callbacks.',
      method: 'SIP Trunking & WebRTC'
    },
    {
      icon: Calendar,
      title: 'Appointment Calendars',
      desc: 'Lock test-drive and showroom consultation time slots directly into advisor calendars, preventing double-bookings and scheduling conflicts.',
      method: 'CalDAV, Google, Outlook, Custom'
    },
    {
      icon: FileSpreadsheet,
      title: 'Customer & Lead Databases',
      desc: 'Support regular CSV, Excel, or SFTP batch uploads for seasonal promotional campaigns, lease expirations, and recall queues.',
      method: 'Secure SFTP & CSV Upload'
    },
    {
      icon: BarChart,
      title: 'Reporting & Analytics Tools',
      desc: 'Export structured call recordings, transcripts, sentiment ratings, and conversion metrics to internal business intelligence dashboards.',
      method: 'JSON Data Feeds & S3 Storage'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 mb-4">
            <Workflow className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              Ecosystem Connectivity
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed to Fit Your Existing Workflow
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Voxaro is architected to integrate with your existing dealership infrastructure, subject to technical compatibility and agreed project scope. No rip-and-replace required.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-electric-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                      {cat.method}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Configured per deployment scope</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Scope Transparency Box */}
        <div className="rounded-2xl p-6 bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <ShieldCheck className="w-4 h-4 text-electric-cyan" />
            <span>Implementation & Compatibility Notice</span>
          </div>
          <p className="leading-relaxed">
            Integration capabilities (including direct API sync, Webhooks, or secure CSV batch file imports) are evaluated during the discovery phase and confirmed in the project statement of work. Third-party trademarks and system names remain the property of their respective owners.
          </p>
        </div>

      </div>
    </section>
  );
};
