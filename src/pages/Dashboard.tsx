import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, Wrench, FileText, BookOpen,
  ClipboardList, LogOut, ChevronRight, Shield, UserCircle,
  Plus, Key, Trash2, Download, Eye, CheckCircle, Clock,
  AlertTriangle, Menu, X, Lock, RefreshCw, Wifi, Activity,
  WifiOff, ToggleLeft, ToggleRight, EyeOff,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
type ViewMode = 'admin' | 'employee';
type ActiveSection = 'overview' | 'user-management' | 'site-tools' | 'payslips' | 'report-logs' | 'sops';

interface User {
  id: number; name: string; role: 'Admin' | 'Employee';
  status: 'active' | 'inactive'; email: string; password: string;
}
interface Payslip {
  id: number; userId: number; period: string; date: string;
  gross: string; net: string; status: 'paid' | 'pending';
}
interface Report {
  id: number; title: string; date: string; author: string;
  severity: 'info' | 'warning' | 'critical'; body: string;
}
interface SOP {
  id: number; title: string; category: string; version: string;
  updated: string; content: string;
}
interface ActivityEntry { id: number; text: string; time: string; dot: string; }

// ─── Initial data ─────────────────────────────────────────────────────────────
const INIT_USERS: User[] = [
  { id: 1, name: 'Ryan Mitchell', role: 'Admin', status: 'active', email: 'ryan@kairogroup.com', password: 'Testing123' },
  { id: 2, name: 'Sarah Chen', role: 'Employee', status: 'active', email: 'sarah@kairogroup.com', password: 'Welcome1' },
  { id: 3, name: 'James Fowler', role: 'Employee', status: 'active', email: 'james@kairogroup.com', password: 'Welcome1' },
  { id: 4, name: 'Mia Torres', role: 'Employee', status: 'inactive', email: 'mia@kairogroup.com', password: 'Welcome1' },
];
const INIT_PAYSLIPS: Payslip[] = [
  { id: 1, userId: 1, period: 'Feb 2026', date: '28 Feb 2026', gross: '£4,200.00', net: '£3,318.00', status: 'paid' },
  { id: 2, userId: 1, period: 'Jan 2026', date: '31 Jan 2026', gross: '£4,200.00', net: '£3,318.00', status: 'paid' },
  { id: 3, userId: 1, period: 'Dec 2025', date: '31 Dec 2025', gross: '£4,350.00', net: '£3,436.50', status: 'paid' },
  { id: 4, userId: 1, period: 'Nov 2025', date: '30 Nov 2025', gross: '£4,200.00', net: '£3,318.00', status: 'paid' },
];
const INIT_REPORTS: Report[] = [
  { id: 1, title: 'Site Audit — Collins St', date: '05 Mar 2026', author: 'Sarah Chen', severity: 'info', body: 'Routine audit of Collins Street site. All access controls verified. CCTV systems operational. No incidents reported during inspection period.' },
  { id: 2, title: 'Incident Report #IR-2026-14', date: '02 Mar 2026', author: 'James Fowler', severity: 'warning', body: 'Unauthorised individual attempted access at rear entrance at 02:14. Security personnel responded promptly. Individual escorted off premises. Police not required. CCTV footage retained.' },
  { id: 3, title: 'Monthly Summary — Feb 2026', date: '28 Feb 2026', author: 'Ryan Mitchell', severity: 'info', body: 'February operational summary. 12 sites monitored. 0 critical incidents. 2 minor reports resolved. Staff attendance 98%. All SLAs met.' },
  { id: 4, title: 'Hazard Identification #H-41', date: '20 Feb 2026', author: 'Mia Torres', severity: 'critical', body: 'Faulty emergency exit lighting identified at Warehouse B. Immediate maintenance requested. Area cordoned off. Replacement parts ordered — ETA 24hrs. Site manager notified.' },
];
const INIT_SOPS: SOP[] = [
  { id: 1, title: 'Onboarding Procedure', category: 'HR', version: 'v3.2', updated: '01 Mar 2026', content: '1. Submit ID verification documents\n2. Complete mandatory training modules\n3. Receive SIA licence confirmation\n4. Sign employment contract\n5. Receive uniform and equipment\n6. Complete site-specific induction\n7. Shadowing period (3 days minimum)\n8. Final sign-off by line manager' },
  { id: 2, title: 'Chemical Handling & Storage', category: 'Safety', version: 'v2.1', updated: '15 Feb 2026', content: '1. All chemicals stored in designated locked cabinets\n2. COSHH data sheets accessible at point of use\n3. PPE mandatory when handling any chemicals\n4. Spillage protocol: contain, report, clean per guidance\n5. Disposal via licensed contractor only\n6. Monthly inventory check required\n7. Training refresher every 6 months' },
  { id: 3, title: 'Client Communication Protocol', category: 'Operations', version: 'v4.0', updated: '10 Jan 2026', content: '1. All client contact logged in CRM system\n2. Response times: urgent 1hr, standard 4hr, general 24hr\n3. Complaints escalated to Team Leader within 1 hour\n4. No pricing discussions without manager approval\n5. Client confidentiality maintained at all times\n6. Written follow-up for all verbal agreements' },
  { id: 4, title: 'Emergency Response Plan', category: 'Safety', version: 'v2.5', updated: '05 Dec 2025', content: '1. Fire: evacuate, call 999, meet at assembly point\n2. Medical: call 999, do not move casualty, await paramedics\n3. Security breach: lock down, alert supervisor, do not engage\n4. All incidents logged within 2 hours\n5. Debrief required after all emergency activations\n6. Incident report filed within 24 hours' },
  { id: 5, title: 'Equipment Maintenance Schedule', category: 'Operations', version: 'v1.8', updated: '18 Nov 2025', content: '1. CCTV systems: monthly check, quarterly deep clean\n2. Radios: weekly battery check, annual service\n3. Vehicles: weekly visual inspection, monthly service log\n4. Body cameras: daily charge check, firmware updates when prompted\n5. Defects reported immediately to operations manager\n6. Maintenance log updated after every service' },
];
const INIT_ACTIVITY: ActivityEntry[] = [
  { id: 1, text: 'Incident Report #IR-2026-14 filed', time: '2 hours ago', dot: 'bg-amber-400' },
  { id: 2, text: 'Sarah Chen updated her profile', time: '5 hours ago', dot: 'bg-blue-400' },
  { id: 3, text: 'Monthly Summary for Feb published', time: '1 day ago', dot: 'bg-emerald-400' },
  { id: 4, text: 'New SOP uploaded: Chemical Handling v2.1', time: '3 days ago', dot: 'bg-violet-400' },
];

