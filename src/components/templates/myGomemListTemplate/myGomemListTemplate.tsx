import {
  MainContentWrapper,
  PageTitleText,
  StyledGachaHomeTemplate,
  TopContent
} from "./myGomemListTemplate.style";

import { BackButton } from "components/atoms";
import { GomemCard } from "components/molecules";

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
        {userHaveGomemList &&
          userHaveGomemList
            .sort((a, b) => a.starCount - b.starCount)
            .map((gomem, idx) => (
              <GomemCard
                key={idx}
                name={gomem.name}
                gomemClass={gomem.class}
                imageSrc={gomem.src}
                starCount={gomem.starCount}
              />
            ))}
      </MainContentWrapper>
    </StyledGachaHomeTemplate>
  );
};
