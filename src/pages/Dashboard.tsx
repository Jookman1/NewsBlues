import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Wrench,
  FileText,
  BookOpen,
  ClipboardList,
  LogOut,
  ChevronRight,
  Shield,
  UserCircle,
  Plus,
  Key,
  Trash2,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  Menu,
  X,
} from 'lucide-react';

type ViewMode = 'admin' | 'employee';
type ActiveSection =
  | 'overview'
  | 'user-management'
  | 'site-tools'
  | 'payslips'
  | 'report-logs'
  | 'sops';

const MOCK_USERS = [
  { id: 1, name: 'Ryan Mitchell', role: 'Admin', status: 'active', email: 'ryan@kairogroup.com' },
  { id: 2, name: 'Sarah Chen', role: 'Employee', status: 'active', email: 'sarah@kairogroup.com' },
  { id: 3, name: 'James Fowler', role: 'Employee', status: 'active', email: 'james@kairogroup.com' },
  { id: 4, name: 'Mia Torres', role: 'Employee', status: 'inactive', email: 'mia@kairogroup.com' },
];

const MOCK_PAYSLIPS = [
  { id: 1, period: 'Feb 2026', date: '28 Feb 2026', gross: '$4,200.00', net: '$3,318.00', status: 'paid' },
  { id: 2, period: 'Jan 2026', date: '31 Jan 2026', gross: '$4,200.00', net: '$3,318.00', status: 'paid' },
  { id: 3, period: 'Dec 2025', date: '31 Dec 2025', gross: '$4,350.00', net: '$3,436.50', status: 'paid' },
  { id: 4, period: 'Nov 2025', date: '30 Nov 2025', gross: '$4,200.00', net: '$3,318.00', status: 'paid' },
];

const MOCK_REPORTS = [
  { id: 1, title: 'Site Audit — Collins St', date: '05 Mar 2026', author: 'Sarah Chen', severity: 'info' },
  { id: 2, title: 'Incident Report #IR-2026-14', date: '02 Mar 2026', author: 'James Fowler', severity: 'warning' },
  { id: 3, title: 'Monthly Summary — Feb 2026', date: '28 Feb 2026', author: 'Ryan Mitchell', severity: 'info' },
  { id: 4, title: 'Hazard Identification #H-41', date: '20 Feb 2026', author: 'Mia Torres', severity: 'critical' },
];

