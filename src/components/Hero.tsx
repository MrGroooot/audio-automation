import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  ArrowRight, 
  Bot, 
  User, 
  CheckCircle2, 
  Calendar, 
  ArrowUpRight, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Clock, 
  Activity,
  Layers,
  ShieldCheck,
  Building2,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [activeCallType, setActiveCallType] = useState<'inbound' | 'outbound'>('outbound');
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  // Scenarios for the hero preview
  const previewConversations = {
    outbound: {
      title: 'Outbound Lead Qualification Call',
      caller: 'Voxaro Automotive Voice Agent',
      callee: 'Lead: Michael Chang (Interested in SUV Hybrid)',
      duration: '01:24',
      status: 'Call Connected • High Intent Lead',
      dialogue: [
        {
          speaker: 'ai',
          text: 'Hi Michael! Calling from Apex Motorworks. I saw you requested details on the new hybrid SUV on our site this morning.',
          time: '0:02'
        },
        {
          speaker: 'customer',
          text: 'Yes! Does the all-wheel drive trim have delivery availability before end of the month?',
          time: '0:07'
        },
        {
          speaker: 'ai',
          text: 'Yes, we have two in transit arriving this Friday. Would you like to reserve a 30-minute priority test drive for Saturday morning?',
          time: '0:14'
        },
        {
          speaker: 'customer',
          text: 'Saturday 10:30 AM works great for me.',
          time: '0:21'
        },
        {
          speaker: 'ai',
          text: 'Confirmed! I have booked your test drive for Saturday at 10:30 AM at the Northside Showroom with senior advisor Elena.',
          time: '0:28'
        }
      ],
      qualification: {
        score: '96/100 (Tier 1)',
        interest: 'SUV AWD Hybrid',
        action: 'Test Drive Scheduled',
        slot: 'Sat, 10:30 AM',
        handover: 'Assigned to Elena R. (Sales Lead)'
      }
    },
    inbound: {
      title: 'Inbound Service & Booking Call',
      caller: 'Customer: Sarah Jenkins',
      callee: 'Voxaro Dealership Concierge AI',
      duration: '00:54',
      status: 'Call Connected • Service Booking',
      dialogue: [
        {
          speaker: 'customer',
          text: 'Hi, my dashboard engine service light came on. Can I bring my sedan in tomorrow morning?',
          time: '0:03'
        },
        {
          speaker: 'ai',
          text: 'Hello Sarah! I can certainly arrange that for your 2023 Sedan. We have express service bays available tomorrow at 8:30 AM or 11:00 AM.',
          time: '0:10'
        },
        {
          speaker: 'customer',
          text: '8:30 AM is ideal, thanks.',
          time: '0:16'
        },
        {
          speaker: 'ai',
          text: 'Your service intake is confirmed for tomorrow at 8:30 AM. A loaner vehicle has also been noted as requested.',
          time: '0:23'
        }
      ],
      qualification: {
        score: 'Active Customer',
        interest: 'Express Maintenance & Diagnostic',
        action: 'Service Bay Booked',
        slot: 'Tomorrow, 8:30 AM',
        handover: 'Routed to Service Advisor Desk'
      }
    }
  };

  const currentCall = previewConversations[activeCallType];

  // Auto step through dialogue
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % currentCall.dialogue.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [currentCall.dialogue.length, activeCallType]);

  // Optional speech readout when unmuted
  const speakCurrentText = (text: string) => {
    if (isAudioMuted || typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleToggleAudio = () => {
    const nextMuted = !isAudioMuted;
    setIsAudioMuted(nextMuted);
    if (!nextMuted) {
      speakCurrentText(currentCall.dialogue[activeMessageIndex].text);
    } else if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glows and automotive matrix grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-electric-blue/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[400px] bg-electric-cyan/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-electric-cyan animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Enterprise B2B AI Voice Automation
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-medium text-electric-cyan">For Automotive Networks</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Your AI Calling Team.{' '}
              <span className="bg-gradient-to-r from-electric-blue via-electric-cyan to-white bg-clip-text text-transparent">
                Built for Automotive Business.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Automate inbound and outbound customer calls with AI voice agents that answer enquiries, 
              follow up on leads, book appointments, and help your business reduce repetitive calling costs.
            </p>

            {/* Three Value Propositions from PDF */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-electric-blue/20 text-electric-cyan shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Inbound & Outbound</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Answer enquiries or run outbound follow-up calls.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-electric-cyan shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Automated Follow-ups</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Qualify buyers and book test drives in minutes.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Human Handover</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Seamless escalation to staff for high-value sales.</p>
                </div>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-electric-blue to-electric-cyan hover:opacity-95 shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="w-5 h-5 text-white" />
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
              >
                <span>Explore Solutions</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Realistic deployment note */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>Configurable CRM & DMS Integration</span>
              <span className="text-slate-700">•</span>
              <span>Enterprise Voice Architecture</span>
              <span className="text-slate-700">•</span>
              <span>Controlled Human Escalation</span>
            </div>
          </div>

          {/* Right Column: Custom Visual Product Demonstration Widget */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative glow container */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-electric-blue/40 to-electric-cyan/40 rounded-2xl blur-lg opacity-70" />

              {/* Main Product Interface Card */}
              <div className="relative rounded-2xl bg-navy-900 border border-slate-700/90 shadow-card-dark overflow-hidden">
                
                {/* Header bar of the simulated device */}
                <div className="bg-navy-950 px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">Voxaro Voice Runtime v2.4</span>
                  </div>

                  {/* Mode switcher: Inbound vs Outbound */}
                  <div className="flex items-center bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    <button
                      onClick={() => {
                        setActiveCallType('outbound');
                        setActiveMessageIndex(0);
                      }}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                        activeCallType === 'outbound'
                          ? 'bg-electric-blue text-white shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Outbound AI
                    </button>
                    <button
                      onClick={() => {
                        setActiveCallType('inbound');
                        setActiveMessageIndex(0);
                      }}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                        activeCallType === 'inbound'
                          ? 'bg-electric-blue text-white shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Inbound AI
                    </button>
                  </div>
                </div>

                {/* Call Status & Telephony Simulation Header */}
                <div className="px-5 py-4 bg-gradient-to-b from-navy-850 to-navy-900 border-b border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono font-semibold text-emerald-400">
                          {currentCall.status}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white mt-1">
                        {currentCall.callee}
                      </h3>
                    </div>

                    {/* Audio speech test button */}
                    <button
                      onClick={handleToggleAudio}
                      title={isAudioMuted ? "Click to hear simulated AI voice" : "Mute speech"}
                      className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs ${
                        isAudioMuted 
                          ? 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200' 
                          : 'bg-electric-blue/30 text-electric-cyan border-electric-cyan'
                      }`}
                    >
                      {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-electric-cyan animate-pulse" />}
                      <span className="hidden sm:inline font-mono">{isAudioMuted ? 'Muted' : 'Voice On'}</span>
                    </button>
                  </div>

                  {/* Soundwave Visualizer Bar */}
                  <div className="mt-4 bg-navy-950/70 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-electric-cyan" />
                      <span className="text-[11px] font-mono text-slate-400">AI Speech Synthesis:</span>
                    </div>

                    <div className="flex items-center gap-1 h-5 px-2">
                      {[12, 24, 16, 28, 20, 10, 26, 18, 30, 14, 22].map((height, i) => (
                        <div
                          key={i}
                          className="w-1 bg-gradient-to-t from-electric-blue to-electric-cyan rounded-full soundwave-bar"
                          style={{
                            height: `${height}px`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: '1.1s'
                          }}
                        />
                      ))}
                    </div>

                    <div className="text-[11px] font-mono text-slate-400">
                      Latency: <span className="text-emerald-400 font-semibold">480ms</span>
                    </div>
                  </div>
                </div>

                {/* Conversation Transcript Stream */}
                <div className="p-5 space-y-3.5 max-h-[260px] overflow-y-auto">
                  {currentCall.dialogue.map((item, index) => {
                    const isAi = item.speaker === 'ai';
                    const isCurrent = index === activeMessageIndex;

                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setActiveMessageIndex(index);
                          if (!isAudioMuted) speakCurrentText(item.text);
                        }}
                        className={`flex gap-3 text-xs cursor-pointer transition-all ${
                          isAi ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isAi
                              ? 'bg-gradient-to-tr from-electric-blue to-electric-cyan text-white shadow-glow-cyan'
                              : 'bg-slate-700 text-slate-200'
                          }`}
                        >
                          {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>

                        <div
                          className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 transition-all ${
                            isAi
                              ? isCurrent
                                ? 'bg-slate-800 border-2 border-electric-cyan text-white shadow-lg'
                                : 'bg-slate-800/80 border border-slate-700/60 text-slate-200'
                              : isCurrent
                              ? 'bg-blue-600/30 border-2 border-blue-400 text-white'
                              : 'bg-slate-900 border border-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-semibold text-[10px] uppercase font-mono text-slate-400">
                              {isAi ? 'Voxaro Voice Agent' : 'Customer'}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">{item.time}</span>
                          </div>
                          <p className="leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Simulated Outcome & CRM Action Card */}
                <div className="bg-navy-950 p-4 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Simulated CRM Automated Outcome
                    </span>
                    <span className="text-[11px] font-mono text-electric-cyan bg-electric-cyan/10 px-2 py-0.5 rounded border border-electric-cyan/20">
                      Sync Status: Ready
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">Lead Intent / Score</span>
                      <span className="font-bold text-slate-200">{currentCall.qualification.score}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">Action Executed</span>
                      <span className="font-bold text-emerald-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {currentCall.qualification.action}
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 col-span-2 flex items-center justify-between">
                      <div>
                        <span className="text-slate-500 block text-[10px]">Reserved Slot / Routing</span>
                        <span className="font-semibold text-slate-300">
                          {currentCall.qualification.slot} • {currentCall.qualification.handover}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">ID: #VX-8842</span>
                    </div>
                  </div>
                </div>

                {/* Footer Transparency Disclaimer */}
                <div className="bg-slate-950/80 px-4 py-2 border-t border-slate-900 text-center">
                  <p className="text-[10px] text-slate-500 font-mono">
                    *Illustrative simulation showing conversational logic and CRM event payload.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
