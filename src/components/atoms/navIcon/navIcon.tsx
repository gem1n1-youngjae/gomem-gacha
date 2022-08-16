import React from "react";

import { NavIconContainer } from "./navIcon.style";

interface NavIconInterface {
  event: string;
}

export const NavIcon: React.FC<NavIconInterface> = ({
  children,
  event,
}): JSX.Element => {
  const doEvent = (event: string) => {
    window.electron.ipcRenderer.send(event);
  };
  return (
    <NavIconContainer
      onClick={() => {
        doEvent(event);
      }}
    >
      {children}
    </NavIconContainer>
  );
};
