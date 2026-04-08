'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles, Mail, Lock, User, UserPlus, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await register(email, password, name, referralCode);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[#0A0A0B] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-black font-outfit tracking-tighter text-white">
              Skill<span className="text-[#FFD700]">Futures</span>
            </span>
          </Link>
        </div>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-white tracking-tight">
          Join the <span className="gradient-gold">Top 1%</span>
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground font-medium">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-[#00D2FF] hover:text-[#0072FF] transition-colors">
            Sign in instead
          </Link>
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <div className="glass-card py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-white/10 card-gold">
          <form className="space-y-5" onSubmit={handleRegister}>
            
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium text-center">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all sm:text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all sm:text-sm"
                  placeholder="••••••••"
                  minLength={6}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2 flex justify-between">
                <span>Referral Code</span>
                <span className="text-muted-foreground font-normal text-xs uppercase tracking-wider">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserPlus className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  className="block w-full pl-10 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all sm:text-sm"
                  placeholder="REF-XXXXX"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:from-[#FFA500] hover:to-[#FF8C00] shadow-[0_4px_15px_rgba(255,215,0,0.3)] hover:shadow-[0_8px_25px_rgba(255,215,0,0.5)] py-3 px-4 rounded-xl flex justify-center items-center text-sm font-bold disabled:opacity-70 disabled:cursor-not-allowed group border-none"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Create Elite Account
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-8">
             <p className="text-xs text-center text-muted-foreground">
              By registering, you agree to our <a href="#" className="text-white hover:underline">Terms of Service</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>
             </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
