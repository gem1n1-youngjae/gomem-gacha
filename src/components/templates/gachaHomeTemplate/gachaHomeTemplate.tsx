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
      <StyledBackButton />
      <GachaContent>
        <StyledGachaButton
          onClick={() => {
            navigate("/gachaPage");
          }}
        />
        <StyledGomemButton
          onClick={() => {
            navigate("/myGomem");
          }}
        />
      </GachaContent>
    </StyledGachaHomeTemplate>
  );
};
