import { useNavigate } from "react-router-dom";

import {
  GachaContent,
  StyledGachaButton,
  StyledGachaHomeTemplate,
  StyledGomemButton,
} from "./gachaHomeTemplate.style";

import { BackButton } from "components/atoms";

export const GachaHomeTemplate = () => {
  const navigate = useNavigate();
  return (
    <StyledGachaHomeTemplate>
      <BackButton />
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
