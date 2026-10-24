import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Authority from "@/components/Authority";
import Services from "@/components/Services";
import WebDevHighlight from "@/components/WebDevHighlight";
import WorkSection from "@/components/WorkSection";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadFormModal from "@/components/LeadFormModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Authority />
      <Services />
      <WebDevHighlight />
      <WorkSection />
      <Testimonials />
      <Process />
      <Pricing />
      <Calculator />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <LeadFormModal />
    </main>
  );
}
