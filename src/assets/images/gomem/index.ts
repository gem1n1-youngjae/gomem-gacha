import { kwakChunSik, kwakChunSikType } from "./kwakChunSik";
import { kwonmin, kwonminType } from "./kwonmin";
import { mitsuneHaku, mitsuneHakuType } from "./mitsuneHaku";
import { secretGirl, secretGirlType } from "./secretGirl";

export type gomemListType = {
  secretGirl: secretGirlType;
  mitsuneHaku: mitsuneHakuType;
  kwakChunSik: kwakChunSikType;
  kwonmin: kwonminType;
};

export const gomemList: gomemListType = {
  secretGirl,
  mitsuneHaku,
  kwakChunSik,
  kwonmin
};
