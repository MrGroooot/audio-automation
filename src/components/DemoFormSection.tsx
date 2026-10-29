import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  PhoneCall, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Building2, 
  Mail, 
  User, 
  Briefcase, 
  ShieldCheck, 
  RefreshCcw,
  Sparkles,
  Calendar
} from 'lucide-react';

interface FormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  jobTitle: string;
  companyType: string;
  monthlyCallVolume: string;
  mainInterest: string;
  currentChallenge: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
  jobTitle?: string;
  companyType?: string;
  monthlyCallVolume?: string;
  mainInterest?: string;
  consent?: string;
  general?: string;
}

export const DemoFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    jobTitle: '',
    companyType: '',
    monthlyCallVolume: '',
    mainInterest: '',
    currentChallenge: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [responseDetails, setResponseDetails] = useState<{
    referenceId?: string;
    message?: string;
  }>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim() || !emailRegex.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'Please provide a valid business email address.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your dealership or organization name.';
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Please enter your job role (e.g., General Manager, Service Director).';
    }

    if (!formData.companyType) {
      newErrors.companyType = 'Please select your organization type.';
    }

    if (!formData.monthlyCallVolume) {
      newErrors.monthlyCallVolume = 'Please select your estimated monthly call volume.';
    }

    if (!formData.mainInterest) {
      newErrors.mainInterest = 'Please select your primary interest.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Consent is required for us to respond to your inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ general: data.message || 'Failed to submit request. Please try again.' });
        }
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmissionSuccess(true);
      setResponseDetails({
        referenceId: data.referenceId,
        message: data.message
      });
      setIsSubmitting(false);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#2563eb', '#38bdf8', '#10b981']
        });
      } catch (confettiErr) {
        // Safe fallback if canvas not available
      }

    } catch (err) {
      console.error('Submission error:', err);
      setErrors({
        general: 'A network error occurred while connecting to the Voxaro lead server. Please check your connection or contact contact@voxaro.ai directly.'
      });
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      jobTitle: '',
      companyType: '',
      monthlyCallVolume: '',
      mainInterest: '',
      currentChallenge: '',
      consent: false
    });
    setErrors({});
    setSubmissionSuccess(false);
    setResponseDetails({});
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-navy-950 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 mb-4">
            <PhoneCall className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              Enterprise Consultation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule Your Automotive AI Calling Demo
          </h2>

          <p className="mt-3 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect with a Voxaro solutions architect to discuss your call volumes, CRM compatibility, and how AI agents can automate routine conversations for your team.
          </p>
        </div>

        {/* Lead Form Card Container */}
        <div className="rounded-3xl bg-navy-900 border border-slate-700/80 shadow-card-dark p-6 sm:p-10 relative overflow-hidden">
          
          {submissionSuccess ? (
            /* Successful Submission Confirmation Receipt */
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40 shadow-glow-cyan">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Demo Request Confirmed
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  {responseDetails.message || 'Your inquiry has been successfully recorded in the Voxaro lead database. Our automotive voice automation specialist will review your parameters and follow up within 1 business day.'}
                </p>
              </div>

              {/* Inquiry Reference Summary Card */}
              <div className="p-5 rounded-2xl bg-navy-950/80 border border-slate-800 max-w-md mx-auto text-left text-xs font-mono space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Reference ID:</span>
                  <span className="text-electric-cyan font-bold">{responseDetails.referenceId || 'VX-DEMO-LEAD'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Company:</span>
                  <span className="text-white">{formData.companyName} ({formData.companyType})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Monthly Volume:</span>
                  <span className="text-white">{formData.monthlyCallVolume}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Primary Focus:</span>
                  <span className="text-emerald-400">{formData.mainInterest}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                  <span className="text-slate-400">Contact Email:</span>
                  <span className="text-slate-200">{formData.businessEmail}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Form Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errors.general && (
                <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-700/60 flex items-start gap-3 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errors.general}</span>
                </div>
              )}

              {/* Grid 1: Full Name & Business Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Marcus Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2.5 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-electric-cyan focus:ring-electric-cyan'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Business Email <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="e.g. mvance@apexmotors.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2.5 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.businessEmail ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-electric-cyan focus:ring-electric-cyan'
                      }`}
                    />
                  </div>
                  {errors.businessEmail && <p className="text-[11px] text-rose-400 mt-1">{errors.businessEmail}</p>}
                </div>
              </div>

              {/* Grid 2: Company Name & Job Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Company / Dealership Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Apex Automotive Group"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2.5 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.companyName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-electric-cyan focus:ring-electric-cyan'
                      }`}
                    />
                  </div>
                  {errors.companyName && <p className="text-[11px] text-rose-400 mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Job Title <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. General Manager, Sales Director"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2.5 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.jobTitle ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-electric-cyan focus:ring-electric-cyan'
                      }`}
                    />
                  </div>
                  {errors.jobTitle && <p className="text-[11px] text-rose-400 mt-1">{errors.jobTitle}</p>}
                </div>
              </div>

              {/* Grid 3: Company Type & Monthly Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Organization Type <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={formData.companyType}
                    onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-sm text-white focus:outline-none focus:ring-1 ${
                      errors.companyType ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-electric-cyan focus:ring-electric-cyan'
                    }`}
                  >
                    <option value="">Select organization type...</option>
                    <option value="OEM">Automobile Manufacturer (OEM)</option>
                    <option value="Dealer Group">Dealership Group (Multi-Store)</option>
                    <option value="Dealership">Individual Dealership (Single-Store)</option>
                    <option value="Service Network">Automotive Service / Workshop Network</option>
                    <option value="Other">Other Automotive Provider</option>
                  </select>
                  {errors.companyType && <p className="text-[11px] text-rose-400 mt-1">{errors.companyType}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                    Monthly Customer Call Volume <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={formData.monthlyCallVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyCallVolume: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-sm text-white focus:outline-none focus:ring-1 ${
                      errors.monthlyCallVolume ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-800 focus:border-electric-cyan focus:ring-electric-cyan'
                    }`}
                  >
                    <option value="">Select estimated monthly calls...</option>
                    <option value="Under 1,000 calls/mo">Under 1,000 calls / month</option>
                    <option value="1,000 - 5,000 calls/mo">1,000 – 5,000 calls / month</option>
                    <option value="5,000 - 20,000 calls/mo">5,000 – 20,000 calls / month</option>
                    <option value="20,000 - 50,000 calls/mo">20,000 – 50,000 calls / month</option>
                    <option value="50,000+ calls/mo">50,000+ calls / month (Enterprise)</option>
                  </select>
                  {errors.monthlyCallVolume && <p className="text-[11px] text-rose-400 mt-1">{errors.monthlyCallVolume}</p>}
                </div>
              </div>

              {/* Main Interest Radio Options */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                  Primary Automation Focus <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    'Inbound Calling',
                    'Outbound Calling',
                    'Both Inbound & Outbound',
                    'Unsure / Exploring'
                  ].map((option) => (
                    <label
                      key={option}
                      className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-center text-center ${
                        formData.mainInterest === option
                          ? 'bg-electric-blue/20 border-electric-cyan text-white shadow-sm'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="mainInterest"
                        value={option}
                        checked={formData.mainInterest === option}
                        onChange={() => setFormData({ ...formData, mainInterest: option })}
                        className="sr-only"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {errors.mainInterest && <p className="text-[11px] text-rose-400 mt-1">{errors.mainInterest}</p>}
              </div>

              {/* Current Calling Process or Challenge */}
              <div>
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-1.5">
                  Current Calling Process or Challenge <span className="text-slate-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your team's current phone handling (e.g. slow weekend lead follow-up, missed service bookings, CRM integration wishes)..."
                  value={formData.currentChallenge}
                  onChange={(e) => setFormData({ ...formData, currentChallenge: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                />
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-4 h-4 rounded mt-0.5 text-electric-blue bg-slate-950 border-slate-700 focus:ring-electric-cyan focus:ring-offset-navy-900"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    I agree to be contacted by Voxaro representatives regarding this consultation request. Customer data is handled strictly in accordance with our Privacy Policy.
                  </span>
                </label>
                {errors.consent && <p className="text-[11px] text-rose-400 mt-1">{errors.consent}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-electric-blue to-electric-cyan hover:opacity-95 shadow-glow-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Validating & Recording Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Demo Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Privacy Protected • Server Validated • No Spam Policy</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
