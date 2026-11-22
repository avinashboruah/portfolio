import { createUISFX, bindUISFX } from 'uisfx';

let player = null;
let binding = null;

export function getSFX() {
  if (typeof window === 'undefined') return null;
  if (!player) {
    player = createUISFX({
      pack: 'minimal',
      volume: 0.6,
      enabled: true,
    });
  }
  return player;
}

export function initSFX() {
  if (typeof window === 'undefined' || binding) return player;
  const p = getSFX();
  if (p && typeof document !== 'undefined') {
    binding = bindUISFX(document, { player: p });
  }
  return p;
}

export function playSFX(cue, options) {
  const p = getSFX();
  if (!p) return null;
  p.unlock();
  return p.play(cue, options);
}

export function isSFXEnabled() {
  const p = getSFX();
  return p ? p.isEnabled() : true;
}

export function setSFXPack(packName) {
  const p = getSFX();
  if (p) {
    p.setPack(packName);
  }
}

export function getSFXPack() {
  const p = getSFX();
  return p ? p.getPack() : 'minimal';
}
