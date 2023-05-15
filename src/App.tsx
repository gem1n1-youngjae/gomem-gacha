import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { useRandomGomemSound } from "assets/sounds/gomem/hook";
import { useStarSoundHook } from "assets/sounds/hooks";
import { NavBar } from "components/organism";
import { GachaHome, GachaPage, HomePage, MyGomemPage } from "components/pages";
import { ReplayPage } from "components/pages/replayPage/replayPage";

const App = (): JSX.Element => {
  const defaultAllVoulume =
    Number(JSON.parse(window.localStorage.getItem("allVolume"))) ?? 0.5;
  const defaultBgmVolume =
    Number(JSON.parse(window.localStorage.getItem("bgmVolume"))) ?? 0.5;
  const defaultEffectVoulme =
    Number(JSON.parse(window.localStorage.getItem("effectVoulme"))) ?? 0.5;
  const defaultGachaVolume =
    Number(JSON.parse(window.localStorage.getItem("gachaVolume"))) ?? 0.5;

  const {
    basicBGM,
    showStar,
    clickButton,
    gacha,
    gachaBGM,
    allVolume,
    controlAllVolume,
    bgmVolume,
    controlBgmVolume,
    effectVoulme,
    controleffectVolume,
    gachaVolume,
    controlGachaVolume
  } = useStarSoundHook({
    defaultAllVoulume,
    defaultBgmVolume,
    defaultEffectVoulme,
    defaultGachaVolume
  });

  const { getRandomGomemSound } = useRandomGomemSound({
    defaultAllVoulume,
    defaultEffectVoulme
  });

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
          <Route
            path="/"
            element={
              <HomePage
                clickButton={clickButton}
                defaultBgmVolume={defaultBgmVolume * defaultAllVoulume}
              />
            }
          />
          <Route
            path="/gachaHome"
            element={
              <GachaHome
                clickButton={clickButton}
                allVolume={allVolume}
                controlAllVolume={controlAllVolume}
                bgmVolume={bgmVolume}
                controlBgmVolume={controlBgmVolume}
                effectVoulme={effectVoulme}
                controleffectVolume={controleffectVolume}
                gachaVolume={gachaVolume}
                controlGachaVolume={controlGachaVolume}
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
                defaultGachaVolume={defaultGachaVolume * defaultAllVoulume}
                getRandomGomemSound={getRandomGomemSound}
              />
            }
          />
          <Route
            path="/myGomem"
            element={<MyGomemPage clickButton={clickButton} />}
          />
          <Route
            path="/replay"
            element={
              <ReplayPage
                basicBGM={basicBGM}
                clickButton={clickButton}
                defaultGachaVolume={defaultGachaVolume * defaultAllVoulume}
              />
            }
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
