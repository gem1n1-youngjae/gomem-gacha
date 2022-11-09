import styled from "styled-components";

import { clickBackButton, defaultBackButton } from "assets/images";

export const StyledBackButton = styled.div`
  width: 80px;
  height: 86px;
  background-image: url(${defaultBackButton});

  &:active {
    background-image: url(${clickBackButton});
  }

  z-index: 99;
`;
