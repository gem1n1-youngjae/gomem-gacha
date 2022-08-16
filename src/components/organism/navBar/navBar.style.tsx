import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: var(--navigation-height);
  background-color: #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;
  -webkit-app-region: drag;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  -webkit-app-region: no-drag;
  margin-left: 5px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  -webkit-app-region: no-drag;
`;
