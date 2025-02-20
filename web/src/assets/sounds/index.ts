const sounds: { [key: string]: string } = {};
const soundFiles = import.meta.glob('./*.mp3', { eager: true });

Object.entries(soundFiles).forEach(([path, module]) => {
  const name = path.split('/').pop()?.replace('.mp3', '');
  if (name) {
    sounds[name] = (module as { default: string }).default;
  }
});

export default sounds;