'use client';

import React, { useState, useRef, useEffect } from 'react';
import { HiPlay, HiPause, HiCheck, HiStar } from 'react-icons/hi2';
import styles from './QuranReader.module.css';

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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrcMap: Record<number, string> = {
    1: 'https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3',
    112: 'https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/112.mp3',
    67: 'https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/067.mp3',
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingAudio(true);
      }).catch((e) => {
        console.error('Audio play error:', e);
      });
    }
  };

  const handleSelectSurah = (surah: SurahDemo) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlayingAudio(false);
    setSelectedSurah(surah);
  };

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
    <div className={styles.container}>
      <div className={styles.readerCard}>
        {/* Controls Toolbar */}
        <div className={styles.toolbar}>
          {/* Surah Dropdown Switcher */}
          <div className={styles.surahGroup}>
            <span className={styles.toolbarLabel}>Surah:</span>
            <div className={styles.surahPills}>
              {SURAH_DATA.map((s) => (
                <button
                  key={s.number}
                  onClick={() => handleSelectSurah(s)}
                  className={`${styles.surahBtn} ${selectedSurah.number === s.number ? styles.surahBtnActive : ''}`}
                >
                  {s.nameEnglish.split(' ')[0]} ({s.nameArabic})
                </button>
              ))}
            </div>
          </div>

          {/* Translation Toggle & Font Size */}
          <div className={styles.actionsGroup}>
            <div className={styles.langSegment}>
              <button
                onClick={() => setTranslationLang('english')}
                className={`${styles.langBtn} ${translationLang === 'english' ? styles.langBtnActive : ''}`}
              >
                English
              </button>
              <button
                onClick={() => setTranslationLang('bengali')}
                className={`${styles.langBtn} ${translationLang === 'bengali' ? styles.langBtnActive : ''}`}
              >
                বাংলা
              </button>
            </div>

            <div className={styles.fontSizeControls}>
              <button
                onClick={() => setFontSize((f) => Math.max(1.6, f - 0.2))}
                className={styles.sizeBtn}
                title="Decrease Arabic font size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize((f) => Math.min(3.2, f + 0.2))}
                className={styles.sizeBtn}
                title="Increase Arabic font size"
              >
                A+
              </button>
            </div>
          </div>
        </div>

        {/* Surah Header Banner */}
        <div className={styles.surahBanner}>
          <div className={styles.surahArabicTitle}>
            سُورَةُ {selectedSurah.nameArabic}
          </div>
          <div className={styles.surahEnglishTitle}>
            {selectedSurah.nameEnglish}
          </div>
          <div className={styles.surahMeta}>
            {selectedSurah.revelation} • Offline Uthmani Script
          </div>

          {/* Audio Recitation Bar */}
          <div className={styles.audioBar}>
            <audio
              ref={audioRef}
              src={audioSrcMap[selectedSurah.number]}
              onEnded={() => setIsPlayingAudio(false)}
              preload="none"
            />
            <button
              onClick={toggleAudio}
              className={styles.playBtn}
              aria-label={isPlayingAudio ? 'Pause recitation' : 'Play recitation'}
            >
              {isPlayingAudio ? <HiPause size={18} /> : <HiPlay size={18} />}
            </button>
            <span className={styles.audioLabel}>
              {isPlayingAudio ? 'Reciting: Mishary Rashid Alafasy' : 'Listen to Recitation (Mishary Alafasy)'}
            </span>
          </div>
        </div>

        {/* Verses List */}
        <div className={styles.versesList}>
          {selectedSurah.ayahs.map((ayah) => {
            const isBookmarked = bookmarkedVerses.includes(ayah.verseNumber);
            const isCopied = copiedVerse === ayah.verseNumber;
            const translationText =
              translationLang === 'english' ? ayah.english : ayah.bengali;

            return (
              <div key={ayah.verseNumber} className={styles.ayahItem}>
                <div className={styles.ayahHeader}>
                  <div className={styles.ayahNumberBadge}>
                    {ayah.verseNumber}
                  </div>

                  <div className={styles.ayahActions}>
                    <button
                      onClick={() => handleCopyAyah(ayah.arabic, translationText, ayah.verseNumber)}
                      className={styles.actionBtn}
                      title="Copy Ayah text"
                    >
                      {isCopied ? <><HiCheck size={14} /> Copied</> : 'Copy'}
                    </button>
                    <button
                      onClick={() => toggleBookmark(ayah.verseNumber)}
                      className={styles.actionBtn}
                      style={{ color: isBookmarked ? 'var(--gold)' : undefined }}
                      title="Bookmark Ayah"
                    >
                      <HiStar size={14} />
                      {isBookmarked ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>

                <div
                  className={styles.ayahArabicText}
                  style={{ fontSize: `${fontSize}rem` }}
                >
                  {ayah.arabic}
                </div>

                <div className={styles.ayahTranslation}>
                  &ldquo;{translationText}&rdquo;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
