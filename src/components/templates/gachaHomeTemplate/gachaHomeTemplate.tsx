import {
  GachaContent,
  StyledBackButton,
  StyledGachaButton,
  StyledGachaHomeTemplate,
  StyledGomemButton,
} from "./gachaHomeTemplate.style";

export const GachaHomeTemplate = () => {
  return (
    <StyledGachaHomeTemplate>
      <StyledBackButton />
      <GachaContent>
        <StyledGachaButton />
        <StyledGomemButton />
      </GachaContent>
    </StyledGachaHomeTemplate>
  );
};
