import { Star } from "components/atoms";
import styled, { css } from "styled-components";

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
      border: 1px solid ${classType === "Common" ? "#FFFFFF;" : "#38F238"};
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

  position: relative;
  border-radius: 24px;
  padding: 10px;
`;

export const StylerCardInnerBox = styled.div<{
  classType: string;
  isCommonOrRare: boolean;
  isEpic: boolean;
  isLegend: boolean;
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
      border: 3px solid ${classType === "Common" ? "#FFFFFF;" : "#38F238"};
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
}>`
  --first-gradient-color: ${({ isEpic }) => (isEpic ? "#3c67ff" : "#FB3CFF")};
  --second-gradient-color: ${({ isEpic }) => (isEpic ? "#00f0ff" : "#FF007A")};
  position: absolute;
  bottom: 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  ${({ isCommonOrRare, classType }) =>
    isCommonOrRare &&
    css`
      color: ${classType === "Common" ? "#CFCFCF" : "#38F238"};
    `}

  ${({ isEpic, isLegend }) =>
    (isEpic || isLegend) &&
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
}>`
  --first-gradient-color: ${({ isEpic }) => (isEpic ? "#05b7b7" : "#5E05B7")};
  --second-gradient-color: ${({ isEpic }) => (isEpic ? "#00ffff" : "#CC00FF")};
  position: absolute;
  bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  ${({ isCommonOrRare, classType }) =>
    isCommonOrRare &&
    css`
      color: ${classType === "Common" ? "#9B9B9B" : "#41DD41"};
    `}

  ${({ isEpic, isLegend }) =>
    (isEpic || isLegend) &&
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
