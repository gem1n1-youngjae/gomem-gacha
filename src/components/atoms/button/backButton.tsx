import { useNavigate } from "react-router-dom";
import { PlayFunction } from "use-sound/dist/types";

import { StyledBackButton } from "./backbutton.style";

export const BackButton = ({
  className,
  clickButton
}: {
  className?: string;
  clickButton?: PlayFunction;
}) => {
  const navigate = useNavigate();
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
