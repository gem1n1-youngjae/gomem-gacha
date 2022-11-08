import useSoundHook from "use-sound";

import show_star_sound from "./show_star_sound.mp3";

export const useStarSoundHook = () => {
  const [showStar] = useSoundHook(show_star_sound);

  return { showStar };
};
