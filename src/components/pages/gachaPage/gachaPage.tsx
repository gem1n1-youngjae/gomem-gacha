import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { gomemList } from "assets/images/gomem";
import { useStarSoundHook } from "assets/sounds/hooks";
import { GachaPageTemplate } from "components/templates";
import { useRandom } from "utils/hooks/useRandom";

export const GachaPage = () => {
  const { clickButton } = useStarSoundHook();
  const randomCharacter = useRandom(gomemList);
  const navigate = useNavigate();

  const userHaveGomemList = useMemo(
    () => window.localStorage.getItem("userHaveGomemList") || `[]`,
    []
  );

  const onClickSaveButton = useCallback(() => {
    if (randomCharacter.name !== "") {
      if (userHaveGomemList.length !== 0) {
        const isAlreadyInList = [...JSON.parse(userHaveGomemList)].find(
          (gomem) => randomCharacter.name === JSON.parse(gomem).name
        );
        if (!isAlreadyInList) {
          window.localStorage.setItem(
            "userHaveGomemList",
            JSON.stringify([
              ...JSON.parse(userHaveGomemList),
              JSON.stringify(randomCharacter)
            ])
          );
        }
      } else {
        window.localStorage.setItem(
          "userHaveGomemList",
          JSON.stringify([randomCharacter])
        );
      }
    }
    clickButton();
    navigate(-1);
  }, [randomCharacter, clickButton, navigate, userHaveGomemList]);

  return (
    <GachaPageTemplate
      randomCharacter={randomCharacter}
      onClickSaveButton={onClickSaveButton}
    />
  );
};
