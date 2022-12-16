import useSoundHook from "use-sound";

import basic_BGM from "./basic_BGM.mp3";
import button_click_sound from "./button_click_sound.mp3";
import show_star_sound from "./show_star_sound.mp3";

export const useStarSoundHook = () => {
  const [basicBGM, { stop }] = useSoundHook(basic_BGM, {
    loop: true,
    volume: 0.5
  });
  const [showStar] = useSoundHook(show_star_sound);
  const [clickButton] = useSoundHook(button_click_sound);

  return { basicBGM: { play: basicBGM, stop }, showStar, clickButton };
};
