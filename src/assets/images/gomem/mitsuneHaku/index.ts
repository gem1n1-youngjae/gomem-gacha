import { mitsuneHakuCommonImages } from "./common/index";
import { mitsuneHakuEpicImages } from "./epic/index";
import { mitsuneHakuLegendImages } from "./legend/index";
import { mitsuneHakuRareImages } from "./rare/index";

export const mitsuneHaku = {
  Common: mitsuneHakuCommonImages,
  Rare: mitsuneHakuRareImages,
  Epic: mitsuneHakuEpicImages,
  Legend: mitsuneHakuLegendImages,
  realName: "미츠네-하쿠"
};

export type mitsuneHakuType = typeof mitsuneHaku;
