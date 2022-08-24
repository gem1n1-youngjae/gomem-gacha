import { useNavigate } from "react-router-dom";

import {
  GachaContent,
  StyledBackButton,
  StyledGachaButton,
  StyledGachaHomeTemplate,
  StyledGomemButton,
} from "./gachaHomeTemplate.style";

export const GachaHomeTemplate = () => {
  const navigate = useNavigate();
  return (
    <StyledGachaHomeTemplate>
      <StyledBackButton
        onClick={() => {
          navigate(-1);
        }}
      />
      <GachaContent>
        <StyledGachaButton />
        <StyledGomemButton />
      </GachaContent>
    </StyledGachaHomeTemplate>
  );
};
