import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { gomemList } from "assets/images/gomem";
import { GachaPageTemplate } from "components/templates";
import { useRandom } from "utils/hooks/useRandom";

export const GachaPage = () => {
  const randomCharacter = useRandom(gomemList);
  const navigate = useNavigate();

  const onClickSaveButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const userHaveGomemList =
    window.localStorage.getItem("userHaveGomemList") || `[]`;

  useEffect(() => {
    if (randomCharacter.name !== "") {
      if (userHaveGomemList.length !== 0) {
        const isAlreadyInList = [...JSON.parse(userHaveGomemList)].find(
          (gomem) => randomCharacter === gomem
        );
        if (!isAlreadyInList) {
          window.localStorage.setItem(
            "userHaveGomemList",
            JSON.stringify([
              ...JSON.parse(userHaveGomemList),
              JSON.stringify(randomCharacter),
            ])
          );
        }
      } else {
        console.log([randomCharacter]);

        window.localStorage.setItem(
          "userHaveGomemList",
          JSON.stringify([randomCharacter])
        );
      }
    }
  }, [randomCharacter, userHaveGomemList]);

  return (
    <GachaPageTemplate
      randomCharacter={randomCharacter}
      onClickSaveButton={onClickSaveButton}
    />
  );
};
