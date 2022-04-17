import { CardSet } from '../typings/data';
import { typedObjectKeys } from '../_internal/typedObjectKeys';


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
export const CARD_SET_DATA: { readonly [key in CardSet]: CardSetDataItem } = {
  'na-s2': {
    name: '新幕 シーズン2'
    , listName: '新幕 シーズン2 (2018/8/17～ 『第壱拡張：神語起譚』以降)'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'na-s3': {
    name: '新幕 シーズン3'
    , listName: '新幕 シーズン3 (2018/11/30～ 『第弐拡張：神語転晴』以降)'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'na-s4': {
    name: '新幕 シーズン4'
    , listName: '新幕 シーズン4 (2019/6/7～ 『第参拡張：零限突破』以降)'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'na-s5': {
    name: '新幕 シーズン5'
    , listName: '新幕 シーズン5 (2019/11/23～ 『第四拡張：大洋航路』以降)'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'na-s6': {
    name: '新幕 シーズン6'
    , listName: '新幕 シーズン6 (2020/9/11～ 『第伍拡張：異語邂逅』以降)'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'na-s6-2': {
    name: '新幕 シーズン6-2'
    , listName: '新幕 シーズン6-2 (2021/2/1～)'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'na-s7': {
    name: '新幕 シーズン7'
    , listName: '新幕 シーズン7 (2021/12/3～ 『第六拡張：失楽飛翔』以降)'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-0': {
    name: '物語0：神語りのはじまり'
    , listName: '物語0：神語りのはじまり'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-1': {
    name: '物語1：天音揺波 対 氷雨細音'
    , listName: '物語1：天音揺波 対 氷雨細音'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-2': {
    name: '物語2：龍ノ宮一志暗殺計画'
    , listName: '物語2：龍ノ宮一志暗殺計画'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-9': {
    name: '物語9：はじめての代理戦争'
    , listName: '物語9：はじめての代理戦争'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-10': {
    name: '物語10：コルヌに挑戦！'
    , listName: '物語10：コルヌに挑戦！'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-10-heroic': {
    name: '物語10：コルヌに挑戦！（英雄戦）'
    , listName: '物語10：コルヌに挑戦！（英雄戦）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-12': {
    name: '物語12：徒神サイネに挑戦！'
    , listName: '物語12：徒神サイネに挑戦！'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-12-heroic': {
    name: '物語12：徒神サイネに挑戦！（英雄戦）'
    , listName: '物語12：徒神サイネに挑戦！（英雄戦）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-13': {
    name: '物語13：新幕トコヨに挑戦！'
    , listName: '物語13：新幕トコヨに挑戦！'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-13-heroic': {
    name: '物語13：新幕トコヨに挑戦！（英雄戦）'
    , listName: '物語13：新幕トコヨに挑戦！（英雄戦）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'story-15': {
    name: '物語15：彼女の挑戦'
    , listName: '物語15：彼女の挑戦'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'hajimari': {
    name: 'はじまりの決闘'
    , listName: 'はじまりの決闘（初心者向け）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'oboro-challenge': {
    name: 'オボロへの挑戦'
    , listName: 'メガミへの挑戦　第1回：オボロへの挑戦'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'oboro-challenge-heroic': {
    name: 'オボロへの挑戦（英雄戦）'
    , listName: 'メガミへの挑戦　第1回：オボロへの挑戦（英雄戦）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'chikage-challenge': {
    name: 'チカゲへの挑戦'
    , listName: 'メガミへの挑戦　第2回：チカゲへの挑戦'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'chikage-challenge-heroic': {
    name: 'チカゲへの挑戦（英雄戦）'
    , listName: 'メガミへの挑戦　第2回：チカゲへの挑戦（英雄戦）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'raira-challenge': {
    name: 'ライラへの挑戦'
    , listName: 'メガミへの挑戦　第3回：ライラへの挑戦'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'raira-challenge-heroic': {
    name: 'ライラへの挑戦（英雄戦）'
    , listName: 'メガミへの挑戦　第3回：ライラへの挑戦（英雄戦）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'megumi-challenge': {
    name: 'メグミへの挑戦'
    , listName: 'メガミへの挑戦　第4回：メグミへの挑戦'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'megumi-challenge-heroic': {
    name: 'メグミへの挑戦（英雄戦）'
    , listName: 'メガミへの挑戦　第4回：メグミへの挑戦（英雄戦）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'shinra-challenge': {
    name: 'シンラへの挑戦'
    , listName: 'メガミへの挑戦　第5回：シンラへの挑戦'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
  , 'shinra-challenge-heroic': {
    name: 'シンラへの挑戦（英雄戦）'
    , listName: 'メガミへの挑戦　第5回：シンラへの挑戦（英雄戦）'
    , nameZh: ''
    , listNameZh: ''
    , nameKo: ''
    , listNameKo: ''
    , nameEn: ''
    , listNameEn: ''
  }
}

/** 全カードセット一覧 */
export const CARD_SETS: readonly CardSet[] = typedObjectKeys(CARD_SET_DATA);