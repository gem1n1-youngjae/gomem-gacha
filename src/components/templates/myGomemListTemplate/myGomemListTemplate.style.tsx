import styled from "styled-components";

import { gachaHomeBackground } from "assets/images";

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

export const PageTitleText = styled.div`
  position: absolute;
  top: 93px;
  left: 152px;
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  color: #ffffff;
  user-select: none;
`;
