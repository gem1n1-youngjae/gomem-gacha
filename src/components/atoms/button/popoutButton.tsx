import React from "react";
import styled from "styled-components";

import { button } from "assets/images";

const StyledPopOutButton = styled.button`
  width: 393px;
  height: 108px;
  border: 0;
  padding: 0;
  border-radius: 28px;
  color: #15342c;
  user-select: none;
  background: #3da88d;

  & .buttonTopSide {
    width: 100%;
    height: 100%;
    padding-top: 0px;
    box-sizing: border-box;
    border-radius: 28px;

    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    will-change: transform;
    background-image: url(${button});
    transform: translateY(-14px);
    transition: transform 400ms cubic-bezier(0.3, 0.7, 0.4, 1), color 100ms,
      background-color 100ms;

    font-family: "RixYeoljeongdo_Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 43px;
  }

  &:hover {
    & .buttonTopSide {
      transform: translateY(-18px);
      transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    }
  }

  &:active {
    & .buttonTopSide {
      transform: translateY(-6px);
      transition: transform 34ms;
    }
  }
`;

export const PopoutButton = ({
  children,
  ...props
}: {
  children?: React.ReactNode;
  [props: string]: unknown;
}) => {
  return (
    <StyledPopOutButton {...props}>
      <div className={"buttonTopSide"}>{children}</div>
    </StyledPopOutButton>
  );
};
