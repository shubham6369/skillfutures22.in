'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, GraduationCap, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Active Students', value: '15,000+', icon: <Users className="w-5 h-5 text-electric" />, color: 'var(--primary-electric)' },
  { label: 'Premium Courses', value: '120+', icon: <GraduationCap className="w-5 h-5 text-gold" />, color: 'var(--primary-gold)' },
  { label: 'Success Rate', value: '98%', icon: <Trophy className="w-5 h-5 text-gold" />, color: 'var(--primary-gold)' },
];

const highlights = [
  'Curriculum designed by Tier-1 industry experts',
  'Flexible learning schedules for working professionals',
  'Dedicated career mentorship and placement support',
  'Hands-on projects with real-world impact',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-midnight relative overflow-hidden">
      {/* Ambient background shimmer */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 glass shadow-2xl z-10 p-2">
              <div className="rounded-[2rem] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Students collaborating at SkillFutures"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight/40 via-transparent to-electric/10 pointer-events-none" />
            </div>
            
            {/* Floating Info Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 md:right-4 glass-card p-6 rounded-3xl border-gold/30 shadow-2xl z-20 hidden sm:block max-w-[240px]"
            >
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center text-gold">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">CPE Accredited</p>
                  <p className="text-[10px] text-gray-400 font-medium leading-tight">
                    Government recognized council for Private Education Excellence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Background Blob Decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-electric/20 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 lg:mt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              Our Legacy
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Crafting the <span className="bg-gradient-to-r from-electric to-gold bg-clip-text text-transparent italic">Future of Digital</span> Mastery
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
              SkillFutures was established with a singular vision: to destroy the boundary between academic theory and industry reality. We build architects of the digital age, equipping professionals with the lethal combination of technical prowess and strategic insight.
            </p>

            <div className="space-y-5 mb-12">
              {highlights.map((item, id) => (
                <motion.div 
                  key={id} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: id * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center group-hover:bg-electric group-hover:text-midnight transition-all">
                    <CheckCircle2 className="w-4 h-4 text-electric group-hover:text-midnight transition-all" />
                  </div>
                  <span className="text-gray-300 font-semibold text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5">
              {stats.map((stat, id) => (
                <div key={id} className="text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 mb-2 sm:mb-0">
                      {stat.icon}
                    </div>
                    <span className="text-xl md:text-2xl font-black text-white">{stat.value}</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 flex items-center gap-2 px-8 py-4 bg-white text-midnight font-bold rounded-2xl hover:bg-gold transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
