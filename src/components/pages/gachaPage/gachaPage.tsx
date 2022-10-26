import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { gomemList } from "assets/images/gomem";
import { GachaPageTemplate } from "components/templates";
import { useRandom } from "utils/hooks/useRandom";

export const GachaPage = () => {
  const randomCharacter = useRandom(gomemList);
  const navigate = useNavigate();

  const onClickSaveButton = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <GachaPageTemplate
      randomCharacter={randomCharacter}
      onClickSaveButton={onClickSaveButton}
    />
  );
};
