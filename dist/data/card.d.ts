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
export declare const S8_UPDATED_CARD_DATA: Partial<{
    [id in TCardId]: CardDataItem;
}>;
export declare const S8_2_UPDATED_CARD_DATA: {
    readonly "22-renri-a1-n-2": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "22-renri-o-n-2";
        readonly name: "欺瞞の霧";
        readonly nameEn: "";
        readonly nameZh: "";
        readonly nameZhG1: "";
        readonly nameKo: "";
        readonly ruby: "ぎまんのきり";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "variable";
        readonly text: "【常時】このカードを、相手が眼前構築で選びうる他のメガミの《付与》でない通常札として通常の方法で使用を宣言しても よい。そうした場合、相手は相手の手札、伏せ札、捨て札からそのカードを公開できる。 公開されたならば、このカードは使用されずに捨て札となる。";
        readonly textZh: "";
        readonly textZhG1: "";
        readonly textKo: "";
        readonly textEn: "";
    };
    readonly "22-renri-a1-n-5": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "22-renri-o-n-5";
        readonly name: "神授";
        readonly nameEn: "";
        readonly nameZh: "";
        readonly nameZhG1: "";
        readonly nameKo: "";
        readonly ruby: "しんじゅ";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "action";
        readonly text: "この「神授」を山札の上に置き、その後に遺物にある通常札1枚と交換する。\n【常時】山札を再構成する直前にこの「神授」 が捨て札にあるならば、 このカードを使用してもよい。\n";
        readonly textAdditional: "（使用済み領域に出し、右クリックすることで効果を発動可能）";
        readonly textZh: "";
        readonly textZhG1: "";
        readonly textKo: "";
        readonly textEn: "";
    };
    readonly "22-renri-a1-n-5-ex1": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "";
        readonly name: "偽りの武器";
        readonly nameEn: "";
        readonly nameZh: "";
        readonly nameZhG1: "";
        readonly nameKo: "";
        readonly ruby: "いつわりのぶき";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly extra: true;
        readonly type: "attack";
        readonly range: "2-4";
        readonly damage: "1/1";
        readonly text: "偽証設置　偽証　回帰\n【攻撃後】偽火―あなたがこのターンで3枚目に使うカードが 《攻撃》 カードならば、その《攻撃》は+0/+1となる。\n";
        readonly textAdditional: "（表向きにした後に右クリックすることで回帰させることが可能）";
        readonly textZh: "";
        readonly textZhG1: "";
        readonly textKo: "";
        readonly textEn: "";
        readonly lie: true;
    };
    readonly "22-renri-a1-n-5-ex2": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "";
        readonly name: "刃の本質";
        readonly nameEn: "";
        readonly nameZh: "";
        readonly nameZhG1: "";
        readonly nameKo: "";
        readonly ruby: "やいばのほんしつ";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly extra: true;
        readonly type: "attack";
        readonly range: "3-4";
        readonly damage: "3/1";
        readonly text: "偽証　回帰\n【常時】奉納―「ロルレロラルロ」の上に桜花結晶があるならば、この《攻撃》は+0/+1となる。\n【常時】このカードを回帰した時、相手の集中力は0になる。\n（このカードはザンカのカードとして扱う）";
        readonly textAdditional: "（表向きにした後に右クリックすることで回帰させることが可能）";
        readonly textZh: "";
        readonly textZhG1: "";
        readonly textKo: "";
        readonly textEn: "";
        readonly lie: true;
    };
    readonly "22-renri-a1-n-5-ex3": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "";
        readonly name: "最初の桜鈴";
        readonly nameEn: "";
        readonly nameZh: "";
        readonly nameZhG1: "";
        readonly nameKo: "";
        readonly ruby: "さいしょのさくらすず";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly extra: true;
        readonly type: "action";
        readonly text: "偽証　回帰\n基本動作を1回行う。 このカードが反証されていないならば、さらにもう1回行う。\n光輝―ダストが5以下ならば伏せ札からカードを1枚選び、山札の一番下に置く。\n【常時】このカードが回帰した時、ダスト→自ライフ：1\n（このカードはヲウカのカードとして扱う）";
        readonly textAdditional: "（表向きにした後に右クリックすることで回帰させることが可能）";
        readonly textZh: "";
        readonly textZhG1: "";
        readonly textKo: "";
        readonly textEn: "";
        readonly lie: true;
    };
    readonly "22-renri-a1-s-1": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "22-renri-o-s-1";
        readonly name: "ロルレロラルロ";
        readonly nameEn: "";
        readonly nameZh: "";
        readonly nameZhG1: "";
        readonly nameKo: "";
        readonly ruby: "＝＝＝＝＝＝＝";
        readonly rubyEn: "";
        readonly baseType: "special";
        readonly type: "enhance";
        readonly capacity: "0";
        readonly cost: "0";
        readonly text: "【使用済】あなたの終了フェイズに納3として、そのうちの1つをライフから納める形でこのカードを使用してもよい。\n【展開中】あなたのメインフェイズの開始時にカード を1枚引いてもよい。\n【展開中】相手が焦燥で受けるダメージが2/1になる。\n【展開中】あなたの偽証が反証されなかったならば、 そのカードを公開してもよい。それが偽物だったならば、集中力を1得る。\n";
        readonly textZh: "";
        readonly textZhG1: "";
        readonly textKo: "";
        readonly textEn: "";
    };
};
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