import styled, { keyframes } from "styled-components";

import { clickButton, defaultButton, homeBackground } from "assets/images";

export const StyledHomeTemplate = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homeBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StartButton = styled.div`
  position: absolute;
  top: 746px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 393px;
  height: 123px;
  background-image: url(${defaultButton});

  &:active {
    background-image: url(${clickButton});
  }
`;

export const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #161616;
  z-index: 9;
`;

const opacityAnimation = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

export const GachaCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  animation: ${opacityAnimation} 2s 5s;
  z-index: 10;
  opacity: 0;
`;
