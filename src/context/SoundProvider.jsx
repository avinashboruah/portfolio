import { useEffect, useState, useMemo } from 'react';
import { initSFX, playSFX, setSFXPack, getSFXPack } from '../utils/sfx';
import { SoundContext } from './SoundContext';

export function SoundProvider({ children }) {
  const [soundPack, setSoundPackState] = useState('minimal');

  useEffect(() => {
    initSFX();
    setSoundPackState(getSFXPack());
  }, []);

  const handleSetSoundPack = (pack) => {
    setSFXPack(pack);
    setSoundPackState(pack);
    playSFX('select');
  };

  const value = useMemo(
    () => ({
      playSFX,
      soundPack,
      setSoundPack: handleSetSoundPack,
    }),
    [soundPack]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}
