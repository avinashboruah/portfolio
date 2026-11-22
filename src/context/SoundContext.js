import { createContext, useContext } from 'react';

export const SoundContext = createContext({
  playSFX: () => {},
  soundPack: 'minimal',
  setSoundPack: () => {},
});

export function useSound() {
  return useContext(SoundContext);
}
