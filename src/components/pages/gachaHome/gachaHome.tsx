import { PlayFunction } from "use-sound/dist/types";

import { GachaHomeTemplate } from "components/templates";

export const GachaHome = ({
  clickButton,
  allVolume,
  controlAllVolume,
  bgmVolume,
  controlBgmVolume,
  effectVoulme,
  controleffectVolume,
  gachaVolume,
  controlGachaVolume
}: {
  clickButton?: PlayFunction;
  allVolume: number;
  controlAllVolume: (value: number) => void;
  bgmVolume: number;
  controlBgmVolume: (value: number) => void;
  effectVoulme: number;
  controleffectVolume: (value: number) => void;
  gachaVolume: number;
  controlGachaVolume: (value: number) => void;
}) => {
  return (
    <GachaHomeTemplate
      clickButton={clickButton}
      allVolume={allVolume}
      controlAllVolume={controlAllVolume}
      bgmVolume={bgmVolume}
      controlBgmVolume={controlBgmVolume}
      effectVoulme={effectVoulme}
      controleffectVolume={controleffectVolume}
      gachaVolume={gachaVolume}
      controlGachaVolume={controlGachaVolume}
    />
  );
};
