import styled, { css, keyframes } from "styled-components";

import {
  blackGomemBackgroung,
  epicEffect,
  gachaHomeBackground,
  hiddenEffect,
  legendEffect,
  ultraLegenoCardEffect
} from "assets/images";
import { BackButton, PopoutButton, Star } from "components/atoms";

export const StyledReplayTemplate = styled.div`
  --stroke-color: #ffffff;
  --stroke-width: 10px;
  width: 100%;
  height: calc(100% - var(--header-nav-bar-height));
  background-image: url(${gachaHomeBackground});
  padding-top: var(--header-nav-bar-height);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const StyledGachaPageTemplate = styled.div<{ isOpenCard: boolean }>`
  --stroke-color: #ffffff;
  --stroke-width: 10px;
  width: 100%;
  height: calc(100% - var(--header-nav-bar-height));
  ${({ isOpenCard }) =>
    isOpenCard &&
    css`
      background-image: url(${blackGomemBackgroung});
    `};
  padding-top: var(--header-nav-bar-height);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: ${({ isOpenCard }) => (isOpenCard ? "none" : "#000000")};
`;

export const StyledSmallImage = styled.div<{
  imageSrc: string;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-image: url(${({ imageSrc }) => imageSrc});
  z-index: 9;
`;

export const ImageOuterArea = styled.div<{ classType: string }>`
  width: 1159px;
  height: 427px;

  background: linear-gradient(
    97.73deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.32) 100%
  );
  border: 4px solid
    ${({ classType }) => (classType === "common" ? "#ffffff" : "#00F200")};
  box-shadow: 0px -3px 43px ${({ classType }) => (classType === "common" ? "#ffffff" : "#B9FFB9")};
  backdrop-filter: blur(4.5px);
  border-radius: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageInnerArea = styled.div<{ classType: string }>`
  width: 1119px;
  height: 387px;
  border: 2px solid
    ${({ classType }) => (classType === "common" ? "#ffffff" : "#B9FFB9")};
  border-radius: 20px;
`;

export const TextArea = styled.div`
  position: absolute;
  right: 29px;
  bottom: 10px;
  z-index: 10;
`;

export const ClassText = styled.div<{ classType: string }>`
  font-style: normal;
  font-weight: 400;
  font-size: 64.2458px;
  line-height: 158.5%;
  text-align: right;
  color: ${({ classType }) => (classType === "common" ? "#CFCFCF" : "#38F238")};
`;

export const NameText = styled.div<{ classType: string }>`
  font-style: normal;
  font-weight: 400;
  font-size: 64.2458px;
  line-height: 158.5%;
  text-align: right;
  color: ${({ classType }) => (classType === "common" ? "#9B9B9B" : "#41DD41")};
`;

export const StyledBigImage = styled.div<{ imageSrc: string }>`
  position: absolute;
  top: var(--header-nav-bar-height);
  width: 100%;
  height: 100%;
  background-image: url(${({ imageSrc }) => imageSrc});
  background-size: cover;
  background-position: center;
`;

const DotSlideAnimation = keyframes`
  0%{
    background-position: 0 0, 50px;
  }
  100%{
    background-position: 0 0, -400px;
  }
`;

export const StyledDotFigureArea = styled.div<{
  isEpic?: boolean;
  isLegend?: boolean;
  isHidden?: boolean;
  isUltraLegeno?: boolean;
}>`
  position: absolute;
  bottom: -22%;
  width: 200vw;
  height: 385px;
  transform: rotate(-15deg);

  background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, transparent 0%),
    radial-gradient(#ffffff 15%, transparent 20%);
  background-position: 0 0, 50px 50px;
  background-size: 18px 18px;
  animation: ${DotSlideAnimation} 10s infinite linear;
  border: #ffffff solid 4px;
  z-index: 10;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    ${({ isEpic, isLegend, isHidden, isUltraLegeno }) => {
      if (isEpic) {
        return css`
          background: linear-gradient(
            130.96deg,
            rgba(123, 255, 231, 0.48) 61.76%,
            rgba(78, 170, 255, 0.36) 97.57%
          );
        `;
      }
      if (isLegend) {
        return css`
          background: linear-gradient(
            130.96deg,
            rgba(198, 106, 255, 0.48) 61.76%,
            rgba(219, 0, 255, 0.36) 97.57%
          );
        `;
      }
      if (isHidden) {
        return css`
          background: linear-gradient(
            130.96deg,
            rgba(255, 0, 0, 0.48) 61.76%,
            rgba(255, 250, 124, 0.36) 97.57%
          );
        `;
      }
      if (isUltraLegeno) {
        return css`
          background: linear-gradient(
            130.96deg,
            rgba(255, 240, 185, 0.48) 61.76%,
            rgba(255, 200, 6, 0.36) 97.57%
          );
        `;
      }
    }}
  }
