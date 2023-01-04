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
  volume,
  setVolume
}: {
  clickButton?: PlayFunction;
  volume: number;
  setVolume: (value: number) => void;
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
          volume={volume}
          setVolume={setVolume}
        />
      )}
    </StyledGachaHomeTemplate>
  );
};
