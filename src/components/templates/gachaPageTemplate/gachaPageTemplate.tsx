import React from "react";

import { StyledGachaPageTemplate } from "./gachaPageTemplate.style";

import { BackButton } from "components/atoms";
import { randomCharacterType } from "utils/hooks/useRandom";

export const GachaPageTemplate = ({
  randomCharacter,
}: {
  randomCharacter: randomCharacterType;
}) => {
  return (
    <StyledGachaPageTemplate>
      <BackButton />
      {randomCharacter.name}
      <img src={randomCharacter.src} alt={randomCharacter.name} />
    </StyledGachaPageTemplate>
  );
};