// ─── localStorage hook ───────────────────────────────────────────────────────
function usePersistedState<T>(key: string, initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const s = localStorage.getItem(key);
      return s ? (JSON.parse(s) as T) : initial;
    } catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(state)); }, [key, state]);
  return [state, setState];
}

// ─── Helper components ────────────────────────────────────────────────────────
function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl ${className}`}
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02)' }}>
      {children}
    </div>
  );
}

function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <GlassCard className="p-6">
      <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">{label}</p>
      <p className={`text-3xl font-black ${color} mb-1`}>{value}</p>
      <p className="text-xs text-white/30">{sub}</p>
    </GlassCard>
  );
}

function ModalWrap({ onClose, children, title }: { onClose: () => void; children: React.ReactNode; title: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg backdrop-blur-2xl bg-white/[0.06] border border-white/12 rounded-2xl p-7 max-h-[85vh] overflow-y-auto"
        style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.8)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-black text-white">{title}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/10 transition-all">
            <X className="w-4 h-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

const severityColor = (s: string) =>
  s === 'critical' ? 'text-red-400 bg-red-500/10 border-red-500/20' :
  s === 'warning'  ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' :
                     'text-blue-400 bg-blue-500/10 border-blue-500/20';
const severityIcon = (s: string) =>
  s === 'critical' ? <AlertTriangle className="w-3.5 h-3.5" /> :
  s === 'warning'  ? <Clock className="w-3.5 h-3.5" /> :
                     <CheckCircle className="w-3.5 h-3.5" />;

function inputCls(extra = '') {
  return `w-full bg-white/5 border border-white/10 focus:border-blue-500/40 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all ${extra}`;
}
function labelCls() { return 'block text-xs text-white/40 uppercase tracking-widest mb-2'; }

// ─── Main Dashboard ────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();

  // Persisted data
  const [users, setUsers]           = usePersistedState<User[]>('kg-users', INIT_USERS);
  const [payslips, setPayslips]     = usePersistedState<Payslip[]>('kg-payslips', INIT_PAYSLIPS);
  const [reports, setReports]       = usePersistedState<Report[]>('kg-reports', INIT_REPORTS);
  const [sops, setSops]             = usePersistedState<SOP[]>('kg-sops', INIT_SOPS);
  const [activity, setActivity]     = usePersistedState<ActivityEntry[]>('kg-activity', INIT_ACTIVITY);
  const [maintenance, setMaintenance] = usePersistedState<boolean>('kg-maintenance', false);

  // UI state
  const [view, setView]                 = useState<ViewMode>('admin');
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview');
  const [sidebarOpen, setSidebarOpen]   = useState(false);

  // Modal state
  const [modal, setModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<unknown>(null);

  // Form states
  const [newUser, setNewUser]         = useState({ name: '', email: '', role: 'Employee', password: '' });
  const [newReport, setNewReport]     = useState({ title: '', severity: 'info', body: '' });
  const [newSOP, setNewSOP]           = useState({ title: '', category: 'Operations', version: 'v1.0', content: '' });
  const [newPayslip, setNewPayslip]   = useState({ userId: '', period: '', date: '', gross: '', net: '', status: 'paid' });
  const [pwChange, setPwChange]       = useState({ newPw: '', confirm: '', show: false });
  const [pwError, setPwError]         = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [healthStatus, setHealthStatus] = useState<'idle' | 'checking' | 'done'>('idle');
  const [auditStatus, setAuditStatus] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [auditFindings, setAuditFindings] = useState<{ text: string; ok: boolean }[]>([]);

  const closeModal = () => { setModal(null); setModalData(null); setFormSuccess(''); setPwError(''); setPwChange({ newPw: '', confirm: '', show: false }); };

  const addActivity = (text: string, dot = 'bg-blue-400') => {
    setActivity(prev => [{ id: Date.now(), text, time: 'just now', dot }, ...prev].slice(0, 20));
  };

  // ── User management ─────────────────────────────────────────────────────────
  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    const u: User = { id: Date.now(), name: newUser.name, email: newUser.email, role: newUser.role as 'Admin' | 'Employee', status: 'active', password: newUser.password };
    setUsers(p => [...p, u]);
    addActivity(`New user created: ${u.name}`, 'bg-emerald-400');
    setFormSuccess('User created successfully!');
    setNewUser({ name: '', email: '', role: 'Employee', password: '' });
    setTimeout(closeModal, 1500);
  };

  const deleteUser = (u: User) => {
    setUsers(p => p.filter(x => x.id !== u.id));
    addActivity(`User deleted: ${u.name}`, 'bg-red-400');
    closeModal();
  };

  const toggleUserStatus = (id: number) => {
    setUsers(p => p.map(u => u.id === id ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' } : u));
    const u = users.find(x => x.id === id);
    if (u) addActivity(`${u.name} set to ${u.status === 'active' ? 'inactive' : 'active'}`);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwChange.newPw !== pwChange.confirm) { setPwError('Passwords do not match.'); return; }
    if (pwChange.newPw.length < 6) { setPwError('Password must be at least 6 characters.'); return; }
    const u = modalData as User;
    setUsers(p => p.map(x => x.id === u.id ? { ...x, password: pwChange.newPw } : x));
    addActivity(`Password changed for ${u.name}`, 'bg-amber-400');
    setFormSuccess('Password updated!');
    setTimeout(closeModal, 1500);
  };

  // ── Reports ──────────────────────────────────────────────────────────────────
  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    const r: Report = { id: Date.now(), title: newReport.title, date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), author: 'Ryan Mitchell', severity: newReport.severity as Report['severity'], body: newReport.body };
    setReports(p => [r, ...p]);
    addActivity(`New report filed: ${r.title}`, r.severity === 'critical' ? 'bg-red-400' : r.severity === 'warning' ? 'bg-amber-400' : 'bg-blue-400');
    setFormSuccess('Report submitted!');
    setNewReport({ title: '', severity: 'info', body: '' });
    setTimeout(closeModal, 1500);
  };

  const deleteReport = (r: Report) => {
    setReports(p => p.filter(x => x.id !== r.id));
    addActivity(`Report deleted: ${r.title}`, 'bg-red-400');
    closeModal();
  };

  // ── SOPs ─────────────────────────────────────────────────────────────────────
  const handleCreateSOP = (e: React.FormEvent) => {
    e.preventDefault();
    const s: SOP = { id: Date.now(), title: newSOP.title, category: newSOP.category, version: newSOP.version, updated: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), content: newSOP.content };
    setSops(p => [...p, s]);
    addActivity(`New SOP added: ${s.title}`, 'bg-emerald-400');
    setFormSuccess('SOP created!');
    setNewSOP({ title: '', category: 'Operations', version: 'v1.0', content: '' });
    setTimeout(closeModal, 1500);
  };

  const deleteSOP = (s: SOP) => {
    setSops(p => p.filter(x => x.id !== s.id));
    addActivity(`SOP deleted: ${s.title}`, 'bg-red-400');
    closeModal();
  };

  // ── Payslips ─────────────────────────────────────────────────────────────────
  const handleAddPayslip = (e: React.FormEvent) => {
    e.preventDefault();
    const p: Payslip = { id: Date.now(), userId: Number(newPayslip.userId), period: newPayslip.period, date: newPayslip.date, gross: newPayslip.gross, net: newPayslip.net, status: newPayslip.status as 'paid' | 'pending' };
    setPayslips(prev => [...prev, p]);
    const u = users.find(x => x.id === p.userId);
    addActivity(`Payslip added for ${u?.name ?? 'user'}: ${p.period}`, 'bg-violet-400');
    setFormSuccess('Payslip added!');
    setNewPayslip({ userId: '', period: '', date: '', gross: '', net: '', status: 'paid' });
    setTimeout(closeModal, 1500);
  };

  const downloadPayslip = (slip: Payslip) => {
    const u = users.find(x => x.id === slip.userId);
    const text = [
      '╔══════════════════════════════╗',
      '║       KAIRO GROUP            ║',
      '║       PAY SLIP               ║',
      '╚══════════════════════════════╝',
      '',
      `Employee : ${u?.name ?? 'Unknown'}`,
      `Period   : ${slip.period}`,
      `Date     : ${slip.date}`,
      '──────────────────────────────',
      `Gross Pay: ${slip.gross}`,
      `Net Pay  : ${slip.net}`,
      `Status   : ${slip.status.toUpperCase()}`,
      '──────────────────────────────',
      'Kairo Group · Internal Document',
      'This document is confidential.',
    ].join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `payslip-${slip.period.replace(' ', '-')}.txt`; a.click();
    URL.revokeObjectURL(url);
    addActivity(`Payslip downloaded: ${slip.period}`, 'bg-violet-400');
  };

  // ── Site tools ───────────────────────────────────────────────────────────────
  const exportCSV = () => {
    const rows: string[][] = [
      ['=== USERS ==='], ['Name', 'Email', 'Role', 'Status'],
      ...users.map(u => [u.name, u.email, u.role, u.status]),
      [], ['=== REPORTS ==='], ['Title', 'Date', 'Author', 'Severity'],
      ...reports.map(r => [r.title, r.date, r.author, r.severity]),
      [], ['=== SOPs ==='], ['Title', 'Category', 'Version', 'Updated'],
      ...sops.map(s => [s.title, s.category, s.version, s.updated]),
      [], ['=== PAYSLIPS ==='], ['Employee ID', 'Period', 'Date', 'Gross', 'Net', 'Status'],
      ...payslips.map(p => [String(p.userId), p.period, p.date, p.gross, p.net, p.status]),
    ];
    const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `kairo-export-${new Date().toISOString().split('T')[0]}.csv`; a.click();
    URL.revokeObjectURL(url);
    addActivity('Platform data exported as CSV', 'bg-emerald-400');
  };

  const runHealthCheck = () => {
    setHealthStatus('checking');
    setModal('health-check');
    setTimeout(() => setHealthStatus('done'), 2000);
  };

  const runAudit = () => {
    setAuditStatus('scanning');
    setModal('audit');
    setAuditFindings([]);
    setTimeout(() => {
      setAuditFindings([
        { text: `${users.filter(u => u.status === 'active').length} active user accounts verified`, ok: true },
        { text: `${users.filter(u => u.role === 'Admin').length} admin account(s) — review recommended`, ok: users.filter(u => u.role === 'Admin').length <= 2 },
        { text: `${reports.filter(r => r.severity === 'critical').length} unresolved critical reports`, ok: reports.filter(r => r.severity === 'critical').length === 0 },
        { text: 'All SOPs have version numbers', ok: sops.every(s => s.version) },
        { text: maintenance ? 'Maintenance mode is active' : 'Site is live and operational', ok: !maintenance },
        { text: 'Session tokens cleared on logout', ok: true },
      ]);
      setAuditStatus('done');
    }, 2500);
  };

  // ── Nav ───────────────────────────────────────────────────────────────────────
  const adminNav: { id: ActiveSection; label: string; icon: React.ReactNode }[] = [
    { id: 'overview',         label: 'Overview',         icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'user-management',  label: 'User Management',  icon: <Users className="w-4 h-4" /> },
    { id: 'payslips',         label: 'Payslips',         icon: <FileText className="w-4 h-4" /> },
    { id: 'report-logs',      label: 'Report Logs',      icon: <ClipboardList className="w-4 h-4" /> },
    { id: 'sops',             label: 'SOPs',             icon: <BookOpen className="w-4 h-4" /> },
    { id: 'site-tools',       label: 'Site Tools',       icon: <Wrench className="w-4 h-4" /> },
  ];
  const employeeNav: { id: ActiveSection; label: string; icon: React.ReactNode }[] = [
    { id: 'overview',    label: 'Overview',    icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'payslips',    label: 'My Payslips', icon: <FileText className="w-4 h-4" /> },
    { id: 'report-logs', label: 'Report Logs', icon: <ClipboardList className="w-4 h-4" /> },
    { id: 'sops',        label: 'SOPs',        icon: <BookOpen className="w-4 h-4" /> },
  ];
  const navItems = view === 'admin' ? adminNav : employeeNav;

  const myPayslips = payslips.filter(p => p.userId === 1);
  const openReports = reports.filter(r => r.severity !== 'info').length;

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen w-full bg-black text-white flex overflow-hidden">

      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-700/8 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-700/8 blur-[120px]" />
      </div>

      {/* Maintenance banner */}
      {maintenance && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500/90 backdrop-blur-sm text-black text-xs font-bold text-center py-1.5 tracking-widest uppercase">
          ⚠ Maintenance Mode Active — Site is currently offline to visitors
        </div>
      )}

      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* ── Sidebar ──────────────────────────────────────────────────────────── */}
      <aside
        className={`fixed top-0 left-0 h-full z-30 w-64 flex flex-col transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${maintenance ? 'mt-7' : ''}
          md:translate-x-0 md:relative md:z-auto md:flex
          backdrop-blur-2xl bg-white/[0.03] border-r border-white/8`}
        style={{ boxShadow: '4px 0 40px rgba(0,0,0,0.6)' }}
      >
        <div className="px-6 py-7 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/15 flex items-center justify-center">
              <Shield className="w-4 h-4 text-blue-400" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-black text-white tracking-tight">Kairo Group</p>
              <p className="text-[10px] text-white/30 tracking-widest uppercase">Internal Portal</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 border-b border-white/8">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-3 px-2">View Mode</p>
          <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/8">
            {(['admin', 'employee'] as ViewMode[]).map(v => (
              <button key={v} onClick={() => { setView(v); setActiveSection('overview'); }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  view === v
                    ? v === 'admin'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                      : 'bg-violet-500/20 text-violet-300 border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                    : 'text-white/40 hover:text-white/60'
                }`}>
                {v === 'admin' ? <Shield className="w-3.5 h-3.5" /> : <UserCircle className="w-3.5 h-3.5" />}
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-3 px-2">Navigation</p>
          {navItems.map(item => (
            <button key={item.id} onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                activeSection === item.id
                  ? view === 'admin'
                    ? 'bg-blue-500/15 text-blue-300 border border-blue-500/20'
                    : 'bg-violet-500/15 text-violet-300 border border-violet-500/20'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent'
              }`}>
              <span className={activeSection === item.id ? '' : 'opacity-60 group-hover:opacity-100 transition-opacity'}>{item.icon}</span>
              {item.label}
              {activeSection === item.id && <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-60" />}
            </button>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-white/8">
          <button onClick={() => navigate('/admin')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/30 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/15 transition-all duration-200">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main ─────────────────────────────────────────────────────────────── */}
      <main className={`flex-1 flex flex-col min-w-0 relative z-10 overflow-hidden ${maintenance ? 'mt-7' : ''}`}>
        <header className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/8 backdrop-blur-xl bg-black/20 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-white/40 hover:text-white transition-colors" onClick={() => setSidebarOpen(v => !v)}>
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h1 className="text-lg font-black text-white tracking-tight capitalize">{activeSection.replace('-', ' ')}</h1>
              <p className="text-xs text-white/30 hidden sm:block">{view === 'admin' ? 'Administrator Dashboard' : 'Employee Portal'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${view === 'admin' ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' : 'bg-violet-500/10 border-violet-500/20 text-violet-300'}`}>
              {view === 'admin' ? <Shield className="w-3.5 h-3.5" /> : <UserCircle className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{view === 'admin' ? 'Admin' : 'Employee'}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/15 flex items-center justify-center text-xs font-bold text-white">R</div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8 space-y-8">

          {/* ── OVERVIEW ──────────────────────────────────────────────────────── */}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Welcome back, Ryan</h2>
                <p className="text-sm text-white/40">{view === 'admin' ? "Here's what's happening across the platform." : 'Your personal portal overview.'}</p>
              </div>
              {view === 'admin' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard label="Total Users" value={String(users.length)} sub={`${users.filter(u => u.status === 'active').length} active`} color="text-blue-400" />
                  <StatCard label="Open Reports" value={String(openReports)} sub={`${reports.filter(r => r.severity === 'critical').length} critical`} color="text-amber-400" />
                  <StatCard label="SOPs" value={String(sops.length)} sub="Company procedures" color="text-emerald-400" />
                  <StatCard label="System" value={maintenance ? 'Maint.' : 'Live'} sub={maintenance ? 'Maintenance active' : 'All systems operational'} color={maintenance ? 'text-amber-400' : 'text-violet-400'} />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatCard label="Payslips" value={String(myPayslips.length)} sub={myPayslips[0] ? `Last: ${myPayslips[0].period}` : 'None yet'} color="text-blue-400" />
                  <StatCard label="Report Logs" value={String(reports.length)} sub={`${openReports} need attention`} color="text-amber-400" />
                  <StatCard label="SOPs" value={String(sops.length)} sub="Procedures available" color="text-emerald-400" />
                </div>
              )}
              <GlassCard className="p-6">
                <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {activity.slice(0, 6).map(item => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.dot} mt-1.5 flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white/70">{item.text}</p>
                        <p className="text-xs text-white/30 mt-0.5">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}

          {/* ── USER MANAGEMENT ──────────────────────────────────────────────── */}
          {activeSection === 'user-management' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">User Management</h2>
                  <p className="text-sm text-white/40 mt-0.5">{users.length} total · {users.filter(u => u.status === 'active').length} active</p>
                </div>
                <button onClick={() => setModal('new-user')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all"
                  style={{ boxShadow: '0 0 20px rgba(59,130,246,0.15)' }}>
                  <Plus className="w-4 h-4" /> New User
                </button>
              </div>
              <GlassCard className="overflow-hidden">
                <div className="px-6 py-4 border-b border-white/8">
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest">All Users</p>
                </div>
                <div className="divide-y divide-white/5">
                  {users.map(user => (
                    <div key={user.id} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-sm font-bold text-white/70 flex-shrink-0">
                          {user.name[0]}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                          <p className="text-xs text-white/35 truncate">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                        <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${user.role === 'Admin' ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' : 'bg-white/5 border-white/10 text-white/50'}`}>
                          {user.role}
                        </span>
                        <button onClick={() => toggleUserStatus(user.id)} title="Toggle status"
                          className={`w-2 h-2 rounded-full transition-all hover:scale-150 ${user.status === 'active' ? 'bg-emerald-400' : 'bg-white/20'}`} />
                        <button onClick={() => { setModal('change-password'); setModalData(user); }} title="Change password"
                          className="p-1.5 rounded-lg text-white/25 hover:text-blue-400 hover:bg-blue-500/10 transition-all">
                          <Key className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => { setModal('delete-user'); setModalData(user); }} title="Delete user"
                          className="p-1.5 rounded-lg text-white/25 hover:text-red-400 hover:bg-red-500/10 transition-all">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}

          {/* ── PAYSLIPS ─────────────────────────────────────────────────────── */}
          {activeSection === 'payslips' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">{view === 'admin' ? 'All Payslips' : 'My Payslips'}</h2>
                  <p className="text-sm text-white/40 mt-0.5">{view === 'admin' ? 'Manage employee pay records' : 'View and download your pay history'}</p>
                </div>
                {view === 'admin' && (
                  <button onClick={() => setModal('add-payslip')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-violet-500/20 border border-violet-500/30 hover:bg-violet-500/30 transition-all">
                    <Plus className="w-4 h-4" /> Add Payslip
                  </button>
                )}
              </div>
              <GlassCard className="overflow-hidden">
                <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Pay History</p>
                  <span className="text-xs text-white/30">{view === 'admin' ? payslips.length : myPayslips.length} records</span>
                </div>
                <div className="divide-y divide-white/5">
                  {(view === 'admin' ? payslips : myPayslips).map(slip => {
                    const owner = users.find(u => u.id === slip.userId);
                    return (
                      <div key={slip.id} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                            <FileText className="w-4 h-4 text-violet-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{slip.period}</p>
                            <p className="text-xs text-white/35">{slip.date}{view === 'admin' && owner ? ` · ${owner.name}` : ''}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 ml-4">
                          <div className="text-right hidden sm:block">
                            <p className="text-xs text-white/30">Gross</p>
                            <p className="text-sm font-semibold text-white">{slip.gross}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-white/30">Net</p>
                            <p className="text-sm font-bold text-emerald-400">{slip.net}</p>
                          </div>
                          <span className={`hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border font-medium ${slip.status === 'paid' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' : 'bg-amber-500/10 border-amber-500/20 text-amber-300'}`}>
                            {slip.status === 'paid' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                            {slip.status.charAt(0).toUpperCase() + slip.status.slice(1)}
                          </span>
                          <button onClick={() => downloadPayslip(slip)} className="p-2 rounded-lg text-white/25 hover:text-violet-400 hover:bg-violet-500/10 transition-all" title="Download payslip">
                            <Download className="w-4 h-4" />
                          </button>
                          {view === 'admin' && (
                            <button onClick={() => { setPayslips(p => p.filter(x => x.id !== slip.id)); addActivity(`Payslip removed: ${slip.period}`, 'bg-red-400'); }}
                              className="p-2 rounded-lg text-white/25 hover:text-red-400 hover:bg-red-500/10 transition-all" title="Delete payslip">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {(view === 'admin' ? payslips : myPayslips).length === 0 && (
                    <p className="text-center text-white/30 text-sm py-8">No payslips found.</p>
                  )}
                </div>
              </GlassCard>
            </div>
          )}

          {/* ── REPORT LOGS ──────────────────────────────────────────────────── */}
          {activeSection === 'report-logs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Report Logs</h2>
                  <p className="text-sm text-white/40 mt-0.5">{reports.length} reports · {reports.filter(r => r.severity === 'critical').length} critical</p>
                </div>
                <button onClick={() => setModal('new-report')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-violet-500/20 border border-violet-500/30 hover:bg-violet-500/30 transition-all">
                  <Plus className="w-4 h-4" /> New Report
                </button>
              </div>
              <div className="space-y-3">
                {reports.map(report => (
                  <GlassCard key={report.id} className="p-5 hover:bg-white/[0.05] transition-all duration-200">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold flex-shrink-0 mt-0.5 ${severityColor(report.severity)}`}>
                          {severityIcon(report.severity)}
                          <span className="capitalize">{report.severity}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white truncate">{report.title}</p>
                          <p className="text-xs text-white/35 mt-1">By {report.author} · {report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button onClick={() => { setModal('view-report'); setModalData(report); }} className="p-2 rounded-lg text-white/25 hover:text-white/60 hover:bg-white/5 transition-all" title="View report">
                          <Eye className="w-4 h-4" />
                        </button>
                        {view === 'admin' && (
                          <button onClick={() => { setModal('delete-report'); setModalData(report); }} className="p-2 rounded-lg text-white/25 hover:text-red-400 hover:bg-red-500/10 transition-all" title="Delete report">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* ── SOPs ─────────────────────────────────────────────────────────── */}
          {activeSection === 'sops' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Standard Operating Procedures</h2>
                  <p className="text-sm text-white/40 mt-0.5">{sops.length} documents</p>
                </div>
                {view === 'admin' && (
                  <button onClick={() => setModal('new-sop')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all">
                    <Plus className="w-4 h-4" /> New SOP
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sops.map(sop => (
                  <GlassCard key={sop.id} className="p-6 hover:bg-white/[0.05] transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-white/40 font-mono">{sop.version}</span>
                        {view === 'admin' && (
                          <button onClick={() => { setModal('delete-sop'); setModalData(sop); }} className="p-1.5 rounded-lg text-white/20 hover:text-red-400 hover:bg-red-500/10 transition-all">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{sop.title}</h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/40">{sop.category}</span>
                      <span className="text-xs text-white/30">Updated {sop.updated}</span>
                    </div>
                    <button onClick={() => { setModal('view-sop'); setModalData(sop); }}
                      className="mt-4 w-full py-2.5 rounded-xl text-xs font-semibold text-white/50 border border-white/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200">
                      View Document
                    </button>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* ── SITE TOOLS ───────────────────────────────────────────────────── */}
          {activeSection === 'site-tools' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-black text-white">Site Tools</h2>
                <p className="text-sm text-white/40 mt-0.5">Platform configuration and maintenance utilities</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: <Shield className="w-5 h-5 text-blue-400" />, title: 'Security Audit', desc: 'Run a full access and security review', action: 'Run Audit', color: 'blue', onClick: runAudit },
                  { icon: <Activity className="w-5 h-5 text-violet-400" />, title: 'Audit Logs', desc: 'View full system activity history', action: 'View Logs', color: 'violet', onClick: () => setModal('audit-logs') },
                  { icon: <Download className="w-5 h-5 text-emerald-400" />, title: 'Data Export', desc: 'Export all platform data as CSV', action: 'Export CSV', color: 'emerald', onClick: exportCSV },
                  {
                    icon: maintenance
                      ? <ToggleRight className="w-5 h-5 text-amber-400" />
                      : <ToggleLeft className="w-5 h-5 text-white/40" />,
                    title: 'Maintenance Mode',
                    desc: maintenance ? 'Site is currently in maintenance' : 'Toggle site maintenance window',
                    action: maintenance ? 'Disable' : 'Enable',
                    color: maintenance ? 'amber' : 'white',
                    onClick: () => { setMaintenance(v => !v); addActivity(maintenance ? 'Maintenance mode disabled' : 'Maintenance mode enabled', 'bg-amber-400'); },
                  },
                  { icon: <Wifi className="w-5 h-5 text-cyan-400" />, title: 'Health Check', desc: 'Verify all services are online', action: 'Check Now', color: 'cyan', onClick: runHealthCheck },
                  { icon: <Lock className="w-5 h-5 text-pink-400" />, title: 'Role Permissions', desc: 'View role-based access matrix', action: 'View Matrix', color: 'pink', onClick: () => setModal('role-permissions') },
                ].map((tool, i) => (
                  <GlassCard key={i} className="p-6 hover:bg-white/[0.06] transition-all duration-200 group">
                    <div className="mb-4">{tool.icon}</div>
                    <h3 className="text-sm font-bold text-white mb-1">{tool.title}</h3>
                    <p className="text-xs text-white/35 mb-5">{tool.desc}</p>
                    <button onClick={tool.onClick}
                      className={`w-full py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${
                        tool.color === 'blue'    ? 'border-blue-500/30 text-blue-400 hover:bg-blue-500/10'    :
                        tool.color === 'violet'  ? 'border-violet-500/30 text-violet-400 hover:bg-violet-500/10' :
                        tool.color === 'emerald' ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10' :
                        tool.color === 'amber'   ? 'border-amber-500/30 text-amber-400 hover:bg-amber-500/10' :
                        tool.color === 'cyan'    ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10' :
                        tool.color === 'pink'    ? 'border-pink-500/30 text-pink-400 hover:bg-pink-500/10' :
                        'border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
                      }`}>
                      {tool.action}
                    </button>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ── MODALS ────────────────────────────────────────────────────────────── */}

      {/* New User */}
      {modal === 'new-user' && (
        <ModalWrap title="Create New User" onClose={closeModal}>
          {formSuccess ? (
            <div className="flex items-center gap-2.5 text-emerald-400 py-4"><CheckCircle className="w-5 h-5" /><span className="text-sm font-medium">{formSuccess}</span></div>
          ) : (
            <form onSubmit={handleCreateUser} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelCls()}>Full Name</label><input className={inputCls()} value={newUser.name} onChange={e => setNewUser(p => ({ ...p, name: e.target.value }))} placeholder="Jane Smith" required /></div>
              <div><label className={labelCls()}>Email</label><input type="email" className={inputCls()} value={newUser.email} onChange={e => setNewUser(p => ({ ...p, email: e.target.value }))} placeholder="jane@kairogroup.com" required /></div>
              <div><label className={labelCls()}>Role</label>
                <select className={inputCls('appearance-none')} value={newUser.role} onChange={e => setNewUser(p => ({ ...p, role: e.target.value }))}>
                  <option value="Employee" className="bg-gray-900">Employee</option>
                  <option value="Admin" className="bg-gray-900">Admin</option>
                </select>
              </div>
              <div><label className={labelCls()}>Temp Password</label><input type="password" className={inputCls()} value={newUser.password} onChange={e => setNewUser(p => ({ ...p, password: e.target.value }))} placeholder="••••••••" required /></div>
              <div className="sm:col-span-2 flex justify-end gap-3">
                <button type="button" onClick={closeModal} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 hover:text-white/60 border border-white/10 hover:border-white/20 transition-all">Cancel</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all">Create User</button>
              </div>
            </form>
          )}
        </ModalWrap>
      )}

      {/* Delete User */}
      {modal === 'delete-user' && modalData && (
        <ModalWrap title="Delete User" onClose={closeModal}>
          <p className="text-sm text-white/60 mb-6">Are you sure you want to delete <span className="text-white font-semibold">{(modalData as User).name}</span>? This cannot be undone.</p>
          <div className="flex justify-end gap-3">
            <button onClick={closeModal} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 border border-white/10 hover:border-white/20 transition-all">Cancel</button>
            <button onClick={() => deleteUser(modalData as User)} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-all">Delete</button>
          </div>
        </ModalWrap>
      )}

      {/* Change Password */}
      {modal === 'change-password' && modalData && (
        <ModalWrap title={`Change Password — ${(modalData as User).name}`} onClose={closeModal}>
          {formSuccess ? (
            <div className="flex items-center gap-2.5 text-emerald-400 py-4"><CheckCircle className="w-5 h-5" /><span className="text-sm font-medium">{formSuccess}</span></div>
          ) : (
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className={labelCls()}>New Password</label>
                <div className="relative">
                  <input type={pwChange.show ? 'text' : 'password'} className={inputCls('pr-10')} value={pwChange.newPw} onChange={e => setPwChange(p => ({ ...p, newPw: e.target.value }))} placeholder="New password" required />
                  <button type="button" onClick={() => setPwChange(p => ({ ...p, show: !p.show }))} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
                    {pwChange.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div><label className={labelCls()}>Confirm Password</label><input type="password" className={inputCls()} value={pwChange.confirm} onChange={e => setPwChange(p => ({ ...p, confirm: e.target.value }))} placeholder="Confirm password" required /></div>
              {pwError && <p className="text-xs text-red-400">{pwError}</p>}
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={closeModal} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 border border-white/10 hover:border-white/20 transition-all">Cancel</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all">Update</button>
              </div>
            </form>
          )}
        </ModalWrap>
      )}

      {/* New Report */}
      {modal === 'new-report' && (
        <ModalWrap title="File New Report" onClose={closeModal}>
          {formSuccess ? (
            <div className="flex items-center gap-2.5 text-emerald-400 py-4"><CheckCircle className="w-5 h-5" /><span className="text-sm font-medium">{formSuccess}</span></div>
          ) : (
            <form onSubmit={handleCreateReport} className="space-y-4">
              <div><label className={labelCls()}>Title</label><input className={inputCls()} value={newReport.title} onChange={e => setNewReport(p => ({ ...p, title: e.target.value }))} placeholder="Report title" required /></div>
              <div><label className={labelCls()}>Severity</label>
                <select className={inputCls('appearance-none')} value={newReport.severity} onChange={e => setNewReport(p => ({ ...p, severity: e.target.value }))}>
                  <option value="info" className="bg-gray-900">Info</option>
                  <option value="warning" className="bg-gray-900">Warning</option>
                  <option value="critical" className="bg-gray-900">Critical</option>
                </select>
              </div>
              <div><label className={labelCls()}>Details</label><textarea className={inputCls('resize-none')} rows={4} value={newReport.body} onChange={e => setNewReport(p => ({ ...p, body: e.target.value }))} placeholder="Describe the incident or findings..." required /></div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={closeModal} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 border border-white/10 hover:border-white/20 transition-all">Cancel</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-violet-500/20 border border-violet-500/30 hover:bg-violet-500/30 transition-all">Submit Report</button>
              </div>
            </form>
          )}
        </ModalWrap>
      )}

      {/* View Report */}
      {modal === 'view-report' && modalData && (
        <ModalWrap title={(modalData as Report).title} onClose={closeModal}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold ${severityColor((modalData as Report).severity)}`}>
                {severityIcon((modalData as Report).severity)}
                <span className="capitalize">{(modalData as Report).severity}</span>
              </div>
              <span className="text-xs text-white/40">By {(modalData as Report).author} · {(modalData as Report).date}</span>
            </div>
            <div className="bg-white/5 border border-white/8 rounded-xl p-4">
              <p className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">{(modalData as Report).body}</p>
            </div>
          </div>
        </ModalWrap>
      )}

      {/* Delete Report */}
      {modal === 'delete-report' && modalData && (
        <ModalWrap title="Delete Report" onClose={closeModal}>
          <p className="text-sm text-white/60 mb-6">Delete <span className="text-white font-semibold">"{(modalData as Report).title}"</span>? This cannot be undone.</p>
          <div className="flex justify-end gap-3">
            <button onClick={closeModal} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 border border-white/10 hover:border-white/20 transition-all">Cancel</button>
            <button onClick={() => deleteReport(modalData as Report)} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-all">Delete</button>
          </div>
        </ModalWrap>
      )}

      {/* New SOP */}
      {modal === 'new-sop' && (
        <ModalWrap title="Create New SOP" onClose={closeModal}>
          {formSuccess ? (
            <div className="flex items-center gap-2.5 text-emerald-400 py-4"><CheckCircle className="w-5 h-5" /><span className="text-sm font-medium">{formSuccess}</span></div>
          ) : (
            <form onSubmit={handleCreateSOP} className="space-y-4">
              <div><label className={labelCls()}>Title</label><input className={inputCls()} value={newSOP.title} onChange={e => setNewSOP(p => ({ ...p, title: e.target.value }))} placeholder="SOP title" required /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className={labelCls()}>Category</label>
                  <select className={inputCls('appearance-none')} value={newSOP.category} onChange={e => setNewSOP(p => ({ ...p, category: e.target.value }))}>
                    {['Operations', 'HR', 'Safety', 'Finance', 'IT'].map(c => <option key={c} value={c} className="bg-gray-900">{c}</option>)}
                  </select>
                </div>
                <div><label className={labelCls()}>Version</label><input className={inputCls()} value={newSOP.version} onChange={e => setNewSOP(p => ({ ...p, version: e.target.value }))} placeholder="v1.0" required /></div>
              </div>
              <div><label className={labelCls()}>Content</label><textarea className={inputCls('resize-none')} rows={6} value={newSOP.content} onChange={e => setNewSOP(p => ({ ...p, content: e.target.value }))} placeholder="Document content..." required /></div>
              <div className="flex justify-end gap-3">
                <button type="button" onClick={closeModal} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 border border-white/10 hover:border-white/20 transition-all">Cancel</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all">Create SOP</button>
              </div>
            </form>
          )}
        </ModalWrap>
      )}

      {/* View SOP */}
      {modal === 'view-sop' && modalData && (
        <ModalWrap title={(modalData as SOP).title} onClose={closeModal}>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-white/40">
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">{(modalData as SOP).category}</span>
              <span className="font-mono px-2 py-1 rounded-lg bg-white/5 border border-white/10">{(modalData as SOP).version}</span>
              <span>Updated {(modalData as SOP).updated}</span>
            </div>
            <div className="bg-white/5 border border-white/8 rounded-xl p-4">
              <pre className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap font-sans">{(modalData as SOP).content}</pre>
            </div>
          </div>
        </ModalWrap>
      )}

      {/* Delete SOP */}
      {modal === 'delete-sop' && modalData && (
        <ModalWrap title="Delete SOP" onClose={closeModal}>
          <p className="text-sm text-white/60 mb-6">Delete <span className="text-white font-semibold">"{(modalData as SOP).title}"</span>? This cannot be undone.</p>
          <div className="flex justify-end gap-3">
            <button onClick={closeModal} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 border border-white/10 hover:border-white/20 transition-all">Cancel</button>
            <button onClick={() => deleteSOP(modalData as SOP)} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-all">Delete</button>
          </div>
        </ModalWrap>
      )}

      {/* Add Payslip */}
      {modal === 'add-payslip' && (
        <ModalWrap title="Add Payslip" onClose={closeModal}>
          {formSuccess ? (
            <div className="flex items-center gap-2.5 text-emerald-400 py-4"><CheckCircle className="w-5 h-5" /><span className="text-sm font-medium">{formSuccess}</span></div>
          ) : (
            <form onSubmit={handleAddPayslip} className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className={labelCls()}>Employee</label>
                <select className={inputCls('appearance-none')} value={newPayslip.userId} onChange={e => setNewPayslip(p => ({ ...p, userId: e.target.value }))} required>
                  <option value="" className="bg-gray-900">Select employee...</option>
                  {users.map(u => <option key={u.id} value={u.id} className="bg-gray-900">{u.name}</option>)}
                </select>
              </div>
              <div><label className={labelCls()}>Period</label><input className={inputCls()} value={newPayslip.period} onChange={e => setNewPayslip(p => ({ ...p, period: e.target.value }))} placeholder="Mar 2026" required /></div>
              <div><label className={labelCls()}>Date</label><input className={inputCls()} value={newPayslip.date} onChange={e => setNewPayslip(p => ({ ...p, date: e.target.value }))} placeholder="31 Mar 2026" required /></div>
              <div><label className={labelCls()}>Gross Pay</label><input className={inputCls()} value={newPayslip.gross} onChange={e => setNewPayslip(p => ({ ...p, gross: e.target.value }))} placeholder="£4,200.00" required /></div>
              <div><label className={labelCls()}>Net Pay</label><input className={inputCls()} value={newPayslip.net} onChange={e => setNewPayslip(p => ({ ...p, net: e.target.value }))} placeholder="£3,318.00" required /></div>
              <div className="col-span-2">
                <label className={labelCls()}>Status</label>
                <select className={inputCls('appearance-none')} value={newPayslip.status} onChange={e => setNewPayslip(p => ({ ...p, status: e.target.value }))}>
                  <option value="paid" className="bg-gray-900">Paid</option>
                  <option value="pending" className="bg-gray-900">Pending</option>
                </select>
              </div>
              <div className="col-span-2 flex justify-end gap-3">
                <button type="button" onClick={closeModal} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 border border-white/10 hover:border-white/20 transition-all">Cancel</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-violet-500/20 border border-violet-500/30 hover:bg-violet-500/30 transition-all">Add Payslip</button>
              </div>
            </form>
          )}
        </ModalWrap>
      )}

      {/* Security Audit */}
      {modal === 'audit' && (
        <ModalWrap title="Security Audit" onClose={closeModal}>
          {auditStatus === 'scanning' ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <RefreshCw className="w-8 h-8 text-blue-400 animate-spin" />
              <p className="text-sm text-white/50">Scanning platform…</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-white/40 mb-4">Audit completed · {new Date().toLocaleString()}</p>
              {auditFindings.map((f, i) => (
                <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm ${f.ok ? 'bg-emerald-500/5 border-emerald-500/15 text-emerald-300' : 'bg-red-500/5 border-red-500/15 text-red-300'}`}>
                  {f.ok ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <AlertTriangle className="w-4 h-4 flex-shrink-0" />}
                  {f.text}
                </div>
              ))}
            </div>
          )}
        </ModalWrap>
      )}

      {/* Audit Logs */}
      {modal === 'audit-logs' && (
        <ModalWrap title="Audit Logs" onClose={closeModal}>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {activity.map(item => (
              <div key={item.id} className="flex items-start gap-3 py-2 border-b border-white/5">
                <div className={`w-2 h-2 rounded-full ${item.dot} mt-1.5 flex-shrink-0`} />
                <div>
                  <p className="text-sm text-white/70">{item.text}</p>
                  <p className="text-xs text-white/30">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ModalWrap>
      )}

      {/* Health Check */}
      {modal === 'health-check' && (
        <ModalWrap title="Health Check" onClose={() => { closeModal(); setHealthStatus('idle'); }}>
          {healthStatus === 'checking' ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <Wifi className="w-8 h-8 text-cyan-400 animate-pulse" />
              <p className="text-sm text-white/50">Checking all services…</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-white/40 mb-4">All checks passed · {new Date().toLocaleString()}</p>
              {['API Gateway', 'Authentication Service', 'Database Connection', 'File Storage', 'Email Service', 'Monitoring'].map((svc, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                  <span className="text-sm text-white/70">{svc}</span>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" /> Operational
                  </div>
                </div>
              ))}
            </div>
          )}
        </ModalWrap>
      )}

      {/* Role Permissions */}
      {modal === 'role-permissions' && (
        <ModalWrap title="Role Permissions Matrix" onClose={closeModal}>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-white/40 font-semibold uppercase tracking-widest">Permission</th>
                  <th className="text-center py-2 px-3 text-blue-400 font-semibold uppercase tracking-widest">Admin</th>
                  <th className="text-center py-2 px-3 text-violet-400 font-semibold uppercase tracking-widest">Employee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['View Dashboard',       true,  true],
                  ['Manage Users',         true,  false],
                  ['Create Reports',       true,  true],
                  ['Delete Reports',       true,  false],
                  ['Manage SOPs',          true,  false],
                  ['View SOPs',            true,  true],
                  ['Manage Payslips',      true,  false],
                  ['View Own Payslips',    true,  true],
                  ['Site Tools Access',    true,  false],
                  ['Export Data',          true,  false],
                  ['Toggle Maintenance',   true,  false],
                ].map(([label, admin, emp], i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 pr-4 text-white/60">{label as string}</td>
                    <td className="text-center py-2.5 px-3">{admin ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mx-auto" /> : <X className="w-3.5 h-3.5 text-white/20 mx-auto" />}</td>
                    <td className="text-center py-2.5 px-3">{emp ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mx-auto" /> : <X className="w-3.5 h-3.5 text-white/20 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ModalWrap>
      )}

    </div>
  );
}
