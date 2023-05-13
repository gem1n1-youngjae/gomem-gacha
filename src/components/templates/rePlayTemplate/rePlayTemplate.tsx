import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PlayFunction } from "use-sound/dist/types";

import {
  ClassText,
  ImageInnerArea,
  ImageOuterArea,
  NameText,
  StarArea,
  StyledBackButton,
  StyledBigImage,
  StyledClassCover,
  StyledDotFigureArea,
  StyledGradientClassText,
  StyledGradientNameText,
  StyledReplayTemplate,
  StyledSkipButton,
  StyledSmallImage,
  StyledStar,
  TextArea,
  VideoWrapper
} from "./replayTemplate.style";

export const ReplayTemplate = ({
  userHaveGomemList,
  basicBGM,
  clickButton,
  defaultGachaVolume
}: {
  userHaveGomemList: {
    name: string;
    class: string;
    src: string;
    starCount: number;
    realName: string;
    videoSrc?: string;
  }[];
  showStar?: PlayFunction;
  gacha?: PlayFunction;
  clickButton?: PlayFunction;
  basicBGM: {
    play: PlayFunction;
    stop: (id?: string) => void;
    sound: {
      fade: (from: number, to: number, duration: number) => void;
    };
  };
  defaultGachaVolume: number;
}) => {
  const location = useLocation();
  const randomCharacterName = new URLSearchParams(location.search)
    .get("randomCharacterName")
    .replaceAll(" ", "_");

  const randomCharacterData = userHaveGomemList.find(
    (data) => data.name === randomCharacterName
  );
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const isCommonOrRare =
    randomCharacterData.class === "common" ||
    randomCharacterData.class === "rare";
  const isEpic = randomCharacterData.class === "epic";
  const isLegend = randomCharacterData.class === "legend";
  const isHidden = randomCharacterData.class === "hidden";
  const isUltraLegeno = randomCharacterData.class === "ultraLegeno";
  const characterName = randomCharacterData.name.replaceAll("_", " ");

  const ref = useCallback(
    (node) => {
      if (node !== null) {
        node.volume = defaultGachaVolume;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showVideo]
  );

  useEffect(() => {
    if (randomCharacterData?.videoSrc) {
      setShowVideo(true);
    } else {
      setShowImage(true);
    }
  }, [randomCharacterData]);

  const onClickSkipButton = useCallback(() => {
    clickButton();
    setShowVideo(false);
    setShowImage(true);
    basicBGM.sound.fade(0, defaultGachaVolume, 3000);
  }, [basicBGM.sound, clickButton, defaultGachaVolume]);

  return (
    <StyledReplayTemplate>
      {showVideo && (
        <VideoWrapper>
          <StyledSkipButton onClick={onClickSkipButton}>skip</StyledSkipButton>
          <video
            autoPlay
            style={{ width: "100%", height: "100%" }}
            ref={ref}
            className={"ultraLegeno_video"}
            onPlay={() => {
              basicBGM.sound.fade(0, 0, 3000);
            }}
            onEnded={() => {
              setShowVideo(false);
              setShowImage(true);
              basicBGM.sound.fade(0, defaultGachaVolume, 3000);
            }}
          >
            <source src={randomCharacterData.videoSrc} type="video/mp4" />
          </video>
        </VideoWrapper>
      )}
      {showImage && (
        <>
          <StyledBackButton clickButton={clickButton} />
          {isCommonOrRare && (
            <ImageOuterArea classType={randomCharacterData.class}>
              <ImageInnerArea classType={randomCharacterData.class}>
                <StarArea>
                  {[...Array(randomCharacterData.starCount)].map((_, idx) => {
                    return <StyledStar key={`star-${idx}`} />;
                  })}
                </StarArea>
                <StyledSmallImage imageSrc={randomCharacterData.src} />
                <TextArea>
                  <ClassText
                    className="textBorder"
                    classType={randomCharacterData.class}
                  >
                    {randomCharacterData.class}
                  </ClassText>
                  <NameText
                    className="textBorder"
                    classType={randomCharacterData.class}
                  >
                    {characterName}
                  </NameText>
                </TextArea>
              </ImageInnerArea>
            </ImageOuterArea>
          )}
          {(isEpic || isLegend || isUltraLegeno) && (
            <>
              <StyledBigImage imageSrc={randomCharacterData.src} />
              <StyledDotFigureArea
                isEpic={isEpic}
                isLegend={isLegend}
                isUltraLegeno={isUltraLegeno}
              >
                <StarArea isBigImage={isEpic || isLegend || isUltraLegeno}>
                  {[...Array(randomCharacterData.starCount)].map((_, idx) => {
                    return <StyledStar key={`star-${idx}`} />;
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
                  {randomCharacterData.class}
                </StyledGradientClassText>
                <StyledGradientClassText
                  isEpic={isEpic}
                  isLegend={isLegend}
                  isUltraLegeno={isUltraLegeno}
                >
                  {randomCharacterData.class}
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
              <StyledBigImage imageSrc={randomCharacterData.src} />
              <StyledDotFigureArea isHidden={isHidden}>
                <StarArea>
                  {[...Array(randomCharacterData.starCount)].map((_, idx) => {
                    return <StyledStar key={`star-${idx}`} />;
                  })}
                </StarArea>
                <StyledGradientNameText className="textBorder">
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientNameText isHidden={isHidden}>
                  {characterName}
                </StyledGradientNameText>
                <StyledGradientClassText className="textBorder">
                  {randomCharacterData.class}
                </StyledGradientClassText>
                <StyledGradientClassText isHidden={isHidden}>
                  {randomCharacterData.class}
                </StyledGradientClassText>
              </StyledDotFigureArea>
              <StyledClassCover isHidden={isHidden} />
            </>
          )}
        </>
      )}
    </StyledReplayTemplate>
  );
};
