'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#00D2FF]" />
              <span className="text-sm font-semibold text-[#00D2FF] tracking-wide uppercase">Elite Learning Platform</span>
            </div>
            
            <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl leading-tight">
              <span className="block mb-2">Fuel Your</span>
              <span className="block gradient-text">Unstoppable Potential</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-xl leading-relaxed max-w-2xl sm:mx-auto lg:mx-0">
              Master the high-demand skills defining the digital era. Join a community of thousands achieving financial freedom through expert-led industry training.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-5">
              <Link
                href="#courses"
                className="btn btn-primary px-10 py-4 text-lg font-bold group"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#packages"
                className="btn btn-secondary px-10 py-4 text-lg font-bold"
              >
                View Packages
              </Link>
            </div>

            {/* Premium Stats Grid */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg sm:mx-auto lg:mx-0">
              <div className="glass-card card-gold p-4 flex flex-col items-center lg:items-start">
                <p className="text-3xl font-black text-white">10k+</p>
                <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mt-1">Learners</p>
              </div>
              <div className="glass-card p-4 flex flex-col items-center lg:items-start">
                <p className="text-3xl font-black text-white">50+</p>
                <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mt-1">Experts</p>
              </div>
              <div className="glass-card p-4 flex flex-col items-center lg:items-start col-span-2 sm:col-span-1">
                <p className="text-3xl font-black text-white">95%</p>
                <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mt-1">Growth Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image / Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-16 lg:mt-0 lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D2FF] to-[#FFD700] rounded-2xl blur opacity-20 animate-pulse-slow"></div>
              <div className="relative glass-card border-white/10 p-2 overflow-hidden aspect-square flex items-center justify-center">
                <Image
                  src="/hero-person.png"
                  alt="Elite Education"
                  width={500}
                  height={500}
                  className="rounded-xl object-contain"
                  priority
                />
                
                {/* Floating Achievement Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 -right-8 glass p-4 rounded-xl shadow-2xl border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Certified Platform</p>
                      <p className="text-sm font-bold text-white">Top 1% Global</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
