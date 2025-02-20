import sounds from "@/assets/sounds";
type SoundName = keyof typeof sounds;

export const playSound = (sound: SoundName) => {
  const soundUrl = sounds[sound];
  if (soundUrl) {
    const audio = new Audio(soundUrl);
    audio.volume = 0.5;
    audio.play();
  }
};