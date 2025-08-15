'use client';

import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { WhyGetInsightZ } from '@/components/sections/WhyGetInsightZ';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { DemoSection } from '@/components/sections/DemoSection';
import { GetStarted } from '@/components/sections/GetStarted';
import { ContactSupport } from '@/components/sections/ContactSupport';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* 1. Hero Section - Hook & Value Proposition */}
      <Hero />
      
      {/* 2. Why GetInsightZ - Problem/Solution & Competitive Advantages */}
      <WhyGetInsightZ />
      
      {/* 3. How It Works - Process & User Journey */}
      <HowItWorks />
      
      {/* 4. Features - Capabilities & Benefits */}
      <Features />
      
      {/* 5. Demo Section - Proof & Market Reality */}
      <DemoSection />
      
      {/* 6. Get Started - Call to Action */}
      <GetStarted />
      
      {/* 7. Contact Support - Help & Support */}
      <ContactSupport />
      
      {/* 8. FAQ - Address Objections */}
      <FAQ />
      
      <Footer />
    </div>
  );
}

