import { kwakChunSikCommonImages } from "./common/index";
import { kwakChunSikEpicImages } from "./epic/index";
import { kwakChunSikHiddenImages } from "./hidden";
import { kwakChunSikLegendImages } from "./legend/index";
import { kwakChunSikRareImages } from "./rare/index";

export const kwakChunSik = {
  Common: kwakChunSikCommonImages,
  Rare: kwakChunSikRareImages,
  Epic: kwakChunSikEpicImages,
  Legend: kwakChunSikLegendImages,
  Hidden: kwakChunSikHiddenImages,
  realName: "곽춘식"
};

export type kwakChunSikType = typeof kwakChunSik;
