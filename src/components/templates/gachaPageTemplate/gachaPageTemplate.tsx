import {
  BottomGradient,
  CardWrapper,
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
  StarArea,
  StyledCard,
  StyledGachaPageTemplate,
  StyledGlow,
  StyledStar,
  TextArea
} from "./gachaPageTemplate.style";

import { useStarSoundHook } from "assets/sounds/hooks";
import { randomCharacterType } from "utils/hooks/useRandom";
import { useState } from "react";

export const GachaPageTemplate = ({
  randomCharacter,
  onClickSaveButton
}: {
  randomCharacter: randomCharacterType;
  onClickSaveButton: () => void;
}) => {
  const [isOpenCard, setIsOpenCard] = useState(false);
  const { showStar } = useStarSoundHook();
  const isCommonOrRare =
    randomCharacter.class === "Common" || randomCharacter.class === "Rare";
  const isEpic = randomCharacter.class === "Epic";
  const isLegend = randomCharacter.class === "Legend";
  const characterName = randomCharacter.name.replaceAll("_", " ");
  const saveButtonMoveUpDelay = randomCharacter.starCount * 0.5 + 1;

  return (
    <StyledGachaPageTemplate isOpenCard={isOpenCard}>
      {!isOpenCard ? (
        <>
          <CardWrapper>
            <StyledGlow
              isGreen={isCommonOrRare || isEpic}
              isYellow={isLegend}
            />
            <StyledCard
              isGreen={isCommonOrRare || isEpic}
              isYellow={isLegend}
              onClick={() => {
                setIsOpenCard(true);
              }}
            />
          </CardWrapper>
        </>
      ) : (
        <>
          {isCommonOrRare && (
            <ImageOuterArea classType={randomCharacter.class}>
              <ImageInnerArea classType={randomCharacter.class}>
                <StarArea>
                  {[...Array(randomCharacter.starCount)].map((_, idx) => {
                    return (
                      <StyledStar
                        index={idx}
                        key={`star-${idx}`}
                        onAnimationStart={() => {
                          showStar();
                        }}
                      />
                    );
                  })}
                </StarArea>
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
          )}
          {isEpic && (
            <>
              <EpicOrLegendImage imageSrc={randomCharacter.src} />
              <EpicOrLegendDotFigure>
                <StarArea isEpicOrLegend={isEpic}>
                  {[...Array(randomCharacter.starCount)].map((_, idx) => {
                    return (
                      <StyledStar
                        index={idx}
                        key={`star-${idx}`}
                        onAnimationStart={() => {
                          showStar();
                        }}
                      />
                    );
                  })}
                </StarArea>
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
                <StarArea isEpicOrLegend={isLegend}>
                  {[...Array(randomCharacter.starCount)].map((_, idx) => {
                    return (
                      <StyledStar
                        index={idx}
                        key={`star-${idx}`}
                        onAnimationStart={() => {
                          showStar();
                        }}
                      />
                    );
                  })}
                </StarArea>
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
          <BottomGradient delay={saveButtonMoveUpDelay}>
            <SaveButton onClick={onClickSaveButton}>저장하기</SaveButton>
          </BottomGradient>
        </>
      )}
    </StyledGachaPageTemplate>
  );
};
