import React from 'react';
import { X, Shield, FileText, AlertTriangle } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-navy-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-navy-850 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-electric-cyan" />
            ) : (
              <FileText className="w-5 h-5 text-electric-blue" />
            )}
            <h3 className="text-lg font-bold text-white">
              {type === 'privacy' ? 'Privacy Policy (Draft for Legal Review)' : 'Terms of Service (Draft for Legal Review)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legal Advisory Warning Banner */}
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-3 flex items-center gap-2 text-xs text-amber-300">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>
            <strong>Legal Notice:</strong> This document is a preliminary operational draft prepared for Voxaro B2B website deployment and must undergo formal legal counsel review prior to live commercial contracting.
          </span>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          {type === 'privacy' ? (
            <>
              <div>
                <h4 className="text-base font-bold text-white mb-2">1. Scope and Commitment</h4>
                <p>
                  Voxaro ("we", "our", or "us") provides enterprise AI voice call automation services designed for automobile manufacturers, dealership groups, single dealerships, and automotive service networks. We prioritize data privacy, consumer consent, and compliance with applicable telecommunications regulations.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">2. Information Handled Through Voice Automation</h4>
                <p>
                  In the course of providing our conversational voice services, Voxaro processes only authorized data provided by our automotive business clients or directly spoken by callers, which may include:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-400">
                  <li>Contact details: Customer names, phone numbers, and communication preferences.</li>
                  <li>Vehicle interest: Preferred models, trims, scheduled test-drive dates, and mileage requirements.</li>
                  <li>Call records: Audio recordings (where legally authorized), transcripts, and automated CRM disposition tags.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">3. Calling Consent & Do-Not-Call (DNC) Compliance</h4>
                <p>
                  All outbound campaigns deployed via Voxaro require the client dealership to confirm prior consent or an established business relationship in accordance with applicable federal, state, and local telephone solicitation rules. Automated suppression queues immediately honor opt-out and callback removal requests.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">4. Human Handover & Transparent Identity</h4>
                <p>
                  Voxaro discloses its conversational AI identity in accordance with local regulations and provides immediate routing pathways to human representatives whenever requested by a customer.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">5. Data Retention & Client Inquiries</h4>
                <p>
                  Customer records are retained solely for the agreed service duration and reporting requirements. For inquiries concerning privacy practices or data deletion requests, contact our compliance officer at <span className="text-electric-cyan font-mono">privacy@voxaro.ai</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-base font-bold text-white mb-2">1. Terms of Service & Business Eligibility</h4>
                <p>
                  These Terms of Service govern the access and evaluation of the Voxaro Automotive AI Voice Platform. Voxaro services are offered exclusively to commercial automotive entities, including original equipment manufacturers (OEMs), authorized dealership networks, and licensed service facilities.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">2. Scope of Services & Verification</h4>
                <p>
                  Voxaro provides voice automation tools capable of handling inbound and outbound automotive communications. While the platform utilizes sophisticated machine learning algorithms, all final statements of work, vehicle pricing structures, warranty provisions, and integration deliverables are governed by formal bilateral client agreements.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">3. Client Responsibilities & Information Accuracy</h4>
                <p>
                  Clients are solely responsible for ensuring the accuracy, timeliness, and legal compliance of all vehicle inventories, pricing sheets, promotional terms, and lead contact lists provided to the Voxaro system.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">4. Milestone Payments & Quotations</h4>
                <p>
                  Proposed payment schedules (e.g. 25% signing, 35% test pilot, 40% production deployment) are illustrative examples subject to formal statement of work negotiation and do not constitute a public unilateral price guarantee.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">5. Limitation of Liability</h4>
                <p>
                  To the maximum extent permitted by applicable law, Voxaro shall not be liable for indirect, consequential, or exemplary damages arising out of telephony network disruptions, carrier outages, or third-party CRM connectivity failures.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-navy-850 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
