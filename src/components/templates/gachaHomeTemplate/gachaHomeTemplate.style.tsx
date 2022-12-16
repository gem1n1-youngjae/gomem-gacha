import styled, { css } from "styled-components";

import {
  defaultGachaWackdo,
  defaultGomemWackdo,
  gachaHomeBackground,
  pressGachaWackdo,
  pressGomemWackdo
} from "assets/images";
import { BackButton } from "components/atoms";

export const StyledGachaHomeTemplate = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${gachaHomeBackground});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const GachaContent = styled.div`
  width: 916px;
  height: 563px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const WackdoButtonStyle = css`
  width: 416px;
  height: 586px;
  background-repeat: no-repeat;
  &:active {
    height: 567px;
  }
`;

export const StyledGachaButton = styled.div`
  ${WackdoButtonStyle}
  background-image: url(${defaultGachaWackdo});

  &:active {
    background-image: url(${pressGachaWackdo});
  }
`;

export const StyledGomemButton = styled.div`
  ${WackdoButtonStyle}
  background-image: url(${defaultGomemWackdo});
  &:active {
    background-image: url(${pressGomemWackdo});
  }
`;
