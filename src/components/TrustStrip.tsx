import React from 'react';
import { Factory, Building2, Store, Wrench, Shield, CheckCircle } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const segments = [
    {
      title: 'Automobile Manufacturers (OEMs)',
      desc: 'Centralized campaign outreach, launch previews, dealer network routing',
      icon: Factory,
      metric: 'National Scale'
    },
    {
      title: 'Dealership Groups',
      desc: 'Multi-store lead follow-ups, consolidated reporting, unified scheduling',
      icon: Building2,
      metric: 'Multi-Location'
    },
    {
      title: 'Individual Dealerships',
      desc: 'Instant web enquiry response, test-drive booking, missed call recovery',
      icon: Store,
      metric: 'Showroom Ready'
    },
    {
      title: 'Service & Workshop Networks',
      desc: 'Automated periodic service reminders, bay bookings, status queries',
      icon: Wrench,
      metric: 'Service Focused'
    }
  ];

  return (
    <section className="border-y border-slate-800/80 bg-navy-900/60 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="text-center mb-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400">
            Tailored Industry Architecture
          </span>
          <h2 className="text-lg md:text-xl font-bold text-white mt-1">
            Engineered Specifically for the Automotive Ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {segments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-all hover:bg-slate-900/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-electric-cyan group-hover:bg-electric-blue/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/50">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-electric-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Configured to dealership workflow</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
