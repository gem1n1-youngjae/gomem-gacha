import styled, { css } from "styled-components";

import { Star } from "components/atoms";

const GradientBorderCss = css`
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  padding: 1px;
  border-radius: 24px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`;

export const StylerCardOuterBox = styled.div<{
  classType: string;
  isCommonOrRare: boolean;
  isEpic: boolean;
  isLegend: boolean;
  isHidden: boolean;
}>`
  --stroke-color: #ffffff;
  --stroke-width: 5px;
  box-sizing: border-box;
  width: 290px;
  height: 430px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.48) 0%,
    rgba(255, 255, 255, 0.24) 100%
  );
  ${({ isCommonOrRare, classType }) =>
    isCommonOrRare &&
    css`
      border: 1px solid ${classType === "common" ? "#FFFFFF;" : "#38F238"};
    `}

  ${({ isEpic, isLegend }) =>
    (isEpic || isLegend) &&
    css`
      &::before {
        ${GradientBorderCss}
        ${isEpic &&
        css`
          background: linear-gradient(180deg, #05b7b7 0%, #00ffff 100%);
        `}
        ${isLegend &&
        css`
          background: linear-gradient(180deg, #5e05b7 0%, #cc00ff 100%);
        `}
      }
    `}

    ${({ isHidden }) =>
    isHidden &&
    css`
      &::before {
        ${GradientBorderCss}
        background: linear-gradient(180deg, #FF0000 0%, #FF4D00 100%);
      }
    `}

  position: relative;
  border-radius: 24px;
  padding: 10px;
`;

export const StylerCardInnerBox = styled.div<{
  classType: string;
  isCommonOrRare: boolean;
  isEpic: boolean;
  isLegend: boolean;
  isHidden: boolean;
}>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 270px;
  height: 404px;
  ${({ isCommonOrRare, classType }) =>
    isCommonOrRare &&
    css`
      border: 3px solid ${classType === "common" ? "#FFFFFF;" : "#38F238"};
    `}

  ${({ isEpic, isLegend }) =>
    (isEpic || isLegend) &&
    css`
      &::before {
        ${GradientBorderCss}
        ${isEpic &&
        css`
          background: linear-gradient(180deg, #3c67ff 0%, #00f0ff 100%);
          padding: 3px;
        `}
        ${isLegend &&
        css`
          background: linear-gradient(180deg, #fb3cff 0%, #ff007a 100%);
          padding: 3px;
        `}
      }
    `}

    ${({ isHidden }) =>
    isHidden &&
    css`
      &::before {
        ${GradientBorderCss}
        background: linear-gradient(180deg, #ff3c3c 0%, #ff9900 100%);
      }
    `}

  border-radius: 24px;
  overflow: hidden;
  padding: 10px;
`;

export const StyledGomemImage = styled.div<{
  imageSrc: string;
}>`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
  height: 410px;
  background-image: url(${({ imageSrc }) => imageSrc});
  background-position: center;
  background-size: cover;
`;

export const StyledCardClass = styled.div<{
  classType: string;
  isCommonOrRare: boolean;
  isEpic: boolean;
  isLegend: boolean;
  isHidden: boolean;
}>`
  ${({ isEpic, isLegend, isHidden }) => {
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
  }}
  position: absolute;
  bottom: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  ${({ isCommonOrRare, classType }) =>
    isCommonOrRare &&
    css`
      color: ${classType === "common" ? "#CFCFCF" : "#38F238"};
    `}

  ${({ isEpic, isLegend, isHidden }) =>
    (isEpic || isLegend || isHidden) &&
    css`
      background: linear-gradient(
        180deg,
        var(--first-gradient-color) 0%,
        var(--second-gradient-color) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
  z-index: 10;
`;

export const StyledCardName = styled.div<{
  classType: string;
  isCommonOrRare: boolean;
  isEpic: boolean;
  isLegend: boolean;
  isHidden: boolean;
}>`
  ${({ isEpic, isLegend, isHidden }) => {
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
  }}
  position: absolute;
  bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  ${({ isCommonOrRare, classType }) =>
    isCommonOrRare &&
    css`
      color: ${classType === "common" ? "#9B9B9B" : "#41DD41"};
    `}

  ${({ isEpic, isLegend, isHidden }) =>
    (isEpic || isLegend || isHidden) &&
    css`
      background: linear-gradient(
        180deg,
        var(--first-gradient-color) 0%,
        var(--second-gradient-color) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}

  z-index: 10;
`;

export const CardStarArea = styled.div<{ isEpicOrLegend?: boolean }>`
  position: absolute;
  top: 6px;
  left: 6px;
  display: flex;
  align-items: flex-end;
  z-index: 10;

  ${({ isEpicOrLegend }) =>
    isEpicOrLegend &&
    css`
      left: auto;
      bottom: auto;
      top: -40%;
      right: 27%;
    `}
`;

export const StyledStar = styled((props) => <Star {...props} />)`
  &:first-child {
    width: 59px;
    height: 59px;
  }
  width: 40px;
  height: 40px;
`;
