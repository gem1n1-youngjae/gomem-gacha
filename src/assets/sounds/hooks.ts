import useSoundHook from "use-sound";

import basic_BGM from "./basic_BGM.mp3";
import button_click_sound from "./button_click_sound.mp3";
import gacha_BGM from "./gacha_BGM.mp3";
import gacha_sound from "./gacha_sound.mp3";
import show_star_sound from "./show_star_sound.mp3";

const VOLUME = 0.3;

export const useStarSoundHook = () => {
  const [basicBGM, { stop: basicBGMStop }] = useSoundHook(basic_BGM, {
    loop: true,
    volume: VOLUME
  });
  const [showStar] = useSoundHook(show_star_sound, {
    volume: VOLUME
  });
  const [clickButton] = useSoundHook(button_click_sound);
  const [gacha] = useSoundHook(gacha_sound, {
    volume: VOLUME
  });
  const [gachaBGM, { stop: gachaBGMStop, sound }] = useSoundHook(gacha_BGM, {
    volume: VOLUME
  });

  return {
    basicBGM: { play: basicBGM, stop: basicBGMStop },
    showStar,
    clickButton,
    gacha,
    gachaBGM: { play: gachaBGM, stop: gachaBGMStop, sound }
  };
};
