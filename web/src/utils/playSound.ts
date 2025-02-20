import { onClick, onHover } from "@/assets/sounds";

export const playSound = (sound: string) => {
  switch (sound) {
    case "onHover": {
      const hoverAudio = new Audio(onHover);
      hoverAudio.volume = .5;
      hoverAudio.play();
      break;
    }
    case "onClick": {
      const clickAudio = new Audio(onClick);
      clickAudio.volume = .5;
      clickAudio.play();
      break;
    }
    default:
      break;
  }
};