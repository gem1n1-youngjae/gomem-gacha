import {
  GachaContent,
  StyledGachaButton,
  StyledGachaHomeTemplate,
  StyledGomemButton,
} from "./gachaHomeTemplate.style";

export const GachaHomeTemplate = () => {
  return (
    <StyledGachaHomeTemplate>
      <GachaContent>
        <StyledGachaButton />
        <StyledGomemButton />
      </GachaContent>
    </StyledGachaHomeTemplate>
  );
};
