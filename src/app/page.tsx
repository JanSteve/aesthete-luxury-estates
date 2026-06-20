import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyShowcase from '@/components/PropertyShowcase';
import AuthorityBlock from '@/components/AuthorityBlock';
import LeadCapture from '@/components/LeadCapture';
import Footer from '@/components/Footer';
import VIPPopup from '@/components/VIPPopup';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-on-surface">
      <Navbar />
      <Hero />
      <PropertyShowcase />
      <AuthorityBlock />
      <LeadCapture />
      <Footer />
      <VIPPopup />
    </main>
  );
}
