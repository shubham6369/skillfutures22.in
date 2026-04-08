'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Sparkles, 
  Star,
  Zap,
  ArrowRight,
  ShieldCheck,
  X
} from 'lucide-react';

const packages = [
  {
    id: 'starter',
    name: 'Starter Bundle',
    price: 49,
    originalPrice: 199,
    icon: Sparkles,
    color: 'text-[#00D2FF]',
    bg: 'from-[#00D2FF]/20 to-transparent',
    border: 'border-[#00D2FF]/20',
    popular: false,
    features: [
      'Access to 2 Foundation Courses',
      'Basic Discord Support',
      'Certificate of Completion',
      '1 Month Platform Access'
    ]
  },
  {
    id: 'elite',
    name: 'Elite Mastery',
    price: 149,
    originalPrice: 499,
    icon: Star,
    color: 'text-[#FFD700]',
    bg: 'from-[#FFD700]/20 to-transparent',
    border: 'border-[#FFD700]',
    popular: true,
    features: [
      'Access to ALL Courses (15+)',
      'VIP Mastermind Group Access',
      'Weekly Live Group Coaching',
      'Advanced Certificates',
      'Lifetime Platform Access',
      '1-on-1 Portfolio Reviw'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Track',
    price: 89,
    originalPrice: 299,
    icon: Zap,
    color: 'text-[#FF00E5]',
    bg: 'from-[#FF00E5]/20 to-transparent',
    border: 'border-[#FF00E5]/20',
    popular: false,
    features: [
      'Access to 5 Premium Courses',
      'Priority Discord Support',
      'Standard Certificates',
      '6 Months Platform Access',
      'Monthly Q&A Vault'
    ]
  }
];

export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleEnroll = (pkgId: string) => {
    setSelectedPackage(pkgId);
  };

  const processMockPayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      // Auto-close success modal after some time
      setTimeout(() => {
         setPaymentSuccess(false);
         setSelectedPackage(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="space-y-8 relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-5xl font-black font-outfit text-white mb-4">
          Unlock Your <span className="gradient-gold">True Potential</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Invest in your future with our premium bundles. Get instant access to world-class education and a network of high-achievers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass-card relative flex flex-col p-8 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${pkg.border} ${pkg.popular ? 'md:-mt-4 md:mb-4 shadow-[0_0_40px_rgba(255,215,0,0.15)]' : ''}`}
          >
            {/* Background Gradient */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${pkg.bg} opacity-20 pointer-events-none`}></div>

            {pkg.popular && (
              <div className="absolute top-0 right-0 bg-[#FFD700] text-black text-xs font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl z-20">
                Most Popular
              </div>
            )}

            <div className="relative z-10 flex-1 flex flex-col">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 shadow-xl border border-white/10 ${pkg.color}`}>
                <pkg.icon className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              
              <div className="mb-6">
                <span className="text-neutral-500 line-through text-sm mr-2">${pkg.originalPrice}</span>
                <span className="text-4xl font-black text-white">${pkg.price}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${pkg.color}`} />
                    <span className="text-sm text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleEnroll(pkg.id)}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mock Payment Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card w-full max-w-md p-6 relative border-white/20 shadow-2xl"
            >
              {!paymentSuccess ? (
                <>
                  <button 
                    onClick={() => setSelectedPackage(null)}
                    disabled={isProcessing}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <h3 className="text-xl font-bold text-white mb-6">Complete Enrollment</h3>
                  
                  <div className="bg-black/50 rounded-xl p-4 mb-6 border border-white/5">
                    <div className="flex justify-between text-sm mb-2">
                       <span className="text-muted-foreground">Package</span>
                       <span className="text-white font-bold">{packages.find(p => p.id === selectedPackage)?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-muted-foreground">Total</span>
                       <span className="text-[#FFD700] font-black">${packages.find(p => p.id === selectedPackage)?.price}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                     <div>
                       <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Card Number</label>
                       <input type="text" placeholder="•••• •••• •••• ••••" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D2FF]" disabled={isProcessing} />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Expiry</label>
                          <input type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D2FF]" disabled={isProcessing} />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">CVC</label>
                          <input type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00D2FF]" disabled={isProcessing} />
                        </div>
                     </div>
                  </div>

                  <button
                    onClick={processMockPayment}
                    disabled={isProcessing}
                    className="w-full btn btn-primary py-4 rounded-xl text-lg relative overflow-hidden group"
                  >
                    {isProcessing ? (
                       <span className="flex items-center justify-center animate-pulse">Processing...</span>
                    ) : (
                       <span className="flex items-center justify-center">Pay Securely <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" /></span>
                    )}
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Secure 256-bit SSL Encryption
                  </p>
                </>
              ) : (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-green-400/20 flex items-center justify-center mb-6">
                     <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Payment Successful!</h3>
                  <p className="text-muted-foreground mb-6">Your enrollment has been confirmed. Welcome to the elite tier.</p>
                  <div className="text-[#00D2FF] text-sm animate-pulse">Redirecting to courses...</div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
