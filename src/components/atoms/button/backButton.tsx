import { useNavigate } from "react-router-dom";

import { StyledBackButton } from "./backbutton.style";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <StyledBackButton
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};
