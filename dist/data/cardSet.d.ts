import { CardSet } from "../typings/data.js";
/** カードセット情報を表すインターフェース */
export interface CardSetDataItem {
    /** シーズン比較用の番号。シーズン8-2対応時に追加されたため、これがnullである＝シーズン8以前のカードセットである */
    seasonNumber: number | null;
    name: string;
    listName: string;
    nameZh: string;
    listNameZh: string;
    nameKo: string;
    listNameKo: string;
    nameEn: string;
    listNameEn: string;
}
/** カードセット情報 */
export declare const CARD_SET_DATA: {
    readonly "na-s2": {
        readonly seasonNumber: 2;
        readonly name: "新幕 シーズン2";
        readonly listName: "新幕 シーズン2 (2018/8/17～ 『第壱拡張：神語起譚』以降)";
        readonly nameZh: "新幕 赛季2";
        readonly listNameZh: "新幕 赛季2 (2018/8/17～ 『一扩：神语起谭』之后)";
        readonly nameKo: "신막 시즌2";
        readonly listNameKo: "신막 시즌2 (2018/8/17～ 『제일 확장：신화기담』이후)";
        readonly nameEn: "Shinmaku Season 2";
        readonly listNameEn: "Shinmaku Season 2 (Expansion 1 release, from 2018/8/17)";
    };
    readonly "na-s3": {
        readonly seasonNumber: 3;
        readonly name: "新幕 シーズン3";
        readonly listName: "新幕 シーズン3 (2018/11/30～ 『第弐拡張：神語転晴』以降)";
        readonly nameZh: "新幕 赛季3";
        readonly listNameZh: "新幕 赛季3 (2018/11/30～ 『二扩：神语转晴』之后)";
        readonly nameKo: "신막 시즌3";
        readonly listNameKo: "신막 시즌3 (2018/11/30～ 『제이 확장：신화전청』이후)";
        readonly nameEn: "Shinmaku Season 3";
        readonly listNameEn: "Shinmaku Season 3 (Expansion 2 release, from 2018/11/30)";
    };
    readonly "na-s4": {
        readonly seasonNumber: 4;
        readonly name: "新幕 シーズン4";
        readonly listName: "新幕 シーズン4 (2019/6/7～ 『第参拡張：零限突破』以降)";
        readonly nameZh: "新幕 赛季4";
        readonly listNameZh: "新幕 赛季4 (2019/6/7～ 『三扩：零限突破』之后)";
        readonly nameKo: "신막 시즌4";
        readonly listNameKo: "신막 시즌4 (2019/6/7～ 『제삼 확장：영식돌파』이후)";
        readonly nameEn: "Shinmaku Season 4";
        readonly listNameEn: "Shinmaku Season 4 (Expansion 3 release, from 2019/6/6)";
    };
    readonly "na-s5": {
        readonly seasonNumber: 5;
        readonly name: "新幕 シーズン5";
        readonly listName: "新幕 シーズン5 (2019/11/23～ 『第四拡張：大洋航路』以降)";
        readonly nameZh: "新幕 赛季5";
        readonly listNameZh: "新幕 赛季5 (2019/11/23～ 『四扩：大洋航路』之后)";
        readonly nameKo: "신막 시즌5";
        readonly listNameKo: "신막 시즌5(2019/11/23 『제4확장：대양항로』이후)";
        readonly nameEn: "Shinmaku Season 5";
        readonly listNameEn: "Shinmaku Season 5 (Expansion 4 release, from 2019/11/23)";
    };
    readonly "na-s6": {
        readonly seasonNumber: 6;
        readonly name: "新幕 シーズン6";
        readonly listName: "新幕 シーズン6 (2020/9/11～ 『第伍拡張：異語邂逅』以降)";
        readonly nameZh: "新幕 赛季6";
        readonly listNameZh: "新幕 赛季6 (2020/9/11～ 『五扩：异语邂逅』之后)";
        readonly nameKo: "신막 시즌6";
        readonly listNameKo: "신막 시즌6 (2020/9/11～ 『제5확장：이어해후』이후)";
        readonly nameEn: "Shinmaku Season 6";
        readonly listNameEn: "Shinmaku Season 6 (Expansion 5 release, from 2020/9/11)";
    };
    readonly "na-s6-2": {
        readonly seasonNumber: 7;
        readonly name: "新幕 シーズン6-2";
        readonly listName: "新幕 シーズン6-2 (2021/2/1～)";
        readonly nameZh: "新幕 赛季6-2";
        readonly listNameZh: "新幕 赛季6-2 (2021/2/1～)";
        readonly nameKo: "신막 시즌6-2";
        readonly listNameKo: "신막 시즌6-2 (2021/2/1～)";
        readonly nameEn: "Shinmaku Season 6-2";
        readonly listNameEn: "Shinmaku Season 6-2 (from 2021/2/1)";
    };
    readonly "na-s7": {
        readonly seasonNumber: 8;
        readonly name: "新幕 シーズン7";
        readonly listName: "新幕 シーズン7 (2021/12/3～ 『第六拡張：失楽飛翔』以降)";
        readonly nameZh: "新幕 赛季7";
        readonly listNameZh: "新幕 赛季7 (2021/12/3～ 『六扩：失乐飞翔』之后)";
        readonly nameKo: "신막 시즌7";
        readonly listNameKo: "신막 시즌7 (2021/12/3～ 『제6확장：실락비상』이후)";
        readonly nameEn: "Shinmaku Season 7";
        readonly listNameEn: "Shinmaku Season 7 (Expansion 6 release, 2021/12/3-)";
    };
    readonly "na-s7-2": {
        readonly seasonNumber: 9;
        readonly name: "新幕 シーズン7-2";
        readonly listName: "新幕 シーズン7-2 (2022/5/13～ 『第七拡張：徒桜団円』以降)";
        readonly nameZh: "新幕 赛季7-2";
        readonly listNameZh: "新幕 赛季7-2（2022/5/15～『7扩：徒樱团圆』之后）";
        readonly nameKo: "신막 시즌7-2";
        readonly listNameKo: "신막 시즌7-2(2022/5/13~『제7확장：도앵단원』이후)";
        readonly nameEn: "Shinmaku Season 7-2";
        readonly listNameEn: "Shinmaku Season 7-2 (Expansion 7 release, from 2022/05/13)";
    };
    readonly "na-s8": {
        readonly seasonNumber: 10;
        readonly name: "新幕 シーズン8";
        readonly listName: "新幕 シーズン8 (2022/11/11～ 『新劇拡張：神座桜縁起 前篇』以降)";
        readonly nameZh: "新幕 赛季8";
        readonly listNameZh: "新幕 赛季8（2022/11/11～『新剧扩展：神座樱缘起 前篇』之后）";
        readonly nameKo: "신막 시즌8";
        readonly listNameKo: "신막 시즌8 (2022/11/11～ 『제8확장：신좌앵연기 전편』이후)";
        readonly nameEn: "Shinmaku Season 8";
        readonly listNameEn: "";
    };
    readonly "na-s8-2": {
        readonly seasonNumber: 11;
        readonly name: "新幕 シーズン8-2";
        readonly listName: "新幕 シーズン8-2 (2023/7/10～)";
        readonly nameZh: "新幕 赛季8-2";
        readonly listNameZh: "新幕 赛季8-2（2023/7/10～）";
        readonly nameKo: "신막 시즌8-2";
        readonly listNameKo: "신막 시즌8-2 (2023/7/10～)";
        readonly nameEn: "Shinmaku Season 8-2";
        readonly listNameEn: "Shinmaku Season 8-2 (from 2023/7/10)";
    };
    readonly "story-0": {
        readonly seasonNumber: null;
        readonly name: "物語0：神語りのはじまり";
        readonly listName: "物語0：神語りのはじまり";
        readonly nameZh: "物语0 神话的开端";
        readonly listNameZh: "物语0 神话的开端";
        readonly nameKo: "이야기0: 신화의 시작";
        readonly listNameKo: "이야기0: 신화의 시작";
        readonly nameEn: "Story 0: The Legend Begins";
        readonly listNameEn: "Story 0: The Legend Begins";
    };
    readonly "story-1": {
        readonly seasonNumber: null;
        readonly name: "物語1：天音揺波 対 氷雨細音";
        readonly listName: "物語1：天音揺波 対 氷雨細音";
        readonly nameZh: "物语1 天音摇波 对 冰雨细音";
        readonly listNameZh: "物语1 天音摇波 对 冰雨细音";
        readonly nameKo: "이야기1: 아마네 유리나 대 히사메 사이네";
        readonly listNameKo: "이야기1: 아마네 유리나 대 히사메 사이네";
        readonly nameEn: "Story 1: Yurina Amane vs. Saine Hisame";
        readonly listNameEn: "Story 1: Yurina Amane vs. Saine Hisame";
    };
    readonly "story-2": {
        readonly seasonNumber: null;
        readonly name: "物語2：龍ノ宮一志暗殺計画";
        readonly listName: "物語2：龍ノ宮一志暗殺計画";
        readonly nameZh: "物语2 暗杀龙之宫一志计划";
        readonly listNameZh: "物语2 暗杀龙之宫一志计划";
        readonly nameKo: "이야기2: 타츠노미야 잇시 암살 계획";
        readonly listNameKo: "이야기2: 타츠노미야 잇시 암살 계획";
        readonly nameEn: "Story 2: The Assassination of Isshi Tatsunomiya";
        readonly listNameEn: "Story 2: The Assassination of Isshi Tatsunomiya";
    };
    readonly "story-9": {
        readonly seasonNumber: null;
        readonly name: "物語9：はじめての代理戦争";
        readonly listName: "物語9：はじめての代理戦争";
        readonly nameZh: "物语9 最初的代理战争";
        readonly listNameZh: "物语9 最初的代理战争";
        readonly nameKo: "이야기9: 처음하는 대리 전쟁";
        readonly listNameKo: "이야기9: 처음하는 대리 전쟁";
        readonly nameEn: "Story 9: The First Proxy War";
        readonly listNameEn: "Story 9: The First Proxy War";
    };
    readonly "story-10": {
        readonly seasonNumber: null;
        readonly name: "物語10：コルヌに挑戦！";
        readonly listName: "物語10：コルヌに挑戦！";
        readonly nameZh: "物语10 挑战凝努！";
        readonly listNameZh: "物语10 挑战凝努！";
        readonly nameKo: "이야기10: 코르누에게 도전!";
        readonly listNameKo: "이야기10: 코르누에게 도전!";
        readonly nameEn: "Story 10: Challenge Korunu!";
        readonly listNameEn: "Story 10: Challenge Korunu!";
    };
    readonly "story-10-heroic": {
        readonly seasonNumber: null;
        readonly name: "物語10：コルヌに挑戦！（英雄戦）";
        readonly listName: "物語10：コルヌに挑戦！（英雄戦）";
        readonly nameZh: "物语10 挑战凝努！（英雄战）";
        readonly listNameZh: "物语10 挑战凝努！（英雄战）";
        readonly nameKo: "이야기10: 코르누에게 도전! (영웅전)";
        readonly listNameKo: "이야기10: 코르누에게 도전! (영웅전)";
        readonly nameEn: "Story 10: Challenge Korunu! (Heroic)";
        readonly listNameEn: "Story 10: Challenge Korunu! (Heroic)";
    };
    readonly "story-12": {
        readonly seasonNumber: null;
        readonly name: "物語12：徒神サイネに挑戦！";
        readonly listName: "物語12：徒神サイネに挑戦！";
        readonly nameZh: "物语12 挑战徒神细音！";
        readonly listNameZh: "物语12 挑战徒神细音！";
        readonly nameKo: "이야기12: 도신 사이네에게 도전!";
        readonly listNameKo: "이야기12: 도신 사이네에게 도전!";
        readonly nameEn: "Story 12: Challenge Adagami Saine!";
        readonly listNameEn: "Story 12: Challenge Adagami Saine!";
    };
    readonly "story-12-heroic": {
        readonly seasonNumber: null;
        readonly name: "物語12：徒神サイネに挑戦！（英雄戦）";
        readonly listName: "物語12：徒神サイネに挑戦！（英雄戦）";
        readonly nameZh: "物语12 挑战徒神细音！（英雄战）";
        readonly listNameZh: "物语12 挑战徒神细音！（英雄战）";
        readonly nameKo: "이야기12: 도신 사이네에게 도전! (영웅전)";
        readonly listNameKo: "이야기12: 도신 사이네에게 도전! (영웅전)";
        readonly nameEn: "Story 12: Challenge Adagami Saine! (Heroic)";
        readonly listNameEn: "Story 12: Challenge Adagami Saine! (Heroic)";
    };
    readonly "story-13": {
        readonly seasonNumber: null;
        readonly name: "物語13：新幕トコヨに挑戦！";
        readonly listName: "物語13：新幕トコヨに挑戦！";
        readonly nameZh: "物语13 挑战新幕常世！";
        readonly listNameZh: "物语13 挑战新幕常世！";
        readonly nameKo: "이야기13: 신막 토코요에게 도전!";
        readonly listNameKo: "이야기13: 신막 토코요에게 도전!";
        readonly nameEn: "Story 13: Challenge Tokoyo!";
        readonly listNameEn: "Story 13: Challenge Tokoyo!";
    };
    readonly "story-13-heroic": {
        readonly seasonNumber: null;
        readonly name: "物語13：新幕トコヨに挑戦！（英雄戦）";
        readonly listName: "物語13：新幕トコヨに挑戦！（英雄戦）";
        readonly nameZh: "物语13 挑战新幕常世！（英雄战）";
        readonly listNameZh: "物语13 挑战新幕常世！（英雄战）";
        readonly nameKo: "이야기13: 신막 토코요에게 도전! (영웅전)";
        readonly listNameKo: "이야기13: 신막 토코요에게 도전! (영웅전)";
        readonly nameEn: "Story 13: Challenge Tokoyo! (Heroic)";
        readonly listNameEn: "Story 13: Challenge Tokoyo! (Heroic)";
    };
    readonly "story-15": {
        readonly seasonNumber: null;
        readonly name: "物語15：彼女の挑戦";
        readonly listName: "物語15：彼女の挑戦";
        readonly nameZh: "物语15 她的挑战";
        readonly listNameZh: "物语15 她的挑战";
        readonly nameKo: "이야기15: 그녀의 도전";
        readonly listNameKo: "이야기15: 그녀의 도전";
        readonly nameEn: "Story 15: The Girl's Challenge ";
        readonly listNameEn: "Story 15: The Girl's Challenge ";
    };
    readonly hajimari: {
        readonly seasonNumber: null;
        readonly name: "はじまりの決闘";
        readonly listName: "はじまりの決闘（初心者向け）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "oboro-challenge": {
        readonly seasonNumber: null;
        readonly name: "オボロへの挑戦";
        readonly listName: "メガミへの挑戦　第1回：オボロへの挑戦";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "oboro-challenge-heroic": {
        readonly seasonNumber: null;
        readonly name: "オボロへの挑戦（英雄戦）";
        readonly listName: "メガミへの挑戦　第1回：オボロへの挑戦（英雄戦）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "chikage-challenge": {
        readonly seasonNumber: null;
        readonly name: "チカゲへの挑戦";
        readonly listName: "メガミへの挑戦　第2回：チカゲへの挑戦";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "chikage-challenge-heroic": {
        readonly seasonNumber: null;
        readonly name: "チカゲへの挑戦（英雄戦）";
        readonly listName: "メガミへの挑戦　第2回：チカゲへの挑戦（英雄戦）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "raira-challenge": {
        readonly seasonNumber: null;
        readonly name: "ライラへの挑戦";
        readonly listName: "メガミへの挑戦　第3回：ライラへの挑戦";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "raira-challenge-heroic": {
        readonly seasonNumber: null;
        readonly name: "ライラへの挑戦（英雄戦）";
        readonly listName: "メガミへの挑戦　第3回：ライラへの挑戦（英雄戦）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "megumi-challenge": {
        readonly seasonNumber: null;
        readonly name: "メグミへの挑戦";
        readonly listName: "メガミへの挑戦　第4回：メグミへの挑戦";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "megumi-challenge-heroic": {
        readonly seasonNumber: null;
        readonly name: "メグミへの挑戦（英雄戦）";
        readonly listName: "メガミへの挑戦　第4回：メグミへの挑戦（英雄戦）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "shinra-challenge": {
        readonly seasonNumber: null;
        readonly name: "シンラへの挑戦";
        readonly listName: "メガミへの挑戦　第5回：シンラへの挑戦";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "shinra-challenge-heroic": {
        readonly seasonNumber: null;
        readonly name: "シンラへの挑戦（英雄戦）";
        readonly listName: "メガミへの挑戦　第5回：シンラへの挑戦（英雄戦）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "korunu-challenge": {
        readonly seasonNumber: null;
        readonly name: "コルヌへの挑戦";
        readonly listName: "メガミへの挑戦　第7回：コルヌへの挑戦";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "korunu-challenge-heroic": {
        readonly seasonNumber: null;
        readonly name: "コルヌへの挑戦（英雄戦）";
        readonly listName: "メガミへの挑戦　第7回：コルヌへの挑戦（英雄戦）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "hagane-challenge": {
        readonly seasonNumber: null;
        readonly name: "ハガネへの挑戦";
        readonly listName: "メガミへの挑戦　第8回：ハガネへの挑戦";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "hagane-challenge-heroic": {
        readonly seasonNumber: null;
        readonly name: "ハガネへの挑戦（英雄戦）";
        readonly listName: "メガミへの挑戦　第8回：ハガネへの挑戦（英雄戦）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "yukihi-challenge": {
        readonly seasonNumber: null;
        readonly name: "ユキヒへの挑戦";
        readonly listName: "メガミへの挑戦　第9回：ユキヒへの挑戦";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
    readonly "yukihi-challenge-heroic": {
        readonly seasonNumber: null;
        readonly name: "ユキヒへの挑戦（英雄戦）";
        readonly listName: "メガミへの挑戦　第9回：ユキヒへの挑戦（英雄戦）";
        readonly nameZh: "";
        readonly listNameZh: "";
        readonly nameKo: "";
        readonly listNameKo: "";
        readonly nameEn: "";
        readonly listNameEn: "";
    };
};
/** 全カードセット一覧 */
export declare const CARD_SETS: readonly CardSet[];
//# sourceMappingURL=cardSet.d.ts.map