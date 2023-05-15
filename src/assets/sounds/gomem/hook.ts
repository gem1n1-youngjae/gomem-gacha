import { useCallback, useMemo } from "react";
import useSoundHook from "use-sound";

import bujung1 from "./bujung1.mp3";
import bujung2 from "./bujung2.mp3";
import businesskim1 from "./businesskim1.mp3";
import businesskim2 from "./businesskim2.mp3";
import businesskim_sky from "./businesskim_sky.mp3";
import cally1 from "./cally1.mp3";
import carnarJungtur1 from "./carnarJungtur1.mp3";
import carnarJungtur2 from "./carnarJungtur2.mp3";
import chunsick1 from "./chunsick1.mp3";
import chunsick2 from "./chunsick2.mp3";
import chunsick3 from "./chunsick3.mp3";
import freeter1 from "./freeter1.mp3";
import freeter2 from "./freeter2.mp3";
import freeter3 from "./freeter3.mp3";
import freeter_sbarish from "./freeter_sbarish.mp3";
import lee1 from "./lee1.mp3";
import lee2 from "./lee2.mp3";
import lee3 from "./lee3.mp3";
import lee4 from "./lee4.mp3";
import rusuk1 from "./rusuk1.mp3";
import rusuk2 from "./rusuk2.mp3";
import rusuk_hidden from "./rusuk_hidden.mp3";
import shrimp1 from "./shrimp1.mp3";
import shrimp2 from "./shrimp2.mp3";
import shrimp3 from "./shrimp3.mp3";
import shrimp4 from "./shrimp4.mp3";

export const useRandomGomemSound = ({
  defaultAllVoulume,
  defaultEffectVoulme
}: {
  defaultAllVoulume: number;

  defaultEffectVoulme: number;
}) => {
  const defaultVoulume = defaultAllVoulume * defaultEffectVoulme;
  const [bujung1Sound] = useSoundHook(bujung1, { volume: defaultVoulume });
  const [bujung2Sound] = useSoundHook(bujung2, { volume: defaultVoulume });
  const [cally1Sound] = useSoundHook(cally1, { volume: defaultVoulume });
  const [chunsick1Sound] = useSoundHook(chunsick1, { volume: defaultVoulume });
  const [chunsick2Sound] = useSoundHook(chunsick2, { volume: defaultVoulume });
  const [chunsick3Sound] = useSoundHook(chunsick3, { volume: defaultVoulume });
  const [freeter1Sound] = useSoundHook(freeter1, { volume: defaultVoulume });
  const [businesskim_skySound] = useSoundHook(businesskim_sky, {
    volume: defaultVoulume
  });
  const [freeter2Sound] = useSoundHook(freeter2, { volume: defaultVoulume });
  const [freeter3Sound] = useSoundHook(freeter3, { volume: defaultVoulume });
  const [businesskim1Sound] = useSoundHook(businesskim1, {
    volume: defaultVoulume
  });
  const [businesskim2Sound] = useSoundHook(businesskim2, {
    volume: defaultVoulume
  });
  const [carnarJungtur1Sound] = useSoundHook(carnarJungtur1, {
    volume: defaultVoulume
  });
  const [carnarJungtur2Sound] = useSoundHook(carnarJungtur2, {
    volume: defaultVoulume
  });
  const [freeter_sbarishSound] = useSoundHook(freeter_sbarish, {
    volume: defaultVoulume
  });
  const [lee1Sound] = useSoundHook(lee1, { volume: defaultVoulume });
  const [lee2Sound] = useSoundHook(lee2, { volume: defaultVoulume });
  const [lee3Sound] = useSoundHook(lee3, { volume: defaultVoulume });
  const [lee4Sound] = useSoundHook(lee4, { volume: defaultVoulume });
  const [rusuk_hiddenSound] = useSoundHook(rusuk_hidden, {
    volume: defaultVoulume
  });
  const [rusuk1Sound] = useSoundHook(rusuk1, { volume: defaultVoulume });
  const [rusuk2Sound] = useSoundHook(rusuk2, { volume: defaultVoulume });
  const [shrimp1Sound] = useSoundHook(shrimp1, { volume: defaultVoulume });
  const [shrimp2Sound] = useSoundHook(shrimp2, { volume: defaultVoulume });
  const [shrimp3Sound] = useSoundHook(shrimp3, { volume: defaultVoulume });
  const [shrimp4Sound] = useSoundHook(shrimp4, { volume: defaultVoulume });

  const randomSoundArray = useMemo(
    () => [
      bujung1Sound,
      bujung2Sound,
      cally1Sound,
      chunsick1Sound,
      chunsick2Sound,
      chunsick3Sound,
      freeter1Sound,
      businesskim_skySound,
      freeter2Sound,
      freeter3Sound,
      businesskim1Sound,
      businesskim2Sound,
      carnarJungtur1Sound,
      carnarJungtur2Sound,
      freeter_sbarishSound,
      lee1Sound,
      lee2Sound,
      lee3Sound,
      lee4Sound,
      rusuk_hiddenSound,
      rusuk1Sound,
      rusuk2Sound,
      shrimp1Sound,
      shrimp2Sound,
      shrimp3Sound,
      shrimp4Sound
    ],
    [
      bujung1Sound,
      bujung2Sound,
      cally1Sound,
      chunsick1Sound,
      chunsick2Sound,
      chunsick3Sound,
      freeter1Sound,
      businesskim_skySound,
      freeter2Sound,
      freeter3Sound,
      businesskim1Sound,
      businesskim2Sound,
      carnarJungtur1Sound,
      carnarJungtur2Sound,
      freeter_sbarishSound,
      lee1Sound,
      lee2Sound,
      lee3Sound,
      lee4Sound,
      rusuk_hiddenSound,
      rusuk1Sound,
      rusuk2Sound,
      shrimp1Sound,
      shrimp2Sound,
      shrimp3Sound,
      shrimp4Sound
    ]
  );

  const getRandomGomemSound = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * randomSoundArray.length);

    return randomSoundArray[randomNumber]();
  }, [randomSoundArray]);

  return { getRandomGomemSound };
};
