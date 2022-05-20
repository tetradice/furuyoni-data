import { CardDataItem, CardSet } from "../typings/data.js";
import { TCardId } from "./cardId.js";
export declare const CARD_DATA: {
    [key in CardSet]: {
        [key: string]: CardDataItem;
    };
};
export declare const S2_BASE_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const S3_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem | null;
}>;
export declare const S4_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const S4_PRE_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const S5_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const S6_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const S6_2_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const S7_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const S7_2_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const STORY_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const CARD_SORT_KEY_MAP: {
    [cardId: string]: string | undefined;
};
export declare const ALL_CARD_ID_LIST: {
    [cardSet in CardSet]: TCardId[];
};
export declare const ALL_CARD_LIST: {
    [cardSet in CardSet]: CardDataItem[];
};
//# sourceMappingURL=card.d.ts.map