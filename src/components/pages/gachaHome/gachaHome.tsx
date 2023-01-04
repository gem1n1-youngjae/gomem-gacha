import { PlayFunction } from "use-sound/dist/types";

import { GachaHomeTemplate } from "components/templates";

export const GachaHome = ({
  clickButton,
  volume,
  setVolume
}: {
  clickButton?: PlayFunction;
  volume: number;
  setVolume: (value: number) => void;
}) => {
  return (
    <GachaHomeTemplate
      clickButton={clickButton}
      volume={volume}
      setVolume={setVolume}
    />
  );
};
