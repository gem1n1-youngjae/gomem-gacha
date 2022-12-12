import styled, { keyframes } from "styled-components";

import { gomemGacha, homeBackground } from "assets/images";
import { PopoutButton } from "components/atoms";

export const StyledHomeTemplate = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homeBackground});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StartButton = styled(PopoutButton)`
  position: absolute;
  top: 746px;
  left: 50%;
  transform: translate(-50%, 0);
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
  99%{
    opacity: 0;
  }
  100%{
    opacity: 0;
    display: none;
  }
`;

export const GachaCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  animation: ${opacityAnimation} 2s forwards;
  z-index: 10;
  opacity: 0;
`;

export const StyledGomemGachaImage = styled.div`
  position: absolute;
  width: 1214px;
  height: 639px;
  top: 83px;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${gomemGacha});
`;
