'use client';

import { useState } from 'react';
import StickyInstallBar from '@/components/StickyInstallBar';
import QRCodeModal from '@/components/QRCodeModal';

export default function HomeClientEnhancements() {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <>
      <StickyInstallBar onOpenQR={() => setQrOpen(true)} />
      <QRCodeModal isOpen={qrOpen} onClose={() => setQrOpen(false)} />
    </>
  );
}
