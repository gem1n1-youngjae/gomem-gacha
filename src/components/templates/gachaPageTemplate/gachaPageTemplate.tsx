import { useState } from "react";

import {
  BottomGradient,
  CardWrapper,
  ClassText,
  ImageInnerArea,
  ImageOuterArea,
  NameText,
  SaveButton,
  StarArea,
  StyledBigImage,
  StyledCard,
  StyledClassCover,
  StyledDotFigureArea,
  StyledGachaPageTemplate,
  StyledGlow,
  StyledGradientClassText,
  StyledGradientNameText,
  StyledSmallImage,
  StyledStar,
  TextArea
} from "./gachaPageTemplate.style";

import { useStarSoundHook } from "assets/sounds/hooks";
import { randomCharacterType } from "utils/hooks/useRandom";

const HIDDEN_BOTTOM_OVRLAY_UP_COUNT = 3;

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
    randomCharacter.class === "common" || randomCharacter.class === "rare";
  const isEpic = randomCharacter.class === "epic";
  const isLegend = randomCharacter.class === "legend";
  const isHidden = randomCharacter.class === "hidden";
  const characterName = randomCharacter.name.replaceAll("_", " ");
  const saveButtonMoveUpDelay = isHidden
    ? HIDDEN_BOTTOM_OVRLAY_UP_COUNT
    : randomCharacter.starCount * 0.5 + 1;

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
                <StyledSmallImage imageSrc={randomCharacter.src} />
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
              <StyledBigImage imageSrc={randomCharacter.src} />
              <StyledDotFigureArea isEpic={isEpic}>
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
                <StyledGradientNameText className="textBorder" isEpic={isEpic}>
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientNameText isEpic={isEpic}>
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientClassText className="textBorder" isEpic={isEpic}>
                  {randomCharacter.class}
                </StyledGradientClassText>
                <StyledGradientClassText isEpic={isEpic}>
                  {randomCharacter.class}
                </StyledGradientClassText>
              </StyledDotFigureArea>
              <StyledClassCover isEpic={isEpic} />
            </>
          )}
          {isLegend && (
            <>
              <StyledBigImage imageSrc={randomCharacter.src} />
              <StyledClassCover isLegend={isLegend} />
              <StyledDotFigureArea isLegend={isLegend}>
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
                <StyledGradientNameText className="textBorder">
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientNameText>{characterName}</StyledGradientNameText>
                <StyledGradientClassText className="textBorder">
                  {randomCharacter.class}
                </StyledGradientClassText>
                <StyledGradientClassText>
                  {randomCharacter.class}
                </StyledGradientClassText>
              </StyledDotFigureArea>
            </>
          )}
          {isHidden && (
            <>
              <StyledBigImage imageSrc={randomCharacter.src} />
              <StyledDotFigureArea isHidden={isHidden}>
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
                <StyledGradientNameText className="textBorder">
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientNameText isHidden={isHidden}>
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientClassText className="textBorder">
                  {randomCharacter.class}
                </StyledGradientClassText>
                <StyledGradientClassText isHidden={isHidden}>
                  {randomCharacter.class}
                </StyledGradientClassText>
              </StyledDotFigureArea>
              <StyledClassCover isHidden={isHidden} />
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
