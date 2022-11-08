import styled, { css, keyframes } from "styled-components";

import { blackGomemBackgroung, starImage } from "assets/images";
import { PopoutButton } from "components/atoms";

export const StyledGachaPageTemplate = styled.div`
  --stroke-color: #ffffff;
  --stroke-width: 10px;
  width: 100%;
  height: 100%;
  background-image: url(${blackGomemBackgroung});
  padding-top: var(--header-nav-bar-height);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const CommonAndRareImage = styled.div<{
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
    ${({ classType }) => (classType === "Common" ? "#ffffff" : "#00F200")};
  box-shadow: 0px -3px 43px ${({ classType }) => (classType === "Common" ? "#ffffff" : "#B9FFB9")};
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
    ${({ classType }) => (classType === "Common" ? "#ffffff" : "#B9FFB9")};
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
  color: ${({ classType }) => (classType === "Common" ? "#CFCFCF" : "#38F238")};
`;

export const NameText = styled.div<{ classType: string }>`
  font-style: normal;
  font-weight: 400;
  font-size: 64.2458px;
  line-height: 158.5%;
  text-align: right;
  color: ${({ classType }) => (classType === "Common" ? "#9B9B9B" : "#41DD41")};
`;

export const EpicOrLegendImage = styled.div<{ imageSrc: string }>`
  position: absolute;
  top: var(--header-nav-bar-height);
  width: 100%;
  height: 100%;
  background-image: url(${({ imageSrc }) => imageSrc});
`;

const DotSlideAnimation = keyframes`
  0%{
    background-position: 0 0, 50px;
  }
  100%{
    background-position: 0 0, -400px;
  }
`;

export const EpicOrLegendDotFigure = styled.div`
  position: absolute;
  bottom: -22%;
  width: 200vw;
  height: 385px;
  transform: rotate(-15deg);

  background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, transparent 0%),
    radial-gradient(#ffffff 15%, transparent 20%);
  background-color: rgba(255, 255, 255, 0.48);
  background-position: 0 0, 50px 50px;
  background-size: 18px 18px;
  border: #ffffff solid 4px;

  animation: ${DotSlideAnimation} 10s infinite linear;
`;

export const EpicAndLegendNameText = styled.div<{ isEpic?: boolean }>`
  --first-gradient-color: ${({ isEpic }) => (isEpic ? "#05b7b7" : "#5E05B7")};
  --second-gradient-color: ${({ isEpic }) => (isEpic ? "#00ffff" : "#CC00FF")};
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

export const EpicAndLegendClassText = styled.div<{ isEpic?: boolean }>`
  --first-gradient-color: ${({ isEpic }) => (isEpic ? "#3c67ff" : "#FB3CFF")};
  --second-gradient-color: ${({ isEpic }) => (isEpic ? "#00f0ff" : "#FF007A")};
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

const slideUp = keyframes`
  0%{
    transform: translateY(215px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const showButton = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const SaveButton = styled(PopoutButton)`
  opacity: 0;
`;

export const BottomGradient = styled.div<{ delay: number }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 215px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideUp} 1s ${({ delay }) => delay}s forwards;
  transform: translateY(215px);

  ${SaveButton} {
    animation: ${showButton} 1s ${({ delay }) => delay + 1}s forwards;
  }
`;

export const StarArea = styled.div<{ isEpicOrLegend?: boolean }>`
  position: absolute;
  left: 8px;
  bottom: 8px;
  display: flex;
  align-items: flex-end;

  ${({ isEpicOrLegend }) =>
    isEpicOrLegend &&
    css`
      left: auto;
      bottom: auto;
      top: -40%;
      right: 27%;
    `}
`;

const starAnimation = keyframes`
  0%{
    transform: scale(0.01);
  }
  33%{
    transform: scale(1.2);
  }
  66%{
    transform: scale(0.8);
  }
  100%{
    transform: scale(1);
  };
`;

export const StyledStar = styled.div<{ index: number }>`
  &:first-child {
    width: 100px;
    height: 100px;
  }
  width: 82px;
  height: 82px;
  background-image: url(${starImage});
  background-size: cover;
  transform: scale(0.001);

  animation: ${starAnimation} 1s ${({ index }) => index * 0.5}s forwards;
`;
