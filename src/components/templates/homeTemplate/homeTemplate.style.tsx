import styled from "styled-components";

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
