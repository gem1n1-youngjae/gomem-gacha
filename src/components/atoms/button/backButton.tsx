import { useNavigate } from "react-router-dom";

import { StyledBackButton } from "./backbutton.style";

export const BackButton = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  return (
    <StyledBackButton
      className={className}
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};
