import { PlayFunction } from "use-sound/dist/types";

import { ReplayTemplate } from "components/templates/replayTemplate/replayTemplate";

export const ReplayPage = ({
  basicBGM,
  clickButton,
  defaultGachaVolume
}: {
  basicBGM: {
    play: PlayFunction;
    stop: (id?: string) => void;
    sound: {
      fade: (from: number, to: number, duration: number) => void;
    };
  };
  clickButton?: PlayFunction;
  defaultGachaVolume: number;
}) => {
  const userHaveGomemList = JSON.parse(
    `[${JSON.parse(window.localStorage.getItem("userHaveGomemList")) || ``}]`
  );

  return (
    <ReplayTemplate
      userHaveGomemList={userHaveGomemList}
      clickButton={clickButton}
      basicBGM={basicBGM}
      defaultGachaVolume={defaultGachaVolume}
    />
  );
};
