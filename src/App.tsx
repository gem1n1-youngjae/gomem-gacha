import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { useStarSoundHook } from "assets/sounds/hooks";
import { NavBar } from "components/organism";
import { GachaHome, GachaPage, HomePage, MyGomemPage } from "components/pages";

const App = (): JSX.Element => {
  const {
    basicBGM,
    showStar,
    clickButton,
    gacha,
    gachaBGM,
    volume,
    setVolume
  } = useStarSoundHook();
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

  useEffect(() => {
    basicBGM.play();
    return () => {
      basicBGM.stop();
    };
  }, [basicBGM]);

  return (
    <>
      <NavBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage clickButton={clickButton} />} />
          <Route
            path="/gachaHome"
            element={
              <GachaHome
                clickButton={clickButton}
                volume={volume}
                setVolume={setVolume}
              />
            }
          />
          <Route
            path="/gachaPage"
            element={
              <GachaPage
                playBgm={() => {
                  basicBGM.play();
                }}
                stopBgm={() => {
                  basicBGM.stop();
                }}
                clickButton={clickButton}
                gachaBGM={gachaBGM}
                showStar={showStar}
                gacha={gacha}
              />
            }
          />
          <Route
            path="/myGomem"
            element={<MyGomemPage clickButton={clickButton} />}
          />
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
