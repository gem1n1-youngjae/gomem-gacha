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
  starCount,
  onClickGomemCard
}: {
  name: string;
  gomemClass: string;
  imageSrc: string;
  starCount: number;
  onClickGomemCard?: ({ name }) => void;
}) => {
  const isCommonOrRare = gomemClass === "common" || gomemClass === "rare";
  const isEpic = gomemClass === "epic";
  const isLegend = gomemClass === "legend";
  const isHidden = gomemClass === "hidden";
  const isUltraLegeno = gomemClass === "ultraLegeno";
  const isGradientText = isEpic || isLegend || isHidden || isUltraLegeno;

  return (
    <StylerCardOuterBox
      classType={gomemClass}
      isCommonOrRare={isCommonOrRare}
      isEpic={isEpic}
      isLegend={isLegend}
      isHidden={isHidden}
      isUltraLegeno={isUltraLegeno}
      onClick={() => {
        onClickGomemCard({ name });
      }}
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
        isUltraLegeno={isUltraLegeno}
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
            isUltraLegeno={isUltraLegeno}
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
          isUltraLegeno={isUltraLegeno}
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
            isUltraLegeno={isUltraLegeno}
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
          isUltraLegeno={isUltraLegeno}
        >
          {name}
        </StyledCardName>
      </StylerCardInnerBox>
    </StylerCardOuterBox>
  );
};
