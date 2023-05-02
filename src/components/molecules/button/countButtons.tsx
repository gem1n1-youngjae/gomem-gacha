import { useCallback, useState } from "react";
import styled from "styled-components";
import { PlayFunction } from "use-sound/dist/types";

import { PopoutButton } from "components/atoms";

const CountButtonsWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 150px;
`;

const StyledPopoutButton = styled(PopoutButton)`
  width: max-content;
  height: max-content;

  background-repeat: no-repeat;
  background-size: cover;
  z-index: 99;

  & > .buttonTopSide {
    padding: 20px 25px;
    font-size: 18px;
  }
`;

export const CountButtons = ({
  clickButton
}: {
  clickButton?: PlayFunction;
}) => {
  const defaultCount =
    Number(JSON.parse(window.localStorage.getItem("count"))) ?? 0;
  const [number, setNumber] = useState(defaultCount);

  const onIncrease = useCallback(() => {
    setNumber(number + 1);
    window.localStorage.setItem("count", String(number + 1));
  }, [number]);

  const onReset = useCallback(() => {
    setNumber(0);
    window.localStorage.setItem("count", String(0));
  }, []);

  return (
    <CountButtonsWrapper>
      <StyledPopoutButton
        onClick={() => {
          onReset();
          clickButton?.();
        }}
      >
        re
      </StyledPopoutButton>
      <StyledPopoutButton
        onClick={() => {
          onIncrease();
          clickButton?.();
        }}
      >
        {number}
      </StyledPopoutButton>
    </CountButtonsWrapper>
  );
};
