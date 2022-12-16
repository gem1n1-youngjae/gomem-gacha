import useSoundHook from "use-sound";

import button_click_sound from "./button_click_sound.mp3";
import show_star_sound from "./show_star_sound.mp3";

export const useStarSoundHook = () => {
  const [showStar] = useSoundHook(show_star_sound);
  const [clickButton] = useSoundHook(button_click_sound);

  return { showStar, clickButton };
};
