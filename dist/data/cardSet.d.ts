import { CardSet } from "../typings/data.js";
/** カードセット情報を表すインターフェース */
export interface CardSetDataItem {
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
    readonly [key in CardSet]: CardSetDataItem;
};
/** 全カードセット一覧 */
export declare const CARD_SETS: readonly CardSet[];
//# sourceMappingURL=cardSet.d.ts.map