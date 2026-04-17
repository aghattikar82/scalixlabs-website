import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Authority from "@/components/Authority";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WebDevHighlight from "@/components/WebDevHighlight";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import WhyUs from "@/components/WhyUs";
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
      <Stats />
      <Services />
      <WebDevHighlight />
      <Process />
      <Testimonials />
      <Pricing />
      <Calculator />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <LeadFormModal />
    </main>
  );
}
