import {
  BottomGradient,
  ClassText,
  CommonAndRareImage,
  EpicAndLegendClassText,
  EpicAndLegendNameText,
  EpicOrLegendDotFigure,
  EpicOrLegendImage,
  ImageInnerArea,
  ImageOuterArea,
  NameText,
  SaveButton,
  StyledGachaPageTemplate,
  TextArea,
} from "./gachaPageTemplate.style";

import { randomCharacterType } from "utils/hooks/useRandom";

export const GachaPageTemplate = ({
  randomCharacter,
  onClickSaveButton,
}: {
  randomCharacter: randomCharacterType;
  onClickSaveButton: () => void;
}) => {
  const isCommonOrRare =
    randomCharacter.class === "Common" || randomCharacter.class === "Rare";
  const isEpic = randomCharacter.class === "Epic";
  const isLegend = randomCharacter.class === "Legend";
  const characterName = randomCharacter.name.replaceAll("_", " ");

  return (
    <StyledGachaPageTemplate>
      {isCommonOrRare && (
        <>
          <ImageOuterArea classType={randomCharacter.class}>
            <ImageInnerArea classType={randomCharacter.class}>
              <CommonAndRareImage imageSrc={randomCharacter.src} />
              <TextArea>
                <ClassText
                  className="textBorder"
                  classType={randomCharacter.class}
                >
                  {randomCharacter.class}
                </ClassText>
                <NameText
                  className="textBorder"
                  classType={randomCharacter.class}
                >
                  {characterName}
                </NameText>
              </TextArea>
            </ImageInnerArea>
          </ImageOuterArea>
        </>
      )}
      {isEpic && (
        <>
          <EpicOrLegendImage imageSrc={randomCharacter.src} />
          <EpicOrLegendDotFigure>
            <EpicAndLegendNameText className="textBorder" isEpic={isEpic}>
              {characterName}
            </EpicAndLegendNameText>
            <EpicAndLegendNameText isEpic={isEpic}>
              {characterName}
            </EpicAndLegendNameText>
            <EpicAndLegendClassText className="textBorder" isEpic={isEpic}>
              {randomCharacter.class}
            </EpicAndLegendClassText>
            <EpicAndLegendClassText isEpic={isEpic}>
              {randomCharacter.class}
            </EpicAndLegendClassText>
          </EpicOrLegendDotFigure>
        </>
      )}
      {isLegend && (
        <>
          <EpicOrLegendImage imageSrc={randomCharacter.src} />
          <EpicOrLegendDotFigure>
            <EpicAndLegendNameText className="textBorder">
              {characterName}
            </EpicAndLegendNameText>
            <EpicAndLegendNameText>{characterName}</EpicAndLegendNameText>
            <EpicAndLegendClassText className="textBorder">
              {randomCharacter.class}
            </EpicAndLegendClassText>
            <EpicAndLegendClassText>
              {randomCharacter.class}
            </EpicAndLegendClassText>
          </EpicOrLegendDotFigure>
        </>
      )}
      <BottomGradient>
        <SaveButton onClick={onClickSaveButton}>저장하기</SaveButton>
      </BottomGradient>
    </StyledGachaPageTemplate>
  );
};
