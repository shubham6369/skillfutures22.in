'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] relative">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
