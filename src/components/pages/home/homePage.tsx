import { PlayFunction } from "use-sound/dist/types";

import { HomeTemplate } from "components/templates";

export const HomePage = ({
  clickButton,
  defaultBgmVolume
}: {
  clickButton?: PlayFunction;
  defaultBgmVolume?: number;
}): JSX.Element => {
  return (
    <HomeTemplate
      clickButton={clickButton}
      defaultBgmVolume={defaultBgmVolume}
    />
  );
};
