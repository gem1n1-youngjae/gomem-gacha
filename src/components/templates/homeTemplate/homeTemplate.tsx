import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  GachaCover,
  StartButton,
  StyledHomeTemplate,
  VideoWrapper,
} from "./homeTemplate.style";

import { INTRO_HD } from "assets/videos";

const INTRO_VIDEO_END_TIME = 5;

export const HomeTemplate = (): JSX.Element => {
  const navigate = useNavigate();
  const [gachaSecond, setGachaSecond] = useState(0);
  const [isIntroVideoEnd, setIsIntroVideoEnd] = useState(false);

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
    <StyledHomeTemplate>
      {gachaSecond < 7 && (
        <GachaCover onAnimationEnd={() => console.log(gachaSecond)} />
      )}
      {!isIntroVideoEnd && (
        <VideoWrapper>
          <video
            autoPlay
            style={{ width: "100%", height: "100%" }}
            className={"intro_video"}
          >
            <source src={INTRO_HD} type="video/mp4" />
          </video>
        </VideoWrapper>
      )}
      <StartButton
        onClick={() => {
          navigate("/gachaHome");
        }}
      />
    </StyledHomeTemplate>
  );
};
