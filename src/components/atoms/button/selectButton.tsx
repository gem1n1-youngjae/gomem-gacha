import { downArrow } from "assets/images";
import { useState } from "react";
import styled from "styled-components";

const Wapper = styled.div`
  position: relative;
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  background: rgba(208, 208, 208, 0.4);
  border-radius: 99px;
  gap: 8px;
  color: #ffffff;

  & > span {
    font-family: "SUIT";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
  }
`;

const DownArrow = styled.div`
  width: 25px;
  height: 17px;
  background-image: url(${downArrow});
  background-position: center;
  background-repeat: no-repeat;
`;

export const SelectButton = ({
  className,
  title,
  children,
  showChildren,
  onClickButton = () => {},
  showArrowButton = true
}: {
  className?: string;
  title: string;
  children?: React.ReactNode | string;
  showChildren?: boolean;
  onClickButton?: () => void;
  showArrowButton?: boolean;
}) => {
  return (
    <Wapper>
      <ButtonContent
        className={className}
        onClick={() => {
          onClickButton();
        }}
      >
        <span>{title}</span>
        {showArrowButton && <DownArrow />}
      </ButtonContent>
      {showChildren && children}
    </Wapper>
  );
};
