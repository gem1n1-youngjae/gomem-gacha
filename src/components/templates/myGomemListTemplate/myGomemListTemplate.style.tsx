import styled from "styled-components";

import { gachaHomeBackground } from "assets/images";

export const StyledGachaHomeTemplate = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${gachaHomeBackground});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  padding: 72px 34px 60px 34px;
`;

export const PageTitleText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  color: #ffffff;
  user-select: none;
`;

export const MainContentWrapper = styled.div`
  width: 100%;
`;
