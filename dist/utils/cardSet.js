"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMegamiChallengeSet = exports.isStorySet = exports.getCardSetListName = exports.getCardSetName = void 0;
const index_js_1 = require("../data/index.js");
/** 言語に応じたカードセット名を取得 */
function getCardSetName(cardSet, lang) {
    if (lang === "zh") {
        return index_js_1.CARD_SET_DATA[cardSet].nameZh;
    }
    else if (lang === "ko") {
        return index_js_1.CARD_SET_DATA[cardSet].nameKo;
    }
    else if (lang === "en") {
        return index_js_1.CARD_SET_DATA[cardSet].nameEn;
    }
    else {
        return index_js_1.CARD_SET_DATA[cardSet].name;
    }
}
exports.getCardSetName = getCardSetName;
/** 言語に応じたカードセットの一覧表示名を取得 */
function getCardSetListName(cardSet, lang) {
    if (lang === "zh") {
        return index_js_1.CARD_SET_DATA[cardSet].listNameZh;
    }
    else if (lang === "ko") {
        return index_js_1.CARD_SET_DATA[cardSet].listNameKo;
    }
    else if (lang === "en") {
        return index_js_1.CARD_SET_DATA[cardSet].listNameEn;
    }
    else {
        return index_js_1.CARD_SET_DATA[cardSet].listName;
    }
}
exports.getCardSetListName = getCardSetListName;
/** 指定したカードセットが物語セットであるかどうかを判定 */
function isStorySet(cardSet) {
    return (cardSet === "story-0" ||
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
        isMegamiChallengeSet(cardSet));
}
exports.isStorySet = isStorySet;
/** 指定したカードセットが「メガミへの挑戦」であるかどうかを判定 */
function isMegamiChallengeSet(cardSet) {
    return (cardSet === "oboro-challenge" ||
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
        cardSet === "yukihi-challenge-heroic");
}
exports.isMegamiChallengeSet = isMegamiChallengeSet;
//# sourceMappingURL=cardSet.js.map