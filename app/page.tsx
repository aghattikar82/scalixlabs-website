import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Services from "@/components/Services";
import WebDevHighlight from "@/components/WebDevHighlight";
import Process from "@/components/Process";
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
      <Authority />
      <Services />
      <WebDevHighlight />
      <Process />
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
