import { useState } from "react";
import styled from "styled-components";
import { PlayFunction } from "use-sound/dist/types";

import { PopoutButton } from "components/atoms";

const StyledPopoutButton = styled(PopoutButton)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 72px;
  height: 72px;
  background-repeat: no-repeat;
  background-size: cover;

  & > .buttonTopSide {
    font-size: 24px;
  }
`;

export const CountButton = ({
  clickButton
}: {
  clickButton?: PlayFunction;
}) => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((v) => v + 1);
  };

  return (
    <StyledPopoutButton
      onClick={() => {
        onIncrease();
        clickButton?.();
      }}
    >
      {number}
    </StyledPopoutButton>
  );
};
