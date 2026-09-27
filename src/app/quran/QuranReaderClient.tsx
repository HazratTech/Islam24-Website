'use client';

import React, { useState } from 'react';

interface SurahDemo {
  number: number;
  nameEnglish: string;
  nameArabic: string;
  revelation: string;
  ayahs: {
    verseNumber: number;
    arabic: string;
    english: string;
    bengali: string;
  }[];
}

const SURAH_DATA: SurahDemo[] = [
  {
    number: 1,
    nameEnglish: 'Al-Fatiha (The Opening)',
    nameArabic: 'الفاتحة',
    revelation: 'Meccan • 7 Verses',
    ayahs: [
      {
        verseNumber: 1,
        arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ۝١',
        english: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        bengali: 'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।',
      },
      {
        verseNumber: 2,
        arabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ۝٢',
        english: '[All] praise is due to Allah, Lord of the worlds.',
        bengali: 'সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সকল সৃষ্টির পালনকর্তা।',
      },
      {
        verseNumber: 3,
        arabic: 'ٱلرَّحْمَٰنِ ٱلرَّحِيمِ ۝٣',
        english: 'The Entirely Merciful, the Especially Merciful,',
        bengali: 'যিনি পরম করুণাময় ও অতি দয়ালু।',
      },
      {
        verseNumber: 4,
        arabic: 'مَٰلِكِ يَوْمِ ٱلدِّينِ ۝٤',
        english: 'Sovereign of the Day of Recompense.',
        bengali: 'যিনি প্রতিফল দিবসের মালিক।',
      },
      {
        verseNumber: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝٥',
        english: 'It is You we worship and You we ask for help.',
        bengali: 'আমরা কেবল তোমারই ইবাদত করি এবং কেবল তোমারই সাহায্য প্রার্থনা করি।',
      },
      {
        verseNumber: 6,
        arabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ۝٦',
        english: 'Guide us to the straight path -',
        bengali: 'আমাদের সরল সঠিক পথ প্রদর্শন করো,',
      },
      {
        verseNumber: 7,
        arabic: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ ۝٧',
        english: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
        bengali: 'সে সমস্ত মানুষের পথ, যাদেরকে তুমি পুরস্কৃত করেছ—যাদের উপর তোমার ক্রোধ বর্ষিত হয়নি এবং যারা পথভ্রষ্টও নয়।',
      },
    ],
  },
  {
    number: 112,
    nameEnglish: 'Al-Ikhlas (Sincerity)',
    nameArabic: 'الإخلاص',
    revelation: 'Meccan • 4 Verses',
    ayahs: [
      {
        verseNumber: 1,
        arabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝١',
        english: 'Say, "He is Allah, [who is] One,',
        bengali: 'বলুন, তিনিই আল্লাহ, একক,',
      },
      {
        verseNumber: 2,
        arabic: 'ٱللَّهُ ٱلصَّمَدُ ۝٢',
        english: 'Allah, the Eternal Refuge.',
        bengali: 'আল্লাহ অমুখাপেক্ষী,',
      },
      {
        verseNumber: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ ۝٣',
        english: 'He neither begets nor is born,',
        bengali: 'তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি,',
      },
      {
        verseNumber: 4,
        arabic: 'وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ ۝٤',
        english: 'Nor is there to Him any equivalent."',
        bengali: 'এবং তাঁর সমতুল্য কেউই নেই।',
      },
    ],
  },
  {
    number: 67,
    nameEnglish: 'Al-Mulk (The Sovereignty)',
    nameArabic: 'الملك',
    revelation: 'Meccan • 30 Verses',
    ayahs: [
      {
        verseNumber: 1,
        arabic: 'تَبَٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ ۝١',
        english: 'Blessed is He in whose hand is dominion, and He is over all things competent -',
        bengali: 'পুণ্যময় তিনি, যাঁর হাতে রাজত্ব এবং তিনি সর্ববিষয়ে সর্বশক্তিমান;',
      },
      {
        verseNumber: 2,
        arabic: 'ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُ ۝٢',
        english: '[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving -',
        bengali: 'যিনি সৃষ্টি করেছেন মরণ ও জীবন, যাতে তোমাদেরকে পরীক্ষা করেন কে তোমাদের মধ্যে কর্মে শ্রেষ্ঠ? তিনি পরাক্রমশালী, ক্ষমাশীল।',
      },
    ],
  },
];

