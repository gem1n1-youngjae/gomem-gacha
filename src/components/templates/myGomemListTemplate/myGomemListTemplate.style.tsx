import styled from "styled-components";

import { gachaHomeBackground } from "assets/images";

export const StyledGachaHomeTemplate = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${gachaHomeBackground});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #a9e9be 0%, #68fdd9 100%);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  padding: 72px 40px 60px 40px;
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
  display: grid;
  padding: 0 40px;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 290px);
  column-gap: 61px;
  row-gap: 50px;
  padding-bottom: 200px;
`;

export const SeletButtonsWrapper = styled.div`
  display: flex;
  padding: 0 40px;
  gap: 15px;
  margin-bottom: 32px;
`;

export const SelectOptionContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  z-index: 12;
  width: 160px;
  height: 200px;
  background: rgba(208, 208, 208, 0.8);
  margin-top: 8px;
  border-radius: 12px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const SeletOption = styled.div`
  padding: 6px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;

  &:hover {
    background-color: #ffffff;
  }
`;
