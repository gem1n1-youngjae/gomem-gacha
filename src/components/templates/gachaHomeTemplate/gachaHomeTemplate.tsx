import { useNavigate } from "react-router-dom";

import {
  GachaContent,
  StyledGachaButton,
  StyledGachaHomeTemplate,
  StyledGomemButton
} from "./gachaHomeTemplate.style";

export const GachaHomeTemplate = () => {
  const navigate = useNavigate();
  return (
    <StyledGachaHomeTemplate>
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
