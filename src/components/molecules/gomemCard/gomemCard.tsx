import {
  CardStarArea,
  StyledCardClass,
  StyledCardName,
  StyledGomemImage,
  StyledStar,
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
  const isCommonOrRare = gomemClass === "common" || gomemClass === "rare";
  const isEpic = gomemClass === "epic";
  const isLegend = gomemClass === "legend";
  const isHidden = gomemClass === "hidden";
  const isGradientText = isEpic || isLegend || isHidden;

  return (
    <StylerCardOuterBox
      classType={gomemClass}
      isCommonOrRare={isCommonOrRare}
      isEpic={isEpic}
      isLegend={isLegend}
      isHidden={isHidden}
    >
      <CardStarArea>
        {[...Array(starCount)].map((_, idx) => {
          return <StyledStar index={idx} key={`star-${idx}`} />;
        })}
      </CardStarArea>
      <StylerCardInnerBox
        classType={gomemClass}
        isCommonOrRare={isCommonOrRare}
        isEpic={isEpic}
        isLegend={isLegend}
        isHidden={isHidden}
      >
        <StyledGomemImage imageSrc={imageSrc} />
        {isGradientText && (
          <StyledCardClass
            className={"textBorder"}
            classType={gomemClass}
            isCommonOrRare={isCommonOrRare}
            isEpic={isEpic}
            isLegend={isLegend}
            isHidden={isHidden}
          >
            {gomemClass}
          </StyledCardClass>
        )}
        <StyledCardClass
          className={!isGradientText && "textBorder"}
          classType={gomemClass}
          isCommonOrRare={isCommonOrRare}
          isEpic={isEpic}
          isLegend={isLegend}
          isHidden={isHidden}
        >
          {gomemClass}
        </StyledCardClass>
        {isGradientText && (
          <StyledCardName
            className={"textBorder"}
            classType={gomemClass}
            isCommonOrRare={isCommonOrRare}
            isEpic={isEpic}
            isLegend={isLegend}
            isHidden={isHidden}
          >
            {name}
          </StyledCardName>
        )}
        <StyledCardName
          className={!isGradientText && "textBorder"}
          classType={gomemClass}
          isCommonOrRare={isCommonOrRare}
          isEpic={isEpic}
          isLegend={isLegend}
          isHidden={isHidden}
        >
          {name}
        </StyledCardName>
      </StylerCardInnerBox>
    </StylerCardOuterBox>
  );
};
