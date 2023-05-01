import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { PlayFunction } from "use-sound/dist/types";

import { gomemList } from "assets/images/gomem";
import { GachaPageTemplate } from "components/templates";
import { useRandom } from "utils/hooks/useRandom";

export const GachaPage = ({
  playBgm = () => {},
  stopBgm = () => {},
  clickButton,
  gachaBGM,
  showStar,
  gacha
}: {
  playBgm?: () => void;
  stopBgm?: () => void;
  clickButton?: PlayFunction;
  gachaBGM?: {
    play: PlayFunction;
    stop: (id?: string) => void;
    sound: {
      fade: (from: number, to: number, duration: number) => void;
    };
  };
  showStar?: PlayFunction;
  gacha?: PlayFunction;
}) => {
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

  useEffect(() => {
    // page 진입시 bgm이 stop 되어야함
    stopBgm();
    // page를 나가면 bgm이 다시 재생 되어야함
    return () => {
      gachaBGM.stop();
      playBgm();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gachaBGM]);

  return (
    <GachaPageTemplate
      randomCharacter={randomCharacter}
      onClickSaveButton={onClickSaveButton}
      gachaBGM={gachaBGM}
      showStar={showStar}
      gacha={gacha}
      clickButton={clickButton}
    />
  );
};
