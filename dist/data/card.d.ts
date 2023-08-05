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
    readonly "06-yukihi-o-n-2": {
        readonly megami: "yukihi";
        readonly name: "しこみび / ねこだまし";
        readonly nameEn: "Preparation / Fake Out";
        readonly nameZh: "预演 / 猫骗";
        readonly nameZhG1: "匍匐/猫跳";
        readonly nameKo: "숨긴 불꽃 / 손뼉치기";
        readonly ruby: "";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "attack";
        readonly range: "4-6";
        readonly rangeOpened: "0-1";
        readonly damage: "1/1";
        readonly damageOpened: "1/1";
        readonly text: "【攻撃後】傘の開閉を行ってもよい。";
        readonly textZh: "【攻击后】可以进行一次伞的开合操作。";
        readonly textZhG1: "";
        readonly textKo: "【공격후】 우산의 개폐를 수행해도 된다.";
        readonly textEn: "";
        readonly textOpened: "【攻撃後】傘の開閉を行ってもよい。";
        readonly textOpenedZh: "【攻击后】可以进行一次伞的开合操作。";
        readonly textOpenedZhG1: "";
        readonly textOpenedKo: "【공격후】 우산의 개폐를 수행해도 된다.";
        readonly textOpenedEn: "";
    };
    readonly "02-saine-A2-n-2": {
        readonly megami: "saine";
        readonly anotherID: "A2";
        readonly replace: "02-saine-o-n-2";
        readonly name: "裏斬り";
        readonly nameEn: "Treachery";
        readonly nameZh: "里斩";
        readonly nameZhG1: "";
        readonly nameKo: "등 베기";
        readonly ruby: "うらぎり";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "attack";
        readonly range: "4-5";
        readonly damage: "3/1";
        readonly text: "対応不可（切札）\n【常時】この《攻撃》が行われた時、相手のオーラが1以下ならば、この《攻撃》のオーラへのダメージとライフへのダメージを入れ替える。";
        readonly textZh: "不可被对应（王牌）\n【常时】进行此《攻击》时若敌装不大于1，交换此《攻击》的对装伤害和对命伤害。";
        readonly textZhG1: "";
        readonly textKo: "대응불가(비장패)\n【상시】 이 《공격》을 수행할 때, 상대의 오라가 1 이하라면, 이 《공격》의 오라 데미지와 라이프 데미지를 서로 바꾼다";
        readonly textEn: "";
    };
    readonly "05-oboro-o-s-3": {
        readonly megami: "oboro";
        readonly name: "虚魚";
        readonly nameEn: "Uro-Uo";
        readonly nameZh: "虚鱼";
        readonly nameZhG1: "虚鱼";
        readonly nameKo: "우로우오";
        readonly ruby: "うろうお";
        readonly rubyEn: "";
        readonly baseType: "special";
        readonly type: "enhance";
        readonly capacity: "3";
        readonly cost: "2";
        readonly text: "【展開時】あなたは捨て札を好きな枚数だけ伏せ札にする。\n【展開中】あなたが伏せ札から使用するカードの矢印は両矢印（⇔）になる。\n【展開中/使用済】山札を再構成する直前に設置を持つ《攻撃》でないカードを追加で1枚伏せ札から使用できる。";
        readonly textZh: "【展开时】你将任意数量的弃牌盖伏。\n【展开中】你从盖牌中使用的牌的箭头视为双箭头（↔）。\n【展开中/使用后】重铸牌库前可以从盖牌追加使用一张具有设置的非《攻击》的牌。";
        readonly textZhG1: "";
        readonly textKo: "【전개시】 당신은 버림패를 원하는 숫자만큼 덮은패로 보내도 된다.\n【전개중】 당신이 덮은패에서 사용하는 카드의 화살표는 양방향 화살표(↔)가 된다.\n【전개중/사용됨】 패산을 재구성하기 직전에 설치를 가지는 《공격》이 아닌 카드를 추가로 1장 덮은패에서 사용해도 된다.";
        readonly textEn: "";
    };
    readonly "07-shinra-A1-n-7": {
        readonly megami: "shinra";
        readonly anotherID: "A1";
        readonly replace: "07-shinra-o-n-7";
        readonly name: "使徒";
        readonly nameEn: "Apostle";
        readonly nameZh: "使徒";
        readonly nameZhG1: "使徒";
        readonly nameKo: "사도";
        readonly ruby: "しと";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "enhance";
        readonly subType: "fullpower";
        readonly capacity: "2";
        readonly text: "【展開時】集中力を1支払い、計略を準備してもよい。\n【展開時/破棄時】計略を実行し、次の計略を準備する。\n[神算] 攻撃『適正距離0, 2, 4、2/1、不可避、【攻撃後】相手は手札から1枚と捨て札か伏せ札から1枚を選び、それらを山札の底に任意の順番で置く』を行う。\n[鬼謀] 攻撃『適正距離1, 3, 5、2/2、不可避、【攻撃後】相手の山札の上から1枚を捨て札にして、1枚を伏せ札にする』を行う。";
        readonly textZh: "【展开时】可以支付1点集中力来准备计略。\n【展开时/破弃时】实行当前计略，准备下个计略。\n----\n[神算] 进行一次“攻击距离0,2,4 伤害2/1 不可被闪避 【攻击后】对手从手牌中选择1张牌并从弃牌或者盖牌中选择1张牌，将那些牌以任意顺序置于牌库底”的攻击。\n----\n[鬼谋] 进行一次“攻击距离1,3,5 伤害2/2 不可被闪避 【攻击后】对手从牌库顶弃掉1张牌，盖伏1张牌”的攻击。";
        readonly textZhG1: "";
        readonly textKo: "【전개시】 집중력 1을 지불하고, 계략을 준비해도 된다.\n【전개시/파기시】 계략을 실행하고, 다음번 계략을 준비한다.\n「신산」 공격 『 적정거리 0,2,4, 2/1, 불가피, 【공격후】 상대는 손패에서 1장, 버림패나 덮은패에서 1장의 카드를 고른 뒤 그들을 패산 아래에 임의의 순서로 놓는다.』를 수행한다.\n「귀모」 공격 『적정거리 1,3,5, 2/2, 불가피, 【공격후】 상대의 패산 위의 카드 1장을 버림패로, 1장을 덮은패로 보낸다.』를 수행한다.";
        readonly textEn: "";
    };
    readonly "09-chikage-o-n-4": {
        readonly megami: "chikage";
        readonly name: "暗器";
        readonly nameEn: "";
        readonly nameZh: "暗器";
        readonly nameZhG1: "";
        readonly nameKo: "암기";
        readonly ruby: "あんき";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "attack";
        readonly subType: "reaction";
        readonly range: "1-5";
        readonly damage: "1/1";
        readonly text: "全力化：【常時】この《攻撃》は+1/+2となる。\n全力化：【攻撃後】相手はあなたの毒袋を見てその中から1枚を選び、それを相手の手札に加える。\n【攻撃後】相手の手札に毒カードがあるならば、基本動作《纏い》を1回行う。";
        readonly textAdditional: "（毒袋領域を右クリックすることで、相手に毒袋の中身を見せることが可能）";
        readonly textZh: "全力化：【常时】此《攻击》得+1/+2。\n全力化：【攻击后】对手查看你的毒袋并从中选择1张加入手牌。\n【攻击后】对手手牌中有毒牌的话，进行1次基本动作《装附》。";
        readonly textZhG1: "";
        readonly textZhAdditional: "（在毒袋区域右键可以让对手查看毒袋）";
        readonly textKo: "전력화: 【상시】 이 《공격》은 +1/+2 된다.\n전력화: 【공격후】 상대는 당신의 독주머니를 보고 그 중에서 1장을 골라 그것을 상대의 손패에 추가한다.\n【공격후】 상대의 손패에 독 카드가 있다면, 기본동작 《휘감기》를 1회 수행한다.";
        readonly textEn: "";
    };
    readonly "11-thallya-o-n-4": {
        readonly megami: "thallya";
        readonly name: "Steam Cannon";
        readonly nameEn: "Steam Cannon";
        readonly nameZh: "Steam Cannon";
        readonly nameZhG1: "Steam Cannon";
        readonly nameKo: "Steam Cannon";
        readonly ruby: "スチームカノン";
        readonly rubyEn: "";
        readonly rubyZh: "蒸汽大炮";
        readonly baseType: "normal";
        readonly type: "attack";
        readonly range: "3-7";
        readonly damage: "1/1";
        readonly text: "燃焼\n全力化：【常時】この《攻撃》は距離拡大（近1）と距離拡大（遠1）を得て、+2/+2となる。\n【攻撃後】全力化していないならば、あなたの燃焼済の造花結晶を2つ回復する。\n";
        readonly textZh: "燃烧\n全力化：【常时】此《攻击》获得距离扩大（近1）和距离扩大（远1），且得+2/+2。\n【攻击后】若非全力化，则回复你2个已燃烧的造花结晶。";
        readonly textZhG1: "";
        readonly textKo: "연소\n전력화: 【상시】 이 《공격》은 거리확대(근1)과 거리확대(원1)을 얻고 +2/+2 된다.\n【공격후】 전력화로 사용하지 않았다면, 당신의 연소상태의 조화결정을 2개 회복한다.";
        readonly textEn: "";
    };
    readonly "10-kururu-A1-s-3": {
        readonly megami: "kururu";
        readonly anotherID: "A1";
        readonly replace: "10-kururu-o-s-3";
        readonly name: "らすとりさーち";
        readonly nameEn: "Last Research";
        readonly nameZh: "终极探索";
        readonly nameZhG1: "不懈探索";
        readonly nameKo: "라스트 리서치";
        readonly ruby: "";
        readonly rubyEn: "";
        readonly rubyZh: "Last Research";
        readonly baseType: "special";
        readonly type: "action";
        readonly cost: "2";
        readonly text: "----\n<攻> 相手の伏せ札が0枚ならば相手の山札の上から1枚を伏せ札にする。相手は伏せ札から1枚を選ぶ。あなたはカード名を1つ宣言し、相手は選んだカードを捨て札にする。そのカード名が一致したらこのカードの上にゲーム外から桜花結晶を1つ置く。2つになったら世紀の大発見を行う。\n----\n【使用済】あなたが山札を再構成した時ならびに《全力》カードを使用した時、このターンの終了フェイズにこのカードをコストを支払わずに使用してもよい。";
        readonly textAdditional: "「世紀の大発見」- 相手の切札を全て見る。その後、あなたか対戦相手のどちらかを選び、そのプレイヤーが宿しているメガミの切札の内、眼前構築で選ばれていない切札5枚をゲーム外から未使用状態で得る。 さらに、使用したあなたの「らすとりさーち」を取り除き、追加札領域にある「ぐらんがりばー」を未使用状態で得る。\n（条件を満たした状態で、このカードを右クリックすることにより発動可能）";
        readonly textZh: "----\n<攻> 若对手盖牌为0张则盖伏对手牌库顶1张牌。对手选择其盖牌区中的1张牌。你宣言1个牌名，并弃置所选择的牌。若你宣言的牌名与所选择牌的牌名一致，则从游戏外将1个樱花结晶移至此牌上。达到2个后，进行世纪的大发现。\n----\n【使用后】你重铸牌库时或者使用《全力》牌时，那个回合的结束阶段可以免费使用此牌。";
        readonly textZhG1: "";
        readonly textZhAdditional: "「世纪的大发现」～查看对手的所有王牌。这之后选择你或者对手，将所选玩家寄宿的女神的王牌中在眼前构筑时没有被选上的5张，从游戏外以未使用的状态获得。再将『终极探索』移出游戏并从追加牌区以未使用的状态获得王牌『壮绝旅途』。";
        readonly textKo: "----\n<공> 상대의 덮은패가 0장이라면 상대의 패산 위에서 1장 덮은패로 보낸다. 상대는 덮음패에서 카드를 1장 선택한다. 당신은 카드 이름을 1개 선언하고, 상대는 선택한 카드를 버림패로 만든다. 그 카드의 이름이 일치했다면, 게임 바깥에서 벚꽃결정을 1개 가져와 이 카드 위에 놓는다. 벚꽃결정이 2개가 되었다면, 세기의 대발견을 수행한다.\n----\n【사용됨】 당신이 패산을 재구성했거나 《전력》 카드를 사용했을 때, 그 턴의 종료 페이즈에 이 카드를 소모값을 지불하지 않고 사용해도 된다.";
        readonly textEn: "";
    };
    readonly "12-raira-o-n-2": {
        readonly megami: "raira";
        readonly name: "風雷撃";
        readonly nameEn: "Wind and Thunder";
        readonly nameZh: "风雷击";
        readonly nameZhG1: "风雷击";
        readonly nameKo: "풍뢰격";
        readonly ruby: "ふうらいげき";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "attack";
        readonly range: "1-2";
        readonly damage: "X/2";
        readonly text: "【常時】Xは風神ゲージと雷神ゲージのうち、小さい方の値である。";
        readonly textZh: "【常时】X等于风神槽与雷神槽的值中的较小者。";
        readonly textZhG1: "";
        readonly textKo: "【상시】X는 풍신 게이지나 뇌신 게이지 중, 작은쪽의 수치가 된다.";
        readonly textEn: "Forced: X is equal to the lower of your Wind and Thunder God gauges.";
    };
    readonly "13-utsuro-A1-s-1": {
        readonly megami: "utsuro";
        readonly anotherID: "A1";
        readonly replace: "13-utsuro-o-s-1";
        readonly name: "残響装置:枢式";
        readonly nameEn: "Reverberation Device: Kururu-Type";
        readonly nameZh: "残响装置：枢式";
        readonly nameZhG1: "残响装置：枢式";
        readonly nameKo: "잔향장치:쿠루루식";
        readonly ruby: "ざんきょうそうち　くるるしき";
        readonly rubyEn: "";
        readonly baseType: "special";
        readonly type: "attack";
        readonly range: "3-10";
        readonly damage: "2/1";
        readonly cost: "2";
        readonly text: "終端\n【使用済】あなたか相手の終了フェイズにダストが13以上ならば、終焉の影が蘇る。その後、このカードを取り除き、あなたの追加札から「望我」を使用済で得て、カードを1枚引き、あなたのライフが6以上ならば、ライフが5になるように桜花結晶をダストに移動させる。";
        readonly textAdditional: "「終焉の影が蘇る」- 山札、手札、伏せ札、捨て札、付与札にある切札でないカードをすべて取り除き、代わりに「万象乖ク殲滅ノ影」「我ヲ亡クシテ静寂ヲ往ク」「終焉、来タレ」の3枚を捨て札に置き、その後山札を再構成する。\n（条件を満たした状態で、このカードを右クリックすることにより発動可能）";
        readonly textZh: "终端\n【已使用】若在你或者对手的结束阶段虚有13或以上的话，则终焉之影苏醒。然后将此牌移出游戏，从追加牌区以使用后状态获得王牌『夙愿』，并抓1张牌。自命有6或更多的话，留下其中5个其他全部移至虚。";
        readonly textZhG1: "";
        readonly textZhAdditional: "「终焉之影苏醒」～将你手牌、牌库、盖牌区、弃牌区与付与区中的所有非王牌移出游戏（付与牌的破弃时效果不发动），从追加牌区将『万象乖离残灭之影』『灭吾之身静以思』『终焉、降临吧』置入弃牌区，然后重铸牌库。";
        readonly textKo: "종단\n【사용됨】 당신 또는 상대의 종료 페이즈에, 더스트가 13 이상이라면, 종언의 그림자가 되살아난다. 그 후 이 카드를 게임에서 제외하고, 당신의 추가패에서 「망아」를 사용된 상태로 얻고, 카드를 1장 뽑은 뒤, 당신의 라이프가 6 이상이라면, 라이프가 5가 될 때까지 라이프에서 더스트로 벛꽃결정을 이동시킨다.";
        readonly textEn: "";
        readonly removable: true;
    };
    readonly "20-kanawe-o-s-1": {
        readonly megami: "kanawe";
        readonly name: "たまゆらふみ";
        readonly nameEn: "Action to the Word";
        readonly nameZh: "玉响一瞬书成文";
        readonly nameZhG1: "玉响书";
        readonly nameKo: "어렴풋한 이야기";
        readonly ruby: "";
        readonly rubyEn: "";
        readonly baseType: "special";
        readonly type: "action";
        readonly cost: "1";
        readonly text: "追加札または達成済から構想カードを1枚準備する。達成済から準備したらこのカードを取り除く。\n【使用済】相手の開始フェイズの開始時に、あなたが直前のターンに構想を進めていないならば、このカードを未使用に戻す。そうした場合、相手は集中力を1得る。\n";
        readonly textZh: "从追加牌区或从已达成的构想牌中准备1张构想。从已达成的构想牌中准备的话将此牌移出游戏。\n【使用后】在对手的准备阶段开始时，若你在上个回合没有推进构想的话，将此牌变为未使用的状态。若如此做，对手获得1点集中力。";
        readonly textZhG1: "";
        readonly textKo: "추가패 또는 달성완료에서 구상 카드를 1장 준비한다. 달성완료에서 준비했다면, 이 카드를 게임에서 제외한다.\n【사용됨】 상대의 개시 페이즈 시작에, 당신이 직전 턴에 구상을 진행하지 않았다면, 이 카드를 미사용 상태로 되돌린다. 그렇게 했다면, 상대는 집중력을 1 얻는다.";
        readonly textEn: "";
    };
    readonly "21-kamuwi-o-n-2": {
        readonly megami: "kamuwi";
        readonly name: "散華刃";
        readonly nameEn: "Scattering Strike";
        readonly nameZh: "散华刃";
        readonly nameZhG1: "散华刃";
        readonly nameKo: "흩날리는 칼날";
        readonly ruby: "さんげじん";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "attack";
        readonly range: "3-4";
        readonly damage: "2/1";
        readonly text: "(+1) 【常時】この《攻撃》は+1/+0となる。\n----\n(+1) 【攻撃後】相手のオーラが4以下ならば、相オーラ→自オーラ：1";
        readonly textZh: "(+1) 【常时】此《攻击》得+1/+0。\n----\n(+1) 【攻击后】敌装仅4或以下的话，敌装→1→自装";
        readonly textZhG1: "";
        readonly textKo: "(+1) 【상시】 이 《공격》은 +1/+0 된다.\n----\n(+1) 【공격후】 상대의 오라가 4 이하라면, 오라(상대)→오라(자신): 1";
        readonly textEn: "";
    };
    readonly "21-kamuwi-o-s-4": {
        readonly megami: "kamuwi";
        readonly name: "理";
        readonly nameEn: "Balance";
        readonly nameZh: "理";
        readonly nameZhG1: "理";
        readonly nameKo: "이치";
        readonly ruby: "ことわり";
        readonly rubyEn: "";
        readonly baseType: "special";
        readonly type: "action";
        readonly cost: "3";
        readonly text: "以下を3回まで選ぶ。 同じものを複数回選んでもよい。\n・間合→ダスト：1\n・あなたのライフが8以下ならば、あなたの禁忌ゲージを1上げる。そうした場合、自オーラ→自ライフ：1";
        readonly textZh: "选择以下最多3次，可以重复选择：\n·距→1→虚\n·自命不大于8的话，你的禁忌槽上升1。若如此做，自装→1→自命";
        readonly textZhG1: "";
        readonly textKo: "아래에서 3번 선택한다. 같은 것을 여러 번 선택해도 된다.\n・간격→더스트:1\n・당신의 라이프가 8 이하라면, 당신의 금기 게이지를 1 올린다. 그렇게 했다면, 오라(자신)→라이프(자신):1";
        readonly textEn: "";
    };
    readonly "22-renri-o-n-6": {
        readonly megami: "renri";
        readonly name: "魚吊り";
        readonly nameEn: "Motive";
        readonly nameZh: "吊魚";
        readonly nameZhG1: "辜毒谄言";
        readonly nameKo: "낚시질";
        readonly ruby: "うおつり";
        readonly rubyEn: "";
        readonly rubyZh: "钓鱼";
        readonly baseType: "normal";
        readonly type: "action";
        readonly subType: "reaction";
        readonly text: "偽証（偽証は対応では行えない）\n間合→自フレア：1";
        readonly textZh: "伪证（不能在对应时伪证）\n距→1→自气";
        readonly textZhG1: "";
        readonly textKo: "위증（위증은 대응으로 사용할 수 없다）\n간격→플레어(자신)：1";
        readonly textEn: "Falsehood (You cannot play cards face-down as a Reaction to an attack.)\n\nDistance (1)→ Your Flare";
        readonly lie: true;
    };
    readonly "23-akina-o-n-7": {
        readonly megami: "akina";
        readonly name: "直接金融";
        readonly nameEn: "";
        readonly nameZh: "直接金融";
        readonly nameZhG1: "";
        readonly nameKo: "직접금융";
        readonly ruby: "ちょくせつきんゆう";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "enhance";
        readonly subType: "fullpower";
        readonly capacity: "2";
        readonly text: "隙　投資券\n【展開時】相オーラ→自オーラ：1\n1以上の集中力を全て支払ってもよい。 そうした場合、この矢印効果をもう1回行う。\n【破棄時】攻撃『適正距離2-5、1/0』を行ってもよい。";
        readonly textZh: "破绽 投资券\n【展开时】敌装→1→自装\n可以支付所有集中力（至少1点），若如此做，重复1次这个箭头效果。\n【破弃时】进行一次“攻击距离2-5、伤害1/0”的攻击。";
        readonly textZhG1: "";
        readonly textKo: "빈틈, 투자권\n【전개시】 오라(상대)→오라(자신):1\n집중력이 1 이상 있다면 전부 지불해도 된다. 그렇게 했다면, 이 화살표 효과를 1회 더 수행한다.\n【파기시】 공격 『적정거리 2-5, 1/0』을 수행해도 된다.";
        readonly textEn: "";
        readonly investable: true;
    };
    readonly "23-akina-o-s-4": {
        readonly megami: "akina";
        readonly name: "源上安岐那の御明算";
        readonly nameEn: "";
        readonly nameZh: "源上安歧那的妙算";
        readonly nameZhG1: "";
        readonly nameKo: "미나카미 아키나의 정확한 계산";
        readonly ruby: "みなかみあきなのごめいさん";
        readonly rubyEn: "";
        readonly baseType: "special";
        readonly type: "action";
        readonly cost: "時価";
        readonly text: "間合制限（0-6）　投資券\n回収を行ってもよい。そうした場合、基本動作《纏い》を2回まで行い、このカードを取り除く。\n【使用済】あなたのメインフェイズの開始時に、あなたは回収を行う代わりに基本動作《宿し》を1回行ってもよい。";
        readonly textZh: "距离限制（0-6） 投资券\n可以进行回收。若如此做，进行最多2次基本动作《装附》，将此卡移出游戏。\n【使用后】你的准备阶段开始时，可以进行一次基本动作《聚气》代替使用回收。";
        readonly textZhG1: "";
        readonly textKo: "간격제한(0-6) 투자권\n회수를 수행해도 된다. 그렇게 한 경우, 기본동작 《휘감기》를 2번까지 수행하고, 이 카드를 게임에서 제외한다.\n【사용됨】 당신의 메인 페이즈 시작에, 당신은 회수를 수행하는 대신 기본동작 《품기》를 1번 수행해도 된다.";
        readonly textEn: "";
        readonly removable: true;
        readonly investable: true;
    };
    readonly "24-shisui-o-n-7": {
        readonly megami: "shisui";
        readonly name: "黒き絆";
        readonly nameEn: "";
        readonly nameZh: "黑色牵绊";
        readonly nameZhG1: "";
        readonly nameKo: "검은 인연";
        readonly ruby: "";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "action";
        readonly subType: "reaction";
        readonly text: "以下から異なるX個までを選ぶ。Xはあなたがこのターンにダメージを受けた回数に等しい。\n・対応した《攻撃》を +0/-1する。\n・相手を畏縮させる。\n・相手は相手のオーラかフレアかライフから1つ選ぶ。 あなたはそこに裂傷を1与える。\n";
        readonly textZh: "选择以下不同的最多X个，X等于你在本回合受到的伤害次数：\n·被对应的《攻击》得+0/-1；\n·令对手畏缩；\n·对手选择敌装、敌命、敌气中的1个，你给予那个区域1点裂伤。";
        readonly textZhG1: "";
        readonly textKo: "아래에서 서로 다른 X가지를 선택한다. X는 당신이 이번 턴에 데미지를 입은 횟수와 동일하다.\n・대응한 《공격》은 +0/-1 된다.\n・상대를 위축시킨다\n・상대는 상대의 오라, 라이프, 플레어 중 하나를 고른다. 당신은 그곳에 열상 하나를 준다.";
        readonly textEn: "";
    };
    readonly "24-shisui-o-s-1": {
        readonly megami: "shisui";
        readonly name: "ハドマギリ";
        readonly nameEn: "";
        readonly nameZh: "红莲狱斩切";
        readonly nameZhG1: "";
        readonly nameKo: "하도마기리";
        readonly ruby: "";
        readonly rubyEn: "";
        readonly rubyZh: "Padma";
        readonly baseType: "special";
        readonly type: "action";
        readonly subType: "reaction";
        readonly cost: "3";
        readonly text: "【常時】このカードが対応している《攻撃》があるならば、その《攻撃》の解決後にこのカードの効果を解決する。\n開始フェイズと同様の手順であなたの裂傷トークンを全てダメージ化する。その後、攻撃『適正距離1-4、2/1、対応不可（通常札）、【常時】この《攻撃》は+0/+Xとなる。Xはあなたがこのターン中にダメージを受けた回数の半分（切り捨て）に等しい』を行う。";
        readonly textZh: "【常时】若此牌对应了一个《攻击》，则在那个《攻击》结算之后结算此牌的效果。\n如同准备阶段一样顺序将你的裂伤指示物全部伤害化。那之后，进行一次“攻击距离1-4 伤害2/1 不可被对应（通常牌） 【常时】此《攻击》得+0/+X，X为本你在本回合受到过的伤害的次数的一半（向下取整）”的攻击。";
        readonly textZhG1: "";
        readonly textKo: "【상시】 이 카드가 대응하고 있는 《공격》이 있다면, 그 《공격》을 해결한 후에 이 카드의 효과를 해결한다.\n개시 페이즈와 동일한 순서로 당신의 열상 토큰을 모두 데미지화 한다. 그 후, 공격 『적정거리 1-4, 2/1, 대응불가(통상패), 【상시】 이 《공격》은 +0/+X 된다. X는 이번 턴 동안 데미지를 받은 횟수의 절반(내림)과 같다.』을 수행한다.";
        readonly textEn: "";
    };
    readonly "22-renri-a1-n-2": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "22-renri-o-n-2";
        readonly name: "欺瞞の霧";
        readonly nameEn: "";
        readonly nameZh: "欺瞒之雾";
        readonly nameZhG1: "";
        readonly nameKo: "기만의 안개";
        readonly ruby: "ぎまんのきり";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "variable";
        readonly text: "【常時】このカードを、相手が眼前構築で選びうる他のメガミの《付与》でない通常札として通常の方法で使用を宣言しても よい。そうした場合、相手は相手の手札、伏せ札、捨て札からそのカードを公開できる。 公開されたならば、このカードは使用されずに捨て札となる。";
        readonly textZh: "【常时】此卡可以宣言当做，对手在眼前构筑选择的其他女神的非《付于》的通常牌，以正常的方式使用。若如此做，对手可以从其手牌、盖牌、弃牌中将那张牌公开。若公开的话，此牌使用失败并就这样弃掉。";
        readonly textZhG1: "";
        readonly textKo: "【상시】 이 카드를, 상대가 안전구축에서 고를 수 있는 다른 여신의 《부여》가 아닌 통상패로서 통상의 방법으로 사용을 선언해도 된다.\n그렇게 했다면, 상대는 상대의 손패, 덮은패, 버림패로부터 해당 카드를 공개해도 된다. 공개되었다면, 이 카드는 사용되지 않고 버림패가 된다.";
        readonly textEn: "";
    };
    readonly "22-renri-a1-n-5": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "22-renri-o-n-5";
        readonly name: "神授";
        readonly nameEn: "";
        readonly nameZh: "神授";
        readonly nameZhG1: "";
        readonly nameKo: "신수";
        readonly ruby: "しんじゅ";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly type: "action";
        readonly text: "この「神授」を山札の上に置き、その後に遺物にある通常札1枚と交換する。\n【常時】山札を再構成する直前にこの「神授」 が捨て札にあるならば、 このカードを使用してもよい。\n";
        readonly textAdditional: "（使用済み領域に出し、右クリックすることで効果を発動可能）";
        readonly textZh: "将此「神授」置于牌库顶，那之后将其和遗物中的1张通常牌交换。\n【常时】在重铸牌库前弃牌中有这张「神授」的话，可以使用这张牌。";
        readonly textZhG1: "";
        readonly textZhAdditional: "（移动到已使用区域并右键就可以发动效果）";
        readonly textKo: "이「신수」를 패산 위에 놓고, 그 후에 유물에 있는 통상패 한 장과 교환한다.\n【상시】패산을 재구성하기 직전에, 이 「신수」가 버림패에 있다면, 이 카드를 사용해도 된다.";
        readonly textKoAdditional: "（사용됨 영역에서 꺼내서 우클릭으로 효과 발동 가능）";
        readonly textEn: "";
    };
    readonly "22-renri-a1-n-5-ex1": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "";
        readonly name: "偽りの武器";
        readonly nameEn: "";
        readonly nameZh: "虚伪的武器";
        readonly nameZhG1: "";
        readonly nameKo: "거짓의 무기";
        readonly ruby: "いつわりのぶき";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly extra: true;
        readonly type: "attack";
        readonly range: "2-4";
        readonly damage: "1/1";
        readonly text: "偽証設置　偽証　回帰\n【攻撃後】偽火―あなたがこのターンで3枚目に使うカードが 《攻撃》 カードならば、その《攻撃》は+0/+1となる。\n";
        readonly textAdditional: "（表向きにした後に右クリックすることで回帰させることが可能）";
        readonly textZh: "伪证设置 伪证 回归 \n【攻击后】伪火～你在本回合使用的第3张牌是《攻击》牌的话，那个《攻击》得+0/+1。";
        readonly textZhG1: "";
        readonly textZhAdditional: "（正面表示后右键就可以令其回归）";
        readonly textKo: "위증설치 위증 회귀\n【공격후】위화 - 당신이 이번 턴에 3번째로 사용하는 카드가 《공격》카드라면, 그 《공격》은 +0/+1된다.";
        readonly textKoAdditional: "（앞면 표시로 한 뒤에 우클릭으로 회귀시키기 가능）";
        readonly textEn: "";
        readonly lie: true;
    };
    readonly "22-renri-a1-n-5-ex2": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "";
        readonly name: "刃の本質";
        readonly nameEn: "";
        readonly nameZh: "刃之本质";
        readonly nameZhG1: "";
        readonly nameKo: "검의 본질";
        readonly ruby: "やいばのほんしつ";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly extra: true;
        readonly type: "attack";
        readonly range: "3-4";
        readonly damage: "3/1";
        readonly text: "偽証　回帰\n【常時】奉納―「ロルレロラルロ」の上に桜花結晶があるならば、この《攻撃》は+0/+1となる。\n【常時】このカードを回帰した時、相手の集中力は0になる。\n（このカードはザンカのカードとして扱う）";
        readonly textAdditional: "（表向きにした後に右クリックすることで回帰させることが可能）";
        readonly textZh: "伪证 回归 \n【常时】奉纳～有樱花结晶放置于「晓丒旳绝雾」之上的话，此《攻击》得+0/+1。\n【常时】此牌回归时，对手的集中力变成0。\n（将此牌视为斩华的牌）";
        readonly textZhG1: "";
        readonly textZhAdditional: "（正面表示后右键就可以令其回归）";
        readonly textKo: "위증 회귀\n【상시】봉납 - 「로루레로라루로」위에 벛꽃결정이 놓여 있다면, 이《공격》은 +0/+1 된다.\n【상시】이 카드가 회귀할 때, 상대의 집중력은 0이 된다.\n(이 카드는 여신 '잔카'의 카드로 취급한다.)";
        readonly textKoAdditional: "（앞면 표시로 한 뒤에 우클릭으로 회귀시키기 가능）";
        readonly textEn: "";
        readonly lie: true;
    };
    readonly "22-renri-a1-n-5-ex3": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "";
        readonly name: "最初の桜鈴";
        readonly nameEn: "";
        readonly nameZh: "最初的樱铃";
        readonly nameZhG1: "";
        readonly nameKo: "최초의 벚꽃방울";
        readonly ruby: "さいしょのさくらすず";
        readonly rubyEn: "";
        readonly baseType: "normal";
        readonly extra: true;
        readonly type: "action";
        readonly text: "偽証　回帰\n基本動作を1回行う。 このカードが反証されていないならば、さらにもう1回行う。\n光輝―ダストが5以下ならば伏せ札からカードを1枚選び、山札の一番下に置く。\n【常時】このカードが回帰した時、ダスト→自ライフ：1\n（このカードはヲウカのカードとして扱う）";
        readonly textAdditional: "（表向きにした後に右クリックすることで回帰させることが可能）";
        readonly textZh: "伪证 回归 \n进行1次基本动作。此牌未被反证时，额外进行1次。\n光辉～若虚不超过5，则将1张盖牌置于牌库底。\n【常时】此牌回归时：虚→1→自命\n（将此牌视为樱华的牌）";
        readonly textZhG1: "";
        readonly textZhAdditional: "（正面表示后右键就可以令其回归）";
        readonly textKo: "위증 회귀\n기본동작을 1번 수행한다. 이 카드가 반증되지 않았다면 1번 더 수행한다.\n광휘 - 더스트가 5개 이하라면, 덮음패에서 카드를 1장 선택하여 패산 아래에 놓는다.\n【상시】이 카드가 회귀할 때, 더스트→라이프(자신):1\n(이 카드는 여신 '오우카'의 카드로 취급한다.)";
        readonly textKoAdditional: "（앞면 표시로 한 뒤에 우클릭으로 회귀시키기 가능）";
        readonly textEn: "";
        readonly lie: true;
    };
    readonly "22-renri-a1-s-1": {
        readonly megami: "renri";
        readonly anotherID: "A1";
        readonly replace: "22-renri-o-s-1";
        readonly name: "ロルレロラルロ";
        readonly nameEn: "";
        readonly nameZh: "晓丒旳绝雾";
        readonly nameZhG1: "";
        readonly nameKo: "로루레라라리로";
        readonly ruby: "＝＝＝＝＝＝＝";
        readonly rubyEn: "";
        readonly rubyZh: "小丑的觉悟";
        readonly baseType: "special";
        readonly type: "enhance";
        readonly capacity: "0";
        readonly cost: "0";
        readonly text: "【使用済】あなたの終了フェイズに納3として、そのうちの1つをライフから納める形でこのカードを使用してもよい。\n【展開中】あなたのメインフェイズの開始時にカード を1枚引いてもよい。\n【展開中】相手が焦燥で受けるダメージが2/1になる。\n【展開中】あなたの偽証が反証されなかったならば、 そのカードを公開してもよい。それが偽物だったならば、集中力を1得る。\n";
        readonly textZh: "【使用后】在你的结束阶段，可以将这张牌当做纳为3且其中1个来自自命的方式使用此牌。\n【展开中】在你的主要阶段开始时可以抽1张牌。\n【展开中】对手受到的焦躁伤害变成2/1。\n【展开中】若你的伪证未被反证，你可以公开之，若那是假的则你获得1点集中力。";
        readonly textZhG1: "";
        readonly textKo: "【사용됨】 당신의 종료 페이즈에 이 카드를 봉납 3으로, 그 중 1개를 라이프에서 봉납하며 사용해도 된다.\n【전개중】 당신의 메인 페이즈의 시작에, 카드를 1장 뽑아도 된다.\n【전개중】 상대가 받는 초조 데미지는 2/1이 된다.\n【전개중】 당신의 위증이 반증되지 않았다면, 이 카드를 공개해도 된다. 그것이 거짓이었다면, 집중력을 1 얻는다.";
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