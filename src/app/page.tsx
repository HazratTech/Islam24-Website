import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AppScreenshots from '@/components/AppScreenshots';
import Features from '@/components/Features';
import ComparisonMatrix from '@/components/ComparisonMatrix';
import FaqSection from '@/components/FaqSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Islam24 completely free and ad-free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Islam24 is 100% ad-free, tracker-free, and popup-free. We believe that acts of worship like Prayer, Quran reading, and Azkar should never be interrupted by commercial advertisements."
      }
    },
    {
      "@type": "Question",
      "name": "Does Islam24 track or sell my location data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Islam24 operates with a strict 100% privacy-first policy. Your GPS coordinates are processed locally on your phone to determine Qibla direction and prayer timings. We never upload or sell your location data to third parties."
      }
    },
    {
      "@type": "Question",
      "name": "Can I read the Quran and listen to audio offline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The complete Quran text, verse-by-verse translations, and audio recitations are available for offline access so you can recite anywhere without requiring an active internet connection."
      }
    },
    {
      "@type": "Question",
      "name": "How are prayer times calculated in Islam24?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Islam24 uses high-accuracy astronomical algorithms supporting major global calculation methods including Muslim World League (MWL), ISNA, Umm Al-Qura (Makkah), Egyptian General Authority, and University of Islamic Sciences (Karachi)."
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
        <ComparisonMatrix />
        <FaqSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
