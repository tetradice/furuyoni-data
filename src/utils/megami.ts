import { Megami, MEGAMI_DATA } from "../data/index.js";
import { CardSet } from "../typings/index.js";
import { Language, ZhValiation } from "../typings/language.js";

/** メガミの表示名を取得（象徴武器表示あり） */
export function getMegamiDispNameWithSymbol(
  language: Language,
  zhValiation: ZhValiation,
  megami: Megami,
): string {
  const data = MEGAMI_DATA[megami];
  const name = selectLocalizedValue(
    language,
    zhValiation,
    data.name,
    data.nameZh,
    data.nameZhG1,
    data.nameKo,
    data.nameEn,
  );
  const symbol = selectLocalizedValue(
    language,
    zhValiation,
    data.symbol,
    data.symbolZh,
    data.symbolZhG1,
    data.symbolKo,
    data.symbolEn,
  );

  return language === "ja" || language === "zh"
    ? `${name}(${symbol})`
    : `${name} (${symbol})`;
}

/** メガミの表示名を取得 */
export function getMegamiDispName(
  language: Language,
  zhValiation: ZhValiation,
  megami: Megami,
): string {
  const data = MEGAMI_DATA[megami];
  return selectLocalizedValue(
    language,
    zhValiation,
    data.name,
    data.nameZh,
    data.nameZhG1,
    data.nameKo,
    data.nameEn,
  );
}

/** 再演で使用するメガミはすべて象徴武器を表示する */
export function isSymbolShownMegami(_megami: Megami): boolean {
  return true;
}

export const GetMegamiKeyMode = {
  MegamiSelecting: "MegamiSelecting",
  CardList: "CardList",
} as const;
export type TGetMegamiKeyMode =
  (typeof GetMegamiKeyMode)[keyof typeof GetMegamiKeyMode];

/** 再演シーズン1に登場するメガミをExcelの定義順で返す */
export function getMegamiKeys(
  _mode: TGetMegamiKeyMode,
  _cardSet: CardSet,
): Megami[] {
  return Object.keys(MEGAMI_DATA) as Megami[];
}

function selectLocalizedValue(
  language: Language,
  zhValiation: ZhValiation,
  ja: string,
  zh: string,
  zhG1: string,
  ko: string,
  en: string,
): string {
  if (language === "zh") {
    return (zhValiation === "G1" ? zhG1 : zh) || ja;
  }
  if (language === "ko") {
    return ko || ja;
  }
  if (language === "en") {
    return en || ja;
  }
  return ja;
}
