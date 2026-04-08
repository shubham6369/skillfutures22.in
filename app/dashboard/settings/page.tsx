'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { 
  User, 
  Mail, 
  Shield, 
  Copy, 
  CheckCircle2,
  Gift,
  AlertCircle
} from 'lucide-react';

export default function SettingsPage() {
  const { profile, user } = useAuth();
  const [copied, setCopied] = useState(false);
  
  // Create a mock referral link based on their code (if they have one) or ID
  const refCode = profile?.referralCode || user?.uid?.substring(0, 8).toUpperCase() || 'ELITE2024';
  const referralLink = `https://skillfutures.com/register?ref=${refCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-black font-outfit text-white mb-2">Profile & Settings</h1>
        <p className="text-muted-foreground">Manage your account details and referral program.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Col: Account Details */}
        <div className="md:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 lg:p-8"
          >
            <h2 className="text-xl font-bold font-outfit text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-[#00D2FF]" />
              Account Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-white/40" />
                  </div>
                  <input
                    type="text"
                    disabled
                    value={profile?.name || 'Loading...'}
                    className="block w-full pl-10 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white opacity-70 cursor-not-allowed"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-white/40" />
                  </div>
                  <input
                    type="email"
                    disabled
                    value={profile?.email || user?.email || 'Loading...'}
                    className="block w-full pl-10 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white opacity-70 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-2">
                  Account Role
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Shield className="h-5 w-5 text-[#FFD700]" />
                  </div>
                  <div className="block w-full pl-10 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl py-3 px-4 text-[#FFD700] font-semibold uppercase tracking-wider text-sm">
                    {profile?.role || 'STUDENT'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex items-start gap-3 p-4 bg-[#00D2FF]/5 border border-[#00D2FF]/10 rounded-xl">
              <AlertCircle className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                To update your email or password, please contact support. This is a security measure for early-access accounts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Col: Referral Program */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card card-gold p-6 relative overflow-hidden"
          >
            {/* BG decorative element */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FFD700]/20 rounded-full blur-[30px] pointer-events-none"></div>

            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
              <Gift className="w-6 h-6 text-black" />
            </div>

            <h2 className="text-xl font-bold font-outfit text-white mb-2">
              Refer & Earn
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Give your friends 10% off their first course package and earn 15% commission on their purchase.
            </p>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white uppercase tracking-wider">Your Unique Link</label>
              <div className="flex bg-[#161618] border border-white/10 rounded-xl overflow-hidden p-1">
                <input 
                  type="text" 
                  readOnly 
                  value={referralLink}
                  className="bg-transparent border-none text-white text-sm px-3 w-full focus:outline-none"
                />
                <button 
                  onClick={copyToClipboard}
                  className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-lg shrink-0 flex items-center justify-center text-white"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase">Total Referrals</p>
                  <p className="text-2xl font-black text-white">0</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold uppercase">Earnings</p>
                  <p className="text-2xl font-black text-[#FFD700]">$0.00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
