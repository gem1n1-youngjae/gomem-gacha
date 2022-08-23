import { useNavigate } from "react-router-dom";

import { StartButton, StyledHomeTemplate } from "./homeTemplate.style";

export const HomeTemplate = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <StyledHomeTemplate>
      <StartButton
        onClick={() => {
          navigate("/gachaHome");
        }}
      />
    </StyledHomeTemplate>
  );
};
