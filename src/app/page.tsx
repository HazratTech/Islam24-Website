import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AppScreenshots from '@/components/AppScreenshots';
import Features from '@/components/Features';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Islam24 completely ad-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Islam24 is 100% ad-free and tracker-free. We prioritize a distraction-free environment for your daily Islamic worship."
      }
    },
    {
      "@type": "Question",
      "name": "Can I read the Quran offline on Islam24?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the complete Quran with verse-by-verse recitation and multiple language translations is available offline without requiring an active internet connection."
      }
    },
    {
      "@type": "Question",
      "name": "How does Islam24 calculate accurate prayer times?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Islam24 uses precise GPS coordinates and standard calculation methods (such as MWL, ISNA, Umm Al-Qura, Egypt, and Karachi) to deliver accurate Athan and prayer timings worldwide."
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="layout-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
