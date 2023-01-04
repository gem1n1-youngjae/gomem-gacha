import { useState } from "react";
import useSoundHook from "use-sound";

import basic_BGM from "./basic_BGM.mp3";
import button_click_sound from "./button_click_sound.mp3";
import gacha_BGM from "./gacha_BGM.mp3";
import gacha_sound from "./gacha_sound.mp3";
import show_star_sound from "./show_star_sound.mp3";

export const useStarSoundHook = () => {
  const [volume, setVolume] = useState(0.5);
  const [basicBGM, { stop: basicBGMStop }] = useSoundHook(basic_BGM, {
    loop: true,
    volume
  });
  const [showStar] = useSoundHook(show_star_sound, {
    volume
  });
  const [clickButton] = useSoundHook(button_click_sound, {
    volume
  });
  const [gacha] = useSoundHook(gacha_sound, {
    volume
  });
  const [gachaBGM, { stop: gachaBGMStop, sound }] = useSoundHook(gacha_BGM, {
    volume
  });

  return {
    basicBGM: { play: basicBGM, stop: basicBGMStop },
    showStar,
    clickButton,
    gacha,
    gachaBGM: { play: gachaBGM, stop: gachaBGMStop, sound },
    volume,
    setVolume: (value: number) => setVolume(value)
  };
};
