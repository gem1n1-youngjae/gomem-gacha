import { HashRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "components/organism";
import { GachaHome, HomePage } from "components/pages";

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gachaHome" element={<GachaHome />} />
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
