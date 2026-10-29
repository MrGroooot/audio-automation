import React from 'react';
import { 
  Zap, 
  CalendarCheck, 
  Wrench, 
  PhoneMissed, 
  Building, 
  Megaphone, 
  MessageSquareCheck, 
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

export const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: Zap,
      title: 'New Lead Follow-Up',
      explanation: 'Initiate outbound calls to prospective buyers within minutes of an online vehicle enquiry. Engage shoppers while intent is peak to qualify budget, trim preferences, and purchase timeline.',
      outcome: 'Faster first response and higher lead-to-opportunity qualification rate.',
      category: 'Sales Pipeline'
    },
    {
      icon: CalendarCheck,
      title: 'Test-Drive Scheduling',
      explanation: 'Coordinate priority test drives directly during voice conversations, matching available vehicle models and advisor schedules. Send instant SMS/email confirmations and timely reminders.',
      outcome: 'Increased showroom appointment bookings and fewer no-shows through automated calendar sync.',
      category: 'Showroom Footfall'
    },
    {
      icon: Wrench,
      title: 'Service Reminders',
      explanation: 'Proactively notify car owners when maintenance, mileage milestones, or periodic safety inspections are due. Enable customers to reserve an open service bay without receptionist intervention.',
      outcome: 'Higher fixed-operations bay utilization and consistent aftersales customer retention.',
      category: 'Aftersales & Service'
    },
    {
      icon: PhoneMissed,
      title: 'Missed-Call Recovery',
      explanation: 'Automatically place authorized callbacks to customers whose calls were missed during peak dealership hours or weekends. Resolve their original enquiry before they call a competitor.',
      outcome: 'Recovers lost sales and service inquiries that would otherwise be abandoned.',
      category: 'Inbound Recovery'
    },
    {
      icon: Building,
      title: 'Showroom Visit Booking',
      explanation: 'Convert inbound digital queries into confirmed in-person showroom appointments with senior product specialists. Ensure high-intent car shoppers are welcomed with prepared vehicle inventory.',
      outcome: 'Organized showroom visitor flow and higher conversion rates for floor sales staff.',
      category: 'Showroom Management'
    },
    {
      icon: Megaphone,
      title: 'Promotional Campaign Calling',
      explanation: 'Conduct approved outbound outreach for seasonal promotions, new vehicle model launches, or trade-in events. Deliver consistent, verified promotional details across thousands of qualified contacts.',
      outcome: 'Rapid campaign coverage without pulling sales executives away from active floor deals.',
      category: 'Marketing Campaigns'
    },
    {
      icon: MessageSquareCheck,
      title: 'Customer Feedback Collection',
      explanation: 'Call customers shortly after a vehicle delivery or service visit to gauge satisfaction and capture structured feedback. Calculate accurate Net Promoter and CSAT metrics automatically.',
      outcome: 'Early detection of customer dissatisfaction and verifiable feedback for OEM audits.',
      category: 'Customer Experience'
    },
    {
      icon: AlertTriangle,
      title: 'Service Complaint Routing',
      explanation: 'Detect upset callers, vehicle breakdown distress, or complex service warranty disputes with real-time sentiment analysis. Immediately initiate a warm escalation to a service director.',
      outcome: 'Prevents customer escalation while ensuring urgent issues receive immediate human care.',
      category: 'Oversight & Escalation'
    }
  ];

  return (
    <section id="use-cases" className="py-20 md:py-28 relative bg-navy-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/30 mb-4">
            <TrendingUp className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              Automotive Workflows
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Impact Use Cases for Dealerships & Networks
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every dealership workflow is configured with strict business logic, approved inventory details, and instant human handover rules.
          </p>
        </div>

        {/* 8 Polished Use Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, index) => {
            const Icon = uc.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-electric-cyan/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group hover:shadow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-electric-cyan group-hover:bg-electric-blue group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                      {uc.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-electric-cyan transition-colors">
                    {uc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {uc.explanation}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                        Practical Outcome
                      </span>
                      <p className="text-xs text-slate-200 font-medium">
                        {uc.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Have a specialized dealership call process?{' '}
            <a href="#demo" className="text-electric-cyan font-semibold hover:underline">
              We can map and configure your custom call flows during onboarding &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
