import { mitsuneHaku, mitsuneHakuType } from "./mitsuneHaku";
import { secretGirl, secretGirlType } from "./secretGirl";

export type gomemListType = {
  secretGirl: secretGirlType;
  mitsuneHaku: mitsuneHakuType;
};

export const gomemList: gomemListType = {
  secretGirl,
  mitsuneHaku,
};
