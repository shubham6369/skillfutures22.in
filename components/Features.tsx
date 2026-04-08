'use client';

import { motion } from 'framer-motion';
import { Target, Zap, BarChart3, Shield, Layout, Github, Code2, Sparkles } from 'lucide-react';

const features = [
  {
    title: "Elite Curriculum",
    description: "Battle-tested learning paths designed by world-class engineers from Tier-1 tech giants.",
    icon: <Target className="w-8 h-8 text-electric" />,
    gradient: "from-electric/20 to-transparent"
  },
  {
    title: "Project Zero",
    description: "Go beyond tutorials. Build complex, production-grade applications with real architectural depth.",
    icon: <Code2 className="w-8 h-8 text-gold" />,
    gradient: "from-gold/20 to-transparent"
  },
  {
    title: "1-on-1 Mastery",
    description: "Get direct, unfiltered access to senior mentors who have worked where you want to be.",
    icon: <Zap className="w-8 h-8 text-electric" />,
    gradient: "from-electric/20 to-transparent"
  },
  {
    title: "Career Catalyst",
    description: "Unfair advantages in the job market with elite resume crafting and direct placement pipes.",
    icon: <BarChart3 className="w-8 h-8 text-gold" />,
    gradient: "from-gold/20 to-transparent"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-midnight relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-[10px] font-black tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles className="w-3 h-3" />
            Extreme Value
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight"
          >
            The <span className="bg-gradient-to-r from-electric to-gold bg-clip-text text-transparent">SkillFutures</span> Edge
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 leading-relaxed font-medium"
          >
            Generic courses create average workers. We create elite engineers. Our ecosystem is built for high-performance learning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
            >
              {/* Internal glow effect on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-gold transition-colors">{feature.title}</h3>
              
              <p className="text-gray-400 font-semibold leading-relaxed text-sm flex-grow">
                {feature.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-black text-white/40 uppercase tracking-widest">
                Learn more
                <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-gold transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
