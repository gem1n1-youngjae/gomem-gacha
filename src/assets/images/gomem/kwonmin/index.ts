import { kwonminCommonImages } from "./common/index";
import { kwonminEpicImages } from "./epic/index";
import { kwonminLegendImages } from "./legend/index";
import { kwonminRareImages } from "./rare/index";

export const kwonmin = {
  Common: kwonminCommonImages,
  Rare: kwonminRareImages,
  Epic: kwonminEpicImages,
  Legend: kwonminLegendImages,
  realName: "권민"
};

export type kwonminType = typeof kwonmin;
