'use client';

import React, { useState } from 'react';

interface DhikrPhrase {
  arabic: string;
  transliteration: string;
  translation: string;
  target: number;
}

const TASBIH_ITEMS: DhikrPhrase[] = [
  {
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'SubhanAllah',
    translation: 'Glory be to Allah',
    target: 33,
  },
  {
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdulillah',
    translation: 'All praise is due to Allah',
    target: 33,
  },
  {
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    translation: 'Allah is the Greatest',
    target: 34,
  },
  {
    arabic: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfirullah wa atubu ilayh',
    translation: 'I seek forgiveness from Allah and repent to Him',
    target: 100,
  },
  {
    arabic: 'لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
    transliteration: 'La ilaha illallah wahdahu la sharika lah',
    translation: 'None has the right to be worshipped but Allah alone with no partner',
    target: 10,
  },
];

interface AzkarItem {
  id: string;
  category: 'morning' | 'evening' | 'prayer' | 'protection';
  title: string;
  source: string;
  count: number;
  arabic: string;
  transliteration: string;
  translation: string;
}

const AUTHENTIC_AZKAR: AzkarItem[] = [
  {
    id: 'azkar-1',
    category: 'morning',
    title: 'Sayyidul Istighfar (Chief of Prayers for Forgiveness)',
    source: 'Sahih al-Bukhari 6306',
    count: 1,
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: 'Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana ‘abduka, wa ana ‘ala ‘ahdika wa wa‘dika mastata‘tu, a‘udhu bika min sharri ma sana‘tu, abu’u laka bi ni‘matika ‘alayya, wa abu’u laka bi dhanbi faghfir li, fa innahu la yaghfiru al-dhunuba illa anta.',
    translation: 'O Allah, You are my Lord; there is no deity worthy of worship except You. You created me and I am Your servant, and I uphold Your covenant and promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge before You Your favor upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You.',
  },
  {
    id: 'azkar-2',
    category: 'morning',
    title: 'Protection from All Harm',
    source: 'Sunan Abi Dawud 5088',
    count: 3,
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Bismillahil-ladhi la yadurru ma‘as-mihi shay’un fil-ardi wa la fis-sama’i wa huwas-Sami‘ul-‘Alim.',
    translation: 'In the Name of Allah, with Whose Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing.',
  },
  {
    id: 'azkar-3',
    category: 'evening',
    title: 'Evening Remembrance of Allah’s Complete Words',
    source: 'Sahih Muslim 2709',
    count: 3,
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: 'A‘udhu bi kalimatil-lahit-tammati min sharri ma khalaq.',
    translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
  },
  {
    id: 'azkar-4',
    category: 'prayer',
    title: 'Supplication Immediately Following Salat',
    source: 'Sahih Muslim 591',
    count: 1,
    arabic: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    transliteration: 'Allahumma antas-Salamu wa minkas-salam, tabarakta ya dhal-jalali wal-ikram.',
    translation: 'O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor.',
  },
  {
    id: 'azkar-5',
    category: 'protection',
    title: 'Ayatul Kursi (Verse of the Throne)',
    source: 'Surah Al-Baqarah 2:255',
    count: 1,
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: 'Allahu la ilaha illa huwal-Hayyul-Qayyum. La ta’khudhuhu sinatun wa la nawm...',
    translation: 'Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep...',
  },
];

