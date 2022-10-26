import { useEffect, useRef, useState } from "react";

import {
  BottomGradient,
  ClassText,
  CommonAndRareImage,
  EpicAndLegendClassText,
  EpicAndLegendNameText,
  EpicOrLegendDotFigure,
  EpicOrLegendImage,
  GachaCover,
  ImageInnerArea,
  ImageOuterArea,
  NameText,
  SaveButton,
  StyledGachaPageTemplate,
  TextArea,
  VideoWrapper,
} from "./gachaPageTemplate.style";

import { INTRO_HD } from "assets/videos";
import { randomCharacterType } from "utils/hooks/useRandom";

const INTRO_VIDEO_END_TIME = 5;

export const GachaPageTemplate = ({
  randomCharacter,
  onClickSaveButton,
}: {
  randomCharacter: randomCharacterType;
  onClickSaveButton: () => void;
}) => {
  const [gachaSecond, setGachaSecond] = useState(0);
  const [isIntroVideoEnd, setIsIntroVideoEnd] = useState(false);
  const isCommonOrRare =
    randomCharacter.class === "Common" || randomCharacter.class === "Rare";
  const isEpic = randomCharacter.class === "Epic";
  const isLegend = randomCharacter.class === "Legend";
  const characterName = randomCharacter.name.replaceAll("_", " ");

  useEffect(() => {
    const timer = setInterval(() => {
      setGachaSecond((n) => n + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (gachaSecond > INTRO_VIDEO_END_TIME) {
      setIsIntroVideoEnd(true);
    }
  }, [gachaSecond]);

  return (
    <StyledGachaPageTemplate>
      {gachaSecond < 9 && <GachaCover />}
      {!isIntroVideoEnd ? (
        <VideoWrapper>
          <video
            autoPlay
            style={{ width: "100%", height: "100%" }}
            className={"intro_video"}
          >
            <source src={INTRO_HD} type="video/mp4" />
          </video>
        </VideoWrapper>
      ) : (
        isCommonOrRare && (
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
        )
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
