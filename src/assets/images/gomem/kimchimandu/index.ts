import { kimchimanduCommonImages } from "./common/index";
import { kimchimanduEpicImages } from "./epic/index";
import { kimchimanduHiddenImages } from "./hidden";
import { kimchimanduLegendImages } from "./legend/index";
import { kimchimanduRareImages } from "./rare/index";

export const kimchimandu = {
  Common: kimchimanduCommonImages,
  Rare: kimchimanduRareImages,
  Epic: kimchimanduEpicImages,
  Legend: kimchimanduLegendImages,
  Hidden: kimchimanduHiddenImages,
  realName: "김치만두번영택사스가"
};

export type kimchimanduType = typeof kimchimandu;
