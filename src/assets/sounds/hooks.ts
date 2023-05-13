import { useCallback, useState } from "react";
import useSoundHook from "use-sound";

import basic_BGM from "./basic_BGM.mp3";
import button_click_sound from "./button_click_sound.mp3";
import gacha_BGM from "./gacha_BGM.mp3";
import gacha_sound from "./gacha_sound.mp3";
import show_star_sound from "./show_star_sound.mp3";

export const useStarSoundHook = ({
  defaultAllVoulume,
  defaultBgmVolume,
  defaultEffectVoulme,
  defaultGachaVolume
}: {
  defaultAllVoulume: number;
  defaultBgmVolume: number;
  defaultEffectVoulme: number;
  defaultGachaVolume: number;
}) => {
  const [allVolume, setAllVolume] = useState(defaultAllVoulume);
  const [bgmVolume, setBgmVolume] = useState(defaultBgmVolume);
  const [effectVoulme, setEffectVoulme] = useState(defaultEffectVoulme);
  const [gachaVolume, setGachaVolume] = useState(defaultGachaVolume);
  const [basicBGM, { stop: basicBGMStop, sound: basicBGMsound }] = useSoundHook(
    basic_BGM,
    {
      loop: true,
      volume: bgmVolume * allVolume
    }
  );
  const [showStar] = useSoundHook(show_star_sound, {
    volume: effectVoulme * allVolume
  });
  const [clickButton] = useSoundHook(button_click_sound, {
    volume: effectVoulme * allVolume
  });
  const [gacha] = useSoundHook(gacha_sound, {
    volume: effectVoulme * allVolume
  });
  const [gachaBGM, { stop: gachaBGMStop, sound: gachaBGMsound }] = useSoundHook(
    gacha_BGM,
    {
      volume: gachaVolume * allVolume
    }
  );

  const controlAllVolume = useCallback((value: number) => {
    setAllVolume(value);

    window.localStorage.setItem("allVolume", String(value));
  }, []);

  const controlBgmVolume = useCallback((value: number) => {
    setBgmVolume(value);
    window.localStorage.setItem("bgmVolume", String(value));
  }, []);

  const controleffectVolume = useCallback((value: number) => {
    setEffectVoulme(value);
    window.localStorage.setItem("effectVoulme", String(value));
  }, []);

  const controlGachaVolume = useCallback((value: number) => {
    setGachaVolume(value);
    window.localStorage.setItem("gachaVolume", String(value));
  }, []);

  return {
    basicBGM: { play: basicBGM, stop: basicBGMStop, sound: basicBGMsound },
    showStar,
    clickButton,
    gacha,
    gachaBGM: { play: gachaBGM, stop: gachaBGMStop, sound: gachaBGMsound },
    allVolume,
    controlAllVolume,
    bgmVolume,
    controlBgmVolume,
    effectVoulme,
    controleffectVolume,
    gachaVolume,
    controlGachaVolume
  };
};
