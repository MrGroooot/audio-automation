import React from 'react';
import { 
  Clock, 
  PhoneMissed, 
  FileSpreadsheet, 
  Moon, 
  BarChart3, 
  Repeat, 
  AlertCircle,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Sales Leads Wait Too Long for Callbacks',
      description: 'When potential car buyers submit an online enquiry, every minute of delay increases the chance they contact a competing dealership.',
      impact: 'Delayed lead response drops initial qualification rates and hurts showroom visits.'
    },
    {
      icon: PhoneMissed,
      title: 'Missed Calls Become Lost Sales Opportunities',
      description: 'Inbound callers ringing during peak showroom hours, weekends, or lunch breaks frequently encounter busy signals or voicemail.',
      impact: 'Unanswered calls often lead straight to the next dealership on search results.'
    },
    {
      icon: Repeat,
      title: 'Calling Teams Spend Hours on Repetitive Enquiries',
      description: 'Human sales advisors and service receptionists spend hours answering the exact same questions about opening hours, trim availability, and basic pricing.',
      impact: 'High-value advisors are distracted from in-person closing and relationship building.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Follow-ups Tracked in Ad-Hoc Spreadsheets',
      description: 'Manual follow-up queues spread across notebooks, spreadsheets, and scattered sticky notes result in leads falling through the cracks.',
      impact: 'Inconsistent follow-up cycles and missed second-attempt calls.'
    },
    {
      icon: Moon,
      title: 'Customers Contact Dealerships After Hours',
      description: 'Car shoppers browse inventory in the evening and over weekends when dealership phone desks are closed.',
      impact: 'High-intent after-hours buyers receive no immediate answer or appointment booking.'
    },
    {
      icon: BarChart3,
      title: 'Managers Lack Clear Calling Visibility',
      description: 'General managers and dealer principals rarely have structured data on how many calls were attempted, reasons for abandonment, or lead qualification outcomes.',
      impact: 'No accurate view of true call volume, customer sentiments, or follow-up conversion.'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-300">
              The Automotive Calling Bottleneck
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your Customers Are Calling.{' '}
            <span className="text-slate-400 font-medium block mt-1">
              Your Team Cannot Handle Every Conversation.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Automotive retail and service operations operate under intense calling pressure. Manual phone outreach is costly, difficult to scale uniformly, and leaves high-intent car shoppers waiting.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-electric-cyan group-hover:border-electric-cyan/40 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-slate-100">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2">
                    <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-800/40 shrink-0 mt-0.5">
                      Business Pain
                    </span>
                    <p className="text-xs text-slate-400 italic">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Banner to Solution */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              The Solution: Automate Routine Calls While Preserving Human Oversight
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Voxaro handles repetitive inbound queries and approved outbound calling queues, delivering warm, pre-qualified customers to your showroom and service team.
            </p>
          </div>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 shrink-0 transition-colors"
          >
            <span>See How Voxaro Solves This</span>
            <ArrowRight className="w-4 h-4 text-electric-cyan" />
          </a>
        </div>

      </div>
    </section>
  );
};
