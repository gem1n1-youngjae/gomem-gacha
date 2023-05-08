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
  left: 0;
  z-index: 12;

  background: rgba(30, 30, 30, 0.9);
  margin-top: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 12px 16px;
  padding: 16px 24px;
  box-sizing: border-box;
`;

export const SeletOption = styled.div`
  width: 145px;
  height: 32px;
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgb(20, 20, 20);
  }
`;

export const UserHaveGomemListCount = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
