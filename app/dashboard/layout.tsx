'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Sparkles,
  Award,
  Video
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Courses', href: '/dashboard/courses', icon: BookOpen },
  { name: 'Live Sessions', href: '/dashboard/live', icon: Video },
  { name: 'Certificates', href: '/dashboard/certificates', icon: Award },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { user, profile, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#161618]/90 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-72 flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-20 flex items-center px-6 border-b border-white/10 shrink-0 justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D2FF] to-[#0072FF] flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[#0A0A0B] rounded-lg flex items-center justify-center group-hover:bg-transparent transition-colors">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-xl font-black font-outfit tracking-tighter text-white">
              Skill<span className="text-[#00D2FF]">Futures</span>
            </span>
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-muted-foreground hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Card */}
        <div className="p-6">
          <div className="glass-card p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center text-black font-bold text-lg">
              {profile?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">
                {profile?.name || 'Elite Student'}
              </p>
              <p className="text-xs text-[#00D2FF] uppercase tracking-wider font-semibold">
                Pro Member
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-[#00D2FF]/10 text-[#00D2FF] border border-[#00D2FF]/20 shadow-[0_0_15px_rgba(0,210,255,0.1)]' 
                    : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-[#00D2FF]' : 'group-hover:text-white'}`} />
                <span className="font-semibold text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-6 mt-auto">
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-400/10 hover:text-red-300 transition-colors font-semibold text-sm"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header (Mobile mainly) */}
        <header className="h-20 lg:h-0 flex items-center px-6 lg:px-0 shrink-0 border-b border-white/10 lg:border-none bg-[#161618]/80 backdrop-blur-md lg:bg-transparent z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 lg:hidden flex justify-center">
             <span className="text-xl font-black font-outfit tracking-tighter text-white">
              Skill<span className="text-[#00D2FF]">Futures</span>
            </span>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 lg:p-10 overflow-auto relative">
          {/* Decorative background glow for main area */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D2FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