export default function QuranReaderClient() {
  const [selectedSurah, setSelectedSurah] = useState(SURAH_DATA[0]);
  const [translationLang, setTranslationLang] = useState<'english' | 'bengali'>('english');
  const [fontSize, setFontSize] = useState<number>(2.2); // rem
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<number[]>([]);
  const [copiedVerse, setCopiedVerse] = useState<number | null>(null);

  const toggleBookmark = (vNum: number) => {
    setBookmarkedVerses((prev) =>
      prev.includes(vNum) ? prev.filter((n) => n !== vNum) : [...prev, vNum]
    );
  };

  const handleCopyAyah = (arabicText: string, translationText: string, vNum: number) => {
    navigator.clipboard.writeText(`${arabicText}\n\n"${translationText}" — Surah ${selectedSurah.nameEnglish} (Verse ${vNum})`);
    setCopiedVerse(vNum);
    setTimeout(() => setCopiedVerse(null), 2000);
  };

  return (
    <div style={{ maxWidth: '980px', margin: '0 auto' }}>
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--gold-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '40px 32px',
          boxShadow: 'var(--shadow-lg), 0 4px 20px rgba(184, 134, 11, 0.05)',
          marginBottom: '70px',
        }}
      >
        {/* Controls Toolbar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--bg-card-tint)',
            padding: '16px 20px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--emerald-border)',
            marginBottom: '32px',
          }}
        >
          {/* Surah Dropdown Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Surah:</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {SURAH_DATA.map((s) => (
                <button
                  key={s.number}
                  onClick={() => setSelectedSurah(s)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    border: selectedSurah.number === s.number ? '1px solid var(--gold)' : '1px solid #CBD5E1',
                    background: selectedSurah.number === s.number ? 'var(--gold)' : '#FFFFFF',
                    color: selectedSurah.number === s.number ? '#FFFFFF' : 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  {s.nameEnglish.split(' ')[0]} ({s.nameArabic})
                </button>
              ))}
            </div>
          </div>

          {/* Translation Toggle & Font Size */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', background: '#FFFFFF', padding: '3px', borderRadius: '8px', border: '1px solid var(--emerald-border)' }}>
              <button
                onClick={() => setTranslationLang('english')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  border: 'none',
                  background: translationLang === 'english' ? 'var(--emerald)' : 'transparent',
                  color: translationLang === 'english' ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                English
              </button>
              <button
                onClick={() => setTranslationLang('bengali')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  border: 'none',
                  background: translationLang === 'bengali' ? 'var(--emerald)' : 'transparent',
                  color: translationLang === 'bengali' ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                বাংলা
              </button>
            </div>

            {/* Font Zoom Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#FFFFFF', padding: '3px 8px', borderRadius: '8px', border: '1px solid var(--emerald-border)' }}>
              <button
                onClick={() => setFontSize((f) => Math.max(1.6, f - 0.2))}
                style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 800, padding: '2px 6px', color: 'var(--text-secondary)' }}
                title="Decrease Font Size"
              >
                A-
              </button>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Aa</span>
              <button
                onClick={() => setFontSize((f) => Math.min(3.2, f + 0.2))}
                style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 800, padding: '2px 6px', color: 'var(--text-secondary)' }}
                title="Increase Font Size"
              >
                A+
              </button>
            </div>
          </div>
        </div>

        {/* Surah Header Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FAF8F5 0%, #F5F1E6 100%)',
            border: '1px solid var(--gold-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 24px',
            textAlign: 'center',
            marginBottom: '32px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-arabic)', fontSize: '2.8rem', color: 'var(--gold-dark)', fontWeight: 700, direction: 'rtl', marginBottom: '4px' }}>
            سُورَةُ {selectedSurah.nameArabic}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
            {selectedSurah.nameEnglish}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '16px' }}>
            {selectedSurah.revelation}
          </div>

          {/* Audio Recitation Player Button */}
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 24px',
              borderRadius: 'var(--radius-pill)',
              background: isPlayingAudio ? 'var(--emerald)' : '#FFFFFF',
              color: isPlayingAudio ? '#FFFFFF' : 'var(--emerald-dark)',
              border: '1px solid var(--emerald-border)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease',
            }}
          >
            {isPlayingAudio ? (
              <>
                <span>⏸</span> Playing Recitation (Mishary Rashid)
              </>
            ) : (
              <>
                <span>▶</span> Listen to Surah Recitation
              </>
            )}
          </button>
        </div>

        {/* Verses Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {selectedSurah.ayahs.map((ayah) => {
            const isBookmarked = bookmarkedVerses.includes(ayah.verseNumber);
            const translationText = translationLang === 'english' ? ayah.english : ayah.bengali;

            return (
              <div
                key={ayah.verseNumber}
                style={{
                  background: '#FFFFFF',
                  border: isBookmarked ? '1px solid var(--gold)' : '1px solid var(--emerald-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 24px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Verse Header Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--bg-card-tint)',
                      border: '1px solid var(--emerald-border)',
                      color: 'var(--emerald-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                    }}
                  >
                    {ayah.verseNumber}
                  </span>

                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button
                      onClick={() => handleCopyAyah(ayah.arabic, translationText, ayah.verseNumber)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: copiedVerse === ayah.verseNumber ? 'var(--emerald)' : 'var(--text-muted)',
                      }}
                    >
                      {copiedVerse === ayah.verseNumber ? '✓ Copied' : 'Copy'}
                    </button>

                    <button
                      onClick={() => toggleBookmark(ayah.verseNumber)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color: isBookmarked ? 'var(--gold)' : '#CBD5E1',
                      }}
                      title="Bookmark Verse"
                    >
                      {isBookmarked ? '★' : '☆'}
                    </button>
                  </div>
                </div>

                {/* Arabic Text */}
                <div
                  style={{
                    fontFamily: 'var(--font-arabic)',
                    fontSize: `${fontSize}rem`,
                    color: 'var(--text-primary)',
                    direction: 'rtl',
                    lineHeight: 2.1,
                    marginBottom: '16px',
                    fontWeight: 700,
                  }}
                >
                  {ayah.arabic}
                </div>

                {/* Translation Text */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                  {translationText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
