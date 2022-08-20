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
export function isStorySet(cardSet: CardSet): cardSet is StoryCardSet {
  return (
    cardSet === "story-0" ||
    cardSet === "story-1" ||
    cardSet === "story-2" ||
    cardSet === "story-9" ||
    cardSet === "story-10" ||
    cardSet === "story-10-heroic" ||
    cardSet === "story-12" ||
    cardSet === "story-12-heroic" ||
    cardSet === "story-13" ||
    cardSet === "story-13-heroic" ||
    cardSet === "story-15" ||
    cardSet === "hajimari" ||
    isMegamiChallengeSet(cardSet)
  );
}

/** 指定したカードセットが「メガミへの挑戦」であるかどうかを判定 */
export function isMegamiChallengeSet(
  cardSet: CardSet
): cardSet is StoryCardSet {
  return (
    cardSet === "oboro-challenge" ||
    cardSet === "oboro-challenge-heroic" ||
    cardSet === "chikage-challenge" ||
    cardSet === "chikage-challenge-heroic" ||
    cardSet === "raira-challenge" ||
    cardSet === "raira-challenge-heroic" ||
    cardSet === "megumi-challenge" ||
    cardSet === "megumi-challenge-heroic" ||
    cardSet === "shinra-challenge" ||
    cardSet === "shinra-challenge-heroic" ||
    cardSet === "korunu-challenge" ||
    cardSet === "korunu-challenge-heroic" ||
    cardSet === "hagane-challenge" ||
    cardSet === "hagane-challenge-heroic" ||
    cardSet === "yukihi-challenge" ||
    cardSet === "yukihi-challenge-heroic"
  );
}
