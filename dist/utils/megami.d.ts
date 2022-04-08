import { Megami } from "../data";
import { CardSet } from "../typings";
import { Language, ZhValiation } from "../typings/language";
/** メガミの表示名を取得（象徴武器表示あり） */
export declare function getMegamiDispNameWithSymbol(language: Language, zhValiation: ZhValiation, megami: Megami): string;
/** メガミの表示名を取得 */
export declare function getMegamiDispName(language: Language, zhValiation: ZhValiation, megami: Megami): string;
export declare function isSymbolShownMegami(megami: Megami): boolean;
/** 追加札領域を表示するメガミかどうかを判定 */
export declare function isMegamiExtraCardAreaVisible(megami: Megami): boolean;
/** 毒袋領域を表示するメガミかどうかを判定 */
export declare function isMegamiPoisonBagAreaVisible(megami: Megami): boolean;
/** 風雷ゲージを持つメガミかどうかを判定 */
export declare function isMegamiHasWindThunderGuage(megami: Megami): boolean;
/** 禁忌ゲージを持つメガミかどうかを判定 */
export declare function isMegamiHasTabooGuage(megami: Megami): boolean;
/** 偽証可能なメガミかどうかを判定 */
export declare function isMegamiCanLie(megami: Megami): boolean;
export declare const GetMegamiKeyMode: {
    /** 双掌繚乱時（使用メガミ数を数える時にも使用） */
    readonly MegamiSelecting: "MegamiSelecting";
    /** カードリスト表示時 */
    readonly CardList: "CardList";
};
export declare type TGetMegamiKeyMode = typeof GetMegamiKeyMode[keyof typeof GetMegamiKeyMode];
/** 指定したカードセットに対応するメガミのキー一覧を取得 */
export declare function getMegamiKeys(mode: TGetMegamiKeyMode, cardSet: CardSet): Megami[];
/** カードリストに初期表示するメガミを取得 */
export declare function getCardListDefaultMegami(cardSet: CardSet): Megami;
//# sourceMappingURL=megami.d.ts.map