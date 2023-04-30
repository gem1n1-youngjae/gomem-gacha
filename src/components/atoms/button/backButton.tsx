import { useNavigate } from "react-router-dom";

import { StyledBackButton } from "./backbutton.style";

import { useStarSoundHook } from "assets/sounds/hooks";

export const BackButton = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const { clickButton } = useStarSoundHook();
  return (
    <StyledBackButton
      className={className}
      onClick={() => {
        navigate(-1);
        clickButton();
      }}
    />
  );
};
