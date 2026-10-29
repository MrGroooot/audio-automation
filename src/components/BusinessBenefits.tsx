import React, { useState } from 'react';
import { 
  DollarSign, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Calculator, 
  HelpCircle, 
  ArrowRight,
  AlertTriangle,
  Zap,
  Repeat,
  Headphones,
  Check
} from 'lucide-react';

export const BusinessBenefits: React.FC = () => {
  // Calculator state
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'INR' | 'CAD' | 'AUD'>('USD');
  const [monthlyCalls, setMonthlyCalls] = useState<number>(4500);
  const [avgHandlingTime, setAvgHandlingTime] = useState<number>(4.5); // minutes
  const [currentCostPerCall, setCurrentCostPerCall] = useState<number>(4.20);
  const [automationPercent, setAutomationPercent] = useState<number>(65); // percentage
  const [aiCostPerCall, setAiCostPerCall] = useState<number>(0.85);

  const currencySymbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    INR: '₹',
    CAD: 'CA$',
    AUD: 'A$'
  };

  const symbol = currencySymbols[currency] || '$';

  // Calculator formulas as defined in specification
  const currentMonthlyHandlingCost = monthlyCalls * currentCostPerCall;
  const estimatedAutomatedCalls = Math.round(monthlyCalls * (automationPercent / 100));
  const estimatedRemainingHumanCalls = monthlyCalls - estimatedAutomatedCalls;
  const estimatedFutureMonthlyCost = (estimatedAutomatedCalls * aiCostPerCall) + (estimatedRemainingHumanCalls * currentCostPerCall);
  const estimatedMonthlyDifference = currentMonthlyHandlingCost - estimatedFutureMonthlyCost;
  const estimatedAnnualDifference = estimatedMonthlyDifference * 12;
  const costReductionPercent = currentMonthlyHandlingCost > 0
    ? ((estimatedMonthlyDifference / currentMonthlyHandlingCost) * 100)
    : 0;

  const benefits = [
    {
      title: 'Reduce Reliance on Repetitive Calling',
      desc: 'Automate tedious inquiries regarding opening hours, routine test-drive scheduling, and periodic service reminders without burning out staff.',
      icon: Repeat
    },
    {
      title: 'Scale Conversations Without Adding Headcount',
      desc: 'Easily handle surges during promotional launches, month-end sales blitzes, or recall campaigns without increasing full-time call-center headcount.',
      icon: Zap
    },
    {
      title: 'Eliminate Inconsistent Follow-Up Cycles',
      desc: 'Every qualified prospect receives timely, uniform callbacks and confirmations regardless of showroom floor rush or staff shift changes.',
      icon: Clock
    },
    {
      title: 'Respond to Inbound Enquiries in Seconds',
      desc: 'Eliminate hold times and voicemail drop-offs by providing immediate, knowledgeable conversational voice answers day and night.',
      icon: Headphones
    },
    {
      title: 'Complete Call Visibility & Structured Data',
      desc: 'Capture full transcripts, intent classifications, customer sentiment, and verified CRM updates for every single phone conversation.',
      icon: TrendingUp
    },
    {
      title: 'Free Up Staff for High-Value Showroom Deals',
      desc: 'Allow your top sales closers and master technicians to spend their working hours closing vehicle deals and inspecting repairs.',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-900 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Operational ROI & Efficiency
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Reduce Repetitive Calling. Give Your Team More Time to Sell.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Voxaro delivers measurable operational efficiency by automating high-frequency calls, letting your dealership retain human staff for complex sales negotiations and personalized customer relationships.
          </p>
        </div>

        {/* 6 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-850 border border-slate-700 flex items-center justify-center text-electric-cyan mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Cost-Efficiency Calculator */}
        <div id="calculator" className="rounded-3xl bg-navy-950 border border-slate-700/90 shadow-card-dark overflow-hidden">
          
          {/* Calculator Header Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-electric-cyan" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Automotive Calling Cost-Efficiency Calculator
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Estimate how automating routine inbound queries and outbound follow-ups impacts monthly call center expenditure.
              </p>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-stretch md:self-auto justify-between md:justify-start">
              <span className="text-xs text-slate-400 font-mono px-2">Currency:</span>
              {(['USD', 'EUR', 'GBP', 'INR', 'CAD'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-lg transition-all ${
                    currency === curr
                      ? 'bg-electric-blue text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Calculator Body: Split Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Inputs Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Adjust Variables to Match Your Dealership Operations
              </span>

              {/* Slider 1: Monthly Calls */}
              <div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <label className="font-semibold text-slate-200">
                    Number of Calls Handled Per Month
                  </label>
                  <span className="font-mono font-bold text-electric-cyan bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    {monthlyCalls.toLocaleString()} calls
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={monthlyCalls}
                  onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-electric-cyan"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>500 (Single Store)</span>
                  <span>10,000 (Dealer Group)</span>
                  <span>50,000+ (OEM Network)</span>
                </div>
              </div>

              {/* Slider 2: Estimated Automation % */}
              <div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <label className="font-semibold text-slate-200">
                    Estimated Calls Suitable for AI Automation
                  </label>
                  <span className="font-mono font-bold text-emerald-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    {automationPercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  step="5"
                  value={automationPercent}
                  onChange={(e) => setAutomationPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Routine questions, service reminders, test-drive confirmations, and after-hours queries typically represent 50–75% of volume.
                </p>
              </div>

              {/* Dual Numeric Inputs: Current Cost vs AI Cost */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Current Cost per Human Call
                  </label>
                  <p className="text-[11px] text-slate-500 mb-2">Avg agent salary, overhead, phone infra</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm">
                      {symbol}
                    </span>
                    <input
                      type="number"
                      step="0.10"
                      min="0.5"
                      max="50"
                      value={currentCostPerCall}
                      onChange={(e) => setCurrentCostPerCall(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-8 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono focus:outline-none focus:border-electric-cyan"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Estimated AI Cost per Call
                  </label>
                  <p className="text-[11px] text-slate-500 mb-2">Voxaro platform usage estimate</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm">
                      {symbol}
                    </span>
                    <input
                      type="number"
                      step="0.05"
                      min="0.1"
                      max="10"
                      value={aiCostPerCall}
                      onChange={(e) => setAiCostPerCall(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-8 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono focus:outline-none focus:border-electric-cyan"
                    />
                  </div>
                </div>
              </div>

              {/* Average Handling Time input */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-300 block">Average Call Duration (Minutes)</span>
                  <span className="text-slate-500 text-[11px]">Typical dealership conversation length</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    max="15"
                    value={avgHandlingTime}
                    onChange={(e) => setAvgHandlingTime(Math.max(1, Number(e.target.value)))}
                    className="w-20 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-center text-xs text-white font-mono"
                  />
                  <span className="text-slate-400 font-mono">min</span>
                </div>
              </div>

            </div>

            {/* Right Output Results Panel */}
            <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-navy-900 border border-slate-800 flex flex-col justify-between">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-4">
                  Comparative Cost Projection
                </span>

                {/* Primary Difference Highlight */}
                <div className={`p-5 rounded-2xl border mb-6 ${
                  estimatedMonthlyDifference >= 0
                    ? 'bg-emerald-950/30 border-emerald-500/40'
                    : 'bg-rose-950/30 border-rose-500/40'
                }`}>
                  <span className="text-xs font-semibold text-slate-300 block">
                    Estimated Monthly Difference
                  </span>
                  <div className={`text-3xl sm:text-4xl font-black mt-1 font-mono tracking-tight ${
                    estimatedMonthlyDifference >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {estimatedMonthlyDifference >= 0 ? '+' : ''}{symbol}{Math.round(estimatedMonthlyDifference).toLocaleString()}
                    <span className="text-xs font-sans font-normal text-slate-400 ml-1.5">/ month</span>
                  </div>

                  <div className="mt-2 text-xs font-medium text-slate-300 flex items-center gap-2">
                    <span>Annual projection:</span>
                    <span className="font-bold text-white font-mono">
                      {estimatedAnnualDifference >= 0 ? '+' : ''}{symbol}{Math.round(estimatedAnnualDifference).toLocaleString()}
                    </span>
                    {costReductionPercent > 0 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        ~{Math.round(costReductionPercent)}% lower
                      </span>
                    )}
                  </div>
                </div>

                {/* Formula Breakdown Table */}
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Current Monthly Cost:</span>
                    <span className="text-white font-semibold">{symbol}{Math.round(currentMonthlyHandlingCost).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Automated by AI ({automationPercent}%):</span>
                    <span className="text-electric-cyan font-semibold">{estimatedAutomatedCalls.toLocaleString()} calls</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Remaining Human Calls:</span>
                    <span className="text-slate-300 font-semibold">{estimatedRemainingHumanCalls.toLocaleString()} calls</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Estimated Future Monthly Cost:</span>
                    <span className="text-white font-semibold">{symbol}{Math.round(estimatedFutureMonthlyCost).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Transparency Notice & Disclaimer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-300">Estimate Disclaimer:</strong> This calculation is an illustrative comparison based on entered assumptions. It excludes any custom implementation, integration, or telephony carrier surcharges unless entered separately, and does not guarantee specific savings. Actual results depend on call volume, task complexity, and deployment scope.
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
