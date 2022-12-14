import styled from "styled-components";

import { starImage } from "assets/images";

const StyledStar = styled.div`
  &:first-child {
    width: 100px;
    height: 100px;
  }
  width: 82px;
  height: 82px;
  background-image: url(${starImage});
  background-size: cover;
`;

export const Star = ({
  className,
  onAnimationStart = () => {}
}: {
  className: string;
  onAnimationStart?: () => void;
}) => {
  return (
    <StyledStar className={className} onAnimationStart={onAnimationStart} />
  );
};
