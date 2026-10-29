import React, { useState } from 'react';
import { 
  BarChart3, 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Filter, 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  Download, 
  Play, 
  Search, 
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export const PlatformDashboard: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState<'7d' | '30d' | 'today'>('7d');
  const [typeFilter, setTypeFilter] = useState<'all' | 'inbound' | 'outbound'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample illustrative metrics
  const metricsData = {
    '7d': {
      totalAttempts: 1420,
      connectedCalls: 1198,
      connectRate: '84.4%',
      inboundCalls: 512,
      outboundCalls: 908,
      leadsCaptured: 348,
      appointmentsBooked: 184,
      followUpsPending: 62,
      humanHandovers: 46
    },
    '30d': {
      totalAttempts: 6140,
      connectedCalls: 5219,
      connectRate: '85.0%',
      inboundCalls: 2240,
      outboundCalls: 3900,
      leadsCaptured: 1520,
      appointmentsBooked: 792,
      followUpsPending: 215,
      humanHandovers: 198
    },
    'today': {
      totalAttempts: 215,
      connectedCalls: 182,
      connectRate: '84.6%',
      inboundCalls: 78,
      outboundCalls: 137,
      leadsCaptured: 54,
      appointmentsBooked: 29,
      followUpsPending: 11,
      humanHandovers: 7
    }
  };

  const currentMetrics = metricsData[timeFilter];

  // Recent call log dataset
  const callLogs = [
    {
      id: 'VX-9041',
      customer: 'Elena Rostova',
      phone: '+1 (555) 392-8819',
      type: 'Outbound',
      campaign: 'SUV Hybrid Launch Follow-up',
      duration: '01:42',
      outcome: 'Appointment Booked',
      statusColor: 'emerald',
      intent: 'Test Drive Scheduled (Sat 11:30 AM)',
      time: '14 mins ago'
    },
    {
      id: 'VX-9040',
      customer: 'Marcus Bennett',
      phone: '+1 (555) 841-2094',
      type: 'Inbound',
      campaign: 'General Dealership Inbound',
      duration: '00:58',
      outcome: 'Lead Qualified',
      statusColor: 'blue',
      intent: 'EV Inventory & 0% Finance Query',
      time: '28 mins ago'
    },
    {
      id: 'VX-9039',
      customer: 'Samantha Wu',
      phone: '+1 (555) 712-4018',
      type: 'Outbound',
      campaign: '30,000 km Scheduled Service',
      duration: '01:15',
      outcome: 'Appointment Booked',
      statusColor: 'emerald',
      intent: 'Service Bay Reserved (Thu 9:00 AM)',
      time: '42 mins ago'
    },
    {
      id: 'VX-9038',
      customer: 'James O’Connor',
      phone: '+1 (555) 203-9114',
      type: 'Inbound',
      campaign: 'Warranty & Mechanical Query',
      duration: '02:05',
      outcome: 'Human Escalation',
      statusColor: 'amber',
      intent: 'Transferred to Service Director (Warranty)',
      time: '1 hr ago'
    },
    {
      id: 'VX-9037',
      customer: 'Tara Miller',
      phone: '+1 (555) 670-3881',
      type: 'Outbound',
      campaign: 'Web Form Lead Reactivation',
      duration: '01:08',
      outcome: 'Follow-up Queued',
      statusColor: 'slate',
      intent: 'Requested Callback at 5:00 PM',
      time: '2 hrs ago'
    }
  ];

  // Filtered call logs
  const filteredLogs = callLogs.filter((log) => {
    const matchesType = typeFilter === 'all' || log.type.toLowerCase() === typeFilter;
    const matchesSearch =
      log.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.intent.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <section id="platform" className="py-20 md:py-28 bg-navy-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/30 mb-4">
            <BarChart3 className="w-4 h-4 text-electric-cyan" />
            <span className="text-xs font-semibold uppercase tracking-wider text-electric-cyan">
              Command & Analytics Interface
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Platform Dashboard & Call Intelligence
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Gain full visibility into inbound phone traffic, outbound campaign performance, lead qualification rates, and appointment bookings in one unified interface.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-mono">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Illustrative Product Mockup • Sample Dealership Dataset</span>
          </div>
        </div>

        {/* Dashboard Frame Container */}
        <div className="rounded-3xl bg-navy-900 border border-slate-700/80 shadow-card-dark overflow-hidden">
          
          {/* Top Control Bar with Filters */}
          <div className="p-4 sm:p-6 bg-navy-850 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Apex Dealership Group — Executive Voice Console</span>
                  <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    Live Demo Mode
                  </span>
                </h3>
              </div>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
              {/* Call type filter */}
              <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                {(['all', 'inbound', 'outbound'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all capitalize ${
                      typeFilter === t
                        ? 'bg-electric-blue text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Time range filter */}
              <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                {(['today', '7d', '30d'] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeFilter(range)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      timeFilter === range
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {range === 'today' ? 'Today' : range === '7d' ? 'Last 7 Days' : 'Last 30 Days'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metric Tiles Grid */}
          <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-navy-900/60 border-b border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Total Calls Handled</span>
                <PhoneCall className="w-4 h-4 text-electric-cyan" />
              </div>
              <div className="text-2xl font-extrabold text-white">
                {currentMetrics.totalAttempts.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-mono">
                <span>{currentMetrics.connectRate} Connected</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{currentMetrics.connectedCalls} completed</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Appointments Booked</span>
                <Calendar className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-extrabold text-white">
                {currentMetrics.appointmentsBooked.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono">
                Test Drives & Service Bays
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Inbound vs Outbound</span>
                <TrendingUp className="w-4 h-4 text-electric-blue" />
              </div>
              <div className="text-2xl font-extrabold text-white">
                {currentMetrics.inboundCalls} / {currentMetrics.outboundCalls}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono">
                36% Inbound • 64% Outbound
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Human Escalations</span>
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-extrabold text-white">
                {currentMetrics.humanHandovers}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono">
                Only 3.8% required staff transfer
              </div>
            </div>
          </div>

          {/* Interactive Chart Preview */}
          <div className="p-6 bg-navy-950/40 border-b border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold text-white">Call Volume & Appointment Trend</h4>
                <p className="text-xs text-slate-400">Daily breakdown of AI call activity vs. confirmed showroom appointments</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-electric-blue" />
                  <span className="text-slate-300">Outbound Calls</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-electric-cyan" />
                  <span className="text-slate-300">Inbound Calls</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-emerald-400" />
                  <span className="text-slate-300">Booked Slots</span>
                </div>
              </div>
            </div>

            {/* Custom SVG Responsive Chart */}
            <div className="h-48 w-full relative flex items-end justify-between gap-3 pt-6 px-2">
              {[
                { day: 'Mon', out: 120, in: 65, booked: 24 },
                { day: 'Tue', out: 145, in: 72, booked: 28 },
                { day: 'Wed', out: 160, in: 80, booked: 32 },
                { day: 'Thu', out: 135, in: 68, booked: 27 },
                { day: 'Fri', out: 175, in: 95, booked: 36 },
                { day: 'Sat', out: 110, in: 85, booked: 31 },
                { day: 'Sun', out: 63, in: 47, booked: 16 },
              ].map((item, idx) => {
                const total = item.out + item.in;
                const outHeight = (item.out / 200) * 100;
                const inHeight = (item.in / 200) * 100;
                const bookedHeight = (item.booked / 50) * 80;

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <div className="w-full max-w-[48px] flex items-end gap-1 h-[80%] justify-center">
                      {/* Bar 1: Stacked Inbound/Outbound */}
                      <div className="w-4 bg-slate-800 rounded-t-sm flex flex-col justify-end overflow-hidden h-full">
                        <div
                          className="w-full bg-electric-cyan/80 transition-all group-hover:bg-electric-cyan"
                          style={{ height: `${inHeight * 0.5}%` }}
                          title={`Inbound: ${item.in}`}
                        />
                        <div
                          className="w-full bg-electric-blue transition-all group-hover:brightness-110"
                          style={{ height: `${outHeight * 0.5}%` }}
                          title={`Outbound: ${item.out}`}
                        />
                      </div>
                      {/* Bar 2: Booked appointments */}
                      <div
                        className="w-3 bg-emerald-500 rounded-t-sm transition-all group-hover:brightness-125"
                        style={{ height: `${bookedHeight}%` }}
                        title={`Appointments: ${item.booked}`}
                      />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 mt-2 block">
                      {item.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Live Call Log Table */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="text-sm font-bold text-white">Recent Real-Time Call Log</h4>
                <p className="text-xs text-slate-400">Searchable interaction records, qualification reasons, and next actions</p>
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter customer, campaign..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="pb-3 font-semibold">Ref ID</th>
                    <th className="pb-3 font-semibold">Customer</th>
                    <th className="pb-3 font-semibold">Direction</th>
                    <th className="pb-3 font-semibold">Campaign / Purpose</th>
                    <th className="pb-3 font-semibold">Duration</th>
                    <th className="pb-3 font-semibold">Call Outcome</th>
                    <th className="pb-3 font-semibold">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {filteredLogs.map((log) => {
                    return (
                      <tr key={log.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 font-mono text-slate-400">{log.id}</td>
                        <td className="py-3">
                          <span className="font-semibold text-white block">{log.customer}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{log.phone}</span>
                        </td>
                        <td className="py-3">
                          <span className={`inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded ${
                            log.type === 'Inbound'
                              ? 'bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20'
                              : 'bg-electric-blue/10 text-blue-300 border border-blue-500/20'
                          }`}>
                            {log.type === 'Inbound' ? <PhoneIncoming className="w-2.5 h-2.5" /> : <PhoneOutgoing className="w-2.5 h-2.5" />}
                            {log.type}
                          </span>
                        </td>
                        <td className="py-3 text-slate-300">
                          {log.campaign}
                          <span className="block text-[10px] text-slate-400 truncate max-w-xs">{log.intent}</span>
                        </td>
                        <td className="py-3 font-mono text-slate-400">{log.duration}</td>
                        <td className="py-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${
                            log.statusColor === 'emerald'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : log.statusColor === 'blue'
                              ? 'bg-blue-500/20 text-blue-300'
                              : log.statusColor === 'amber'
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-slate-800 text-slate-300'
                          }`}>
                            {log.statusColor === 'emerald' && <CheckCircle2 className="w-3 h-3" />}
                            {log.outcome}
                          </span>
                        </td>
                        <td className="py-3 text-slate-400 font-mono">{log.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-navy-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Enterprise reporting includes automated daily CSV exports and webhook triggers.</span>
            <span className="font-mono text-electric-cyan">Voxaro Analytics Engine</span>
          </div>

        </div>

      </div>
    </section>
  );
};
