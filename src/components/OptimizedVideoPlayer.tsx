'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface OptimizedVideoPlayerProps {
  poster: string;
  webm: string;
  mp4: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function OptimizedVideoPlayer({
  poster,
  webm,
  mp4,
  alt,
  className = '',
  width = 280,
  height = 560,
  priority = false,
}: OptimizedVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Lazy initialize low-performance detection cleanly without setState in useEffect
  const [isLowPerf] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && 'navigator' in window) {
      const nav = navigator as unknown as {
        connection?: { saveData?: boolean; effectiveType?: string };
        hardwareConcurrency?: number;
      };
      return Boolean(
        nav.connection?.saveData ||
        nav.connection?.effectiveType === '2g' ||
        nav.connection?.effectiveType === '3g' ||
        (nav.hardwareConcurrency && nav.hardwareConcurrency <= 2)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isLowPerf && !priority) return;

    const el = containerRef.current;
    if (!el) return;

    // IntersectionObserver to load and play video only when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
              setIsPlaying(true);
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { rootMargin: '150px', threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [isLowPerf, priority]);

  const handleManualPlay = () => {
    setShouldLoadVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }
    }, 50);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Video Element (Rendered lazily when visible) */}
      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          className={className}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
      ) : (
        /* Poster Image fallback for instant LCP and zero layout shift */
        <Image
          src={poster}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={className}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}

      {/* Manual play overlay for data-saver mode or manual pause */}
      {isLowPerf && !isPlaying && (
        <button
          onClick={handleManualPlay}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            border: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
          aria-label="Play Video"
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            ▶
          </div>
        </button>
      )}
    </div>
  );
}
