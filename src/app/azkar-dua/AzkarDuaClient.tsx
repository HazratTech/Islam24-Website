'use client';

import React, { useState } from 'react';
import styles from './AzkarDua.module.css';

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
    title: 'Sayyid al-Istighfar (Chief of Prayers for Forgiveness)',
    source: 'Sahih Al-Bukhari 6306',
    count: 1,
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: "Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li, fa innahu la yaghfirudh-dhunuba illa Anta.",
    translation: "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favors upon me and I acknowledge my sin, so forgive me, for none forgives sins but You.",
  },
  {
    id: 'azkar-2',
    category: 'morning',
    title: 'Protection from Harm in Heaven & Earth',
    source: 'Sunan Abi Dawud 5088',
    count: 3,
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i, wa Huwas-Sami'ul-'Alim.",
    translation: "In the Name of Allah, with Whose Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing.",
  },
  {
    id: 'azkar-3',
    category: 'evening',
    title: 'Evening Satisfaction with Faith & Islam',
    source: 'Sunan At-Tirmidhi 3389',
    count: 3,
    arabic: 'رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا',
    transliteration: "Raditu billahi Rabban, wa bil-Islami dinan, wa bi-Muhammadin sallallahu 'alayhi wa sallama Nabiyya.",
    translation: "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace and blessings of Allah be upon him) as my Prophet.",
  },
  {
    id: 'azkar-4',
    category: 'prayer',
    title: 'Ayat al-Kursi (The Throne Verse) After Every Obligatory Prayer',
    source: 'Sunan An-Nasa’i Al-Kubra 9928',
    count: 1,
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ',
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm...",
    translation: "Allah! There is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep...",
  },
  {
    id: 'azkar-5',
    category: 'protection',
    title: 'Dua for Leaving the Home',
    source: 'Sunan Abi Dawud 5095',
    count: 1,
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: "Bismillahi tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah.",
    translation: "In the Name of Allah, I place my trust in Allah, and there is no power nor strength except with Allah.",
  },
];

export default function AzkarDuaClient() {
  // Tasbih state
  const [selectedPhrase, setSelectedPhrase] = useState(TASBIH_ITEMS[0]);
  const [count, setCount] = useState(0);

  // Hisnul Muslim filter state
  const [selectedCat, setSelectedCat] = useState<'all' | 'morning' | 'evening' | 'prayer' | 'protection'>('all');

  const handleIncrement = () => {
    if (count + 1 >= selectedPhrase.target) {
      setCount(selectedPhrase.target);
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate([40, 60, 40]);
      }
    } else {
      setCount((c) => c + 1);
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(20);
      }
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(0);
  };

  const handleSelectPhrase = (phrase: DhikrPhrase) => {
    setSelectedPhrase(phrase);
    setCount(0);
  };

  const filteredAzkar =
    selectedCat === 'all'
      ? AUTHENTIC_AZKAR
      : AUTHENTIC_AZKAR.filter((a) => a.category === selectedCat);

  return (
    <div className={styles.container}>
      {/* Interactive Tasbih Counter */}
      <div className={styles.tasbihCard}>
        <span className={styles.cardBadge}>
          Remembrance of Allah
        </span>
        <h2 className={styles.cardTitle}>
          Tactile Digital Tasbih Clicker
        </h2>
        <p className={styles.cardSubtitle}>
          Choose your sacred Dhikr phrase and tap the disc to record your praises with gentle haptic response.
        </p>

        {/* Dhikr Phrase Selector */}
        <div className={styles.phrasePills}>
          {TASBIH_ITEMS.map((item) => (
            <button
              key={item.transliteration}
              onClick={() => handleSelectPhrase(item)}
              className={`${styles.phraseBtn} ${selectedPhrase.transliteration === item.transliteration ? styles.phraseBtnActive : ''}`}
            >
              {item.transliteration} ({item.target})
            </button>
          ))}
        </div>

        {/* Selected Phrase Display */}
        <div className={styles.activePhraseBlock}>
          <div className={styles.activeArabic}>{selectedPhrase.arabic}</div>
          <div className={styles.activeTranslit}>{selectedPhrase.transliteration}</div>
          <div className={styles.activeTrans}>&ldquo;{selectedPhrase.translation}&rdquo;</div>
        </div>

        {/* Tactile Counter Disc */}
        <div className={styles.clickerStage}>
          <div
            onClick={handleIncrement}
            className={styles.counterDisc}
            role="button"
            tabIndex={0}
            aria-label="Click to count Dhikr"
          >
            <div className={styles.countNumber}>{count}</div>
            <div className={styles.countTarget}>TARGET {selectedPhrase.target}</div>
            <div className={styles.tapHint}>
              {count >= selectedPhrase.target ? 'Completed!' : 'Tap to Count'}
            </div>
          </div>

          <div className={styles.discControls}>
            <button onClick={handleReset} className={styles.resetDiscBtn}>
              Reset Counter
            </button>
          </div>
        </div>
      </div>

      {/* Hisnul Muslim Supplications Collection */}
      <div className={styles.hisnSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.cardBadge}>
            Fortress of the Muslim
          </span>
          <h2 className={styles.cardTitle}>
            Authentic Daily Duas &amp; Azkar
          </h2>
          <p className={styles.cardSubtitle}>
            Verified supplications from the Sunnah with complete Arabic text, English transliteration, translations, and authentic Hadith references.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.catTabs}>
          {[
            { id: 'all', label: 'All Supplications' },
            { id: 'morning', label: 'Morning Azkar' },
            { id: 'evening', label: 'Evening Azkar' },
            { id: 'prayer', label: 'After Salat' },
            { id: 'protection', label: 'Daily Protection' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id as 'all' | 'morning' | 'evening' | 'prayer' | 'protection')}
              className={`${styles.catBtn} ${selectedCat === cat.id ? styles.catBtnActive : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Azkar Cards List */}
        <div className={styles.azkarGrid}>
          {filteredAzkar.map((dua) => (
            <div key={dua.id} className={styles.duaCard}>
              <div className={styles.duaTop}>
                <h3 className={styles.duaTitle}>{dua.title}</h3>
                <div className={styles.duaMeta}>
                  <span className={styles.sourceBadge}>{dua.source}</span>
                  <span className={styles.countBadge}>Recite {dua.count}x</span>
                </div>
              </div>

              <div className={styles.duaArabic}>{dua.arabic}</div>
              <div className={styles.duaTranslit}>{dua.transliteration}</div>
              <div className={styles.duaTranslation}>&ldquo;{dua.translation}&rdquo;</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
