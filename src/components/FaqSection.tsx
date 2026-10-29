import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'Platform Fundamentals',
      question: 'What is an AI voice agent?',
      answer: 'An AI voice agent is an automated, speech-enabled conversational system that can understand natural spoken language, reason over approved dealership information, answer customer questions, and take real-time actions like booking appointments or qualifying leads over a phone call.'
    },
    {
      category: 'Capabilities',
      question: 'Can Voxaro handle both inbound and outbound calls?',
      answer: 'Yes. Inbound and outbound calling are both core platform capabilities. Voxaro can answer incoming customer calls 24/7 without hold times, as well as execute approved outbound calling queues for digital lead follow-ups, test-drive coordination, service reminders, and post-visit surveys.'
    },
    {
      category: 'Capabilities',
      question: 'Can it follow up on vehicle enquiries?',
      answer: 'Yes. When a prospective buyer submits an enquiry via your website, automotive portal, or marketing campaign, Voxaro can initiate an approved outbound call within minutes to verify intent, discuss preferred trims or delivery timing, and route qualified buyers to your sales desk.'
    },
    {
      category: 'Capabilities',
      question: 'Can it book test drives and service appointments?',
      answer: 'Yes. Voxaro can coordinate mutually agreeable time slots based on dealership availability rules and directly create appointment bookings, sending instant confirmation notices to the customer via SMS or email.'
    },
    {
      category: 'Oversight & Escalation',
      question: 'Can a human employee take over a call?',
      answer: 'Yes, seamlessly. Whenever a caller requests human assistance, expresses complex financing requirements, or asks questions outside the approved knowledge base, Voxaro initiates an immediate warm transfer to designated dealership staff with full context.'
    },
    {
      category: 'Technical Integration',
      question: 'Can it integrate with our CRM or Dealer Management System (DMS)?',
      answer: 'Voxaro is architected to integrate with client CRMs, DMS platforms, calendars, and telephony systems via modern REST APIs, webhooks, or scheduled batch file imports (CSV/SFTP), subject to technical compatibility and agreed project scope.'
    },
    {
      category: 'ROI & Business Value',
      question: 'How does it help reduce calling costs?',
      answer: 'By automating repetitive, high-frequency conversations—such as initial lead qualification, routine service reminders, and opening hour enquiries—Voxaro substantially lowers the operational cost per handled interaction and allows existing staff to focus on high-value showroom deals.'
    },
    {
      category: 'Capabilities',
      question: 'Can it collect customer feedback?',
      answer: 'Yes. Voxaro can conduct post-delivery or post-service follow-up calls to gather structured satisfaction ratings (NPS / CSAT) and capture verbatim feedback. Any negative sentiment or urgent complaints are immediately flagged for manager review.'
    },
    {
      category: 'Security & Compliance',
      question: 'How do you handle customer data and calling permissions?',
      answer: 'We only access customer records explicitly authorized for agreed campaigns. Voxaro enforces strict contact preferences, respects national and regional do-not-call (DNC) registries, includes required recording disclosures, and operates within approved calling hour windows.'
    },
    {
      category: 'Implementation',
      question: 'How long does implementation take?',
      answer: 'Deployment timelines vary based on integration complexity, custom call scenarios, and testing requirements. A typical rollout moves through discovery, configuration, test deployment (Version 1 pilot), and client approval before production launch.'
    },
    {
      category: 'Implementation',
      question: 'What information is required to get started?',
      answer: 'To configure your voice agent, we typically require approved dealership information (opening hours, locations, service policies, model guides), call workflow objectives, escalation contacts, and agreed data exchange formats.'
    },
    {
      category: 'Next Steps',
      question: 'How can we request a demo?',
      answer: 'You can request a tailored B2B consultation by submitting our demo booking form below. Our automotive automation team will review your dealership volume and arrange a walkthrough of live conversational scenarios.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-navy-900 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 mb-4">
            <HelpCircle className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Common Questions About Voxaro AI Calling
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to know about our automotive voice agents, integrations, privacy, and onboarding process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-navy-950/80 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-electric-cyan"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-electric-cyan hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-electric-cyan' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-850 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific technical or deployment question?</h4>
            <p className="text-xs text-slate-400">Our engineering and solutions team is ready to discuss your architecture.</p>
          </div>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shrink-0"
          >
            <span>Ask an Engineer</span>
            <ArrowRight className="w-3.5 h-3.5 text-electric-cyan" />
          </a>
        </div>

      </div>
    </section>
  );
};
