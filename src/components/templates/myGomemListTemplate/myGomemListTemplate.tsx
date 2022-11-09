import {
  PageTitleText,
  StyledGachaHomeTemplate,
} from "./myGomemListTemplate.style";

import { BackButton } from "components/atoms";

export const MyGomemListTemplate = () => {
  return (
    <StyledGachaHomeTemplate>
      <BackButton />
      <PageTitleText>내가 뽑은 고멤</PageTitleText>
    </StyledGachaHomeTemplate>
  );
};
