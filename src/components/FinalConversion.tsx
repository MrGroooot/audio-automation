import React from 'react';
import { PhoneCall, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface FinalConversionProps {
  onOpenDemo: () => void;
  onOpenConsultation: () => void;
}

export const FinalConversion: React.FC<FinalConversionProps> = ({ onOpenDemo, onOpenConsultation }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden border-t border-slate-800">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-electric-cyan mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Transform Dealership Calling</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Rethink Your Automotive Calling Operations?
        </h2>

        <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          Tell us how your team manages customer calls today. We’ll help identify suitable workflows for AI automation and a practical path to deployment.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-electric-blue to-electric-cyan hover:opacity-95 shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <PhoneCall className="w-5 h-5 text-white" />
            <span>Book a Demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-electric-cyan" />
            <span>Discuss Your Use Case</span>
          </button>
        </div>

        {/* Reassurance pills */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>No obligation discovery assessment</span>
          </div>
          <span className="hidden sm:inline text-slate-700">•</span>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-electric-cyan" />
            <span>Customized to your dealership volume</span>
          </div>
          <span className="hidden sm:inline text-slate-700">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Response within 1 business day</span>
          </div>
        </div>

      </div>
    </section>
  );
};
