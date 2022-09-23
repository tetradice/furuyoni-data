"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMegamiKeys = exports.GetMegamiKeyMode = exports.isSymbolShownMegami = exports.getMegamiDispName = exports.getMegamiDispNameWithSymbol = void 0;
const index_js_1 = require("../data/index.js");
/** メガミの表示名を取得（象徴武器表示あり） */
function getMegamiDispNameWithSymbol(language, zhValiation, megami) {
    // 象徴武器表示なしメガミ
    if (!isSymbolShownMegami(megami)) {
        return getMegamiDispName(language, zhValiation, megami);
    }
    let data = index_js_1.MEGAMI_DATA[megami];
    if (language === "zh") {
        return `${zhValiation === "G1" ? data.nameZhG1 : data.nameZh}(${zhValiation === "G1" ? data.symbolZhG1 : data.symbolZh})`;
    }
    else if (language === "ko") {
        return `${data.nameKo} (${data.symbolKo})`;
    }
    else if (language === "en") {
        return `${data.nameEn} (${data.symbolEn})`;
    }
    else {
        return `${data.name}(${data.symbol})`;
    }
}
exports.getMegamiDispNameWithSymbol = getMegamiDispNameWithSymbol;
/** メガミの表示名を取得 */
function getMegamiDispName(language, zhValiation, megami) {
    let data = index_js_1.MEGAMI_DATA[megami];
    if (language === "zh") {
        return `${zhValiation === "G1" ? data.nameZhG1 : data.nameZh}`;
    }
    else if (language === "ko") {
        return `${data.nameKo}`;
    }
    else if (language === "en") {
        return `${data.nameEn}`;
    }
    else {
        return `${data.name}`;
    }
}
exports.getMegamiDispName = getMegamiDispName;
// 象徴武器を表示するメガミであるかどうかを判定
function isSymbolShownMegami(megami) {
    return !(megami === "yurina-story-0" ||
        megami === "saine-story-0" ||
        megami === "yurina-story-1" ||
        megami === "saine-story-1" ||
        megami === "chikage-story-2" ||
        megami === "tatsu-story-2" ||
        megami === "yatsuha-story-9" ||
        megami === "yura-story-9" ||
        megami === "honoka-hajimari" ||
        megami === "utsuro-hajimari");
}
exports.isSymbolShownMegami = isSymbolShownMegami;
// メガミのキー一覧取得モード
exports.GetMegamiKeyMode = {
    /** 双掌繚乱時（使用メガミ数を数える時にも使用） */
    MegamiSelecting: "MegamiSelecting",
    /** カードリスト表示時 */
    CardList: "CardList",
};
/** 指定したカードセットに対応するメガミのキー一覧を取得 */
function getMegamiKeys(mode, cardSet) {
    // 物語セットやはじまりの決闘で、使用するメガミが決まっている場合の特殊処理
    if (cardSet === "story-0") {
        return ["yurina-story-0", "saine-story-0"];
    }
    if (cardSet === "story-1") {
        return ["yurina-story-1", "saine-story-1"];
    }
    if (cardSet === "story-2") {
        return ["chikage-story-2", "tatsu-story-2"];
    }
    if (cardSet === "story-9") {
        return ["yatsuha-story-9", "yura-story-9"];
    }
    if (cardSet === "story-15") {
        return ["yatsuha-story-15", "korunu-story-10"];
    }
    if (cardSet === "hajimari") {
        return ["utsuro-hajimari", "honoka-hajimari"];
    }
    let keys = [];
    for (let key in index_js_1.MEGAMI_DATA) {
        let megami = key;
        let megamiData = index_js_1.MEGAMI_DATA[megami];
        // 原初メガミは対応する物語セットでなければスキップ
        if (megami === "korunu-story-10" &&
            cardSet !== "story-10" &&
            cardSet !== "story-10-heroic")
            continue;
        if (megami === "saine-story-12" &&
            cardSet !== "story-12" &&
            cardSet !== "story-12-heroic")
            continue;
        if (megami === "tokoyo-story-13" &&
            cardSet !== "story-13" &&
            cardSet !== "story-13-heroic")
            continue;
        if (megami === "oboro-original" &&
            cardSet !== "oboro-challenge" &&
            cardSet !== "oboro-challenge-heroic")
            continue;
        if (megami === "chikage-original" &&
            cardSet !== "chikage-challenge" &&
            cardSet !== "chikage-challenge-heroic")
            continue;
        if (megami === "raira-original" &&
            cardSet !== "raira-challenge" &&
            cardSet !== "raira-challenge-heroic")
            continue;
        if (megami === "megumi-original" &&
            cardSet !== "megumi-challenge" &&
            cardSet !== "megumi-challenge-heroic")
            continue;
        if (megami === "shinra-original" &&
            cardSet !== "shinra-challenge" &&
            cardSet !== "shinra-challenge-heroic")
            continue;
        if (megami === "korunu-original" &&
            cardSet !== "korunu-challenge" &&
            cardSet !== "korunu-challenge-heroic")
            continue;
        if (megami === "hagane-original" &&
            cardSet !== "hagane-challenge" &&
            cardSet !== "hagane-challenge-heroic")
            continue;
        if (megami === "yukihi-original" &&
            cardSet !== "yukihi-challenge" &&
            cardSet !== "yukihi-challenge-heroic")
            continue;
        // 物語セット・はじまりの決闘用のメガミは対応する物語セットでなければスキップ
        if (megami === "yurina-story-0")
            continue;
        if (megami === "saine-story-0")
            continue;
        if (megami === "yurina-story-1")
            continue;
        if (megami === "saine-story-1")
            continue;
        if (megami === "chikage-story-2")
            continue;
        if (megami === "tatsu-story-2")
            continue;
        if (megami === "yatsuha-story-9")
            continue;
        if (megami === "yura-story-9")
            continue;
        if (megami === "yatsuha-story-15")
            continue;
        if (megami === "utsuro-hajimari")
            continue;
        if (megami === "honoka-hajimari")
            continue;
        // メガミへの挑戦では、挑戦を請ける側のメガミは双掌繚乱で選択不可
        // カードリストへの原初メガミ情報の表示のみ行う
        if (cardSet === "story-10" || cardSet === "story-10-heroic") {
            let isKorunu = megami === "korunu" || megamiData.base === "korunu";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isKorunu)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isKorunu && megami !== "korunu-story-10")
                    continue;
            }
        }
        if (cardSet === "story-12" || cardSet === "story-12-heroic") {
            let isSaine = megami === "saine" || megamiData.base === "saine";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isSaine)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isSaine && megami !== "saine-story-12")
                    continue;
            }
        }
        if (cardSet === "story-13" || cardSet === "story-13-heroic") {
            let isTokoyo = megami === "tokoyo" || megamiData.base === "tokoyo";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isTokoyo)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isTokoyo && megami !== "tokoyo-story-13")
                    continue;
            }
        }
        if (cardSet === "oboro-challenge" || cardSet === "oboro-challenge-heroic") {
            let isOboro = megami === "oboro" || megamiData.base === "oboro";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isOboro)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isOboro && megami !== "oboro-original")
                    continue;
            }
        }
        if (cardSet === "chikage-challenge" ||
            cardSet === "chikage-challenge-heroic") {
            let isChikage = megami === "chikage" || megamiData.base === "chikage";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isChikage)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isChikage && megami !== "chikage-original")
                    continue;
            }
        }
        if (cardSet === "raira-challenge" || cardSet === "raira-challenge-heroic") {
            let isRaira = megami === "raira" || megamiData.base === "raira";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isRaira)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isRaira && megami !== "raira-original")
                    continue;
            }
        }
        if (cardSet === "megumi-challenge" ||
            cardSet === "megumi-challenge-heroic") {
            let isMegumi = megami === "megumi" || megamiData.base === "megumi";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isMegumi)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isMegumi && megami !== "megumi-original")
                    continue;
            }
        }
        if (cardSet === "shinra-challenge" ||
            cardSet === "shinra-challenge-heroic") {
            let isShinra = megami === "shinra" || megamiData.base === "shinra";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isShinra)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isShinra && megami !== "shinra-original")
                    continue;
            }
        }
        if (cardSet === "korunu-challenge" ||
            cardSet === "korunu-challenge-heroic") {
            let isKorunu = megami === "korunu" || megamiData.base === "korunu";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isKorunu)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isKorunu && megami !== "korunu-original")
                    continue;
            }
        }
        if (cardSet === "hagane-challenge" ||
            cardSet === "hagane-challenge-heroic") {
            let isHagane = megami === "hagane" || megamiData.base === "hagane";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isHagane)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isHagane && megami !== "hagane-original")
                    continue;
            }
        }
        if (cardSet === "yukihi-challenge" ||
            cardSet === "yukihi-challenge-heroic") {
            let isYukihi = megami === "yukihi" || megamiData.base === "yukihi";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isYukihi)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isYukihi && megami !== "yukihi-original")
                    continue;
            }
        }
        // そのカードセットに存在するメガミなら追加
        if (megamiData.notExistCardSets === undefined ||
            megamiData.notExistCardSets.indexOf(cardSet) === -1) {
            keys.push(megami);
        }
    }
    return keys;
}
exports.getMegamiKeys = getMegamiKeys;
//# sourceMappingURL=megami.js.map