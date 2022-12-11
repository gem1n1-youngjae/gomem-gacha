import { kwakChunSik, kwakChunSikType } from "./kwakChunSik";
import { mitsuneHaku, mitsuneHakuType } from "./mitsuneHaku";
import { secretGirl, secretGirlType } from "./secretGirl";

export type gomemListType = {
  secretGirl: secretGirlType;
  mitsuneHaku: mitsuneHakuType;
  kwakChunSik: kwakChunSikType;
};

export const gomemList: gomemListType = {
  secretGirl,
  mitsuneHaku,
  kwakChunSik
};
