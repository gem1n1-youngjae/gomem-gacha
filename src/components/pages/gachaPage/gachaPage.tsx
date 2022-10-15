import { gomemList } from "assets/images/gomem";
import { GachaPageTemplate } from "components/templates";
import { useRandom } from "utils/hooks/useRandom";

export const GachaPage = () => {
  const randomCharacter = useRandom(gomemList);

  return <GachaPageTemplate randomCharacter={randomCharacter} />;
};
