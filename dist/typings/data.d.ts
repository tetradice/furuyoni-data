import { Megami, TCardId } from "../data/index.js";
/** カードセット */
export type CardSet = StandardCardSet | StoryCardSet;
/** 通常のカードセット（物語セットを含まない） */
export type StandardCardSet = "na-s2" | "na-s3" | "na-s4" | "na-s5" | "na-s6" | "na-s6-2" | "na-s7" | "na-s7-2" | "na-s8" | "na-s8-2" | "na-s9";
/** 物語カードセット（はじまりの決闘、メガミへの挑戦も含む） */
export type StoryCardSet = "story-0" | "story-1" | "story-2" | "story-9" | "story-10" | "story-10-heroic" | "story-12" | "story-12-heroic" | "story-13" | "story-13-heroic" | "story-15" | "hajimari" | "oboro-challenge" | "oboro-challenge-heroic" | "chikage-challenge" | "chikage-challenge-heroic" | "raira-challenge" | "raira-challenge-heroic" | "megumi-challenge" | "megumi-challenge-heroic" | "shinra-challenge" | "shinra-challenge-heroic" | "korunu-challenge" | "korunu-challenge-heroic" | "hagane-challenge" | "hagane-challenge-heroic" | "yukihi-challenge" | "yukihi-challenge-heroic";
/** カードタイプ */
export type CardType = "attack" | "action" | "enhance" | "variable";
/** カードのサブタイプ */
export type CardSubType = "reaction" | "fullpower";
/** メガミ情報 */
export interface MegamiDataItem {
    name: string;
    nameEn: string;
    nameZh: string;
    nameZhG1: string;
    nameKo: string;
    symbol: string;
    symbolEn: string;
    symbolZh: string;
    symbolZhG1: string;
    symbolKo: string;
    tarotNo: string;
    base?: Megami;
    anotherID?: string;
    notExistCardSets?: CardSet[];
}
export interface CardDataItem {
    megami: Megami;
    baseType: "normal" | "special" | "poison" | "transform" | "troop" | "storm" | "plan" | "diving";
    name: string;
    nameZh: string;
    nameZhG1: string;
    nameKo: string;
    nameEn: string;
    anotherID?: string;
    replace?: TCardId | "";
    ruby: string;
    rubyEn: string;
    rubyZh?: string;
    type?: CardType;
    subType?: CardSubType;
    range?: string;
    rangeOpened?: string;
    damage?: string;
    damageOpened?: string;
    capacity?: string;
    /** 生育 */
    growth?: number;
    /** 偽証 */
    lie?: boolean;
    /** 投資券 */
    investable?: boolean;
    text: string;
    textAdditional?: string;
    textZh: string;
    textZhAdditional?: string;
    textZhG1: string;
    textZhG1Additional?: string;
    textKo: string;
    textKoAdditional?: string;
    textEn: string;
    textEnAdditional?: string;
    textOpened?: string;
    textOpenedZh?: string;
    textOpenedZhG1?: string;
    textOpenedKo?: string;
    textOpenedEn?: string;
    cost?: string;
    /** 他のカードを封印可能 */
    sealable?: boolean;
    /** 取り除くことが可能 */
    removable?: boolean;
    /** 原初性 */
    original?: boolean;
    /** 追加札かどうか(デッキ構築の時に選択できず、ゲーム開始時に追加札領域に置かれる) */
    extra?: boolean;
    /** 追加札の追加元 */
    extraFrom?: TCardId;
    /** 交換先 */
    exchangableTo?: TCardId;
    /** ソートキー (自動で設定される) */
    sortKey?: string;
}
//# sourceMappingURL=data.d.ts.map