`;

export const StyledGradientNameText = styled.div<{
  isEpic?: boolean;
  isLegend?: boolean;
  isHidden?: boolean;
  isUltraLegeno?: boolean;
}>`
  ${({ isEpic, isLegend, isHidden, isUltraLegeno }) => {
    if (isEpic) {
      return css`
        --first-gradient-color: #05b7b7;
        --second-gradient-color: #00ffff;
      `;
    }
    if (isLegend) {
      return css`
        --first-gradient-color: #cc00ff;
        --second-gradient-color: #cc00ff;
      `;
    }
    if (isHidden) {
      return css`
        --first-gradient-color: #ff0000;
        --second-gradient-color: #ff4d00;
      `;
    }
    if (isUltraLegeno) {
      return css`
        --first-gradient-color: #ffe600;
        --second-gradient-color: #ff6b00;
      `;
    }
  }}
  position: absolute;
  top: -15%;
  right: 27%;
  font-style: normal;
  font-weight: 400;
  font-size: 74px;
  line-height: 158.5%;
  background: linear-gradient(
    180deg,
    var(--first-gradient-color) 0%,
    var(--second-gradient-color) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledGradientClassText = styled.div<{
  isEpic?: boolean;
  isLegend?: boolean;
  isHidden?: boolean;
  isUltraLegeno?: boolean;
}>`
  ${({ isEpic, isLegend, isHidden, isUltraLegeno }) => {
    if (isEpic) {
      return css`
        --first-gradient-color: #3c67ff;
        --second-gradient-color: #00f0ff;
      `;
    }
    if (isLegend) {
      return css`
        --first-gradient-color: #fb3cff;
        --second-gradient-color: #ff007a;
      `;
    }
    if (isHidden) {
      return css`
        --first-gradient-color: #ff3c3c;
        --second-gradient-color: #ff9900;
      `;
    }
    if (isUltraLegeno) {
      return css`
        --first-gradient-color: #ffbd3c;
        --second-gradient-color: #ffe600;
      `;
    }
  }}
  position: absolute;
  top: 10%;
  right: 27%;
  font-style: normal;
  font-weight: 400;
  font-size: 74px;
  line-height: 158.5%;
  background: linear-gradient(
    180deg,
    var(--first-gradient-color) 0%,
    var(--second-gradient-color) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StarArea = styled.div<{ isBigImage?: boolean }>`
  position: absolute;
  left: 8px;
  bottom: 8px;
  display: flex;
  align-items: flex-end;

  ${({ isBigImage }) =>
    isBigImage &&
    css`
      left: auto;
      bottom: auto;
      top: -40%;
      right: 27%;
    `}
  z-index: 10;
`;

export const StyledStar = styled((props) => <Star {...props} />)<{
  index: number;
}>``;

export const StyledClassCover = styled.div<{
  isEpic?: boolean;
  isLegend?: boolean;
  isHidden?: boolean;
  isUltraLegeno?: boolean;
}>`
  position: absolute;
  width: 100%;
  height: calc(100% - var(--header-nav-bar-height));
  top: 32px;
  left: 0;
  ${({ isEpic, isLegend, isHidden, isUltraLegeno }) => {
    if (isEpic) {
      return css`
        background-image: url(${epicEffect});
      `;
    }
    if (isLegend) {
      return css`
        background-image: url(${legendEffect});
      `;
    }
    if (isHidden) {
      return css`
        background-image: url(${hiddenEffect});
      `;
    }
    if (isUltraLegeno) {
      return css`
        background-image: url(${ultraLegenoCardEffect});
      `;
    }
  }}

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
`;

const opacityAnimation = keyframes`
  0%{
    opacity: 0;
  }
  85%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
`;

export const StyledPageCover = styled.div<{ gomemClass: string }>`
  position: absolute;
  width: 100%;
  height: calc(100% - var(--header-nav-bar-height));
  background: ${({ gomemClass }) => {
    switch (gomemClass) {
      case "common":
        return "linear-gradient(35deg,#ffffff,#d9d9d9,#ababab,#808080,#666666,#363636)";
      case "rare":
        return "linear-gradient(35deg,#70fad5,#00ffd1,#00ffa3,#00fff0,#78e7ff,#2757ff)";
      case "epic":
        return "linear-gradient(45deg, #00f0ff 0%, #3c67ff 100%)";
      case "legend":
        return "linear-gradient(45deg, #fb3cff 0%, #ff007a 100%)";
      case "hidden":
        return "linear-gradient(45deg, #ff3c3c 0%, #ff9900 100%)";
      case "ultraLegeno":
        return "linear-gradient(45deg, #ffbd3c 0%, #ffe600 100%)";
      default:
        return "#ffffff";
    }
  }};
  z-index: 20;
  opacity: 0;
  animation: ${opacityAnimation} 2s 3s cubic-bezier(0.74, 0.3, 0.785, 0.345); ;
`;

export const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #161616;
  z-index: 9;
`;

export const StyledSkipButton = styled(PopoutButton)`
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 99;
  width: 100px;
  height: 64px;

  & > .buttonTopSide {
    font-size: 24px;
  }
`;

export const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 72px;
  left: 40px;
`;