export default function AzkarDuaClient() {
  // Tasbih State
  const [activeTasbihIdx, setActiveTasbihIdx] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [totalCompletedCycles, setTotalCompletedCycles] = useState(0);
  const [isClickAnimating, setIsClickAnimating] = useState(false);

  // Azkar Filter & Progress
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'morning' | 'evening' | 'prayer' | 'protection'>('all');
  const [completedAzkarIds, setCompletedAzkarIds] = useState<string[]>([]);

  const activeTasbih = TASBIH_ITEMS[activeTasbihIdx];

  const handleTasbihIncrement = () => {
    setIsClickAnimating(true);
    setTimeout(() => setIsClickAnimating(false), 150);

    if (currentCount + 1 >= activeTasbih.target) {
      setCurrentCount(0);
      setTotalCompletedCycles((prev) => prev + 1);
      // Auto move to next phrase if in subhanAllah series
      if (activeTasbihIdx < 2) {
        setActiveTasbihIdx((prev) => prev + 1);
      }
    } else {
      setCurrentCount((prev) => prev + 1);
    }
  };

  const handleResetTasbih = () => {
    setCurrentCount(0);
  };

  const toggleAzkarCompleted = (id: string) => {
    setCompletedAzkarIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredAzkar =
    selectedCategory === 'all'
      ? AUTHENTIC_AZKAR
      : AUTHENTIC_AZKAR.filter((a) => a.category === selectedCategory);

  const progressPercent = Math.min(100, Math.round((currentCount / activeTasbih.target) * 100));

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* SECTION 1: INTERACTIVE DIGITAL TASBIH */}
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--emerald-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '44px 32px',
          boxShadow: 'var(--shadow-lg), 0 4px 20px rgba(13, 105, 69, 0.04)',
          marginBottom: '60px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: 'var(--emerald-dark)',
              background: 'var(--bg-card-tint)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--emerald-border)',
              display: 'inline-block',
              marginBottom: '12px',
            }}
          >
            Interactive Digital Tasbih
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Daily Dhikr &amp; Remembrance Clicker
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '540px', margin: '0 auto' }}>
            Choose your Dhikr recitation, tap the button or press Space to count, and track your daily remembrance with peace of mind.
          </p>
        </div>

        {/* Dhikr Selector Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
          {TASBIH_ITEMS.map((item, idx) => (
            <button
              key={item.transliteration}
              onClick={() => {
                setActiveTasbihIdx(idx);
                setCurrentCount(0);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                border: activeTasbihIdx === idx ? '1px solid var(--emerald)' : '1px solid var(--emerald-border)',
                background: activeTasbihIdx === idx ? 'var(--emerald)' : '#FAF8F5',
                color: activeTasbihIdx === idx ? '#FFFFFF' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {item.transliteration} ({item.target})
            </button>
          ))}
        </div>

        {/* Big Tactile Clicker Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 0',
          }}
        >
          {/* Active Dhikr Display */}
          <div
            style={{
              fontFamily: 'var(--font-arabic)',
              fontSize: '2.5rem',
              color: 'var(--emerald-dark)',
              direction: 'rtl',
              marginBottom: '6px',
              fontWeight: 700,
            }}
          >
            {activeTasbih.arabic}
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
            {activeTasbih.transliteration}
          </div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '28px', fontStyle: 'italic' }}>
            &ldquo;{activeTasbih.translation}&rdquo;
          </div>

          {/* Large Circular Clicker Button */}
          <button
            onClick={handleTasbihIncrement}
            style={{
              width: '210px',
              height: '210px',
              borderRadius: '50%',
              background: 'linear-gradient(145deg, #FFFFFF 0%, #F2F8F4 100%)',
              border: '6px solid var(--emerald-border)',
              boxShadow: isClickAnimating
                ? '0 4px 15px rgba(13, 105, 69, 0.3), inset 0 4px 10px rgba(0,0,0,0.08)'
                : '0 16px 40px rgba(13, 105, 69, 0.16), 0 2px 6px rgba(0,0,0,0.04)',
              transform: isClickAnimating ? 'scale(0.96)' : 'scale(1)',
              transition: 'all 0.12s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.4rem',
                fontWeight: 900,
                color: 'var(--emerald-dark)',
                lineHeight: 1,
              }}
            >
              {currentCount}
            </span>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}
            >
              Target: {activeTasbih.target}
            </span>
          </button>

          {/* Progress Bar */}
          <div
            style={{
              width: '100%',
              maxWidth: '320px',
              height: '8px',
              background: '#E2E8F0',
              borderRadius: 'var(--radius-pill)',
              overflow: 'hidden',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progressPercent}%`,
                background: 'linear-gradient(90deg, var(--emerald) 0%, var(--gold) 100%)',
                borderRadius: 'var(--radius-pill)',
                transition: 'width 0.2s ease',
              }}
            />
          </div>

          {/* Actions & Completed Cycles */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <button
              onClick={handleResetTasbih}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-pill)',
                background: '#FAF8F5',
                border: '1px solid var(--emerald-border)',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Reset Counter
            </button>
            <span style={{ fontSize: '0.85rem', color: 'var(--emerald-dark)', fontWeight: 600 }}>
              Completed Cycles: <strong>{totalCompletedCycles}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 2: AUTHENTIC HISNUL MUSLIM AZKAR CARDS */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="section-badge section-badge-gold">From Quran &amp; Sunnah</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Authentic Daily Supplications (Hisnul Muslim)
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Engage with verified Duas with clear Arabic typography, transliteration, and English meanings. Mark them as recited for your daily routine.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
          {(['all', 'morning', 'evening', 'prayer', 'protection'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                textTransform: 'capitalize',
                border: selectedCategory === cat ? '1px solid var(--emerald)' : '1px solid var(--emerald-border)',
                background: selectedCategory === cat ? 'var(--emerald)' : '#FFFFFF',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-primary)',
                cursor: 'pointer',
                boxShadow: varShadowSm(selectedCategory === cat),
                transition: 'all 0.2s ease',
              }}
            >
              {cat === 'all' ? 'All Supplications' : `${cat} Azkar`}
            </button>
          ))}
        </div>

        {/* Azkar Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {filteredAzkar.map((dua) => {
            const isDone = completedAzkarIds.includes(dua.id);
            return (
              <div
                key={dua.id}
                style={{
                  background: isDone ? '#F2F8F4' : '#FFFFFF',
                  border: isDone ? '1px solid var(--emerald)' : '1px solid var(--emerald-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px 32px',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        background: 'var(--bg-card-tint)',
                        color: 'var(--emerald-dark)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--emerald-border)',
                      }}
                    >
                      {dua.source}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        color: 'var(--gold-dark)',
                        background: '#FFF9ED',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--gold-border)',
                      }}
                    >
                      Repeat: {dua.count}x
                    </span>
                  </div>

                  <button
                    onClick={() => toggleAzkarCompleted(dua.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      border: isDone ? '1px solid var(--emerald)' : '1px solid #CBD5E1',
                      background: isDone ? 'var(--emerald)' : '#FFFFFF',
                      color: isDone ? '#FFFFFF' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isDone ? '✓ Recited' : 'Mark Recited'}
                  </button>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  {dua.title}
                </h3>

                {/* Arabic Calligraphy Box */}
                <div
                  style={{
                    background: '#FAF8F5',
                    border: '1px solid var(--emerald-border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                    fontFamily: 'var(--font-arabic)',
                    fontSize: '1.9rem',
                    color: 'var(--text-primary)',
                    direction: 'rtl',
                    lineHeight: 2,
                    marginBottom: '18px',
                    fontWeight: 600,
                  }}
                >
                  {dua.arabic}
                </div>

                {/* Transliteration */}
                <p style={{ color: 'var(--emerald-dark)', fontSize: '0.98rem', fontWeight: 600, marginBottom: '10px', fontStyle: 'italic', lineHeight: 1.6 }}>
                  {dua.transliteration}
                </p>

                {/* English Translation */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  &ldquo;{dua.translation}&rdquo;
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function varShadowSm(isActive: boolean) {
  return isActive ? '0 4px 14px rgba(13, 105, 69, 0.25)' : 'none';
}
