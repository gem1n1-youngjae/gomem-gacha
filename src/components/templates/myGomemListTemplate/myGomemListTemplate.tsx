import {
  MainContentWrapper,
  PageTitleText,
  StyledGachaHomeTemplate,
  TopContent
} from "./myGomemListTemplate.style";

import { BackButton } from "components/atoms";

export const MyGomemListTemplate = ({
  userHaveGomemList
}: {
  userHaveGomemList: {
    name: string;
    class: string;
    src: string;
    starCount: number;
  }[];
}) => {
  return (
    <StyledGachaHomeTemplate>
      <TopContent>
        <BackButton />
        <div style={{ width: 32 }} />
        <PageTitleText>내가 뽑은 고멤</PageTitleText>
      </TopContent>
      <MainContentWrapper>
        {userHaveGomemList.map((gomem) => (
          <div
            style={{ color: "#ffffff", marginBottom: 32 }}
            key={`${gomem.class}_${gomem.name}`}
          >
            <div>{gomem.class}</div>
            <div>{gomem.name}</div>
          </div>
        ))}
      </MainContentWrapper>
    </StyledGachaHomeTemplate>
  );
};
