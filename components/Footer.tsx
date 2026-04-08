'use client';

import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Rocket, Send, Instagram } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <Twitter className="w-5 h-5" />, href: "#" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  { icon: <Instagram className="w-5 h-5" />, href: "#" },
  { icon: <Github className="w-5 h-5" />, href: "#" },
];

const footerLinks = [
  {
    title: "Eco-System",
    links: [
      { label: "Our Story", href: "#about" },
      { label: "Why SkillFutures", href: "#features" },
      { label: "Course Catalog", href: "#courses" },
      { label: "Community", href: "#" }
    ]
  },
  {
    title: "Knowledge",
    links: [
      { label: "Tech Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "GitHub Repos", href: "#" },
      { label: "Student Success", href: "#" }
    ]
  },
  {
    title: "Governance",
    links: [
      { label: "Privacy Protocol", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Certification", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 bg-midnight relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient light */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group mb-8">
              <div className="w-12 h-12 bg-midnight border border-gold/30 rounded-2xl flex items-center justify-center shadow-2xl group-hover:border-gold transition-all duration-500">
                <Rocket className="w-7 h-7 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter leading-none">
                  SKILL<span className="text-gold">FUTURES</span>
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black">
                  Elite Learning Systems
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 font-medium mb-10 max-w-sm leading-loose">
              Equipping the next generation of engineers with high-fidelity technical education. Built for those who build the future.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
            {footerLinks.map((group, index) => (
              <div key={index}>
                <h4 className="text-xs font-black mb-8 uppercase tracking-[0.2em] text-white/40">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href} className="text-gray-400 font-semibold text-sm hover:text-white transition-colors flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-gold rounded-full scale-0 group-hover:scale-100 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black mb-8 uppercase tracking-[0.2em] text-white/40">
              The Protocol
            </h4>
            <p className="text-gray-400 text-sm font-semibold mb-6">
              Subscribe for elite technical releases and event bypasses.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Secure email link" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:border-gold/50 text-white font-semibold transition-all"
              />
              <button className="absolute right-2 top-2 h-10 w-10 flex items-center justify-center bg-white rounded-xl text-midnight hover:bg-gold transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            <p>© 2026 SKILLFUTURES ACADEMY</p>
            <span className="hidden md:block w-2 h-2 rounded-full bg-white/5" />
            <p>SINGAPORE • GLOBAL CONTENT DELIVERY</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse shadow-[0_0_10px_#00FF00]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Network Status: Stable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
