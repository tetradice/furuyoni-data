import { Megami, TCardId } from "../data/index.js";

/** カードセット */
export type CardSet = "saien-s1";

/** 再演では通常カードセットが1種類だけ存在する */
export type StandardCardSet = CardSet;

/** 再演には物語カードセットが存在しない */
export type StoryCardSet = never;

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
}

// カード情報
export interface CardDataItem {
  megami: Megami;
  baseType:
    | "normal"
    | "special"
    | "poison"
    | "transform"
    | "troop"
    | "storm"
    | "plan"
    | "diving"
    | "mainParts"
    | "customParts"
    | "fate"
    | "virtualTree";
  name: string;
  nameZh: string;
  nameZhG1: string;
  nameKo: string;
  nameEn: string;
  anotherID?: string;
  replace?: TCardId;
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
  /** 旧処理との互換用。再演カードでは使用しない */
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
