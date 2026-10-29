import React, { useState } from 'react';
import { 
  Bot, 
  User, 
  Calendar, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowRight,
  ShieldAlert,
  Car,
  Wrench,
  ThumbsUp,
  History,
  TrendingUp,
  Clock
} from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  category: string;
  icon: any;
  callDirection: 'Inbound' | 'Outbound';
  leadDetails: {
    name: string;
    vehicle: string;
    source: string;
  };
  dialogue: Array<{
    speaker: 'ai' | 'customer';
    label: string;
    text: string;
    time: string;
  }>;
  outcomes: {
    qualification: string;
    actionTaken: string;
    calendarStatus: string;
    crmEvent: string;
    assignedStaff: string;
  };
  keyInsights: string[];
}

export const InteractiveDemo: React.FC = () => {
  const scenarios: Scenario[] = [
    {
      id: 'test-drive',
      name: 'Test-Drive Booking',
      category: 'Sales Conversion',
      icon: Car,
      callDirection: 'Outbound',
      leadDetails: {
        name: 'David Reynolds',
        vehicle: 'All-New EV Crossover (Long Range)',
        source: 'Website Configurator Submission'
      },
      dialogue: [
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Hello David, I’m calling on behalf of Metro Apex Automotive regarding your online enquiry for the new EV Crossover. Would you like to schedule a test drive this week?',
          time: '0:02'
        },
        {
          speaker: 'customer',
          label: 'Customer (David)',
          text: 'Yes, absolutely. Saturday morning around 11:00 AM would work best for me if you have an AWD model available.',
          time: '0:09'
        },
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'We do have the Long-Range AWD edition available. I can confirm your priority test drive for Saturday at 11:00 AM at the West End location. Should I send confirmation to your mobile?',
          time: '0:18'
        },
        {
          speaker: 'customer',
          label: 'Customer (David)',
          text: 'That sounds perfect, please do.',
          time: '0:24'
        },
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'All set! Confirmation sent via SMS with directions and your specialist contact. We look forward to seeing you Saturday, David!',
          time: '0:30'
        }
      ],
      outcomes: {
        qualification: 'High Intent (Score 94/100)',
        actionTaken: 'Test Drive Confirmed & Locked',
        calendarStatus: 'Saturday 11:00 AM (West End Showroom)',
        crmEvent: 'Lead Stage updated to: "Test Drive Scheduled"',
        assignedStaff: 'Marcus Vance (Senior EV Specialist)'
      },
      keyInsights: [
        'Instant outreach within 3 minutes of web form submission',
        'Specific vehicle trim (AWD Long Range) verified before booking',
        'Automatic SMS confirmation trigger to caller'
      ]
    },
    {
      id: 'vehicle-enquiry',
      name: 'New Vehicle Enquiry',
      category: 'Inbound Reception',
      icon: Sparkles,
      callDirection: 'Inbound',
      leadDetails: {
        name: 'Amanda Clark',
        vehicle: 'Executive Sedan 2026',
        source: 'Google Search Click-to-Call'
      },
      dialogue: [
        {
          speaker: 'customer',
          label: 'Customer (Amanda)',
          text: 'Hi there, I’m looking at your executive sedans and wanted to know if you currently have zero-percent APR finance promotions running?',
          time: '0:03'
        },
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Hello! Thanks for calling Apex Dealership. Yes, our manufacturer has a 0% APR program on select 2026 executive sedan trims through the end of this month on 36-month terms.',
          time: '0:12'
        },
        {
          speaker: 'customer',
          label: 'Customer (Amanda)',
          text: 'Great! Do you have the Glacier White colour in stock right now?',
          time: '0:19'
        },
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Yes, we have one Glacier White in our showroom inventory today. Would you like me to reserve a VIP consultation slot today at 4:30 PM with our finance specialist?',
          time: '0:27'
        },
        {
          speaker: 'customer',
          label: 'Customer (Amanda)',
          text: 'Yes please, 4:30 PM works. My name is Amanda Clark.',
          time: '0:33'
        }
      ],
      outcomes: {
        qualification: 'Immediate Buying Window (7-14 Days)',
        actionTaken: 'VIP Showroom Consultation Reserved',
        calendarStatus: 'Today at 4:30 PM',
        crmEvent: 'New Inbound Lead Created & Tagged "Finance 0% Promo"',
        assignedStaff: 'Rachel Lin (Client Advisor)'
      },
      keyInsights: [
        'Answered after-hours promo query using approved guidelines',
        'Verified live inventory status without putting caller on hold',
        'Booked same-day showroom consultation'
      ]
    },
    {
      id: 'service-reminder',
      name: 'Service Reminder',
      category: 'Fixed Ops & Maintenance',
      icon: Wrench,
      callDirection: 'Outbound',
      leadDetails: {
        name: 'Robert Thornton',
        vehicle: '2023 Turbo SUV (Mileage: 29,800 km)',
        source: 'DMS Service Due Trigger'
      },
      dialogue: [
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Good afternoon, Robert. I’m calling from Apex Motors Service Centre. Your 2023 SUV is due for its recommended 30,000-kilometre scheduled service. Would you like to schedule an appointment this week?',
          time: '0:04'
        },
        {
          speaker: 'customer',
          label: 'Customer (Robert)',
          text: 'Thanks for calling, yes. Does the 30k service include brake fluid replacement, and do you have a courtesy vehicle?',
          time: '0:12'
        },
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Yes, full fluid inspection, synthetic oil, filter replacement, and multipoint checks are included. We can reserve a complimentary loaner vehicle for Thursday at 8:00 AM.',
          time: '0:22'
        },
        {
          speaker: 'customer',
          label: 'Customer (Robert)',
          text: 'Thursday 8:00 AM with the loaner works great. Please book it.',
          time: '0:28'
        }
      ],
      outcomes: {
        qualification: 'Existing Loyal Owner • Maintenance Due',
        actionTaken: 'Service Bay & Loaner Vehicle Reserved',
        calendarStatus: 'Thursday 8:00 AM (Service Bay #4)',
        crmEvent: 'DMS Service Job Order Pre-populated',
        assignedStaff: 'Service Reception Bay Team'
      },
      keyInsights: [
        'Automated outreach based on DMS maintenance schedule intervals',
        'Clarified service scope and confirmed loaner vehicle policy',
        'Fills mid-week service bay capacity without receptionist manual calling'
      ]
    },
    {
      id: 'lead-followup',
      name: 'Sales Lead Follow-Up',
      category: 'Pipeline Reactivation',
      icon: TrendingUp,
      callDirection: 'Outbound',
      leadDetails: {
        name: 'Jessica Gomez',
        vehicle: 'Compact Urban Crossover',
        source: 'Third-Party Auto Marketplace Lead'
      },
      dialogue: [
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Hi Jessica, this is Voxaro calling on behalf of Apex Automotive. We received your price enquiry on the Compact Urban Crossover. Are you still actively looking for a vehicle?',
          time: '0:03'
        },
        {
          speaker: 'customer',
          label: 'Customer (Jessica)',
          text: 'Yes, but I need to understand what trade-in allowance I can get for my 2019 hatchback before I proceed.',
          time: '0:11'
        },
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Understood! We offer guaranteed instant appraisal on trade-ins. I can have our senior valuation manager call you in 15 minutes, or we can schedule an in-person appraisal today.',
          time: '0:20'
        },
        {
          speaker: 'customer',
          label: 'Customer (Jessica)',
          text: 'Have them call me in 15 minutes on this number, that would be wonderful.',
          time: '0:26'
        }
      ],
      outcomes: {
        qualification: 'Trade-in Buyer • Urgent Intent',
        actionTaken: 'Immediate 15-Minute Human Callback Scheduled',
        calendarStatus: 'Callback Queued for 2:45 PM Today',
        crmEvent: 'Lead Tagged: "Trade-In Appraisal Required"',
        assignedStaff: 'Carlos Mendez (Used Vehicle / Appraisal Desk)'
      },
      keyInsights: [
        'Rapid qualification of trade-in condition and buyer blocker',
        'Scheduled tight callback window within 15 minutes',
        'Seamless routing to appraisal manager with full conversation notes'
      ]
    },
    {
      id: 'customer-feedback',
      name: 'Customer Feedback & CSAT',
      category: 'Customer Experience',
      icon: ThumbsUp,
      callDirection: 'Outbound',
      leadDetails: {
        name: 'Brian Patel',
        vehicle: 'Delivered: Hybrid Sedan (3 days ago)',
        source: 'Post-Delivery CRM Milestone'
      },
      dialogue: [
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Hello Brian, calling from Apex Dealership customer care. Congratulations on your new Hybrid Sedan! How has your first week of driving been so far?',
          time: '0:03'
        },
        {
          speaker: 'customer',
          label: 'Customer (Brian)',
          text: 'The car drives beautifully! I did have one quick question about pairing my phone with the wireless navigation system, though.',
          time: '0:12'
        },
        {
          speaker: 'ai',
          label: 'Voxaro AI Agent',
          text: 'Glad to hear you love the car, Brian! For phone pairing, I can send a 60-second video walkthrough to your WhatsApp, or have our tech concierge assist you right away.',
          time: '0:22'
        },
        {
          speaker: 'customer',
          label: 'Customer (Brian)',
          text: 'The WhatsApp video guide would be fantastic, thanks!',
          time: '0:27'
        }
      ],
      outcomes: {
        qualification: 'Positive CSAT (5/5) • Minor Tech Guidance',
        actionTaken: 'Knowledge Base Video Dispatched via SMS/WhatsApp',
        calendarStatus: 'No Appointment Required (Resolved)',
        crmEvent: 'CSAT Logged: 10/10 Promoter • Follow-up Completed',
        assignedStaff: 'Customer Experience Team'
      },
      keyInsights: [
        'Post-delivery touchpoint reinforces positive dealership sentiment',
        'Resolved tech query without consuming technician desk time',
        'Captured verified CSAT score for dealership records'
      ]
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('test-drive');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleSpeakDialogue = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isAudioPlaying) {
      window.speechSynthesis.cancel();
      setIsAudioPlaying(false);
      return;
    }

    setIsAudioPlaying(true);
    let index = 0;

    const playNext = () => {
      if (index >= currentScenario.dialogue.length) {
        setIsAudioPlaying(false);
        return;
      }
      const item = currentScenario.dialogue[index];
      const utterance = new SpeechSynthesisUtterance(item.text);
      utterance.rate = 1.05;
      utterance.pitch = item.speaker === 'ai' ? 1.05 : 0.95;
      utterance.onend = () => {
        index++;
        playNext();
      };
      utterance.onerror = () => {
        setIsAudioPlaying(false);
      };
      window.speechSynthesis.speak(utterance);
    };

    playNext();
  };

  return (
    <section className="py-20 md:py-28 bg-navy-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 mb-4">
            <Sparkles className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              Interactive Conversational Simulation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See How an AI Call Becomes a Business Outcome
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Select an automotive workflow below to watch how Voxaro engages customers, captures requirements, and automatically records structured CRM outcomes.
          </p>
        </div>

        {/* 5 Scenario Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {scenarios.map((sc) => {
            const Icon = sc.icon;
            const isSelected = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                  }
                  setIsAudioPlaying(false);
                  setActiveScenarioId(sc.id);
                }}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-electric-blue text-white shadow-glow-cyan border border-electric-cyan'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{sc.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {sc.callDirection}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Scenario Container: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Call Player & Dialogue Transcript */}
          <div className="lg:col-span-7 rounded-2xl bg-navy-900 border border-slate-800 shadow-card-dark overflow-hidden">
            
            {/* Header info */}
            <div className="p-4 sm:p-5 bg-navy-850 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {currentScenario.callDirection} AI Call Simulation
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="text-xs text-electric-cyan font-mono font-medium">
                    {currentScenario.category}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Target: <span className="text-slate-200 font-medium">{currentScenario.leadDetails.name}</span> • Vehicle: <span className="text-slate-200">{currentScenario.leadDetails.vehicle}</span>
                </div>
              </div>

              {/* TTS Speech Trigger */}
              <button
                onClick={handleSpeakDialogue}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  isAudioPlaying
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow'
                    : 'bg-slate-800 text-slate-200 hover:text-white border-slate-700 hover:bg-slate-700'
                }`}
              >
                {isAudioPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Stop Voice</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-electric-cyan" />
                    <span>Listen to Call</span>
                  </>
                )}
              </button>
            </div>

            {/* Conversation Bubbles */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[440px] overflow-y-auto bg-navy-950/60">
              {currentScenario.dialogue.map((item, idx) => {
                const isAi = item.speaker === 'ai';
                return (
                  <div
                    key={idx}
                    className={`flex gap-3 text-xs sm:text-sm ${
                      isAi ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isAi
                          ? 'bg-gradient-to-tr from-electric-blue to-electric-cyan text-white shadow-glow-cyan'
                          : 'bg-slate-700 text-slate-200'
                      }`}
                    >
                      {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>

                    <div
                      className={`max-w-[85%] rounded-2xl p-4 transition-all ${
                        isAi
                          ? 'bg-slate-900 border border-slate-800 text-slate-200'
                          : 'bg-blue-950/60 border border-blue-800/60 text-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-1.5 pb-1 border-b border-slate-800/60">
                        <span className="font-semibold text-xs font-mono text-slate-400">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">{item.time}</span>
                      </div>
                      <p className="leading-relaxed text-slate-200">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom transparency notice */}
            <div className="p-3 bg-navy-950 border-t border-slate-800/80 text-center">
              <p className="text-[11px] text-slate-400 font-mono">
                *Simulated conversation sample illustrating conversational intelligence and outcome generation.
              </p>
            </div>
          </div>

          {/* Right Side: Structured Business Outcome Card */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Outcome Card */}
            <div className="rounded-2xl p-6 bg-navy-900 border border-slate-800 shadow-card-dark">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Automated Business Outcome</h3>
                    <p className="text-xs text-slate-400">Synchronized into Dealership CRM / DMS</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Confirmed
                </span>
              </div>

              {/* Data payload pills */}
              <div className="py-5 space-y-3.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                  <span className="text-slate-400 font-mono">Lead Qualification</span>
                  <span className="font-bold text-slate-200 text-right">{currentScenario.outcomes.qualification}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                  <span className="text-slate-400 font-mono">Action Triggered</span>
                  <span className="font-bold text-emerald-400 text-right">{currentScenario.outcomes.actionTaken}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                  <span className="text-slate-400 font-mono">Appointment Slot</span>
                  <span className="font-bold text-slate-200 text-right">{currentScenario.outcomes.calendarStatus}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                  <span className="text-slate-400 font-mono">CRM Pipeline Stage</span>
                  <span className="font-bold text-electric-cyan text-right">{currentScenario.outcomes.crmEvent}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                  <span className="text-slate-400 font-mono">Assigned Representative</span>
                  <span className="font-bold text-slate-200 text-right">{currentScenario.outcomes.assignedStaff}</span>
                </div>
              </div>

              {/* Key Highlights list */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2 font-mono">
                  Why this drives business value:
                </span>
                <ul className="space-y-2 text-xs text-slate-400">
                  {currentScenario.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan shrink-0 mt-1.5" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Practical takeaway */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300">Want to test custom call flows for your dealership models?</span>
              <a
                href="#demo"
                className="font-semibold text-electric-cyan hover:underline flex items-center gap-1 shrink-0 ml-2"
              >
                <span>Request Custom Script</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
