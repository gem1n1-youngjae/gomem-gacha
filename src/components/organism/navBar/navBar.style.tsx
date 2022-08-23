import styled from "styled-components";

export const Container = styled.div`
  --navigation-height: 2rem;
  position: absolute;
  width: 100%;
  height: var(--navigation-height);
  font-family: "SUIT";
  font-weight: 800;
  background: linear-gradient(135deg, #a9e9be 0%, #68fdd9 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;
  -webkit-app-region: drag;
  user-select: none;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  -webkit-app-region: no-drag;
  margin-left: 5px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  -webkit-app-region: no-drag;
`;
