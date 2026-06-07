import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AppScreenshots from '@/components/AppScreenshots';
import Features from '@/components/Features';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>
        <Hero />
        <AppScreenshots />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
