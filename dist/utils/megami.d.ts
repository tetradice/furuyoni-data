import { Megami } from "../data";
import { CardSet } from "../typings";
import { Language, ZhValiation } from "../typings/language";
/** メガミの表示名を取得（象徴武器表示あり） */
export declare function getMegamiDispNameWithSymbol(language: Language, zhValiation: ZhValiation, megami: Megami): string;
/** メガミの表示名を取得 */
export declare function getMegamiDispName(language: Language, zhValiation: ZhValiation, megami: Megami): string;
export declare function isSymbolShownMegami(megami: Megami): boolean;
export declare const GetMegamiKeyMode: {
    /** 双掌繚乱時（使用メガミ数を数える時にも使用） */
    readonly MegamiSelecting: "MegamiSelecting";
    /** カードリスト表示時 */
    readonly CardList: "CardList";
};
export declare type TGetMegamiKeyMode = typeof GetMegamiKeyMode[keyof typeof GetMegamiKeyMode];
/** 指定したカードセットに対応するメガミのキー一覧を取得 */
export declare function getMegamiKeys(mode: TGetMegamiKeyMode, cardSet: CardSet): Megami[];
//# sourceMappingURL=megami.d.ts.map