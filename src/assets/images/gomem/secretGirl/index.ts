import { secretGirlCommonImages } from "./common/index";
import { secretGirlEpicImages } from "./epic/index";
import { secretGirlLegendImages } from "./legend/index";
import { secretGirlRareImages } from "./rare/index";

export const secretGirl = {
  Common: secretGirlCommonImages,
  Rare: secretGirlRareImages,
  Epic: secretGirlEpicImages,
  Legend: secretGirlLegendImages,
  realName: "비밀소녀"
};

export type secretGirlType = typeof secretGirl;
