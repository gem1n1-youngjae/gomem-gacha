import { PlayFunction } from "use-sound/dist/types";

import { HomeTemplate } from "components/templates";

export const HomePage = ({
  clickButton
}: {
  clickButton?: PlayFunction;
}): JSX.Element => {
  return <HomeTemplate clickButton={clickButton} />;
};
