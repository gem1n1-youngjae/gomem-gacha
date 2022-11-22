import React from "react";
import {
  StyledCardClass,
  StyledCardName,
  StyledGomemImage,
  StylerCardInnerBox,
  StylerCardOuterBox
} from "./gomemCard.style";

export const GomemCard = ({
  name,
  gomemClass,
  imageSrc,
  starCount
}: {
  name: string;
  gomemClass: string;
  imageSrc: string;
  starCount: number;
}) => {
  const isCommonOrRare = gomemClass === "Common" || gomemClass === "Rare";
  const isEpic = gomemClass === "Epic";
  const isLegend = gomemClass === "Legend";
  const isEpicOrLegend = isEpic || isLegend;

  return (
    <StylerCardOuterBox
      classType={gomemClass}
      isCommonOrRare={isCommonOrRare}
      isEpic={isEpic}
      isLegend={isLegend}
    >
      <StylerCardInnerBox
        classType={gomemClass}
        isCommonOrRare={isCommonOrRare}
        isEpic={isEpic}
        isLegend={isLegend}
      >
        <StyledGomemImage imageSrc={imageSrc} />
        {isEpicOrLegend && (
          <StyledCardClass
            className={"textBorder"}
            classType={gomemClass}
            isCommonOrRare={isCommonOrRare}
            isEpic={isEpic}
            isLegend={isLegend}
          >
            {gomemClass}
          </StyledCardClass>
        )}
        <StyledCardClass
          className={!isEpicOrLegend && "textBorder"}
          classType={gomemClass}
          isCommonOrRare={isCommonOrRare}
          isEpic={isEpic}
          isLegend={isLegend}
        >
          {gomemClass}
        </StyledCardClass>
        {isEpicOrLegend && (
          <StyledCardName
            className={"textBorder"}
            classType={gomemClass}
            isCommonOrRare={isCommonOrRare}
            isEpic={isEpic}
            isLegend={isLegend}
          >
            {name}
          </StyledCardName>
        )}
        <div style={{ height: 10 }} />
        <StyledCardName
          className={!isEpicOrLegend && "textBorder"}
          classType={gomemClass}
          isCommonOrRare={isCommonOrRare}
          isEpic={isEpic}
          isLegend={isLegend}
        >
          {name}
        </StyledCardName>
      </StylerCardInnerBox>
    </StylerCardOuterBox>
  );
};
