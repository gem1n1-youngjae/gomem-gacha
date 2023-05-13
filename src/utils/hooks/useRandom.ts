import { useEffect, useMemo, useState } from "react";

import { gomemVideo } from "assets/videos/gomem";
import { star } from "constant/star";

export type randomCharacterType = {
  name: string;
  class: string;
  src: string;
  starCount: number;
  realName: string;
  videoSrc: string;
};

export const useRandom = (gomemList) => {
  const [randomClass, setRandomClass] = useState("common");
  const [randomCharacter, setRandomCharacter] = useState<randomCharacterType>({
    name: "",
    class: "",
    src: "",
    starCount: 0,
    realName: "",
    videoSrc: ""
  });

  const randomClassNumber = useMemo(() => {
    return Math.random() * 100 + 1;
  }, []);

  useEffect(() => {
    if (randomClassNumber <= 40) {
      setRandomClass("hidden");
    } else if (40 < randomClassNumber && randomClassNumber <= 70) {
      setRandomClass("rare");
    } else if (70 < randomClassNumber && randomClassNumber <= 90) {
      setRandomClass("epic");
    } else if (90 < randomClassNumber && randomClassNumber <= 98) {
      setRandomClass("legend");
    } else if (98 < randomClassNumber && randomClassNumber <= 99) {
      setRandomClass("ultraLegeno");
    } else {
      setRandomClass("hidden");
    }
  }, [randomClassNumber]);

  const randomGomemNumber = useMemo(() => {
    if (gomemList[randomClass]) {
      return Math.floor(
        Math.random() * Object.keys(gomemList[randomClass]).length
      );
    }
  }, [gomemList, randomClass]);

  useEffect(() => {
    const randomGomemName = Object.keys(gomemList[randomClass])[
      randomGomemNumber
    ];
    const randomGomemImageData = gomemList[randomClass][randomGomemName];
    const randomCharacterName =
      Object.keys(randomGomemImageData)[
        Math.floor(Math.random() * Object.keys(randomGomemImageData).length)
      ];
    const randomCharacterImageSrc = randomGomemImageData[randomCharacterName];

    setRandomCharacter({
      name: randomCharacterName,
      class: randomClass,
      src: randomCharacterImageSrc,
      starCount: star[randomClass],
      realName: randomGomemName,
      videoSrc: gomemVideo[randomCharacterName] ?? ""
    });
  }, [gomemList, randomClass, randomGomemNumber]);

  return randomCharacter;
};
