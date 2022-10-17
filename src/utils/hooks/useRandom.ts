import { useEffect, useMemo, useState } from "react";

export type randomCharacterType = {
  name: string;
  class: string;
  src: string;
};

export const useRandom = (gomemList) => {
  const [randomClass, setRandomClass] = useState("");
  const [randomCharacter, setRandomCharacter] = useState<randomCharacterType>({
    name: "",
    class: "",
    src: "",
  });
  const ramdom = useMemo(() => Math.random(), []);

  const randomGomemNumber = useMemo(
    () => Math.floor(ramdom * Object.keys(gomemList).length),
    [gomemList, ramdom]
  );
  const randomGomemName = Object.keys(gomemList)[randomGomemNumber];
  const randomClassNumber = useMemo(
    () => Math.floor(ramdom * 100) + 1,
    [ramdom]
  );

  useEffect(() => {
    if (randomClassNumber <= 40) {
      setRandomClass("Common");
    } else if (40 < randomClassNumber && randomClassNumber <= 70) {
      setRandomClass("Rare");
    } else if (70 < randomClassNumber && randomClassNumber <= 90) {
      setRandomClass("Epic");
    } else if (90 < randomClassNumber && randomClassNumber <= 98) {
      setRandomClass("Legend");
    } else {
      setRandomClass("Legend");
    }
  }, [randomClassNumber]);

  useEffect(() => {
    if (randomGomemName && randomClass) {
      const randomCharacterNumber = Math.floor(
        ramdom * Object.keys(gomemList[randomGomemName][randomClass]).length
      );
      const randomCharacterImageName = Object.keys(
        gomemList[randomGomemName][randomClass]
      )[randomCharacterNumber];
      const randomCharacterImageData =
        gomemList[randomGomemName][randomClass][
          Object.keys(gomemList[randomGomemName][randomClass])[
            randomCharacterNumber
          ]
        ];
      setRandomCharacter({
        name: randomCharacterImageName,
        class: randomClass,
        src: randomCharacterImageData,
      });
    }
  }, [gomemList, ramdom, randomClass, randomGomemName]);

  return randomCharacter;
};
