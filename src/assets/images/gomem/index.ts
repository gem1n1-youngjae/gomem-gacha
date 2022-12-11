import { jururu, jururuType } from "./jururu";
import { kimchimandu, kimchimanduType } from "./kimchimandu";
import { kwakChunSik, kwakChunSikType } from "./kwakChunSik";
import { kwonmin, kwonminType } from "./kwonmin";
import { mitsuneHaku, mitsuneHakuType } from "./mitsuneHaku";
import { secretGirl, secretGirlType } from "./secretGirl";

export type gomemListType = {
  secretGirl: secretGirlType;
  mitsuneHaku: mitsuneHakuType;
  kwakChunSik: kwakChunSikType;
  kwonmin: kwonminType;
  jururu: jururuType;
  kimchimandu: kimchimanduType;
};

export const gomemList: gomemListType = {
  secretGirl,
  mitsuneHaku,
  kwakChunSik,
  kwonmin,
  jururu,
  kimchimandu
};
