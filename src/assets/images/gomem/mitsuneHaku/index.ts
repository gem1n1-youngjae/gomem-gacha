import { mitsuneHakuCommonImages } from "./common/index";
import { mitsuneHakuEpicImages } from "./epic/index";
import { mitsuneHakuLegendImages } from "./legend/index";
import { mitsuneHakuRareImages } from "./rare/index";

export const mitsuneHaku = {
  Common: mitsuneHakuCommonImages,
  Rare: mitsuneHakuRareImages,
  Epic: mitsuneHakuEpicImages,
  Legend: mitsuneHakuLegendImages,
};

export type mitsuneHakuType = typeof mitsuneHaku;
