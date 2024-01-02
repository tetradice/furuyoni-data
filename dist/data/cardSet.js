"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARD_SETS = exports.CARD_SET_DATA = void 0;
const typedObjectKeys_js_1 = require("../_internal/typedObjectKeys.js");
/** カードセット情報 */
exports.CARD_SET_DATA = {
    "na-s2": {
        seasonNumber: 2,
        name: "新幕 シーズン2",
        listName: "新幕 シーズン2 (2018/8/17～ 『第壱拡張：神語起譚』以降)",
        nameZh: "新幕 赛季2",
        listNameZh: "新幕 赛季2 (2018/8/17～ 『一扩：神语起谭』之后)",
        nameKo: "신막 시즌2",
        listNameKo: "신막 시즌2 (2018/8/17～ 『제일 확장：신화기담』이후)",
        nameEn: "Shinmaku Season 2",
        listNameEn: "Shinmaku Season 2 (Expansion 1 release, from 2018/8/17)",
    },
    "na-s3": {
        seasonNumber: 3,
        name: "新幕 シーズン3",
        listName: "新幕 シーズン3 (2018/11/30～ 『第弐拡張：神語転晴』以降)",
        nameZh: "新幕 赛季3",
        listNameZh: "新幕 赛季3 (2018/11/30～ 『二扩：神语转晴』之后)",
        nameKo: "신막 시즌3",
        listNameKo: "신막 시즌3 (2018/11/30～ 『제이 확장：신화전청』이후)",
        nameEn: "Shinmaku Season 3",
        listNameEn: "Shinmaku Season 3 (Expansion 2 release, from 2018/11/30)",
    },
    "na-s4": {
        seasonNumber: 4,
        name: "新幕 シーズン4",
        listName: "新幕 シーズン4 (2019/6/7～ 『第参拡張：零限突破』以降)",
        nameZh: "新幕 赛季4",
        listNameZh: "新幕 赛季4 (2019/6/7～ 『三扩：零限突破』之后)",
        nameKo: "신막 시즌4",
        listNameKo: "신막 시즌4 (2019/6/7～ 『제삼 확장：영식돌파』이후)",
        nameEn: "Shinmaku Season 4",
        listNameEn: "Shinmaku Season 4 (Expansion 3 release, from 2019/6/6)",
    },
    "na-s5": {
        seasonNumber: 5,
        name: "新幕 シーズン5",
        listName: "新幕 シーズン5 (2019/11/23～ 『第四拡張：大洋航路』以降)",
        nameZh: "新幕 赛季5",
        listNameZh: "新幕 赛季5 (2019/11/23～ 『四扩：大洋航路』之后)",
        nameKo: "신막 시즌5",
        listNameKo: "신막 시즌5(2019/11/23 『제4확장：대양항로』이후)",
        nameEn: "Shinmaku Season 5",
        listNameEn: "Shinmaku Season 5 (Expansion 4 release, from 2019/11/23)",
    },
    "na-s6": {
        seasonNumber: 6,
        name: "新幕 シーズン6",
        listName: "新幕 シーズン6 (2020/9/11～ 『第伍拡張：異語邂逅』以降)",
        nameZh: "新幕 赛季6",
        listNameZh: "新幕 赛季6 (2020/9/11～ 『五扩：异语邂逅』之后)",
        nameKo: "신막 시즌6",
        listNameKo: "신막 시즌6 (2020/9/11～ 『제5확장：이어해후』이후)",
        nameEn: "Shinmaku Season 6",
        listNameEn: "Shinmaku Season 6 (Expansion 5 release, from 2020/9/11)",
    },
    "na-s6-2": {
        seasonNumber: 7,
        name: "新幕 シーズン6-2",
        listName: "新幕 シーズン6-2 (2021/2/1～)",
        nameZh: "新幕 赛季6-2",
        listNameZh: "新幕 赛季6-2 (2021/2/1～)",
        nameKo: "신막 시즌6-2",
        listNameKo: "신막 시즌6-2 (2021/2/1～)",
        nameEn: "Shinmaku Season 6-2",
        listNameEn: "Shinmaku Season 6-2 (from 2021/2/1)",
    },
    "na-s7": {
        seasonNumber: 8,
        name: "新幕 シーズン7",
        listName: "新幕 シーズン7 (2021/12/3～ 『第六拡張：失楽飛翔』以降)",
        nameZh: "新幕 赛季7",
        listNameZh: "新幕 赛季7 (2021/12/3～ 『六扩：失乐飞翔』之后)",
        nameKo: "신막 시즌7",
        listNameKo: "신막 시즌7 (2021/12/3～ 『제6확장：실락비상』이후)",
        nameEn: "Shinmaku Season 7",
        listNameEn: "Shinmaku Season 7 (Expansion 6 release, 2021/12/3-)",
    },
    "na-s7-2": {
        seasonNumber: 9,
        name: "新幕 シーズン7-2",
        listName: "新幕 シーズン7-2 (2022/5/13～ 『第七拡張：徒桜団円』以降)",
        nameZh: "新幕 赛季7-2",
        listNameZh: "新幕 赛季7-2（2022/5/15～『7扩：徒樱团圆』之后）",
        nameKo: "신막 시즌7-2",
        listNameKo: "신막 시즌7-2(2022/5/13~『제7확장：도앵단원』이후)",
        nameEn: "Shinmaku Season 7-2",
        listNameEn: "Shinmaku Season 7-2 (Expansion 7 release, from 2022/05/13)",
    },
    "na-s8": {
        seasonNumber: 10,
        name: "新幕 シーズン8",
        listName: "新幕 シーズン8 (2022/11/11～ 『新劇拡張：神座桜縁起 前篇』以降)",
        nameZh: "新幕 赛季8",
        listNameZh: "新幕 赛季8（2022/11/11～『新剧扩展：神座樱缘起 前篇』之后）",
        nameKo: "신막 시즌8",
        listNameKo: "신막 시즌8 (2022/11/11～ 『제8확장：신좌앵연기 전편』이후)",
        nameEn: "Shinmaku Season 8",
        listNameEn: "Shinmaku Season 8 (from 2022/11/11)",
    },
    "na-s8-2": {
        seasonNumber: 11,
        name: "新幕 シーズン8-2",
        listName: "新幕 シーズン8-2 (2023/7/10～)",
        nameZh: "新幕 赛季8-2",
        listNameZh: "新幕 赛季8-2（2023/7/10～）",
        nameKo: "신막 시즌8-2",
        listNameKo: "신막 시즌8-2 (2023/7/10～)",
        nameEn: "Shinmaku Season 8-2",
        listNameEn: "Shinmaku Season 8-2 (from 2023/7/10)",
    },
    "na-s9": {
        seasonNumber: 12,
        name: "新幕 シーズン9",
        listName: "新幕 シーズン9 (2023/12/12～ 『新劇拡張：神座桜縁起 後篇』以降)",
        nameZh: "新幕 赛季9",
        listNameZh: "新幕 赛季9（2023/12/12～『新剧扩展：神座樱缘起 後篇』之后）",
        nameKo: "신막 시즌9",
        listNameKo: "신막 시즌9 (2023/12/12～ 『제8확장：신좌앵연기 후편』이후)",
        nameEn: "Shinmaku Season 9",
        listNameEn: "",
    },
    "story-0": {
        seasonNumber: null,
        name: "物語0：神語りのはじまり",
        listName: "物語0：神語りのはじまり",
        nameZh: "物语0 神话的开端",
        listNameZh: "物语0 神话的开端",
        nameKo: "이야기0: 신화의 시작",
        listNameKo: "이야기0: 신화의 시작",
        nameEn: "Story 0: The Legend Begins",
        listNameEn: "Story 0: The Legend Begins",
    },
    "story-1": {
        seasonNumber: null,
        name: "物語1：天音揺波 対 氷雨細音",
        listName: "物語1：天音揺波 対 氷雨細音",
        nameZh: "物语1 天音摇波 对 冰雨细音",
        listNameZh: "物语1 天音摇波 对 冰雨细音",
        nameKo: "이야기1: 아마네 유리나 대 히사메 사이네",
        listNameKo: "이야기1: 아마네 유리나 대 히사메 사이네",
        nameEn: "Story 1: Yurina Amane vs. Saine Hisame",
        listNameEn: "Story 1: Yurina Amane vs. Saine Hisame",
    },
    "story-2": {
        seasonNumber: null,
        name: "物語2：龍ノ宮一志暗殺計画",
        listName: "物語2：龍ノ宮一志暗殺計画",
        nameZh: "物语2 暗杀龙之宫一志计划",
        listNameZh: "物语2 暗杀龙之宫一志计划",
        nameKo: "이야기2: 타츠노미야 잇시 암살 계획",
        listNameKo: "이야기2: 타츠노미야 잇시 암살 계획",
        nameEn: "Story 2: The Assassination of Isshi Tatsunomiya",
        listNameEn: "Story 2: The Assassination of Isshi Tatsunomiya",
    },
    "story-9": {
        seasonNumber: null,
        name: "物語9：はじめての代理戦争",
        listName: "物語9：はじめての代理戦争",
        nameZh: "物语9 最初的代理战争",
        listNameZh: "物语9 最初的代理战争",
        nameKo: "이야기9: 처음하는 대리 전쟁",
        listNameKo: "이야기9: 처음하는 대리 전쟁",
        nameEn: "Story 9: The First Proxy War",
        listNameEn: "Story 9: The First Proxy War",
    },
    "story-10": {
        seasonNumber: null,
        name: "物語10：コルヌに挑戦！",
        listName: "物語10：コルヌに挑戦！",
        nameZh: "物语10 挑战凝努！",
        listNameZh: "物语10 挑战凝努！",
        nameKo: "이야기10: 코르누에게 도전!",
        listNameKo: "이야기10: 코르누에게 도전!",
        nameEn: "Story 10: Challenge Korunu!",
        listNameEn: "Story 10: Challenge Korunu!",
    },
    "story-10-heroic": {
        seasonNumber: null,
        name: "物語10：コルヌに挑戦！（英雄戦）",
        listName: "物語10：コルヌに挑戦！（英雄戦）",
        nameZh: "物语10 挑战凝努！（英雄战）",
        listNameZh: "物语10 挑战凝努！（英雄战）",
        nameKo: "이야기10: 코르누에게 도전! (영웅전)",
        listNameKo: "이야기10: 코르누에게 도전! (영웅전)",
        nameEn: "Story 10: Challenge Korunu! (Heroic)",
        listNameEn: "Story 10: Challenge Korunu! (Heroic)",
    },
    "story-12": {
        seasonNumber: null,
        name: "物語12：徒神サイネに挑戦！",
        listName: "物語12：徒神サイネに挑戦！",
        nameZh: "物语12 挑战徒神细音！",
        listNameZh: "物语12 挑战徒神细音！",
        nameKo: "이야기12: 도신 사이네에게 도전!",
        listNameKo: "이야기12: 도신 사이네에게 도전!",
        nameEn: "Story 12: Challenge Adagami Saine!",
        listNameEn: "Story 12: Challenge Adagami Saine!",
    },
    "story-12-heroic": {
        seasonNumber: null,
        name: "物語12：徒神サイネに挑戦！（英雄戦）",
        listName: "物語12：徒神サイネに挑戦！（英雄戦）",
        nameZh: "物语12 挑战徒神细音！（英雄战）",
        listNameZh: "物语12 挑战徒神细音！（英雄战）",
        nameKo: "이야기12: 도신 사이네에게 도전! (영웅전)",
        listNameKo: "이야기12: 도신 사이네에게 도전! (영웅전)",
        nameEn: "Story 12: Challenge Adagami Saine! (Heroic)",
        listNameEn: "Story 12: Challenge Adagami Saine! (Heroic)",
    },
    "story-13": {
        seasonNumber: null,
        name: "物語13：新幕トコヨに挑戦！",
        listName: "物語13：新幕トコヨに挑戦！",
        nameZh: "物语13 挑战新幕常世！",
        listNameZh: "物语13 挑战新幕常世！",
        nameKo: "이야기13: 신막 토코요에게 도전!",
        listNameKo: "이야기13: 신막 토코요에게 도전!",
        nameEn: "Story 13: Challenge Tokoyo!",
        listNameEn: "Story 13: Challenge Tokoyo!",
    },
    "story-13-heroic": {
        seasonNumber: null,
        name: "物語13：新幕トコヨに挑戦！（英雄戦）",
        listName: "物語13：新幕トコヨに挑戦！（英雄戦）",
        nameZh: "物语13 挑战新幕常世！（英雄战）",
        listNameZh: "物语13 挑战新幕常世！（英雄战）",
        nameKo: "이야기13: 신막 토코요에게 도전! (영웅전)",
        listNameKo: "이야기13: 신막 토코요에게 도전! (영웅전)",
        nameEn: "Story 13: Challenge Tokoyo! (Heroic)",
        listNameEn: "Story 13: Challenge Tokoyo! (Heroic)",
    },
    "story-15": {
        seasonNumber: null,
        name: "物語15：彼女の挑戦",
        listName: "物語15：彼女の挑戦",
        nameZh: "物语15 她的挑战",
        listNameZh: "物语15 她的挑战",
        nameKo: "이야기15: 그녀의 도전",
        listNameKo: "이야기15: 그녀의 도전",
        nameEn: "Story 15: The Girl's Challenge ",
        listNameEn: "Story 15: The Girl's Challenge ",
    },
    hajimari: {
        seasonNumber: null,
        name: "はじまりの決闘",
        listName: "はじまりの決闘（初心者向け）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "oboro-challenge": {
        seasonNumber: null,
        name: "オボロへの挑戦",
        listName: "メガミへの挑戦　第1回：オボロへの挑戦",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "oboro-challenge-heroic": {
        seasonNumber: null,
        name: "オボロへの挑戦（英雄戦）",
        listName: "メガミへの挑戦　第1回：オボロへの挑戦（英雄戦）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "chikage-challenge": {
        seasonNumber: null,
        name: "チカゲへの挑戦",
        listName: "メガミへの挑戦　第2回：チカゲへの挑戦",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "chikage-challenge-heroic": {
        seasonNumber: null,
        name: "チカゲへの挑戦（英雄戦）",
        listName: "メガミへの挑戦　第2回：チカゲへの挑戦（英雄戦）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "raira-challenge": {
        seasonNumber: null,
        name: "ライラへの挑戦",
        listName: "メガミへの挑戦　第3回：ライラへの挑戦",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "raira-challenge-heroic": {
        seasonNumber: null,
        name: "ライラへの挑戦（英雄戦）",
        listName: "メガミへの挑戦　第3回：ライラへの挑戦（英雄戦）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "megumi-challenge": {
        seasonNumber: null,
        name: "メグミへの挑戦",
        listName: "メガミへの挑戦　第4回：メグミへの挑戦",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "megumi-challenge-heroic": {
        seasonNumber: null,
        name: "メグミへの挑戦（英雄戦）",
        listName: "メガミへの挑戦　第4回：メグミへの挑戦（英雄戦）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "shinra-challenge": {
        seasonNumber: null,
        name: "シンラへの挑戦",
        listName: "メガミへの挑戦　第5回：シンラへの挑戦",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "shinra-challenge-heroic": {
        seasonNumber: null,
        name: "シンラへの挑戦（英雄戦）",
        listName: "メガミへの挑戦　第5回：シンラへの挑戦（英雄戦）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "korunu-challenge": {
        seasonNumber: null,
        name: "コルヌへの挑戦",
        listName: "メガミへの挑戦　第7回：コルヌへの挑戦",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "korunu-challenge-heroic": {
        seasonNumber: null,
        name: "コルヌへの挑戦（英雄戦）",
        listName: "メガミへの挑戦　第7回：コルヌへの挑戦（英雄戦）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "hagane-challenge": {
        seasonNumber: null,
        name: "ハガネへの挑戦",
        listName: "メガミへの挑戦　第8回：ハガネへの挑戦",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "hagane-challenge-heroic": {
        seasonNumber: null,
        name: "ハガネへの挑戦（英雄戦）",
        listName: "メガミへの挑戦　第8回：ハガネへの挑戦（英雄戦）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "yukihi-challenge": {
        seasonNumber: null,
        name: "ユキヒへの挑戦",
        listName: "メガミへの挑戦　第9回：ユキヒへの挑戦",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
    "yukihi-challenge-heroic": {
        seasonNumber: null,
        name: "ユキヒへの挑戦（英雄戦）",
        listName: "メガミへの挑戦　第9回：ユキヒへの挑戦（英雄戦）",
        nameZh: "",
        listNameZh: "",
        nameKo: "",
        listNameKo: "",
        nameEn: "",
        listNameEn: "",
    },
};
/** 全カードセット一覧 */
exports.CARD_SETS = (0, typedObjectKeys_js_1.typedObjectKeys)(exports.CARD_SET_DATA);
//# sourceMappingURL=cardSet.js.map