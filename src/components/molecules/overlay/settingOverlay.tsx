import {
  Content,
  ContentWrapper,
  OverlayWrapper,
  StyledInputRange,
  StyledText
} from "./settingOverlay.style";

export const SettingOverlay = ({
  onClose,
  volume,
  setVolume
}: {
  onClose: () => void;
  volume: number;
  setVolume: (value: number) => void;
}) => {
  return (
    <OverlayWrapper onClick={onClose}>
      <ContentWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Content>
          <StyledText>사운드</StyledText>
          <StyledInputRange
            type="range"
            min={0}
            max={100}
            defaultValue={volume * 100}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setVolume(Number(e.target.value) / 100);
            }}
          />
        </Content>
      </ContentWrapper>
    </OverlayWrapper>
  );
};
