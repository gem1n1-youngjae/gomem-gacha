import { HashRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "components/organism";
import { GachaHome, GachaPage, HomePage } from "components/pages";

const App = (): JSX.Element => {
  if (process.env.NODE_ENV !== "development") {
    document.addEventListener("keydown", (event) => {
      if (
        event.ctrlKey ||
        (event.shiftKey &&
          (event.key === "Control" ||
            event.key === "r" ||
            event.key === "Shift"))
      ) {
        event.cancelBubble = true;
        event.returnValue = false;
      }
    });
  }

  return (
    <>
      <NavBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gachaHome" element={<GachaHome />} />
          <Route path="/gachaPage" element={<GachaPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: (channel: string, ...args: unknown[]) => void;
        on: (channel: string, func: (...args: unknown[]) => unknown) => void;
      };
    };
  }
}
