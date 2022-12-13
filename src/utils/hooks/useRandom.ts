import { useEffect, useMemo, useState } from "react";

import { star } from "constant/star";

export type randomCharacterType = {
  name: string;
  class: string;
  src: string;
  starCount: number;
  realName: string;
};

export const useRandom = (gomemList) => {
  const [randomClass, setRandomClass] = useState("");
  const [randomCharacter, setRandomCharacter] = useState<randomCharacterType>({
    name: "",
    class: "",
    src: "",
    starCount: 0,
    realName: ""
  });

  const ramdom = useMemo(() => Math.random(), []);

  const randomClassNumber = useMemo(() => Math.floor(ramdom * 100) + 1, []);

  useEffect(() => {
    if (randomClassNumber <= 100) {
      setRandomClass("common");
    } else if (40 < randomClassNumber && randomClassNumber <= 70) {
      setRandomClass("rare");
    } else if (70 < randomClassNumber && randomClassNumber <= 90) {
      setRandomClass("epic");
    } else if (90 < randomClassNumber && randomClassNumber <= 98) {
      setRandomClass("legend");
    } else if (98 < randomClassNumber && randomClassNumber <= 99) {
      setRandomClass("legend");
    } else {
      setRandomClass("legend");
    }
  }, [randomClassNumber]);

  const randomGomemNumber = useMemo(() => {
    if (gomemList[randomClass]) {
      return Math.floor(ramdom * Object.keys(gomemList[randomClass]).length);
    }
  }, [randomClass]);

  useEffect(() => {
    if (!!randomGomemNumber && randomClass) {
      const randomGomemName = Object.keys(gomemList[randomClass])[
        randomGomemNumber
      ];
      const randomGomemImageData = gomemList[randomClass][randomGomemName];
      const randomCharacterName =
        Object.keys(randomGomemImageData)[
          Math.floor(ramdom * Object.keys(randomGomemImageData).length)
        ];
      const randomCharacterImageSrc = randomGomemImageData[randomCharacterName];
      setRandomCharacter({
        name: randomCharacterName,
        class: randomClass,
        src: randomCharacterImageSrc,
        starCount: star[randomClass],
        realName: randomGomemName
      });
    }
  }, [gomemList, ramdom, randomClass]);

  return randomCharacter;
};
