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

  const randomGomemNumber = useMemo(
    () => Math.floor(ramdom * Object.keys(gomemList).length),
    [gomemList, ramdom]
  );
  const randomGomemName = Object.keys(gomemList)[randomGomemNumber];

  const randomClassNumber = useMemo(
    () => Math.floor(ramdom * 100) + 1,
    [gomemList, ramdom]
  );

  const rendomGomemRealName = gomemList[randomGomemName].realName;

  const isGomemHaveHiddion = useMemo(
    () =>
      Object.keys(gomemList[randomGomemName]).filter(
        (gomem) => gomem === "Hidden"
      ).length !== 0,
    [randomGomemName]
  );

  useEffect(() => {
    if (rendomGomemRealName === "길햇님송이") {
      setRandomClass("Common");
      return;
    }
    if (randomClassNumber <= 40) {
      setRandomClass("Common");
    } else if (40 < randomClassNumber && randomClassNumber <= 70) {
      setRandomClass("Rare");
    } else if (70 < randomClassNumber && randomClassNumber <= 90) {
      setRandomClass("Epic");
    } else if (90 < randomClassNumber && randomClassNumber <= 98) {
      setRandomClass("Legend");
    } else if (98 < randomClassNumber && randomClassNumber <= 99) {
      setRandomClass("Legend");
    } else {
      if (isGomemHaveHiddion) {
        setRandomClass("Hidden");
      } else {
        setRandomClass("Legend");
      }
    }
  }, [randomClassNumber]);

  useEffect(() => {
    if (randomGomemName && randomClass && rendomGomemRealName) {
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
        starCount: star[randomClass],
        realName: rendomGomemRealName
      });
    }
  }, [gomemList, ramdom, randomClass, randomGomemName, rendomGomemRealName]);

  return randomCharacter;
};
