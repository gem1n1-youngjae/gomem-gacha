import { useCallback, useEffect, useState } from "react";
import { PlayFunction } from "use-sound/dist/types";

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
  StyledPageCover,
  StyledSmallImage,
  StyledStar,
  TextArea,
  VideoWrapper
} from "./gachaPageTemplate.style";

import { CountButtons } from "components/molecules/button/countButtons";
import { randomCharacterType } from "utils/hooks/useRandom";

const HIDDEN_BOTTOM_OVRLAY_UP_COUNT = 3;

export const GachaPageTemplate = ({
  randomCharacter,
  onClickSaveButton,
  gachaBGM,
  showStar,
  gacha,
  clickButton,
  defaultGachaVolume
}: {
  randomCharacter: randomCharacterType;
  onClickSaveButton: () => void;
  gachaBGM: {
    play: PlayFunction;
    stop: (id?: string) => void;
    sound: {
      fade: (from: number, to: number, duration: number) => void;
    };
  };
  showStar?: PlayFunction;
  gacha?: PlayFunction;
  clickButton?: PlayFunction;
  defaultGachaVolume: number;
}) => {
  const [isClickedCard, setIsClickedCard] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const isCommonOrRare =
    randomCharacter.class === "common" || randomCharacter.class === "rare";
  const isEpic = randomCharacter.class === "epic";
  const isLegend = randomCharacter.class === "legend";
  const isHidden = randomCharacter.class === "hidden";
  const isUltraLegeno = randomCharacter.class === "ultraLegeno";
  const characterName = randomCharacter.name.replaceAll("_", " ");
  const saveButtonMoveUpDelay = isHidden
    ? HIDDEN_BOTTOM_OVRLAY_UP_COUNT
    : randomCharacter.starCount * 0.5 + 1;

  const starComponetOnAnimationStart = useCallback(() => {
    showStar();
  }, [showStar]);

  useEffect(() => {
    if (showImage) {
      gacha();
    }
  }, [gacha, showImage]);

  const ref = useCallback(
    (node) => {
      if (node !== null) {
        node.volume = defaultGachaVolume;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showVideo]
  );

  return (
    <StyledGachaPageTemplate isOpenCard={showImage}>
      {isClickedCard && (
        <StyledPageCover
          gomemClass={randomCharacter.class}
          onAnimationEnd={() => {
            setIsClickedCard(false);
            if (!isUltraLegeno) {
              setShowImage(true);
            } else {
              setShowVideo(true);
            }
          }}
        />
      )}
      {showVideo && (
        <VideoWrapper>
          <video
            autoPlay
            style={{ width: "100%", height: "100%" }}
            ref={ref}
            className={"intro_video"}
            onPlay={() => {
              gachaBGM.sound.fade(0, 0, 3000);
            }}
            onEnded={() => {
              setShowVideo(false);
              setShowImage(true);
              gachaBGM.sound.fade(0, defaultGachaVolume, 3000);
            }}
          >
            <source src={randomCharacter.videoSrc} type="video/mp4" />
          </video>
        </VideoWrapper>
      )}
      {!showImage ? (
        <>
          <CardWrapper>
            <StyledGlow
              isGreen={isCommonOrRare || isEpic}
              isYellow={isLegend || isUltraLegeno}
            />
            <StyledCard
              isGreen={isCommonOrRare || isEpic}
              isYellow={isLegend || isUltraLegeno}
              isClickedCard={isClickedCard}
              onClick={() => {
                gachaBGM.play();
                setIsClickedCard(true);
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
                        onAnimationStart={starComponetOnAnimationStart}
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
          {(isEpic || isLegend || isUltraLegeno) && (
            <>
              <StyledBigImage imageSrc={randomCharacter.src} />
              <StyledDotFigureArea
                isEpic={isEpic}
                isLegend={isLegend}
                isUltraLegeno={isUltraLegeno}
              >
                <StarArea isBigImage={isEpic || isLegend || isUltraLegeno}>
                  {[...Array(randomCharacter.starCount)].map((_, idx) => {
                    return (
                      <StyledStar
                        index={idx}
                        key={`star-${idx}`}
                        onAnimationStart={starComponetOnAnimationStart}
                      />
                    );
                  })}
                </StarArea>
                <StyledGradientNameText
                  className="textBorder"
                  isEpic={isEpic}
                  isLegend={isLegend}
                  isUltraLegeno={isUltraLegeno}
                >
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientNameText
                  isEpic={isEpic}
                  isLegend={isLegend}
                  isUltraLegeno={isUltraLegeno}
                >
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientClassText
                  className="textBorder"
                  isEpic={isEpic}
                  isLegend={isLegend}
                  isUltraLegeno={isUltraLegeno}
                >
                  {randomCharacter.class}
                </StyledGradientClassText>
                <StyledGradientClassText
                  isEpic={isEpic}
                  isLegend={isLegend}
                  isUltraLegeno={isUltraLegeno}
                >
                  {randomCharacter.class}
                </StyledGradientClassText>
              </StyledDotFigureArea>
              <StyledClassCover
                isEpic={isEpic}
                isLegend={isLegend}
                isUltraLegeno={isUltraLegeno}
              />
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
                        onAnimationStart={starComponetOnAnimationStart}
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
      <CountButtons clickButton={clickButton} />
    </StyledGachaPageTemplate>
  );
};
