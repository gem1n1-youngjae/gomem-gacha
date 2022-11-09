import {
  MainContentWrapper,
  PageTitleText,
  StyledGachaHomeTemplate,
  TopContent,
} from "./myGomemListTemplate.style";

import { BackButton } from "components/atoms";

export const MyGomemListTemplate = () => {
  return (
    <StyledGachaHomeTemplate>
      <TopContent>
        <BackButton />
        <div style={{ width: 32 }} />
        <PageTitleText>내가 뽑은 고멤</PageTitleText>
      </TopContent>
      <MainContentWrapper></MainContentWrapper>
    </StyledGachaHomeTemplate>
  );
};
