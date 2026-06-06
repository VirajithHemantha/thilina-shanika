'use client';

import { useState, useEffect, Suspense } from 'react';
import { EnvelopeOpener } from '@/components/envelope-opener';
import HeroSection from '@/components/sections/HeroSection';
import GuestGreeting from '@/components/sections/GuestGreeting';
import CeremonyDetails from '@/components/sections/CeremonyDetails';
import CountdownSection from '@/components/sections/CountdownSection';
import VenueLocation from '@/components/sections/VenueLocation';
import RSVPSection from '@/components/sections/RSVPSection';
import BlessingsSection from '@/components/sections/BlessingsSection';
import FooterSection from '@/components/sections/FooterSection';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-background">
      {/* Persistent floating music player */}
      <MusicPlayer />

      {!isOpened ? (
        <Suspense fallback={null}>
          <EnvelopeOpener onEnvelopeOpen={() => setIsOpened(true)} />
        </Suspense>
      ) : (
        <>
          <HeroSection />
          <Suspense fallback={null}>
            <GuestGreeting />
          </Suspense>
          <CeremonyDetails />
          <CountdownSection />
          <VenueLocation />
          <RSVPSection />
          <BlessingsSection />
          <FooterSection />
        </>
      )}
    </div>
  );
}
