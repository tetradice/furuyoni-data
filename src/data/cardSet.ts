import { CardSet } from "../typings/data.js";

export interface CardSetDataItem {
  seasonNumber: number;
  name: string;
  listName: string;
  nameZh: string;
  listNameZh: string;
  nameKo: string;
  listNameKo: string;
  nameEn: string;
  listNameEn: string;
}

/** 再演ではシーズン1だけを使用する。 */
export const CARD_SET_DATA: Record<CardSet, CardSetDataItem> = {
  "saien-s1": {
    seasonNumber: 1,
    name: "再演 シーズン1",
    listName: "再演 シーズン1",
    nameZh: "再演 赛季1",
    listNameZh: "再演 赛季1",
    nameKo: "재연 시즌 1",
    listNameKo: "재연 시즌 1",
    nameEn: "Saien Season 1",
    listNameEn: "Saien Season 1",
  },
};

export const CARD_SETS: CardSet[] = ["saien-s1"];
