import { CARD_SET_DATA } from "../data/index.js";
import { Language } from "../typings/index.js";
import { CardSet, StoryCardSet } from "../typings/data.js";

/** 言語に応じたカードセット名を取得 */
export function getCardSetName(cardSet: CardSet, lang: Language) {
  if (lang === "zh") {
    return CARD_SET_DATA[cardSet].nameZh;
  } else if (lang === "ko") {
    return CARD_SET_DATA[cardSet].nameKo;
  } else if (lang === "en") {
    return CARD_SET_DATA[cardSet].nameEn;
  } else {
    return CARD_SET_DATA[cardSet].name;
  }
}

/** 言語に応じたカードセットの一覧表示名を取得 */
export function getCardSetListName(cardSet: CardSet, lang: Language) {
  if (lang === "zh") {
    return CARD_SET_DATA[cardSet].listNameZh;
  } else if (lang === "ko") {
    return CARD_SET_DATA[cardSet].listNameKo;
  } else if (lang === "en") {
    return CARD_SET_DATA[cardSet].listNameEn;
  } else {
    return CARD_SET_DATA[cardSet].listName;
  }
}

/** 指定したカードセットが物語セットであるかどうかを判定 */
export function isStorySet(_cardSet: CardSet): _cardSet is StoryCardSet {
  return false;
}

/** 指定したカードセットが「メガミへの挑戦」であるかどうかを判定 */
export function isMegamiChallengeSet(
  _cardSet: CardSet,
): _cardSet is StoryCardSet {
  return false;
}
