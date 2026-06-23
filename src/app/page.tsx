import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogoCloud from "@/components/landing/LogoCloud";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import LiveDemo from "@/components/landing/LiveDemo";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#050507] overflow-hidden">
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <LiveDemo />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}