const MOCK_SOPS = [
  { id: 1, title: 'Onboarding Procedure', category: 'HR', version: 'v3.2', updated: '01 Mar 2026' },
  { id: 2, title: 'Chemical Handling & Storage', category: 'Safety', version: 'v2.1', updated: '15 Feb 2026' },
  { id: 3, title: 'Client Communication Protocol', category: 'Operations', version: 'v4.0', updated: '10 Jan 2026' },
  { id: 4, title: 'Emergency Response Plan', category: 'Safety', version: 'v2.5', updated: '05 Dec 2025' },
  { id: 5, title: 'Equipment Maintenance Schedule', category: 'Operations', version: 'v1.8', updated: '18 Nov 2025' },
];

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl ${className}`}
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02)' }}
    >
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

export default function Dashboard() {
  const navigate = useNavigate();
  const [view, setView] = useState<ViewMode>('admin');
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Employee', password: '' });
  const [createSuccess, setCreateSuccess] = useState(false);

  const adminNav: { id: ActiveSection; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'user-management', label: 'User Management', icon: <Users className="w-4 h-4" /> },
    { id: 'site-tools', label: 'Site Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const employeeNav: { id: ActiveSection; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'payslips', label: 'My Payslips', icon: <FileText className="w-4 h-4" /> },
    { id: 'report-logs', label: 'Report Logs', icon: <ClipboardList className="w-4 h-4" /> },
    { id: 'sops', label: 'SOPs', icon: <BookOpen className="w-4 h-4" /> },
  ];

  const navItems = view === 'admin' ? adminNav : employeeNav;

  const handleViewSwitch = (newView: ViewMode) => {
    setView(newView);
    setActiveSection('overview');
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    setCreateSuccess(true);
    setNewUser({ name: '', email: '', role: 'Employee', password: '' });
    setTimeout(() => { setCreateSuccess(false); setShowCreateUser(false); }, 2000);
  };

  const severityColor = (s: string) => {
    if (s === 'critical') return 'text-red-400 bg-red-500/10 border-red-500/20';
    if (s === 'warning') return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
  };

  const severityIcon = (s: string) => {
    if (s === 'critical') return <AlertTriangle className="w-3.5 h-3.5" />;
    if (s === 'warning') return <Clock className="w-3.5 h-3.5" />;
    return <CheckCircle className="w-3.5 h-3.5" />;
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex overflow-hidden">

      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-700/8 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-700/8 blur-[120px]" />
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-30 w-64 flex flex-col transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:relative md:z-auto md:flex
          backdrop-blur-2xl bg-white/[0.03] border-r border-white/8`}
        style={{ boxShadow: '4px 0 40px rgba(0,0,0,0.6)' }}
      >
        {/* Logo area */}
        <div className="px-6 py-7 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/15 flex items-center justify-center">
              <Shield className="w-4 h-4 text-blue-400" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-black text-white tracking-tight">Kairo Group</p>
              <p className="text-[10px] text-white/30 tracking-widest uppercase">Internal</p>
            </div>
          </div>
        </div>

        {/* View toggle */}
        <div className="px-4 py-4 border-b border-white/8">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-3 px-2">View Mode</p>
          <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/8">
            <button
              onClick={() => handleViewSwitch('admin')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                view === 'admin'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              Admin
            </button>
            <button
              onClick={() => handleViewSwitch('employee')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                view === 'employee'
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              <UserCircle className="w-3.5 h-3.5" />
              Employee
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-3 px-2">Navigation</p>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                activeSection === item.id
                  ? view === 'admin'
                    ? 'bg-blue-500/15 text-blue-300 border border-blue-500/20'
                    : 'bg-violet-500/15 text-violet-300 border border-violet-500/20'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent'
              }`}
            >
              <span className={activeSection === item.id ? '' : 'opacity-60 group-hover:opacity-100 transition-opacity'}>
                {item.icon}
              </span>
              {item.label}
              {activeSection === item.id && (
                <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-60" />
              )}
            </button>
          ))}
        </nav>

        {/* Sign out */}
        <div className="px-4 py-4 border-t border-white/8">
          <button
            onClick={() => navigate('/admin-login')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/30 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/15 transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 relative z-10 overflow-hidden">

        {/* Top bar */}
        <header className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-white/8 backdrop-blur-xl bg-black/20 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-white/40 hover:text-white transition-colors"
              onClick={() => setSidebarOpen(v => !v)}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h1 className="text-lg font-black text-white tracking-tight capitalize">
                {activeSection.replace('-', ' ')}
              </h1>
              <p className="text-xs text-white/30 hidden sm:block">
                {view === 'admin' ? 'Administrator Dashboard' : 'Employee Portal'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${
              view === 'admin'
                ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                : 'bg-violet-500/10 border-violet-500/20 text-violet-300'
            }`}>
              {view === 'admin' ? <Shield className="w-3.5 h-3.5" /> : <UserCircle className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{view === 'admin' ? 'Admin' : 'Employee'}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-white/15 flex items-center justify-center text-xs font-bold text-white">
              R
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8 space-y-8">

          {/* ── OVERVIEW ── */}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-1">
                  Welcome back, Ryan
                </h2>
                <p className="text-sm text-white/40">
                  {view === 'admin' ? 'Here\'s what\'s happening across the platform.' : 'Your personal portal overview.'}
                </p>
              </div>

              {view === 'admin' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard label="Total Users" value="4" sub="+1 this month" color="text-blue-400" />
                  <StatCard label="Active Sites" value="12" sub="3 new this quarter" color="text-emerald-400" />
                  <StatCard label="Open Reports" value="2" sub="1 critical" color="text-amber-400" />
                  <StatCard label="System Health" value="99%" sub="All systems operational" color="text-violet-400" />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatCard label="Payslips" value="12" sub="Last: Feb 2026" color="text-blue-400" />
                  <StatCard label="Report Logs" value="4" sub="1 pending review" color="text-amber-400" />
                  <StatCard label="SOPs" value="5" sub="1 updated recently" color="text-emerald-400" />
                </div>
              )}

              <GlassCard className="p-6">
                <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { text: 'Incident Report #IR-2026-14 filed', time: '2 hours ago', dot: 'bg-amber-400' },
                    { text: 'Sarah Chen updated her profile', time: '5 hours ago', dot: 'bg-blue-400' },
                    { text: 'Monthly Summary for Feb published', time: '1 day ago', dot: 'bg-emerald-400' },
                    { text: 'New SOP uploaded: Chemical Handling v2.1', time: '3 days ago', dot: 'bg-violet-400' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
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

          {/* ── USER MANAGEMENT (admin) ── */}
          {activeSection === 'user-management' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">User Management</h2>
                  <p className="text-sm text-white/40 mt-0.5">Create, edit, and manage user accounts</p>
                </div>
                <button
                  onClick={() => setShowCreateUser(v => !v)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-200"
                  style={{ boxShadow: '0 0 20px rgba(59,130,246,0.15)' }}
                >
                  <Plus className="w-4 h-4" />
                  New User
                </button>
              </div>

              {/* Create user form */}
              {showCreateUser && (
                <GlassCard className="p-6">
                  <h3 className="text-sm font-bold text-white mb-5">Create New User</h3>
                  {createSuccess ? (
                    <div className="flex items-center gap-2.5 text-emerald-400 py-4">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">User created successfully!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleCreateUser} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Full Name</label>
                        <input
                          type="text"
                          value={newUser.name}
                          onChange={e => setNewUser(p => ({ ...p, name: e.target.value }))}
                          placeholder="Jane Smith"
                          required
                          className="w-full bg-white/5 border border-white/10 focus:border-blue-500/40 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Email</label>
                        <input
                          type="email"
                          value={newUser.email}
                          onChange={e => setNewUser(p => ({ ...p, email: e.target.value }))}
                          placeholder="jane@kairogroup.com"
                          required
                          className="w-full bg-white/5 border border-white/10 focus:border-blue-500/40 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Role</label>
                        <select
                          value={newUser.role}
                          onChange={e => setNewUser(p => ({ ...p, role: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 focus:border-blue-500/40 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all appearance-none"
                        >
                          <option value="Employee" className="bg-gray-900">Employee</option>
                          <option value="Admin" className="bg-gray-900">Admin</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Temp Password</label>
                        <input
                          type="password"
                          value={newUser.password}
                          onChange={e => setNewUser(p => ({ ...p, password: e.target.value }))}
                          placeholder="••••••••"
                          required
                          className="w-full bg-white/5 border border-white/10 focus:border-blue-500/40 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-all"
                        />
                      </div>
                      <div className="sm:col-span-2 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setShowCreateUser(false)}
                          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white/40 hover:text-white/60 border border-white/10 hover:border-white/20 transition-all"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all"
                        >
                          Create User
                        </button>
                      </div>
                    </form>
                  )}
                </GlassCard>
              )}

              {/* Users table */}
              <GlassCard className="overflow-hidden">
                <div className="px-6 py-4 border-b border-white/8">
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest">All Users</p>
                </div>
                <div className="divide-y divide-white/5">
                  {MOCK_USERS.map(user => (
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
                        <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                          user.role === 'Admin'
                            ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                            : 'bg-white/5 border-white/10 text-white/50'
                        }`}>{user.role}</span>
                        <span className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-emerald-400' : 'bg-white/20'}`} />
                        <button className="p-1.5 rounded-lg text-white/25 hover:text-blue-400 hover:bg-blue-500/10 transition-all" title="Change password">
                          <Key className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-lg text-white/25 hover:text-red-400 hover:bg-red-500/10 transition-all" title="Delete user">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}

          {/* ── SITE TOOLS (admin) ── */}
          {activeSection === 'site-tools' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-black text-white">Site Tools</h2>
                <p className="text-sm text-white/40 mt-0.5">Platform configuration and maintenance utilities</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: <Shield className="w-5 h-5 text-blue-400" />, title: 'Security Audit', desc: 'Run a full access log review', action: 'Run Audit', color: 'blue' },
                  { icon: <Users className="w-5 h-5 text-violet-400" />, title: 'Role Permissions', desc: 'Configure role-based access', action: 'Configure', color: 'violet' },
                  { icon: <Download className="w-5 h-5 text-emerald-400" />, title: 'Data Export', desc: 'Export all platform data as CSV', action: 'Export', color: 'emerald' },
                  { icon: <Wrench className="w-5 h-5 text-amber-400" />, title: 'Maintenance Mode', desc: 'Toggle site maintenance window', action: 'Toggle', color: 'amber' },
                  { icon: <FileText className="w-5 h-5 text-pink-400" />, title: 'Audit Logs', desc: 'View full system event history', action: 'View Logs', color: 'pink' },
                  { icon: <CheckCircle className="w-5 h-5 text-cyan-400" />, title: 'Health Check', desc: 'Verify all services are online', action: 'Check Now', color: 'cyan' },
                ].map((tool, i) => (
                  <GlassCard key={i} className="p-6 hover:bg-white/[0.06] transition-all duration-200 group">
                    <div className="mb-4">{tool.icon}</div>
                    <h3 className="text-sm font-bold text-white mb-1">{tool.title}</h3>
                    <p className="text-xs text-white/35 mb-5">{tool.desc}</p>
                    <button className="w-full py-2 rounded-lg text-xs font-semibold text-white/50 border border-white/10 hover:border-white/20 hover:text-white/70 transition-all duration-200">
                      {tool.action}
                    </button>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* ── MY PAYSLIPS (employee) ── */}
          {activeSection === 'payslips' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-black text-white">My Payslips</h2>
                <p className="text-sm text-white/40 mt-0.5">View and download your pay history</p>
              </div>
              <GlassCard className="overflow-hidden">
                <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
                  <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Pay History</p>
                  <span className="text-xs text-white/30">{MOCK_PAYSLIPS.length} records</span>
                </div>
                <div className="divide-y divide-white/5">
                  {MOCK_PAYSLIPS.map(slip => (
                    <div key={slip.id} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-violet-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{slip.period}</p>
                          <p className="text-xs text-white/35">{slip.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 ml-4">
                        <div className="text-right hidden sm:block">
                          <p className="text-xs text-white/30">Gross</p>
                          <p className="text-sm font-semibold text-white">{slip.gross}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-white/30">Net</p>
                          <p className="text-sm font-bold text-emerald-400">{slip.net}</p>
                        </div>
                        <span className="hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium">
                          <CheckCircle className="w-3 h-3" /> Paid
                        </span>
                        <button className="p-2 rounded-lg text-white/25 hover:text-violet-400 hover:bg-violet-500/10 transition-all">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}

          {/* ── REPORT LOGS (employee) ── */}
          {activeSection === 'report-logs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">Report Logs</h2>
                  <p className="text-sm text-white/40 mt-0.5">Your submitted and assigned reports</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-violet-500/20 border border-violet-500/30 hover:bg-violet-500/30 transition-all">
                  <Plus className="w-4 h-4" />
                  New Report
                </button>
              </div>
              <div className="space-y-3">
                {MOCK_REPORTS.map(report => (
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
                      <button className="p-2 rounded-lg text-white/25 hover:text-white/60 hover:bg-white/5 transition-all flex-shrink-0">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* ── SOPs (employee) ── */}
          {activeSection === 'sops' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-black text-white">Standard Operating Procedures</h2>
                <p className="text-sm text-white/40 mt-0.5">Company procedures and guidelines</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_SOPS.map(sop => (
                  <GlassCard key={sop.id} className="p-6 hover:bg-white/[0.05] transition-all duration-200 group cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-white/40 font-mono">
                        {sop.version}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{sop.title}</h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/40">
                        {sop.category}
                      </span>
                      <span className="text-xs text-white/30">Updated {sop.updated}</span>
                    </div>
                    <button className="mt-4 w-full py-2.5 rounded-xl text-xs font-semibold text-white/50 border border-white/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200">
                      View Document
                    </button>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
