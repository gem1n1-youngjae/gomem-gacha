import React from "react";

import { ButtonsDiv, Container, Title } from "./navBar.style";

import { CloseIcon, MaximizeIcon, MinimizeIcon } from "assets/icons";
import { NavIcon } from "components/atoms";

export const NavBar: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Title>고멤 가챠</Title>
      <ButtonsDiv>
        <NavIcon event="minimizeMainWindow">
          <MinimizeIcon width={12} height={2} />
        </NavIcon>

        <NavIcon event="closeMainWindow">
          <CloseIcon width={12} />
        </NavIcon>
      </ButtonsDiv>
    </Container>
  );
};
