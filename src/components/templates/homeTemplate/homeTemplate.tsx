import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayFunction } from "use-sound/dist/types";

import {
  GachaCover,
  StartButton,
  StyledGomemGachaImage,
  StyledHomeTemplate,
  VideoWrapper
} from "./homeTemplate.style";

import { INTRO_HD } from "assets/videos";

export const HomeTemplate = ({
  clickButton
}: {
  clickButton?: PlayFunction;
}): JSX.Element => {
  const navigate = useNavigate();
  const [showCover, setShowCover] = useState(false);
  const [isShowIntroVideo, setIsShowIntroVideo] = useState(false);
  return (
    <StyledHomeTemplate>
      {showCover && <GachaCover onAnimationEnd={() => setShowCover(false)} />}
      {!isShowIntroVideo && (
        <VideoWrapper>
          <video
            autoPlay
            style={{ width: "100%", height: "100%" }}
            className={"intro_video"}
            onEnded={() => {
              setShowCover(true);
              setTimeout(() => {
                setIsShowIntroVideo(true);
              }, 1000);
            }}
          >
            <source src={INTRO_HD} type="video/mp4" />
          </video>
        </VideoWrapper>
      )}
      <StyledGomemGachaImage />
      <StartButton
        onClick={() => {
          navigate("/gachaHome");
          clickButton();
        }}
      >
        시작하기
      </StartButton>
    </StyledHomeTemplate>
  );
};
