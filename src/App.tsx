import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages";

const App = (): JSX.Element => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
