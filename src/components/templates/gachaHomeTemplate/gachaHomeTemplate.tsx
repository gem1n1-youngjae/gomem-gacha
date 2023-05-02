import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayFunction } from "use-sound/dist/types";

import {
  GachaContent,
  StyledGachaButton,
  StyledGachaHomeTemplate,
  StyledGomemButton,
  StyledSettingButton
} from "./gachaHomeTemplate.style";

import { SettingOverlay } from "components/molecules/overlay/settingOverlay";

export const GachaHomeTemplate = ({
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
  const [showSettingOverlay, setShowSettingOverlay] = useState(false);
  const navigate = useNavigate();
  return (
    <StyledGachaHomeTemplate>
      <StyledSettingButton onClick={() => setShowSettingOverlay(true)}>
        <span className="material-symbols-outlined">settings</span>
      </StyledSettingButton>
      <GachaContent>
        <StyledGachaButton
          onClick={() => {
            navigate("/gachaPage");
            clickButton();
          }}
        />
        <StyledGomemButton
          onClick={() => {
            navigate("/myGomem");
            clickButton();
          }}
        />
      </GachaContent>
      {showSettingOverlay && (
        <SettingOverlay
          onClose={() => {
            setShowSettingOverlay(false);
          }}
          allVolume={allVolume}
          controlAllVolume={controlAllVolume}
          bgmVolume={bgmVolume}
          controlBgmVolume={controlBgmVolume}
          effectVoulme={effectVoulme}
          controleffectVolume={controleffectVolume}
          gachaVolume={gachaVolume}
          controlGachaVolume={controlGachaVolume}
        />
      )}
    </StyledGachaHomeTemplate>
  );
};
