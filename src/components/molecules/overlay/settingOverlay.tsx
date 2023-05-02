import {
  Content,
  ContentWrapper,
  List,
  OverlayWrapper,
  StyledInputRange,
  StyledText
} from "./settingOverlay.style";

export const SettingOverlay = ({
  onClose,
  allVolume,
  controlAllVolume,
  bgmVolume,
  controlBgmVolume,
  effectVoulme,
  controleffectVolume,
  gachaVolume,
  controlGachaVolume
}: {
  onClose: () => void;
  allVolume: number;
  controlAllVolume: (value: number) => void;
  bgmVolume: number;
  controlBgmVolume: (value: number) => void;
  effectVoulme: number;
  controleffectVolume: (value: number) => void;
  gachaVolume: number;
  controlGachaVolume: (value: number) => void;
}) => {
  return (
    <OverlayWrapper onClick={onClose}>
      <ContentWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Content>
          <List>
            <StyledText>전체</StyledText>
            <StyledInputRange
              type="range"
              min={0}
              max={100}
              step={1}
              defaultValue={allVolume * 100}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                controlAllVolume(Number(e.target.value) / 100);
              }}
            />
          </List>
          <List>
            <StyledText>효과음</StyledText>
            <StyledInputRange
              type="range"
              min={0}
              max={100}
              step={1}
              defaultValue={effectVoulme * 100}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                controleffectVolume(Number(e.target.value) / 100);
              }}
            />
          </List>
          <List>
            <StyledText>배경음</StyledText>
            <StyledInputRange
              type="range"
              min={0}
              max={100}
              step={1}
              defaultValue={bgmVolume * 100}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                controlBgmVolume(Number(e.target.value) / 100);
              }}
            />
          </List>
          <List>
            <StyledText>가챠음</StyledText>
            <StyledInputRange
              type="range"
              min={0}
              max={100}
              step={1}
              defaultValue={gachaVolume * 100}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                controlGachaVolume(Number(e.target.value) / 100);
              }}
            />
          </List>
        </Content>
      </ContentWrapper>
    </OverlayWrapper>
  );
};
