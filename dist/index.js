require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 210:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typedObjectKeys = void 0;
/** 対象オブジェクトのキー一覧を取得する。Object.keysの型付け版 */
function typedObjectKeys(obj) {
    return Object.keys(obj);
}
exports.typedObjectKeys = typedObjectKeys;


/***/ }),

/***/ 353:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ALL_CARD_LIST = exports.ALL_CARD_ID_LIST = exports.CARD_SORT_KEY_MAP = exports.STORY_CARD_DATA = exports.S7_UPDATED_CARD_DATA = exports.S6_2_UPDATED_CARD_DATA = exports.S6_UPDATED_CARD_DATA = exports.S5_UPDATED_CARD_DATA = exports.S4_PRE_UPDATED_CARD_DATA = exports.S4_UPDATED_CARD_DATA = exports.S3_UPDATED_CARD_DATA = exports.S2_BASE_CARD_DATA = exports.CARD_DATA = void 0;
const sortBy_1 = __importDefault(__nccwpck_require__(337));
const sortedUniq_1 = __importDefault(__nccwpck_require__(786));
const typedObjectKeys_1 = __nccwpck_require__(210);
const cardId_1 = __nccwpck_require__(667);
exports.CARD_DATA = {};
exports.S2_BASE_CARD_DATA = {
    "01-yurina-o-n-1": {
        megami: "yurina",
        name: "斬",
        nameEn: "Slash",
        nameZh: "斩",
        nameZhG1: "斩",
        nameKo: "참",
        ruby: "ざん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-4",
        damage: "3/1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "01-yurina-A1-n-1": {
        megami: "yurina",
        anotherID: "A1",
        replace: "01-yurina-o-n-1",
        name: "乱打",
        nameEn: "Wild Swing",
        nameZh: "乱打",
        nameZhG1: "乱打",
        nameKo: "난타",
        ruby: "らんだ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2",
        damage: "2/1",
        text: "【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+0/+2となり、対応不可を得る。",
        textZh: "【常时】决死～若自命中的樱花结晶数小于等于3，则此《攻击》得+0/+2和不可被对应。",
        textZhG1: "【常时】决死-若自命中的樱花结晶的数目小于3，则此《攻击》得+0/+2和不可被对应。",
        textKo: "【상시】결사-당신의 라이프가 3 이하라면, 이 《공격》은 +0/+2가 되고, 대응불가를 얻는다.",
        textEn: "Forced: Resolve - If your Life is 3 or less, this attack gains +0/+2 and No Reactions.",
    },
    "01-yurina-o-n-2": {
        megami: "yurina",
        name: "一閃",
        nameEn: "Brandish",
        nameZh: "一闪",
        nameZhG1: "一闪",
        nameKo: "일섬",
        ruby: "いっせん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3",
        damage: "2/2",
        text: "【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+1/+0となる。",
        textZh: "【常时】决死～若自命中的樱花结晶数小于等于3，则此《攻击》得+1/+0。",
        textZhG1: "【常时】决死-若自命中的樱花结晶的数目小于3，则此《攻击》得+1/+0。",
        textKo: "【상시】결사-당신의 라이프가 3 이하라면, 이 《공격》은 +1/+0이 된다.",
        textEn: "Forced: Resolve - This attack gains +1/+0 if your Life is 3 or less.",
    },
    "01-yurina-o-n-3": {
        megami: "yurina",
        name: "柄打ち",
        nameEn: "Hilt Strike",
        nameZh: "柄击",
        nameZhG1: "柄击",
        nameKo: "자루치기",
        ruby: "つかうち",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-2",
        damage: "2/1",
        text: "【攻撃後】決死-あなたのライフが3以下ならば、このターンにあなたが次に行う《攻撃》は+1/+0となる。",
        textZh: "【攻击后】决死～若自命中的樱花结晶数小于等于3，则本回合你的下一次《攻击》得+1/+0。",
        textZhG1: "【攻击后】决死-若自命中的樱花结晶的数目小于3，则本回合你的下一次《攻击》得+1/+0。",
        textKo: "【공격후】결사-당신의 라이프가 3 이하라면, 이 턴에 당신이 다음에 행하는 《공격》은 +1/+0이 된다.",
        textEn: "After Attack: Resolve - The next attack you make this turn gains +1/+0 if your Life is 3 or less.",
    },
    "01-yurina-o-n-4": {
        megami: "yurina",
        name: "居合",
        nameEn: "Art of Drawing",
        nameZh: "居合",
        nameZhG1: "居合斩",
        nameKo: "거합",
        ruby: "いあい",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "2-4",
        damage: "4/3",
        text: "【常時】現在の間合が2以下ならば、この攻撃は-1/-1となる。",
        textZh: "【常时】若当前距离小于等于2，则此《攻击》得-1/-1。",
        textZhG1: "【常时】若当前距离小于2，则此《攻击》得-1/-1。",
        textKo: "【상시】현재 간격이 2 이하라면, 이 공격은 -1/-1이 된다.",
        textEn: "Forced: If the current Distance is 2 or less, this attack gets -1/-1.",
    },
    "01-yurina-o-n-5": {
        megami: "yurina",
        name: "足捌き",
        nameEn: "Footwork",
        nameZh: "运足",
        nameZhG1: "疾跑",
        nameKo: "발놀림",
        ruby: "あしさばき",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の間合が4以上ならば、間合→ダスト：2\n現在の間合が1以下ならば、ダスト→間合：2",
        textZh: "若当前距离大于等于4，则：距→2→虚。 \n若当前距离小于等于1，则：虚→2→距。",
        textZhG1: "若当前距离大于4，则距（2）→虚。 \n若当前距离小于1，则虚（2）→距。",
        textKo: "현재 간격이 4 이상이라면、간격→더스트：2\n현재 간격이 1이하라면, 더스트→간격：2",
        textEn: "If the current Distance is 4 or more:\nDistance (2)→ Shadow\n\nIf the current Distance is 1 or less:\nShadow (2)→ Distance",
    },
    "01-yurina-o-n-6": {
        megami: "yurina",
        name: "圧気",
        nameEn: "Overawe",
        nameZh: "威压",
        nameZhG1: "气合斩",
        nameKo: "압기",
        ruby: "あっき",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "隙\n【破棄時】攻撃『適正距離1-4、3/-』を行う。",
        textZh: "破绽\n【破弃时】进行一次“攻击距离1-4、伤害3/-”的攻击。",
        textZhG1: "破绽\n【破弃时】进行一次“攻击距离1-4 伤害3/-”的攻击。",
        textKo: "빈틈\n 【파기시】공격『적정거리1-4、3/-』을 행한다.",
        textEn: 'Unguarded\nDisenchant: You attack with "Range: 1-4, Damage: 3/-".',
    },
    "01-yurina-A1-n-6": {
        megami: "yurina",
        anotherID: "A1",
        replace: "01-yurina-o-n-6",
        name: "癇癪玉",
        nameEn: "Outrage",
        nameZh: "掌心雷",
        nameZhG1: "暴砂雷",
        nameKo: "콩알탄",
        ruby: "かんしゃくだま ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "reaction",
        capacity: "１",
        text: "【破棄時】攻撃『適正距離0-4、1/-、対応不可、【攻撃後】相手を畏縮させる』を行う。",
        textZh: "【破弃时】进行一次“攻击距离0-4、伤害1/-、不可被对应、【攻击后】令对手畏缩”的攻击。",
        textZhG1: "【破弃时】进行一次“攻击距离0-4 伤害1/- 不可被对应，【攻击后】对手畏缩”的攻击。",
        textKo: "【파기시】공격『적정거리0-4、1/-、대응불가、【공격후】상대를 위축시킨다』를 행한다.",
        textEn: 'Disenchant: You attack with "Range: 0-4, Damage: 1/-, No Reactions, After Attack: Flinch your opponent."',
    },
    "01-yurina-o-n-7": {
        megami: "yurina",
        name: "気炎万丈",
        nameEn: "Spirit of Fire",
        nameZh: "气焰万丈",
        nameZhG1: "气焰万丈",
        nameKo: "기염만장",
        ruby: "きえんばんじょう",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "fullpower",
        capacity: "4",
        text: "【展開中】決死-あなたのライフが3以下ならば、あなたの他のメガミによる《攻撃》は+1/+1となるとともに超克を得る。",
        textZh: "【展开中】决死～若自命中的樱花结晶数小于等于3，则你的另一柱女神的《攻击》得+1/+1和超克。",
        textZhG1: "【展开中】决死-若自命中的樱花结晶的数目小于3，则你的另一柱女武神的《攻击》得+1/+1和超克。",
        textKo: "【전개중】결사-당신의 라이프가 3 이하라면, 당신의 다른 여신에 의한 《공격》은 +1/+1이 되며 초극을 얻는다.",
        textEn: "Ongoing: Resolve - All your other Megami's attacks gain +1/+1 and Overwhelm if your Life is 3 or less.",
    },
    "01-yurina-o-s-1": {
        megami: "yurina",
        name: "月影落",
        nameEn: "Tsukikage Crush",
        nameZh: "月影落",
        nameZhG1: "月影落",
        nameKo: "월영이 떨어지니",
        ruby: "つきかげおとし",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-4",
        damage: "4/4",
        cost: "7",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "01-yurina-o-s-2": {
        megami: "yurina",
        name: "浦波嵐",
        nameEn: "Uranami Storm",
        nameZh: "浦波岚",
        nameZhG1: "浦波岚",
        nameKo: "파도치는 폭풍우",
        ruby: "うらなみあらし",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "2/-",
        cost: "3",
        text: "【攻撃後】対応した《攻撃》は-2/+0となる。",
        textZh: "【攻击后】被对应的《攻击》得-2/+0。",
        textZhG1: "【攻击后】被对应的《攻击》得-2/-0。",
        textKo: "【공격후】대응한 《공격》은 -2/+0이 된다.",
        textEn: "After Attack: The attack this card was played as a Reaction to gets -2/+0.",
    },
    "01-yurina-A1-s-2": {
        megami: "yurina",
        anotherID: "A1",
        replace: "01-yurina-o-s-2",
        name: "不完全浦波嵐",
        nameEn: "Imperfect Uranami Storm",
        nameZh: "不完全浦波岚",
        nameZhG1: "不完全浦波岚",
        nameKo: "물결치는 폭풍우",
        ruby: "ふかんぜんうらなみあらし",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "3/-",
        cost: "5",
        text: "【攻撃後】対応した《攻撃》は-3/+0となる。",
        textZh: "【攻击后】被对应的《攻击》得-3/+0。",
        textZhG1: "【攻击后】被对应的《攻击》得-3/-0。",
        textKo: "【공격후】대응한 《공격》은 -3/+0이 된다.",
        textEn: "After Attack: The attack this card was played as a Reaction to gets -3/+0.",
    },
    "01-yurina-o-s-3": {
        megami: "yurina",
        name: "浮舟宿",
        nameEn: "Ukifune Serene",
        nameZh: "浮舟宿",
        nameZhG1: "浮舟宿",
        nameKo: "쪽배에서 쉬노니",
        ruby: "うきふねやどし",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "ダスト→自オーラ：5 \n----\n【即再起】決死-あなたのライフが3以下になる。",
        textZh: "虚→5→自装 \n----\n【即再起】决死～自命中的樱花结晶数小于等于3。",
        textZhG1: "虚（5）→自装 \n----\n【即再起】：决死-自命中的樱花结晶的数目小于3。",
        textKo: "더스트→자신 오라：5   \n----  \n【즉재기】결사-당신의 라이프가 3 이하가 된다.",
        textEn: "Shadow (5)→ Your Aura\n----\nImmediate Resurgence: Resolve - Your Life becomes 3 or less (from 4 or more).",
    },
    "01-yurina-o-s-4": {
        megami: "yurina",
        name: "天音揺波の底力",
        nameEn: "Yurina's Final Blow",
        nameZh: "天音摇波的底力",
        nameZhG1: "天音摇波的底力",
        nameKo: "아마네 유리나의 저력",
        ruby: "あまねゆりなのそこぢから",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "fullpower",
        range: "1-4",
        damage: "5/5",
        cost: "5",
        text: "【常時】決死-あなたのライフが3以下でないと、このカードは使用できない。",
        textZh: "【常时】决死～仅当自命中的樱花结晶数小于等于3时，才可以使用此牌。",
        textZhG1: "【常时】决死-只能当自命中的樱花结晶的数目小于3时使用此牌。",
        textKo: "【상시】결사-당신의 라이프가 3 이하가 아니면, 이 카드는 사용 할 수 없다.",
        textEn: "Forced: Resolve - You can't play this card unless your Life is 3 or less.",
    },
    "02-saine-o-n-1": {
        megami: "saine",
        name: "八方振り",
        nameEn: "Swing Rush",
        nameZh: "八方斩",
        nameZhG1: "八面斩",
        nameKo: "팔방 휘두르기",
        ruby: "はっぽうぶり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "2/1",
        text: "【攻撃後】八相-あなたのオーラが0ならば、攻撃『適正距離4-5、2/1』を行う。",
        textZh: "【攻击后】八相～若自装中没有樱花结晶，则进行一次“攻击距离4-5、伤害2/1”的攻击。",
        textZhG1: "【攻击后】八相-若自装中没有樱花结晶，则进行一次“攻击距离4-5 伤害2/1”的攻击。",
        textKo: "【공격후】팔상-당신의 오라가 0이라면, 공격『적정거리4-5、2/1』을 행한다.",
        textEn: 'After Attack: Idea - You attack with "Range: 4-5, Damage: 2/1" if you have no Sakura tokens on your Aura.',
    },
    "02-saine-o-n-2": {
        megami: "saine",
        name: "薙斬り",
        nameEn: "Cut Down",
        nameZh: "薙刀斩",
        nameZhG1: "薙刀斩",
        nameKo: "후려베기",
        ruby: "なぎぎり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "4-5",
        damage: "3/1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "02-saine-o-n-3": {
        megami: "saine",
        name: "返し刃",
        nameEn: "Cut In",
        nameZh: "回马斩",
        nameZhG1: "反身斩",
        nameKo: "칼날 반환",
        ruby: "かえしやいば",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "3-5",
        damage: "1/1",
        text: "【攻撃後】このカードを対応で使用したならば、攻撃『適正距離3-5、2/1、対応不可』を行う。",
        textZh: "【攻击后】若此牌作为对应使用，则进行一次“攻击距离3-5、伤害2/1、不可被对应”的攻击。",
        textZhG1: "【攻击后】若此牌作为对应使用，则进行一次“攻击距离3-5 伤害2/1 不可被对应”的攻击。",
        textKo: "【공격후】이 카드를 대응으로 사용했다면, 공격『적정거리3-5、2/1、대응불가』를 행한다.",
        textEn: 'After Attack: If this card was played as a Reaction, you attack with "Range: 3-5, Damage: 2/1, No Reactions".',
    },
    "02-saine-A1-n-3": {
        megami: "saine",
        anotherID: "A1",
        replace: "02-saine-o-n-3",
        name: "氷の音",
        nameEn: "Sound of Ice",
        nameZh: "冰之音",
        nameZhG1: "冰之音",
        nameKo: "얼음의 소리",
        ruby: "ひのね",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "相オーラ→ダスト：1\nこのカードを対応で使用したならば、さらに\n相オーラ→ダスト：1",
        textZh: "敌装→1→虚\n若此牌作为《对应》使用，则：敌装→1→虚",
        textZhG1: "敌装（1）→虚\n若此牌作为《对应》使用，则敌装（1）→虚。",
        textKo: "상대 오라→더스트：1  \n이 카드를 대응으로 사용했다면, 추가로 \n상대 오라→더스트：1",
        textEn: "Opponent's Aura (1)→ Shadow\nIf this card was played as a Reaction:\nOpponent's Aura (1)→ Shadow (again)",
    },
    "02-saine-o-n-4": {
        megami: "saine",
        name: "見切り",
        nameEn: "Outclass",
        nameZh: "识破",
        nameZhG1: "识破",
        nameKo: "간파",
        ruby: "みきり",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "【常時】八相-あなたのオーラが0ならば、このカードを《対応》を持つかのように相手の《攻撃》に割り込んで使用できる。\n間合⇔ダスト：1",
        textZh: "【常时】八相～若自装中没有樱花结晶，则此牌可以如《对应》牌一样对应《攻击》使用。\n距↔1↔虚",
        textZhG1: "【常时】八相-若自装中没有樱花结晶，则此牌额外具有《对应》副类别。\n距（1） ⇔ 虚",
        textKo: "【상시】팔상-당신의 오라가 0이라면, 이 카드를 《대응》을 갖는것과 같이 상대의 《공격》 에 끼어들어 사용 가능하다. \n간격⇔더스트：1",
        textEn: "Forced: Idea - You may play this card as if it were a Reaction if you have no Sakura tokens on your Aura.\n\nDistance (1)⇔ Shadow",
    },
    "02-saine-o-n-5": {
        megami: "saine",
        name: "圏域",
        nameEn: "Space for Master",
        nameZh: "圈域",
        nameZhG1: "圈域",
        nameKo: "권역",
        ruby: "けんいき",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開時】ダスト→間合：1\n【展開中】達人の間合は2大きくなる。",
        textZh: "【展开时】虚→1→距 \n【展开中】达人距离的值增大2。",
        textZhG1: "【展开时】虚（1）→距 \n【展开中】达人距离的值增大2。",
        textKo: "【전개시】더스트→간격：1  \n【전개중】달인의 간격은 2 크게 된다. ",
        textEn: "Initialize: Shadow (1)→ Distance.\n\nOngoing: Increase the size of the Mastery Zone by 2.",
    },
    "02-saine-o-n-6": {
        megami: "saine",
        name: "衝音晶",
        nameEn: "Wavering Crystal",
        nameZh: "冲音晶",
        nameZhG1: "冲音晶",
        nameKo: "축음정",
        ruby: "しょうおんしょう",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "reaction",
        capacity: "1",
        text: "【展開時】対応した《攻撃》は-1/+0となる。\n【破棄時】攻撃『適正距離0-10、1/-、対応不可』を行う。",
        textZh: "【展开时】被对应的《攻击》得-1/+0。\n【破弃时】进行一次“攻击距离0-10、伤害1/-、不可被对应”的攻击。",
        textZhG1: "【展开时】被对应的《攻击》得-1/-0 。\n【破弃时】进行一次“攻击距离0-10 伤害1/- 不可被对应”的攻击。",
        textKo: "【전개시】대응한 《공격》은 -1/+0이 된다.\n 【파기시】공격『적정거리0-10、1/-、대응불가』를 행한다.",
        textEn: 'Initialize: The attack you played this card as a Reaction to gets -1/+0.\n\nDisenchant: You attack with "Range: 0-10, Damage: 1/-, No Reactions".',
    },
    "02-saine-A1-n-6": {
        megami: "saine",
        anotherID: "A1",
        replace: "02-saine-o-n-6",
        name: "伴奏",
        nameEn: "Accompaniment",
        nameZh: "伴奏",
        nameZhG1: "伴奏",
        nameKo: "반주",
        ruby: "ばんそう",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "4",
        text: "【展開中】あなたの他のメガミの切札が1枚以上使用済ならば、各ターンの最初の相手の《攻撃》は-1/+0となる。\n【展開中】あなたのサイネの切札が1枚以上使用済ならば、各ターンにあなたが最初に使用する切札の消費は1少なくなる(0未満にはならない)。",
        textZh: "【展开中】若你有至少1张另一柱女神的王牌为使用后状态，则每回合对手的第一次《攻击》得-1/+0。\n【展开中】若你有至少1张细音的王牌为使用后状态，则每回合你使用的第一张王牌费用减小1（王牌的费用不会为负值）。",
        textZhG1: "【展开中】若你有至少一张另一柱女武神的王牌正面朝上，则每回合对手的第一次《攻击》得-1/+0 。\n【展开中】若你有至少一张细音的王牌正面朝上，则每回合你使用的第一张王牌费用减小1（王牌的消费不会为负）。",
        textKo: "【전개중】당신의 다른 여신의 비장패가 1장 이상 사용완료라면, 매 턴 첫 상대의 《공격》은 -1/+0이 된다.\n 【전개중】당신의 사이네의 비장패가 1장 이상 사용완료라면, 당신이 매 턴 처음 사용하는 비장패의 소비는 1 적게 된다(0미만으로는 되지 않는다).",
        textEn: "Ongoing: If at least one of your other Megami's Special cards is Devoted, the first attack your opponent makes each turn gets -1/+0.\n\nOngoing: If at least one of your Saine's Special cards is Devoted, the first Special you play each turn costs 1 less to play.",
    },
    "02-saine-o-n-7": {
        megami: "saine",
        name: "無音壁",
        nameEn: "Silent Wall",
        nameZh: "无音壁",
        nameZhG1: "无音壁",
        nameKo: "무음벽",
        ruby: "むおんへき",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "fullpower",
        capacity: "5",
        text: "【展開中】あなたへのダメージを解決するに際し、このカードの上に置かれた桜花結晶をあなたのオーラにあるかのように扱う。",
        textZh: "对你造成的伤害结算时，此牌上的樱花结晶视为在自装中。",
        textZhG1: "【展开中】当自装将要受到伤害时，移除此牌上的樱花结晶，直到伤害被防止或移除了此牌上最后一个樱花结晶为止。每以此法移除一个樱花结晶，便防止1点对装伤害。",
        textKo: "【전개중】당신으로의 대미지를 해결 할 때, 이 카드 위에 놓인 벚꽃 결정을 당신의 오라에 있는 것처럼 취급한다.",
        textEn: "Ongoing: Treat Sakura tokens on this card as if they were on your Aura whenever you are dealt damage.",
    },
    "02-saine-o-s-1": {
        megami: "saine",
        name: "律動弧戟",
        nameEn: "Rhythmic Arc",
        nameZh: "律动弧戟",
        nameZhG1: "律动弧戟",
        nameKo: "율동호극",
        ruby: "りつどうこげき",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "6",
        text: "攻撃『適正距離3-4、1/1』を行う。\n攻撃『適正距離4-5、1/1』を行う。\n攻撃『適正距離3-5、2/2』を行う。",
        textZh: "进行一次“攻击距离3-4、伤害1/1”的攻击。\n进行一次“攻击距离4-5、伤害1/1”的攻击。\n进行一次“攻击距离3-5、伤害2/2”的攻击。",
        textZhG1: "进行一次“攻击距离3-4 伤害1/1”的攻击。\n进行一次“攻击距离4-5 伤害1/1”的攻击。\n进行一次“攻击距离3-5 伤害2/2”的攻击。",
        textKo: "공격『적정거리3-4、1/1』을 행한다.  공격『적정거리4-5、1/1』을 행한다.  공격『적정거리3-5、2/2』을 행한다.",
        textEn: 'You attack with\n"Range: 3-4, Damage: 1/1", \n"Range: 4-5, Damage: 1/1", and \n"Range: 3-5, Damage: 2/2" \nin this order.',
    },
    "02-saine-o-s-2": {
        megami: "saine",
        name: "響鳴共振",
        nameEn: "Resonant Beat",
        nameZh: "响鸣共振",
        nameZhG1: "响鸣共振",
        nameKo: "항명공진",
        ruby: "きょうめいきょうしん",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "8",
        text: "【常時】このカードの消費は相手のオーラの数だけ少なくなる。\n相オーラ→間合：2",
        textZh: "【常时】此牌的费用减小X，X等于敌装中的樱花结晶的数目。 \n敌装→2→距",
        textZhG1: "【常时】这张卡的费用减小X，X等于敌装中的樱花结晶的数目。 \n敌装（2）→距",
        textKo: "【상시】이 카드의 소비는 상대 오라의 수 만큼 적어진다.\n 상대 오라→간격：2",
        textEn: "Forced: This card costs 1 less for each Sakura token on your opponent's Aura.\nOpponent's Aura (2)→ Distance",
    },
    "02-saine-A1-s-2": {
        megami: "saine",
        anotherID: "A1",
        replace: "02-saine-o-s-2",
        name: "二重奏:弾奏氷瞑",
        nameEn: "Duet: Chilling Tranquility",
        nameZh: "二重奏：弹奏冰瞑",
        nameZhG1: "二重奏：弹奏冰瞑",
        nameKo: "이중주:탄주빙명",
        ruby: "にじゅうそう:だんそうひょうめい",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "現在のフェイズを終了する。\n【使用済】あなたの他のメガミによる《攻撃》は+0/+1となる。\n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。",
        textZh: "结束当前阶段。\n【使用后】你的另一柱女神的《攻击》得+0/+1。\n----\n【即再起】自命受到除重铸牌库以外的1点或以上的伤害。",
        textZhG1: "结束当前阶段。\n【使用后】你的另一柱女武神的《攻击》得+0/+1。\n----\n【即再起】自命受到除重铸牌库以外的1点以上的伤害。",
        textKo: "현재 페이즈를 종료한다.\n【사용완료】당신의 다른 여신에 의한 《공격》은 +0/+1이 된다.  \n----  \n【즉재기】당신이 재구성 이외로 라이프에 1 이상의 대미지를 받는다.",
        textEn: "End the current phase.\n\nDevoted: All your other Megami's attacks gain +0/+1.\n----\nImmediate Resurgence: You take 1 or more damage to your Life, excluding reshuffle damage.",
    },
    "02-saine-o-s-3": {
        megami: "saine",
        name: "音無砕氷",
        nameEn: "Silent Icebreaker",
        nameZh: "音无碎冰",
        nameZhG1: "音无碎冰",
        nameKo: "무음쇄빙",
        ruby: "おとなしさいひょう",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "1/1",
        cost: "2",
        text: "【攻撃後】対応した《攻撃》は-1/-1となる。\n----\n【再起】八相-あなたのオーラが0である。",
        textZh: "【攻击后】被对应的《攻击》得-1/-1。\n----\n【再起】八相～自装中没有樱花结晶。",
        textZhG1: "【攻击后】被对应的《攻击》得-1/-1 。\n----\n【再起】：八相-自装等于0。",
        textKo: "【공격후】대응한 《공격》은 -1/-1이 된다.\n ----\n 【재기】팔상-당신의 오라가 0이다.",
        textEn: "After Attack: The attack you played this card as a Reaction to gets -1/-1.\n----\nResurgence: Idea - You have no Sakura tokens on your Aura.",
    },
    "02-saine-o-s-4": {
        megami: "saine",
        name: "氷雨細音の果ての果て",
        nameEn: "Saine's Final Stage",
        nameZh: "冰雨细音的终焉之末",
        nameZhG1: "冰雨细音的终焉",
        nameKo: "히사메 사이네의 종말의 끝",
        ruby: "ひさめさいねのはてのはて",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "1-5",
        damage: "5/5",
        cost: "5",
        text: "【常時】このカードは切札に対する対応でしか使用できない。",
        textZh: "【常时】仅当你对应王牌时可以使用此牌。",
        textZhG1: "【常时】只能当你对应王牌时使用此牌。",
        textKo: "【상시】이 카드는 비장패에 대한 대응으로만 사용한다.",
        textEn: "Forced: This can only be played as a Reaction to a Special card.",
    },
    "03-himika-o-n-1": {
        megami: "himika",
        name: "シュート",
        nameEn: "Shoot",
        nameZh: "射击",
        nameZhG1: "射击",
        nameKo: "슛",
        ruby: "",
        rubyEn: "",
        rubyZh: "Shoot",
        baseType: "normal",
        type: "attack",
        range: "4-10",
        damage: "2/1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "03-himika-o-n-2": {
        megami: "himika",
        name: "ラピッドファイア",
        nameEn: "Quick Shot",
        nameZh: "速射",
        nameZhG1: "速射",
        nameKo: "래피드 파이어",
        ruby: "",
        rubyEn: "",
        rubyZh: "Rapid Fire",
        baseType: "normal",
        type: "attack",
        range: "7-8",
        damage: "2/1",
        text: "【常時】連火-このカードがこのターンに使用した3枚目以降のカードならば、この《攻撃》は+1/+1となる。",
        textZh: "【常时】连火～若此牌是本回合你使用的第3张或更多的牌，则此《攻击》得+1/+1。",
        textZhG1: "【常时】连火-若本回合你已使用至少2张牌，则此《攻击》得+1/+1。",
        textKo: "【상시】연화-이 카드가 이 턴에 사용한 3장째 이후의 카드라면, 이 《공격》은 +1/+1이 된다.",
        textEn: "Forced: Inferno - This attack gains +1/+1 if this is the third or later card you've played this turn.",
    },
    "03-himika-A1-n-2": {
        megami: "himika",
        anotherID: "A1",
        replace: "03-himika-o-n-2",
        name: "火炎流",
        nameEn: "Path of Flame",
        nameZh: "火炎流",
        nameZhG1: "火炎流",
        nameKo: "화염류",
        ruby: "かえんりゅう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-3",
        damage: "2/1",
        text: "【常時】連火-このカードがこのターンに使用した3枚目以降のカードならば、この《攻撃》は+0/+1となる。",
        textZh: "【常时】连火～若此牌是本回合你使用的第3张或更多的牌，则此《攻击》得+0/+1。",
        textZhG1: "【常时】连火-若本回合你已使用至少2张牌，则此《攻击》得+0/+1。",
        textKo: "【상시】연화-이 카드가 이 턴에 사용한 3장째 이후의 카드라면, 이 《공격》은 +0/+1이 된다.",
        textEn: "Forced: Inferno - This attack gains +0/+1 if this is the third or later card you've played this turn.",
    },
    "03-himika-o-n-3": {
        megami: "himika",
        name: "マグナムカノン",
        nameEn: "Magnum",
        nameZh: "麦林加农炮",
        nameZhG1: "麦林加农炮",
        nameKo: "매그넘 캐논",
        ruby: "",
        rubyEn: "",
        rubyZh: "Magnum Cannon",
        baseType: "normal",
        type: "attack",
        range: "5-8",
        damage: "3/2",
        text: "【攻撃後】自ライフ→ダスト：1",
        textZh: "【攻击后】自命→1→虚",
        textZhG1: "【攻击后】自命（1）→虚",
        textKo: "【공격후】자신 라이프→더스트：1",
        textEn: "After Attack:\nYour Life (1)→ Shadow",
    },
    "03-himika-o-n-4": {
        megami: "himika",
        name: "フルバースト",
        nameEn: "Barrage",
        nameZh: "全弹发射",
        nameZhG1: "完全爆破",
        nameKo: "풀 버스트",
        ruby: "",
        rubyEn: "",
        rubyZh: "Full Burst",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "5-9",
        damage: "3/1",
        text: "【常時】この《攻撃》がダメージを与えるならば、相手は片方を選ぶのではなく両方のダメージを受ける。",
        textZh: "【常时】此《攻击》对敌装和敌命均造成伤害。",
        textZhG1: "【常时】对方结算伤害时，装和命需要同时结算。",
        textKo: "【상시】이 《공격》이 대미지를 준다면, 상대는 한쪽을 고르는 것이 아닌 양방 모두의 대미지를 받는다.",
        textEn: "Forced: This attack deals Damage to both Aura and Life.",
    },
    "03-himika-o-n-5": {
        megami: "himika",
        name: "バックステップ",
        nameEn: "Backstep",
        nameZh: "后撤",
        nameZhG1: "后跳",
        nameKo: "백스탭",
        ruby: "",
        rubyEn: "",
        rubyZh: "Backstep",
        baseType: "normal",
        type: "action",
        text: "カードを1枚引く。 \nダスト→間合：1",
        textZh: "抓一张牌。 \n虚→1→距",
        textZhG1: "抓一张牌。 \n虚（1）→距",
        textKo: "카드를 1장 뽑는다.   더스트→간격：1",
        textEn: "Draw a card.\n\nShadow (1)→ Distance",
    },
    "03-himika-A1-n-5": {
        megami: "himika",
        anotherID: "A1",
        replace: "03-himika-o-n-5",
        name: "殺意",
        nameEn: "Killing Intent",
        nameZh: "杀意",
        nameZhG1: "杀意",
        nameKo: "살의",
        ruby: "さつい",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "あなたの手札が0枚ならば、相オーラ→ダスト：2",
        textZh: "若你没有手牌，则：敌装→2→虚。",
        textZhG1: "若你没有手牌，则敌装（2）→虚。",
        textKo: "당신의 손패가 0장이라면, 상대 오라→더스트：2",
        textEn: "If you have no cards in your hand:\nOpponent's Aura (2)→ Shadow",
    },
    "03-himika-o-n-6": {
        megami: "himika",
        name: "バックドラフト",
        nameEn: "Backdraft",
        nameZh: "回燃",
        nameZhG1: "回燃",
        nameKo: "백 드래프트",
        ruby: "",
        rubyEn: "",
        rubyZh: "Backdraft",
        baseType: "normal",
        type: "action",
        text: "相手を畏縮させる。\n連火-このカードがこのターンに使用した3枚目以降のカードならば、このターンにあなたが次に行う他のメガミによる《攻撃》を+1/+1する。",
        textZh: "令对手畏缩。\n连火～若此牌是本回合你使用的第3张或更多的牌，则本回合你的另一柱女神的下一次《攻击》得+1/+1。",
        textZhG1: "对手畏缩。\n连火-若本回合你已使用至少2张牌，则本回合你的另一柱女武神的下一次《攻击》得+1/+1。",
        textKo: "상대를 위축시킨다。\n 연화-이 카드가 이 턴에 사용한 3장째 이후의 카드라면, 이 턴 당신이 다음에 행하는 다른 여신에 의한 《공격》을 +1/+1 한다.",
        textEn: "Flinch your opponent.\n\nInferno - If this is the third or later card you've played this turn, the next attack from your other Megami that you make this turn gains +1/+1.",
    },
    "03-himika-o-n-7": {
        megami: "himika",
        name: "スモーク",
        nameEn: "Smoke",
        nameZh: "烟幕",
        nameZhG1: "迷烟",
        nameKo: "스모크",
        ruby: "",
        rubyEn: "",
        rubyZh: "Smoke",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開中】カードの矢印(→)により間合にある桜花結晶は移動しない。",
        textZh: "【展开中】距中的樱花结晶不能被卡牌上的箭头效果移出距。",
        textZhG1: "【展开中】所有从距中移出樱花结晶的卡牌效果无效。",
        textKo: "【전개중】간격에 있는 벚꽃 결정은 카드의 화살표(→)에 의해서는 이동하지 않는다.",
        textEn: "Ongoing: Cards cannot move Sakura tokens from Distance using arrows (→).",
    },
    "03-himika-o-s-1": {
        megami: "himika",
        name: "レッドバレット",
        nameEn: "Red Bullet",
        nameZh: "真红凶弹",
        nameZhG1: "真红凶弹",
        nameKo: "레드 블릿",
        ruby: "",
        rubyEn: "",
        rubyZh: "Red Bullet",
        baseType: "special",
        type: "attack",
        range: "5-10",
        damage: "3/1",
        cost: "0",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "03-himika-o-s-2": {
        megami: "himika",
        name: "クリムゾンゼロ",
        nameEn: "Crimson Zero",
        nameZh: "绯红零时",
        nameZhG1: "绯红零时",
        nameKo: "크림즌 제로",
        ruby: "",
        rubyEn: "",
        rubyZh: "Crimson Zero",
        baseType: "special",
        type: "attack",
        range: "0-2",
        damage: "2/2",
        cost: "5",
        text: "【常時】この《攻撃》がダメージを与えるならば、相手は片方を選ぶのではなく両方のダメージを受ける。\n【常時】現在の間合が0ならば、この《攻撃》は対応不可を得る。",
        textZh: "【常时】此《攻击》对敌装和敌命均造成伤害。\n【常时】若当前距离为0，则此《攻击》得不可被对应。",
        textZhG1: "【常时】此牌对装和命均造成伤害。\n【常时】若当前距离等于0，则此《攻击》得不可被对应。",
        textKo: "【상시】이 《공격》이 대미지를 주었다면, 상대는 한쪽을 고르는 것이 아닌 양쪽의 대미지를 받는다.\n 【상시】현재 간격이 0이라면, 이 《공격》은 대응불가를 얻는다.",
        textEn: "Forced: This attack deals Damage to both Aura and Life.\n\nForced: If the current Distance is 0, this attack gains No Reactions.",
    },
    "03-himika-A1-s-2": {
        megami: "himika",
        anotherID: "A1",
        replace: "03-himika-o-s-2",
        name: "炎天・紅緋弥香",
        nameEn: "Blazing Sun - Crimson Himika",
        nameZh: "炎天·红绯弥香",
        nameZhG1: "炎天·红绯弥香",
        nameKo: "염천・쿠레나이 히미카",
        ruby: "えんてん・くれないひみか",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "fullpower",
        range: "0-6",
        damage: "X/X",
        cost: "7",
        text: "対応不可 \n【常時】Xは7から現在の間合を引いた値に等しい。 \n【攻撃後】あなたは敗北する。",
        textZh: "不可被对应\n【常时】X等于7减去当前距离。\n【攻击后】你输掉这局游戏。",
        textZhG1: "不可被对应\n【常时】X等于7减去当前距离。\n【攻击后】你输掉这局游戏。",
        textKo: "대응불가 \n 【상시】X는 7에서 현재 간격을 뺀 수치와 같다.\n 【공격후】당신은 패배한다.",
        textEn: "No Reactions\n\nForced: X is equal to 7 minus the current Distance.\n\nAfter Attack: You lose the game.",
    },
    "03-himika-o-s-3": {
        megami: "himika",
        name: "スカーレットイマジン",
        nameEn: "Scarlet Visions",
        nameZh: "猩红狂想",
        nameZhG1: "猩红狂想",
        nameKo: "스칼렛 이매진",
        ruby: "",
        rubyEn: "",
        rubyZh: "Scarlet Imagine",
        baseType: "special",
        type: "action",
        cost: "3",
        text: "カードを2枚引く。その後、あなたは手札を1枚伏せ札にする。",
        textZh: "抓2张牌，然后盖伏1张手牌。",
        textZhG1: "抓2张牌，然后盖伏一张牌。",
        textKo: "카드를 2장 뽑는다. 그 후, 당신은 손패를 1장 덮임패로 한다.",
        textEn: "Draw two cards, then discard a card.",
    },
    "03-himika-o-s-4": {
        megami: "himika",
        name: "ヴァーミリオンフィールド",
        nameEn: "Vermillion Field",
        nameZh: "真红领域",
        nameZhG1: "真红领域",
        nameKo: "버밀리언 필드",
        ruby: "",
        rubyEn: "",
        rubyZh: "Vermillion Field",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "連火-このカードがこのターンに使用した3枚目以降のカードならば、ダスト→間合：2\n----\n【再起】あなたの手札が0枚である。",
        textZh: "连火～若此牌是本回合你使用的第3张或更多的牌，则虚→2→距\n----\n【再起】你没有手牌。",
        textZhG1: "连火-若本回合你已使用至少2张牌，则虚（2）→距\n----\n【再起】：你没有手牌。",
        textKo: "연화-이 카드가 이 턴에 사용한 3장째 이후의 카드라면, 더스트→간격：2\n ----\n 【재기】당신의 손패가 0장이다.",
        textEn: "Inferno - If this is the third or later card you've played this turn:\nShadow (2)→ Distance\n----\nResurgence: You have no cards in your hand.",
    },
    "04-tokoyo-o-n-1": {
        megami: "tokoyo",
        name: "梳流し",
        nameEn: "Glancing Strike",
        nameZh: "梳流扇",
        nameZhG1: "梳流",
        nameKo: "빗어 내리기",
        ruby: "すきながし",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4",
        damage: "-/1",
        text: "【攻撃後】境地-あなたの集中力が2ならば、このカードを山札の上に戻す。",
        textZh: "【攻击后】境地～若你的集中力为2，则将此牌置于你的牌库顶。",
        textZhG1: "【攻击后】境地-若你的集中力等于2，则将此牌置于你的牌库顶。",
        textKo: "【공격후】경지-당신의 집중력이 2라면, 이 카드를 패산 위로 되돌린다.",
        textEn: "After Attack: Artistic - Put this card on the top of your deck if your Vigor is 2.",
    },
    "04-tokoyo-A1-n-1": {
        megami: "tokoyo",
        anotherID: "A1",
        replace: "04-tokoyo-o-n-1",
        name: "奏流し",
        nameEn: "Entrancing Strike",
        nameZh: "奏流乐",
        nameZhG1: "奏流",
        nameKo: "연주 내리기",
        ruby: "かなでながし",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "5",
        damage: "-/1",
        text: "【常時】あなたのトコヨの切札が1枚以上使用済ならば、この《攻撃》は対応不可を得る。 \n【攻撃後】境地-あなたの集中力が2かつ、あなたの他のメガミの切札が1枚以上使用済ならば、このカードを山札の上に置く。",
        textZh: "【常时】若你有至少1张常世的王牌处于使用后状态，则此《攻击》得不可被对应。\n【攻击后】境地～若你的集中力为2，且你有至少1张另一柱女神的王牌处于使用后状态，则将此牌置于你的牌库顶。",
        textZhG1: "【常时】若你有至少一张常世的王牌正面朝上，则此《攻击》得不可被对应。\n【攻击后】境地-若你的集中力等于2，且你有至少一张另一柱女武神的王牌正面朝上，则将此牌置于你的牌库顶。",
        textKo: "【상시】당신의 토코요의 비장패가 1장 이상 사용완료라면, 이 《공격》은 대응불가를 얻는다.\n 【공격후】경지-당신의 집중력이 2이고, 당신의 다른 여신의 비장패가 1장 이상 사용완료라면, 이 카드를 패산 위에 둔다.",
        textEn: "Forced: If at least one of your Tokoyo's Special cards is Devoted, this attack gains No Reactions.\n\nAfter Attack: Artistic - If your Vigor is 2 and at least one of your other Megami's Special cards is Devoted, put this card on the top of your deck.",
    },
    "04-tokoyo-o-n-2": {
        megami: "tokoyo",
        name: "雅打ち",
        nameEn: "Polite Return",
        nameZh: "风雅击",
        nameZhG1: "雅击",
        nameKo: "우아한 타격",
        ruby: "みやびうち",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "2-4",
        damage: "2/1",
        text: "【攻撃後】境地-あなたの集中力が2ならば、対応した切札でない《攻撃》を打ち消す。",
        textZh: "【攻击后】境地～若你的集中力为2，则打消被对应的非王牌的《攻击》。",
        textZhG1: "【攻击后】境地-若你的集中力等于2，则打消被对应的非王牌的《攻击》。",
        textKo: "【공격후】경지-당신의 집중력이 2라면, 대응한 비장패가 아닌 《공격》을 무효화한다.",
        textEn: "After Attack: Artistic - Cancel the non-Special attack you played this card as a Reaction to if your Vigor is 2.",
    },
    "04-tokoyo-o-n-3": {
        megami: "tokoyo",
        name: "跳ね兎",
        nameEn: "Rabbit Step",
        nameZh: "脱兔跃",
        nameZhG1: "脱兔",
        nameKo: "뛰어오르는 토끼",
        ruby: "はねうさぎ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の間合が3以下ならば、ダスト→間合：2",
        textZh: "若当前距离小于等于3，则：虚→2→距",
        textZhG1: "若当前距离小于3，则虚（2）→距",
        textKo: "현재 간격이 3 이하라면, 더스트→간격：2",
        textEn: "If the current Distance is 3 or less:\nShadow (2)→ Distance",
    },
    "04-tokoyo-o-n-4": {
        megami: "tokoyo",
        name: "詩舞",
        nameEn: "Song and Dance",
        nameZh: "吟诗舞",
        nameZhG1: "诗舞",
        nameKo: "시의 춤",
        ruby: "しぶ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "集中力を1得て、以下から1つを選ぶ。\n・自フレア→自オーラ：1\n・自オーラ→間合：1",
        textZh: "获得1点集中力，选择一项：\n●自气→1→自装\n●自装→1→距",
        textZhG1: "获得1点集中力，选择一项：\n1.自气（1）→自装；\n2.自装（1）→距。",
        textKo: "집중력을 1 얻고, 이하에서 하나를 고른다.\n ・자신 플레어→자신 오라：1\n ・자신 오라→간격：1",
        textEn: "Gain 1 Vigor. Choose one:\n・Your Flare (1)→ Your Aura\n・Your Aura (1)→ Distance",
    },
    "04-tokoyo-o-n-5": {
        megami: "tokoyo",
        name: "要返し",
        nameEn: "Break Point",
        nameZh: "扇回旋",
        nameZhG1: "扇回旋",
        nameKo: "부채 뒤집기",
        ruby: "かなめがえし",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "捨て札か伏せ札からカードを2枚まで選ぶ。それらのカードを好きな順で山札の底に置く。 \nダスト→自オーラ：2",
        textZh: "从你的弃牌区和盖牌区中选择至多2张牌，将它们以任意顺序置于你的牌库底。 \n虚→2→自装",
        textZhG1: "从你的弃牌区和盖牌区中选择2张牌，将它们以任意顺序置于你的牌库底。 \n虚（2）→自装",
        textKo: "버림패나 덮임패에서 카드를 2장까지 고른다. 이 카드들을 원하는 순으로 패산의 밑에 둔다. \n 더스트→자신 오라：2",
        textEn: "Choose up to two cards in your discard or played piles. Put those cards on the bottom of your deck in any order.\n\nShadow (2)→ Your Aura.",
    },
    "04-tokoyo-o-n-6": {
        megami: "tokoyo",
        name: "風舞台",
        nameEn: "Windy Stage",
        nameZh: "风舞台",
        nameZhG1: "风舞台",
        nameKo: "바람의 무대",
        ruby: "かぜぶたい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開時】間合→自オーラ：2 \n【破棄時】自オーラ→間合：2",
        textZh: "【展开时】距→2→自装 \n【破弃时】自装→2→距",
        textZhG1: "【展开时】距（2）→自装 \n【破弃时】自装（2）→距",
        textKo: "【전개시】간격→자신 오라：2 \n 【파기시】자신 오라→간격：2",
        textEn: "Initialize:\nDistance (2)→ Your Aura\n\nDisenchant:\nYour Aura (2)→ Distance",
    },
    "04-tokoyo-o-n-7": {
        megami: "tokoyo",
        name: "晴舞台",
        nameEn: "Sunny Stage",
        nameZh: "晴舞台",
        nameZhG1: "晴舞台",
        nameKo: "맑음의 무대",
        ruby: "はれぶたい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "1",
        text: "【破棄時】境地-あなたの集中力が2ならば、ダスト→自オーラ：2 \n【破棄時】あなたは集中力を1得る。",
        textZh: "【破弃时】境地～若你的集中力为2，则虚→2→自装\n【破弃时】你获得1点集中力。",
        textZhG1: "【破弃时】境地-若你的集中力等于2，则虚（2）→自装\n【破弃时】你获得1点集中力。",
        textKo: "【파기시】경지-당신의 집중력이 2라면, 더스트→자신 오라：2 \n 【파기시】당신은 집중력을 1 얻는다.",
        textEn: "Disenchant: Artistic - If your Vigor is 2:\nShadow (2)→ Your Aura\n\nDisenchant: Gain 1 Vigor.",
    },
    "04-tokoyo-A1-n-7": {
        megami: "tokoyo",
        anotherID: "A1",
        replace: "04-tokoyo-o-n-7",
        name: "陽の音",
        nameEn: "Sound of Sun",
        nameZh: "阳之音",
        nameZhG1: "阳之音",
        nameKo: "햇볕의 소리",
        ruby: "ひのね",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開時/展開中】展開時、およびあなたが《対応》カードを使用した時、その解決後にダスト→自オーラ：1 \n【展開中】相手のターンにこのカードの上の桜花結晶は移動しない。",
        textZh: "【展开时】虚→1→自装\n【展开中】每当你使用的具《对应》副类别的牌结算完毕时：虚→1→自装\n【展开中】对手的回合内，此牌上的樱花结晶不会移动。",
        textZhG1: "【展开时】虚（1）→自装\n【展开中】每当你使用的具《对应》副类别的牌结算完毕时，虚（1）→自装\n【展开中】对手的回合内不能移除此牌上的樱花结晶。",
        textKo: "【전개시/전개중】전개시, 그리고 당신이 《대응》카드를 사용했을 때, 그 해결 후 더스트→자신 오라：1 \n 【전개중】 상대 턴에는 이 카드 위의 벚꽃 결정은 이동하지 않는다.",
        textEn: "Initialize/Ongoing: When you play this, or you play a Reaction while this is in play, after that card resolves:\nShadow (1)→ Your Aura\n\nOngoing: Sakura tokens cannot leave this card on your opponent's turn.",
    },
    "04-tokoyo-o-s-1": {
        megami: "tokoyo",
        name: "久遠ノ花",
        nameEn: "Immortal Flower",
        nameZh: "久远之花",
        nameZhG1: "久远之花",
        nameKo: "영원한 꽃",
        ruby: "くおんのはな",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "-/1",
        cost: "5",
        text: "【攻撃後】対応した《攻撃》を打ち消す。",
        textZh: "【攻击后】打消被对应的《攻击》。",
        textZhG1: "【攻击后】打消被对应的《攻击》。 ",
        textKo: "【공격후】대응한 《공격》을 무효화한다.",
        textEn: "After Attack: Cancel the attack you played this card as a Reaction to.",
    },
    "04-tokoyo-o-s-2": {
        megami: "tokoyo",
        name: "千歳ノ鳥",
        nameEn: "Eternal Migrant",
        nameZh: "千岁之鸟",
        nameZhG1: "千岁之鸟",
        nameKo: "천년의 새",
        ruby: "ちとせのとり",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-4",
        damage: "2/2",
        cost: "2",
        text: "【攻撃後】山札を再構成する。 \n(その際にダメージは受けない)",
        textZh: "【攻击后】重铸牌库（你不会因此受到伤害）。",
        textZhG1: "【攻击后】重铸牌库（你不会因此受到伤害）。",
        textKo: "【공격후】패산을 재구성한다.\n (이 때에는 대미지를 받지 않는다.)",
        textEn: "After Attack: Reshuffle your deck (without taking Damage to your Life).",
    },
    "04-tokoyo-A1-s-2": {
        megami: "tokoyo",
        anotherID: "A1",
        replace: "04-tokoyo-o-s-2",
        name: "二重奏:吹弾陽明",
        nameEn: "Duet: Radiant Luminosity",
        nameZh: "二重奏：吹弹阳明",
        nameZhG1: "二重奏：吹弹阳明",
        nameKo: "이중주:취탄양명",
        ruby: "にじゅうそう：すいだんようめい",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "【使用済】あなたの開始フェイズの開始時に捨て札または伏せ札からカード1枚を選び、それを山札の底に置いてもよい。 \n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。",
        textZh: "【使用后】每当你的准备阶段开始时，你可以从你的弃牌区或盖牌区中选择1张牌，将其置于你的牌库底。\n----\n【即再起】自命受到除重铸牌库以外的1点或以上的伤害。",
        textZhG1: "【使用后】你的准备阶段开始时，你可以从你的弃牌区或盖牌区中选择一张牌，将其置于你的牌库底。\n----\n【即再起】自命受到除重铸牌库以外的1点以上的伤害。",
        textKo: "【사용완료】당신의 개시 페이즈 시작시에 버림패, 혹은 덮임패에서 카드 1장을 골라, 그것을 패산 밑에 두어도 좋다.\n ----\n 【즉재기】당신이 재구성 이외로 라이프에 1 이상의 대미지를 받는다.",
        textEn: "Devoted: At the beginning of your turn, you may put a card from your discard pile or your played pile on the bottom of your deck.\n----\nImmediate Resurgence: You take 1 or more damage to your Life, excluding reshuffle damage.",
    },
    "04-tokoyo-o-s-3": {
        megami: "tokoyo",
        name: "無窮ノ風",
        nameEn: "Perpetual Wind",
        nameZh: "无穷之风",
        nameZhG1: "无穷之风",
        nameKo: "무궁한 바람",
        ruby: "むきゅうのかぜ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-8",
        damage: "1/1",
        cost: "1",
        text: "対応不可 \n【攻撃後】相手は手札から《攻撃》でないカード1枚を捨て札にする。それが行えない場合、相手は手札を公開する。 \n----\n【再起】境地-あなたの集中力が2である。",
        textZh: "不可被对应。\n【攻击后】对手弃1张非《攻击》的牌。若不能如此做，对手须展示其手牌。\n----\n【再起】境地～你的集中力为2。",
        textZhG1: "不可被对应。\n【攻击后】对手弃一张非《攻击》的牌。若不能如此做，则对手须展示其手牌。\n----\n【再起】境地-你的集中力等于2。",
        textKo: "대응불가 \n 【공격후】상대는 손패에서 《공격》이 아닌 카드 1장을 버림패로 한다. 불가능하다면, 상대는 손패를 공개한다.\n ----\n 【재기】경지-당신의 집중력이 2이다.",
        textEn: "No Reactions\n\nAfter Attack: Your opponent puts a non-Attack card from their hand into their played pile. If they can't, they must reveal their hand.\n----\nResurgence: Artistic - Your Vigor is 2.",
    },
    "04-tokoyo-o-s-4": {
        megami: "tokoyo",
        name: "常世ノ月",
        nameEn: "Eternal Moon",
        nameZh: "常世之月",
        nameZhG1: "常世之月",
        nameKo: "토코요의 달",
        ruby: "とこよのつき",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "あなたの集中力は2になり、相手の集中力は0になり、相手を畏縮させる。",
        textZh: "你的集中力变为2，对手的集中力变为0，令对手畏缩。",
        textZhG1: "你的集中力变为2，对手的集中力变为0，对手畏缩。",
        textKo: "당신의 집중력이 2가 되고, 상대의 집중력이 0이 되고, 상대를 위축시킨다。",
        textEn: "Your Vigor becomes 2. Your opponent's Vigor becomes 0. Flinch your opponent.",
    },
    "05-oboro-o-n-1": {
        megami: "oboro",
        name: "鋼糸",
        nameEn: "Steel Strings",
        nameZh: "钢丝",
        nameZhG1: "钢丝",
        nameKo: "철사",
        ruby: "こうし",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-4",
        damage: "2/2",
        text: "設置",
        textZh: "设置",
        textZhG1: "设置",
        textKo: "설치",
        textEn: "Trap",
    },
    "05-oboro-o-n-2": {
        megami: "oboro",
        name: "影菱",
        nameEn: "Caltrops",
        nameZh: "影菱",
        nameZhG1: "影菱",
        nameKo: "그림자 마름",
        ruby: "かげびし",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2",
        damage: "2/1",
        text: "設置　対応不可\n【攻撃後】このカードを伏せ札から使用したならば、相手の手札を見てその中から1枚を選び、それを伏せ札にする。",
        textZh: "设置 不可被对应 \n【攻击后】若你从盖牌区使用此牌，则检视对手的手牌，盖伏其中1张。",
        textZhG1: "设置 不可被对应 \n【攻击后】若你从盖牌区使用此牌，则检视对手的手牌，盖伏其中一张。",
        textKo: "설치 대응불가\n 【공격후】이 카드를 덮임패에서 사용했다면, 상대의 손패를 보고 그 중 1장을 골라, 그것을 덮임패로 한다.",
        textEn: "Trap    No Reactions\n\nAfter Attack: If this card was played from your discard pile, look at your opponent's hand. Choose one of those cards and put it into their discard pile.",
    },
    "05-oboro-o-n-3": {
        megami: "oboro",
        name: "斬撃乱舞",
        nameEn: "Rush of Blades",
        nameZh: "斩击乱舞",
        nameZhG1: "斩击乱舞",
        nameKo: "참격난무",
        ruby: "ざんげきらんぶ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "2-4",
        damage: "3/2",
        text: "【常時】相手がこのターン中にオーラへのダメージを受けているならば、この《攻撃》は+1/+1となる。",
        textZh: "【常时】若本回合内敌装受到过伤害，则此《攻击》得+1/+1。",
        textZhG1: "【常时】若本回合内敌装受到过伤害，则此《攻击》得+1/+1",
        textKo: "【상시】상대가 이 턴 안에 오라로의 대미지를 받았다면, 이 《공격》은 +1/+1이 된다.",
        textEn: "Forced: This attack gains +1/+1 if your opponent has taken damage to their Aura this turn.",
    },
    "05-oboro-o-n-4": {
        megami: "oboro",
        name: "忍歩",
        nameEn: "Ninpo-Walk",
        nameZh: "忍步",
        nameZhG1: "忍步",
        nameKo: "닌자걸음",
        ruby: "にんぽ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "設置 \n間合⇔ダスト：1 \nこのカードを伏せ札から使用したならば、伏せ札から設置を持つカードを1枚使用してもよい。",
        textZh: "设置\n距↔1↔虚\n若你从盖牌区中使用此牌，则你可以从盖牌区中额外使用1张具设置关键字的牌。",
        textZhG1: "设置\n距 (1)⇔ 虚\n若你从盖牌区中使用此牌，则你可以从盖牌区中额外使用一张具设置关键字的牌。",
        textKo: "설치 \n 간격⇔더스트：1 \n 이 카드를 덮임패에서 사용했다면, 덮임패에서 설치를 갖는 카드를 1장 사용해도 좋다.",
        textEn: "Trap\n\nDistance (1)⇔ Shadow\n\nIf this card was played from your discard pile, you may play a card with Trap from your discard pile.",
    },
    "05-oboro-o-n-5": {
        megami: "oboro",
        name: "誘導",
        nameEn: "Induce",
        nameZh: "诱导",
        nameZhG1: "诱导",
        nameKo: "유도",
        ruby: "ゆうどう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "設置\n以下から１つを選ぶ。\n・間合→相オーラ：1\n・相オーラ→相フレア：1",
        textZh: "设置 \n选择一项：\n●距→1→敌装\n●敌装→1→敌气",
        textZhG1: "设置 \n选择一项：\n1.距（1）→敌装\n2.敌装（1）→敌气",
        textKo: "설치\n 이하에서 하나를 고른다.\n ・간격→상대 오라：1\n ・상대 오라→상대 플레어：1",
        textEn: "Trap\n\nChoose one:\n・Distance (1)→ Opponent's Aura\n・Opponent's Aura (1)→ Opponent's Flare",
    },
    "05-oboro-o-n-6": {
        megami: "oboro",
        name: "分身の術",
        nameEn: "Shadow Cloning",
        nameZh: "分身术",
        nameZhG1: "分身术",
        nameKo: "분신술",
        ruby: "ぶんしんのじゅつ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "伏せ札から《全力》でないカードを1枚選び、そのカードを使用する。その後、そのカードが捨て札にあるならば捨て札からもう1回使用する。《攻撃》カードが使用されたならばそれらの《攻撃》は対応不可を得る（2回ともに対応不可を得る）。",
        textZh: "从盖牌区中选择1张非《全力》的牌使用。若以此法使用的牌结算完毕进入弃牌区，则从弃牌区中再次使用之。若所选择的牌是《攻击》牌，则此《攻击》得不可被对应（2次都获得）。",
        textZhG1: "从盖牌区中选择一张非《全力》的牌使用。当所选择的牌结算完毕进入弃牌区时，从弃牌区中再次使用之（这个效果仅结算一次）。若所选择的牌是《攻击》牌，则此《攻击》得不可被对应（2次都获得）。",
        textKo: "덮임패에서 《전력》이 아닌 카드를 1장 골라, 그 카드를 사용한다. 그 후, 그 카드가 버림패에 있다면 버림패에서 한번 더 사용한다. 《공격》카드가 사용됐다면 그 《공격》들은 대응불가를 얻는다（2번 모두 대응불가를 얻는다）.",
        textEn: "Reveal a non-Throughout card in your discard pile and play it. Then play it again if it is in your played pile. If the played card is an Attack card, it gains No Reactions (both times).",
    },
    "05-oboro-o-n-7": {
        megami: "oboro",
        name: "生体活性",
        nameEn: "Revitalize",
        nameZh: "生物活性",
        nameZhG1: "生物活性",
        nameKo: "생체활성",
        ruby: "せいたいかっせい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "4",
        text: "隙　設置 \n【破棄時】あなたの使用済の切札を1枚選び、それを未使用に戻す。",
        textZh: "破绽 设置 \n【破弃时】将你的1张处于使用后状态的王牌变为未使用状态。",
        textZhG1: "破绽 设置 \n【破弃时】将你的一张面朝上的王牌翻面。",
        textKo: "빈틈 설치 \n 【파기시】당신의 사용완료 비장패를 1장 골라, 그것을 미사용으로 되돌린다.",
        textEn: "Unguarded    Trap\n\nDisenchant: Choose one of your Devoted Special cards and turn it face-down.",
    },
    "05-oboro-o-s-1": {
        megami: "oboro",
        name: "熊介",
        nameEn: "Kuma-Suke",
        nameZh: "熊介",
        nameZhG1: "熊介",
        nameKo: "쿠마스케",
        ruby: "くますけ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "fullpower",
        range: "3-4",
        damage: "2/2",
        cost: "4",
        text: "【攻撃後】攻撃『適正距離3-4、2/2』をX回行う。Xはあなたの伏せ札の枚数に等しい。",
        textZh: "【攻击后】进行X次“攻击距离3-4、伤害2/2”的攻击，X等于你盖牌区中的牌张数。",
        textZhG1: "【攻击后】进行X次“攻击距离3-4 伤害2/2”的攻击。X等于你盖牌区中的牌张数。 ",
        textKo: "【공격후】공격『적정거리3-4、2/2』을 X번 행한다. X는 당신의 덮임패 장수와 같다.",
        textEn: 'After Attack: You attack with "Range: 3-4, Damage: 2/2" X times, where X is the number of cards in your discard pile.',
    },
    "05-oboro-o-s-2": {
        megami: "oboro",
        name: "鳶影",
        nameEn: "Tobi-Kage",
        nameZh: "鸢影",
        nameZhG1: "鸢影",
        nameKo: "토비카게",
        ruby: "とびかげ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "3",
        text: "伏せ札から《全力》でないカードを1枚選び、そのカードを使用してもよい。この際、このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。",
        textZh: "从盖牌区中选择1张非《全力》的牌使用。若此牌对应了一个《攻击》，则视为所选择的牌也对应了那个《攻击》。",
        textZhG1: "从盖牌区中选择一张非《全力》的牌使用。若此牌对应了一个《攻击》，则视为所选择的牌代替此牌对应了那个《攻击》。",
        textKo: "덮임패에서 《전력》이 아닌 카드를 1장 골라, 그 카드를 사용해도 좋다. 이 때, 이 카드가 대응하는 《공격》이 있다면, 사용된 카드는 그것에 대응하고 있는것으로 취급한다.",
        textEn: "Reveal a non-Throughout card in your discard pile and play it. If this card was played as a Reaction to an attack, treat that card as if it were played as a Reaction to that attack.",
    },
    "05-oboro-o-s-3": {
        megami: "oboro",
        name: "虚魚",
        nameEn: "Uro-Uo",
        nameZh: "虚鱼",
        nameZhG1: "虚鱼",
        nameKo: "우로우오",
        ruby: "うろうお",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "【使用済】あなたは1回の再構成に対して、設置を持つカードを任意の枚数、任意の順で使用できる。",
        textZh: "【使用后】每当你将重铸牌库时，你可以以任意顺序使用任意张具设置关键字的牌。",
        textZhG1: "【使用后】当你将重铸牌库时，你可以以任意顺序使用任意张具设置关键字的牌。",
        textKo: "【사용완료】당신은 한 번의 재구성에 대해, 설치를 갖는 카드를 임의의 장수, 임의의 순서로 사용 가능하다.",
        textEn: "Devoted: You may play any number of cards with Trap from your discard pile in the order of your choosing just before you reshuffle your deck.",
    },
    "05-oboro-o-s-4": {
        megami: "oboro",
        name: "壬蔓",
        nameEn: "Mi-Kazura",
        nameZh: "壬蔓",
        nameZhG1: "壬蔓",
        nameKo: "미카즈라",
        ruby: "みかずら",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "0",
        text: "相オーラ→自フレア：1 \n----\n【再起】あなたのフレアが0である。",
        textZh: "敌装→1→自气 \n----\n【再起】自气中的樱花结晶的数目等于0。",
        textZhG1: "敌装（1）→自气 \n----\n【再起】自气中没有樱花结晶。",
        textKo: "상대 오라→자신 플레어：1 \n ----\n 【재기】당신의 플레어가 0이다.",
        textEn: "Opponent's Aura (1)→ Your Flare\n----\nResurgence: There are no Sakura tokens on your Flare.",
    },
    "06-yukihi-o-n-1": {
        megami: "yukihi",
        name: "しこみばり / ふくみばり",
        nameEn: "Hidden Needles / Kept Needles",
        nameZh: "藏针 / 含针",
        nameZhG1: "藏针/含针",
        nameKo: "숨겨둔 바늘/움켜쥔 바늘",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-6",
        rangeOpened: "0-2",
        damage: "3/1",
        damageOpened: "1/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        textOpened: "",
        textOpenedZh: "",
        textOpenedZhG1: "",
        textOpenedKo: "",
        textOpenedEn: "",
    },
    "06-yukihi-o-n-2": {
        megami: "yukihi",
        name: "しこみび / ねこだまし",
        nameEn: "Preparation / Fake Out",
        nameZh: "预演 / 猫骗",
        nameZhG1: "匍匐/猫跳",
        nameKo: "불꽃장치/손바닥치기",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "5-6",
        rangeOpened: "0-2",
        damage: "1/1",
        damageOpened: "1/1",
        text: "【攻撃後】このカードを手札に戻し、傘の開閉を行う。 ",
        textZh: "【攻击后】将此牌置入你的手牌，进行一次伞的开合操作。",
        textZhG1: "【攻击后】将此牌置入你的手牌，进行一次伞的开合操作。 开伞：（无）",
        textKo: "【공격후】이 카드를 손패로 되돌리고, 우산의 개폐를 행한다.",
        textEn: "After Attack: Put this card into your hand. Open your umbrella. If it was already open, close it instead.",
        textOpened: "",
        textOpenedZh: "（无）",
        textOpenedZhG1: "",
        textOpenedKo: "",
        textOpenedEn: "",
    },
    "06-yukihi-o-n-3": {
        megami: "yukihi",
        name: "ふりはらい / たぐりよせ",
        nameEn: "Hidden Power / Chain Reel",
        nameZh: "掸去 / 拖拽",
        nameZhG1: "拒/引",
        nameKo: "휘둘러치기/끌어당기기",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-5",
        rangeOpened: "0-2",
        damage: "1/1",
        damageOpened: "1/1",
        text: "【攻撃後】ダスト⇔間合：1 ",
        textZh: "【攻击后】距↔1↔虚",
        textZhG1: "【攻击后】距（1）⇔ 虚 ",
        textKo: "【공격후】더스트⇔간격：1",
        textEn: "After Attack: \nDistance (1)⇔ Shadow",
        textOpened: "【攻撃後】間合→ダスト：2",
        textOpenedZh: "【攻击后】距→2→虚",
        textOpenedZhG1: "【攻击后】距（2）→虚",
        textOpenedKo: "【공격후】간격→더스트：2",
        textOpenedEn: "After Attack:\nDistance (2)→ Shadow",
    },
    "06-yukihi-o-n-4": {
        megami: "yukihi",
        name: "ふりまわし / つきさし",
        nameEn: "Swing / Pierce",
        nameZh: "挥舞 / 突刺",
        nameZhG1: "挥舞/突刺",
        nameKo: "휘두르기/찔러넣기",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "4-6",
        rangeOpened: "0-2",
        damage: "5/-",
        damageOpened: "-/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        textOpened: "",
        textOpenedZh: "",
        textOpenedZhG1: "",
        textOpenedKo: "",
        textOpenedEn: "",
    },
    "06-yukihi-o-n-5": {
        megami: "yukihi",
        name: "かさまわし",
        nameEn: "Wield",
        nameZh: "舞伞",
        nameZhG1: "伞飞转",
        nameKo: "우산 돌리기",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "(このカードは使用しても効果はない) \n【常時】あなたが傘の開閉を行った時、このカードを手札から公開してもよい。そうした場合、 \nダスト→自オーラ：1\n",
        textZh: "（使用此牌没有任何效果）\n【常时】当你进行伞的开合操作时，你可以从手牌中展示此牌。若如此做，则：\n虚→1→自装",
        textZhG1: "（使用此牌没有任何效果）\n【常时】当你进行伞的开合操作时，你可以从手牌中展示此牌。若如此做，则虚（1）→自装",
        textKo: "(이 카드는 사용해도 효과가 없다) \n 【상시】당신이 우산의 개폐를 행했을 때, 이 카드를 손패에서 공개해도 좋다. 그럴 경우,\n 더스트→자신 오라：1",
        textEn: "(Nothing happens if you play this card.)\n\nForced: Whenever you open or close your umbrella, you may reveal this card from your hand and:\nShadow (1)→ Your Aura",
    },
    "06-yukihi-o-n-6": {
        megami: "yukihi",
        name: "ひきあし / もぐりこみ",
        nameEn: "Pull Back / Advance",
        nameZh: "撤步 / 潜进",
        nameZhG1: "闪回/潜进",
        nameKo: "뒷걸음질/파고들기",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "ダスト→間合：1 ",
        textZh: "虚→1→距",
        textZhG1: "虚（1）→距 \n",
        textKo: "더스트→간격：1",
        textEn: "Shadow (1)→ Distance",
        textOpened: "間合→ダスト：1",
        textOpenedZh: "距→1→虚",
        textOpenedZhG1: "距（1）→虚",
        textOpenedKo: "간격→더스트：1",
        textOpenedEn: "Distance (1)→ Shadow",
    },
    "06-yukihi-o-n-7": {
        megami: "yukihi",
        name: "えんむすび",
        nameEn: "Bind",
        nameZh: "结缘",
        nameZhG1: "结缘",
        nameKo: "인연 맺기",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開時】間合→ダスト：1 \n【破棄時】ダスト→間合：1 \n【常時】あなたの傘が開いているならば、このカードの矢印(→)は逆になる。",
        textZh: "【展开时】距→1→虚 \n【破弃时】虚→1→距 \n【常时】若伞面处于开伞状态，则此牌效果中所有的箭头反向。",
        textZhG1: "【展开时】距（1）→虚 \n【破弃时】虚（1）→距 \n【常时】当伞面处于开伞状态时，此牌效果中所有的箭头反向。",
        textKo: "【전개시】간격→더스트：1 \n 【파기시】더스트→간격：1 \n 【상시】당신의 우산이 펴져있다면、이 카드의 화살표(→)는 반대가 된다.",
        textEn: "Initialize:\nDistance (1)→ Shadow\n\nDisenchant:\nShadow (1)→ Distance\n\nForced: If your umbrella is open, the arrows on this card are reversed.",
    },
    "06-yukihi-o-s-1": {
        megami: "yukihi",
        name: "はらりゆき",
        nameEn: "Gentle Snow",
        nameZh: "纷扬如雪",
        nameZhG1: "纷扬如雪",
        nameKo: "부드러운 눈꽃",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-5",
        rangeOpened: "0-1",
        damage: "3/1",
        damageOpened: "0/0",
        cost: "2",
        text: "",
        textZh: "",
        textZhG1: "无\n",
        textKo: "",
        textEn: "",
        textOpened: "----\n【即再起】あなたが傘の開閉を行う。 ",
        textOpenedZh: "----\n【即再起】进行一次伞的开合操作。",
        textOpenedZhG1: "无 \n----\n【即再起】进行伞的开合操作",
        textOpenedKo: "----\n【즉재기】당신이 우산의 개폐를 행한다.",
        textOpenedEn: "----\nImmediate Resurgence: You open or close your umbrella.",
    },
    "06-yukihi-o-s-2": {
        megami: "yukihi",
        name: "ゆらりび",
        nameEn: "Swaying Flame",
        nameZh: "明灭如灯",
        nameZhG1: "明灭如灯",
        nameKo: "일렁이는 불꽃",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "4-6",
        rangeOpened: "0",
        damage: "0/0",
        damageOpened: "4/5",
        cost: "5",
        text: "",
        textZh: "",
        textZhG1: "无\n",
        textKo: "",
        textEn: "",
        textOpened: "",
        textOpenedZh: "",
        textOpenedZhG1: "无",
        textOpenedKo: "",
        textOpenedEn: "",
    },
    "06-yukihi-o-s-3": {
        megami: "yukihi",
        name: "どろりうら",
        nameEn: "Soft Heart",
        nameZh: "交融其心",
        nameZhG1: "无常其心",
        nameKo: "물컹이는 마음",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "fullpower",
        capacity: "7",
        cost: "3",
        text: "【展開中】あなたのユキヒの《攻撃》は傘を開いた状態と傘を閉じた状態両方の適正距離を持つ。",
        textZh: "【展开中】你的雪灯的《攻击》牌攻击距离改为开伞时与闭伞时攻击距离的叠加。",
        textZhG1: "【展开中】你的雪灯的《攻击》牌攻击距离改为开伞时与闭伞时攻击距离的叠加。",
        textKo: "【전개중】당신의 유키히의《공격》은 우산을 연 상태와 우산을 닫은 상태 양방의 적정거리를 가진다.",
        textEn: "Ongoing: The Range of your attacks from Yukihi's cards are their Open and Closed Ranges combined.",
    },
    "06-yukihi-o-s-4": {
        megami: "yukihi",
        name: "くるりみ",
        nameEn: "Abrupt Transformation",
        nameZh: "复返其身",
        nameZhG1: "复返其身",
        nameKo: "변모하는 얼굴",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "1",
        text: "傘の開閉を行う。 \nダスト→自オーラ：1",
        textZh: "进行一次伞的开合操作。\n虚→1→自装",
        textZhG1: "进行一次伞的开合操作。\n虚（1）→自装",
        textKo: "우산의 개폐를 행한다. \n 더스트→자신 오라：1",
        textEn: "Open or close your umbrella.\n\nShadow (1)→ Your Aura",
    },
    "07-shinra-o-n-1": {
        megami: "shinra",
        name: "立論",
        nameEn: "Argue",
        nameZh: "立证",
        nameZhG1: "立论",
        nameKo: "입론",
        ruby: "りつろん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-7",
        damage: "2/-",
        text: "【常時】相手の山札に2枚以上のカードがあるならば、この《攻撃》はダメージを与える代わりに山札の上から2枚を伏せ札にする。",
        textZh: "【常时】若对手牌库的牌张数大于等于2，以盖伏对手牌库顶的2张牌来代替此《攻击》造成的伤害。",
        textZhG1: "【常时】若对手牌库的牌张数大于2，则防止此《攻击》将造成的伤害。每以此法防止1点伤害，便盖伏对手牌库顶的一张牌。",
        textKo: "【상시】상대의 패산에 2장 이상 카드가 있다면, 이 《공격》은 대미지를 주는 대신 패산의 위에서 2장을 덮임패로 한다.",
        textEn: "Forced: If your opponent's deck has 2 or more cards, this attack puts the top 2 cards of your opponent's deck into their discard pile instead of dealing damage.",
    },
    "07-shinra-o-n-2": {
        megami: "shinra",
        name: "反論",
        nameEn: "Protest",
        nameZh: "反驳",
        nameZhG1: "反论",
        nameKo: "반론",
        ruby: "はんろん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "2-7",
        damage: "1/-",
        text: "【攻撃後】対応した切札でなく、オーラへのダメージが3以上である《攻撃》のダメージを打ち消す。 \n【攻撃後】相手はカードを1枚引く。",
        textZh: "【攻击后】若被对应的《攻击》非王牌且对装伤害大于等于3，则打消其将造成的所有伤害（其攻击后效果依然结算）。\n【攻击后】对手抓1张牌。",
        textZhG1: "【攻击后】若被对应的《攻击》非王牌且对装伤害大于3，则防止其将造成的所有伤害。\n【攻击后】对手抓一张牌。",
        textKo: "【공격후】대응한 카드가 비장패가 아니면서, 오라로의 대미지가 3 이상인 《공격》의 대미지를 무효화한다.\n 【공격후】상대는 카드를 1장 뽑는다.",
        textEn: "After Attack: Cancel the damage of the non-Special attack you played this card as a Reaction to if that attack has 3 or more Damage to Aura.\n\nAfter Attack: Your opponent draws a card.",
    },
    "07-shinra-o-n-3": {
        megami: "shinra",
        name: "詭弁",
        nameEn: "Sophism",
        nameZh: "诡辩",
        nameZhG1: "诡辩",
        nameKo: "궤변",
        ruby: "きべん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "3-8",
        damage: "-/1",
        text: "【攻撃後】計略を実行し、次の計略を準備する。 \n[神算] 相手の山札の上から3枚を伏せ札にする。 \n[鬼謀] 相手の捨て札にあるカードを1枚選び、それを使用してもよい。",
        textZh: "【攻击后】实行当前计略，准备下个计略。 \n----\n[神算] 盖伏对手牌库顶的3张牌。 \n----\n[鬼谋] 你可以使用对手弃牌区中的1张牌。",
        textZhG1: "【攻击后】实行当前计略，准备下个计略。 \n神算：盖伏对手牌库顶的3张牌。 \n鬼谋：你可以使用对手弃牌区中的一张牌。",
        textKo: "【공격후】계략을 실행하고, 다음 계략을 준비한다.\n [신산]상대의 패산 위에서 3장을 덮임패로 한다.\n [귀모]상대의 버림패에 있는 카드 1장을 골라, 그것을 사용해도 좋다.",
        textEn: "After Attack: Enact your current Plan, then prepare your next one.\n\nDivine - Put the top 3 cards of your opponent's deck into their discard pile.\n\nDevious - You may choose and play a card in your opponent's played pile.",
    },
    "07-shinra-o-n-4": {
        megami: "shinra",
        name: "引用",
        nameEn: "Replicate",
        nameZh: "引用",
        nameZhG1: "引用",
        nameKo: "인용",
        ruby: "いんよう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "相手の手札を見て、《攻撃》カードを1枚選んでもよい。そうした場合、そのカードを使用するか伏せ札にする。その後、そのカードが《全力》を持つならば現在のフェイズを終了する。",
        textZh: "检视对手的手牌，你可以从中选择1张《攻击》牌。\n若如此做，你可以使用或者盖伏所选择的牌。\n若所选择的牌具有《全力》副类别，则结束当前阶段。",
        textZhG1: "检视对手的手牌，你可以从中选择一张《攻击》牌。选择一项：1.使用所选择的牌；2.盖伏所选择的牌。若所选择的牌具有《全力》副类别，则结束当前阶段。",
        textKo: "상대의 손패를 보고, 《공격》카드를 1장 골라도 좋다. 그럴 경우, 그 카드를 사용하거나 덮임패로 한다. 그 후, 그 카드가 《전력》을 갖는다면 현재 페이즈를 종료한다.",
        textEn: "Look at your opponent's hand. You may choose an Attack card from it and either play it or put it into their discard pile. If you chose a Throughout card this way, end the current phase.",
    },
    "07-shinra-o-n-5": {
        megami: "shinra",
        name: "煽動",
        nameEn: "Agitate",
        nameZh: "煽动",
        nameZhG1: "煽动",
        nameKo: "선동",
        ruby: "せんどう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "計略を実行し、次の計略を準備する。 \n[神算] ダスト→間合：1 \n[鬼謀] 間合→相オーラ：1",
        textZh: "实行当前计略，准备下个计略。\n----\n[神算] 虚→1→距\n----\n[鬼谋] 距→1→敌装",
        textZhG1: "实行当前计略，准备下个计略。神算：虚（1）→距 鬼谋：距（1）→敌装",
        textKo: "계략을 실행하고, 다음 계략을 준비한다.\n [신산] 더스트→간격：1 \n [귀모] 간격→상대 오라：1",
        textEn: "Enact your current Plan, then prepare your next one.\n\nDivine -\nShadow (1)→ Distance\n\nDevious -\nDistance (1)→ Opponent's Aura",
    },
    "07-shinra-o-n-6": {
        megami: "shinra",
        name: "壮語",
        nameEn: "Eloquence",
        nameZh: "壮语",
        nameZhG1: "壮语",
        nameKo: "장담",
        ruby: "そうご",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【破棄時】計略を実行し、次の計略を準備する。 \n[神算] あなたの集中力は1増加し、このカードを山札の一番上に置く。 \n[鬼謀] 相手は手札が2枚以上ならば、手札を1枚になるまで捨て札にする。相手の集中力は0になる。",
        textZh: "【破弃时】实行当前计略，准备下个计略。\n----\n[神算] 你获得1点集中力，将此牌置于你的牌库顶。\n----\n[鬼谋] 若对手的手牌不少于2张，则弃牌直到只剩1张。对手的集中力变为0。",
        textZhG1: "【破弃时】实行当前计略，准备下个计略。\n神算：你获得1点集中力，将此牌置于你的牌库顶。\n鬼谋：若对手的手牌多于2张，则弃至1张。对手的集中力变为0。",
        textKo: "【파기시】계략을 실행하고, 다음 계략을 준비한다.\n [신산] 당신의 집중력은 1 증가하고, 이 카드를 패산의 맨 위에 둔다.\n [귀모] 상대는 손패가 2장 이상이라면, 손패를 1장이 될 때까지 버림패로 한다. 상대의 집중력은 0이 된다.",
        textEn: "Disenchant: Enact your current Plan, then prepare your next one.\n\nDivine - Gain 1 Vigor. Put this card on the top of your deck.\n\nDevious - Your opponent's Vigor becomes 0. If they have 2 or more cards in hand, they must put cards from their hand into their played pile until they have 1 card in hand.",
    },
    "07-shinra-o-n-7": {
        megami: "shinra",
        name: "論破",
        nameEn: "Confuse",
        nameZh: "驳倒",
        nameZhG1: "论破",
        nameKo: "논파",
        ruby: "ろんぱ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "4",
        text: "【展開時】相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n【破棄時】このカードに封印されたカードを相手の捨て札に戻す。",
        textZh: "【展开时】选择对手弃牌区中的1张牌，封印于此牌下。 \n【破弃时】将被此牌封印的牌置入对手的弃牌区。",
        textZhG1: "【展开时】选择对手弃牌区中的一张牌，封印于此牌下。 \n【破弃时】将被此牌封印的牌置入对手的弃牌区。",
        textKo: "【전개시】상대의 버림패에 있는 카드를 1장 골라, 이 카드 밑에 봉인한다.\n 【파기시】이 카드에 봉인 된 카드를 상대의 버림패로 되돌린다.",
        textEn: "Initialize: Choose a card in your opponent's played pile. Seal it.\n\nDisenchant: Put the sealed card in your opponent's played pile.",
        sealable: true,
    },
    "07-shinra-o-s-1": {
        megami: "shinra",
        name: "完全論破",
        nameEn: "Shake the Mind",
        nameZh: "完美驳倒",
        nameZhG1: "完全论破",
        nameKo: "완전논파",
        ruby: "かんぜんろんぱ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n(ゲーム中に戻ることはない)",
        textZh: "选择对手弃牌区中的1张牌，封印于此牌下。\n（本局游戏不再归还）",
        textZhG1: "选择对手弃牌区中的一张牌，封印在此牌下（本局游戏不再归还）。",
        textKo: "상대의 버림패에 있는 카드 1장을 골라, 이 카드 밑에 봉인한다.\n (게임 중에 되돌아오는 일은 없다.)",
        textEn: "Choose a card in your opponent's played pile. Seal it.",
        sealable: true,
    },
    "07-shinra-o-s-2": {
        megami: "shinra",
        name: "皆式理解",
        nameEn: "Infer the Totality",
        nameZh: "彻底理解",
        nameZhG1: "诸式理解",
        nameKo: "개식이해",
        ruby: "かいしきりかい",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "計略を実行し、次の計略を準備する。 \n[神算] あなたの捨て札または使用済の切札から、消費を支払わずに《付与》カード1枚を使用する。そのカードが《全力》ならば現在のフェイズを終了する。 \n[鬼謀] 切札でない相手の付与札を1枚選ぶ。その上の桜花結晶全てをダストに送る。",
        textZh: "实行当前计略，准备下个计略。\n----\n[神算] 从你的弃牌区或处于使用后状态的王牌中选择1张《付与》牌，使用之且不需支付其费用。若所选择的牌具有《全力》副类别，则结束当前阶段。\n----\n[鬼谋] 选择对手的1张非王牌的展开中的《付与》牌，将其上所有樱花结晶移至虚。",
        textZhG1: "实行当前计略，准备下个计略。\n神算：从你的弃牌区与面朝上的王牌中选择一张《付与》牌使用，而不需支付其费用。若所选择的牌具有《全力》副类别，则结束当前阶段。\n鬼谋：选择对手的一张非王牌的展开中的《付与》牌，将其上所有樱花结晶移至虚。",
        textKo: "계략을 실행하고, 다음 계략을 준비한다.\n [신산]당신의 버림패 혹은 사용완료 비장패에서, 소비를 지불하지 않고 《부여》카드 1장을 사용한다. 그 카드가 《전력》이라면 현재 페이즈를 종료한다.\n [귀모] 비장패가 아닌 상대의 부여패를 1장 고른다. 그 위의 벚꽃 결정 모두를 더스트로 보낸다.",
        textEn: "Enact your current Plan, then prepare your next one.\n\nDivine - Choose an Enhancement in your played pile, or one of your Devoted Special Enhancements. Play that card without paying its cost. If that card is Throughout, end the current phase.\n\nDevious - Choose one of your opponent's non-Special Enhancements. Move all Sakura tokens on it to Shadow.",
    },
    "07-shinra-o-s-3": {
        megami: "shinra",
        name: "天地反駁",
        nameEn: "Refute the World",
        nameZh: "天地反驳",
        nameZhG1: "天地反驳",
        nameKo: "천지반박",
        ruby: "てんちはんぱく",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "fullpower",
        capacity: "5",
        cost: "2",
        text: "【展開中】あなたの《攻撃》のオーラへのダメージとライフへのダメージを入れ替える。 \n（ダメージの入れ替えは、ダメージの増減より先に適用される）",
        textZh: "【展开中】交换你的《攻击》牌对装和命的伤害。\n（交换优先于修正结算）",
        textZhG1: "【展开中】交换你的《攻击》牌对装和命的基础伤害（交换优先于修正结算）。",
        textKo: "【전개중】당신의 《공격》의 오라로의 대미지와 라이프로의 대미지를 바꾼다.\n （대미지의 증감보다 먼저 적용된다.）",
        textEn: "Ongoing: Your attacks that deal damage to Aura(Life) deal damage to Life(Aura) instead.\n(This takes effect before any modifier to Damage is applied.)",
    },
    "07-shinra-o-s-4": {
        megami: "shinra",
        name: "森羅判証",
        nameEn: "Prove the Nature",
        nameZh: "森罗判证",
        nameZhG1: "森罗判证",
        nameKo: "신라만상",
        ruby: "しんらばんしょう",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "6",
        cost: "6",
        text: "【展開時】ダスト→自ライフ：2 \n【展開中】あなたの他の付与札が破棄された時、相手のライフに1ダメージを与える。 \n【破棄時】あなたは敗北する。",
        textZh: "【展开时】虚→2→自命 \n【展开中】当你的其他《付与》牌破弃时，给予敌命1点伤害。\n【破弃时】你输掉这局游戏。",
        textZhG1: "【展开时】虚（2）→自命 \n【展开中】当你的其他《付与》牌破弃时，对敌命造成1点伤害。\n 【破弃时】你输掉这局游戏。",
        textKo: "【전개시】더스트→자신 라이프：2 \n 【전개중】당신의 다른 부여패가 파기되었을 때, 상대의 라이프에 1 대미지를 준다.\n 【파기시】당신은 패배한다.",
        textEn: 'Initialize:\nShadow (2)→ Your Life\n\nOngoing: Your other Enhancements gain "Disenchant: Deal 1 damage to your opponent\'s Life".\n\nDisenchant: You lose the game.',
    },
    "08-hagane-o-n-1": {
        megami: "hagane",
        name: "遠心撃",
        nameEn: "Centrifugal Swing",
        nameZh: "远心击",
        nameZhG1: "远心击",
        nameKo: "원심격",
        ruby: "えんしんげき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-6",
        damage: "5/3",
        text: "遠心 \n【攻撃後】現在のターンがあなたのターンならば、あなたと相手の手札を全て伏せ札にし、あなたの集中力は0になり、現在のフェイズを終了する。",
        textZh: "远心 \n【攻击后】若现在是你的回合，则盖伏你和对手的所有手牌，你的集中力变为0，结束当前阶段。",
        textZhG1: "远心 \n【攻击后】若现在是你的回合，则盖伏你和对手的所有手牌，你的集中力变为0，结束当前阶段。",
        textKo: "원심 \n 【공격후】현재 턴이 당신의 턴이라면, 당신과 상대의 손패를 모두 덮임패로 하고, 당신의 집중력은 0이 되고, 현재 페이즈를 종료한다.",
        textEn: "Centrifuge\n\nAfter Attack: If it is currently your turn, discard both players' hands, your Vigor becomes 0, and end the current phase.",
    },
    "08-hagane-o-n-2": {
        megami: "hagane",
        name: "砂風塵",
        nameEn: "Scatter to the Winds",
        nameZh: "沙尘暴",
        nameZhG1: "砂风尘",
        nameKo: "사풍진",
        ruby: "さふうじん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "0-6",
        damage: "1/-",
        text: "【攻撃後】現在の間合がターン開始時の間合から2以上変化しているならば、相手の手札を1枚無作為に選び、それを捨て札にする。",
        textZh: "【攻击后】若当前距离与本回合开始时距离之差的绝对值大于等于2，则对手随机弃1张牌。",
        textZhG1: "【攻击后】若当前距离与本回合开始时距离之差的绝对值大于2，则对手随机弃一张牌。",
        textKo: "【공격후】현재 간격이 턴 개시시의 간격에서 2 이상 변화했다면, 상대의 손패를 1장 무작위로 골라, 그것을 버림패로 한다.",
        textEn: "After Attack: If the difference between the current Distance and the Distance at the beginning of this turn is 2 or more, your opponent puts a random card from their hand into their played pile.",
    },
    "08-hagane-o-n-3": {
        megami: "hagane",
        name: "大地砕き",
        nameEn: "Earthshatter",
        nameZh: "地碎击",
        nameZhG1: "大地碎击",
        nameKo: "대지 부수기",
        ruby: "だいちくだき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "0-3",
        damage: "2/-",
        text: "対応不可 \n【攻撃後】相手の集中力は0になり、相手を畏縮させる。",
        textZh: "不可被对应 \n【攻击后】对手集中力变为0，令对手畏缩。",
        textZhG1: "不可被对应 \n【攻击后】对手集中力变为0，对手畏缩。",
        textKo: "대응불가 \n 【공격후】상대의 집중력은 0이 되고, 상대를 위축시킨다。",
        textEn: "No Reactions\n\nAfter Attack: Your opponent's Vigor becomes 0. Flinch your opponent.",
    },
    "08-hagane-o-n-4": {
        megami: "hagane",
        name: "超反発",
        nameEn: "Repulsion",
        nameZh: "超反弹",
        nameZhG1: "超反发",
        nameKo: "초반응",
        ruby: "ちょうはんぱつ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の間合が4以下ならば、相フレア→間合：1",
        textZh: "若当前距离小于等于4，则：敌气→1→距",
        textZhG1: "若当前距离小于4，则敌气（1）→距",
        textKo: "현재 간격이 4 이하라면, 상대 플레어→간격：1",
        textEn: "If the current Distance is 4 or less:\nOpponent's Flare (1)→ Distance",
    },
    "08-hagane-o-n-5": {
        megami: "hagane",
        name: "円舞錬",
        nameEn: "Waltz of Steel",
        nameZh: "圆舞链",
        nameZhG1: "圆舞链",
        nameKo: "원무련",
        ruby: "えんぶれん",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "遠心 \n相手のフレアが3以上ならば、相フレア→自オーラ：2",
        textZh: "远心 \n若敌气中的樱花结晶的数目大于等于3，则：敌气→2→自装",
        textZhG1: "远心 若敌气中的樱花结晶的数目大于3，则敌气（2）→自装",
        textKo: "원심 \n상대의 플레어가 3 이상이라면、상대 플레어→자신 오라：2",
        textEn: "Centrifuge\n\nIf your opponent has 3 or more Sakura tokens on their Flare:\nOpponent's Flare (2)→ Your Aura",
    },
    "08-hagane-o-n-6": {
        megami: "hagane",
        name: "鐘鳴らし",
        nameEn: "Sound the Bell",
        nameZh: "钟鸣响",
        nameZhG1: "大鸣钟",
        nameKo: "종 울리기",
        ruby: "かねならし",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "遠心 \n以下から１つを選ぶ。\n・このターンにあなたが次に行う《攻撃》は対応不可を得る。\n・このターンにあなたが次に行う《攻撃》はオーラへのダメージが3以上ならば+0/+1、そうでないならば+2/+0となる。",
        textZh: "远心 \n选择一项：\n●本回合内，你的下一次《攻击》得不可被对应；\n●本回合内，若你的下一次《攻击》对装伤害大于等于3，则该《攻击》得+0/+1，否则得+2/+0。",
        textZhG1: "远心 选择一项：\n1.本回合内，你的下一次《攻击》得不可被对应；\n2.本回合内，若你的下一次《攻击》对装伤害大于3，则该《攻击》得+0/+1，否则得+2/+0。",
        textKo: "원심 \n 이하에서 하나를 고른다.\n ・이 턴에 당신이 다음에 행하는 《공격》은 대응불가를 얻는다.\n ・이 턴에 당신이 다음에 행하는 《공격》은 오라로의 대미지가 3 이상이라면 +0/+1, 그렇지 않다면 +2/+0이 된다.",
        textEn: "Centrifuge\n\nChoose one:\n・Your next attack this turn gains No Reactions.\n・Your next attack this turn gains +0/+1 if it has 3 or more Damage to Aura. Otherwise, it gains +2/+0.",
    },
    "08-hagane-o-n-7": {
        megami: "hagane",
        name: "引力場",
        nameEn: "Gravity Well",
        nameZh: "引力场",
        nameZhG1: "引力场",
        nameKo: "인력장",
        ruby: "いんりょくば",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "4",
        text: "【展開時】間合→ダスト：1 \n【展開中】達人の間合は1小さくなる。",
        textZh: "【展开时】距→1→虚\n【展开中】达人距离的值减小1。",
        textZhG1: "【展开时】距（1）→虚\n【展开中】达人距离的值减小1。",
        textKo: "【전개시】간격→더스트：1 \n 【전개중】달인의 간격은 1 작게 된다.",
        textEn: "Initialize:\nDistance (1)→ Shadow\n\nOngoing: Decrease the size of the Mastery Zone by 1.",
    },
    "08-hagane-o-s-1": {
        megami: "hagane",
        name: "大天空クラッシュ",
        nameEn: "Grand Firmament Crash",
        nameZh: "大天空CRASH",
        nameZhG1: "大天空·破限",
        nameKo: "대천공 크래시",
        ruby: "だいてんくうクラッシュ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "0-10",
        damage: "X/Y",
        cost: "5",
        text: "超克 \n【常時】Xは現在の間合がターン開始時の間合からどれだけ変化しているかに等しい。YはXの半分(切り上げ)に等しい。",
        textZh: "超克 \n【常时】X为当前距离与本回合开始时距离之差的绝对值，Y为X的一半（向上取整）。",
        textZhG1: "超克 \n【常时】X为当前距离与本回合开始时距离之差的绝对值，Y为X的一半（向上取整）。",
        textKo: "초극 \n 【상시】X는 현재 간격이 턴 시작시의 간격에서 변화한 값과 같다. Y는 X의 절반(올림)과 같다.",
        textEn: "Overwhelm\n\nForced: X is the difference between the current Distance and the Distance at the beginning of this turn. Y is half of X, rounded up.",
    },
    "08-hagane-o-s-2": {
        megami: "hagane",
        name: "大破鐘メガロベル",
        nameEn: "Grand Bourdon Peal",
        nameZh: "大破钟MEGALOBELL",
        nameZhG1: "大破钟·断限",
        nameKo: "대파종 메갈로벨",
        ruby: "だいはがねメガロベル",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "あなたの他の切札が全て使用済ならば、ダスト→自ライフ：2",
        textZh: "若你的其他王牌均处于使用后状态，则虚→2→自命",
        textZhG1: "若你的其他王牌均正面朝上，则虚（2）→自命",
        textKo: "당신의 다른 비장패가 모두 사용완료라면, 더스트→자신 라이프：2",
        textEn: "If all your other Special cards are Devoted:\nShadow (2)→ Your Life",
    },
    "08-hagane-o-s-3": {
        megami: "hagane",
        name: "大重力アトラクト",
        nameEn: "Grand Gravity Attract",
        nameZh: "大重力ATTRACT",
        nameZhG1: "大重力·无限",
        nameKo: "대중력 어트랙트",
        ruby: "だいじゅうりょくアトラクト",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "5",
        text: "間合→自フレア：3 \n----\n【再起】このターンにあなたが遠心を持つカードを使用しており、このカードを使用していない。",
        textZh: "距→3→自气\n----\n【再起】本回合内你使用了具远心关键字的牌，且没有使用此牌。",
        textZhG1: "距（3）→自气\n----\n【再起】本回合内你使用了具远心关键字的牌，且没有使用此牌。",
        textKo: "간격→자신 플레어：3 \n ----\n 【재기】이 턴에 당신이 원심을 갖는 카드를 사용하고, 이 카드를 사용하지 않았다.",
        textEn: "Distance (3)→ Your Flare\n\nResurgence: You played a card with Centrifuge this turn, and this card was not played this turn.",
    },
    "08-hagane-o-s-4": {
        megami: "hagane",
        name: "大山脈リスペクト",
        nameEn: "Grand Sierra Respect",
        nameZh: "大山脉RESPECT",
        nameZhG1: "大山脉·转限",
        nameKo: "대산맥 리스펙트",
        ruby: "だいさんみゃくリスペクト",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "遠心 \nあなたの捨て札にある異なる《全力》でないカードを2枚まで選び、任意の順番で使用する。",
        textZh: "远心 \n从你的弃牌区选择至多2张非《全力》的牌，以任意顺序使用它们。",
        textZhG1: "远心 \n从你的弃牌区选择至多2张非《全力》的牌，以任意顺序使用它们。",
        textKo: "원심 \n 당신의 버림패에 있는 다른 《전력》이 아닌 카드를 2장까지 골라, 임의의 순서로 사용한다.",
        textEn: "Centrifuge\n\nChoose up to two non-Throughout cards in your played pile. Play the chosen cards in any order.",
    },
    "09-chikage-o-n-1": {
        megami: "chikage",
        name: "飛苦無",
        nameEn: "Kunai Throw",
        nameZh: "飞苦无",
        nameZhG1: "飞苦无",
        nameKo: "쿠나이 던지기",
        ruby: "とびくない",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "2/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "09-chikage-o-n-2": {
        megami: "chikage",
        name: "毒針",
        nameEn: "Poison Needle",
        nameZh: "毒针",
        nameZhG1: "毒针",
        nameKo: "독침",
        ruby: "どくばり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4",
        damage: "1/1",
        text: "【攻撃後】毒袋から「麻痺毒」「幻覚毒」「弛緩毒」のいずれか1枚を選び、そのカードを相手の山札の一番上に置く。",
        textZh: "【攻击后】从毒袋中选择『麻痹毒』『幻觉毒』『迟缓毒』中的1张，将其置于对手的牌库顶。",
        textZhG1: "【攻击后】从毒袋中选择麻痹毒、幻觉毒、迟缓毒中的1张，将其置于对手的牌库顶。",
        textKo: "【공격후】독주머니에서「마비독」「환각독」「이완독」중 한 장을 고르고, 그 카드를 상대의 패산 맨 위에 둔다.",
        textEn: 'After Attack: Choose a "Numbing Agent", "Hallucinogen", or "Muscle Relaxant" in your pouch. Put it on top of your opponent\'s deck.',
    },
    "09-chikage-o-n-3": {
        megami: "chikage",
        name: "遁術",
        nameEn: "Concealment",
        nameZh: "遁术",
        nameZhG1: "遁术",
        nameKo: "둔갑술",
        ruby: "とんじゅつ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "1-3",
        damage: "1/-",
        text: "【攻撃後】自オーラ→間合：2 \n【攻撃後】このターン中、全てのプレイヤーは基本動作《前進》を行えない。",
        textZh: "【攻击后】自装→2→距\n【攻击后】本回合内所有玩家都不能执行基本动作《前进》。",
        textZhG1: "【攻击后】自装（2）→距\n【攻击后】本回合内所有玩家都不能执行基本动作《前进》。",
        textKo: "【공격후】자신 오라→간격：2 \n 【공격후】이 턴 중에, 모든 플레이어는 기본동작 《전진》을 행할 수 없다.",
        textEn: "After Attack:\nYour Aura (2)→ Distance\n\nAfter Attack: Neither player can perform the Forward Movement basic action for the rest of the turn.",
    },
    "09-chikage-o-n-4": {
        megami: "chikage",
        name: "首切り",
        nameEn: "Behead",
        nameZh: "斩首",
        nameZhG1: "割喉",
        nameKo: "목 베기",
        ruby: "くびきり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "0-3",
        damage: "2/3",
        text: "【攻撃後】相手の手札が2枚以上あるならば、相手は手札を1枚捨て札にする。",
        textZh: "【攻击后】若对手的手牌不少于2张，则对手弃1张牌。",
        textZhG1: "【攻击后】若对手的手牌多于2张，则对手弃一张牌。",
        textKo: "【공격후】상대의 손패가 2장 이상이라면, 상대는 손패를 1장 버림패로 한다.",
        textEn: "After Attack: If your opponent has 2 or more cards in their hand, they must put one of them into their played pile.",
    },
    "09-chikage-o-n-5": {
        megami: "chikage",
        name: "毒霧",
        nameEn: "Miasma",
        nameZh: "毒雾",
        nameZhG1: "毒雾",
        nameKo: "독안개",
        ruby: "どくぎり",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "毒袋から「麻痺毒」「幻覚毒」「弛緩毒」のいずれか1枚を選び、そのカードを相手の手札に加える。",
        textZh: "从毒袋中选择『麻痹毒』『幻觉毒』『迟缓毒』中的1张，将其置入对手的手牌。",
        textZhG1: "从毒袋中选择麻痹毒、幻觉毒、迟缓毒中的一张，将其置入对手的手牌。",
        textKo: "독주머니에서「마비독」「환각독」「이완독」중 한 장을 골라, 그 카드를 상대의 손패에 추가한다.",
        textEn: 'Choose a "Numbing Agent", "Hallucinogen", or "Muscle Relaxant" in your pouch. Put it into your opponent\'s hand.',
    },
    "09-chikage-o-n-6": {
        megami: "chikage",
        name: "抜き足",
        nameEn: "Silent Approach",
        nameZh: "蹑足",
        nameZhG1: "奔跑",
        nameKo: "까치발 걸음",
        ruby: "ぬきあし",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "4",
        text: "隙 \n【展開中】現在の間合は2減少する。 \n(間合は0未満にならない)",
        textZh: "破绽\n【展开中】当前距离减小2。\n（距离不会为负）",
        textZhG1: "破绽\n【展开中】当前距离减小2（距离不会为负）。",
        textKo: "빈틈 \n 【전개중】현재 간격은 2 감소한다.\n (간격은 0 미만이 되지 않는다.)",
        textEn: "Unguarded\n\nOngoing: Decrease the current Distance by 2 (to a minimum of 0).",
    },
    "09-chikage-o-n-7": {
        megami: "chikage",
        name: "泥濘",
        nameEn: "Quagmire",
        nameZh: "泥泞",
        nameZhG1: "泥泞",
        nameKo: "진흙탕",
        ruby: "でいねい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開中】相手は基本動作《後退》と《離脱》を行えない。",
        textZh: "【展开中】对手不能执行基本动作《后退》和《离脱》。",
        textZhG1: "【展开中】对手不能执行基本动作《后退》和《离脱》。",
        textKo: "【전개중】상대는 기본 동작 《후퇴》와 《이탈》을 행할 수 없다.",
        textEn: "Ongoing: Your opponent cannot perform the Backward Movement or Retreat basic actions.",
    },
    "09-chikage-o-s-1": {
        megami: "chikage",
        name: "滅灯の魂毒",
        nameEn: "Ruinous Soultoxin",
        nameZh: "灭灯御魂毒",
        nameZhG1: "魂毒渐灭灯",
        nameKo: "멸등의 영혼독",
        ruby: "ほろびのみたまどく",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "3",
        text: "毒袋から「滅灯毒」を1枚を選び、そのカードを相手の山札の一番上に置く。",
        textZh: "从毒袋中将1张『灭灯毒』置于对手的牌库顶。",
        textZhG1: "从毒袋中将一张灭灯毒置于对手的牌库顶。",
        textKo: "독주머니에서「멸등독」을 한 장 골라, 그 카드를 상대 패산 가장 위에 둔다.",
        textEn: 'Choose a "Fading Light Toxin" in your pouch. Put it on top of your opponent\'s deck.',
    },
    "09-chikage-o-s-2": {
        megami: "chikage",
        name: "叛旗の纏毒",
        nameEn: "Treacherous Spiritquell",
        nameZh: "叛旗纠缠毒",
        nameZhG1: "缠毒揭叛旗",
        nameKo: "반기의 얽힘독",
        ruby: "はんきのまといどく",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "reaction",
        capacity: "5",
        cost: "2",
        text: "【展開中】相手によるオーラへのダメージかライフへのダメージのどちらかが「-」である《攻撃》は打ち消される。",
        textZh: "【展开中】打消对手进行的伤害中含有“-”的所有《攻击》。",
        textZhG1: "【展开中】打消对手进行的伤害中含有“-”的所有《攻击》。",
        textKo: "【전개중】상대에 의한 오라로의 대미지, 혹은 라이프로의 대미지 중 어느 한 쪽이 「-」인 《공격》은 무효화된다.",
        textEn: 'Ongoing: Your opponent\'s attacks that have "-" Damage to Aura or Life are automatically cancelled.',
    },
    "09-chikage-o-s-3": {
        megami: "chikage",
        name: "流転の霞毒",
        nameEn: "Amorphous Mistbane",
        nameZh: "流转幻霞毒",
        nameZhG1: "霞毒空流转",
        nameKo: "윤회의 안개독",
        ruby: "るてんのかすみどく",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-7",
        damage: "1/2",
        cost: "1",
        text: "【再起】相手の手札が2枚以上ある。",
        textZh: "【再起】对手的手牌不少于2张。",
        textZhG1: "【再起】对手的手牌多于2张。",
        textKo: "【재기】상대의 손패가 2장 이상이다.",
        textEn: "Resurgence: Your opponent has 2 or more cards in their hand.",
    },
    "09-chikage-o-s-4": {
        megami: "chikage",
        name: "闇昏千影の生きる道",
        nameEn: "Chikage's Grim Path",
        nameZh: "暗昏千影的生存之道",
        nameZhG1: "暗昏千影的信条",
        nameKo: "야미쿠라 치카게의 살아가는 방식",
        ruby: "やみくらちかげのいきるみち",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "fullpower",
        capacity: "4",
        cost: "5",
        text: "【展開中】あなたが1以上のライフへのダメージを受けた時、このカードの上の桜花結晶は全てダストに送られ、このカードは未使用に戻る。 \n(破棄時効果は失敗する) \n【破棄時】あなたの他の切札が全て使用済ならば、あなたは勝利する。",
        textZh: "【展开中】若自命受到1点或以上的伤害，则将此牌上的所有樱花结晶置入虚，并将其变为未使用状态（不结算破弃时效果）。\n【破弃时】若你的其它王牌均处于使用后状态，则你赢得这局游戏。",
        textZhG1: "【展开中】若自命受到大于1点的伤害，则将此牌上的所有樱花结晶置入虚，并将其翻面（不结算破弃时效果）\n。\n【破弃时】若你的其它王牌均正面朝上，则你赢得这局游戏。",
        textKo: "【전개중】당신이 1이상 라이프로의 대미지를 받았을 때, 이 카드 위의 벚꽃 결정은 모두 더스트로 보내지고, 이 카드는 미사용으로 되돌려진다.\n (파기시 효과는 실패한다) \n 【파기시】당신의 다른 비장패가 모두 사용완료라면, 당신은 승리한다.",
        textEn: "Ongoing: If you take 1 or more damage to your Life, move all Sakura tokens on this card to Shadow, then turn this card face-down. (Do not resolve its Disenchant effect.)\n\nDisenchant: If all your other Special cards are Devoted, you win the game.",
    },
    "09-chikage-o-p-1": {
        megami: "chikage",
        name: "麻痺毒",
        nameEn: "Numbing Agent",
        nameZh: "麻痹毒",
        nameZhG1: "麻痹毒",
        nameKo: "마비독",
        ruby: "まひどく",
        rubyEn: "",
        baseType: "poison",
        extra: true,
        type: "action",
        text: "【常時】このターン中にあなたが基本動作を行ったならば、このカードは使用できない。 \nこのカードを相手の毒袋に戻す。その後、このフェイズを終了する。",
        textZh: "【常时】若本回合内你执行过基本动作，则你不能使用此牌。\n将此牌移回对手的毒袋。结束当前阶段。",
        textZhG1: "【常时】若本回合内你执行过基本动作，则你不能使用此牌。\n将此牌移回对手的毒袋。结束当前阶段。",
        textKo: " 【상시】이 턴에 당신이 기본 동작을 행했다면, 이 카드를 사용 할 수 없다.\n 이 카드를 상대의 독주머니에 되돌린다. 그 후, 이 페이즈를 종료한다.",
        textEn: "Forced: You cannot play this card if you have performed any basic actions this turn.\n\nReturn this card to its pouch. End the current phase.",
    },
    "09-chikage-o-p-2": {
        megami: "chikage",
        name: "幻覚毒",
        nameEn: "Hallucinogen",
        nameZh: "幻觉毒",
        nameZhG1: "幻觉毒",
        nameKo: "환각독",
        ruby: "げんかくどく",
        rubyEn: "",
        baseType: "poison",
        extra: true,
        type: "action",
        text: "このカードを相手の毒袋に戻す。 \n自フレア→ダスト：2",
        textZh: "将此牌移回对手的毒袋。\n自气→2→虚",
        textZhG1: "将此牌移回对手的毒袋。 自气（2）→虚",
        textKo: " 이 카드를 상대의 독주머니에 되돌린다. \n 자신 플레어→더스트：2",
        textEn: "Return this card to its pouch.\n\nYour Flare (2)→ Shadow",
    },
    "09-chikage-o-p-3": {
        megami: "chikage",
        name: "弛緩毒",
        nameEn: "Muscle Relaxant",
        nameZh: "迟缓毒",
        nameZhG1: "迟缓毒",
        nameKo: "이완독",
        ruby: "しかんどく",
        rubyEn: "",
        baseType: "poison",
        extra: true,
        type: "enhance",
        capacity: "3",
        text: "【展開中】あなたは《攻撃》カードを使用できない。 \n【破棄時】このカードを相手の毒袋に戻す。",
        textZh: "【展开中】你不能使用《攻击》牌。 \n【破弃时】将此牌移回对手的毒袋。",
        textZhG1: "【展开中】你不能使用《攻击》牌。 \n【破弃时】将此牌移回对手的毒袋。",
        textKo: " 【전개중】당신은《공격》카드를 사용 할 수 없다.\n 【파기시】이 카드를 상대의 독주머니에 되돌린다. ",
        textEn: "Ongoing: You cannot play Attack cards.\n\nDisenchant: Return this card to its pouch.",
    },
    "09-chikage-o-p-4": {
        megami: "chikage",
        name: "滅灯毒",
        nameEn: "Fading Light Toxin",
        nameZh: "灭灯毒",
        nameZhG1: "灭灯毒",
        nameKo: "멸등독",
        ruby: "ほろびどく",
        rubyEn: "",
        baseType: "poison",
        extra: true,
        type: "action",
        text: "自オーラ→ダスト：3",
        textZh: "自装→3→虚",
        textZhG1: "自装（3）→虚",
        textKo: " 자신 오라→더스트：3",
        textEn: "Your Aura (3)→ Shadow",
    },
    "10-kururu-o-n-1": {
        megami: "kururu",
        name: "えれきてる",
        nameEn: "Elekiter",
        nameZh: "电击装置",
        nameZhG1: "电气疗法",
        nameKo: "엘레키텔",
        ruby: "",
        rubyEn: "",
        rubyZh: "Electric",
        baseType: "normal",
        type: "action",
        text: "----\n<行行行対対> 相手のライフに1ダメージを与える。 ",
        textZh: "----\n<行行行对对> 给予敌命1点伤害。",
        textZhG1: "----\n机巧：蓝蓝蓝紫紫 对敌命造成1点伤害。",
        textKo: "----\n <행행행대대>상대의 라이프에 1 대미지를 준다.",
        textEn: "Mechanism (ACT ACT ACT REA REA) - Deal 1 damage to your opponent's Life.",
    },
    "10-kururu-o-n-2": {
        megami: "kururu",
        name: "あくせらー",
        nameEn: "Acceler",
        nameZh: "加速装置",
        nameZhG1: "加束效应",
        nameKo: "액셀러",
        ruby: "",
        rubyEn: "",
        rubyZh: "Accelerator",
        baseType: "normal",
        type: "action",
        text: "----\n<行行付> あなたの手札から《全力》カードを1枚選び、そのカードを使用してもよい。 \n(フェイズは終了しない) ",
        textZh: "----\n<行行付> 选择你手牌里的1张《全力》牌并使用。（当前阶段不会因此而结束）",
        textZhG1: "----\n机巧：蓝蓝绿 你可以使用一张《全力》牌。",
        textKo: "----\n <행행부> 당신의 손패에서 《전력》카드를 1장 고르고, 그 카드를 사용해도 좋다.\n (페이즈는 종료되지 않는다.)",
        textEn: "Mechanism (ENH ACT ACT) - You may choose 1 Throughout card in your hand and play it.",
    },
    "10-kururu-o-n-3": {
        megami: "kururu",
        name: "くるるーん",
        nameEn: "Kururu~n",
        nameZh: "枢噜～噜",
        nameZhG1: "枢噜噜～",
        nameKo: "쿠루루~웅",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "【常時】このカードは対応でしか使用できない。 \n以下から2つまでを選び、任意の順に行う。 \n(同じものを2回選ぶことはできない)\n・カードを1枚引く。\n・伏せ札1枚を山札の底に置く。\n・相手は手札を1枚捨て札にする。",
        textZh: "【常时】 此牌只能作为对应使用。\n选择至多2项，以任意顺序结算（不能选择同一项2次）：\n●抓1张牌；\n●从盖牌区选择1张牌置于你的牌库底；\n●对手弃1张牌。",
        textZhG1: "【常时】 此牌只能作为《对应》使用。\n选择至多2项，以任意顺序结算（不能选择同一项2次）：\n1.抓一张牌；\n2.从盖牌区选择一张牌置于你的牌库底；\n3.对手弃一张牌。",
        textKo: "【상시】이 카드는 대응으로만 사용한다.\n 이하에서 2개까지 고르고, 임의의 순서로 행한다. \n (같은 것을 2번 고를 수 없다.)\n ・카드를 1장 뽑는다.\n ・덮임패 1장을 패산 밑에 둔다.\n ・상대는 손패를 1장 버림패로 한다.",
        textEn: "Forced: This card cannot be played except as a Reaction to an attack.\n\nChoose up to two, in any order: (You may not choose the same option more than once.)\n・Draw a card.\n・Put a card from your discard pile to the bottom of your deck.\n・Your opponent puts a card from their hand into their played pile.",
    },
    "10-kururu-o-n-4": {
        megami: "kururu",
        name: "とるねーど",
        nameEn: "Tornaydo",
        nameZh: "龙卷装置",
        nameZhG1: "大龙卷轰",
        nameKo: "토네이도",
        ruby: "",
        rubyEn: "",
        rubyZh: "Tornado",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "----\n<攻攻> 相手のオーラに5ダメージを与える。 \n----\n<付付> 相手のライフに1ダメージを与える。",
        textZh: "----\n<攻攻> 给予敌装5点伤害。\n----\n<付付> 给予敌命1点伤害。",
        textZhG1: "----\n机巧：红红 对敌装造成5点伤害。\n----\n机巧：绿绿 对敌命造成1点伤害。",
        textKo: "----\n <공공>상대의 오라에 5 대미지를 준다.\n ----\n <부부> 상대의 라이프에 1 대미지를 준다.",
        textEn: "Mechanism (ATK ATK) - Deal 5 damage to your opponent's Aura.\n----\nMechanism (ENH ENH) - Deal 1 damage to your opponent's Life.",
    },
    "10-kururu-o-n-5": {
        megami: "kururu",
        name: "りげいなー",
        nameEn: "Regainah",
        nameZh: "重振装置",
        nameZhG1: "回嗖利用",
        nameKo: "리게이너",
        ruby: "",
        rubyEn: "",
        rubyZh: "Regainer",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "----\n<攻対> あなたの使用済の切札を1枚選んでもよい。そのカードを消費を支払わずに使用する。(《全力》カードでもよい) \n----\nあなたの集中力は0になる。",
        textZh: "----\n<攻对> 你可以使用你的1张使用后的王牌，而不需支付其费用（可以选择《全力》牌）。\n----\n你的集中力变为0。",
        textZhG1: "----\n机巧：红紫 你可以使用你的一张正面朝上的王牌，而不需支付其费用（可以选择《全力》牌） 。\n----\n你的集中力变为0。",
        textKo: "----\n <공대> 당신의 사용완료 비장패를 1장 골라도 좋다. 그 카드를 소비를 지불하지 않고 사용한다. (《전력》카드여도 좋다) \n ----\n 당신의 집중력은 0이 된다.",
        textEn: "Mechanism (ATK REA) - You may choose 1 of your Devoted Special cards. Play that card without paying its cost.\n----\nYour Vigor becomes 0.",
    },
    "10-kururu-o-n-6": {
        megami: "kururu",
        name: "もじゅるー",
        nameEn: "Mozule",
        nameZh: "模块化",
        nameZhG1: "模块化",
        nameKo: "모듈",
        ruby: "",
        rubyEn: "",
        rubyZh: "Module",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開中】あなたが《行動》カードを使用した時、その解決後に基本動作を1回行ってもよい。",
        textZh: "【展开中】每当你使用的《行动》牌结算完毕时，你可以执行一次基本动作。",
        textZhG1: "【展开中】每当你使用的《行动》牌结算完毕时，你可以执行一次基本动作。",
        textKo: "【전개중】당신이 《행동》카드를 사용했을 때, 그 해결 후에 기본 동작을 1회 행해도 좋다.",
        textEn: "Ongoing: Whenever you play an Action card, you may perform a basic action after it resolves.",
    },
    "10-kururu-o-n-7": {
        megami: "kururu",
        name: "りふれくた",
        nameEn: "Reflecta",
        nameZh: "反射器",
        nameZhG1: "反射",
        nameKo: "리플렉터",
        ruby: "",
        rubyEn: "",
        rubyZh: "Reflector",
        baseType: "normal",
        type: "enhance",
        capacity: "0",
        text: "----\n<攻対> 【展開時】このカードの上に桜花結晶を4個ダストから置く。 \n----\n【展開中】各ターンにおける相手の2回目の《攻撃》は打ち消される。\n",
        textZh: "----\n<攻对> 【展开时】将虚中的4个樱花结晶移至此牌上。\n----\n【展开中】打消每回合对手的第二次《攻击》。",
        textZhG1: "----\n机巧：红紫 将虚中的4个樱花结晶移至此牌上。\n----\n【展开中】 打消每回合对手的第二次《攻击》。",
        textKo: "----\n <공대> 【전개시】이 카드 위에 벚꽃 결정을 4개 더스트로부터 올린다.\n ----\n 【전개중】매 턴 상대의 2번째 《공격》은 무효화된다.",
        textEn: "Mechanism (ATK REA) - Initialize: Move 4 Sakura tokens from Shadow to this card.\n----\nOngoing: Your opponent's second attack each turn is automatically cancelled.",
    },
    "10-kururu-o-s-1": {
        megami: "kururu",
        name: "どれーんでびる",
        nameEn: "Drain Devil",
        nameZh: "虹吸魔翼",
        nameZhG1: "魔能吸收",
        nameKo: "드레인 데빌",
        ruby: "",
        rubyEn: "",
        rubyZh: "Drain Devil",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "2",
        text: "相オーラ→自オーラ：1 \n【使用済】あなたの使用済の切札が未使用に戻った時、このカードを消費を支払わずに使用してもよい。",
        textZh: "敌装→1→自装 \n【使用后】每当你的处于使用后状态的王牌变为未使用状态时，你可以使用此牌，而不需支付其费用。",
        textZhG1: "敌装（1）→自装 \n【使用后】每当你的正面朝上的王牌翻面时，你可以使用此牌，而不需支付其费用。",
        textKo: "상대 오라→자신 오라：1 \n 【사용완료】당신의 사용완료 비장패가 미사용으로 되돌아갈때, 이 카드를 소비를 지불하지 않고 사용해도 좋다.",
        textEn: "Opponent's Aura (1)→ Your Aura\n\nDevoted: Whenever one of your Devoted Special cards is turned face-down, you may play this card without paying its cost.",
    },
    "10-kururu-o-s-2": {
        megami: "kururu",
        name: "びっぐごーれむ",
        nameEn: "Big Golem",
        nameZh: "巨大魔像",
        nameZhG1: "大魔像",
        nameKo: "빅 골렘",
        ruby: "",
        rubyEn: "",
        rubyZh: "Big Golem",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "----\n<対全全> 【使用済】あなたの終了フェイズに相手のライフに1ダメージを与えてもよい。そうした場合、山札を再構成する。 \n----\n【使用済】あなたが《全力》カードを使用した時、その解決後に基本動作を1回行ってもよい。\n",
        textZh: "----\n<对全全> 【使用后】在你的结束阶段，你可以给予敌命1点伤害。若如此做，则重铸你的牌库（你不会因此受到伤害）。\n----\n【使用后】每当你使用具《全力》副类别的牌时，结算完毕后你可以执行一次基本动作。",
        textZhG1: "----\n【使用后】机巧：黄黄紫  每当你的结束阶段结束时，你可以对敌命造成1点伤害并重铸你的牌库\n（你不会因此受到伤害）。\n----\n【使用后】每当你使用的具《全力》副类别的牌结算完毕时，你可以执行一次基本动作。",
        textKo: "----\n <대전전> 【사용완료】당신의 종료 페이즈에 상대의 라이프에 1 대미지를 주어도 좋다. 그럴 경우, 패산을 재구성한다.\n ----\n 【사용완료】당신이 《전력》카드를 사용했을 때, 그 해결 후에 기본동작을 1번 해도 좋다.",
        textEn: "Mechanism (REA THR THR) - Devoted: At the end of your turn, you may deal 1 damage to your opponent's Life. If you do, reshuffle your deck.\n----\nDevoted: Whenever you play a Throughout card, you may perform a basic action after it resolves.",
    },
    "10-kururu-o-s-3": {
        megami: "kururu",
        name: "いんだすとりあ",
        nameEn: "Industria",
        nameZh: "工业量产",
        nameZhG1: "复自黏贴",
        nameKo: "인더스트리아",
        ruby: "",
        rubyEn: "",
        rubyZh: "Industria",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "このカードにカードが封印されていないならば、あなたの手札から《付与》でないカードを1枚選び、そのカードをこのカードの下に表向きで封印してもよい。 \nあなたの追加札から「でゅーぷりぎあ」を山札の底に1枚置く(最大で合計3枚)。 \n----\n【即再起】あなたが山札を再構成する(再構成の後に未使用に戻る)。",
        textZh: "若此牌没有封印牌，则从你的手牌中选择1张非《付与》的牌，封印在此牌下。\n从追加牌区中将1张『复制品齿轮』置于你的牌库底。\n----\n【即再起】你重铸牌库后。",
        textZhG1: "若此牌没有封印牌，则从你的手牌中选择一张非《付与》的牌，封印在此牌下。\n将一张复制品齿轮牌置于你的牌库底。\n----\n【即再起】重铸牌库后。",
        textKo: "이 카드에 카드가 봉인되어 있지 않다면, 당신의 손패에서 《부여》가 아닌 카드 한 장을 골라, 그 카드를 이 카드 밑에 앞면으로 봉인해도 좋다.\n 당신의 추가패에서 「듀플리기어」를 패산의 밑에 1장 둔다(최대 합계 3장). \n ----\n 【즉재기】당신이 패산을 재구성한다(재구성 후에 미사용으로 되돌린다).",
        textEn: 'If no card is sealed under this card, you may choose a non-Enhancement card in your hand and seal it under this card, face-up.\n\nPut one of your set aside "Dupligear" on the bottom of your deck.\n\nImmediate Resurgence: You reshuffle your deck.',
        sealable: true,
    },
    "10-kururu-o-s-4": {
        megami: "kururu",
        name: "神渉装置:枢式",
        nameEn: "Godly Intervention Simulator: Kururu-Type",
        nameZh: "神涉装置：枢式",
        nameZhG1: "神涉装置：枢式",
        nameKo: "신섭장치:쿠루루 식",
        ruby: "かんしょうそうち　くるるしき",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "3",
        text: "----\n<攻攻行行行付付> 相手の切札を見て、その中から1枚選び、それを使用済にしてもよい。\n----\n相手の使用済の切札1枚を選んでもよい。そのカードを消費を支払わずに使用する(《全力》カードでもよい)。その後、このカードを取り除く。",
        textZh: "----\n<攻攻行行行付付> 检视对手的王牌。你可以从中选择1张处于未使用状态的牌，将其变为使用后状态。\n----\n你可以使用对手的1张处于使用后状态的王牌，而不需支付其费用。结算完毕后将此牌移出游戏。",
        textZhG1: "----\n机巧：红红蓝蓝蓝绿绿 检视对手的王牌，你可以从中选择背面朝上的一张，将其翻面。\n----\n你可以使用对手的一张正面朝上的王牌，而不需支付其费用，结算完毕后将此牌移出游戏。",
        textKo: "----\n <공공행행행부부> 상대의 비장패를 보고, 그 중 1장을 골라, 그것을 사용완료로 해도 좋다.\n ----\n 상대의 사용완료 비장패를 1장 골라도 좋다. 그 카드를 소비를 지불하지 않고 사용한다(《전력》카드여도 좋다). 그 후, 이 카드를 제외한다.",
        textEn: "Mechanism (ATK ATK ACT ACT ACT ENH ENH) - Look at your opponent's Special cards. You may choose 1 of them. That card becomes Devoted.\n----\nYou may choose one of your oppponent's Devoted Special cards. Play that card without paying its cost. Remove this card from the game.",
        removable: true,
    },
    "10-kururu-o-s-3-ex1": {
        megami: "kururu",
        name: "でゅーぷりぎあ",
        nameEn: "Dupligear",
        nameZh: "复制品齿轮",
        nameZhG1: "复制品齿轮",
        nameKo: "듀플리기어",
        ruby: "",
        rubyEn: "",
        rubyZh: "Dupli-Gear",
        baseType: "normal",
        extra: true,
        extraFrom: "10-kururu-o-s-3",
        type: "variable",
        text: "(カードタイプが不定のカードは使用できない) \n【常時】このカードはあなたの「いんだすとりあ」に封印されたカードの複製となる。但し、名前は変更されない。 \n(「いんだすとりあ」が未使用なら複製とならないので、使用できない)",
        textZh: "（未复制卡牌时不能使用）\n【常时】此牌为被『工业量产』封印的牌之复制，但名称仍为『复制品齿轮』。\n（『工业量产』处于未使用时，此牌无法使用）",
        textZhG1: "【常时】此牌为被复自黏贴封印的牌之复制，但名称仍为复制品齿轮（复自黏贴没有封印牌时不能使用此牌）。",
        textKo: "(카드 타입이 정해지지 않은 카드는 사용 할 수 없다) \n 【상시】이 카드는 당신의 「인더스트리아」에 봉인된 카드의 복제가 된다. 단, 이름은 변경되지 않는다.\n (「인더스트리아」가 미사용이라면 복제가 안되었기에, 사용 할 수 없다)",
        textEn: 'Forced: This card is a copy of the card sealed under your "Industria", except its name is still "Dupligear".\n(If your "Industria" is face-down, this does not copy anything and cannot be played.)',
    },
    "11-thallya-o-n-1": {
        megami: "thallya",
        name: "Burning Steam",
        nameEn: "Burning Steam",
        nameZh: "Burning Steam",
        nameZhG1: "Burning Steam",
        nameKo: "Burning Steam",
        ruby: "バーニングスチーム",
        rubyEn: "",
        rubyZh: "灼热蒸汽",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        damage: "2/1",
        text: "【攻撃後】騎動を行う。",
        textZh: "【攻击后】骑动",
        textZhG1: "【攻击后】骑动 ",
        textKo: "【공격후】기동을 행한다.",
        textEn: "After Attack: Maneuver.",
    },
    "11-thallya-o-n-2": {
        megami: "thallya",
        name: "Waving Edge",
        nameEn: "Waving Edge",
        nameZh: "Waving Edge",
        nameZhG1: "Waving Edge",
        nameKo: "Waving Edge",
        ruby: "ウェービングエッジ",
        rubyEn: "",
        rubyZh: "跃动突击",
        baseType: "normal",
        type: "attack",
        range: "1-3",
        damage: "3/1",
        text: "燃焼 \n【攻撃後】騎動を行う。",
        textZh: "燃烧\n【攻击后】骑动",
        textZhG1: " 燃烧\n【攻击后】骑动",
        textKo: "연소 \n 【공격후】기동을 행한다.",
        textEn: "Combust\n\nAfter Attack: Maneuver.",
    },
    "11-thallya-o-n-3": {
        megami: "thallya",
        name: "Shield Charge",
        nameEn: "Shield Charge",
        nameZh: "Shield Charge",
        nameZhG1: "Shield Charge",
        nameKo: "Shield Charge",
        ruby: "シールドチャージ",
        rubyEn: "",
        rubyZh: "护盾冲撞",
        baseType: "normal",
        type: "attack",
        range: "1",
        damage: "3/2",
        text: "燃焼 \n【常時】この《攻撃》のダメージにより移動する桜花結晶は、ダストやフレアでなく間合に動かす。",
        textZh: "燃烧\n【常时】因此《攻击》造成的伤害将移动的樱花结晶改为移动至距。",
        textZhG1: " 燃烧\n【常时】若此《攻击》对对手造成了伤害，则将因结算伤害移动的樱花结晶移至距。",
        textKo: "연소 \n 【상시】이 《공격》의 대미지에 의해 이동하는 벚꽃 결정은, 더스트나 플레어가 아닌 간격으로 움직인다.",
        textEn: "Combust\n\nForced: Damage dealt by this attack moves Sakura tokens to Distance instead of to Shadow or to Flare.",
    },
    "11-thallya-o-n-4": {
        megami: "thallya",
        name: "Steam Cannon",
        nameEn: "Steam Cannon",
        nameZh: "Steam Cannon",
        nameZhG1: "Steam Cannon",
        nameKo: "Steam Cannon",
        ruby: "スチームカノン",
        rubyEn: "",
        rubyZh: "蒸汽大炮",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "2-8",
        damage: "3/3",
        text: "燃焼",
        textZh: "燃烧",
        textZhG1: "燃烧",
        textKo: "연소",
        textEn: "Combust",
    },
    "11-thallya-o-n-5": {
        megami: "thallya",
        name: "Stunt",
        nameEn: "Stunt",
        nameZh: "Stunt",
        nameZhG1: "Stunt",
        nameKo: "Stunt",
        ruby: "スタント",
        rubyEn: "",
        rubyZh: "特技动作",
        baseType: "normal",
        type: "action",
        text: "相手を畏縮させる。 \n自オーラ→自フレア：2",
        textZh: "令对手畏缩。\n自装→2→自气",
        textZhG1: "自装（2）→自气 \n对手畏缩。",
        textKo: "상대를 위축시킨다。 \n 자신 오라→자신 플레어：2",
        textEn: "Flinch your opponent.\n\nYour Aura (2)→ Your Flare",
    },
    "11-thallya-o-n-6": {
        megami: "thallya",
        name: "Roaring",
        nameEn: "Roaring",
        nameZh: "Roaring",
        nameZhG1: "Roaring",
        nameKo: "Roaring",
        ruby: "ロアリング",
        rubyEn: "",
        rubyZh: "引擎轰鸣",
        baseType: "normal",
        type: "action",
        text: "コストとして、あなたのマシンにある造花結晶を2つ燃焼済にしても良い。そうした場合、あなたは集中力を1得て、相手は集中力を1失い、相手を畏縮させる。 \nコストとして、集中力を2支払ってもよい。そうした場合、あなたの燃焼済の造花結晶を3つ回復する。",
        textZh: "你可以燃烧2个造花结晶。若如此做，则你获得1点集中力，对手失去1点集中力，令对手畏缩。\n你可以支付2点集中力。若如此做，则回复3个已燃烧的造花结晶。",
        textZhG1: "你可以燃烧2个造花结晶且/或支付2点集中力，作为使用此牌的额外费用。若你使用此牌时燃烧了造花结晶，则你获得1点集中力，对手失去1点集中力，对手畏缩。若你使用此牌时支付了集中力，则回复3个造花结晶。",
        textKo: "코스트로,  당신의 머신에 있는 조화결정을 2개 연소완료로 해도 좋다. 그럴 경우, 당신은 집중력을 1 얻고, 상대는 집중력을 1 잃으며, 상대를 위축시킨다。 \n코스트로, 집중력을 2만큼 지불해도 좋다. 그럴 경우, 당신의 연소완료 조화결정을 3개 회복한다.",
        textEn: "You may burn 2 Artificial Sakura tokens on your machine. If you do, gain 1 Vigor, your opponent loses 1 Vigor, and flinch your opponent.\n\nYou may spend 2 Vigor. If you do, recover 3 burned Artificial Sakura tokens.",
    },
    "11-thallya-o-n-7": {
        megami: "thallya",
        name: "Turbo Switch",
        nameEn: "Turbo Switch",
        nameZh: "Turbo Switch",
        nameZhG1: "Turbo Switch",
        nameKo: "Turbo Switch",
        ruby: "ターボスイッチ",
        rubyEn: "",
        rubyZh: "涡轮变速",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "燃焼 \n騎動を行う。",
        textZh: "燃烧\n骑动",
        textZhG1: "燃烧\n骑动",
        textKo: "연소 \n 기동을 행한다.",
        textEn: "Combust\n\nManeuver.",
    },
    "11-thallya-o-s-1": {
        megami: "thallya",
        name: "Alpha-Edge",
        nameEn: "Alpha-Edge",
        nameZh: "Alpha-Edge",
        nameZhG1: "Alpha-Edge",
        nameKo: "Alpha-Edge",
        ruby: "アルファエッジ",
        rubyEn: "",
        rubyZh: "阿尔法突击",
        baseType: "special",
        type: "attack",
        range: "1,3,5,7",
        damage: "1/1",
        cost: "1",
        text: "【即再起】あなたが騎動により間合を変化させる。",
        textZh: "【即再起】你骑动造成距离变化。",
        textZhG1: "【即再起】骑动",
        textKo: "【즉재기】당신이 기동으로 간격을 변화시킨다.",
        textEn: "Immediate Resurgence: Your Maneuver changes the Distance.",
    },
    "11-thallya-o-s-2": {
        megami: "thallya",
        name: "Omega-Burst",
        nameEn: "Omega-Burst",
        nameZh: "Omega-Burst",
        nameZhG1: "Omega-Burst",
        nameKo: "Omega-Burst",
        ruby: "オメガバースト",
        rubyEn: "",
        rubyZh: "奥米加脉冲",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "4",
        text: "あなたの燃焼済の造花結晶を全て回復する。 \n対応した、オーラへのダメージが「-」またはX以下の《攻撃》を打ち消す。Xはこのカードにより回復した造花結晶の個数に等しい。",
        textZh: "回复你的所有已燃烧的造花结晶。\n打消被对应的对装伤害为“-”或小于等于X的《攻击》，X等于因此牌效果回复的造花结晶的个数。",
        textZhG1: "回复你的所有造花结晶。打消被对应的对装伤害为“-”或小于X的《攻击》，X等于因此牌效果回复的造花结晶的个数。",
        textKo: "당신의 연소완료 조화결정을 모두 회복한다.\n 대응한, 오라로의 대미지가 「-」 혹은 X 이하의 《공격》은 무효화된다. X는 이 카드로 회복한 조화결정의 갯수와 같다.",
        textEn: 'Recover all your burned Artificial Sakura tokens.\n\nCancel the attack you played this as a Reaction to if its Damage to Aura is "-", or if its Damage to Aura is X or less. X is the number of Artificial Sakura tokens recovered by this card.',
    },
    "11-thallya-o-s-4": {
        megami: "thallya",
        name: "Julia's BlackBox",
        nameEn: "Julia's BlackBox",
        nameZh: "Julia's BlackBox",
        nameZhG1: "Julia's BlackBox",
        nameKo: "Julia's BlackBox",
        ruby: "ジュリアズ　ブラックボックス",
        rubyEn: "",
        rubyZh: "尤里娅的黑盒子",
        baseType: "special",
        type: "action",
        subType: "fullpower",
        cost: "0",
        text: "あなたのマシンに造花結晶がないならば、あなたのマシンはTransFormし、あなたの燃焼済の造花結晶を2つ回復する。そうでない場合、このカードを未使用に戻す。",
        textZh: "若你的引擎里没有造花结晶，则TransForm，然后回复2个已燃烧的造花结晶。若非如此，将此牌变为未使用状态。",
        textZhG1: "若你的造花结晶的数目为0，则TRANSFORM，然后回复2个造花结晶，否则将这张牌翻面。",
        textKo: "당신의 머신에 조화결정이 없다면, 당신의 머신은 TransForm하고, 당신의 연소완료 조화결정 2개를 회복한다. 그렇지 않을 경우, 이 카드를 미사용으로 되돌린다.",
        textEn: "If there are no Artificial Sakura tokens on your machine, TransForm it and recover 2 burned Artificial Sakura tokens. Otherwise, turn this card face-down.",
    },
    "transform-01": {
        megami: "thallya",
        name: "Form: YAKSHA",
        nameEn: "Form: YAKSHA",
        nameZh: "Form: YAKSHA",
        nameZhG1: "亚克夏形态",
        nameKo: "Form: YAKSHA",
        ruby: "フォルム:ヤクシャ",
        rubyEn: "",
        rubyZh: "夜叉形态",
        baseType: "transform",
        type: undefined,
        text: "【変形時】相手は次の開始フェイズにカードを1枚しか引けない。相手を畏縮させる。\n----\n【常時】あなたのマシンに造花結晶がないならば、あなたは基本動作を行えない。\n----\n【追加基本行動：Beta-Edge】\n「適正距離2,4,6,8、2/1 【攻撃後】騎動を行う」の《攻撃》を行う。",
        textZh: "【变形时】对手下个准备阶段只抓1张牌，令对手畏缩。\n----\n【常时】若你没有造花结晶，则你不能进行基本动作。\n----\n【追加基本动作：Beta-Edge】\n进行一次“攻击距离2,4,6,8 伤害2/1 【攻击后】骑动”的攻击。",
        textZhG1: "【变形时】对手下个准备阶段只抓一张牌，对手畏缩。\n----\n【常时】若你没有造花结晶，则你不能进行基本动作。\n----\n【追加基本动作】Beta-Edge：进行一次“攻击距离2,4,6,8 伤害2/1 【攻击后】骑动”的攻击。",
        textKo: "【변형시】상대는 다음 개시 페이즈에 카드를 1장밖에 뽑을 수 없다. 상대를 위축시킨다。\n ----\n 【상시】당신의 머신에 조화결정이 없다면, 당신은 기본동작을 행할 수 없다.\n ----\n 【추가기본행동：Beta-Edge】\n「적정거리2,4,6,8、2/1 【공격후】기동을 한다」의 《공격》을 행한다.",
        textEn: 'TransForm: Your opponent only draws 1 card during their next start of turn phase. Flinch your opponent.\n----\nForced: You cannot perform basic actions if there are no Artificial Sakura tokens on your machine.\n----\nAdditional basic action ("Beta-Edge"): You attack with "Range: 2, 4, 6, 8, Damage: 2/1, After Attack: Maneuver."',
    },
    "transform-02": {
        megami: "thallya",
        name: "Form: NAGA",
        nameEn: "Form: NAGA",
        nameZh: "Form: NAGA",
        nameZhG1: "娜迦形态",
        nameKo: "Form: NAGA",
        ruby: "フォルム:ナーガ",
        rubyEn: "",
        rubyZh: "娜迦形态",
        baseType: "transform",
        type: undefined,
        text: "【変形時】相手のフレアが3以上ならば、フレアが2になるように桜花結晶をダストへ移動させる。\n----\n【追加基本行動：Gamma-Ray】\n相手の山札の一番上のカードを相手の捨て札に置く。",
        textZh: "【变形时】若敌气中的樱花结晶数大于等于3，则保留其中2个，其余移至虚。\n----\n【追加基本动作：Gamma-Ray】\n弃置对手的牌库顶牌。",
        textZhG1: "【变形时】若敌气中的樱花结晶的数目大于3，则保留其中2个樱花结晶，其余移至虚。\n----\n【追加基本动作】Gamma-Ray：弃置对手的牌库顶牌。",
        textKo: "【변형시】상대의 플레어가 3이상이라면、플레어가 2가 되도록 벚꽃 결정을 더스트로 이동시킨다.\n ----\n 【추가기본행동：Gamma-Ray】\n 상대 패산의 가장 위의 카드를 상대의 버림패로 둔다.",
        textEn: 'TransForm: If your opponent has 3 or more Sakura tokens on their Flare, move all but 2 of them to Shadow.\n----\nAdditional basic action ("Gamma-Ray"): Put the top card of your opponent\'s deck into their played pile.',
    },
    "transform-03": {
        megami: "thallya",
        name: "Form: GARUDA",
        nameEn: "Form: GARUDA",
        nameZh: "Form: GARUDA",
        nameZhG1: "迦楼达形态",
        nameKo: "Form: GARUDA",
        ruby: "フォルム:ガルーダ",
        rubyEn: "",
        rubyZh: "迦楼达形态",
        baseType: "transform",
        type: undefined,
        text: "【変形時】カードを2枚引き、このターンの間手札の上限が無くなる。\n----\n【追加基本行動：Delta-Wing】\n現在の間合が7以下ならば、ダスト→間合：1",
        textZh: "【变形时】抓2张牌。本回合你的手牌数量没有上限。\n----\n【追加基本动作：Delta-Wing】\n若当前距离小于等于7，则：虚→1→距",
        textZhG1: "【变形时】抓2张牌。本回合你的手牌数量没有上限。\n----\n【追加基本动作】Delta-Wing：若当前距离小于7，则虚（1）→距",
        textKo: "【변형시】카드를 2장 뽑고, 이 턴 동안 손패의 상한은 없어진다.\n ----\n 【추가기본행동：Delta-Wing】\n 현재 간격이 7 이하라면, 더스트→간격：1",
        textEn: 'TransForm: Draw two cards. You have no maximum hand size this turn.\n----\nAdditional basic action ("Delta-Wing"): If the current Distance is 7 or less:\nShadow (1)→ Distance',
    },
    "12-raira-o-n-1": {
        megami: "raira",
        name: "獣爪",
        nameEn: "Bestial Claw",
        nameZh: "兽爪",
        nameZhG1: "兽爪",
        nameKo: "짐승의 발톱",
        ruby: "じゅうそう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-2",
        damage: "3/1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "12-raira-o-n-2": {
        megami: "raira",
        name: "風雷撃",
        nameEn: "Wind and Thunder",
        nameZh: "风雷击",
        nameZhG1: "风雷击",
        nameKo: "풍뢰격",
        ruby: "ふうらいげき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2",
        damage: "X/2",
        text: "【常時】Xは風神ゲージと雷神ゲージのうち、小さい方の値である。",
        textZh: "【常时】X等于风神槽与雷神槽的值中的较小者。",
        textZhG1: "【常时】X等于风神槽与雷神槽的值中的较小者。",
        textKo: "【상시】X는 풍신 게이지나 뇌신 게이지 중, 작은쪽의 수치가 된다.",
        textEn: "Forced: X is equal to the lower of your Wind and Thunder God gauges.",
    },
    "12-raira-o-n-3": {
        megami: "raira",
        name: "流転爪",
        nameEn: "Claw of Regrowth",
        nameZh: "流转爪",
        nameZhG1: "流转爪",
        nameKo: "윤회의 발톱",
        ruby: "るてんそう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-2",
        damage: "2/1",
        text: "【攻撃後】あなたの捨て札にある《攻撃》カード1枚を選び、山札の一番上に置いてもよい。",
        textZh: "【攻击后】你可以从弃牌区选择1张《攻击》牌，将其置于你的牌库顶。",
        textZhG1: "【攻击后】你可以从弃牌区选择一张《攻击》牌，将其置于你的牌库顶。",
        textKo: "【공격후】당신의 버림패에 있는 《공격》카드 1장을 골라, 패산 맨 위에 두어도 좋다.",
        textEn: "After Attack: You may put an Attack card from your played pile on top of your deck.",
    },
    "12-raira-o-n-4": {
        megami: "raira",
        name: "風走り",
        nameEn: "Windrun",
        nameZh: "疾风步",
        nameZhG1: "疾风步",
        nameKo: "바람 달리기",
        ruby: "かぜばしり",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の間合が3以上ならば、間合→ダスト：2",
        textZh: "若当前距离大于等于3，则：距→2→虚",
        textZhG1: "若当前距离大于3，则距（2）→虚",
        textKo: "현재 간격이 3이상이라면、간격→더스트：2",
        textEn: "If the current Distance is 3 or more:\nDistance (2)→ Shadow",
    },
    "12-raira-o-n-5": {
        megami: "raira",
        name: "風雷の知恵",
        nameEn: "Wisdom of the Gods",
        nameZh: "风雷的智慧",
        nameZhG1: "风雷的知慧",
        nameKo: "풍뢰의 지혜",
        ruby: "ふうらいのちえ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "風神ゲージと雷神ゲージの合計が4以上ならば、あなたの捨て札にある他のメガミのカード1枚を選び、山札の一番上に置いてもよい。 \n風神ゲージか雷神ゲージを1上げる。",
        textZh: "若风神槽与雷神槽的值之和大于等于4，则你可以从弃牌区选择另一柱女神的1张弃牌，将其置于你的牌库顶。\n选择风神槽或雷神槽，其值增加1。",
        textZhG1: "若风神槽与雷神槽的值之和大于4，则你可以从弃牌区选择另一柱女武神的一张牌，将其置于你的牌库顶。选择风神槽或雷神槽，其值增加1。",
        textKo: "풍신 게이지와 뇌신 게이지의 합계가 4이상이라면, 당신의 버림패에 있는 다른 여신 카드 1장을 골라, 패산 맨 위에 두어도 좋다.\n 풍신 게이지나 뇌신 게이지를 1 올린다.",
        textEn: "If the total of your Wind and Thunder God gauges is 4 or more, you may put one of your other Megami's cards from your played pile on top of your deck.\n\nIncrease your Wind God or Thunder God gauge by 1.",
    },
    "12-raira-o-n-6": {
        megami: "raira",
        name: "呼び声",
        nameEn: "Roar",
        nameZh: "呼声",
        nameZhG1: "吼叫",
        nameKo: "울부짖기",
        ruby: "よびごえ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "相手を畏縮させ、以下から1つを選ぶ。\n・風神ゲージと雷神ゲージを1ずつ上げる。\n・手札を全て伏せ札にし、雷神ゲージを2倍にする。",
        textZh: "令对手畏缩。选择一项：\n●风神槽与雷神槽的值各增加1；\n●盖伏所有手牌，雷神槽的值加倍。",
        textZhG1: "对手畏缩。选择1项：\n风神槽与雷神槽的值各增加1；\n盖伏所有手牌，雷神槽的值加倍。",
        textKo: "상대를 위축시키고, 이하에서 하나를 고른다.\n ・풍신 게이지와 뇌신 게이지를 1개씩 올린다.\n ・손패를 모두 덮임패로하고, 뇌신 게이지를 2배로 한다.",
        textEn: "Flinch your opponent. Choose one:\n・Increase your Wind and Thunder God gauges by 1 each.\n・Discard your hand. Double your Thunder God gauge.",
    },
    "12-raira-o-n-7": {
        megami: "raira",
        name: "空駆け",
        nameEn: "Pounce",
        nameZh: "驭空",
        nameZhG1: "驭空",
        nameKo: "하늘 달리기",
        ruby: "そらかけ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "間合⇔ダスト：3",
        textZh: "距↔3↔虚",
        textZhG1: "距（3）⇔ 虚",
        textKo: "간격⇔더스트：3",
        textEn: "Distance (3)⇔ Shadow",
    },
    "12-raira-o-s-1": {
        megami: "raira",
        name: "雷螺風神爪",
        nameEn: "Stormcharged Claw",
        nameZh: "雷螺风神爪",
        nameZhG1: "雷螺风神爪",
        nameKo: "뇌라풍신조",
        ruby: "らいらふうじんそう",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "1-2",
        damage: "2/2",
        cost: "3",
        text: "【常時】あなたの雷神ゲージが4以上ならば、この《攻撃》は+1/+0となる。 \n----\n【再起】あなたの風神ゲージが4以上である。",
        textZh: "【常时】若雷神槽的值大于等于4，则此《攻击》得+1/+0。\n----\n【再起】风神槽的值大于等于4。",
        textZhG1: "【常时】若雷神槽的值大于4，则此《攻击》得+1/+0。\n----\n再起：风神槽的值大于4。",
        textKo: "【상시】당신의 뇌신 게이지가 4이상이라면、이 《공격》은 +1/+0이 된다. \n ----\n 【재기】당신의 풍신 게이지가 4 이상이다.",
        textEn: "Forced: This attack gains +1/+0 if your Thunder God gauge is 4 or more.\n----\nResurgence: Your Wind God gauge is 4 or more.",
    },
    "12-raira-o-s-2": {
        megami: "raira",
        name: "天雷召喚陣",
        nameEn: "Thundercall Ritual",
        nameZh: "天雷召唤阵",
        nameZhG1: "天雷召唤阵",
        nameKo: "천뢰소환진",
        ruby: "てんらいしょうかんじん",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "fullpower",
        cost: "6",
        text: "攻撃『適正距離0-10、1/1』をX回行う。Xは雷神ゲージの半分(切り上げ)に等しい。",
        textZh: "进行X次“攻击距离0-10、伤害1/1”的攻击，X等于雷神槽的值的一半（向上取整）。",
        textZhG1: "进行X次“攻击距离0-10 伤害1/1”的攻击，X等于雷神槽的值的一半（向上取整）。",
        textKo: "공격『적정거리0-10、1/1』을 X번 행한다. X는 뇌신 게이지의 절반(올림값)과 같다.",
        textEn: 'You attack with "Range: 0-10, Damage: 1/1" X times, where X is equal to half your Thunder God gauge, rounded up.',
    },
    "12-raira-o-s-3": {
        megami: "raira",
        name: "風魔招来孔",
        nameEn: "Windbeast Invocation",
        nameZh: "风魔招来孔",
        nameZhG1: "风魔招来孔",
        nameKo: "풍마초래공",
        ruby: "ふうましょうらいこう",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "0",
        text: "現在の風神ゲージに応じて、以下の切札を追加札から未使用で得る(条件を満たしたものは全て得る)。その後、このカードを取り除く。 \n3以上……風魔旋風 \n6以上……風魔纏廻 \n10以上……風魔天狗道",
        textZh: "根据现在的风神槽的值，从追加牌区以未使用状态获得以下王牌（满足条件的全部都可以获得）。然后将此牌移出游戏。\n3以上……『风魔旋风』\n6以上……『风魔缠回』\n10以上……『风魔天狗道』",
        textZhG1: "根据现在的风神槽的值，将以下牌背面朝上加入王牌，然后将此牌移出游戏。\n3以上……风魔旋风\n6以上……风魔缠回\n10以上……风魔天狗道",
        textKo: "현재 풍신 게이지에 따라, 이하의 비장패를 추가패에서 미사용으로 얻는다(조건을 만족한 것은 모두 얻는다). 그 후, 이 카드를 제외한다.\n 3이상……풍마선풍 \n 6이상……풍마전회 \n 10이상……풍마천구도",
        textEn: 'Based on your Wind God gauge, add your set aside "Windbeast" cards to your Special cards, face-down. Remove this card from the game.\n3 or more: Windbeast Manifestation\n6 or more: Windbeast Reincarnation\n10 or more: Windbeast Perdition\n(Add all cards you meet the requirement for.)',
        removable: true,
    },
    "12-raira-o-s-4": {
        megami: "raira",
        name: "円環輪廻旋",
        nameEn: "Death and Rebirth",
        nameZh: "圆环轮回旋",
        nameZhG1: "圆环轮回旋",
        nameKo: "원환룬회선",
        ruby: "えんかんりんかいせん",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "fullpower",
        capacity: "5",
        cost: "3",
        text: "【展開中】あなたが《付与》でない通常札を使用した場合、それを捨て札にする代わりに山札の底に置く。",
        textZh: "【展开中】每当你使用的非《付与》的牌结算完毕时，以将其置于你的牌库底来代替该牌将进入弃牌区。",
        textZhG1: "每当你使用的非《付与》的牌结算完毕时，若该牌将进入你的弃牌区，则改为将其置于你的牌库底。",
        textKo: "【전개중】당신이 《부여》가 아닌 통상패를 사용했을 경우, 그것을 버림패로 하는 대신 패산 밑에 둔다.",
        textEn: "Ongoing: Whenever you play a non-Special, non-Enhancement card, put that card on the bottom of your deck instead of into your played pile after it resolves.",
    },
    "12-raira-o-s-3-ex1": {
        megami: "raira",
        name: "風魔旋風",
        nameEn: "Windbeast Manifestation",
        nameZh: "风魔旋风",
        nameZhG1: "风魔旋风",
        nameKo: "풍마선풍",
        ruby: "ふうませんぷう",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "12-raira-o-s-3",
        type: "attack",
        range: "1-3",
        damage: "1/2",
        cost: "1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "12-raira-o-s-3-ex2": {
        megami: "raira",
        name: "風魔纏廻",
        nameEn: "Windbeast Reincarnation",
        nameZh: "风魔缠回",
        nameZhG1: "风魔缠回",
        nameKo: "풍마전회",
        ruby: "ふうまてんかい",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "12-raira-o-s-3",
        type: "action",
        cost: "1",
        text: "あなたの使用済の切札を1枚選び、それを未使用に戻す。 \n【使用済】あなたの切札の消費は1少なくなる(0未満にはならない)。",
        textZh: "将你的1张处于使用后状态的王牌变为未使用状态。\n【使用后】你的王牌的费用减小1（王牌的费用不会为负）。",
        textZhG1: "将你的一张正面朝上的王牌翻面。【使用后】你的王牌的费用减小1（王牌的费用不会为负）。",
        textKo: "당신의 사용완료 비장패를 1장 골라, 그것을 미사용으로 되돌린다.\n 【사용완료】당신의 비장패의 소비는 1 적게 된다.(0 미만으로는 되지 않는다).",
        textEn: "Turn one of your Devoted Special cards face-down.\n\nDevoted: Your Special cards cost 1 less Flare (to a minimum of 0).",
    },
    "12-raira-o-s-3-ex3": {
        megami: "raira",
        name: "風魔天狗道",
        nameEn: "Windbeast Perdition",
        nameZh: "风魔天狗道",
        nameZhG1: "风魔天狗道",
        nameKo: "풍마천구도",
        ruby: "ふうまてんぐどう",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "12-raira-o-s-3",
        type: "action",
        subType: "reaction",
        cost: "4",
        text: "ダスト⇔間合：5 \nあなたはこの効果で本来より少ない個数の桜花結晶を動かしてもよい。その後、このカードを取り除く。",
        textZh: "距↔5↔虚\n结算上述效果时，你可以选择移动少于5个樱花结晶。\n之后，将此牌移出游戏。",
        textZhG1: "距(5)⇔ 虚\n结算上述效果时，你可以选择移动少于5个樱花结晶。\n将此牌移出游戏。",
        textKo: "더스트⇔간격：5 \n 당신은 이 효과로 원래보다 적은 갯수의 벚꽃 결정을 움직여도 좋다.그 후, 이 카드는 제외된다.",
        textEn: "Distance (5)⇔ Shadow\nYou may choose to move fewer than 5 Sakura tokens with this effect.\n\nRemove this card from the game.",
        removable: true,
    },
    "13-utsuro-o-n-1": {
        megami: "utsuro",
        name: "円月",
        nameEn: "Full Moon",
        nameZh: "圆月",
        nameZhG1: "圆月",
        nameKo: "만월",
        ruby: "えんげつ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "6-7",
        damage: "2/2",
        text: "【常時】灰塵-ダストが12以上ならば、この《攻撃》のオーラへのダメージは「-」になる。",
        textZh: "【常时】灰尘～若虚中的樱花结晶数大于等于12，则此《攻击》对装伤害改为「-」。",
        textZhG1: "【常时】灰尘-若虚中的樱花结晶的数目大于12，则此《攻击》对装伤害改为“-”。",
        textKo: "【상시】회진-더스트가 12 이상이라면、이 《공격》의 오라로의 대미지는 「-」가 된다.",
        textEn: 'Forced: Ashen - If there are 12 or more Sakura tokens on Shadow, this attack\'s Damage to Aura becomes "-".',
    },
    "13-utsuro-o-n-2": {
        megami: "utsuro",
        name: "黒き波動",
        nameEn: "Dark Pulse",
        nameZh: "漆黑波动",
        nameZhG1: "黑之波动",
        nameKo: "검은 파동",
        ruby: "くろきはどう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-7",
        damage: "1/2",
        text: "【攻撃後】相手がオーラへのダメージを選んだならば、相手の手札を見てその中から1枚を選び、それを捨て札にする。",
        textZh: "【攻击后】若对手选择由装承受此次伤害，则检视对手的手牌，弃置其中1张。",
        textZhG1: "【攻击后】若对手选择由装承受此次伤害，则检视对手的手牌，弃置其中一张。",
        textKo: "【공격후】상대가 오라로의 대미지를 골랐다면, 상대의 손패를 보고 그 중 1장을 골라, 그것을 버림패로 한다.",
        textEn: "After Attack: If your opponent chose to take damage to Aura, look at their hand. Choose a card from it and put it into their played pile.",
    },
    "13-utsuro-o-n-3": {
        megami: "utsuro",
        name: "刈取り",
        nameEn: "Reap",
        nameZh: "收割",
        nameZhG1: "收割",
        nameKo: "수확",
        ruby: "かりとり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4",
        damage: "-/0",
        text: "【攻撃後】相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を合計2つダストへ移動させる。 \n【攻撃後】相手の付与札を1枚選んでもよい。そうした場合、その付与札の上から桜花結晶を2つダストへ送る。",
        textZh: "【攻击后】对手从其装、气、命三个区域中选择共2个樱花结晶移至虚。\n【攻击后】选择对手的1张展开中的《付与》牌，将其上2个樱花结晶移至虚。",
        textZhG1: "【攻击后】对手从其装、气、命三个区域中选择共2个樱花结晶移至虚。\n【攻击后】选择对手的一张展开中的《付与》牌，将其上2个樱花结晶移至虚。",
        textKo: "【공격후】상대는 상대의 오라, 플레어, 라이프 중 원하는 곳들에서 벚꽃 결정을 총합 2개를 더스트로 이동시킨다. \n【공격후】상대의 부여패를 1장 선택해도 좋다. 그럴 경우, 그 부여패 위에서 벚꽃 결정을 2개 더스트로 보낸다.",
        textEn: "After Attack: Your opponent moves a total of 2 Sakura tokens from their Aura, Flare, and Life to Shadow, in any combination.\n\nAfter Attack: You may choose one of your opponent's Enhancements. If you do, move 2 Sakura tokens from it to Shadow.",
    },
    "13-utsuro-o-n-4": {
        megami: "utsuro",
        name: "重圧",
        nameEn: "Pressure",
        nameZh: "重压",
        nameZhG1: "重压",
        nameKo: "중압",
        ruby: "じゅうあつ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を1つダストへ移動させる。 \n灰塵-ダストが12以上ならば、相手を畏縮させる。",
        textZh: "对手从其装、气、命三个区域中选择1个樱花结晶移至虚。\n灰尘～若虚中的樱花结晶数大于等于12，则令对手畏缩。",
        textZhG1: "对手从其装、气、命三个区域中选择1个樱花结晶移至虚。 灰尘-若虚中的樱花结晶的数目大于12，则对手畏缩。",
        textKo: "상대는 상대의 오라, 플레어, 라이프 중 원하는 곳에서 벚꽃 결정을 하나 더스트로 이동시킨다.\n 회진-더스트가 12 이상이라면、상대를 위축시킨다.",
        textEn: "Your opponent moves 1 Sakura token from their Aura, Flare, or Life to Shadow.\n\nAshen - If there are 12 or more Sakura tokens on Shadow, flinch your opponent.",
    },
    "13-utsuro-o-n-5": {
        megami: "utsuro",
        name: "影の翅",
        nameEn: "Shadow Wing",
        nameZh: "影之翅",
        nameZhG1: "影之翅",
        nameKo: "그림자 날개",
        ruby: "かげのはね",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "このターン中、現在の間合は2増加し、達人の間合は2大きくなる。",
        textZh: "本回合中，当前距离增大2，达人距离的值增大2。",
        textZhG1: "直到回合结束，当前距离增大2，达人距离的值增大2。",
        textKo: "이 턴에는, 현재 간격은 2 증가하고, 달인의 간격은 2 크게 된다.",
        textEn: "For the rest of the turn, the current Distance is increased by 2, and the size of the Mastery Zone is increased by 2.",
    },
    "13-utsuro-o-n-6": {
        megami: "utsuro",
        name: "影の壁",
        nameEn: "Shadow Wall",
        nameZh: "影之壁",
        nameZhG1: "影之壁",
        nameKo: "그림자 벽",
        ruby: "かげのかべ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "対応した《攻撃》は+0/-1となる。",
        textZh: "被对应的《攻击》得-0/-1。",
        textZhG1: "被对应的《攻击》得-0/-1。",
        textKo: "대응한 《공격》은 +0/-1이 된다.",
        textEn: "The attack this card was played as a Reaction to gets +0/-1.",
    },
    "13-utsuro-o-n-7": {
        megami: "utsuro",
        name: "遺灰呪",
        nameEn: "Curse of Ashes",
        nameZh: "遗灰咒",
        nameZhG1: "遗灰咒",
        nameKo: "유회주",
        ruby: "いかいじゅ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "fullpower",
        capacity: "2",
        text: "【展開時】相オーラ→ダスト：3 \n【破棄時】灰塵-ダストが12以上ならば以下を行う。 \nダスト→相オーラ：2、相ライフ→ダスト：1",
        textZh: "【展开时】敌装→3→虚 \n【破弃时】灰尘～若虚中的樱花结晶数大于等于12，则：\n虚→2→敌装，敌命→1→虚",
        textZhG1: "【展开时】敌装（3）→虚 \n【破弃时】灰尘-若虚中的樱花结晶的数目大于12，则虚（2）→敌装 敌命（1）→虚",
        textKo: "【전개시】상대 오라→더스트：3 \n 【파기시】회진-더스트가 12이상이라면 아래를 행한다. \n 더스트→상대 오라：2、상대 라이프→더스트：1",
        textEn: "Initialize: Opponent's Aura (3)→ Shadow\n\nDisenchant: Ashen - If there are 12 or more Sakura tokens on Shadow:\nShadow (2)→ Opponent's Aura\nOpponent's Life (1)→ Shadow",
    },
    "13-utsuro-o-s-1": {
        megami: "utsuro",
        name: "灰滅",
        nameEn: "вымирание",
        nameZh: "灰灭",
        nameZhG1: "灰灭",
        nameKo: "회멸~вымирание~",
        ruby: "ヴィミラニエ",
        rubyEn: "vymiraniye",
        rubyZh: "вымирание",
        baseType: "special",
        type: "action",
        cost: "24",
        text: "【常時】このカードの消費はダストの数だけ少なくなる。 \n相ライフ→ダスト：3 \nこのカードを取り除く。",
        textZh: "【常时】此牌的费用减小X，X等于虚中的樱花结晶的数目。\n敌命→3→虚\n将此牌移出游戏。",
        textZhG1: "【常时】此牌的费用减小X，X等于虚中的樱花结晶的数目。敌命（3）→虚 将此牌移出游戏。",
        textKo: "【상시】이 카드의 소비는 더스트의 수 만큼 줄어든다.\n 상대 라이프→더스트：3 \n 이 카드를 제외한다.",
        textEn: "Forced: This card costs 1 less for each Sakura token on Shadow.\n\nOpponent's Life (3)→ Shadow\n\nRemove this card from the game.",
        removable: true,
    },
    "13-utsuro-o-s-2": {
        megami: "utsuro",
        name: "虚偽",
        nameEn: "Ложь",
        nameZh: "虚伪",
        nameZhG1: "虚伪",
        nameKo: "허위~Ложь~",
        ruby: "ローシェ",
        rubyEn: "Lozh'",
        rubyZh: "Ложь",
        baseType: "special",
        type: "enhance",
        subType: "reaction",
        capacity: "3",
        cost: "3",
        text: "【展開中】相手の《攻撃》は距離縮小(近1)を得て、【攻撃後】効果が解決されない。 \n【展開中】相手の《付与》カードは納が1減少し、【破棄時】効果が解決されない。",
        textZh: "【展开中】对手的《攻击》得距离缩小（近1），且不结算其【攻击后】效果。\n【展开中】对手的《付与》牌的纳减少1，且不结算其【破弃时】效果。",
        textZhG1: "【展开中】对手的《攻击》得距离缩小（近1），其攻击后效果无效。\n【展开中】对手的《付与》牌的纳减少1，其破弃时效果无效。",
        textKo: "【전개중】상대의 《공격》은 거리축소(근1)을 얻고, 【공격후】효과가 해결되지 않는다.\n 【전개중】상대의 《부여》카드는 납이 1 감소하고, 【파기시】효과가 해결되지 않는다.",
        textEn: "Ongoing: All your opponent's attacks have their Ranges reduced by 1 in the close direction, and lose their After Attack effects.\n\nOngoing: All your opponent's Enhancements have their Charges reduced by 1, and lose their Disenchant effects.",
    },
    "13-utsuro-o-s-3": {
        megami: "utsuro",
        name: "終末",
        nameEn: "Конец",
        nameZh: "终末",
        nameZhG1: "终末",
        nameKo: "종말~Конец~",
        ruby: "カニェッツ",
        rubyEn: "Konets",
        rubyZh: "Конец",
        baseType: "special",
        type: "enhance",
        capacity: "3",
        cost: "2",
        text: "【展開中】あなたに1以上のダメージを与えた《攻撃》の解決後に、このカードの上の桜花結晶を全てをダストに送る。 \n【破棄時】現在のフェイズを終了する。 \n----\n【再起】灰塵-ダストが12以上である。",
        textZh: "【展开中】若你因被攻击受到了1点或以上的伤害，则在该《攻击》效果结算完毕后，将此牌上所有樱花结晶移入虚。\n【破弃时】结束当前阶段。\n----\n【再起】灰尘～虚中的樱花结晶数大于等于12。",
        textZhG1: "【展开中】若你受到了大于1点的伤害，则将此牌上所有樱花结晶移入虚。\n【破弃时】结束当前阶段。\n----\n【再起】灰尘-虚中的樱花结晶的数目大于12。",
        textKo: "【전개중】당신에게 1 이상의 대미지를 준  《공격》을 해결한 뒤, 이 카드 위의 벚꽃 결정을 모두 더스트로 보낸다.\n 【파기시】현재 페이즈를 종료한다.\n ----\n 【재기】회진-더스트가 12 이상이다.",
        textEn: "Ongoing: After an attack that dealt you 1 or more damage resolves, move all Sakura tokens on this card to Shadow.\n\nDisenchant: End the current phase.\n----\nResurgence: Ashen - There are 12 or more Sakura tokens on Shadow.",
    },
    "13-utsuro-o-s-4": {
        megami: "utsuro",
        name: "魔食",
        nameEn: "Эрозия",
        nameZh: "魔食",
        nameZhG1: "魔食",
        nameKo: "마식~Эрозия~",
        ruby: "エロージャ",
        rubyEn: "Eroziya",
        rubyZh: "Эрозия",
        baseType: "special",
        type: "action",
        cost: "5",
        text: "【使用済】あなたの開始フェイズの開始時に相手は以下のどちらかを選ぶ。\n・相オーラ→ダスト：1\n・相フレア→ダスト：2",
        textZh: "【使用后】每当你的准备阶段开始时，对手选择一项：\n●敌装→1→虚\n●敌气→2→虚",
        textZhG1: "【使用后】当你的准备阶段开始时，对手选择一项：\n1.敌装（1）→虚；\n2.敌气（2）→虚。",
        textKo: "【사용완료】당신의 개시 페이즈 시작시에 상대는 이하에서 하나를 고른다.\n ・상대 오라→더스트：1\n ・상대 플레어→더스트：2",
        textEn: "Devoted: At the beginning of your turn, your opponent chooses one:\n・Opponent's Aura (1)→ Shadow\n・Opponent's Flare (2)→ Shadow",
    },
};
// シーズン3
exports.S3_UPDATED_CARD_DATA = {
    "02-saine-o-n-3": {
        megami: "saine",
        name: "石突",
        nameEn: "Hilt Slam",
        nameZh: "石突",
        nameZhG1: "石突",
        nameKo: "석돌 치기",
        ruby: "いしづき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "2-3",
        damage: "2/1",
        text: "【攻撃後】八相-あなたのオーラが0ならば、ダスト→間合：1",
        textZh: "【攻击后】八相～若自装中没有樱花结晶，则：虚→1→距",
        textZhG1: "【攻击后】八相-若自装中没有樱花结晶，则虚（1）→距",
        textKo: "【공격후】팔상-당신의 오라가 0이라면, 더스트→간격：1",
        textEn: "After Attack: Idea - If you have no Sakura tokens on your Aura:\n\nShadow (1)→ Distance",
    },
    "02-saine-o-n-6": {
        megami: "saine",
        name: "衝音晶",
        nameEn: "Wavering Crystal",
        nameZh: "冲音晶",
        nameZhG1: "冲音晶",
        nameKo: "축음정",
        ruby: "しょうおんしょう",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "reaction",
        capacity: "1",
        text: "【展開時】対応した《攻撃》は-1/+0となる。\n【破棄時】攻撃『適正距離0-10、1/-、対応不可』を行い、ダスト→間合：1",
        textZh: "【展开时】被对应的《攻击》得-1/+0。\n【破弃时】进行一次“攻击距离0-10、伤害1/-、不可被对应”的攻击。虚→1→距",
        textZhG1: "【展开时】被对应的《攻击》得-1/-0 \n【破弃时】进行一次“攻击距离0-10 伤害1/- 不可被对应”的攻击。虚（1）→距",
        textKo: "【전개시】대응한 《공격》은 -1/+0이 된다.\n【파기시】공격『적정거리 0-10、1/-、대응불가』를 행하고, 더스트→간격：1",
        textEn: 'Initialize: The attack you played this card as a Reaction to gets -1/+0.\n\nDisenchant: You attack with "Range: 0-10, Damage: 1/-, No Reactions". Then:\nShadow (1)→ Distance.',
    },
    "04-tokoyo-A1-n-7": null,
    "04-tokoyo-A1-n-5": {
        megami: "tokoyo",
        anotherID: "A1",
        replace: "04-tokoyo-o-n-5",
        name: "陽の音",
        nameEn: "Sound of Sun",
        nameZh: "阳之音",
        nameZhG1: "阳之音",
        nameKo: "햇볕의 소리",
        ruby: "ひのね",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開中】あなたが《対応》カードを使用した時、その解決後にダスト→自オーラ：1 \n【展開中】相手のターンにこのカードの上の桜花結晶は移動しない。",
        textZh: "【展开中】每当你使用的具《对应》副类别的牌结算完毕时：虚→1→自装\n【展开中】对手的回合内，此牌上的樱花结晶不会移动。",
        textZhG1: "【展开中】每当你使用的具《对应》副类别的牌结算完毕时，虚（1）→自装\n【展开中】对手的回合内不能移除此牌上的樱花结晶。",
        textKo: "【전개중】당신이 《대응》카드를 사용했을 때, 그 해결 후 더스트→자신 오라：1 \n【전개중】상대 턴에 이 카드 위 벚꽃 결정은 이동하지 않는다.",
        textEn: "Ongoing: Whenever you play a Reaction card, after that card resolves:\nShadow (1)→ Your Aura\n\nOngoing: Sakura tokens cannot leave this card on your opponent's turn.",
    },
    "04-tokoyo-A1-s-2": {
        megami: "tokoyo",
        anotherID: "A1",
        replace: "04-tokoyo-o-s-2",
        name: "二重奏:吹弾陽明",
        nameEn: "Duet: Radiant Luminosity",
        nameZh: "二重奏：吹弹阳明",
        nameZhG1: "二重奏：吹弹阳明",
        nameKo: "이중주:취탄양명",
        ruby: "にじゅうそう：すいだんようめい",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "【使用済】あなたの開始フェイズの開始時に以下のどちらかを行ってもよい。\n・あなたの伏せ札からカード1枚を選び、山札の底に置く。 \n・あなたの捨て札から《行動》カード1枚を選び、山札の底に置く。 \n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。",
        textZh: "【使用后】每当你的准备阶段开始时，选择一项：\n●从你的盖牌区中选择1张牌，将其置于你的牌库底；\n●从你的弃牌区中选择1张《行动》牌，将其置于你的牌库底。\n----\n【即再起】自命受到除重铸牌库以外的1点或以上的伤害。",
        textZhG1: "【使用后】你的准备阶段开始时，选择一项：\n1.从你的盖牌区中选择一张牌，将其置于你的牌库底；\n2.从你的弃牌区中选择一张《行动》牌，将其置于你的牌库底。\n----\n【即再起】自命受到除重铸牌库以外的1点以上的伤害。",
        textKo: "【사용완료】당신의 개시 페이즈 시작시에 이하에서 하나를 행해도 좋다.\n・당신의 덮임패에서 카드를 1장 골라, 패산 밑에 둔다.\n・당신의 버림패에서 《행동》카드를 1장 골라, 패산 밑에 둔다.\n----\n【즉재기】당신이 재구성 이외로 라이프에 1 이상의 대미지를 받는다.",
        textEn: "Devoted: At the beginning of your turn, you may choose one:\n・Put a card from your discard pile on the bottom of your deck.\n・Put an Action card from your played pile on the bottom of your deck.\n----\nImmediate Resurgence: You take 1 or more damage to your Life, excluding reshuffle damage.",
    },
    "05-oboro-o-n-4": {
        megami: "oboro",
        name: "忍歩",
        nameEn: "Ninpo-Walk",
        nameZh: "忍步",
        nameZhG1: "忍步",
        nameKo: "닌자걸음",
        ruby: "にんぽ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "設置 \nダスト→間合：1 \nこのカードを伏せ札から使用したならば、伏せ札から設置を持つカードを1枚使用してもよい。",
        textZh: "设置\n虚→1→距\n若你从盖牌区中使用此牌，则你可以从盖牌区中额外使用1张具设置关键字的牌。",
        textZhG1: "设置\n虚 (1)→距\n若你从盖牌区中使用此牌，则你可以从盖牌区中额外使用一张具设置关键字的牌。",
        textKo: "설치 \n더스트→간격：1 \n이 카드를 덮임패에서 사용했다면, 덮임패에서 설치를 갖는 카드를 1장 사용해도 좋다.",
        textEn: "Trap\n\nShadow (1)→ Distance\n\nIf this card was played from your discard pile, you may play a card with Trap from your discard pile.",
    },
    "05-oboro-o-s-2": {
        megami: "oboro",
        name: "鳶影",
        nameEn: "Tobi-Kage",
        nameZh: "鸢影",
        nameZhG1: "鸢影",
        nameKo: "토비카게",
        ruby: "とびかげ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "4",
        text: "伏せ札から《全力》でないカードを1枚選び、そのカードを使用してもよい。この際、このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。",
        textZh: "从盖牌区中选择1张非《全力》的牌使用。若此牌对应了一个《攻击》，则视为所选择的牌也对应了那个《攻击》。",
        textZhG1: "从盖牌区中选择一张非《全力》的牌使用。若此牌对应了一个《攻击》，则视为所选择的牌代替此牌对应了那个《攻击》。",
        textKo: "덮임패에서 《전력》이 아닌 카드를 1장 골라, 그 카드를 사용해도 좋다. 이 때, 이 카드가 대응하는 《공격》이 있다면, 사용된 카드는 그것에 대응하고 있는것으로 취급한다.",
        textEn: "Reveal a non-Throughout card in your discard pile and play it. If this card was played as a Reaction to an attack, treat that card as if it were played as a Reaction to that attack.",
    },
    "05-oboro-o-s-4": {
        megami: "oboro",
        name: "壬蔓",
        nameEn: "Mi-Kazura",
        nameZh: "壬蔓",
        nameZhG1: "壬蔓",
        nameKo: "미카즈라",
        ruby: "みかずら",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-7",
        damage: "1/1",
        cost: "0",
        text: "ダスト→自フレア：1 \n----\n【再起】あなたのフレアが0である。",
        textZh: "虚→1→自气 \n----\n【再起】自气中没有樱花结晶。",
        textZhG1: "虚（1）→自气 \n----\n【再起】自气中没有樱花结晶。",
        textKo: "더스트→자신 플레어：1 \n ----\n 【재기】당신의 플레어가 0이다.",
        textEn: "After Attack: Shadow (1)→ Your Flare\n----\nResurgence: There are no Sakura tokens on your Flare.",
    },
    "07-shinra-o-n-6": {
        megami: "shinra",
        name: "壮語",
        nameEn: "Eloquence",
        nameZh: "壮语",
        nameZhG1: "壮语",
        nameKo: "장담",
        ruby: "そうご",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【破棄時】計略を実行し、次の計略を準備する。 \n[神算] あなたは集中力を1得て、このカードを山札の一番上に置く。 \n[鬼謀] 相手の手札が1枚以下ならば、相手を畏縮させ、相手はカードを3枚引き、相手は手札を2枚捨て札にする。",
        textZh: "【破弃时】实行当前计略，准备下个计略。\n----\n[神算] 你获得1点集中力，将此牌置于你的牌库顶。\n----\n[鬼谋] 若对手的手牌不大于1张，则令对手畏缩，对手抓3张牌，然后弃2张牌。",
        textZhG1: "【破弃时】实行当前计略，准备下个计略。\n神算：你获得1点集中力，将此牌置于你的牌库顶。\n鬼谋：若对手的手牌少于1张，则对手畏缩，对手抓3张牌，然后弃2张牌。",
        textKo: "【파기시】계략을 실행하고, 다음 계략을 준비한다.\n [신산] 당신은 집중력을 1 얻고, 이 카드를 패산의 맨 위에 둔다.\n [귀모] 상대 손패가 1장 이하라면, 상대를 위축시키고, 상대는 카드를 3장 뽑고, 상대는 손패를 2장 버림패로 한다.",
        textEn: "Disenchant: Enact your current Plan, then prepare your next one.\n\nDivine - Gain 1 Vigor. Put this card on the top of your deck.\n\nDevious - If your opponent has 1 or fewer cards in hand, flinch them, they draw 3 cards, then they put 2 cards from their hand into their played pile.",
    },
    "11-thallya-o-s-3": {
        megami: "thallya",
        name: "Thallya's Masterpiece",
        nameEn: "Thallya's Masterpiece",
        nameZh: "Thallya's Masterpiece",
        nameZhG1: "Thallya's Masterpiece",
        nameKo: "Thallya's Masterpiece",
        ruby: "サリヤズ　マスターピース",
        rubyEn: "",
        rubyZh: "萨莉娅的绝技",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "【使用済】あなたのターンに、あなたが基本動作以外の方法で騎動を行い、間合を変化させるたびに\nダスト⇔間合：1 \nを行ってもよい。",
        textZh: "【使用后】你的回合内，每当你由于基本动作以外的效果发动骑动结算完毕时，若此次骑动改变了距离，则你可以选择：虚↔1↔距",
        textZhG1: "【使用后】你的回合内，每当你的骑动效果结算完毕时，若此效果改变了距离且不属于基本动作，则你可以选择\n虚（1）⇔ 距",
        textKo: "【사용완료】당신의 턴에, 당신이 기본동작 이외의 방법으로 기동을 행하고, 간격에 변화를 줄 때마다\n더스트⇔간격：1 \n를 행해도 좋다.",
        textEn: "Devoted: During your turn, whenever your non-basic action Maneuver changes the Distance, you may:\nShadow (1)⇔ Distance",
    },
    "11-thallya-o-s-4": {
        megami: "thallya",
        name: "Julia's BlackBox",
        nameEn: "Julia's BlackBox",
        nameZh: "Julia's BlackBox",
        nameZhG1: "Julia's BlackBox",
        nameKo: "Julia's BlackBox",
        ruby: "ジュリアズ　ブラックボックス",
        rubyEn: "",
        rubyZh: "尤里娅的黑盒子",
        baseType: "special",
        type: "action",
        subType: "fullpower",
        cost: "2",
        text: "あなたのマシンに造花結晶がないならば、あなたのマシンはTransFormし、あなたの燃焼済の造花結晶を2つ回復する。そうでない場合、このカードを未使用に戻す。",
        textZh: "若你的引擎里没有造花结晶，则TransForm，然后回复2个已燃烧的造花结晶。若非如此，将此牌变为未使用状态。",
        textZhG1: "若你的造花结晶的数目为0，则TRANSFORM，然后回复2个造花结晶，否则将此牌翻面。",
        textKo: "당신의 머신에 조화결정이 없다면, 당신의 머신은 TransForm하고, 당신의 연소완료 조화결정을 2개 회복한다. 그렇지 않을 경우, 이 카드를 미사용으로 되돌린다.",
        textEn: "If there are no Artificial Sakura tokens on your machine, TransForm it and recover 2 burned Artificial Sakura tokens. Otherwise, turn this card face-down.",
    },
    "05-oboro-A1-n-2": {
        megami: "oboro",
        anotherID: "A1",
        replace: "05-oboro-o-n-2",
        name: "手裏剣",
        nameEn: "Shuriken",
        nameZh: "手里剑",
        nameZhG1: "手里剑",
        nameKo: "수리검",
        ruby: "しゅりけん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        damage: "2/1",
        text: "【常時】あなたの終了フェイズに両者の伏せ札が合計5枚以上あるならば、このカードを捨て札から手札に戻してもよい。",
        textZh: "【常时】在你的结束阶段，若双方盖牌区中的牌张数之和大于等于5，则你可以将此牌从弃牌区置入手牌。",
        textZhG1: "【常时】你的结束阶段开始时，若双方盖牌区中的牌张数之和大于5，则你可以将此牌从弃牌区置入手牌。",
        textKo: "【상시】당신의 종료 페이즈에 양플레이어의 덮임패 합계가 5장 이상이라면, 이 카드를 덮임패에서 손패로 되돌려도 좋다.",
        textEn: "Forced: At the end of your turn, if there are 5 or more cards in both players' discard piles combined, you may return this card from your played pile to your hand.",
    },
    "05-oboro-A1-n-3": {
        megami: "oboro",
        anotherID: "A1",
        replace: "05-oboro-o-n-3",
        name: "不意打ち",
        nameEn: "Sneak Attack",
        nameZh: "突袭",
        nameZhG1: "突袭",
        nameKo: "기습",
        ruby: "ふいうち",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "1-4",
        damage: "4/3",
        text: "対応不可（通常札） \n【常時】この《攻撃》は-X/+0となる。Xは相手の伏せ札の枚数に等しい。",
        textZh: "不可被对应（通常牌）\n【常时】此《攻击》得-X/+0，X等于对手盖牌区中的牌张数。",
        textZhG1: "此牌不可被通常牌对应。\n【常时】此《攻击》得-X/+0，X等于对手盖牌区中的牌张数。",
        textKo: "대응불가（통상패） \n【상시】이 《공격》은 -X/+0 가 된다. X는 상대 덮임패의 장수와 같다.",
        textEn: "No Reactions (Normal)\n\nForced: This attack gets -X/+0. X is the number of cards in your opponent's discard pile.",
    },
    "05-oboro-A1-s-4": {
        megami: "oboro",
        anotherID: "A1",
        replace: "05-oboro-o-s-4",
        name: "神代枝",
        nameEn: "Twig of the Sacred Sakura",
        nameZh: "神代枝",
        nameZhG1: "神代枝",
        nameKo: "신이 깃든 가지",
        ruby: "かみしろのえ",
        rubyEn: "",
        baseType: "special",
        exchangableTo: "05-oboro-A1-s-4-ex1",
        type: "action",
        subType: "fullpower",
        cost: "0",
        text: "ゲーム外→自オーラ：1 \nゲーム外→自フレア：1 \nこのカードを取り除き、切札「最後の結晶」を追加札から未使用で得る。",
        textZh: "游戏外→1→自装\n游戏外→1→自气\n将此牌移出游戏，从追加牌区以未使用状态获得王牌『最后的结晶』。",
        textZhG1: "游戏外（1）→自装\n游戏外（1）→自气\n将追加牌『最后的结晶』背面朝上加入王牌，将此牌移出游戏。",
        textKo: "게임 밖→자신 오라：1 \n게임 밖→자신 플레어：1 \n이 카드를 제외하고, 비장패 「최후의 결정」을 추가패에서 미사용으로 얻는다.",
        textEn: 'Out-of-Game (1)→ Your Aura\nOut-of-Game (1)→ Your Flare\n\nRemove this card from the game. Add your set aside "The Final Petal" to your Special cards, face-down.',
        removable: true,
    },
    "05-oboro-A1-s-4-ex1": {
        megami: "oboro",
        anotherID: "A1",
        replace: "",
        name: "最後の結晶",
        nameEn: "The Final Petal",
        nameZh: "最后的结晶",
        nameZhG1: "最后的结晶",
        nameKo: "최후의 결정",
        ruby: "さいごのけっしょう",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "05-oboro-A1-s-4",
        type: "action",
        cost: "2",
        text: "【常時】このカードは通常の方法では使用できない。あなたが初めて敗北するならば、代わりにこのカードを使用してもよい(消費は支払う)。 \nダスト→自ライフ：1",
        textZh: "【常时】这张牌不能以正常方法使用。仅当你第一次将要输掉本局游戏时，可以以立即使用此牌（仍需支付费用）来代替失败的发生。\n虚→1→自命",
        textZhG1: "【常时】只能当你将受到大于自命中樱花结晶数目的命伤时使用此牌。每局游戏限使用一次。\n防止此次命伤，虚（1）→自命",
        textKo: "【상시】이 카드는 통상 방법으로는 사용 할 수 없다. 당신이 처음 패배하려 한다면, 대신 이 카드를 사용해도 좋다(소비는 지불한다). \n더스트→자신 라이프：1",
        textEn: "Forced: This card has no effect when played normally. When you would lose the game for the first time, instead you may play this card (paying its cost).\n\nShadow (1)→ Your Life",
    },
    "09-chikage-A1-n-5": {
        megami: "chikage",
        anotherID: "A1",
        replace: "09-chikage-o-n-5",
        name: "仕掛け番傘",
        nameEn: "Disguised Blade",
        nameZh: "机关油纸伞",
        nameZhG1: "机关油纸伞",
        nameKo: "속임수 우산",
        ruby: "しかけばんがさ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4",
        damage: "2/1",
        text: "不可避 \n【常時】相手の手札が2枚以上あるならば、この《攻撃》は距離拡大(近2)と距離拡大(遠2)を得る。 \n(他に何もなければ、適正距離は2-6になる)",
        textZh: "不可被闪避\n【常时】若对手的手牌不少于2张，则此《攻击》得距离扩大（近2、远2）。",
        textZhG1: "不可被闪避\n【常时】若对手的手牌多于2张，则此《攻击》得距离扩大（近2、远2）",
        textKo: "불가피 \n【상시】상대의 패가 2장 이상 있다면, 이 《공격》은 거리확대(근2)와 거리확대(원2)를 얻는다.\n(기타 아무것도 없다면, 적정거리는 2-6이 된다)",
        textEn: "Unavoidable\n\nForced: If your opponent has 2 or more cards in hand, increase the Range of this attack by 2 in both the near and distant directions.",
    },
    "09-chikage-A1-n-6": {
        megami: "chikage",
        anotherID: "A1",
        replace: "09-chikage-o-n-6",
        name: "奮迅",
        nameEn: "Surge of Vitality",
        nameZh: "迅猛",
        nameZhG1: "奋迅",
        nameKo: "궐기",
        ruby: "ふんじん",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "相手の手札が2枚以上あるならば、あなたは集中力を1得る。 \n間合⇔ダスト：1",
        textZh: "若对手手牌的牌张数不少于2张，则你获得1点集中力。\n距↔1↔虚",
        textZhG1: "若对手的手牌多于2张，则你获得1点集中力。\n距（1）⇔虚",
        textKo: "상대의 손패가 2장 이상 있다면, 당신은 집중력을 1 얻는다.\n간격⇔더스트：1",
        textEn: "If your opponent has 2 or more cards in hand, gain 1 Vigor.\n\nDistance (1)⇔ Shadow",
    },
    "09-chikage-A1-s-4": {
        megami: "chikage",
        anotherID: "A1",
        replace: "09-chikage-o-s-4",
        name: "残滓の絆毒",
        nameEn: "Vestigial Bondrot",
        nameZh: "残渣牵绊毒",
        nameZhG1: "残渣的绊毒",
        nameKo: "잔재의 인연독",
        ruby: "ざんしのきずなどく",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "0-1",
        damage: "4/X",
        cost: "5",
        text: "【常時】Xは相手の手札にあるカードの枚数の2倍に等しい。",
        textZh: "【常时】X等于对手的手牌张数的2倍。",
        textZhG1: "【常时】X等同于对手手牌数量的两倍。",
        textKo: "【상시】X는 상대의 손패에 있는 카드 장수의 2배와 같다.",
        textEn: "Forced: X is twice the number of cards in your opponent's hand.",
    },
    "13-utsuro-A1-n-2": {
        megami: "utsuro",
        anotherID: "A1",
        replace: "13-utsuro-o-n-2",
        name: "蝕みの塵",
        nameEn: "Gnawing Dust",
        nameZh: "侵蚀之尘",
        nameZhG1: "侵蚀之尘",
        nameKo: "좀먹는 먼지",
        ruby: "むしばみのちり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-6",
        damage: "2/0",
        text: "【攻撃後】相手がライフへのダメージを選んだならば、相フレア→ダスト：2",
        textZh: "【攻击后】若对手选择由命承受此次伤害，则敌气→2→虚",
        textZhG1: "【攻击后】若对手选择由命承受此次伤害，则敌气（2）→虚",
        textKo: "【공격후】상대가 라이프로의 대미지를 골랐다면, 상대 플레어→더스트：2",
        textEn: "After Attack: If your opponent chose to take damage to Life:\n\nOpponent's Flare (2)→ Shadow",
    },
    "13-utsuro-A1-s-1": {
        megami: "utsuro",
        anotherID: "A1",
        replace: "13-utsuro-o-s-1",
        name: "残響装置:枢式",
        nameEn: "Reverberation Device: Kururu-Type",
        nameZh: "残响装置：枢式",
        nameZhG1: "残响装置：枢式",
        nameKo: "잔향장치:쿠루루 식",
        ruby: "ざんきょうそうち　くるるしき",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "相手のライフが8以上ならば、相ライフ→ダスト：1 \n【使用済】あなたか相手の終了フェイズにダストが13以上ならば、終焉の影が蘇る。その後、このカードを取り除き、あなたの追加札から切札「望我」を使用済で得て、カードを1枚引く。",
        textAdditional: "「終焉の影が蘇る」- 山札、手札、伏せ札、捨て札、付与札にある切札でないカードをすべて取り除き、代わりに「万象乖ク殲滅ノ影」「我ヲ亡クシテ静寂ヲ往ク」「終焉、来タレ」の3枚を捨て札に置き、その後山札を再構成する。\n（条件を満たした状態で、このカードを右クリックすることにより発動可能）",
        textZh: "若敌命中的樱花结晶数大于等于8，则：敌命→1→虚\n【使用后】在双方的每个结束阶段，若虚中的樱花结晶的数目大于等于13，则终焉之影苏醒。然后将此牌移出游戏，从追加牌区以使用后状态获得王牌『夙愿』，最后抓1张牌。",
        textZhG1: "若敌命中樱花结晶的数目大于8，则敌命（1）→虚\n【使用后】每当双方的结束阶段结束时，若虚中的樱花结晶的数目大于13，则『终焉之影』苏醒（移除你展开中的《付与》牌上的所有樱花结晶，这些牌的破弃时效果无效，将你的所有通常牌移出游戏，将追加牌『万象乖离残灭之影』『自灭往寂』『末日来临』以任意顺序置于你的牌库顶）。将追加牌『欲望』正面朝上加入王牌，抓一张牌，将此牌移出游戏。",
        textZhAdditional: "「终焉之影苏醒」～将你手牌、牌库、盖牌区、弃牌区与付与区中的所有非王牌移出游戏（付与牌的破弃时效果不发动），从追加牌区将『万象乖离残灭之影』『灭吾之身静以思』『终焉、降临吧』置入弃牌区，然后重铸牌库。",
        textKo: "상대의 라이프가 8 이상이라면, 상대 라이프→더스트：1 \n【사용완료】당신 또는 상대의 종료 페이즈시 더스트가 13이상이라면, 종언의 그림자가 되살아난다. 그 후, 이 카드를 제외하고, 당신의 추가패에서 비장패 「욕망~желание~」를 사용완료로 얻고, 카드를 1장 뽑는다.",
        textEn: "If your opponent's Life is 8 or more:\nOpponent's Life (1)→ Shadow\n\nDevoted: At the end of each player's turn, if there are 13 or more Sakura tokens on Shadow, the end is nigh. Remove this card from the game. Add your set aside \"желание\" to your Special cards, face-up (Devoted). Draw a card.",
        removable: true,
    },
    "13-utsuro-A1-s-1-ex1": {
        megami: "utsuro",
        anotherID: "A1",
        replace: "",
        name: "望我",
        nameEn: "желание",
        nameZh: "夙愿",
        nameZhG1: "夙愿",
        nameKo: "욕망~желание~",
        ruby: "ジェラーニエ",
        rubyEn: "zhelaniye",
        rubyZh: "желание",
        baseType: "special",
        extra: true,
        extraFrom: "13-utsuro-A1-s-1",
        type: "action",
        cost: "6",
        text: "【使用済】あなたはダメージを受けない。 \n----\n【即再起】あなたのメインフェイズが開始する。",
        textZh: "【使用后】你不会受到伤害。\n----\n【即再起】你的主要阶段开始时。",
        textZhG1: "【使用后】防止将对你造成的一切伤害。\n----\n【即再起】你的主要阶段开始。",
        textKo: "【사용완료】당신은 대미지를 받지 않는다.\n----\n【즉재기】당신의 메인페이즈가 개시된다.",
        textEn: "Devoted: You cannot take damage.\n----\nImmediate Resurgence: Your main phase begins.",
    },
    "13-utsuro-A1-s-1-ex2": {
        megami: "utsuro",
        anotherID: "A1",
        replace: "",
        name: "万象乖ク殲滅ノ影",
        nameEn: "Shadow of Annihilation That Opposes All Creation",
        nameZh: "万象乖离残灭之影",
        nameZhG1: "万象乖离残灭之影",
        nameKo: "만물을 끊는 섬멸의 그림자",
        ruby: "ばんしょうそむくせんめつのかげ",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "13-utsuro-A1-s-1",
        type: "attack",
        subType: "fullpower",
        range: "0-3",
        damage: "-/0",
        text: "対応不可 \n【攻撃後】相手は相手のオーラ、フレア、ライフのいずれかから桜花結晶を合計6つダストへ移動させる。",
        textZh: "不可被对应\n【攻击后】对手从其装、命、气三个区域中选择共6个樱花结晶移至虚。",
        textZhG1: "不可被对应\n【攻击后】对手从其装、命、气三个区域中选择共6个樱花结晶移至虚。",
        textKo: "대응불가 \n【공격후】상대는 상대의 오라, 플레어, 라이프 중 원하는 곳들에서 벚꽃 결정을 총합 6개를 더스트로 이동시킨다.",
        textEn: "No Reactions\n\nAfter Attack: Your opponent moves a total of 6 Sakura tokens from their Aura, Flare, and Life to Shadow, in any combination.",
    },
    "13-utsuro-A1-s-1-ex3": {
        megami: "utsuro",
        anotherID: "A1",
        replace: "",
        name: "我ヲ亡クシテ静寂ヲ往ク",
        nameEn: "Perish the Self and Haunt the Silence",
        nameZh: "灭吾之身静以思",
        nameZhG1: "自灭往寂",
        nameKo: "나를 잊고 적막으로 가거라",
        ruby: "われをなくしてせいじゃくをゆく",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "13-utsuro-A1-s-1",
        type: "action",
        subType: "fullpower",
        text: "あなたは《前進》以外の基本動作を5回まで行ってもよい。 \n攻撃「適正距離4-10、3/2」を行う。 \n攻撃「適正距離5-10、1/1」を行う。 \n攻撃「適正距離6-10、1/1」を行う。",
        textZh: "你可以执行至多5次非《前进》的基本动作。\n进行一次“攻击距离4-10、伤害3/2”的攻击。\n进行一次“攻击距离5-10、伤害1/1”的攻击。\n进行一次“攻击距离6-10、伤害1/1”的攻击。",
        textZhG1: "你可以执行5次非《前进》的基本动作。\n进行一次“攻击距离4-10 伤害3/2”的攻击。\n进行一次“攻击距离5-10 伤害1/1”的攻击。\n进行一次“攻击距离6-10 伤害1/1”的攻击。",
        textKo: "당신은 《전진》이외의 기본동작을 5번까지 행해도 좋다.\n공격「적정거리 4-10、3/2」를 행한다.\n공격「적정거리 5-10、1/1」를 행한다. \n공격「적정거리 6-10、1/1」를 행한다.",
        textEn: 'Perform up to 5 basic actions other than Forward Movement. Then, you attack with\n"Range: 4-10, Damage: 3/2", \n"Range: 5-10, Damage: 1/1", and \n"Range: 6-10, Damage: 1/1" in this order.',
    },
    "13-utsuro-A1-s-1-ex4": {
        megami: "utsuro",
        anotherID: "A1",
        replace: "",
        name: "終焉、来タレ",
        nameEn: "The End Cometh",
        nameZh: "终焉、降临吧",
        nameZhG1: "终焉将至",
        nameKo: "종언, 당도했나니",
        ruby: "しゅうえん、きたれ",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "13-utsuro-A1-s-1",
        type: "enhance",
        capacity: "2",
        text: "【破棄時】相手は手札と山札をすべて捨て札にする。相手の集中力は0になる。相手を畏縮させる。",
        textZh: "【破弃时】对手弃置其牌库与手牌。对手的集中力变为0，令对手畏缩。",
        textZhG1: "【破弃时】对手弃置其牌库与手牌。对手的集中力变为0，对手畏缩。",
        textKo: "【파기시】상대는 손패와 패산을 모두 버림패로 한다. 상대의 집중력은 0이 된다. 상대를 위축시킨다.",
        textEn: "Disenchant: Put all cards in your opponent's hand and deck into their played pile. Their Vigor becomes 0. Flinch them.",
    },
    "14-honoka-o-n-1": {
        megami: "honoka",
        name: "精霊式",
        nameEn: "Spirit Rite",
        nameZh: "精灵式",
        nameZhG1: "精灵式",
        nameKo: "정령식",
        ruby: "せいれいしき",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "14-honoka-o-n-1-ex1",
        type: "attack",
        range: "3-4",
        damage: "1/1",
        text: "対応不可 \n【攻撃後】開花-この「精霊式」を追加札の「守護霊式」と交換してもよい。そうした場合、その「守護霊式」を山札の底に置いてもよい。",
        textZh: "不可被对应\n【攻击后】开花～你可以将这张『精灵式』与追加牌区的『守护灵式』交换。若如此做，则你可以将『守护灵式』置于你的牌库底。",
        textZhG1: "不可被对应\n【攻击后】开花-将此牌与追加牌『守护灵式』交换。若如此做，则你可以将『守护灵式』置于你的牌库底。",
        textKo: "대응불가 \n【공격후】개화-이 「정령식」을 추가패의 「수호령식」과 교환해도 좋다. 그럴 경우, 그 「수호령식」을 패산 밑에 두어도 좋다.",
        textEn: 'No Reactions\n\nAfter Attack: Bloom - You may exchange this card with your set aside "Guardian Spirit Rite". If you do, you may put that card on the bottom of your deck.',
    },
    "14-honoka-o-n-1-ex1": {
        megami: "honoka",
        name: "守護霊式",
        nameEn: "Guardian Spirit Rite",
        nameZh: "守护灵式",
        nameZhG1: "守护灵式",
        nameKo: "수호령식",
        ruby: "しゅごれいしき",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "14-honoka-o-n-1",
        exchangableTo: "14-honoka-o-n-1-ex2",
        type: "attack",
        subType: "reaction",
        range: "2-3",
        damage: "2/1",
        text: "【攻撃後】ダスト→自オーラ：1 \n【攻撃後】開花-この「守護霊式」を追加札の「突撃霊式」と交換してもよい。そうした場合、その「突撃霊式」を山札の底に置いてもよい。",
        textZh: "【攻击后】虚→1→自装\n【攻击后】开花～你可以将这张『守护灵式』与追加牌区的『突击灵式』交换。若如此做，则你可以将『突击灵式』置于你的牌库底。",
        textZhG1: "【攻击后】虚（1）→自装\n【攻击后】开花-将此牌与追加牌『突击灵式』交换。若如此做，则你可以将『突击灵式』置于你的牌库底。",
        textKo: "【공격후】더스트→자신 오라：1 \n【공격후】개화-이 「수호령식」을 추가패의 「돌격령식」과 교환해도 좋다. 그럴 경우, 그 「돌격령식」을 패산 밑에 두어도 좋다.",
        textEn: 'After Attack: Shadow (1)→ Your Aura\n\nAfter Attack: Bloom - You may exchange this card with your set aside "Destructive Spirit Rite". If you do, you may put that card on the bottom of your deck.',
    },
    "14-honoka-o-n-1-ex2": {
        megami: "honoka",
        name: "突撃霊式",
        nameEn: "Destructive Spirit Rite",
        nameZh: "突击灵式",
        nameZhG1: "突击灵式",
        nameKo: "돌격령식",
        ruby: "とつげきれいしき",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "14-honoka-o-n-1-ex1",
        exchangableTo: "14-honoka-o-n-1-ex3",
        type: "attack",
        range: "5",
        damage: "3/2",
        text: "不可避 \n【攻撃後】開花-この「突撃霊式」を追加札の「神霊ヲウカ」と交換してもよい。そうした場合、その「神霊ヲウカ」を山札の底に置いてもよい。",
        textZh: "不可被闪避\n【攻击后】开花～你可以将这张『突击灵式』与追加牌区的『神灵樱华』交换。若如此做，则你可以将『神灵樱华』置于你的牌库底。",
        textZhG1: "不可被闪避\n【攻击后】开花-将此牌与追加牌『神灵樱华』交换。若如此做，则你可以将『神灵樱华』置于你的牌库底。",
        textKo: "불가피 \n【공격후】개화-이 「돌격령식」을 추가패의 「신령 오우카」와 교환해도 좋다. 그럴 경우, 그 「신령 오우카」를 패산 밑에 두어도 좋다.",
        textEn: 'Unavoidable\n\nAfter Attack: Bloom - You may exchange this card with your set aside "Divine Spirit: Ouka". If you do, you may put that card on the bottom of your deck.',
    },
    "14-honoka-o-n-1-ex3": {
        megami: "honoka",
        name: "神霊ヲウカ",
        nameEn: "Divine Spirit: Ouka",
        nameZh: "神灵樱华",
        nameZhG1: "神灵樱华",
        nameKo: "신령 오우카",
        ruby: "しんれいをうか",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "14-honoka-o-n-1-ex2",
        type: "attack",
        subType: "fullpower",
        range: "1-4",
        damage: "4/3",
        text: "対応不可 \n【攻撃後】ダスト→自オーラ：2",
        textZh: "不可被对应\n【攻击后】虚→2→自装",
        textZhG1: "不可被对应\n【攻击后】虚（2）→自装",
        textKo: "대응불가 \n【공격후】더스트→자신 오라：2",
        textEn: "No Reactions\n\nAfter Attack: Shadow (2)→ Your Aura",
    },
    "14-honoka-o-n-2": {
        megami: "honoka",
        name: "桜吹雪",
        nameEn: "Petal Storm",
        nameZh: "樱吹雪",
        nameZhG1: "樱吹雪",
        nameKo: "벚꽃보라",
        ruby: "さくらふぶき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-5",
        damage: "2/1",
        text: "【攻撃後】相手は以下のどちらかを選ぶ。\n・間合→ダスト：1\n・ダスト→間合：1",
        textZh: "【攻击后】对手选择一项：\n●距→1→虚；\n●虚→1→距。",
        textZhG1: "【攻击后】对手选择一项：\n1.距（1）→虚；\n2.虚（1）→距。",
        textKo: "【공격후】상대는 이하에서 하나를 고른다.\n・간격→더스트：1\n・더스트→간격：1",
        textEn: "After Attack: Your opponent chooses one:\n・Distance (1)→ Shadow\n・Shadow (1)→ Distance",
    },
    "14-honoka-o-n-3": {
        megami: "honoka",
        name: "義旗共振",
        nameEn: "Resonant Flag of Virtue",
        nameZh: "义旗共振",
        nameZhG1: "义旗共振",
        nameKo: "의기공진",
        ruby: "ぎききょうしん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "2-9",
        damage: "2/2",
        text: "【攻撃後】カードを１枚引いてもよい。 \n【攻撃後】あなたは手札を1枚選び、それを山札の底に置いてもよい。 \n【攻撃後】このカードを山札の底に置いてもよい。",
        textZh: "【攻击后】你可以抓1张牌。\n【攻击后】你可以将1张手牌置于你的牌库底。\n【攻击后】你可以将此牌置于你的牌库底。",
        textZhG1: "【攻击后】你可以抓一张牌。\n【攻击后】你可以将一张手牌置于你的牌库底。\n【攻击后】你可以将此牌置于你的牌库底。",
        textKo: "【공격후】카드를 1장 뽑아도 좋다.\n【공격후】당신은 손패를 1장 골라, 그것을 패산 밑에 두어도 좋다.\n【공격후】이 카드를 패산 밑에 두어도 좋다.",
        textEn: "After Attack: You may draw a card.\n\nAfter Attack: You may choose a card in your hand and put it on the bottom of your deck.\n\nAfter Attack: You may put this card on the bottom of your deck.",
    },
    "14-honoka-o-n-4": {
        megami: "honoka",
        name: "桜の翅",
        nameEn: "Sakura Wings",
        nameZh: "樱之翅",
        nameZhG1: "樱之翅",
        nameKo: "벚꽃 날개",
        ruby: "さくらのはね",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "14-honoka-o-n-4-ex1",
        type: "action",
        text: "間合⇔ダスト：2 \nこの「桜の翅」を追加札の「再生」と交換する。",
        textZh: "距↔2↔虚\n将这张『樱之翅』与追加牌区的『再生』交换。",
        textZhG1: "距（2）⇔虚\n将此牌与追加牌『再生』交换。",
        textKo: "간격⇔더스트：2 \n이 「벚꽃 날개」를 추가패의 「재생」과 교환한다.",
        textEn: 'Distance (2)⇔ Shadow\n\nExchange this card with your set aside "Rebirth".',
    },
    "14-honoka-o-n-4-ex1": {
        megami: "honoka",
        name: "再生",
        nameEn: "Rebirth",
        nameZh: "再生",
        nameZhG1: "再生",
        nameKo: "재생",
        ruby: "さいせい",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "14-honoka-o-n-4",
        exchangableTo: "14-honoka-o-n-4",
        type: "action",
        subType: "fullpower",
        text: "ダスト→自オーラ：1 \nダスト→自フレア：1 \nこの「再生」を追加札の「桜の翅」と交換する。",
        textZh: "虚→1→自装\n虚→1→自气\n将这张『再生』与追加牌区的『樱之翅』交换。",
        textZhG1: "虚（1）→自装\n虚（1）→自气\n将此牌与追加牌『樱之翅』交换。",
        textKo: "더스트→자신 오라：1 \n더스트→자신 플레어：1 \n이 「재생」을 추가패의 「벚꽃 날개」와 교환한다.",
        textEn: 'Shadow (1)→ Your Aura\nShadow (1)→ Your Flare\n\nExchange this card with your set aside "Sakura Wings".',
    },
    "14-honoka-o-n-5": {
        megami: "honoka",
        name: "桜花のお守り",
        nameEn: "Charm of Blossoms",
        nameZh: "樱花护符",
        nameZhG1: "樱花护身符",
        nameKo: "벚꽃 부적",
        ruby: "おうかのおまもり",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "14-honoka-o-n-5-ex1",
        type: "action",
        subType: "reaction",
        text: "あなたは手札を１枚選び、それを伏せ札にしてもよい。そうした場合、対応した切札でない《攻撃》を打ち消す。 \n開花-この「桜花のお守り」を追加札の「仄かなる輝き」と交換してもよい。そうした場合、その「仄かなる輝き」を山札の底に置いてもよい。",
        textZh: "你可以盖伏1张手牌。若如此做，则打消被对应的非王牌的《攻击》。\n开花～你可以将这张『樱花护符』与追加牌区的『星火余晖』交换。若如此做，则你可以将『星火余晖』置于你的牌库底。",
        textZhG1: "你可以盖伏一张手牌。若如此做，则打消被对应的非王牌的《攻击》。\n开花-将此牌与追加牌『暗淡的光辉』交换。若如此做，则你可以将『暗淡的光辉』置于你的牌库底。",
        textKo: "당신은 손패를 1장 골라, 그것을 덮임패로 해도 좋다. 그럴 경우, 대응하는 비장패가 아닌 《공격》은 무효화된다.\n개화-이 「벚꽃 부적」을 추가패의 「아련한 반짝임」과 교환해도 좋다. 그럴 경우, 그 「아련한 반짝임」을 패산 밑에 두어도 좋다.",
        textEn: 'You may discard a card. If you do, cancel the non-Special attack you played this card as a Reaction to.\n\nBloom - You may exchange this card with your set aside "Faint Spark". If you do, you may put that card on the bottom of your deck.',
    },
    "14-honoka-o-n-5-ex1": {
        megami: "honoka",
        name: "仄かなる輝き",
        nameEn: "Faint Spark",
        nameZh: "星火余晖",
        nameZhG1: "暗淡余晖",
        nameKo: "아련한 반짝임",
        ruby: "ほのかなるかがやき",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "14-honoka-o-n-5",
        type: "attack",
        range: "1-3",
        damage: "1/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "14-honoka-o-n-6": {
        megami: "honoka",
        name: "微光結界",
        nameEn: "Shimmering Barrier",
        nameZh: "微光结界",
        nameZhG1: "微光结界",
        nameKo: "미광결계",
        ruby: "びこうけっかい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "4",
        text: "【展開中】相手のターンにあなたの手札と山札にあるカードは伏せ札、捨て札にならない。 \n(使用したカードは通常通り捨て札になる) \n【展開中】あなたは畏縮しない \n【破棄時】あなたは集中力を1得る。",
        textZh: "【展开中】对手的回合内，你的手牌与牌库中的牌不会被弃置或盖伏。\n（使用的牌依然进入弃牌区）\n【展开中】你不会畏缩。\n【破弃时】你获得1点集中力。",
        textZhG1: "【展开中】对手的回合内，所有盖伏或弃置你手牌或牌库中牌的效果无效。\n【展开中】所有使你畏缩的效果无效。\n【破弃时】你获得1点集中力。",
        textKo: "【전개중】상대 턴에 당신의 손패와 패산에 있는 카드는 덮임패, 버림패가 되지 않는다.\n(사용한 카드는 평소대로 버림패가 된다) \n【전개중】당신은 위축되지 않는다.\n【파기시】당신은 집중력을 얻는다.",
        textEn: "Ongoing: During your opponent's turn, cards in your hand and deck cannot be put into your discard or played piles.\n(Played cards will go to the played pile as usual.)\n\nOngoing: You cannot be flinched.\n\nDisenchant: Gain 1 Vigor.",
    },
    "14-honoka-o-n-7": {
        megami: "honoka",
        name: "追い風",
        nameEn: "Tailwind",
        nameZh: "乘风",
        nameZhG1: "追风",
        nameKo: "순풍",
        ruby: "おいかぜ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開中】あなたの《攻撃》は距離拡大(遠1)を得る。",
        textZh: "【展开中】你的《攻击》得距离扩大（远1）。",
        textZhG1: "【展开中】你的《攻击》得距离扩大（远1）。",
        textKo: "【전개중】당신의 《공격》은 거리확대(원1)을 얻는다.",
        textEn: "Ongoing: Increase the Range of your attacks by 1 in the distant direction.",
    },
    "14-honoka-o-s-1": {
        megami: "honoka",
        name: "胸に想いを",
        nameEn: "Feelings in Your Heart",
        nameZh: "感存心间",
        nameZhG1: "感存于心",
        nameKo: "가슴에 마음을",
        ruby: "むねにおもいを",
        rubyEn: "",
        baseType: "special",
        exchangableTo: "14-honoka-o-s-1-ex1",
        type: "action",
        cost: "5",
        text: "開花-この「胸に想いを」を追加札の「両手に華を」に交換し、未使用に戻す。",
        textZh: "开花～将这张『感存心间』与追加牌区的『樱结手弦』交换，将『樱结手弦』变为未使用状态。",
        textZhG1: "开花-将此牌与追加牌『结樱于手』交换，将『结樱于手』翻为背面朝上。",
        textKo: "개화-이 「품속에 마음을」을 추가패의 「양손에 꽃을」과 교환하고, 미사용으로 되돌린다.",
        textEn: 'Bloom - Exchange this with your set aside "Flowers in Your Hands" and turn that card face-down.',
    },
    "14-honoka-o-s-1-ex1": {
        megami: "honoka",
        name: "両手に華を",
        nameEn: "Flowers in Your Hands",
        nameZh: "樱结手弦",
        nameZhG1: "结樱于手",
        nameKo: "양손에 꽃을",
        ruby: "りょうてにはなを",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "14-honoka-o-s-1",
        exchangableTo: "14-honoka-o-s-1-ex2",
        type: "action",
        subType: "fullpower",
        cost: "0",
        text: "【使用済】開花-あなたの終了フェイズにあなたのオーラにある桜花結晶を2つまでこのカードの上に置いてもよい。その結果、ちょうど5つになったならば、それらの桜花結晶をあなたのフレアへと移動させ、この「両手に華を」を追加札の「そして新たな幕開けを」に交換し、未使用に戻す。",
        textZh: "【使用后】开花～每当你的结束阶段，你可以将至多2个樱花结晶从自装移至此牌上。然后若此牌上恰有5个樱花结晶，则将它们移入自气，将这张『樱结手弦』与追加牌区的『旋即旌招幕展』交换，将『旋即旌招幕展』变为未使用状态。",
        textZhG1: "【使用后】开花-每当你的结束阶段结束时，你可以将至多2个樱花结晶从自装移至此牌上。然后若此牌上恰有5个樱花结晶，则将它们移入自气，将此牌与追加牌『旋即旌招幕展』交换，将『旋即旌招幕展』翻为背面朝上。",
        textKo: "【사용완료】개화-당신의 종료 페이즈에 당신의 오라에 있는 벚꽃 결정을 2개까지 이 카드 위에 올려도 좋다. 그 결과, 딱 5개가 되었다면, 그 개화결정들을 당신의 플레어로 이동시키고, 이 「양손에 꽃을」을 추가패의 「그리고 새로운 개막을」로 교환하고, 미사용으로 되돌린다.",
        textEn: 'Bloom - At the end of your turn, you may move up to 2 Sakura tokens from your Aura to this card. Then if there are exactly 5 Sakura tokens on this card, move them all to your Flare, exchange this card with your set aside "And So Begins the Rising of a New Curtain", and turn that card face-down.',
    },
    "14-honoka-o-s-1-ex2": {
        megami: "honoka",
        name: "そして新たな幕開けを",
        nameEn: "And So Begins the Rising of a New Curtain",
        nameZh: "旋即旌招幕展",
        nameZhG1: "旋即旌招幕展",
        nameKo: "그리고 새로운 개막을",
        ruby: "そしてあらたなまくあけを",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "14-honoka-o-s-1-ex1",
        type: "action",
        cost: "5",
        text: "【使用済】あなたの終了フェイズに攻撃「適正距離0-10、X/X、対応不可 【常時】Xは桜花結晶がちょうど5つある領域の数に等しい」を行う。",
        textZh: "【使用后】每当你的结束阶段，进行一次“攻击距离0-10、伤害X/X、不可被对应、【常时】X等于场上樱花结晶数等于5的区域的个数”的攻击。（结束阶段存在樱花结晶的区域包括距、命(2个)、装(2个)、气(2个)、虚、付与区(2个)、王牌区(2个)、游戏外）",
        textZhG1: "【使用后】每当你的结束阶段结束时，进行一次“攻击距离0-10 伤害X/X 不可被对应 X等于场上樱花结晶数等于5的领域的个数。”的攻击。",
        textKo: "【사용완료】당신의 종료 페이즈에 공격 「적정거리 0-10、X/X、대응불가 【상시】X는 벚꽃 결정이 딱 5개 있는 영역의 수와 같다」를 행한다.",
        textEn: 'Devoted: At the end of your turn, you attack with "Range: 0-10, Damage: X/X, No Reactions, Forced: X is the number of zones with exactly 5 Sakura tokens."',
    },
    "14-honoka-o-s-2": {
        megami: "honoka",
        name: "この旗の名の下に",
        nameEn: "In the Name of This Flag",
        nameZh: "于此旗之名下",
        nameZhG1: "在此旗的名义之下",
        nameKo: "이 깃발 이름 아래에",
        ruby: "このはたのなのもとに",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-7",
        damage: "3/2",
        cost: "4",
        text: "【常時】このカードを使用するに際し、あなたの付与札を1つ選んでもよい。この《攻撃》のダメージにより移動する桜花結晶はダストやフレアでなく選ばれた付与札に可能ならば動かす。 \n(付与札が存在しないなど不可能な場合は通常通りに桜花結晶を動かす)",
        textZh: "【常时】当你使用此牌时，你可以选择你的付与区中的一张展开中的付与牌。因此《攻击》造成的伤害将移动的樱花结晶改为移动至所选择的付与牌上。",
        textZhG1: "【常时】当你使用此牌时，你可以选择你的一张展开中的《付与》牌。若此《攻击》将造成伤害，则将因结算伤害移动的樱花结晶移至所选择的付与牌上。",
        textKo: "【상시】이 카드를 사용 할 때, 당신의 부여패를 1장 선택해도 좋다. 이 《공격》의 대미지에 의해 이동하는 벚꽃 결정은, 가능하다면 더스트나 플레어로가 아닌 선택한 부여패로 움직인다. \n(부여패가 존재하지 않음 등의 불가능한 경우에는 통상대로 벚꽃 결정을 움직인다)",
        textEn: "Forced: As you play this card, you may choose one of your Enhancements in play. Damage dealt by this attack moves Sakura tokens to that card instead of to Shadow or to Flare.",
    },
    "14-honoka-o-s-3": {
        megami: "honoka",
        name: "四季はまた廻り来る",
        nameEn: "The Seasons Turn Again",
        nameZh: "四季依旧轮回",
        nameZhG1: "四季轮回",
        nameKo: "사계는 다시 돌아온다",
        ruby: "しきはまためぐりくる",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "あなたの山札を全て伏せ札にする。伏せ札、捨て札からカードを4枚まで選び、それらを好きな順番で山札の上に置く。",
        textZh: "盖伏你的牌库。从你的盖牌区和弃牌区中选择至多4张牌，以任意顺序置于你的牌库顶。",
        textZhG1: "盖伏你的牌库。从你的盖牌区和弃牌区中选择4张牌，以任意顺序置于你的牌库顶。",
        textKo: "당신의 패산을 모두 덮임패로 한다. 덮임패, 버림패에서 카드를 4장까지 골라, 그것들을 원하는 순서로 패산 위에 둔다.",
        textEn: "Put your deck into your discard pile, then choose up to 4 cards from among your discard and played piles. Put the chosen cards on top of your deck in any order.",
    },
    "14-honoka-o-s-4": {
        megami: "honoka",
        name: "満天の花道で",
        nameEn: "Heavenly Flowerway",
        nameZh: "于漫天花道上",
        nameZhG1: "漫天的花道",
        nameKo: "만개한 꽃길에서",
        ruby: "まんてんのはなみちで",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "5",
        cost: "2",
        text: "【展開中】この付与札の上の桜花結晶がダストへと送られるならば、それは代わりにあなたのオーラへと移動する。あなたのオーラが5以上ならば、代わりにあなたのフレアへ移動する。",
        textZh: "【展开中】若此牌上的樱花结晶将被移至虚，则改为将其移至自装，若自装中樱花结晶的数目大于等于5，则改为将其移至自气。",
        textZhG1: "【展开中】若此牌上的樱花结晶将被移至虚，则改为将其移至自装，若自装中樱花结晶的数目大于5，则改为将其移至自气。",
        textKo: "【전개중】이 부여패 위의 벚꽃 결정이 더스트로 보내진다면, 그것은 대신 당신의 오라로 이동한다. 당신의 오라가 5 이상이라면, 대신 당신의 플레어로 이동한다.",
        textEn: "Ongoing: If a Sakura token would be moved from this card to Shadow, instead move it to your Aura. If there are already 5 or more Sakura tokens on your Aura, instead move it to your Flare.",
    },
};
// シーズン4
exports.S4_UPDATED_CARD_DATA = {
    "03-himika-o-n-2": {
        megami: "himika",
        name: "ラピッドファイア",
        nameEn: "Quick Shot",
        nameZh: "速射",
        nameZhG1: "速射",
        nameKo: "래피드 파이어",
        ruby: "",
        rubyEn: "",
        rubyZh: "Rapid Fire",
        baseType: "normal",
        type: "attack",
        range: "6-8",
        damage: "2/1",
        text: "【常時】連火-このカードがこのターンに使用した3枚目以降のカードならば、この《攻撃》は+1/+1となる。",
        textZh: "【常时】连火～若此牌是本回合你使用的第3张或更多的牌，则此《攻击》得+1/+1。",
        textZhG1: "【常时】连火～若本回合你已使用至少2张牌，则此《攻击》得+1/+1。",
        textKo: "【상시】연화-이 카드가 이 턴에 사용한 3장째 이후의 카드라면, 이 《공격》은 +1/+1이 된다.",
        textEn: "Forced: Inferno - This attack gains +1/+1 if this is the third or later card you've played this turn.",
    },
    "12-raira-o-s-3": {
        megami: "raira",
        name: "風魔招来孔",
        nameEn: "Windbeast Invocation",
        nameZh: "风魔招来孔",
        nameZhG1: "风魔招来孔",
        nameKo: "풍마초래공",
        ruby: "ふうましょうらいこう",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "現在の風神ゲージに応じて、以下の切札を追加札から未使用で得る(条件を満たしたものは全て得る)。その後、このカードを取り除く。 \n3以上……風魔旋風 \n7以上……風魔纏廻 \n12以上……風魔天狗道",
        textZh: "根据现在的风神槽的值，从追加牌区以未使用状态获得以下王牌（满足条件的全部都可以获得）。然后将此牌移出游戏。\n3或以上……『风魔旋风』\n6或以上……『风魔缠回』\n10或以上……『风魔天狗道』",
        textZhG1: "根据现在的风神槽的值，将以下牌以未使用状态加入王牌，然后将此牌移出游戏。\n3以上……『风魔旋风』\n7以上……『风魔缠回』\n12以上……『风魔天狗道』",
        textKo: "현재 풍신 게이지에 따라, 이하의 비장패를 추가패에서 미사용으로 얻는다(조건을 만족한 것은 모두 얻는다). 그 후, 이 카드를 제외한다.\n 3이상……풍마선풍 \n 7이상……풍마전회 \n 12이상……풍마천구도",
        textEn: 'Based on your Wind God gauge, add your set aside "Windbeast" cards to your Special cards, face-down. Remove this card from the game.\n3 or more: Windbeast Manifestation\n7 or more: Windbeast Reincarnation\n12 or more: Windbeast Perdition\n(Add all cards you meet the requirement for.)',
        removable: true,
    },
    "13-utsuro-A1-s-1": {
        megami: "utsuro",
        anotherID: "A1",
        replace: "13-utsuro-o-s-1",
        name: "残響装置:枢式",
        nameEn: "Reverberation Device: Kururu-Type",
        nameZh: "残响装置：枢式",
        nameZhG1: "残响装置：枢式",
        nameKo: "잔향장치:쿠루루 식",
        ruby: "ざんきょうそうち　くるるしき",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "2",
        cost: "2",
        text: "【展開中】ダストが13以上かつあなたのライフが6以下である場合のみ、このカードの上の桜花結晶は移動する。\n【破棄時】現在のフェイズが開始フェイズならば終焉の影が蘇る。その後、このカードを取り除き、あなたの追加札から「望我」を使用済で得て、カードを1枚引く。\n",
        textAdditional: "「終焉の影が蘇る」- 山札、手札、伏せ札、捨て札、付与札にある切札でないカードをすべて取り除き、代わりに「万象乖ク殲滅ノ影」「我ヲ亡クシテ静寂ヲ往ク」「終焉、来タレ」の3枚を捨て札に置き、その後山札を再構成する。\n（条件を満たした状態で、このカードを右クリックすることにより発動可能）",
        textZh: "【展开中】仅当虚中的樱花结晶数大于等于13，且自命中的樱花结晶数小于等于6时可以移动此牌上的樱花结晶。\n【破弃时】若当前阶段为准备阶段，则终焉之影苏醒。然后将此牌移出游戏，从追加牌区以使用后状态获得王牌『夙愿』，最后抓1张牌。",
        textZhG1: "【展开中】仅当虚中的樱花结晶的数目大于等于13，且自命中的樱花结晶的数目小于等于6时可以移动此牌上的樱花结晶。\n【破弃时】若当前阶段为准备阶段，则终焉之影苏醒（将你手牌、牌库、盖牌区、弃牌区与付与区中的所有非王牌移出游戏（付与牌的破弃时效果不发动），将追加牌『万象乖离残灭之影』『自灭往寂』『终焉将至』洗混后置于你的牌库顶）。然后从追加牌区域将追加牌『夙愿』以使用后状态加入王牌，抓1张牌，将此牌移出游戏。",
        textZhAdditional: "「终焉之影苏醒」～将你手牌、牌库、盖牌区、弃牌区与付与区中的所有非王牌移出游戏（付与牌的破弃时效果不发动），从追加牌区将『万象乖离残灭之影』『灭吾之身静以思』『终焉、降临吧』置入弃牌区，然后重铸牌库。",
        textKo: "【전개중】더스트가 13이상이고 당신의 라이프가 6이하일 경우에만 이 카드 위의 벚꽃결정이 이동한다.\n【파기시】현재 페이즈가 개시 페이즈라면 종언의 그림자가 되살아난다. 그 후에 이 카드를 제외하고 당신의 추가패에서 「욕망」을 사용된 상태로 얻고 카드를 1장 뽑는다.",
        textEn: 'Ongoing: Sakura tokens cannot leave this card unless there are 13 or more Sakura tokens on Shadow, and your Life is 6 or less.\n\nDisenchant: If it is currently the beginning of turn phase, the end is nigh, then remove this card from the game and add your set aside "желание" to your Special cards face-up. Draw a card.',
        removable: true,
    },
    "14-honoka-o-n-6": {
        megami: "honoka",
        name: "指揮",
        nameEn: "Dictate",
        nameZh: "指挥",
        nameZhG1: "指挥",
        nameKo: "지휘",
        ruby: "しき",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開中】あなたの終了フェイズに攻撃「適正距離1-5、1/1、対応不可」を行う。",
        textZh: "【展开中】每当你的结束阶段，进行一次“攻击距离1-5、伤害1/1、不可被对应”的攻击。",
        textZhG1: "【展开中】每当你的结束阶段开始时，进行一次“攻击距离1-5 伤害1/1 不可被对应”的攻击。",
        textKo: "【전개중】당신의 엔드 페이즈 시에 공격 「적정거리 1-5, 1/1, 대응불가」을 한다.",
        textEn: 'Ongoing:You attack with\n"Range: 1-5, Damage: 1/1 No Reaction" at your end phase.',
    },
    "14-honoka-o-s-3": {
        megami: "honoka",
        name: "四季はまた廻り来る",
        nameEn: "The Seasons Turn Again",
        nameZh: "四季依旧轮回",
        nameZhG1: "四季轮回",
        nameKo: "사계는 다시 돌아온다",
        ruby: "しきはまためぐりくる",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "1",
        text: "あなたの伏せ札からカードを1枚選び、山札の底に置いてもよい。\nカードを1枚引いてもよい。\n手札を1枚伏せ札にする。そうした場合、基本動作《纏い》を1回行う。\n【使用済】あなたのカードが追加札から別の領域へと移動した時、このカードを追加札に移してもよい。その後、このカードを未使用で追加札から得る。",
        textZh: "你可以从你的盖牌区中选择1张牌，将其置于你的牌库底。\n你可以抓1张牌。\n盖伏1张手牌。若如此做，执行1次基本动作《装附》。\n【使用后】每当你的牌从追加牌区移至其他区域时，你可以将此牌移至追加牌区，若如此做，则从追加牌区以未使用状态再次获得此牌。",
        textZhG1: "你可以从你的盖牌区中选择1张牌，将其置于你的牌库底。\n你可以抓1张牌。\n盖伏1张手牌。若如此做，执行1次基本动作《装附》。\n【使用后】每当你的牌从追加牌区域移至其他区域时，你可以将此牌移至追加牌区域，若如此做，则将此牌以未使用状态加入王牌。",
        textKo: "당신의 덮임패에서 1장을 골라서 패산 맨 밑으로 보내도 좋다.\n카드를 1장 뽑아도 좋다.\n손패를 1장 덮임패로 한다. 그렇게 한 경우, 기본 동작 《휘감기》를 1번 한다.\n\n【사용됨】당신의 카드가 추가패에서 다른 영역으로 이동했을 때, 이 카드를 추가패로 이동시켜도 좋다. 그 후에 이 카드를 미사용으로 추가패에서 얻는다.",
        textEn: "You may choose a card in your discard pile and put it on the bottom of your deck.\n\nYou may draw a card.\n\nDiscard a card. If you do, perform a Recover basic action.\n\nDevoted: Whenever you move one of your set aside cards to another zone, you may set this card aside, then return it to your Special cards, face-down.",
    },
    "02-saine-A2-n-2": {
        megami: "saine",
        anotherID: "A2",
        replace: "02-saine-o-n-2",
        name: "裏斬り",
        nameEn: "Treachery",
        nameZh: "里斩",
        nameZhG1: "里斩",
        nameKo: "배신",
        ruby: "うらぎり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "1/3",
        text: "対応不可（通常札）",
        textZh: "不可被对应（通常牌）",
        textZhG1: "不可被对应（通常牌）",
        textKo: "대응불가(통상패)",
        textEn: "No Reactions (Normal)",
    },
    "02-saine-A2-n-7": {
        megami: "saine",
        anotherID: "A2",
        replace: "02-saine-o-n-7",
        name: "遺響壁",
        nameEn: "Reverberant Wall",
        nameZh: "遗响壁",
        nameZhG1: "遗响壁",
        nameKo: "유향벽",
        ruby: "いきょうへき",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開中】あなたへのダメージを解决するに際し、このカードの上に置かれた桜花結晶をあなたのオーラにあるかのように扱う。\n【破棄時】このターンにあなたが次に行う《攻撃》は+0/+1となる。",
        textZh: "【展开中】对你造成的伤害结算时，此牌上的樱花结晶视为在自装中。\n【破弃时】本回合你的下一次《攻击》得+0/+1。",
        textZhG1: "【展开中】当你结算对装伤害时，此牌上的樱花结晶视为在自装中。\n【破弃时】本回合你的下一次《攻击》得+0/+1。",
        textKo: "【전개중】당신으로의 대미지를 해결 할 때, 이 카드 위에 놓인 벚꽃 결정을 당신의 오라에 있는 것처럼 취급한다.\n【파기시】이번 턴에 당신이 하는 다음 《공격》은 +0/+1된다.",
        textEn: "Ongoing: Treat Sakura tokens on this card as if they were on your Aura whenever you are dealt damage.\n\nDisenchant: The next attack you make this turn gets +0/+1.",
    },
    "02-saine-A2-s-3": {
        megami: "saine",
        anotherID: "A2",
        replace: "02-saine-o-s-3",
        name: "絶唱絶華",
        nameEn: "Withering Fragment",
        nameZh: "绝唱绝华",
        nameZhG1: "绝唱绝华",
        nameKo: "절창절화",
        ruby: "ぜっしょうぜっか",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "3",
        text: "対応した《攻撃》の解決後に、その《攻撃》でオーラへのダメージが選ばれ、かつあなたのオーラが0ならば現在のフェイズを終了する。\n----\n【再起】八相-あなたのオーラが0である。",
        textZh: "被对应的《攻击》结算完毕后，若你选择由装承受此次《攻击》的伤害，且现自装中已没有樱花结晶，则结束当前阶段。\n----\n【再起】八相～自装中没有樱花结晶。",
        textZhG1: "被对应的《攻击》结算完毕后，若你选择用装承受该《攻击》的伤害，且自装中的樱花结晶的数目等于0，则结束当前阶段。\n【再起】八相～自装中的樱花结晶的数目等于0。",
        textKo: "대응한 《공격》 해결 후에 그 《공격》에서 오라 데미지를 선택했고 당신의 오라가 0이라면 현재의 페이즈를 종료한다.\n----\n【재기】팔상-당신의 오라가 0이다.",
        textEn: "After the attack you played this card as Reaction to resolves, if you chose to take damage to your Aura, and you now have no Sakura tokens on your Aura, end the current phase.\n\nResurgence: Idea - You have no Sakura tokens on your Aura.",
    },
    "07-shinra-A1-n-2": {
        megami: "shinra",
        anotherID: "A1",
        replace: "07-shinra-o-n-2",
        name: "真言",
        nameEn: "Mantra",
        nameZh: "真言",
        nameZhG1: "真言",
        nameKo: "진언",
        ruby: "しんごん",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "このカードを対応で使用したならば、計略を実行し、次の計略を準備する。 \n[神算] 相手の山札が3枚以上ならば、相手のライフに1ダメージを与える。 \n[鬼謀] 相手の山札が3枚以下ならば、相手のオーラに2ダメージを与える。",
        textZh: "若此牌作为对应打出，则实行当前计略，准备下个计略。\n----\n[神算] 若对手牌库的牌张数大于等于3，则给予敌命1点伤害。\n----\n[鬼谋] 若对手牌库的牌张数小于等于3，则给予敌装2点伤害。",
        textZhG1: "若此牌作为对应打出，则实行当前计略，准备下个计略。\n神算：若对手牌库的牌张数大于等于3，则对敌命造成1点伤害。\n鬼谋：若对手牌库的牌张数小于等于3，则对敌装造成2点伤害。",
        textKo: "이 카드를 공격에 대한 대응으로 사용했다면 계략을 실행하고, 다음 계략을 준비한다.\n[신산] 상대의 패산이 3장 이상이라면 상대 라이프에 1데미지를 준다.\n[귀모] 상대의 패산이 3장 이하라면 상대 오라에 2데미지를 준다.",
        textEn: "If this card was played as a Reaction to an attack, enact your current Plan, the prepare your next one.\n\nDivine - If your opponent's deck has 3 or more cards, deal 1 damage to their Life.\n\nDevious - If your opponent's deck has 3 or fewer cards, deal 2 damage to their Aura.",
    },
    "07-shinra-A1-n-7": {
        megami: "shinra",
        anotherID: "A1",
        replace: "07-shinra-o-n-7",
        name: "使徒",
        nameEn: "Apostle",
        nameZh: "使徒",
        nameZhG1: "使徒",
        nameKo: "사도",
        ruby: "しと",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "fullpower",
        capacity: "2",
        text: "【展開時/破棄時】計略を実行し、次の計略を準備する。\n[神算] 攻撃『適正距離1, 3, 5、2/2、不可避』を行う。\n[鬼謀] 攻撃『適正距離0, 2, 4、2/2、不可避』を行う。",
        textZh: "【展开时/破弃时】实行当前计略，准备下个计略。\n----\n[神算] 进行一次“攻击距离1,3,5、伤害2/2、不可被闪避”的攻击。\n----\n[鬼谋] 进行一次“攻击距离0,2,4、伤害2/2、不可被闪避”的攻击。",
        textZhG1: "【展开时/破弃时】实行当前计略，准备下个计略。\n神算：进行一次“攻击距离1,3,5 伤害2/2 不可被闪避”的攻击。\n鬼谋：进行一次“攻击距离0,2,4 伤害2/2 不可被闪避”的攻击。",
        textKo: "【전개시/파기시】계략을 실행하고 다음 계략을 준비한다.\n[신산] 공격 「적정거리:1, 3, 5, 2/2, 불가피」를 한다.\n[귀모] 공격 「적정거리:0, 2, 4, 2/2, 불가피」를 한다.",
        textEn: 'Initialize/Disenchant: Enact your current Plan, the prepare your next one.\n\nDivine - You attack with "Range: 1, 3, 5, Damage: 2/2, Unavoidable".\n\nDevious - You attack with "Range: 0, 2, 4, Damage: 2/2, Unavoidable".',
    },
    "07-shinra-A1-s-3": {
        megami: "shinra",
        anotherID: "A1",
        replace: "07-shinra-o-s-3",
        name: "全知経典",
        nameEn: "Interpret the Scripture",
        nameZh: "全知经卷",
        nameZhG1: "全知圣典",
        nameKo: "전지경전",
        ruby: "ぜんちきょうてん",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "fullpower",
        range: "0-5",
        damage: "2/2",
        cost: "4",
        text: "対応不可\n【攻撃後】あなたは手札と伏せ札を好きな枚数だけ捨て札にする。その後、捨て札にあるカードから任意の数の計略を、任意の順で実行する。それら全てを解决し終えたら、次の計略を準備する。\n（神算を選んでいたら全て神算で実行する）",
        textZh: "不可被对应\n【攻击后】将任意张手牌和盖牌移入弃牌区。然后从弃牌区选择任意数量的计略，以任意顺序执行。所选择的计略全部结算完毕后，准备下个计略。\n（如果选择的是神算那么执行的计略全部都是神算。鬼谋同之）",
        textZhG1: "不可被对应\n【攻击后】将任意张手牌和盖牌移入弃牌区。然后从弃牌中选择任意数量的计略，以任意顺序执行。所选择的计略全部结算完毕后，准备下个计略。\n（如果选择的是神算那么执行的计略全部都是神算）",
        textKo: "대응불가\n\n【공격후】당신은 손패나 덮임패에서 원하는 만큼 버림패에 옮길 수 있다. 그 후에 버림패에서 임의의 수의 계략을 원하는 순서대로 실행하고, 다음 계략을 준비한다.\n(신산을 준비했다면 모든 계략은 신산으로 처리된다)",
        textEn: "No Reactions\n\nAfter Attack: You may put any number of cards in your hand and discard pile into your played pile. Then, enact any number of Plans on cards in your played pile, in any order. After resolving all of them, prepare your next Plan.",
    },
    "10-kururu-A1-n-1": {
        megami: "kururu",
        anotherID: "A1",
        replace: "10-kururu-o-n-1",
        name: "あならいず",
        nameEn: "Analyze",
        nameZh: "分析",
        nameZhG1: "分析",
        nameKo: "애널라이즈",
        ruby: "",
        rubyEn: "",
        rubyZh: "Analyze",
        baseType: "normal",
        type: "action",
        text: "----\n<付攻対>あなたの任意の伏せ札1枚または相手の無作為な伏せ札1枚を捨て札にする。そのカードが《攻撃》ならば相手のライフに1ダメージを与える。そうでなければ相手は手札を1枚伏せ札にする。",
        textZh: "----\n<付攻对> 从你的盖牌区中选择1张牌或者从对手的盖牌区中随机选择1张牌，将其置入弃牌区。若此牌为《攻击》，则给予敌命1点伤害。否则对手盖伏1张手牌。",
        textZhG1: "机巧：绿红紫～从你的盖牌区中选择1张牌或者从对手的盖牌区中随机选择1张牌，将其置入弃牌区。若此牌为《攻击》，则对敌命造成1点伤害。否则对手盖伏1张手牌。",
        textKo: "----\n<공부대>당신의 임의의 덮임패 1장 또는 상대의 무작위 덮임패 1장을 버림패로 한다. 그 카드가 《공격》이라면 상대의 라이프에 1데미지를 준다. 그렇지 않다면 상대는 손패를 1장 덮임패로 한다.",
        textEn: "Mechanism (ENH ATK REA) - Choose 1 card in your discard pile, or 1 random card in your opponent's discard pile. Put that card into its owner's played pile. If the chosen card is an Attack card, deal 1 damage to your opponent's Life. Otherwise, your opponent puts 1 card from their hand into their discard pile.",
    },
    "10-kururu-A1-n-3": {
        megami: "kururu",
        anotherID: "A1",
        replace: "10-kururu-o-n-3",
        name: "だうじんぐ",
        nameEn: "Dowsing",
        nameZh: "探测",
        nameZhG1: "探测",
        nameKo: "다우징",
        ruby: "",
        rubyEn: "",
        rubyZh: "Dowsing",
        baseType: "normal",
        type: "action",
        text: "相手の山札の上から1枚を捨て札にする。その後、相手の捨て札を1枚選ぶ。\n----\n<X攻Y>選んだカードを使用する。Xは選んだカードのカードタイプに、Yはサブタイプに等しい。",
        textZh: "弃置对手的牌库顶牌。然后从对手的弃牌区中选择1张牌。\n----\n<攻ⓍⓎ> 使用所选择的牌。Ⓧ为所选择的牌的主类别，Ⓨ为所选择的牌的副类别。",
        textZhG1: "弃置对手的牌库顶牌。然后从对手的弃牌区中选择1张牌。\n机巧：X红Y～使用所选择的牌。X为所选择的牌的主类别，Y为所选择的牌的副类别。",
        textKo: "상대의 패산 위에서 1장을 버림패로 한다. 그 후에 상대 버림패를 1장 고른다.\n----\n<X공Y>고른 카드를 사용한다. X는 고른 카드의 카드 타입에 해당되고 Y는 서브 타입에 해당된다.",
        textEn: "Put the top card of your opponent's deck into their played pile, then choose a card in their played pile.\n\n----------\n\nMechanism (X ATK Y) - Play the chosen card. X is that card's type. Y is that card's subtype.",
    },
    "10-kururu-A1-s-3": {
        megami: "kururu",
        anotherID: "A1",
        replace: "10-kururu-o-s-3",
        name: "らすとりさーち",
        nameEn: "Last Research",
        nameZh: "终极探索",
        nameZhG1: "不懈探索",
        nameKo: "라스트 서치",
        ruby: "",
        rubyEn: "",
        rubyZh: "Last Research",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "----\n<攻> 相手は伏せ札から１枚選ぶ。あなたはカード名を１つ宣言し、相手は選んだカードを捨て札にする。そのカード名が一致したらこのカードの上にダストから桜花結晶を１つ置く。2つになったらこのカードの上の桜花結晶をダストに送るとともに世紀の大発見を行い、このカードは終端を得る。\n----\n【即再起】あなたが山札を再構成する（再構成の後に未使用に戻る）。",
        textAdditional: "「世紀の大発見」- 相手の切札を全て見る。その後、あなたか対戦相手のどちらかを選び、そのプレイヤーが宿しているメガミの切札の内、眼前構築で選ばれていない切札5枚をゲーム外から未使用状態で得る。 さらに、使用したあなたの「らすとりさーち」を取り除き、追加札領域にある「ぐらんがりばー」を未使用状態で得る。\n（条件を満たした状態で、このカードを右クリックすることにより発動可能）",
        textZh: "<攻> 对手选择其盖牌区中的1张牌。你宣言1个牌名，并弃置所选择的牌。若你宣言的牌名与所选择牌的牌名一致，则将1个樱花结晶从虚移至此牌上。当此牌上的樱花结晶数达到2个后，则将其上所有樱花结晶移至虚，进行世纪的大发现，此牌额外获得终端。\n----\n【即再起】你重铸牌库后。",
        textZhG1: "机巧：红～对手选择其盖牌区中的1张牌。你宣言1个牌名，并弃置所选择的牌。若你宣言的牌名与所选择牌的牌名一致，则将1个樱花结晶从虚移至此牌上。当此牌上的樱花结晶的数目达到2个后，则将其上所有樱花结晶移至虚，进行世纪的大发现（查看对手的所有王牌。这之后选择你或者对手，将所选玩家寄宿的女神的王牌中在眼前构筑时没有被选上的5张，从追加牌处以未使用的状态获得。再将『不懈探索』移出游戏并从追加牌处以未使用的状态获得『壮绝旅途』），此牌额外获得终端。\n----\n【即再起】你重铸牌库后",
        textZhAdditional: "「世纪的大发现」～查看对手的所有王牌。这之后选择你或者对手，将所选玩家寄宿的女神的王牌中在眼前构筑时没有被选上的5张，从游戏外以未使用的状态获得。再将『终极探索』移出游戏并从追加牌区以未使用的状态获得王牌『壮绝旅途』。",
        textKo: "----\n<공>상대는 덮임패에서 1장을 고른다. 당신은 카드 이름을 1개 선언하고 상대는 고른 카드를 버림패로 한다. 그 카드 이름이 일치했다면 이 카드 위에 더스트에서 벚꽃 결정을 1개 올려둔다. 2개가 되었다면 이 카드 위의 벚꽃 결정을 더스트로 보내고 새기의 대발견을 하고 이 카드는 종단을 얻는다.\n----\n【즉재기】당신이 덱을 재구축한다(재구축 후에 미사용으로 돌아간다).",
        textEn: "Mechanism (ATK) - Your opponent choose a card in their discard pile. Choose a card name. Your opponent put the chosen card into its owner's played pile. If it is the named card, move 1 Sakura token from Shadow to this card. If there are 2 Sakura tokens on this card, move all of them to Shadow, you make the discovery of the century, and this card gains Terminal.\n\n----------\n\nImmediate Resurgence: You reshuffle your deck.",
    },
    "10-kururu-A1-s-3-ex1": {
        megami: "kururu",
        anotherID: "A1",
        replace: "10-kururu-o-s-3-ex1",
        name: "ぐらんがりばー",
        nameEn: " Grand Gulliver",
        nameZh: "壮绝旅途",
        nameZhG1: "壮绝旅途",
        nameKo: "그랑갈리버",
        ruby: "",
        rubyEn: "",
        rubyZh: "Grand Gulliver",
        baseType: "special",
        extra: true,
        extraFrom: "10-kururu-A1-s-3",
        type: "action",
        cost: "X",
        text: "【常時】Xはあなたのフレアに等しい。\n【使用済】あなたの切札の消費は0となる。",
        textZh: "【常时】X等于自气中樱花结晶的数目。\n【使用后】你的王牌的费用变为0。",
        textZhG1: "【常时】X等于自气中樱花结晶的数目。\n【使用后】你的王牌的费用变为0。",
        textKo: "【상시】X는 당신의 플레어에 해당된다.\n【사용됨】당신의 비장패의 코스트는 0이 된다.",
        textEn: "Forced: X is the number of Sakura tokens on your Flare.\n\nDevoted: The Flare Costs of your Special cards become 0.",
    },
    "15-korunu-o-n-1": {
        megami: "korunu",
        name: "雪刃",
        nameEn: "Ice Shards",
        nameZh: "雪刃",
        nameZhG1: "雪刃",
        nameKo: "눈 칼날",
        ruby: "せつじん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-4",
        damage: "1/1",
        text: "【攻撃後】相手は1回凍結する。",
        textZh: "【攻击后】冻结对手1次。",
        textZhG1: "【攻击后】冻结对手1次。",
        textKo: "【공격후】상대를 동결시킨다.",
        textEn: "After Attack: Freeze your opponent.",
    },
    "15-korunu-o-n-2": {
        megami: "korunu",
        name: "旋回刃",
        nameEn: "Cyclone Blade",
        nameZh: "回旋刃",
        nameZhG1: "旋回刃",
        nameKo: "선회날",
        ruby: "せんかいじん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-3",
        damage: "2/2",
        text: "【常時】この《攻撃》が対応されたならば、対応したカードの解決後に\n間合⇔ダスト：2",
        textZh: "【常时】若此《攻击》被对应，则在对应牌结算后：虚↔2↔距",
        textZhG1: "【常时】若此《攻击》被对应，则在对应牌结算后虚（2）⇔距",
        textKo: "【상시】이 카드에 대응을 했다면 대응을 해결한 뒤에, \n\n간격⇔더스트:2",
        textEn: "Forced: If a Reaction is made to this attack, after it resolves:\n\nDistance (2)⇔ Shadow",
    },
    "15-korunu-o-n-3": {
        megami: "korunu",
        name: "剣の舞",
        nameEn: "Blade Dance",
        nameZh: "剑舞",
        nameZhG1: "剑舞",
        nameKo: "칼춤",
        ruby: "つるぎのまい",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "2/1",
        text: "【常時】相手のオーラに空きがないならば、この《攻撃》は+1/+1となる。",
        textZh: "【常时】若敌装中没有空位，则此《攻击》得+1/+1。",
        textZhG1: "【常时】若敌装中没有空位，则此《攻击》得+1/+1",
        textKo: "【상시】상대의 오라가 꽉 차있다면, 이 《공격》은 +1/+1된다.",
        textEn: "Forced: If your opponent's Aura is full, this attack gets +1/+1.",
    },
    "15-korunu-o-n-4": {
        megami: "korunu",
        name: "雪渡り",
        nameEn: "Snow Crossing",
        nameZh: "渡雪",
        nameZhG1: "渡雪",
        nameKo: "눈 타기",
        ruby: "ゆきわたり",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "間合⇔ダスト：1\n相手のオーラの空きがないならば、\nダスト→間合：1\nを行ってもよい。",
        textZh: "距↔1↔虚\n若敌装中没有空位，则你可以再进行：虚→1→距",
        textZhG1: "距（1）⇔虚\n若敌装中没有空位，则你可以选择虚（1）→距",
        textKo: "간격⇔더스트:1\n\n상대의 오라가 꽉 차있다면,\n더스트→간격:1\n을 해도 좋다.",
        textEn: "Distance (1)⇔ Shadow\n\nIf your opponent's Aura is full, you may then:\n\nShadow (1)→ Distance",
    },
    "15-korunu-o-n-5": {
        megami: "korunu",
        name: "絶対零度",
        nameEn: "Absolute Zero",
        nameZh: "绝对零度",
        nameZhG1: "绝对零度",
        nameKo: "절대영도",
        ruby: "ぜったいれいど",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "相手はオーラの空きがなくなるまで凍結する。",
        textZh: "冻结对手，直至敌装中没有空位为止。",
        textZhG1: "冻结对手，直至敌装中没有空位为止。",
        textKo: "상대의 오라가 꽉 찰때까지 동결시킨다.",
        textEn: "Freeze your opponent until their Aura is full.",
    },
    "15-korunu-o-n-6": {
        megami: "korunu",
        name: "かじかみ",
        nameEn: "Frostbite",
        nameZh: "冻僵",
        nameZhG1: "冻僵",
        nameKo: "동상",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開時】相手は1回凍結する。\n【展開中】相手は基本動作《宿し》を行えない。",
        textZh: "【展开时】冻结对手1次。\n【展开中】对手不能执行基本动作《聚气》。",
        textZhG1: "【展开时】冻结对手1次。\n【展开中】对手不能执行基本动作《聚气》。",
        textKo: "【전개시】상대를 동결시킨다.\n【전개중】상대는 기본 동작 《품기》를 할 수 없다.",
        textEn: "Initialize: Freeze your opponent.\nOngoing: Your opponent cannot perform the Focus basic action.",
    },
    "15-korunu-o-n-7": {
        megami: "korunu",
        name: "凍縛場",
        nameEn: "Prison of Ice",
        nameZh: "冻缚场",
        nameZhG1: "冻缚场",
        nameKo: "동박장",
        ruby: "とうばくば",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開中】相手が凍結しているならば、相手の開始フェイズに相手は以下から2つを選ぶ。\nその開始フェイズにおいて選ばれた2つの処理を飛ばす。\n・集中力を1得る。\n・付与札から桜花結晶を1つずつ取り除く。\n・山札を再構成してもよい。\n・カードを2枚引く。",
        textZh: "【展开中】若对手被冻结，则每当对手的准备阶段开始时，对手选择以下2项。该开始阶段结算时跳过对手选择的步骤。\n●获得1点集中力；\n●从每张展开中的付与牌上移除1个樱花结晶；\n●可以重铸牌库；\n●抓2张牌。",
        textZhG1: "【展开中】若对手被冻结，则每当对手的开始阶段开始时，对手选择2项。该开始阶段结算时跳过对手选择的步骤。\n1.获得1点集中力；\n2.从每张展开中的付与牌上移除1个樱花结晶；\n3.可以重铸牌库；\n4.抓2张牌。",
        textKo: "【전개중】상대의 오라에 동결 토큰이 있다면 상대의 개시 페이즈 때에 아래의 단계 중 2개를 골라서 무시한다.\n・집중력을 1얻는다.\n・부여패에서 벚꽃결정을 1개씩 더스트로 보낸다.\n・패산의 재구성을 해도 좋다.\n・카드를 2장 뽑는다.",
        textEn: "Ongoing: If your opponent has any Ice counters, at the beginning of their turn, they choose two of the following steps and skip them that phase:\n・Gain 1 Vigor.\n・Move 1 Sakura token from each Enhancement in play to Shadow.\n・You may reshuffle your deck.\n・Draw 2 cards.",
    },
    "15-korunu-o-s-1": {
        megami: "korunu",
        name: "コンルルヤンペ",
        nameEn: "Konru Ruyanpe",
        nameZh: "凛冽冰雨",
        nameZhG1: "凛冽冰雨",
        nameKo: "콘루 루얀페",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "2-3",
        damage: "2/3",
        cost: "4",
        text: "【攻撃後】相手がオーラへのダメージを選んだならば、相手はオーラの空きがなくなるまで凍結する。",
        textZh: "【攻击后】若对手选择由装承受此次伤害，则冻结对手，直至敌装中没有空位为止。",
        textZhG1: "【攻击后】若对手选择由装承受此次伤害，则冻结对手，直至敌装中没有空位为止。",
        textKo: "【공격후】상대가 오라 데미지를 선택했다면 상대의 오라가 꽉 찰때까지 동결시킨다.",
        textEn: "After Attack: If your opponent chose to take damage to Aura, Freeze them until their Aura is full.",
    },
    "15-korunu-o-s-2": {
        megami: "korunu",
        name: "レタルレラ",
        nameEn: "Retar Rera",
        nameZh: "刺骨霜风",
        nameZhG1: "刺骨霜风",
        nameKo: "레타르 레라",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "2",
        text: "相手のオーラに空きがないならば、対応した《攻撃》を打ち消す。そうでなければ、\n間合→相オーラ：1",
        textZh: "若敌装中没有空位，则打消被对应的《攻击》。否则：距→1→敌装",
        textZhG1: "若敌装中没有空位，则打消被对应的《攻击》。否则距（1）→敌装",
        textKo: "상대의 오라가 꽉 차있다면 대응한 공격을 무효한다. 그렇지 않다면,\n간격→상대 오라:1",
        textEn: "Cancel the attack you played this card as a Reaction to if your opponent's Aura is full. Otherwise,\n\nDistance (1)→ Opponent's Aura",
    },
    "15-korunu-o-s-3": {
        megami: "korunu",
        name: "ウパシトゥム",
        nameEn: "Upastum",
        nameZh: "纷飞寒雪",
        nameZhG1: "纷飞寒雪",
        nameKo: "우파스툼",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-6",
        damage: "0/-",
        cost: "0",
        text: "【攻撃後】相手は1回凍結する。\n（この効果でオーラの空きがなくなっても、まだ使用中なので未使用には戻らない）\n----\n【即再起】相手のオーラが空いた状態から空きがなくなる。",
        textZh: "【攻击后】冻结对手1次。\n（即使因此效果使敌装中没有空位，此牌也会因仍在使用中而不会变为未使用状态。）\n----\n即再起：敌装从有空位的状态变为没有空位的状态。",
        textZhG1: "【攻击后】冻结对手1次。\n（即使因此效果使敌装中没有空位，此牌也会因仍在使用中而不会变为未使用状态。）\n即再起：敌装从有空位的状态变为没有空位的状态。",
        textKo: "【공격후】상대를 동결시킨다. (이 카드는 아직 사용중이기 때문에 오라가 꽉 차도 즉재기되지 않는다)\n----\n즉재기:상대의 오라가 꽉 찬다.",
        textEn: "After Attack: Freeze your opponent. (This can't cause this card to Resurge as it has not finished resolving.)\n\nImmediate Resurgence: Your opponent's Aura becomes full.",
    },
    "15-korunu-o-s-4": {
        megami: "korunu",
        name: "ポルチャルトー",
        nameEn: "Poru-char To",
        nameZh: "往生彼岸",
        nameZhG1: "彼世深渊",
        nameKo: "폴챠르트",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "5",
        cost: "2",
        text: "終端\n【展開中】矢印効果による間合からの桜花結晶の移動と間合への桜花結晶の移動は1大きくなる。",
        textZh: "终端\n【展开中】每当箭头效果将樱花结晶移入或移出距时，额外移动1个樱花结晶。",
        textZhG1: "终端\n【展开中】每当箭头效果将樱花结晶移入或移出距时，额外移动1个樱花结晶。",
        textKo: "종단\n【전개중】화살표가 있고 간격과 관련있는 벚꽃결정의 이동 수가 +1된다.",
        textEn: "Terminal\n\nOngoing: Increase the number of Sakura tokens moved by arrows (→) to or from Distance by 1.",
    },
    "16-yatsuha-o-n-1": {
        megami: "yatsuha",
        name: "星の爪",
        nameEn: "Astral Claw",
        nameZh: "星之爪",
        nameZhG1: "星之爪",
        nameKo: "별의 손톱",
        ruby: "ほしのつめ",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-1-ex1",
        type: "attack",
        range: "3-4",
        damage: "3/2",
        text: "【攻撃後】自オーラ→相フレア：1 ",
        textZh: "【攻击后】自装→1→敌气",
        textZhG1: "【攻击后】自装（1）→敌气",
        textKo: "【공격후】자신 오라→상대 플레어：1 ",
        textEn: "After Attack: Your Aura (1)→ Opponent's Flare",
    },
    "16-yatsuha-o-n-2": {
        megami: "yatsuha",
        name: "昏い咢",
        nameEn: "Grim Edict",
        nameZh: "昏之颚",
        nameZhG1: "暗之颚",
        nameKo: "황혼의 칼날",
        ruby: "くらいあぎと",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-2-ex1",
        type: "attack",
        range: "4",
        damage: "3/1",
        text: "不可避\n【常時】この《攻撃》は+0/+Xとなる。Xは鏡映数に等しい。\n【攻撃後】あなたは畏縮する。",
        textZh: "不可被闪避\n【常时】此攻击得+0/+X。X等于镜映数。\n【攻击后】令你畏缩。",
        textZhG1: "不可被闪避\n【常时】此攻击得+0/+X。X等于镜映数。\n【攻击后】你畏缩。",
        textKo: "불가피\n【상시】이 《공격》은 +0/+X된다. X는 거울 수에 해당된다.\n【공격후】당신은 위축된다.",
        textEn: "Unavoidable\n\nForced: This attack gains +0/+X, where X is the number of Reflections.\n\nAfter Attack: Flinch yourself.",
    },
    "16-yatsuha-o-n-3": {
        megami: "yatsuha",
        name: "鏡の悪魔",
        nameEn: "Devil of the Mirror",
        nameZh: "镜之恶魔",
        nameZhG1: "镜之恶魔",
        nameKo: "거울의 악마",
        ruby: "かがみのあくま",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-3-ex1",
        type: "attack",
        subType: "fullpower",
        range: "2-3",
        damage: "5/3",
        text: "【攻撃後】自ライフ→ダスト：1 ",
        textZh: "【攻击后】自命→1→虚",
        textZhG1: "【攻击后】自命（1）→虚",
        textKo: "【공격후】자신 라이프→더스트：1 ",
        textEn: "After Attack: Your Life (1)→ Shadow",
    },
    "16-yatsuha-o-n-4": {
        megami: "yatsuha",
        name: "幻影歩法",
        nameEn: "Phantom Stride",
        nameZh: "幻影步法",
        nameZhG1: "幻影步法",
        nameKo: "환영보법",
        ruby: "げんえいほほう",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-4-ex1",
        type: "action",
        text: "あなたは集中力を1得る。\n以下から1つを選ぶ。\n・このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\n・このターン中、現在の間合は1減少し、達人の間合は1小さくなる。",
        textZh: "获得1点集中力。选择1项：\n●本回合内，当前距离增大1，达人距离增大1；\n●本回合内，当前距离减小1，达人距离减小1。",
        textZhG1: "获得1点集中力。选择1项：\n1.本回合内，当前距离增大1，达人距离增大1；\n2.本回合内，当前距离减小1，达人距离减小1。",
        textKo: "당신은 집중력을 1얻는다.\n아래에서 1개를 고른다.\n・이 턴 동안 현재의 간격은 1증가하고 달인의 간격은 1늘어난다.\n・이 턴 동안 현재의 간격은 1감소하고 달인의 간격은 1줄어든다.",
        textEn: "Gain 1 Vigor. Choose one:\n・For the rest of the turn, the current Distance is increased by 1, and the size of the Mastery Zone is increased by 1.\n・For the rest of the turn, the current Distance is decreased by 1, and the size of the Mastery Zone is decreased by 1.",
    },
    "16-yatsuha-o-n-5": {
        megami: "yatsuha",
        name: "意志",
        nameEn: "Determination",
        nameZh: "意志",
        nameZhG1: "意志",
        nameKo: "의지",
        ruby: "いし",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-5-ex1",
        type: "action",
        subType: "reaction",
        text: "以下のどちらかまたは両方を行う。\n・自オーラ⇔自フレア：1\n・相オーラ⇔相フレア：1",
        textZh: "选择1项或都选：\n●自装↔1↔自气\n●敌装↔1↔敌气",
        textZhG1: "选择1项或都选：\n1.自装（1）⇔自气\n2.敌装（1）⇔敌气",
        textKo: "아래에서 하나 또는 양쪽을 실행한다.\n・자신 오라⇔자신 플레어：1\n・상대 오라⇔상대 플레어：1",
        textEn: "Choose one or both:\n・Your Aura (1)⇔ Your Flare\n・Opponent's Aura (1)⇔ Opponent's Flare",
    },
    "16-yatsuha-o-n-6": {
        megami: "yatsuha",
        name: "契約",
        nameEn: "Pact of Glass",
        nameZh: "契约",
        nameZhG1: "契约",
        nameKo: "계약",
        ruby: "けいやく",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-6-ex1",
        type: "action",
        subType: "reaction",
        text: "相フレア→自オーラ：1\n次の終了フェイズに相手のフレアがあなたのフレア以下ならば、\n自オーラ→相フレア：1",
        textZh: "敌气→1→自装\n在下一个结束阶段，若敌气中的樱花结晶的数目不大于自气，则：自装→1→敌气",
        textZhG1: "敌气（1）→自装\n下一个结束阶段开始时，若敌气中的樱花结晶的数目不大于自气，则自装（1）→敌气",
        textKo: "상대 플레어→자신 오라：1\n다음 종료 페이즈에 상대의 플레어가 당신의 플레어 이하라면,\n자신 오라→상대 플레어：1",
        textEn: "Opponent's Flare (1)→ Your Aura\n\nAt the end of this turn, if your Opponent's Flare is less than or equal to yours:\n\nYour Aura (1)→ Opponent's Flare",
    },
    "16-yatsuha-o-n-7": {
        megami: "yatsuha",
        name: "寄花",
        nameEn: "Flower Harvest",
        nameZh: "寄花",
        nameZhG1: "寄花",
        nameKo: "기묘한 꽃",
        ruby: "よりばな",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-7-ex1",
        type: "enhance",
        capacity: "3",
        text: "隙\n【常時】このカードの納は鏡映数だけ小さくなる。\n【破棄時】攻撃『適正距離1-4、0/0、【攻撃後】相オーラ→自オーラ：2』を行う。",
        textZh: "破绽\n【常时】此牌的纳减小X，X等于镜映数。\n【破弃时】进行一次“攻击距离1-4、伤害0/0、【攻击后】敌装→2→自装”的《攻击》。",
        textZhG1: "破绽\n【常时】此牌的纳减小X，X等于镜映数。\n【破弃时】进行一次“攻击距离1-4 伤害0/0 【攻击后】敌装（2）→自装”的《攻击》。",
        textKo: "틈\n【상시】이 카드의 납은 거울 수만큼 줄어든다.\n【파기시】공격 『적정거리1-4, 0/0, 【공격후】상대 오라→자신 오라：2』를 한다.",
        textEn: "Unguarded\n\nForced: This card's Charge is reduced by 1 for each Reflection.\n\nDisenchant: You attack with \"Range: 1-4, Damage: 0/0, After Attack: Opponent's Aura (2)→ Your Aura\".",
    },
    "16-yatsuha-o-s-1": {
        megami: "yatsuha",
        name: "双葉鏡の祟り神",
        nameEn: "Vengeful Spirit of the Twin Mirrors",
        nameZh: "双叶镜的崇神",
        nameZhG1: "双叶镜的崇神",
        nameKo: "쌍잎 거울의 재앙신",
        ruby: "ふたばかがみのたたりがみ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "4",
        text: "あなたのライフが相手のライフよりも小さいならば、対応した《攻撃》の複製である《攻撃》を行う。その《攻撃》は対応した《攻撃》に対応しているものとして扱う。（複製とは適正距離、ダメージ、【攻撃後】効果、超克の有無、使用メガミが同一の攻撃である。適正距離やダメージは全ての効果を適用した後のものを用いる）\n対応した切札でない《攻撃》を打ち消す。",
        textZh: "若自命中的樱花结晶的数目小于敌命，则进行一次《攻击》，该《攻击》为被对应的《攻击》的复制并且对应了那个被对应的《攻击》。（复制的《攻击》的攻击距离、伤害、【攻击后】效果、有无超克、使用女神均与被复制的攻击相同。攻击距离与伤害使用由其他效果修正后的值。）\n打消被对应的非王牌的《攻击》。",
        textZhG1: "若自命中的樱花结晶的数目小于敌命，则进行一次《攻击》，该攻击为被对应的攻击的复制\n（复制的《攻击》的攻击距离、伤害、【攻击后】效果、有无超克、使用女神均与被复制的攻击相同。攻击距离与伤害使用由其他效果修正后的值）\n打消被对应的非王牌的《攻击》。",
        textKo: "당신의 라이프가 상대의 라이프보다 적다면 대응한 《공격》의 복제에 해당되는 《공격》을 한다. 그 《공격》은 대응한 《공격》에 대응한 것으로 취급한다. (복제란 적정거리, 데미지, 【공격후】 효과, 초극의 유무, 사용 여신의 동일한 공격이다. 적정거리나 데미지는 모든 효과를 적용한 후의 것을 사용한다)\n대응한 비장패가 아닌 《공격》을 무효로 한다.",
        textEn: "If you have less Life than your opponent, copy the Attack you played this card as a Reaction to. Make that Attack, treating it as if it were played as a Reaction to the original Attack. (The copy has the same Range, Damage, and After Attack effects as the original. It has Overwhelm if the original does. Its source Megami is the same as the original's. Forced effects are not copied.)\n\nCancel the non-Special attack you played this card as a Reaction to.",
    },
    "16-yatsuha-o-s-2": {
        megami: "yatsuha",
        name: "四葉鏡のわらべ唄",
        nameEn: "Lullaby of the Four Mirrors",
        nameZh: "四叶镜的童谣",
        nameZhG1: "四叶镜的童谣",
        nameKo: "네잎 거울의 전래동요",
        ruby: "よつばかがみのわらべうた",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "3",
        text: "付与札を1つ選び、その上から桜花結晶全てをダストに送る。\nその《付与》カードが捨て札または使用済で切札にあるならば、そのカードを消費を支払わずに使用してもよい。そうした場合、そのカードが《全力》ならばこのカードは終端を得る。",
        textZh: "从付与区中选择1张展开中的付与牌，将其上所有樱花结晶移至虚。\n之后这张《付与》牌处于弃牌区或是已使用的王牌的话，则你可以使用该牌，而不需支付其费用。若如此做，且该牌为《全力》，则此牌额外获得终端。",
        textZhG1: "选择1张付与牌，将其上所有樱花结晶移至虚。\n之后这张《付与》牌处于弃牌区或是已使用的王牌的话，则你可以使用该牌，而不需支付其费用。若如此做，且该牌为《全力》，则此牌额外获得终端。",
        textKo: "부여패를 1장 고르고 그 위의 벚꽃 결정을 전부 더스트로 보낸다.\n그 《부여》카드가 버림패 또는 사용된 비장패에 있다면 그 카드를 코스트에 상관없이 사용해도 좋다. 그렇게 한 경우, 그 카드가 《전력》이라면 이 카드는 종단을 얻는다.",
        textEn: "Choose an Enhancement in play. Move all Sakura tokens from that card to Shadow.\n\nIf that card is now in its owner's played pile, or is Devoted, you may play it without paying its cost. If you did, and that card was Throughout, this card gains Terminal.",
    },
    "16-yatsuha-o-s-3": {
        megami: "yatsuha",
        name: "六葉鏡の星の海",
        nameEn: "Celestial River of the Six Mirrors",
        nameZh: "六叶镜的星海",
        nameZhG1: "六叶镜的星海",
        nameKo: "여섯잎 거울의 별바다",
        ruby: "むつばかがみのほしのうみ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-7",
        damage: "3/1",
        cost: "5",
        text: "超克　対応不可（通常札） \n【常時】この《攻撃》は+X/+Xとなる。Xは鏡映数に等しい。",
        textZh: "超克 不可被对应（通常牌）\n【常时】此攻击得+X/+X。X等于镜映数。",
        textZhG1: "超克 不可被对应（通常牌）\n【常时】此攻击得+X/+X。X等于镜映数。",
        textKo: "초극　대응불가（통상패） \n【상시】이 《공격》은+X/+X된다. X는 거울 수에 해당된다.",
        textEn: "Overwhelm    No Reactions (Normal)\n\nForced: This Attack gains +X/+X, where X is the number of Reflections.",
    },
    "16-yatsuha-o-s-4": {
        megami: "yatsuha",
        name: "八葉鏡の向こう側",
        nameEn: "The Other Side of the Eight Mirrors",
        nameZh: "八叶镜的映界",
        nameZhG1: "八叶镜的映界",
        nameKo: "여덟잎 거울의 저편",
        ruby: "やつはかがみのむこうがわ",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "5",
        cost: "2",
        text: "終端\n【展開中】あなたのカードの矢印(→)は両矢印(⇔)になる。\n【破棄時】このカードを取り除く。",
        textZh: "终端\n【展开中】你的卡片效果中的箭头（→）改为双箭头（↔）。\n【破弃时】将此牌移出游戏。",
        textZhG1: "终端\n【展开中】你的卡片效果中的箭头（→）改为双箭头（⇔）。\n【破弃时】将此牌移出游戏。",
        textKo: "종단\n【전개중】당신의 카드의 화살표(→)는 양쪽 화살표(⇔)가 된다.\n【파기시】이 카드를 제외한다.",
        textEn: "Terminal\n\nOngoing: Arrows (→) on your cards become double arrows (⇔).\n\nDisenchant: Remove this card from the game.",
        removable: true,
    },
};
// シーズン4プレ更新
exports.S4_PRE_UPDATED_CARD_DATA = {
    "01-yurina-o-n-3": {
        megami: "yurina",
        name: "柄打ち",
        nameEn: "Hilt Strike",
        nameZh: "柄击",
        nameZhG1: "剑柄打击",
        nameKo: "자루치기",
        ruby: "つかうち",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2",
        damage: "2/1",
        text: "【攻撃後】決死-あなたのライフが3以下ならば、このターンにあなたが次に行う他のメガミによる《攻撃》は+1/+0となる。",
        textZh: "【攻击后】决死～若自命中的樱花结晶数小于等于3，则本回合你的下一次其他女神的《攻击》得+1/+0。 \n",
        textZhG1: "【攻击后】决死～若自命中的樱花结晶的数目小于等于3，则本回合内你的下一次其他女武神的《攻击》获得+1/+0。",
        textKo: "【공격후】결사-당신의 라이프가 3 이하라면, 이 턴에 당신이 다음에 행하는 다른 여신의 《공격》은 +1/+0이 된다.",
        textEn: "After Attack: Resolve - The next attack you make from your other Megami this turn gains +1/+0 if your Life is 3 or less.",
    },
    "01-yurina-o-s-2": {
        megami: "yurina",
        name: "浦波嵐",
        nameEn: "Uranami Storm",
        nameZh: "浦波岚",
        nameZhG1: "浦波岚",
        nameKo: "파도치는 폭풍우",
        ruby: "うらなみあらし",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "2/-",
        cost: "4",
        text: "【攻撃後】対応した《攻撃》は-2/+0となる。",
        textZh: "【攻击后】被对应的《攻击》得-2/+0。",
        textZhG1: "【攻击后】被对应的《攻击》获得-2/+0。",
        textKo: "【공격후】대응한 《공격》은 -2/+0이 된다.",
        textEn: "After Attack: The attack this card was played as a Reaction to gets -2/+0.",
    },
    "01-yurina-A1-n-1": {
        megami: "yurina",
        anotherID: "A1",
        replace: "01-yurina-o-n-1",
        name: "乱打",
        nameEn: "Wild Swing",
        nameZh: "乱打",
        nameZhG1: "乱打",
        nameKo: "난타",
        ruby: "らんだ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2",
        damage: "1/2",
        text: "【常時】決死-あなたのライフが3以下ならば、この《攻撃》は+1/+1となり、対応不可を得る。",
        textZh: "【常时】决死～若自命中的樱花结晶数小于等于3，则此《攻击》得+1/+1和不可被对应。",
        textZhG1: "【常时】决死～若自命中的樱花结晶的数目小于等于3，则此《攻击》获得+1/+1和不可被对应。",
        textKo: "【상시】결사-당신의 라이프가 3 이하라면, 이 《공격》은 +1/+1가 되고, 대응불가를 얻는다.",
        textEn: "Forced: Resolve - If your Life is 3 or less, this attack gains +1/+1 and No Reactions.",
    },
    "02-saine-o-n-2": {
        megami: "saine",
        name: "薙斬り",
        nameEn: "Cut Down",
        nameZh: "薙刀斩",
        nameZhG1: "薙刀斩",
        nameKo: "후려베기",
        ruby: "なぎぎり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "3/1",
        text: "【常時】ダストが0ならば、この《攻撃》は+0/+1となる。",
        textZh: "【常时】若虚中没有樱花结晶，则此《攻击》得+0/+1。",
        textZhG1: "【常时】若虚中的樱花结晶的数目等于0，则此《攻击》得+0/+1。",
        textKo: "【상시】더스트가 0이라면 이 《공격》은 +0/+1된다.",
        textEn: "Forced: If there is no Sakura token on Shadow, this attack gains +0/+1.",
    },
    "03-himika-o-n-6": {
        megami: "himika",
        name: "バックドラフト",
        nameEn: "Backdraft",
        nameZh: "回燃",
        nameZhG1: "回燃",
        nameKo: "백 드래프트",
        ruby: "",
        rubyEn: "",
        rubyZh: "Backdraft",
        baseType: "normal",
        type: "action",
        text: "相手を畏縮させる。\n連火-このカードがこのターンに使用した3枚目以降のカードであり、現在の間合が4以下ならば、このターンにあなたが次に行う他のメガミによる《攻撃》を+1/+1する。",
        textZh: "令对手畏缩。\n连火～若此牌是本回合你使用的第3张或更多的牌，且现在的距为4或以下，则本回合你的另一柱女神的下一次《攻击》得+1/+1。",
        textZhG1: "对手畏缩。\n连火～若本回合内你已使用至少2张牌，且当前距离小于等于4，则本回合内你的其他女神的下一次《攻击》获得+1/+1。",
        textKo: "상대를 위축시킨다。\n연화-이 카드가 이 턴에 사용한 3장째 이후의 카드에다가 현재의 간격이 4이하라면, 이 턴 당신이 다음에 행하는 다른 여신에 의한 《공격》을 +1/+1 한다.",
        textEn: "Flinch your opponent.\n\nInferno - If this is the third or later card you've played this turn, and the current distance is 4 or less, the next attack from your other Megami that you make this turn gains +1/+1.",
    },
    "05-oboro-o-n-2": {
        megami: "oboro",
        name: "影菱",
        nameEn: "Caltrops",
        nameZh: "影菱",
        nameZhG1: "影菱",
        nameKo: "그림자 마름",
        ruby: "かげびし",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2",
        damage: "2/1",
        text: "設置　対応不可\n【攻撃後】このカードを伏せ札から使用し、伏せ札に他のカードがあるならば、相手の手札を見てその中から1枚を選び、それを伏せ札にする。",
        textZh: "设置 不可被对应 \n【攻击后】若你从盖牌区使用此牌，且你还有其他盖牌，则检视对手的手牌，盖伏其中1张。",
        textZhG1: "设置 不可被对应 \n【攻击后】若你从盖牌区使用此牌，且盖牌区中存在其他牌，则检视对手的手牌，从中选择1张并盖伏。",
        textKo: "설치 대응불가\n【공격후】이 카드를 덮임패에서 사용했고 다른 카드가 덮임패에 존재한다면, 상대의 손패를 보고 그 중 1장을 골라, 그것을 덮임패로 한다.",
        textEn: "Trap    No Reactions\n\nAfter Attack: If this card was played from your discard pile, and there is at least one other card in your discard pile, look at your opponent's hand. Choose one of those cards and put it into their discard pile.",
    },
    "09-chikage-o-n-3": {
        megami: "chikage",
        name: "遁術",
        nameEn: "Concealment",
        nameZh: "遁术",
        nameZhG1: "遁术",
        nameKo: "둔갑술",
        ruby: "とんじゅつ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "1-3",
        damage: "1/-",
        text: "【攻撃後】自オーラ→間合：1　ダスト→間合：1\n【攻撃後】このターン中、相手は基本動作《前進》を行えない。",
        textZh: "【攻击后】自装→1→距 虚→1→距\n【攻击后】本回合内，对手不能执行基本动作《前进》。",
        textZhG1: "【攻击后】自装（1）→距，虚（1）→距\n【攻击后】本回合内对手不能执行基本动作《前进》。",
        textKo: "【공격후】자신 오라→간격：1   더스트→간격：1 \n【공격후】이 턴 중에, 상대는 기본동작 《전진》을 행할 수 없다.",
        textEn: "After Attack:\nYour Aura (1)→ Distance, Shadow (1)→ Distance\n\nAfter Attack: Your opponent cannot perform the Forward Movement basic action for the rest of the turn.",
    },
    "12-raira-o-s-4": {
        megami: "raira",
        name: "円環輪廻旋",
        nameEn: "Death and Rebirth",
        nameZh: "圆环轮回旋",
        nameZhG1: "圆环轮回旋",
        nameKo: "원환룬회선",
        ruby: "えんかんりんかいせん",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "fullpower",
        capacity: "4",
        cost: "3",
        text: "【展開中】相手が《攻撃》を行ったならば、その解決後に以下を行ってもよい。\n間合⇔ダスト：1\n\n風神ゲージか雷神ゲージを1上げる。",
        textZh: "【展开中】对手进行的《攻击》结算完毕时，执行以下内容。\n距←1→虚\n\n选择风神槽或雷神槽，其值增加1。",
        textZhG1: "【展开中】每当对手进行的《攻击》结算完毕时，你可以依序执行以下动作。\n距（1）⇔ 虚 \n选择风神槽或雷神槽，其值增加1。",
        textKo: "【전개중】상대가 《공격》을 했다면, 해결 후에 아래를 실행해도 좋다.\n간격⇔더스트：1\n\n풍신 게이지 또는 뇌신 게이지를 1올린다.",
        textEn: "Ongoing: Whenever your opponent attacks, after it is resolved, you may:\nDistance (1)⇔ Shadow\nIncrease your Wind God or Thunder God gauge by 1.",
    },
    "13-utsuro-o-s-4": {
        megami: "utsuro",
        name: "魔食",
        nameEn: "Эрозия",
        nameZh: "魔食",
        nameZhG1: "魔食",
        nameKo: "마식~Эрозия~",
        ruby: "エロージャ",
        rubyEn: "Eroziya",
        rubyZh: "Эрозия",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "【使用済】あなたの開始フェイズの開始時に相手は以下のどちらかを選ぶ。\n・相オーラ→ダスト：1\n・相フレア→ダスト：2",
        textZh: "【使用后】每当你的准备阶段开始时，对手选择一项：\n●敌装→1→虚\n●敌气→2→虚",
        textZhG1: "【使用后】每当你的准备阶段开始时，对手选择一项：\n1.敌装（1）→虚\n2.敌气（2）→虚",
        textKo: "【사용완료】당신의 개시 페이즈 시작시에 상대는 이하에서 하나를 고른다.\n ・상대 오라→더스트：1\n ・상대 플레어→더스트：2",
        textEn: "Devoted: At the beginning of your turn, your opponent chooses one:\n・Opponent's Aura (1)→ Shadow\n・Opponent's Flare (2)→ Shadow",
    },
    "14-honoka-o-n-2": {
        megami: "honoka",
        name: "桜吹雪",
        nameEn: "Petal Storm",
        nameZh: "樱吹雪",
        nameZhG1: "樱吹雪",
        nameKo: "벚꽃보라",
        ruby: "さくらふぶき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        damage: "2/1",
        text: "【攻撃後】相手は以下のどちらかを選ぶ。\n・間合→自オーラ：1\n・相オーラ→間合：1",
        textZh: "【攻击后】对手选择一项：\n●距→1→自装；\n●敌装→1→距。",
        textZhG1: "【攻击后】对手选择一项：\n1.距（1）→自装；\n2.敌装（1）→距。",
        textKo: "【공격후】상대는 이하에서 하나를 고른다.\n・간격→자신 오라：1\n・상대 오라→간격：1",
        textEn: "After Attack: Your opponent chooses one:\n・Distance (1)→ Your Aura\n・Opponent's Aura (1)→ Distance",
    },
};
// シーズン5
exports.S5_UPDATED_CARD_DATA = {
    "01-yurina-o-n-5": {
        megami: "yurina",
        name: "気迫",
        nameEn: "Vivacity",
        nameZh: "气魄",
        nameZhG1: "气迫",
        nameKo: "기백",
        ruby: "きはく",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "あなたは集中力を1得る。\nこのターンにあなたが次に行う他のメガミによる切札でない《攻撃》は対応不可（通常札）と距離拡大（近1）を得る。",
        textZh: "你获得1点集中力。\n本回合你的下一次其他女神的非王牌的《攻击》获得不可被对应（通常牌）和距离扩大（近1）。",
        textZhG1: "你获得1点集中力。\n本回合你的下一次其他女神的非王牌的《攻击》获得不可被对应（通常牌）和距离扩大（近1）。",
        textKo: "당신은 집중력을 1얻는다.\n이 턴에 당신이 다음에 하는 다른 여신의 비장패가 아닌 《공격》은 대응불가(통상패)와 거리 확대(근1)을 얻는다.",
        textEn: "Gain 1 Vigor.\n\nIncrease the Range of your next non-Special attack from a non-Yurina Megami this turn by 1 in the close direction, and it gains No Reactions (Normal).",
    },
    "01-yurina-o-s-2": {
        megami: "yurina",
        name: "浦波嵐",
        nameEn: "Uranami Storm",
        nameZh: "浦波岚",
        nameZhG1: "浦波岚",
        nameKo: "파도치는 폭풍우",
        ruby: "うらなみあらし",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "2/-",
        cost: "3",
        text: "終端\n【攻撃後】対応した《攻撃》は-2/+0となる。",
        textZh: "终端\n【攻击后】被对应的《攻击》得-2/+0。",
        textZhG1: "终端\n【攻击后】被对应的《攻击》获得-2/+0。",
        textKo: "종단\n【공격후】대응한 《공격》은 -2/+0이 된다.",
        textEn: "Terminal\n\nAfter Attack: The attack this card was played as a Reaction to gets -2/+0.",
    },
    "01-yurina-A1-s-2": {
        megami: "yurina",
        anotherID: "A1",
        replace: "01-yurina-o-s-2",
        name: "不完全浦波嵐",
        nameEn: "Imperfect Uranami Storm",
        nameZh: "不完全浦波岚",
        nameZhG1: "不完全浦波岚",
        nameKo: "물결치는 폭풍우",
        ruby: "ふかんぜんうらなみあらし",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "3/-",
        cost: "5",
        text: "終端\n【攻撃後】対応した《攻撃》は-3/+0となる。",
        textZh: "终端\n【攻击后】被对应的《攻击》得-3/+0。",
        textZhG1: "终端\n【攻击后】被对应的《攻击》获得-3/+0。",
        textKo: "종단\n【공격후】대응한 《공격》은 -3/+0이 된다.",
        textEn: "Terminal\n\nAfter Attack: The attack this card was played as a Reaction to gets -3/+0.",
    },
    "02-saine-o-n-5": {
        megami: "saine",
        name: "圏域",
        nameEn: "Space for Master",
        nameZh: "圈域",
        nameZhG1: "圈域",
        nameKo: "권역",
        ruby: "けんいき",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開中】この付与札の上の桜花結晶がダストへと送られるならば、それは代わりに間合へと移動する。\n【展開中】達人の間合は1大きくなる。",
        textZh: "【展开中】若此牌上的樱花结晶将被移至虚，则改为将其移至距。\n【展开中】达人距离的值增大1。",
        textZhG1: "【展开中】若此牌上的樱花结晶将被移至虚，则改为将其移至距。\n【展开中】达人距离的值增大1。",
        textKo: "【전개중】이 부여패 위에 있는 벚꽃 결정이 더스트로 움직일 때, 그 대신에 간격으로 이동한다.\n【전개중】달인의 간격이 1늘어난다.",
        textEn: "Ongoing: If a Sakura token would be moved from this card to Shadow, instead move it to Distance.\n\nOngoing: Increase the size of the Mastery Zone by 1.",
    },
    "03-himika-o-n-6": {
        megami: "himika",
        name: "バックドラフト",
        nameEn: "Backdraft",
        nameZh: "回燃",
        nameZhG1: "回燃",
        nameKo: "백 드래프트",
        ruby: "",
        rubyEn: "",
        rubyZh: "Backdraft",
        baseType: "normal",
        type: "action",
        text: "相手を畏縮させる。\n連火―このカードがこのターンに使用した3枚目以降のカードならば、このターンにあなたが次に行う他のメガミによるオーラへのダメージが「-」でない《攻撃》を+1/+1する。",
        textZh: "令对手畏缩。\n连火～若此牌是本回合你使用的第3张或更多的牌，则本回合你的下一次其他女神的对装伤害不为「-」的《攻击》得+1/+1。",
        textZhG1: "对手畏缩。\n连火～若本回合内你已使用至少2张牌，则本回合内你的其他女神的下一次对装伤害不为“-”的《攻击》获得+1/+1。",
        textKo: "상대를 위축시킨다。\n 연화-이 카드가 이 턴에 사용한 3장째 이후의 카드라면, 이 턴 당신이 다음에 행하는 다른 여신에 의한 오라 데미지가 「-」이 아닌 《공격》을 +1/+1 한다.",
        textEn: 'Flinch your opponent.\n\nInferno - If this is the third or later card you\'ve played this turn, your next attack this turn from a non-Himika Megami that does not have "-" Damage to Aura gains +1/+1.',
    },
    "05-oboro-A1-n-3": {
        megami: "oboro",
        anotherID: "A1",
        replace: "05-oboro-o-n-3",
        name: "不意打ち",
        nameEn: "Sneak Attack",
        nameZh: "突袭",
        nameZhG1: "突袭",
        nameKo: "기습",
        ruby: "ふいうち",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "1-3",
        damage: "4/3",
        text: "対応不可（通常札） \n【常時】この《攻撃》は-X/-Xとなる。Xは相手の伏せ札の枚数に等しい。",
        textZh: "不可被对应（通常牌）\n【常时】此《攻击》得-X/-X，X等于对手盖牌区中的牌张数。",
        textZhG1: "不可被对应（通常牌）\n【常时】此《攻击》获得-X/-X，X等于对手盖牌区中的牌张数。",
        textKo: "대응불가（통상패） \n【상시】이 《공격》은 -X/-X 가 된다. X는 상대 덮임패의 장수와 같다.",
        textEn: "No Reactions (Normal)\n\nForced: This attack gets -X/-X. X is the number of cards in your opponent's discard pile.",
    },
    "05-oboro-A1-s-4-ex1": {
        megami: "oboro",
        anotherID: "A1",
        name: "最後の結晶",
        nameEn: "The Final Petal",
        nameZh: "最后的结晶",
        nameZhG1: "最后的结晶",
        nameKo: "최후의 결정",
        ruby: "さいごのけっしょう",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "05-oboro-A1-s-4",
        type: "action",
        cost: "3",
        text: "【常時】このカードはこの効果でのみ使用できる。あなたが初めて敗北するならば、代わりにあなたのライフ全てをダストに送り、このカードを使用してもよい(消費は支払う)。 \n手札を1枚伏せ札にし、ダスト→自ライフ：1",
        textZh: "【常时】这张牌不能以正常方法使用。仅当你第一次将要输掉本局游戏时，作为失败的代替，可以改为将自命全部移至虚并使用此牌（仍需支付费用）。\n盖伏一张手牌，然后：虚→1→自命",
        textZhG1: "【常时】这张牌不能以正常方法使用。仅当你第一次将要输掉本局游戏时，作为失败的代替，可以将自命中的所有樱花结晶移至虚，并立即使用此牌（仍需支付费用）。\n盖伏1张手牌，虚（1）→自命",
        textKo: "【상시】이 카드는 이 효과로만 사용할 수 있다. 당신이 최초로 패배했다면, 대신에 당신의 모든 라이프를 더스트로 옮기고 이 카드를 사용해도 좋다(코스트는 지불한다).\n손패를 1장 덮임패로 하고,\n더스트→자신 라이프：1",
        textEn: "Forced: This card cannot be played except by this effect. When you would lose the game for the first time, instead you may move all Sakura tokens from your Life to Shadow and play this card (paying its cost).\n\nDiscard a card.\n\nShadow (1)→ Your Life",
    },
    "08-hagane-o-s-1": {
        megami: "hagane",
        name: "大天空クラッシュ",
        nameEn: "Grand Firmament Crash",
        nameZh: "大天空CRASH",
        nameZhG1: "大天空·破限",
        nameKo: "대천공 크래시",
        ruby: "だいてんくうクラッシュ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "0-10",
        damage: "X/Y",
        cost: "4",
        text: "超克 \n【常時】Xは現在の間合がターン開始時の間合からどれだけ変化しているかに等しい。YはXの半分（切り上げ）に等しい。",
        textZh: "超克 \n【常时】X为当前距离与本回合开始时距离之差的绝对值，Y为X的一半（向上取整）。",
        textZhG1: "超克 \n【常时】X为当前距离与本回合开始时距离之差的绝对值，Y为X的一半（向上取整）。",
        textKo: "초극 \n 【상시】X는 현재 간격이 턴 시작시의 간격에서 변화한 값과 같다. Y는 X의 절반(올림)과 같다.",
        textEn: "Overwhelm\n\nForced: X is the difference between the current Distance and the Distance at the beginning of this turn. Y is half of X, rounded up.",
    },
    "09-chikage-o-n-3": {
        megami: "chikage",
        name: "遁術",
        nameEn: "Concealment",
        nameZh: "遁术",
        nameZhG1: "遁术",
        nameKo: "둔갑술",
        ruby: "とんじゅつ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "1-3",
        damage: "1/-",
        text: "【攻撃後】自オーラ→間合：1　ダスト→間合：1 \n【攻撃後】このターン中、相手は基本動作《前進》を行えない。",
        textZh: "【攻击后】自装→1→距 虚→1→距\n【攻击后】本回合内对手不能执行基本动作《前进》。",
        textZhG1: "【攻击后】自装（1）→距，虚（1）→距\n【攻击后】本回合内对手不能执行基本动作《前进》。",
        textKo: "【공격후】자신 오라→간격：1　더스트→간격：1 \n【공격후】이 턴 동안, 상대는 기본 동작 《전진》을 할 수 없다.",
        textEn: "After Attack:\nYour Aura (1)→ Distance\nShadow (1)→ Distance\n\nAfter Attack: Your opponent cannot perform the Forward Movement basic action for the rest of the turn.",
    },
    "10-kururu-o-s-3": {
        megami: "kururu",
        name: "いんだすとりあ",
        nameEn: "Industria",
        nameZh: "工业量产",
        nameZhG1: "复自黏贴",
        nameKo: "인더스트리아",
        ruby: "",
        rubyEn: "",
        rubyZh: "Industria",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "このカードがあなたのカードで、カードが封印されていないならば、手札または捨て札から《付与》でないカードを1枚選び、このカードの下に表向きで封印してもよい。 \nあなたの追加札から「でゅーぷりぎあ」を山札の底に1枚置く(最大で合計3枚)。 \n----\n【即再起】あなたが山札を再構成する（再構成の後に未使用に戻る）。",
        textZh: "若此牌是你的牌且其下没有封印牌，则从你的手牌或弃牌中选择1张非《付与》的牌，封印在此牌下。\n从追加牌区中将1张『复制品齿轮』置于你的牌库底。\n----\n【即再起】你重铸牌库后。",
        textZhG1: "若此牌是你的牌且其下没有封印牌，则从你的手牌或弃牌中选择1张非《付与》的牌，封印在此牌下。（最多3张）\n从追加牌区中将1张『复制品齿轮』置于你的牌库底。\n----\n【即再起】你重铸牌库后。",
        textKo: "이 카드에 카드가 봉인되어 있지 않다면, 당신의 손패 또는 버림패에서 《부여》가 아닌 카드 한 장을 골라, 그 카드를 이 카드 밑에 앞면으로 봉인해도 좋다.\n 당신의 추가패에서 「듀플리기어」를 패산의 밑에 1장 둔다(최대 합계 3장). \n ----\n 【즉재기】당신이 패산을 재구성한다(재구성 후에 미사용으로 되돌린다).",
        textEn: 'If you own this card and no card is sealed under it, you may choose a non-Enhancement card in your hand or played pile and seal it under this card, face-up.\n\nPut one of your set aside "Dupligear" on the bottom of your deck.\n\nImmediate Resurgence: You reshuffle your deck. (Turn this card face-down after completing the reshuffle.)',
        sealable: true,
    },
    "12-raira-o-s-4": {
        megami: "raira",
        name: "円環輪廻旋",
        nameEn: "Death and Rebirth",
        nameZh: "圆环轮回旋",
        nameZhG1: "圆环轮回旋",
        nameKo: "원환륜회선",
        ruby: "えんかんりんかいせん",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "reaction",
        capacity: "3",
        cost: "2",
        text: "【展開中】相手の《攻撃》の解決後に以下を全て行ってもよい。\n・間合⇔ダスト：1\n・風神ゲージか雷神ゲージを1上げる。",
        textZh: "【展开中】对手的攻击结算完毕时，你可以选择最多两项：\n●距↔1↔虚\n●选择风神槽或雷神槽，其值增加1。",
        textZhG1: "【展开中】每当对手进行的《攻击》结算完毕时，你可以依次执行：\n距（1）⇔ 虚 \n选择风神槽或雷神槽，其值增加1。",
        textKo: "【전개중】상대의 《공격》 해결 후에 아래를 전부 처리해도 좋다.\n・간격⇔더스트：1\n・풍신 게이지 또는 뇌신 게이지를 1올린다.",
        textEn: "Ongoing: After one of your opponent's attacks resolves, perform neither or both:\n・Distance (1)⇔ Shadow\n・Increase your Wind or Thunder Gauge by 1.",
    },
    "13-utsuro-o-s-4": {
        megami: "utsuro",
        name: "魔食",
        nameEn: "Эрозия",
        nameZh: "魔食",
        nameZhG1: "魔食",
        nameKo: "마식",
        ruby: "エロージャ",
        rubyEn: "",
        rubyZh: "Эрозия",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "【使用済】あなたの開始フェイズの開始時に相手は以下のどちらかを選ぶ。\n・相オーラ→ダスト：1\n・相フレア→ダスト：2",
        textZh: "【使用后】每当你的准备阶段开始时，对手选择一项：\n●敌装→1→虚\n●敌气→2→虚",
        textZhG1: "【使用后】每当你的准备阶段开始时，对手选择一项：\n1.敌装（1）→虚\n2.敌气（2）→虚",
        textKo: "【사용완료】당신의 개시 페이즈 시작시에 상대는 이하에서 하나를 고른다.\n ・상대 오라→더스트：1\n ・상대 플레어→더스트：2",
        textEn: "Devoted: At the beginning of your turn, your opponent chooses one:\n・Opponent's Aura (1)→ Shadow\n・Opponent's Flare (2)→ Shadow",
    },
    "14-honoka-o-n-2": {
        megami: "honoka",
        name: "桜吹雪",
        nameEn: "Petal Storm",
        nameZh: "樱吹雪",
        nameZhG1: "樱吹雪",
        nameKo: "벚꽃보라",
        ruby: "さくらふぶき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        damage: "2/1",
        text: "【攻撃後】相手は以下のどちらかを選ぶ。\n・間合→自オーラ：1\n・相オーラ→間合：1",
        textZh: "【攻击后】对手选择一项：\n●距→1→自装；\n●敌装→1→距。",
        textZhG1: "【攻击后】对手选择一项：\n1.距（1）→自装；\n2.敌装（1）→距。",
        textKo: "【공격후】상대는 아래에서 하나를 고른다.\n・간격→자신 오라：1\n・상대 오라→간격：1",
        textEn: "After Attack: Your opponent chooses one:\n・Distance (1)→ Your Aura\n・Opponent's Aura (1)→ Distance",
    },
    "14-honoka-o-s-1-ex1": {
        megami: "honoka",
        name: "両手に華を",
        nameEn: "Flowers in Your Hands",
        nameZh: "樱结手弦",
        nameZhG1: "结樱于手",
        nameKo: "양손에 꽃을",
        ruby: "りょうてにはなを",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "14-honoka-o-s-1",
        exchangableTo: "14-honoka-o-s-1-ex2",
        type: "action",
        subType: "fullpower",
        cost: "0",
        text: "基本動作《纏い》を1回行う。\n【使用済】あなたの終了フェイズに基本動作《纏い》を1回行う。\n【使用済】開花―あなたが基本動作《纏い》を行うならば、代わりにダストまたはあなたのオーラからこのカードの上に桜花結晶1つを置いてもよい。その結果、5つになったならば、それらの桜花結晶をあなたのフレアへと移動させ、この「両手に華を」を追加札の「そして新たな幕開けを」に交換し、未使用に戻す。",
        textZh: "进行1次基本动作《装附》。\n【使用后】在你的结束阶段进行1次基本动作《装附》。\n【使用后】开花～当你进行基本动作《装附》的时候，可以改为从虚或者自装把1个樱花结晶移至此牌上。若因此放置了5个樱花结晶，则将它们移入自气，将这张『樱结手弦』与追加牌区的『旋即旌招幕展』交换，将『旋即旌招幕展』变为未使用状态。",
        textZhG1: "执行1次基本动作《装附》。（此次《装附》不会触发此牌的替代效果）\n【使用后】每当你的结束阶段开始时，执行1次基本动作《装附》。\n【使用后】开花～你可以将你的基本动作《装附》的效果改为将1个樱花结晶从虚或自装移至此牌上。若此牌上的樱花结晶的数目因此恰好变为5，则将它们移至自气，将这张『结樱于手』与追加牌中的『旋即旌招幕展』交换，将『旋即旌招幕展』变为未使用状态。",
        textKo: "기본 동작 《휘감기》를 1번 한다.\n【사용됨】당신의 종료 페이즈에 기본 동작 《휘감기》를 1번 한다.\n【사용됨】개화―당신이 기본 동작 《휘감기》를 한다면, 대신에 더스트 또는 당신의 오라에서 이 카드 위에 벚꽃 결정을 1개 올려도 좋다. 그 결과로 5개가 되었다면 이 카드 위의 벚꽃 결정을 전부 당신의 플레어로 이동시키고 이 「양손에 꽃을」을 추가패의 「그리고 새로운 개막을」으로 교환하고 미사용으로 되돌린다.",
        textEn: 'Perform a Recover basic action.\n\nDevoted: At the end of your turn, perform a Recover basic action.\n\nDevoted: Bloom - Whenever you would perform a Recover basic action, you may instead move a Sakura token from Shadow or your Aura to this card. Then if there are exactly 5 Sakura tokens on this card, move them all to your Flare, exchange this card with your set aside "And So Begins the Rising of a New Curtain", and turn that card face-down.',
    },
    "16-yatsuha-o-n-1": {
        megami: "yatsuha",
        name: "星の爪",
        nameEn: "Astral Claw",
        nameZh: "星之爪",
        nameZhG1: "星之爪",
        nameKo: "별의 손톱",
        ruby: "ほしのつめ",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-1-ex1",
        type: "attack",
        range: "3-4",
        damage: "3/2",
        text: "対応不可（通常札）\n【攻撃後】自オーラ→相フレア：1",
        textZh: "不可被对应（通常牌）\n【攻击后】自装→1→敌气",
        textZhG1: "不可被对应（通常牌）\n【攻击后】自装（1）→敌气",
        textKo: "대응불가(통상패)\n【공격후】자신 오라→상대 플레어：1 ",
        textEn: "No Reactions (Normal)\n\nAfter Attack: Your Aura (1)→ Opponent's Flare",
    },
    "16-yatsuha-o-n-2": {
        megami: "yatsuha",
        name: "昏い咢",
        nameEn: "Grim Edict",
        nameZh: "昏之颚",
        nameZhG1: "暗之颚",
        nameKo: "황혼의 칼날",
        ruby: "くらいあぎと",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "16-yatsuha-A1-n-2-ex1",
        type: "attack",
        range: "4",
        damage: "3/1",
        text: "対応不可（通常札）\n【常時】この《攻撃》は+0/+Xとなる。Xは鏡映数に等しい。\n【攻撃後】あなたは畏縮する。",
        textZh: "不可被对应（通常牌）\n【常时】此攻击得+0/+X。X等于镜映数。\n【攻击后】令你畏缩。",
        textZhG1: "不可被对应（通常牌）\n【常时】此《攻击》获得+0/+X。X等于镜映数。\n【攻击后】你畏缩。",
        textKo: "대응불가(통상패)\n【상시】이 《공격》은 +0/+X된다. X는 거울 수에 해당된다.\n【공격후】당신은 위축된다.",
        textEn: "No Reactions (Normal)\n\nForced: This attack gains +0/+X, where X is the number of Reflections.\n\nAfter Attack: Flinch yourself.",
    },
    "06-yukihi-A1-n-2": {
        megami: "yukihi",
        anotherID: "A1",
        replace: "06-yukihi-o-n-2",
        name: "ちからぞえ / おどしつけ",
        nameEn: "Cooperate / Coerce",
        nameZh: "援助 / 威胁",
        nameZhG1: "援助/舞踏",
        nameKo: "조력/위협",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        rangeOpened: "1-2",
        damage: "2/1",
        damageOpened: "1/2",
        text: "【常時】あなたの付与札に合計4つ以上の桜花結晶があるならば、この《攻撃》は+0/+1となる。",
        textZh: "【常时】你的付与区总共有4个或者更多樱花结晶的话，此《攻击》得+0/+1。",
        textZhG1: "【常时】若你展开中的付与牌上樱花结晶的数目之和大于等于4，则此攻击获得+0/+1。",
        textKo: "【상시】당신의 부여패에 합계 4개 이상의 벚꽃 결정이 있다면, 이 《공격》은 +0/+1된다.",
        textEn: " Forced: If there are 4 or more Sakura tokens on your Enhancements in play, this attack gains +0/+1.",
        textOpened: "【常時】あなたの付与札に合計4つ以上の桜花結晶があるならば、この《攻撃》は+1/+0となる。",
        textOpenedZh: "【常时】你的付与区总共有4个或者更多樱花结晶的话，此《攻击》得+1/+0。",
        textOpenedZhG1: "【常时】若你展开中的付与牌上樱花结晶的数目之和大于等于4，则此攻击获得+1/+0。",
        textOpenedKo: "【상시】당신의 부여패에 합계 4개 이상의 벚꽃 결정이 있다면, 이 《공격》은 +1/+0된다.",
        textOpenedEn: "Forced: If there are 4 or more Sakura tokens on your Enhancements in play, this attack gains +1/+0.",
    },
    "06-yukihi-A1-n-4": {
        megami: "yukihi",
        anotherID: "A1",
        replace: "06-yukihi-o-n-4",
        name: "よこいと / たていと",
        nameEn: "Weft / Warp",
        nameZh: "纬线 / 经线",
        nameZhG1: "纬丝/经纱",
        nameKo: "씨실/날실",
        ruby: "",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-8",
        rangeOpened: "0-4",
        damage: "1/1",
        damageOpened: "0/0",
        text: "【攻撃後】このターンにあなたが次に行う他のメガミによる《攻撃》は距離拡大（遠1）と距離拡大（近1）を得る。このカードを山札の底に置く。",
        textZh: "【攻击后】本回合你的下一次其他女神的《攻击》获得距离扩大（远1）和距离扩大（近1）。将此牌置于牌库底。",
        textZhG1: "【攻击后】本回合内你的下一次其他女武神的攻击获得距离扩大（近1、远1）。将此牌置于你的牌库底。",
        textKo: "【공격후】이 턴에 당신이 다음에 하는 다른 여신의 《공격》은 거리 확대（원1）와 거리 확대（근1）을 얻는다. 이 카드를 패산 아래에 둔다.",
        textEn: "After Attack: Increase the Range of the next attack from a non-Yukihi Megami that you make this turn by 1 in both the close and distant directions. Put this card on the bottom of your deck.",
        textOpened: "【攻撃後】このターン中にあなたが他のカードを使用していないならば、あなたの捨て札にある他のメガミの《全力》でないカード1枚を使用する。",
        textOpenedZh: "【攻击后】本回合中若你没有用过其他牌，则从你的弃牌中使用一张其他女神的非《全力》的牌。",
        textOpenedZhG1: "【攻击后】若本回合内你没有使用过其他女神的牌，则你可以从弃牌区中使用1张其他女神的不具《全力》副类别的牌。",
        textOpenedKo: "【공격후】이 턴 동안 당신이 다른 카드를 사용하지 않았다면, 당신의 버림패에 있는 다른 여신의 《전력》이 아닌 카드를 1장 사용한다.",
        textOpenedEn: "After Attack: If this is the first card you've played this turn, choose a non-Throughout card from a non-Yukihi Megami in your played pile and play it.",
    },
    "06-yukihi-A1-s-2": {
        megami: "yukihi",
        anotherID: "A1",
        replace: "06-yukihi-o-s-2",
        name: "ひらりおり",
        nameEn: "Graceful Weave",
        nameZh: "轻灵如织",
        nameZhG1: "翩然如织",
        nameKo: "살랑이는 옷깃",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "1",
        cost: "4",
        text: "【展開中】あなたが他のメガミの通常札をあなたの各ターンに初めて使用した時、その解決後にあなたは集中力を1得て、ダストからこのカードの上に桜花結晶を3つ置いてもよい。",
        textZh: "【展开中】你的每个回合中第一次使用你的其他女神的通常牌的时候，在结算后你获得1点集中力，从虚中把3个樱花结晶移至此牌上。",
        textZhG1: "【展开中】你的回合内，每当你第一次使用的其他女神的通常牌时，该牌结算完毕后你可以获得1点集中力，并将虚中的3个樱花结晶移至此牌上。",
        textKo: "【전개중】당신이 다른 여신의 통상패를 당신의 각 턴에 처음 사용할 때, 그것을 해결하고 당신은 집중력을 1얻고 더스트에서 이 카드 위에 벚꽃 결정을 3개 올려도 좋다.",
        textEn: "Ongoing: The first time you play a card from a non-Yukihi Megami on each of your turns, after it resolves, you may gain 1 Vigor and move 3 Sakura tokens from Shadow to this card.",
        textOpened: "【展開中】あなたの開始フェイズの開始時に攻撃「適正距離0-5、2/2」を行う。",
        textOpenedZh: "【展开中】每当你的准备阶段开始时，进行一次“攻击距离0-5 伤害2/2”的攻击。",
        textOpenedZhG1: "【展开中】每当你的准备阶段开始时，进行一次“攻击距离0-5 伤害2/2”的攻击。",
        textOpenedKo: "【전개중】당신의 개시 페이즈의 개시 시에 공격 「적정 거리0-5, 2/2」를 한다.",
        textOpenedEn: 'Ongoing: At the beginning of your turn, you attack with "Range: 0-5, Damage: 2/2".',
    },
    "11-thallya-A1-n-5": {
        megami: "thallya",
        anotherID: "A1",
        replace: "11-thallya-o-n-5",
        name: "Quick Change",
        nameEn: "Quick Change",
        nameZh: "Quick Change",
        nameZhG1: "Quick Change",
        nameKo: "Quick Change",
        ruby: "クイックチェンジ",
        rubyEn: "",
        rubyZh: "快速变换",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開時】あなたの燃焼済の造花結晶を1つ回復する。その後、追加札にあるTransFormカードを1枚選び、このカードの下に封印する（変形時効果は解決されない）。\n【展開中】このカードに封印されたカードの追加基本動作、常時を有効にする。\n【破棄時】このカードに封印されたカードを追加札に戻す。",
        textZh: "【展开时】回复你的1个已燃烧的造花结晶。之后，从追加牌处选择1张TransForm牌，封印在此牌下（变形时效果不结算）。\n【展开中】此牌下封印的牌的追加基本动作和常时将起效。\n【破弃时】将此牌下封印的牌移回追加牌处。",
        textZhG1: "【展开时】回复1个处于燃尽状态的造花结晶。然后从追加牌中选择1张变形牌，封印于此牌下（不结算变形时效果）。\n【展开中】此牌所封印的牌的追加基本动作与常时效果生效。\n【破弃时】将此牌所封印的牌移至追加牌。",
        textKo: "【전개시】당신의 연소 완료된 조화결정을 1개 회복한다.\n그 후, 추가패에 있는 TransForm 카드를 1장 골라 이 카드 아래에 봉인한다\n(변형시 효과는 해결하지 않는다).\n【전개중】이 카드에 봉인된 카드의 추가기본동작, 상시 효과를 유효화 한다.\n【파기시】이 카드에 봉인된 카드를 추가패로 되돌린다.",
        textEn: "Initialize: Recover 1 burned Artificial Sakura token. Then, choose one of your set aside TransForm cards and seal it under this card. (Do not resolve its TransForm effect.)\n\nOngoing: The Forced and Additional basic action effects of the sealed card are active.\n\nDisenchant: Return the sealed card to your set aside cards.",
        sealable: true,
    },
    "11-thallya-A1-s-1": {
        megami: "thallya",
        anotherID: "A1",
        replace: "11-thallya-o-s-1",
        name: "BlackBox NEO",
        nameEn: "BlackBox NEO",
        nameZh: "BlackBox NEO",
        nameZhG1: "BlackBox NEO",
        nameKo: "BlackBox NEO",
        ruby: "ブラックボックスネオ",
        rubyEn: "",
        rubyZh: "新型黑箱",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "終端\nあなたの燃焼済の造花結晶を1つ回復する。その後、あなたのマシンが燃焼済の造花結晶を持たないならば、このカードの上にダストから桜花結晶を1つ置く。2つになったらこのカードの上の桜花結晶をダストに送るとともに、あなたのマシンはTransFormする。\n----\n【再起】あなたのマシンにある造花結晶が3個以下である。または、このターンにあなたのマシンがTransFormしている。",
        textZh: "终端\n回复你的1个已燃烧的造花结晶。之后，若你的引擎里没有已燃烧的造花结晶，从虚中把1个樱花结晶移至此牌上。达到2个后，则再将其上所有樱花结晶移至虚，你进行TransForm。\n----\n【再起】你的引擎里的造花结晶数小于等于3个；或者你在这个回合里进行了TransForm。",
        textZhG1: "终端\n回复1个处于燃尽状态的造花结晶。然后若你处于燃尽状态的造花结晶的数目等于0，则将1个樱花结晶从虚移至此牌上。若此牌上的樱花结晶的数目变为2，则将它们移至虚，然后TRANSFORM你的引擎。\n----\n【再起】你的引擎中造花结晶的数目小于等于3。或者本回合内你的引擎进行了TRANSFORM。",
        textKo: "종단\n당신의 연소된 조화 결정을 1개 회복한다. 그 다음 당신의 머신에 연소된 벚꽃 결정이 없다면 이 카드 위에 더스트에서 벚꽃 결정을 1개 올린다. 2개가 되었다면 이 카드 위의 벚꽃 결정을 더스트로 보내는 것과 함께 당신의 머신은 TransForm한다.\n----\n【재기】당신의 머신에 있는 조화 결정이 3개이하다. 또는 이 턴에 당신의 머신이 TransForm했다.",
        textEn: "Terminal\n\nRecover 1 burned Artificial Sakura token. Then, if you have no burned Artificial Sakura tokens, move 1 Sakura token from Shadow to this card. If there are 2 Sakura tokens on this card, move them all to Shadow and TransForm your machine.\n\nResurgence: There are 3 or fewer Artificial Sakura tokens on your machine, or your machine TransFormed this turn.",
    },
    "11-thallya-A1-s-2": {
        megami: "thallya",
        anotherID: "A1",
        replace: "11-thallya-o-s-2",
        name: "OMNIS-Blaster",
        nameEn: "OMNIS-Blaster",
        nameZh: "OMNIS-Blaster",
        nameZhG1: "OMNIS-Blaster",
        nameKo: "OMNIS-Blaster",
        ruby: "オムニスブラスター",
        rubyEn: "",
        rubyZh: "光炮齐射",
        baseType: "special",
        type: "attack",
        range: "3-10",
        damage: "X/X",
        cost: "X",
        text: "【常時】XはあなたのマシンがこのゲームでTransFormした回数に等しい。",
        textZh: "【常时】X的值等于你在这场游戏里进行TransForm的次数。",
        textZhG1: "【常时】X等于本局游戏中你的引擎进行TRANSFORM的次数。",
        textKo: "【상시】X는 당신의 머신이 이 게임에서 TransForm한 회수와 같다.",
        textEn: "Forced: X is equal the number of times your machine has TransFormed this game.",
    },
    "transform-A1-01": {
        megami: "thallya",
        anotherID: "A1",
        replace: "transform-01",
        name: "Form: KINNARI",
        nameEn: "Form: KINNARI",
        nameZh: "Form: KINNARI",
        nameZhG1: "紧那罗形态",
        nameKo: "Form: KINNARI",
        ruby: "フォルム:キンナリー",
        rubyEn: "",
        rubyZh: "紧那罗形态",
        baseType: "transform",
        type: undefined,
        text: "【変形時】相手は山札をすべて伏せ札にする。\n----\n【常時：Zeta-Voice】\n相手が山札を再構成したとき、その解決後に攻撃「適正距離2, 4, 6、2/2」を行ってもよい。",
        textZh: "【变形时】对手将其牌库全部盖伏。\n----\n【常时：Zeta-Voice】\n对手牌库再构成时，在其结算后你可以进行一次“攻击距离2,4,6 伤害2/2”的攻击。",
        textZhG1: "【变形时】盖伏对手的牌库。\n----\n【常时】Zeta-Voice：对手重铸牌库后，你可以进行一次“攻击距离2,4,6 伤害2/2”的攻击。",
        textKo: "【변형시】상대는 패산을 전부 덮임패로 한다.\n----\n【상시：Zeta-Voice】\n상대가 패산을 재구성할 때마다 그 해결 후에 공격 「적정 거리 2, 4, 6, 2/2」을 해도 좋다.",
        textEn: 'TransForm: Discard your opponent\'s hand.\n----\nForced ("Zeta-Voice"): After your opponent reshuffles their deck, you attack with "Range: 2, 4, 6, Damage: 2/2".',
    },
    "transform-A1-03": {
        megami: "thallya",
        anotherID: "A1",
        replace: "transform-03",
        name: "Form: ASURA",
        nameEn: "Form: ASURA",
        nameZh: "Form: ASURA",
        nameZhG1: "阿修罗形态",
        nameKo: "Form: ASURA",
        ruby: "フォルム:アスラ",
        rubyEn: "",
        rubyZh: "阿修罗形态",
        baseType: "transform",
        type: undefined,
        text: "【変形時】相手は手札を1枚捨て札にし、相手の山札の上から1枚を捨て札にする。\n----\n【追加基本動作：Sigma-Drive】\n攻撃『適正距離1, 3, 5、3/2　【攻撃後】あなたは畏縮する。』を行う。\nこの基本動作は1ターンに1回だけ行える。",
        textZh: "【变形时】对手弃一张手牌，对手弃掉其牌库顶牌。\n----\n【追加基本动作：Sigma-Drive】\n进行一次“攻击距离1,3,5 伤害3/2 【攻击后】令你畏缩。”的攻击。\n这个基本动作一回合只能进行一次。",
        textZhG1: "【变形时】对手弃置1张手牌和牌库顶的1张牌。\n----\n【追加基本动作】Sigma-Drive：进行一次“攻击距离1,3,5 伤害3/2 【攻击后】你畏缩”的攻击。此基本动作每回合至多执行一次。",
        textKo: "【변형시】상대는 손패를 1장 버림패로 하고, 상대의 패산 위에서 1장을 버림패로 한다.\n----\n【추가 기본 동작：Sigma-Drive】\n공격 『적정 거리 1, 3, 5, 3/2　【공격후】당신은 위축한다.』를 한다.\n이 기본 동작은 1턴에 1번만 할 수 있다.",
        textEn: 'TransForm: Your opponent puts a card from their hand, and the top card of their deck, into their played pile.\n----\nAdditional basic action ("Sigma-Drive"): You attack with "Range: 1, 3, 5, Damage: 3/2, After Attack: Flinch yourself." This action can only be performed once a turn.',
    },
    "transform-A1-04": {
        megami: "thallya",
        anotherID: "A1",
        replace: "",
        name: "Form: DEVA",
        nameEn: "Form: DEVA",
        nameZh: "Form: DEVA",
        nameZhG1: "缇婆形态",
        nameKo: "Form: DEVA",
        ruby: "フォルム:デーヴァ",
        rubyEn: "",
        rubyZh: "天神形态",
        baseType: "transform",
        type: undefined,
        text: "【変形時】あなたの燃焼済の造花結晶を2つ回復し、基本動作《纏い》を2回行う。\n----\n【常時：Phi-Cycle】\n相手の捨て札の枚数が0でない2の倍数になるたびに、あなたは集中力を1得る。",
        textZh: "【变形时】回复你的2个已燃烧的造花结晶，进行2次基本动作《装附》。\n----\n【常时：Phi-Cycle】\n对手的弃牌数变成0以外的2的倍数的时候，你获得1点集中力。",
        textZhG1: "【变形时】回复2个处于燃尽状态的造花结晶。执行2次基本动作《装附》。\n----\n【常时】Phi-Cycle：对手的弃牌张数变为除0以外的偶数时，你获得1点集中力。",
        textKo: "【변형시】당신의 연소된 조화 결정을 2개 회복하고 기본 동작 《휘감기》를 2번 한다.\n----\n【상시：Phi-Cycle】\n상대의 버림패의 수가 0이 아닌 2의 배수가 될 때마다 당신은 집중력을 1얻는다.",
        textEn: 'TransForm: Recover 2 burned Artificial Sakura tokens. Perform 2 Recover basic actions.\n----\nForced ("Phi-Cycle"): Whenever the number of your cards in your opponent\'s played pile becomes an even number other than 0, gain 1 Vigor.',
    },
    "12-raira-a1-n-2": {
        megami: "raira",
        anotherID: "A1",
        replace: "12-raira-o-n-2",
        name: "暴風",
        nameEn: "Gale Winds",
        nameZh: "暴风",
        nameZhG1: "暴风",
        nameKo: "폭풍",
        ruby: "ぼうふう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-4",
        damage: "2/1",
        text: "【攻撃後】風神ゲージを1上げる。その後、嵐の力を1回使用してもよい。",
        textZh: "【攻击后】风神槽的值增加1。然后，你可以使用一次风暴之力。",
        textZhG1: "【攻击后】风神槽的值增加1。然后你可以使用1次岚之力。",
        textKo: "【공격후】풍신 게이지를 1올린다. 그 후에 태풍의 힘을 1번 사용해도 좋다.",
        textEn: "After Attack: Increase your Wind Gauge by 1, then you may harness the storm once.",
    },
    "12-raira-a1-n-6": {
        megami: "raira",
        anotherID: "A1",
        replace: "12-raira-o-n-6",
        name: "大嵐",
        nameEn: "Tempest",
        nameZh: "大风暴",
        nameZhG1: "大风暴",
        nameKo: "대폭풍",
        ruby: "おおあらし",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "fullpower",
        capacity: "0",
        text: "【展開時】以下を3回選ぶ。同じものを複数回選んでもよい。\n・風神ゲージか雷神ゲージを１上げる。\n・このカードの上にダストから桜花結晶を1つ置く。\n【展開中】あなたと相手の終了フェイズに攻撃『適正距離0-4、1/1、対応不可』を行う。\n【展開中】各ターンにおける相手の最初の《攻撃》は+0/-1となる。",
        textZh: "【展开时】选择以下选项3次，且同样的选项可以重复选择：\n●选择风神槽或雷神槽，其值增加1。\n●从虚中把1个樱花结晶移至此牌上。\n【展开中】在你和对手的结束阶段，进行一次“攻击距离0-4 伤害1/1 不可被对应”的攻击。\n【展开中】每个回合里对手的第一次《攻击》得+0/-1。",
        textZhG1: "【展开时】选择3次。你可以多次选择同一个选项。\n1.选择风神槽或雷神槽，其值增加1；\n2..将1个樱花结晶从虚移至此牌上。\n【展开中】每当你和对手的结束阶段开始时，进行一次“攻击距离0-4 伤害1/1 不可被对应”的攻击。\n【展开中】每回合内对手进行的第一次《攻击》获得+0/-1。",
        textKo: "【전개시】아래를 3번 고른다. 같은 것을 여러 선택해도 좋다.\n・풍신 게이지 또는 뇌신 게이지를 1올린다.\n・이 카드 위에 더스트에서 벚꽃 결정을 1개 올린다.\n【전개중】당신과 상대의 종료 페이즈에 공격 『적정 거리0-4, 1/1, 대응불가』를 한다.\\n【전개중】각 턴마다 상대의 최초의 《공격》은 +0/-1된다.",
        textEn: 'Initialize: Choose three. You may choose the same option more than once:\n・Increase your Wind or Thunder Gauge by 1.\n・Move a Sakura token from Shadow to this card.\n\nOngoing: At the end of each turn, you attack with "Range: 0-4, Damage: 1/1, No Reactions".\n\nOngoing: The first attack your opponent makes each turn gets +0/-1.',
    },
    "12-raira-a1-s-3": {
        megami: "raira",
        anotherID: "A1",
        replace: "12-raira-o-s-3",
        name: "陣風祭天儀",
        nameEn: "Liturgy of the Storm",
        nameZh: "阵风祭天仪",
        nameZhG1: "阵风祭天式",
        nameKo: "진풍제천의",
        ruby: "じんぷうさいてんぎ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "風神ゲージと雷神ゲージを1ずつ上げ、相手を畏縮させる。\n【使用済】あなたが使用したカードは帯電しない。\n【使用済】あなたのメインフェイズの開始時に、あなたが標準行動を選択したならば、嵐の力を2回まで使用してもよい。ただし、同じ力は選べない。",
        textZh: "风神槽和雷神槽的值各增加1，令对手畏缩。\n【使用后】你使用的牌不会带电（无法增长风雷槽）。\n【使用后】你的行动阶段开始时，如果你选择进行标准行动，则你可以进行最多两次风暴之力，但是不能重复选择同一个。",
        textZhG1: "风神槽和雷神槽各增加1，对手畏缩。\n【使用后】你使用的牌不会带电。\n【使用后】每当你的主要阶段开始时，若你选择执行标准行动，则你可以使用至多2次岚之力，但不能使用同一种岚之力2次。",
        textKo: "풍신 게이지와 뇌신 게이지를 1개씩 올리고 상대를 위축시킨다.\n【사용됨】당신이 사용한 카드는 대전되지 않는다.\n【사용됨】당신의 페인 페이즈 개시 시에 당신이 표준 행동을 선택했다면, 태풍의 힘을 2번까지 사용해도 좋다. 하지만 같은 힘은 선택할 수 없다.",
        textEn: "Increase your Wind and Thunder Gauges by 1 each. Flinch your opponent.\n\nDevoted: Your played cards do not become electrified.\n\nDevoted: At the beginning of your main phase, if you chose to perform normal (non-Throughout) actions, you may harness the storm up to two times. You may not choose the same ability twice this way.",
    },
    "12-raira-storm": {
        megami: "raira",
        anotherID: "A1",
        name: "【嵐の力】",
        nameEn: "[Storm]",
        nameZh: "【风暴之力】",
        nameZhG1: "【岚之力】",
        nameKo: "【폭풍의 힘】",
        ruby: "",
        rubyEn: "",
        baseType: "storm",
        type: undefined,
        text: "【風1】間合⇔ダスト：1\n【風2】あなたは集中力を1得て、相手は集中力を1失う。\n【風3】カードを1枚引く。\n----\n【雷1】このターンにあなたが次に行う《攻撃》は+1/+0となる。\n【雷2】このターンにあなたが次に行うオーラへのダメージが「-」でない《攻撃》は+0/+1となる。\n【雷3】攻撃『適正距離0-4、2/2』を行う。",
        textZh: "<风1>距↔1↔虚\n<风2>你获得1点集中力，对手失去1点集中力。\n<风3>抓1张牌。\n\n<雷1>本回合你的下次《攻击》得+1/+0。\n<雷2>本回合你的下次对装伤害不为「-」的《攻击》得+0/+1。\n<雷3>进行一次“攻击距离0-4、伤害2/2”的攻击。",
        textZhG1: "风1：距（1）⇔虚\n风2：你获得1点集中力，对手失去1点集中力。\n风3：抽1张牌。\n雷1：本回合内你进行的下一次《攻击》得+1/+0。\n雷2：本回合内你进行的下一次对装的伤害不是“-”的攻击得+0/+1。\n雷3：进行一次“攻击距离0-4 伤害2/2”的攻击。",
        textKo: "【풍1】간격⇔더스트：1\n【풍2】당신은 집중력을 1얻고 상대는 집중력을 1잃는다.\n【풍3】카드를 1장 뽑는다.\n----\n【뇌1】이 턴에 당신이 다음에 하는 《공격》은 +1/+0된다.\n【뇌2】이 턴에 당신이 다음에 하는 오라 데미지가 「-」이 아닌 《공격》은 +0/+1된다.\n【뇌3】공격 『적정 거리0-4, 2/2』를 한다.",
        textEn: '(When you harness the storm, choose an ability from this list. Decrease its corresponding Gauge by the appropriate amount to get its effect.)\n\nWind 1: Shadow (1)⇔ Distance\nWind 2: Gain 1 Vigor. Your opponent loses 1 Vigor.\nWind 3: Draw a card.\n\nThunder 1: The next attack you make this turn gains +1/+0.\nThunder 2: The next attack you make this turn that doesn\'t have "-" Damage to Aura gains +0/+1.\nThunder 3: You attack with "Range: 0-4, Damage: 2/2".',
    },
    "17-hatsumi-o-n-1": {
        megami: "hatsumi",
        name: "水雷球",
        nameEn: "Torpedo",
        nameZh: "水雷球",
        nameZhG1: "水雷球",
        nameKo: "수뢰구",
        ruby: "すいらいきゅう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        damage: "0/0",
        text: "【常時】順風ならば、この《攻撃》は+2/+2となる。\n【攻撃後】逆風ならば、間合⇔ダスト：2 ",
        textZh: "【常时】若顺风，此《攻击》得+2/+2。\n【攻击后】若逆风，则：距↔2↔虚",
        textZhG1: "【常时】若你处于顺风状态，则此《攻击》得+2/+2。\n【攻击后】若你处于逆风状态，则距（2） ⇔ 虚",
        textKo: "【상시】순풍이라면, 이 《공격》은 +2/+2된다.\n【공격후】역풍이라면, 간격⇔더스트：2 ",
        textEn: "Forced: If there is a tailwind, this attack gains +2/+2.\n\nAfter Attack: If there is a headwind, Distance (2)⇔ Shadow.",
    },
    "17-hatsumi-o-n-2": {
        megami: "hatsumi",
        name: "水流",
        nameEn: "Torrent",
        nameZh: "水流",
        nameZhG1: "水流",
        nameKo: "수류",
        ruby: "すいりゅう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "2/1",
        text: "【常時】順風ならば、この《攻撃》は+1/+1となる。\n全力化：【常時】この《攻撃》は対応不可（通常札）を得るとともに、そのダメージにより移動する桜花結晶はダストやフレアでなく間合に動かす。",
        textZh: "【常时】若顺风，此《攻击》得+1/+1。\n全力化：【常时】此《攻击》得不可被对应（通常牌），且因此《攻击》造成的伤害将移动的樱花结晶改为移动至距。",
        textZhG1: "【常时】若你处于顺风状态，则此《攻击》获得+1/+1。\n全力化（主要阶段，若你选择执行全力行动，则你可以如使用《全力》牌一样使用此牌。若如此做，则此牌额外获得以下效果）：【常时】此《攻击》获得不可被对应（通常牌），若此《攻击》对对手造成了伤害，则不将因结算伤害移动的樱花结晶移至气或虚，而改为移至距。",
        textKo: "【상시】순풍이라면, 이 《공격》은 +1/+1된다.\n전력화：【상시】이 《공격》은 대응불가(통상패)를 얻고, 이 데미지에 의해서 이동하는 벚꽃 결정은 더스트나 플레어가 아닌 간격으로 옮겨진다.",
        textEn: 'Forced: If there is a tailwind, this attack gains +1/+1.\n\nAll-Out - Forced: This attack gains "No Reactions (Normal)". Damage dealt by this attack moves Sakura tokens to Distance instead of to Shadow or to Flare.',
    },
    "17-hatsumi-o-n-3": {
        megami: "hatsumi",
        name: "強酸",
        nameEn: "Acid Spray",
        nameZh: "强酸",
        nameZhG1: "强酸",
        nameKo: "강산",
        ruby: "きょうさん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "5-6",
        damage: "3/1",
        text: "【常時】逆風ならば、この《攻撃》のライフへのダメージにより移動する桜花結晶はフレアでなくダストに動かす。",
        textZh: "【常时】若逆风，因此《攻击》造成的对命伤害将移动的樱花结晶改为移动至虚。",
        textZhG1: "【常时】若你处于逆风状态，且此《攻击》对敌命造成了伤害，则不将因结算伤害移动的樱花结晶移至气，而改为移至虚。",
        textKo: "【상시】역풍이라면, 이 《공격》의 라이프에 대한 데미지에 의해서 이동하는 벚꽃 결정은 플레어가 아닌 더스트로 옮겨진다.",
        textEn: "Forced: If there is a headwind, damage dealt by this attack to Life moves Sakura tokens to Shadow instead of to Flare.",
    },
    "17-hatsumi-o-n-4": {
        megami: "hatsumi",
        name: "海嘯",
        nameEn: "Tsunami",
        nameZh: "海啸",
        nameZhG1: "海啸",
        nameKo: "해일",
        ruby: "かいしょう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "現在の間合が4以下ならば、ダスト→間合：1\n逆風ならば、この矢印効果の左側を相手のフレアに変更する。",
        textZh: "现在的距离小于等于4的话：虚→1→距\n若逆风，箭头的左边变为敌气（而不是虚）。",
        textZhG1: "若当前距离小于等于4，则虚（1）→距。\n【常时】若你处于逆风状态，则此箭头效果左侧的区域改为敌气。",
        textKo: "현재의 간격이 4이하라면, 더스트→간격：1\n역풍이라면, 이 화살표의 왼쪽을 상대의 플레어로 변경한다.",
        textEn: "If the current Distance is 4 or less:\nShadow (1)→ Distance\n\nIf there is a headwind, the left side of this arrow effect is your opponent's Flare instead.",
    },
    "17-hatsumi-o-n-5": {
        megami: "hatsumi",
        name: "準備万端",
        nameEn: "Batten Down",
        nameZh: "万事俱备",
        nameZhG1: "准备万全",
        nameKo: "준비만전",
        ruby: "じゅんびばんたん",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "ダスト→自オーラ：3\nあなたは手札を1枚選び、それを山札の一番上に置いてもよい。",
        textZh: "虚→3→自装\n你将一张手牌置于牌库顶。",
        textZhG1: "虚（3）→自装\n你可以从手牌中选择1张牌，将其置于你的牌库顶。",
        textKo: "더스트→자신 오라：3\n당신은 손패를 1장 고르고, 그것을 패산 가장 위에 올려두어도 좋다.",
        textEn: "Shadow (3)→ Your Aura\n\nYou may choose a card in your hand and put it on top of your deck.",
    },
    "17-hatsumi-o-n-6": {
        megami: "hatsumi",
        name: "羅針盤",
        nameEn: "Compass",
        nameZh: "罗盘",
        nameZhG1: "罗盘",
        nameKo: "나침반",
        ruby: "らしんばん",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開中】あなたの《攻撃》に適正距離5を追加し、相手の《攻撃》から適正距離5を取り除く。この効果が重複したら相殺する。\n（距離拡大、距離縮小より先に適用する）\n【破棄時】ダスト→自オーラ：1",
        textAdditional: "（「この効果が重複したら相殺する」：この類のテキストを持つ効果のうち、同様のものが複数有効になっているならば、それらすべての効果は失われる。）",
        textZh: "【展开中】你的《攻击》追加攻击距离5，对手的《攻击》移除攻击距离5。此效果重复时互相抵消。\n（比距离扩大、距离缩小的计算要优先）\n【破弃时】虚→1→自装",
        textZhG1: "【展开中】你的《攻击》额外获得攻击距离5，对手的《攻击》失去攻击距离5。若游戏中存在多个此效果，则此效果相互抵消。（此效果先于距离扩大与距离缩小结算）\n【破弃时】虚（1）→自装",
        textKo: "【전개중】당신의 《공격》에 적정 거리5를 추가하고, 상대의 《공격》에서 적정 거리5를 제거한다. 이 효과는 중첩되면 상쇄된다.\n（거리 확대, 거리 축소보다 먼저 적용된다）\n【파기시】더스트→자신 오라：1",
        textEn: "Your attacks gain Range: 5 (in addition to their normal Range). Your opponent's attacks lose Range: 5. If there are multiple copies of this effect in play, they cancel each other out.\n(This additional Range is added or removed before other effects that increase or decrease Range are applied.)\n\nDisenchant: Shadow (1)→ Your Aura",
    },
    "17-hatsumi-o-n-7": {
        megami: "hatsumi",
        name: "波呼び",
        nameEn: "Wavecall",
        nameZh: "唤浪",
        nameZhG1: "唤潮",
        nameKo: "파도 부르기",
        ruby: "なみよび",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "1",
        text: "隙\n【展開中】あなたのターンかつ順風である場合のみ、このカードの上の桜花結晶は移動する。\n【破棄時】攻撃『適正距離2-7、1/-、【攻撃後】相手は山札をすべて伏せ札にする。』を行う。",
        textZh: "破绽\n【展开中】仅在你的回合中且为顺风时，才可以移动此牌上的樱花结晶。\n【破弃时】进行一次“攻击距离2-7 伤害1/- 【攻击后】盖伏对手的牌库”的攻击。",
        textZhG1: "破绽\n【展开中】仅当你的回合内你处于顺风状态时可以移除此牌上的樱花结晶。\n【破弃时】进行一次“攻击距离2-7 伤害1/- 【攻击后】盖伏对手的牌库。”的攻击。",
        textKo: "틈\n【전개중】당신의 턴 및 순풍일 때에만, 이 카드 위의 벚꽃 결정이 이동한다.\n【파기시】공격 『적정 거리2-7, 1/-, 【공격후】상대는 패산을 전부 덮임패로 한다.』를 한다.",
        textEn: "Unguarded\n\nForced: Sakura tokens cannot leave this card unless it's your turn and there is a tailwind.\n\nDisenchant: You attack with \"Range: 2-7, Damage: 1/-, After Attack: Put your opponent's deck into their discard pile.\"",
    },
    "17-hatsumi-o-s-1": {
        megami: "hatsumi",
        name: "イサナ海域",
        nameEn: "Cetacean Ocean",
        nameZh: "鲸鱼海域",
        nameZhG1: "鲸鱼海域",
        nameKo: "이사나 해역",
        ruby: "いさなかいいき",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-5",
        damage: "3/1",
        cost: "4",
        text: "【常時】順風ならば、この《攻撃》は+0/+2となる。\n【攻撃後】逆風ならば、\nダスト→間合：2\nを行い、このカードを未使用に戻す。",
        textZh: "【常时】若顺风，此《攻击》得+0/+2。\n【攻击后】若逆风，则：虚→2→距。\n然后将此牌变为未使用的状态。",
        textZhG1: "【常时】若你处于顺风状态，则此《攻击》获得+0/+2。\n【攻击后】若你处于逆风状态，则虚（2）→距，然后将此牌变为未使用状态。",
        textKo: "【상시】순풍이라면, 이 《공격》은 +0/+2된다.\n【공격시】역풍이라면,\n더스트→간격：2\n을 하고, 이 카드를 미사용으로 되돌린다.",
        textEn: "Forced: If there is a tailwind, this attack gains +0/+2.\n\nAfter Attack: If there is a headwind, Shadow (2)→ Distance, then turn this card face-down.",
    },
    "17-hatsumi-o-s-2": {
        megami: "hatsumi",
        name: "オヨギビ砲火",
        nameEn: "Aquiform Salvo",
        nameZh: "鱼雷炮火",
        nameZhG1: "鱼雷炮击",
        nameKo: "오요기비 포화",
        ruby: "およぎびほうか",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "5-6",
        damage: "2/2",
        cost: "2",
        text: "【常時】このカードが未使用に戻った時、基本動作を1回行ってもよい。\n----\n【即再起】相手のターンに現在の間合がターン開始時の間合から2以上近付く。",
        textZh: "【常时】此牌变为未使用的状态时，你可以进行一次基本动作。\n----\n【即再起】对手的回合中当前的距比起回合开始时要近2或更多时。",
        textZhG1: "【常时】每当此牌变为未使用状态时，你可以执行1次基本动作。\n----\n【即再起】对手的回合内，当前距离比回合开始时的距离近2及以上。",
        textKo: "【상시】이 카드가 미사용으로 되돌아갔을 때, 기본 동작을 1번 해도 좋다.\n----\n【즉재기】상대의 턴에 현재의 간격이 턴 개시 시의 간격보다 2이상 가까워진다.",
        textEn: "Forced: When this card would be turned face-down, you may perform a basic action immediately before doing so.\n\nImmediate Resurgence: On your opponent's turn, the current Distance becomes at least 2 lesser than it was at the beginning of the turn.",
    },
    "17-hatsumi-o-s-3": {
        megami: "hatsumi",
        name: "カラハリ灯台",
        nameEn: "Phaneritic Lighthouse",
        nameZh: "指引灯塔",
        nameZhG1: "子午灯塔",
        nameKo: "카라하리 등대",
        ruby: "からはりとうだい",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "逆風でないならば、あなたは畏縮する。\n【使用済】達人の間合は1大きくなる。\n【使用済】相手のターンに相手が《攻撃》でないカードを手札から使用したならば、それを解決する代わりに捨て札に置き、このカードを未使用に戻す。",
        textZh: "若不为逆风，则令你畏缩。\n【使用后】达人距离的值增大1。\n【使用后】对手的回合中，若对手使用了一张非《攻击》的手牌，则将结算该牌改为将其弃置，并将此卡变为未使用的状态。",
        textZhG1: "若你不处于逆风状态，则你畏缩。\n【使用后】达人距离增大1。\n【使用后】对手的回合内，每当对手使用非《攻击》的牌时，不结算该牌的效果，而改为将该牌置入弃牌区，然后将此牌变为未使用状态。",
        textKo: "역풍이 아니라면 당신은 위축된다.\n【사용됨】달인의 간격이 1커진다.\n【사용됨】상대의 턴에 상대가 《공격》이 아닌 카드를 손패에서 사용했다면, 그것을 해결하는 대신에 버림패로 옮기고, 이 카드를 미사용으로 되돌린다.",
        textEn: "Flinch yourself unless there is a headwind.\n\nDevoted: Increase the size of the Mastery Zone by 1.\n\nDevoted: On your opponent's turn, when your opponent plays a non-Attack card from their hand, instead of resolving that card's effects, place it in its owner's played pile and turn this card face-down.",
    },
    "17-hatsumi-o-s-4": {
        megami: "hatsumi",
        name: "ミオビキ航路",
        nameEn: "Coxswained Strait",
        nameZh: "向导航路",
        nameZhG1: "引水航道",
        nameKo: "미오비키 항로",
        ruby: "みおびきこうろ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "逆風ならば、相手を畏縮させ、相手の山札の上から1枚を公開する。それが《攻撃》カードならば捨て札にする。\n【使用済】あなたの開始フェイズの開始時に逆風ならば、このカードを消費を支払わずに使用してもよい。",
        textZh: "若逆风，则令对手畏缩，展示对手的牌库顶牌。若其为《攻击》牌则弃置之。\n【使用后】每当你的准备阶段开始时为逆风，你可以使用此牌，而不需支付其费用。",
        textZhG1: "若你处于逆风状态，则对手畏缩，展示对手牌库顶的1张牌。若该牌为《攻击》牌，则将其置入弃牌区。\n【使用后】每当你的准备阶段开始时，若你处于逆风状态，则你可以使用此牌，而不需支付其费用。",
        textKo: "역풍이라면, 상대를 위축시키고 상대의 패산 가장 위에서 1장을 공개한다. 그것이 《공격》 카드라면 버림패로 한다.\n【사용됨】당신의 개시 페이즈의 개시 시에 역풍이라면, 이 카드를 코스트를 지불하지 않고 사용해도 좋다.",
        textEn: "If there is a headwind, flinch your opponent and reveal the top card of their deck. If it's an Attack card, put it into their played pile.\n\nDevoted: At the beginning of your turn, if there is a headwind, you may play this card without paying its cost.",
    },
    "18-mizuki-o-n-1": {
        megami: "mizuki",
        name: "陣頭",
        nameEn: "Lead the Charge",
        nameZh: "头阵",
        nameZhG1: "头阵",
        nameKo: "진두",
        ruby: "じんとう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-2",
        damage: "1/1",
        text: "【攻撃後】徴兵を1回行う。",
        textZh: "【攻击后】进行1次征兵。",
        textZhG1: "【攻击后】进行1次征兵。",
        textKo: "【공격후】징병을 1번 한다.",
        textEn: "After Attack: Conscript a Unit.",
    },
    "18-mizuki-o-n-2": {
        megami: "mizuki",
        name: "反攻",
        nameEn: "Counteroffensive",
        nameZh: "反攻",
        nameZhG1: "反攻",
        nameKo: "반공",
        ruby: "はんこう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-3",
        damage: "1/1",
        text: "【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+2/+0となる。\n全力化：【常時】この《攻撃》は+0/+2となる。",
        textZh: "【常时】若你在上个回合进行了对应，此《攻击》得+2/+0。\n全力化：【常时】此《攻击》得+0/+2。",
        textZhG1: "【常时】若上一回合内你进行过对应，则此《攻击》得+2/+0。\n全力化（主要阶段，若你选择执行全力行动，则你可以如使用《全力》牌一样使用此牌。若如此做，则此牌额外获得以下效果）：【常时】此《攻击》获得+0/+2。",
        textKo: "【상시】당신이 직전 턴에 대응을 했다면, 이 《공격》은 +2/+0된다.\n전력화：【상시】이 《공격》은 +0/+2된다.",
        textEn: "Forced: If you reacted to an attack last turn, this attack gains +2/+0.\n\nAll-Out: This attack gains +0/+2.",
    },
    "18-mizuki-o-n-3": {
        megami: "mizuki",
        name: "撃ち落とし",
        nameEn: "Quash",
        nameZh: "击落",
        nameZhG1: "击落",
        nameKo: "쏘아떨구기",
        ruby: "うちおとし",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "1-5",
        damage: "1/1",
        text: "【攻撃後】不動―このターン中に現在の間合が変化していないならば、対応した《全力》でも切札でもない《攻撃》を打ち消す。\n（このカードはコダマのカードとして扱う）",
        textZh: "【攻击后】不动～若本回合的距没有发生变化，打消被对应的非《全力》也非王牌的《攻击》。\n（将此牌视为木灵的牌）",
        textZhG1: "【攻击后】不动～若本回合内当前距离的值没有发生过变化，则打消被对应的非《全力》且非王牌的《攻击》。（此牌视为木灵的牌）",
        textKo: "【공격후】부동―이 턴 중에 현재의 간격이 변화하지 않았다면, 대응한 《전력》도 비장패도 아닌 《공격》을 무효화한다.\n（이 카드는 코다마의 카드로 취급한다）",
        textEn: "After Attack: Unwavering - Cancel the non-Special, non-Throughout attack you played this card as a Reaction to if the Distance hasn't changed this turn.\n\n(Treat this card as a Kodama card.)",
    },
    "18-mizuki-o-n-4": {
        megami: "mizuki",
        name: "号令",
        nameEn: "Command",
        nameZh: "号令",
        nameZhG1: "号令",
        nameKo: "호령",
        ruby: "ごうれい",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "徴兵を1回行う。\nあなたが直前のターンに対応しているならば、集中力を1得る。",
        textZh: "进行1次征兵。\n若你在上个回合进行了对应，获得1点集中力。",
        textZhG1: "进行1次征兵。若上一回合内你进行过对应，则获得1点集中力。",
        textKo: "징병을 1번 한다.\n당신이 직전 턴에 대응했다면, 집중력을 1얻는다.",
        textEn: "Conscript a Unit.\n\nIf you reacted to an attack last turn, gain 1 Vigor.",
    },
    "18-mizuki-o-n-5": {
        megami: "mizuki",
        name: "防壁",
        nameEn: "Bulwark",
        nameZh: "屏障",
        nameZhG1: "防壁",
        nameKo: "방벽",
        ruby: "ぼうへき",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "終端\nこのカードがこのターンであなたが行う最初の対応ならば、対応した切札でも《全力》でもない《攻撃》を打ち消す。",
        textZh: "终端\n若此牌为此回合你进行的第一次对应，则打消被对应的非《全力》也非王牌的《攻击》。",
        textZhG1: "终端\n若此牌为本回合内你进行的第一次对应，则打消被对应的非《全力》且非王牌的《攻击》。",
        textKo: "종단\n이 카드가 이 턴에서의 당신이 최초로 행하는 대응이라면, 대응한 비장패도 《전력》도 아닌 《공격》을 무효화한다.",
        textEn: "Terminal\n\nCancel the non-Special, non-Throughout attack you played this card as a Reaction to if this is the first time you are reacting to an attack this turn.",
    },
    "18-mizuki-o-n-6": {
        megami: "mizuki",
        name: "制圧前進",
        nameEn: "Steady Advance",
        nameZh: "前进压制",
        nameZhG1: "压制前进",
        nameKo: "제압전진",
        ruby: "せいあつぜんしん",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "徴兵を1回行い、相手を畏縮させる。\n現在の間合が3以上ならば　間合→自オーラ：1",
        textZh: "进行1次征兵，令对手畏缩。\n现在的距离大于等于3的话：距→1→自装",
        textZhG1: "进行1次征兵，对手畏缩。\n若当前距离大于等于3，则距（1）→自装",
        textKo: "징병을 1번 하고, 상대를 위축시킨다.\n현재의 간격이 3이상이라면, 간격→자신 오라：1",
        textEn: "Conscript a Unit. Flinch your opponent.\n\nIf the current Distance is 3 or more:\nDistance (1)→ Your Aura",
    },
    "18-mizuki-o-n-7": {
        megami: "mizuki",
        name: "戦場",
        nameEn: "Front Line",
        nameZh: "战场",
        nameZhG1: "战场",
        nameKo: "전장",
        ruby: "いくさば",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開中】不動―あなたがこのターンで初めて切札でない《攻撃》を行った時、このターン中に現在の間合が変化していないならば、その《攻撃》は+1/+1となる。\n（このカードはコダマのカードとして扱う）",
        textZh: "【展开中】不动～你进行本回合第一次非王牌的《攻击》的时候，若本回合的距没有发生变化，则该《攻击》得+1/+1。\n（将此牌视为木灵的牌）",
        textZhG1: "【展开中】不动～每个回合内，每当你进行第一次非王牌的《攻击》时，若本回合内当前距离的值没有发生过变化，则该《攻击》获得+1/+1。（此牌视为木灵的牌）",
        textKo: "【전개중】부동―당신이 이 턴에서 처음으로 비장패가 아닌 《공격》을 했을 때, 이 턴 동안 현재의 간격이 변화하지 않았다면, 그 《공격》은 +1/+1된다.\n（이 카드는 코다마의 카드로 취급한다）",
        textEn: "Ongoing: Unwavering - Whenever you make your first non-Special attack each turn, if the Distance hasn't changed this turn, that attack gains +1/+1.\n\n(Treat this card as a Kodama card.)",
    },
    "18-mizuki-o-s-1": {
        megami: "mizuki",
        name: "天主八龍閣",
        nameEn: 'Tenshu Keep "Hachiryou"',
        nameZh: "天主八龙阁",
        nameZhG1: "天主八龙阁",
        nameKo: "천주팔룡각",
        ruby: "てんしゅはちりょうかく",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "reaction",
        capacity: "3",
        cost: "5",
        text: "終端\n【展開時】対応した《攻撃》を打ち消す。\n【展開中】あなたの他のメガミまたは兵員の《攻撃》は+0/+1となる。",
        textZh: "终端\n【展开时】打消被对应的《攻击》。\n【展开中】你的其他女神以及兵员的《攻击》得+0/+1。",
        textZhG1: "终端\n【展开时】打消被对应的《攻击》。\n【展开中】你的兵员和其他女神的《攻击》得+0/+1。",
        textKo: "종단\n【전개시】대응한 《공격》을 무효화한다.\n【전개중】당신의 다른 여신 또는 병사의 《공격》은 +0/+1된다.",
        textEn: "Terminal\n\nInitialize: Cancel the attack you played this card as a Reaction to.\n\nOngoing: Your attacks from Units and non-Mizuki Megami gain +0/+1.",
    },
    "18-mizuki-o-s-2": {
        megami: "mizuki",
        name: "三重膝丸櫓",
        nameEn: 'Mie Turret "Hizamaru"',
        nameZh: "三重膝丸橹",
        nameZhG1: "三重膝丸橹",
        nameKo: "삼중슬환노",
        ruby: "みえひざまるやぐら",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-4",
        damage: "3/1",
        cost: "2",
        text: "【常時】あなたがこのターン中に攻撃しているならば、このカードは使用できない。\n----\n【即再起】あなたが終端を持つカードを使用する。\n（解決より前に再起する）",
        textZh: "【常时】你在该回合中进行过攻击的话则不能使用此牌。\n----\n【即再起】你使用带终端的牌时。（在结算前再起）",
        textZhG1: "【常时】若本回合内你进行过《攻击》，则你不能使用此牌。\n----\n【即再起】你使用具终端关键字的牌。（该牌结算前再起）",
        textKo: "【상시】당신이 이 턴 중에 공격했다면, 이 카드는 사용할 수 없다.\n----\n【즉재기】당신이 종단을 가진 카드를 사용했다.\n（해결하기 전에 재기한다）",
        textEn: "Forced: You cannot play this card if you have made an attack this turn.\n\nImmediate Resurgence: You play a card with Terminal. (Turn this card face-down before that card resolves.)",
    },
    "18-mizuki-o-s-3": {
        megami: "mizuki",
        name: "大手楯無門",
        nameEn: 'Ōte Gate "Tatenashi"',
        nameZh: "大手楯无门",
        nameZhG1: "大手楯无门",
        nameKo: "대수순무문",
        ruby: "おおてたてなしもん",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "終端\nあなたの手札1枚と追加札の「闘神」を兵舎に徴兵済で置く。",
        textZh: "终端\n将你的1张手牌和追加牌处的『斗神』以已征兵的状态置入兵营。",
        textZhG1: "终端\n将你的1张手牌与追加牌中的『斗神』以已征兵状态置于兵舍。",
        textKo: "종단\n당신의 손패 1장과 추가패의 「투신」을 병영에 징집 상태로 둔다.",
        textEn: 'Terminal\n\nPut your set aside "Divinity of War" and a card from your hand into your Barracks, conscripted.',
    },
    "18-mizuki-o-s-3-ex1": {
        megami: "mizuki",
        name: "闘神",
        nameEn: "Divinity of War",
        nameZh: "斗神",
        nameZhG1: "斗神",
        nameKo: "투신",
        ruby: "とうしん",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "18-mizuki-o-s-3",
        type: "attack",
        range: "1-2",
        damage: "2/1",
        text: "【常時】不動―このターン中に現在の間合が変化していないならば、この《攻撃》は+0/+1となる。\n【攻撃後】このカードを追加札に戻す。\n（このカードはコダマのカードとして扱う）",
        textZh: "【常时】不动～若本回合的距没有发生变化，则此《攻击》得+0/+1。\n【攻击后】将此牌移回追加牌处。\n（将此牌视为木灵的牌）",
        textZhG1: "【常时】不动～若本回合内当前距离的值没有发生过变化，则此《攻击》获得+1/+0。\n【攻击后】将此牌移回追加牌。\n（此牌视为木灵的牌）",
        textKo: "【상시】부동―이 턴 동안 현재의 간격이 변화하지 않았다면, 이 《공격》은 +0/+1된다.\n【공격후】이 카드를 추가패로 되돌린다.\n（이 카드는 코다마의 카드로 취급한다.）",
        textEn: "Forced: Unwavering - This attack gains +0/+1 if the Distance hasn't changed this turn.\n\nAfter Attack: Return this card to your set aside cards.\n\n(Treat this card as a Kodama card.)",
    },
    "18-mizuki-o-s-4": {
        megami: "mizuki",
        name: "山城水津城の鬨の声",
        nameEn: "Mizuki's Roaring Warcry",
        nameZh: "山城水津城的战吼声",
        nameZhG1: "山城水津城的喧天号角",
        nameKo: "야마시로 미즈키의 함성",
        ruby: "やましろみずきのときのこえ",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "fullpower",
        capacity: "5",
        cost: "5",
        text: "【展開中】元々終端を持つあなたの通常札と兵員は終端を失う。\n【展開中】元々が《全力》であるあなたの通常札は《全力》を失い、終端を得る。",
        textZh: "【展开中】你原本就具备终端的通常牌和兵员失去终端。\n【展开中】你原本就具备《全力》的通常牌失去《全力》并获得终端。",
        textZhG1: "【展开中】你的原本具终端关键字的通常牌和兵员牌失去终端。\n【展开中】你的原本具《全力》副类别的通常牌失去《全力》副类别，并获得终端。",
        textKo: "【전개중】원래 종단을 가진 당신의 통상패와 병사는 종단을 잃는다.\n【전개중】원래 《전력》을 가진 당신의 통상패는 《전력》을 잃고, 종단을 얻는다.",
        textEn: "Ongoing: Your Normal and Unit cards with printed Terminal lose Terminal.\n\nOngoing: Your Normal cards with the printed Throughout subtype lose that subtype and gain Terminal.",
    },
    "18-mizuki-o-t-1": {
        megami: "mizuki",
        name: "槍兵",
        nameEn: "Spearman",
        nameZh: "枪兵",
        nameZhG1: "枪兵",
        nameKo: "창병",
        ruby: "やりへい",
        rubyEn: "",
        baseType: "troop",
        type: "attack",
        range: "3",
        damage: "1/1",
        text: "兵員（兵舎、使用中、付与札以外の領域に移動するならば、代わりに兵舎に戻る）\n----\n終端\n【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+1/+0となる。",
        textZh: "兵员（移动到兵营、使用中、付与区之外的区域的时候，改为移回兵营）\n----\n终端\n【常时】若你在上个回合进行了对应，则此《攻击》得+1/+0。",
        textZhG1: "兵员（移动到兵营、使用中、付与区之外的区域的时候，改为移回兵营）\n----\n终端\n【常时】若上一回合内你进行过对应，则此《攻击》获得+1/+0。",
        textKo: "병사（병영, 사용중, 부여패 이외의 영역에서 이동한다면, 대신에 병영으로 되돌린다）\n----\n종단\n【상시】당신이 직전 턴에 대응했다면, 이 공격은 +1/+0된다.",
        textEn: "Unit (If you move to an area other than the barracks, in use, or enhancements, return to the barracks instead)\n----\nTerminal\n\nForced: If you reacted to an attack last turn, this attack gains +1/+0.",
    },
    "18-mizuki-o-t-2": {
        megami: "mizuki",
        name: "盾兵",
        nameEn: "Shieldbearer",
        nameZh: "盾兵",
        nameZhG1: "盾兵",
        nameKo: "방패병",
        ruby: "たてへい",
        rubyEn: "",
        baseType: "troop",
        type: "action",
        subType: "reaction",
        text: "兵員（兵舎、使用中、付与札以外の領域に移動するならば、代わりに兵舎に戻る）\n----\n終端\n対応した《全力》でない《攻撃》は-1/+0となる。",
        textZh: "兵员（移动到兵营、使用中、付与区之外的区域的时候，改为移回兵营）\n----\n终端\n被对应的非《全力》的《攻击》得-1/+0。",
        textZhG1: "兵员（移动到兵营、使用中、付与区之外的区域的时候，改为移回兵营）\n----\n终端\n被对应的非《全力》的《攻击》获得-1/+0。",
        textKo: "병사（병영, 사용중, 부여패 이외의 영역에서 이동한다면, 대신에 병영으로 되돌린다）\n----\n종단\n대응한 《전력》이 아닌 《공격》은 -1/+0된다.",
        textEn: "Unit (If you move to an area other than the barracks, in use, or enhancements, return to the barracks instead)\n----\nTerminal\n\nThe non-Throughout attack you played this card as a Reaction to gets -1/+0.",
    },
    "18-mizuki-o-t-3": {
        megami: "mizuki",
        name: "騎兵",
        nameEn: "Cavalry",
        nameZh: "骑兵",
        nameZhG1: "骑兵",
        nameKo: "기병",
        ruby: "きへい",
        rubyEn: "",
        baseType: "troop",
        type: "enhance",
        capacity: "2",
        text: "兵員（兵舎、使用中、付与札以外の領域に移動するならば、代わりに兵舎に戻る）\n----\n終端　隙\n【破棄時】あなたは集中力を1得る。",
        textZh: "兵员（移动到兵营、使用中、付与区之外的区域的时候，改为移回兵营）\n----\n终端 破绽\n【破弃时】你获得1点集中力。",
        textZhG1: "兵员（移动到兵营、使用中、付与区之外的区域的时候，改为移回兵营）\n----\n终端 破绽\n【破弃时】你获得1点集中力。",
        textKo: "병사（병영, 사용중, 부여패 이외의 영역에서 이동한다면, 대신에 병영으로 되돌린다）\n----\n종단 틈\n【파기시】당신은 집중력을 1얻는다.",
        textEn: "Unit (If you move to an area other than the barracks, in use, or enhancements, return to the barracks instead)\n----\nTerminal Unguarded\n\nDisenchant: Gain 1 Vigor.",
    },
};
// シーズン6
exports.S6_UPDATED_CARD_DATA = {
    "07-shinra-o-s-1": {
        megami: "shinra",
        name: "完全論破",
        nameEn: "Shake the Mind",
        nameZh: "完美驳倒",
        nameZhG1: "完全论破",
        nameKo: "완전논파",
        ruby: "かんぜんろんぱ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "相手の捨て札にあるカード1枚を選び、このカードの下に封印する。 \n(ゲーム中に戻ることはない)",
        textZh: "选择对手弃牌区中的1张牌，封印于此牌下。\n（本局游戏不再归还）",
        textZhG1: "选择对手弃牌区中的一张牌，封印在此牌下（本局游戏不再归还）。",
        textKo: "상대의 버림패에 있는 카드 1장을 골라, 이 카드 밑에 봉인한다.\n (게임 중에 되돌아오는 일은 없다.)",
        textEn: "Choose a card in your opponent's played pile. Seal it.",
        sealable: true,
    },
    "transform-A1-03": {
        megami: "thallya",
        anotherID: "A1",
        replace: "transform-03",
        name: "Form: ASURA",
        nameEn: "Form: ASURA",
        nameZh: "Form: ASURA",
        nameZhG1: "阿修罗形态",
        nameKo: "Form: ASURA",
        ruby: "フォルム:アスラ",
        rubyEn: "",
        rubyZh: "阿修罗形态",
        baseType: "transform",
        text: "【変形時】相手は伏せ札から1枚を選び、それを捨て札にする。これをもう1回繰り返す。\n----\n【追加基本動作：Sigma-Drive】\n攻撃『適正距離3, 5、3/2　【攻撃後】あなたは畏縮する。』を行う。\nこの基本動作は1ターンに1回だけ行える。",
        textZh: "【变形时】对手从盖牌里弃1张牌。然后重复1次。\n----\n【追加基本动作：Sigma-Drive】\n进行一次“攻击距离3,5 伤害3/2 【攻击后】令你畏缩。”的攻击。\n这个基本动作1回合只能进行1次。",
        textZhG1: "【变形时】对手从其盖牌区中选择1张牌弃置。然后再结算上述效果1次。\n----\n【追加基本动作】Sigma-Drive：进行一次“攻击距离3,5 伤害3/2 【攻击后】你畏缩”的攻击。此基本动作每回合至多执行一次。",
        textKo: "【변형시】 상대는 덮은패를 1장 선택하여 버림패로 보낸다. 이를 1회 더 반복한다.\n----\n【추가기본동작: Sigma-Drive】\n공격 『적정거리 3,5, 3/2, 【공격후】 당신은 위축된다.』을 수행한다.\n이 기본동작은 한 턴에 한 번만 수행할 수 있다.",
        textEn: 'TransForm: Your opponent puts a card from their discard pile into their played pile. Repeat this process a total of one more time.\n\nAdditional basic action ("Sigma-Drive"): You attack with "Range: 3, 5, Damage: 3/2, After Attack: Flinch yourself." This action can only be performed once a turn.',
    },
    "12-raira-a1-n-2": {
        megami: "raira",
        anotherID: "A1",
        replace: "12-raira-o-n-2",
        name: "暴風",
        nameEn: "Gale Winds",
        nameZh: "暴风",
        nameZhG1: "暴风",
        nameKo: "폭풍",
        ruby: "ぼうふう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-3",
        damage: "2/1",
        text: "【攻撃後】嵐の力を1回使用してもよい。",
        textZh: "【攻击后】你可以使用1次风暴之力。",
        textZhG1: "【攻击后】你可以使用1次岚之力。",
        textKo: "【공격후】폭풍의 힘을 1번 사용해도 좋다.",
        textEn: "After Attack: You may harness the storm once.",
    },
    "12-raira-storm": {
        megami: "raira",
        anotherID: "A1",
        replace: "",
        name: "【嵐の力】",
        nameEn: "[Storm]",
        nameZh: "【风暴之力】",
        nameZhG1: "【岚之力】",
        nameKo: "【폭풍의 힘】",
        ruby: "",
        rubyEn: "",
        baseType: "storm",
        text: "【風1】間合⇔ダスト：1\n【風2】カードを1枚引き、手札を1枚伏せ札にする。\n【風3】あなたは集中力を1得て、相手は集中力を1失う。\n----\n【雷1】このターンにあなたが次に行う《攻撃》は+1/+0となる。\n【雷2】攻撃『適正距離0-4、1/1』を行う。\n【雷3】このターンにあなたが次に行うオーラへのダメージが「-」でない《攻撃》は+0/+1となる。",
        textZh: "【风1】距↔1↔虚\n【风2】抓1张牌，然后盖伏1张手牌。\n【风3】你获得1点集中力，对手失去1点集中力。\n----\n【雷1】本回合你的下次《攻击》得+1/+0。\n【雷2】进行一次“攻击距离0-4、伤害1/1”的攻击。\n【雷3】本回合你的下次对装伤害不为「-」的《攻击》得+0/+1。",
        textZhG1: "【风1】距（1）⇔虚\n【风2】抽1张牌，然后盖伏1张手牌。\n【风3】你获得1点集中力，对手失去1点集中力。\n----\n【雷1】本回合内你的下一次《攻击》获得+1/+0\n【雷2】进行一次“攻击距离0-4 伤害1/1”的攻击。\n【雷3】本回合的你的下一次对装伤害不为“-”的《攻击》获得+0/+1",
        textKo: "【풍1】간격⇔더스트：1\n【풍2】카드를 1장 뽑고 손패를 1장 덮임패로 한다.\n【풍3】당신은 집중력을 1 얻고 상대는 집중력을 1잃는다.\n----\n【뇌1】이 턴에 당신이 다음에 하는 《공격》은 +1/+0된다.\n【뇌2】공격 『적정 거리0-4, 1/1』를 한다.\n【뇌3】.이 턴에 당신이 다음에 하는 오라 데미지가 「-」이 아닌 《공격》은 +0/+1된다.",
        textEn: 'Wind 1: Distance (1)⇔ Shadow\nWind 2: Draw a card, then discard a card.\nWind 3: Gain 1 Vigor. Your opponent loses 1 Vigor.\n\nThunder 1: The next attack you make this turn gains +1/+0.\nThunder 2: You attack with "Range: 0-4, Damage: 1/1".\nThunder 3: The next attack you make this turn that doesn\'t have "-" Damage to Aura gains +0/+1.',
    },
    "15-korunu-o-n-7": {
        megami: "korunu",
        name: "霜の茨",
        nameEn: "Rimethorn",
        nameZh: "霜茨",
        nameZhG1: "霜之棘",
        nameKo: "서리 가시덤불",
        ruby: "しものいばら",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開中】あなたのターンにあなたが初めて行う切札でない《攻撃》は+1/+1となる。\n【展開中】相手が凍結しているならば、あなたの開始フェイズの処理でこの付与札の上の桜花結晶を移動させなくてもよい。",
        textZh: "【展开中】你的回合内你第一次进行的非王牌的《攻击》得+1/+1。\n【展开中】若对手被冻结，则你的准备阶段的结算可以不移动这张付与牌上的樱花结晶。",
        textZhG1: "【展开中】你的回合内你进行的第一次非王牌的《攻击》获得+1/+1。\n【展开中】若对手被冻结，则你的准备阶段从所有付与牌上移除樱花结晶时可以不移除此牌上的樱花结晶。",
        textKo: "【전개중】자신의 턴에 자신이 처음으로 하는 비장패가 아닌 《공격》은 +1/+1 된다.\n【전개중】상대가 동결되어있다면 자신의 턴 개시 페이즈에 이 카드에 올려진 벚꽃 결정을 이동시키지 않아도 좋다.",
        textEn: "Ongoing: The first non-Special attack you make on each of your turns gets +1/+1.\n\nOngoing: If your opponent has any Ice counters, you may choose not to move Sakura tokens from this card as part of the beginning of turn process on your turn.",
    },
    "15-korunu-o-s-4": {
        megami: "korunu",
        name: "ポルチャルトー",
        nameEn: "Poru-char To",
        nameZh: "往生彼岸",
        nameZhG1: "彼世深渊",
        nameKo: "포르챨 토",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "1",
        cost: "2",
        text: "【常時】このカードを消費4で《対応》を持つかのように相手の《攻撃》に割り込んで使用してもよい。\n【展開時】間合⇔ダスト：1　　相手は1回凍結する。\n【破棄時】このカードを納4として使用してもよい。（消費は支払う）",
        textZh: "【常时】你可以为此牌消耗4气，则此牌可以如《对应》牌一样对应对手的《攻击》使用。\n【展开时】距↔1↔虚；冻结对手1次。\n【破弃时】你可以将此牌的视为纳4的牌再次使用。（需要支付费用）",
        textZhG1: "【常时】此牌可以如《对应》牌一样对应《攻击》使用。若以此法使用，则此牌的费用视为4。\n【展开时】距（1） ⇔ 虚\n冻结对手1次。\n【破弃时】你可以再次使用此牌。若以此法使用，则此牌的纳视为4。（仍需支付费用）",
        textKo: "【상시】이 카드를 코스트4로 쓰면 《대응》을 가진 것처럼 상대의 《공격》에 끼어들어서 사용해도 좋다.\n【전개시】간격⇔더스트：1　　상대는 1번 동결한다.\n【파기시】이 카드를 납4로써 사용해도 좋다.（코스트는 지불할 것）",
        textEn: "Forced: You may play this card as if it were a Reaction by paying 4 Flare instead of its normal cost.\n\nInitialize: Distance (1)⇔ Shadow\nFreeze your opponent.\n\nDisenchant: You may play this card as if its Charge were 4 (paying its cost).",
    },
    "18-mizuki-o-n-2": {
        megami: "mizuki",
        name: "反攻",
        nameEn: "Counteroffensive",
        nameZh: "反攻",
        nameZhG1: "反攻",
        nameKo: "반공",
        ruby: "はんこう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-3",
        damage: "1/1",
        text: "【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+2/+1となる。\n全力化：【常時】この《攻撃》は+1/+1となる。",
        textZh: "【常时】若你在上个回合进行了对应，此《攻击》得+2/+1。\n全力化：【常时】此《攻击》得+1/+1。",
        textZhG1: "【常时】若上一回合内你进行过对应，则此《攻击》得+2/+1。\n全力化（主要阶段，若你选择执行全力行动，则你可以如使用《全力》牌一样使用此牌。若如此做，则此牌额外获得以下效果）：【常时】此《攻击》获得+1/+1。",
        textKo: "【상시】당신이 직전 턴에 대응을 했다면, 이 《공격》은 +2/+1된다.\n전력화：【상시】이 《공격》은 +1/+1된다.",
        textEn: "Forced: If you reacted to an attack last turn, this attack gains +2/+1.\n\nAll-Out: This attack gains +1/+1.",
    },
    "18-mizuki-o-n-6": {
        megami: "mizuki",
        name: "制圧前進",
        nameEn: "Steady Advance",
        nameZh: "前进压制",
        nameZhG1: "压制前进",
        nameKo: "제압전진",
        ruby: "せいあつぜんしん",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "以下を3回選ぶ。同じものを複数回選んでもよい。\n・徴兵を1回行う。\n・基本動作《前進》を行う。\n・基本動作《纏い》を行う。",
        textZh: "选择以下选项3次，且同样的选项可以重复选择：\n●进行1次征兵。\n●进行基本动作《前进》。\n●进行基本动作《装附》。",
        textZhG1: "选择3次。你可以多次选择同一个选项：\n1.进行1次征兵；\n2.执行1次基本动作《前进》；\n3.执行1次基本动作《装附》。",
        textKo: "아래를 3번 고른다. 같은 것을 여러 선택해도 좋다.\n・징병을 1번 한다.\n・기본 동작 《전진》을 한다.\n・기본 동작 《휘감기》를 한다.",
        textEn: "Choose three. You may choose the same option more than once:\n・Conscript a Unit.\n・Perform a Forward Movement basic action.\n・Perform a Recover basic action.",
    },
    "04-tokoyo-A2-n-2": {
        megami: "tokoyo",
        anotherID: "A2",
        replace: "04-tokoyo-o-n-2",
        name: "畏掠め",
        nameEn: "Awestrike",
        nameZh: "心生畏",
        nameZhG1: "畏掠",
        nameKo: "두려움 흘리기",
        ruby: "おそれがすめ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "2-3",
        damage: "2/1",
        text: "【常時】相手の集中力が0ならば、この《攻撃》のダメージはあなたが選ぶ。\n【攻撃後】境地―あなたの集中力が2ならば、対応した切札でない《攻撃》は-X/-Yとなる。Xはこの《攻撃》が与えたオーラへのダメージ、Yはライフへのダメージに等しい。",
        textZh: "【常时】对手的集中力为0的话，此《攻击》如何承受伤害由你来选择。\n【攻击后】境地～若你的集中力为2，则被对应的非王牌的《攻击》得-X/-Y。X等于此《攻击》给予敌装的伤害数，Y等于给予敌命的伤害数。",
        textZhG1: "【常时】若对手的集中力等于0，则由你选择对手如何承受此攻击的伤害。\n【攻击后】境地～若你的集中力等于2，则被对应的非王牌的《攻击》获得-X/-Y。X等于此《攻击》造成的对装的伤害，Y等于此攻击造成的对命的伤害。",
        textKo: "【상시】 상대의 집중력이 0이라면, 이 《공격》의 데미지는 당신이 선택한다.\n【공격후】 경지 - 당신의 집중력이 2라면, 대응한 비장패가 아닌 《공격》은 -X/-Y가 된다. X는 이 《공격》으로 준 오라 데미지, Y는 이 《공격》으로 준 라이프 데미지와 같다.",
        textEn: "Forced: If your opponent's Vigor is 0, you choose the type of damage dealt by this attack.\n\nAfter Attack: Artistic - If your Vigor is 2, the non-Special attack you played this card as a Reaction to gets -X/-Y, where X is the damage to Aura this attack dealt, and Y is the damage to Life it dealt.",
    },
    "04-tokoyo-A2-s-2": {
        megami: "tokoyo",
        anotherID: "A2",
        replace: "04-tokoyo-o-s-2",
        name: "悠久ノ雪",
        nameEn: "Endless Snow",
        nameZh: "悠久之雪",
        nameZhG1: "悠久之雪",
        nameKo: "유구의 눈",
        ruby: "ゆうきゅうのゆき",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-5",
        damage: "1/1",
        cost: "1",
        text: "【攻撃後】相手がオーラへのダメージを選んだならば、相フレア→自オーラ：1\n----\n【再起】相手の集中力が1である。",
        textZh: "【攻击后】若对手选择由装承受此次伤害，则 敌气→1→自装\n----\n【再起】对手的集中力为1。",
        textZhG1: "【攻击后】若对手选择由装承受此次伤害，则\n敌气（1）→自装\n----\n【再起】对手的集中力等于1。",
        textKo: "【공격후】 상대가 오라 데미지를 선택했다면,\n상대 플레어 → 자신 오라: 1\n----\n【재기】상대의 집중력이 1이다.",
        textEn: "After Attack: If your opponent chose to take damage to Aura:\nOpponent's Flare (1)→ Your Aura\n\nResurgence: Your opponent's Vigor is 1.",
    },
    "04-tokoyo-A2-s-3": {
        megami: "tokoyo",
        anotherID: "A2",
        replace: "04-tokoyo-o-s-3",
        name: "徒寄ノ八重桜",
        nameEn: "Hollow Blossoms",
        nameZh: "不凋之八重樱",
        nameZhG1: "徒寄之八重樱",
        nameKo: "덧없이 지는 여덟겹 벚꽃",
        ruby: "あだよりのやえざくら",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "あなたは基本動作《纏い》を5回行う。\n【使用済】あなたのカードの矢印効果があなたのオーラへと桜花結晶を動かすならば、その間だけオーラの上限を8として扱う。\n【使用済】あなたの開始フェイズの開始時にあなたのオーラが6以上ならば、攻撃『適正距離0-8、-/1』を行う。",
        textZh: "你进行5次基本动作《装附》。\n【使用后】你的牌的箭头效果向自装移动樱花结晶的时候，仅在那时将装的上限视为8。\n【使用后】你的准备阶段开始时自装有6或以上的话，进行一次“攻击距离0-8 伤害-/1”的攻击。",
        textZhG1: "进行5次基本动作《装附》。\n【使用后】你的牌上的箭头效果将樱花结晶移至自装时，自装上限视为8。\n【使用后】你的准备阶段开始时，若自装中的樱花结晶的数目大于等于6，则进行一次“攻击距离0-8 伤害-/1”的攻击。",
        textKo: "당신은 기본동작 《휘감기》를 5회 수행한다.\n【사용됨】 당신의 카드의 화살표 효과가 벚꽃결정을 당신의 오라로 이동한다면, 최대 오라가 8인 것처럼 사용한다.\n【사용됨】 당신의 개시 페이즈 시작에, 당신의 오라가 6 이상이라면, 공격 『적정거리 0-8, -/1』을 수행한다.",
        textEn: 'Perform 5 Recover basic actions.\n\nDevoted: If an arrow (→) on a card you own would move Sakura tokens to your Aura, your maximum Aura is considered to be 8 for that effect.\n\nDevoted: At the beginning of your turn, if your Aura is 6 or more, you attack with "Range: 0-8, Damage: -/1".',
    },
    "08-hagane-A1-n-1": {
        megami: "hagane",
        anotherID: "A1",
        replace: "08-hagane-o-n-1",
        name: "炉火",
        nameEn: "Hearthfire",
        nameZh: "炉火",
        nameZhG1: "炉火",
        nameKo: "화롯불",
        ruby: "ろび",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の間合が3以上ならば、\n間合→自フレア：1\n間合→相フレア：1",
        textZh: "若当前距离大于等于3，则：\n距→1→自气\n距→1→敌气",
        textZhG1: "若当前距离大于等于3，则\n距（1）→自气\n距（1）→敌气",
        textKo: "현재 간격이 3 이상이라면,\n간격 → 자신 플레어: 1\n간격 → 상대 플레어: 1",
        textEn: "If the current Distance is 3 or more:\nDistance (1)→ Your Flare\nDistance (1)→ Opponent's Flare",
    },
    "08-hagane-A1-n-2": {
        megami: "hagane",
        anotherID: "A1",
        replace: "08-hagane-o-n-2",
        name: "旋回起",
        nameEn: "Whirling Ascent",
        nameZh: "旋回起",
        nameZhG1: "旋回起",
        nameKo: "선회기",
        ruby: "せんかいき",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の間合がターン開始時の間合から2以上変化しているならば、カードを1枚引き、あなたは集中力を1得る。",
        textZh: "若当前距离与本回合开始时距离比相差2或者以上，则抓1张牌且你获得1点集中力。",
        textZhG1: "若当前距离与本回合开始时距离之差的绝对值大于等于2，则你抓1张牌并获得1点集中力。",
        textKo: "현재 간격이 턴 시작시 간격에서 2 이상 변화했다면, 카드를 1장 뽑고, 당신은 집중력을 1 얻는다.",
        textEn: "If the difference between the current Distance and the Distance at the beginning of this turn is 2 or more, draw a card and gain 1 Vigor.",
    },
    "08-hagane-A1-s-1": {
        megami: "hagane",
        anotherID: "A1",
        replace: "08-hagane-o-s-1",
        name: "大錬成マテリアル",
        nameEn: "Grand Refinement Material",
        nameZh: "大炼成MATERIAL",
        nameZhG1: "大炼成·原限",
        nameKo: "대연성 마테리얼",
        ruby: "だいれんせいマテリアル",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "終端\nこのカードがあなたのカードならば、以下の効果を解決する。\n金床にカードがあるならばダストから金床に桜花結晶を1つ置く。金床にカードがないならば、手札から他のメガミの《攻撃》カードを1枚選び金床に置いてもよい。\nあなたの追加札から「錬成攻撃」を山札の底に1枚置く。\n----\n【再起】このターンにあなたが「錬成攻撃」を使用している。",
        textZh: "终端。\n此牌是你的牌的话，结算下述效果。\n铁砧上有牌的话将1个樱花结晶从虚放到铁砧上。铁砧上没有牌的话，你可以选手牌的一张其他女神的《攻击》牌并将其放置到铁砧上。\n从追加牌区中将1张『炼成攻击』置于你的牌库底。\n----\n【再起】这个回合你使用了『炼成攻击』。",
        textZhG1: "终端\n若此牌为你的牌，则结算以下效果。\n若铁砧中有牌，则将1个樱花结晶从虚移至铁砧上。若铁砧中没有牌，则你可以从手牌中选择1张其他女神的《攻击》牌置于铁砧中。\n将1张『炼成攻击』从追加区移至你的牌库底。\n----\n【再起】本回合内你使用了『炼成攻击』。",
        textKo: "종단\n이 카드가 당신의 카드라면 아래의 효과를 해결한다.\n모루에 카드가 있다면, 더스트에서 벚꽃결정 1개를 모루에 놓는다. 모루에 카드가 없다면, 손패에서 다른 여신의 《공격》 카드를 1장 선택하여 모루에 놓을 수 있다.\n당신의 추가패에서 「연성공격」을 1장 패산 아래에 넣는다.\n【재기】이번 턴에 당신이 「연성공격」을 사용했다.",
        textEn: 'Terminal\n\nIf you own this card, resolve the following effects.\nIf there is a card on your Anvil, move 1 Sakura token from Shadow to your Anvil. If there is no card on your Anvil, you may choose a non-Hagane Attack card from your hand and put it there.\nPut one of your set aside "Tempered Attack" on the bottom of your deck.\n\nResurgence: You played a "Tempered Attack" this turn.',
    },
    "08-hagane-A1-s-1-ex1": {
        megami: "hagane",
        anotherID: "A1",
        replace: "",
        name: "錬成攻撃",
        nameEn: "Tempered Attack",
        nameZh: "炼成攻击",
        nameZhG1: "炼成攻击",
        nameKo: "연성공격",
        ruby: "れんせいこうげき",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "08-hagane-A1-s-1",
        type: "variable",
        text: "【常時】このカードは名前、使用者とこの効果を除き金床にあるカードの複製になる。このカードが手札にあるなら相手の効果で選べず、手札か伏せ札にないなら再構成以外で山札や手札に戻らない。このカードは封印されない。金床にある桜花結晶の個数に応じて以下の効果を得る。\n0以上…+1/+0となり、距離拡大（遠1）を得る。\n1以上…+1/+1となり、距離拡大（遠1）を得る。\n2以上…+1/+1となり、距離拡大（遠1）を得て、打ち消されない。",
        textZh: "【常时】此牌成为铁砧上的牌的复制但是保留名字、使用者以及这个效果。此牌在手牌中时无法被对手的效果选中；不在手牌或者盖牌的话就不能以再构成以外的方式返回手牌或者牌库。此牌无法被封印。根据铁砧上放置的樱花结晶的个数获得以下效果：\n0或以上…得+1/+0、距离扩大(远1)。 \n1或以上…得+1/+1、距离扩大(远1)。 \n2或以上…得+1/+1、距离扩大(远1)、无法被打消。",
        textZhG1: "【常时】此牌为铁砧上的牌之复制，但其名称、使用者与此效果保持不变。若此牌在手牌中，则此牌不可被对手的效果选择为目标。若此牌不在手牌与盖牌区中，则无法由重铸牌库以外的效果移至牌库或手牌。此牌不可被封印。根据铁砧上的樱花结晶的数目，获得以下效果：\n0以上……+1/+0和距离扩大（远1）\n1以上……+1/+1和距离扩大（远1）\n2以上……+1/+1、距离扩大（远1）和不可被打消。",
        textKo: "【상시】 이 카드는 이름, 사용자와 이 효과를 제외한 모루에 있는 카드의 복제가 된다. 이 카드가 손패에 있다면, 상대의 효과로 선택할 수 없고, 손패 또는 덮은패에 있지 않다면 재구성 이외의 방법으로 패산이나 손패로 돌아가지 않는다. 이 카드는 봉인되지 않는다. 모루에 있는 벚꽃결정 개수에 따라 아래 효과를 얻는다.\n0이상…+1/+0이 되고, 거리확대(원1)을 얻는다.\n1이상…+1/+1이 되고, 거리확대(원1)을 얻는다.\n2이상…+1/+1이 되고, 거리확대(원1)을 얻고, 무효화되지 않는다.",
        textEn: 'Forced: This copies the card on your Anvil, except its name, this effect, and its owning Megami. If the original effect referred to a "non-[Megami] Megami", this refers to a "non-Hagane Megami". This cannot be chosen by your opponent’s effects while it’s in your hand, If this is not in your hand or discard pile, it cannot be put into your hand or deck except by reshuffling. This cannot be sealed. Based on the number of Sakura tokens on your Anvil, this gains:\n0 or more: +1/+0 and increased Range (far, 1)\n1 or more: +1/+1 and increased Range (far, 1)\n2 or more: +1/+1, increased Range (far, 1), and cannot be cancelled',
    },
    "14-honoka-A1-n-1": {
        megami: "honoka",
        anotherID: "A1",
        replace: "14-honoka-o-n-1",
        name: "桜の双剣",
        nameEn: "Brands of Sakura",
        nameZh: "樱之双剑",
        nameZhG1: "樱之双剑",
        nameKo: "벚꽃 쌍검",
        ruby: "さくらのそうけん",
        rubyEn: "",
        baseType: "normal",
        exchangableTo: "14-honoka-A1-n-1-ex1",
        type: "attack",
        range: "4-6",
        damage: "2/1",
        text: "【攻撃後】ダスト→自オーラ：1\n【攻撃後】この「桜の双剣」を追加札の「影の両手」と交換する。そうした場合、その「影の両手」を山札の底に置いてもよい。",
        textZh: "【攻击后】虚→1→自装\n【攻击后】将这张『樱之双剑』与追加牌区的『影之两手』交换。若如此做，则你可以将『影之两手』置于你的牌库底。",
        textZhG1: "【攻击后】虚（1）→自装\n【攻击后】将这张『樱之双剑』与追加牌区域中的『影之两手』交换。若如此做，则你可以将『影之两手』置于牌堆底。",
        textKo: "【공격후】더스트→자신 오라：1\n【공격후】이 「벚꽃 쌍검」을 추가패의 「그림자 양손」과 교환한다. 그렇게 했다면 그 「그림자 양손」을 패산 아래에 두어도 좋다.",
        textEn: 'After Attack: Shadow (1)→ Your Aura\n\nAfter Attack: Exchange this card with your set aside "Hands of Shadow". If you do, you may put that card on the bottom of your deck.',
    },
    "14-honoka-A1-n-1-ex1": {
        megami: "honoka",
        anotherID: "A1",
        replace: "",
        name: "影の両手",
        nameEn: "Hands of Shadow",
        nameZh: "影之两手",
        nameZhG1: "独自醒来",
        nameKo: "그림자 양손",
        ruby: "かげのりょうて",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "14-honoka-A1-n-1",
        exchangableTo: "14-honoka-A1-n-1",
        type: "attack",
        range: "3-4",
        damage: "1/0",
        text: "【攻撃後】相手がオーラへのダメージを選んだならば、相手の手札を見てその中から1枚を選び、それを捨て札にする。相手がライフへのダメージを選んだならば、相フレア→ダスト：2\n【攻撃後】この「影の両手」を追加札の「桜の双剣」と交換する。そうした場合、その「桜の双剣」を山札の底に置いてもよい。",
        textZh: "【攻击后】若对手选择由装承受此次伤害，则检视对手的手牌，弃置其中1张。若对手选择由命承受此次伤害，则敌气→2→虚\n【攻击后】将这张『影之两手』与追加牌区的『樱之双剑』交换。若如此做，则你可以将『樱之双剑』置于你的牌库底。",
        textZhG1: "敌装（1）→自装\n开花～根据虚中樱花结晶的数目，将这张『独自醒来』与下述的卡牌交换，并置于牌库底。\n5或以下……『向目标前进』\n6或以上……『直视阴暗面』",
        textKo: "【공격후】상대가 오라에 대한 데미지를 선택했다면 상대의 손패를 보고 그 중에서 1장을 골라서 그것을 버림패로 한다. 상대가 라이프에 대한 데미지를 선택했다면,\n상대 플레어→더스트：2\n【공격후】이 「그림자 양손」을 추가패의 「벚꽃 쌍검」과 교환한다. 그렇게 했다면 그 「벚꽃 쌍검」을 패산 아래에 두어도 좋다.",
        textEn: 'After Attack: If your opponent chose to take damage to Aura, look at their hand. Choose a card from it and put it into their played pile. If they chose to take damage to Life:\nOpponent\'s Flare (2)→ Shadow\n\nAfter Attack: Exchange this card with your set aside "Brands of Sakura". If you do, you may put that card on the bottom of your deck.',
    },
    "14-honoka-A1-s-1": {
        megami: "honoka",
        anotherID: "A1",
        replace: "14-honoka-o-s-1",
        name: "ひとり目覚めて",
        nameEn: "From Slumber She Stirs",
        nameZh: "独自醒来",
        nameZhG1: "影之两手",
        nameKo: "나홀로 눈이 뜨여",
        ruby: "ひとりめざめて",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "相オーラ→自オーラ：1\n開花―ダストに応じてこの「ひとり目覚めて」を以下のカードと交換し、それを山札の底に置く。\n5以下…「標をたどり」\n6以上…「影面見向き」",
        textZh: "敌装→1→自装\n开花～根据虚的数目将这张『独自醒来』与下述的牌交换，并将其置于你的牌库底。\n5或以下…『循向指引』\n6或以上…『窥见暗面』",
        textZhG1: "【攻击后】若对手选择由装承受此次伤害，则检视对手的手牌，从中选择1张弃置。若对手选择由命承受此次伤害，则敌气（2）→虚\n【攻击后】将这张『影之两手』与追加牌区域中的『樱之双剑』交换。若如此做，则你可以将『樱之双剑』置于你的牌堆底。",
        textKo: "상대 오라→자신 오라：1\n개화―더스트에 따라서 이 「나홀로 눈이 뜨여」를 아래의 카드와 교환하고 그것을 패산 밑에 둔다.\n5이하…「자취를 좇아가니」\n6이상…「그림자 바라보니」",
        textEn: "Opponent's Aura (1)→ Your Aura\n\nBloom - Based on the number Sakura tokens on Shadow, exchange this card with the corresponding set aside card, then put that card on the bottom of your deck.\n5 or less: Following the Guided Path\n6 or more: Turning Whither the Light Strikes",
    },
    "14-honoka-A1-s-1-ex1": {
        megami: "honoka",
        anotherID: "A1",
        replace: "14-honoka-o-s-1-ex1",
        name: "標をたどり",
        nameEn: "Following the Guided Path",
        nameZh: "循向指引",
        nameZhG1: "向目标行进",
        nameKo: "자취를 좇아가며",
        ruby: "しるべをたどり",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "14-honoka-A1-s-1",
        type: "action",
        text: "異なる基本動作を合計2回まで行う。\n開花―ダストに応じてこの「標をたどり」を以下のカードと交換し、それを未使用に戻す。\n0………「桜花眩く輝かん」\n1以上…「ふたり震える手を取ろう」",
        textZh: "进行2次不同的基本动作。\n开花～根据虚的数目将这张『循向指引』与下述的牌交换，并将其变为未使用状态。\n0………『樱花光彩夺目』\n1以上…『紧握颤抖双手』",
        textZhG1: "执行至多2次各不相同的基本动作。\n开花～根据虚中的樱花结晶的数目，将这张『向目标行进』与下述的牌进行交换，并将其设为未使用状态。\n0……『樱花正耀眼地闪耀』\n1或以上……『牵起二人颤抖的手』",
        textKo: "서로 다른 기본 동작을 합계 2번까지 한다.\n개화―더스트에 따라서 이 「자취를 좇아가니」를 아래의 카드와 교환하고 그것을 미사용으로 되돌린다.\n0………「벚꽃은 눈부시게 빛나리」\n1以上…「서로의 떨린 손을 맞잡네」",
        textEn: "Perform up to 2 different basic actions.\n\nBloom - Based on the number Sakura tokens on Shadow, exchange this card with the corresponding set aside card, then add that card to your Special cards face-down.\n0: Blinded By Flowers\n1 or more: Hand in Trembling Hand",
    },
    "14-honoka-A1-s-1-ex2": {
        megami: "honoka",
        anotherID: "A1",
        replace: "14-honoka-o-s-1-ex2",
        name: "影面見向き",
        nameEn: "Turning Whither the Light Strikes",
        nameZh: "窥见暗面",
        nameZhG1: "直视阴暗面",
        nameKo: "그림자 바라보며",
        ruby: "かげともみむき",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "14-honoka-A1-s-1",
        type: "action",
        text: "相手は相手のフレア、ライフのいずれかから桜花結晶を1つダストへ移動させる。\n開花―ダストに応じてこの「影面見向き」を以下のカードと交換し、それを未使用に戻す。\n12以上…「旧き虚路を歩みゆく」\n11以下…「ふたり震える手を取ろう」",
        textZh: "对手从敌气或敌命中选择1个樱花结晶移至虚。\n开花～根据虚的数目将这张『窥见暗面』与下述的牌交换，并将其变为未使用状态。\n12或以上…『步向旧日虚路』\n11或以下…『紧握颤抖双手』",
        textZhG1: "对手其气或命中选择1个樱花结晶移至虚。\n开花～根据虚中的樱花结晶的数目，将这张『直视阴暗面』与下述的牌进行交换，并将其设为未使用状态。\n12或以上……『行走于古老的虚路』\n11或以下……『牵起二人颤抖的手』",
        textKo: "상대는 상대의 플레어, 라이프 중에서 벚꽃결정을 1개 더스트로 이동시킨다.\n개화―더스트에 따라서 이「그림자 바라보니」를 아래의 카드와 교환하고 그것을 미사용으로 되돌린다.\n12以上…「오래된 낡은 길을 걸으리く」\n11以下…「서로의 떨린 손을 맞잡네」",
        textEn: "Your opponent moves 1 Sakura token from their Flare or Life to Shadow.\n\nBloom - Based on the number Sakura tokens on Shadow, exchange this card with the corresponding set aside card, then add that card to your Special cards face-down.\n12 or more: Amidst Empty Trails\n11 or less: Hand in Trembling Hand",
    },
    "14-honoka-A1-s-1-ex3": {
        megami: "honoka",
        anotherID: "A1",
        replace: "",
        name: "桜花眩く輝かん",
        nameEn: "Blinded By Flowers",
        nameZh: "樱花光彩夺目",
        nameZhG1: "樱花正耀眼地闪耀",
        nameKo: "벚꽃은 눈부시게 빚나리",
        ruby: "おうかまばゆくかがやかん",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "14-honoka-A1-s-1",
        type: "attack",
        range: "1-9",
        damage: "X/2",
        cost: "1",
        text: "超克\n【常時】Xはこのカードの上の桜花結晶の数に等しい。\n【攻撃後】このカードの上にダストから1つ桜花結晶を置く。\n----\n【再起】桜花結晶がちょうど5つある領域が1つ以上ある。",
        textZh: "超克\n【常时】X等于此牌上的樱花结晶的个数。\n【攻击后】从虚中将1个樱花结晶置于此牌上。\n----\n【再起】樱花结晶恰好为5的区域至少有1个。",
        textZhG1: "超克\n【常时】X等于此牌上的樱花结晶的数目。\n【攻击后】将1个樱花结晶从虚移至此牌上。\n----\n【再起】至少1个区域中的樱花结晶的数目恰为5。",
        textKo: "초극\n【상시】X는 이 카드 위의 벚꽃결정의 수와 같다.\n【공격후】이 카드 위에 더스트에서 벚꽃결정을 1개 올려둔다.\n----\n【재기】벚꽃결정이 딱 5개인 영역이 1개 이상 있다.",
        textEn: "Overwhelm\n\nForced: X is equal to the number of Sakura tokens on this card.\n\nAfter Attack: Move a Sakura token from Shadow to this card.\n\nResurgence: At least 1 zone has exactly 5 Sakura tokens.",
    },
    "14-honoka-A1-s-1-ex4": {
        megami: "honoka",
        anotherID: "A1",
        replace: "",
        name: "ふたり震える手を取ろう",
        nameEn: "Hand in Trembling Hand",
        nameZh: "紧握颤抖双手",
        nameZhG1: "牵起二人颤抖的手",
        nameKo: "서로 떨어진 손을 맞잡네",
        ruby: "ふたりふるえるてをとろう",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "14-honoka-A1-s-1",
        type: "action",
        cost: "5",
        text: "相オーラ→自オーラ：5",
        textZh: "敌装→5→自装",
        textZhG1: "敌装（5）→自装",
        textKo: "상대 오라→자신 오라：5",
        textEn: "Opponent's Aura (5)→ Your Aura",
    },
    "14-honoka-A1-s-1-ex5": {
        megami: "honoka",
        anotherID: "A1",
        replace: "",
        name: "旧き虚路を歩みゆく",
        nameEn: "Amidst Empty Trails",
        nameZh: "步向旧日虚路",
        nameZhG1: "行走于古老的虚路",
        nameKo: "오래된 낡은 길을 걸으리",
        ruby: "ふるきうつろをあゆみゆく",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "14-honoka-A1-s-1",
        type: "action",
        cost: "3",
        text: "相手は次のメインフェイズを失う。\nこのカードを取り除く。",
        textZh: "跳过对手的下个主要阶段。\n将此牌移出游戏。",
        textZhG1: "对手失去下一个主要阶段。然后将此牌移出游戏。",
        textKo: "상대는 다음 메인 페이즈를 잃는다.\n이 카드를 제외한다.",
        textEn: "Your opponent skips their next main phase.\n\nRemove this card from the game.",
        removable: true,
    },
    "19-megumi-o-n-1": {
        megami: "megumi",
        name: "空閃",
        nameEn: "Skygleam",
        nameZh: "空闪",
        nameZhG1: "空闪",
        nameKo: "공섬",
        ruby: "くうせん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-8",
        damage: "2/1",
        text: "【常時】あなたの土壌の種結晶が全て萌芽しているならば、この《攻撃》は+1/+1となる。",
        textZh: "【常时】若你土壤中的种子结晶全都已经萌芽，则此《攻击》得+1/+1。",
        textZhG1: "【常时】若你的土壤中的种子结晶已经全部萌芽，则此《攻击》获得+1/+1。",
        textKo: "【상시】당신의 토양의 씨앗 결정이 전부 발아되었다면, 이 《공격》은 +1/+1 된다.",
        textEn: "Forced: If all your Seed tokens in your Field are sprouted, this attack gets +1/+1.",
    },
    "19-megumi-o-n-2": {
        megami: "megumi",
        name: "打擲",
        nameEn: "Thresh",
        nameZh: "痛打",
        nameZhG1: "打掷",
        nameKo: "타척",
        ruby: "ちょうちゃく",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "2/1",
        text: "【常時】あなたの付与札に種結晶があるならば、この《攻撃》は+1/+1となる。",
        textZh: "【常时】若你的付与区中有种子结晶，则此《攻击》得+1/+1。",
        textZhG1: "【常时】若你的付与牌上有种子结晶，则此《攻击》获得+1/+1。",
        textKo: "【상시】당신의 부여패에 씨앗 결정이 있다면, 이 《공격》은 +1/+1 된다.",
        textEn: "Forced: If you have an Enhancement in play with a Seed token, this attack gets +1/+1.",
    },
    "19-megumi-o-n-3": {
        megami: "megumi",
        name: "殻打ち",
        nameEn: "Flail",
        nameZh: "打壳",
        nameZhG1: "脱粒",
        nameKo: "껍질치기",
        ruby: "からうち",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        damage: "2/1",
        text: "【攻撃後】このターンにあなたが次に使用する他のメガミの《付与》カードは生育2を得る。",
        textZh: "【攻击后】本回合你的下一张其他女神的《付于》牌得生长2。",
        textZhG1: "【攻击后】本回合内你使用的下一张其他女神的《付与》牌获得生长2。",
        textKo: "【공격후】이 턴에 당신이 다음에 사용하는 다른 여신의 《부여》 카드는 생육2를 얻는다.",
        textEn: "After Attack: The next Enhancement card you play from a non-Megumi Megami this turn gains Growth 2.",
    },
    "19-megumi-o-n-4": {
        megami: "megumi",
        name: "棹穿ち",
        nameEn: "Pommel Thrust",
        nameZh: "穿刺",
        nameZhG1: "穿竹",
        nameKo: "장대 찌르기",
        ruby: "さおうがち",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "2-4",
        damage: "1/1",
        text: "【常時】この《攻撃》のダメージにより移動する桜花結晶は、ダストやフレアではなく間合に移動する。\n【攻撃後】あなたが付与札を出しているならば、このターンに相手が行う次の基本動作は効果を解決しない。",
        textZh: "【常时】因此《攻击》造成的伤害将移动的樱花结晶改为移动至距。\n【攻击后】若你的付于区中有展开中的付于牌，则本回合对手进行的下次基本动作不会被结算。",
        textZhG1: "【常时】若此《攻击》对对手造成了伤害，则不将因结算伤害移动的樱花结晶移至气或虚，而改为移至距。\n【攻击后】若你的付与区存在展开中的付与牌，则不结算本回合内对手执行的下一次基本动作的效果。",
        textKo: "【상시】이 《공격》의 데미지에 의해서 이동하는 벚꽃 결정은 더스트나 플레어가 아닌 간격으로 이동한다.\n【공격후】당신이 부여패를 내놓고 있다면, 이 턴에 상대가 하는 다음 기본 동작은 효과를 해결하지 않는다.",
        textEn: "Forced: Damage dealt by this attack moves Sakura tokens to Distance instead of to Shadow or to Flare.\n\nAfter Attack: If you have an Enhancement in play, your opponent's next basic action this turn resolves with no effect.",
    },
    "19-megumi-o-n-5": {
        megami: "megumi",
        name: "葦",
        nameEn: "Reed",
        nameZh: "芦苇",
        nameZhG1: "苇草",
        nameKo: "갈대",
        ruby: "あし",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "1",
        growth: 1,
        text: "生育1\n【展開時】ダスト→間合：1\n【展開中】現在の間合はX増加し、達人の間合はX大きくなる。Xはこの付与札の上の種結晶の個数に等しい。",
        textZh: "生长1\n【展开时】虚→1→距\n【展开中】当前距离增大X，达人距离的值增大X。X等于此付于牌上的种子结晶的数目。",
        textZhG1: "生长1\n【展开时】虚（1）→距。\n【展开中】当前的距离增大X，达人距离增大X。X等于这张付与牌上种子结晶的个数。",
        textKo: "생육1\n【전개시】더스트→간격：1\n【전개중】현재 간격은 X만큼 증가하고 달인의 간격은 X만큼 크게 된다. X는 이 부여패 위의 씨앗 결정의 개수에 해당된다.",
        textEn: "Growth 1\n\nInitialize: Shadow (1)→ Distance\n\nOngoing: The current Distance and the size of the Mastery Zone are each increased by X. X is the number of Seed tokens on this card.",
    },
    "19-megumi-o-n-6": {
        megami: "megumi",
        name: "鳳仙花",
        nameEn: "Balsam",
        nameZh: "凤仙花",
        nameZhG1: "凤仙花",
        nameKo: "봉선화",
        ruby: "ほうせんか",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "1",
        growth: 2,
        text: "生育2　隙\n【展開中】相手のメインフェイズの開始時に攻撃『適正距離3-5、2/1』を行う。\nあなたのメインフェイズの開始時に攻撃『適正距離1-3、2/1』を行う。\n【破棄時】相手を畏縮させる。",
        textZh: "生长2　破绽\n【展开中】对手的主要阶段开始时，进行一次“攻击距离3-5、伤害2/1”的攻击。\n你的主要阶段开始时，进行一次“攻击距离1-3、伤害2/1”的攻击。\n【破弃时】令对手畏缩。",
        textZhG1: "生长2 破绽\n【展开中】对手的主要阶段开始时，进行一次“攻击距离3-5，伤害2/1”的攻击。你的主要阶段开始时，进行一次“攻击距离1-3，伤害2/1”的攻击。\n【破弃时】对手畏缩。",
        textKo: "생육2　틈\n【전개중】상대의 메인 페이즈 개시 시에 공격 『적정거리 3-5, 2/1』를 한다.\n당신의 메인 페이즈 개시 시에 공격 『적정거리 1-3, 2/1』를 한다.\n【파기시】상대를 위축시킨다.",
        textEn: 'Growth 2    Unguarded\n\nOngoing: At the beginning of your opponent\'s main phase, you attack with "Range: 3-5, Damage: 2/1". At the beginning of your main phase, you attack with "Range: 1-3, Damage: 2/1".\n\nDisenchant: Flinch your opponent.',
    },
    "19-megumi-o-n-7": {
        megami: "megumi",
        name: "野茨",
        nameEn: "Multiflora",
        nameZh: "野蔷薇",
        nameZhG1: "野蔷薇",
        nameKo: "찔레꽃",
        ruby: "のいばら",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        subType: "fullpower",
        capacity: "0",
        growth: 2,
        text: "生育2\n【展開時/展開中】展開時とあなたの終了フェイズに基本動作を1回行ってもよい。\n【展開中】相手が各ターンに初めて間合にある桜花結晶を動かした時、ダスト→間合：1\n【展開中】相手のターンにこの付与札の上の桜花結晶は移動しない。",
        textZh: "生长2\n【展开时/展开中】展开时及你的结束阶段各可以进行1次基本动作。\n【展开中】对手每回合第一次移动距中的樱花结晶时：虚→1→距\n【展开中】对手的回合内，此付于牌上的樱花结晶不会移动。",
        textZhG1: "生长2\n【展开时/展开中】此付与牌展开时和你的结束阶段开始时，你可以执行1次基本动作。\n【展开中】对手每个回合内第一次将距中的樱花结晶移出距时，\n虚（1）→距\n【展开中】对手的回合内不能移除此牌上的樱花结晶。",
        textKo: "생육2\n【전개시/전개중】전개시와 당신의 종료 페이즈에 기본 동작을 1번 해도 좋다.\n【전개중】상대가 각 최초의 턴마다 처음으로 간격에 있는 벚꽃 결정을 움직일 때마다, 더스트→간격：1\n【전개중】상대의 턴에 이 부여패 위에 있는 벚꽃 결정은 이동하지 않는다.",
        textEn: "Growth 2\n\nInitialize/Ongoing: When this card Initializes and at the end of your turn, you may perform a basic action.\n\nOngoing: The first time each turn your opponent moves Sakura tokens from Distance, Shadow (1)→ Distance.\n\nOngoing: Sakura tokens cannot leave this card on your opponent's turn.",
    },
    "19-megumi-o-s-1": {
        megami: "megumi",
        name: "因果律の根",
        nameEn: "Root of Causality",
        nameZh: "因果律之根",
        nameZhG1: "因果律之根",
        nameKo: "인과율의 뿌리",
        ruby: "いんがりつのね",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-7",
        damage: "1/1",
        cost: "1",
        text: "【攻撃後】あなたの土壌の種結晶を1つ萌芽させる。\n----\n【再起】あなたの土壌に萌芽した種結晶がない。",
        textZh: "【攻击后】令你土壤中的1个种子结晶萌芽。\n----\n【再起】你土壤中没有萌芽了的种子结晶。",
        textZhG1: "【攻击后】将你的土壤中的1个种子结晶变为萌芽状态。\n----\n【再起】你的土壤中没有处于萌芽状态的种子结晶。",
        textKo: "【공격후】당신의 토양의 씨앗 결정을 1개 발아시킨다.\n----\n【재기】당신의 토양에 발아된 씨앗 결정이 없다.",
        textEn: "After Attack: Sprout a Seed token in your Field.\n\nResurgence: There are no sprouted Seed tokens in your field.",
    },
    "19-megumi-o-s-2": {
        megami: "megumi",
        name: "可能性の枝",
        nameEn: "Branch of Possibility",
        nameZh: "可能性之枝",
        nameZhG1: "可能性之枝",
        nameKo: "가능성의 가지",
        ruby: "かのうせいのえだ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "0/1",
        cost: "3",
        text: "【常時】Xはあなたの付与札にある種結晶の個数の合計に等しい。\n【常時】この《攻撃》は+X/+0となる。\n【攻撃後】対応した《攻撃》は-X/+0となる。",
        textZh: "【常时】X等于你付于区中展开中的付于牌上的种子结晶的数目。\n【常时】此《攻击》得+X/+0。\n【攻击后】被对应的《攻击》得-X/+0。",
        textZhG1: "【常时】X等于置于你的展开中的付与牌上的种子结晶的总数。\n【常时】此《攻击》获得+X/+0。\n【攻击后】被对应的《攻击》获得-X/+0。",
        textKo: "【상시】X는 당신의 부여패에 있는 씨앗 결정의 개수에 해당된다.\n【상시】이 《공격》은 +X/+0 된다.\n【공격후】대응한 《공격》은 -X/+0 된다.",
        textEn: "Forced: X is the number of Seed tokens on your Enhancements in play.\n\nForced: This attack gets +X/+0.\n\nAfter Attack: The attack this card was played as a Reaction to gets -X/+0.",
    },
    "19-megumi-o-s-3": {
        megami: "megumi",
        name: "結末の果実",
        nameEn: "Fruit of Finality",
        nameZh: "结束的果实",
        nameZhG1: "终结之果实",
        nameKo: "결말의 과실",
        ruby: "けつまつのかじつ",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "2",
        cost: "4",
        text: "【展開中】この付与札の上の桜花結晶はメインフェイズに移動しない。開始フェイズの処理であなたの他の付与札から桜花結晶がダストへと送られるならば、それは代わりにこの付与札へと移動する。\n【展開中】この付与札の上の種結晶が5個になったターンの終了フェイズに、攻撃『適正距離5、5/5、不可避、【常時】この《攻撃》は打ち消されない』を行い、このカードの上の桜花結晶を全てダストに送る。",
        textZh: "【展开中】此付于牌上的樱花结晶不能在主要阶段被移动。因为准备阶段的步骤需要把你的其他付于牌上的樱花结晶移到虚的时候，改为移动到此付于牌上。\n【展开中】此付于牌上的种子结晶数到达5个的回合的结束阶段，进行一次“攻击距离5、伤害5/5、不可被闪避、【常时】此《攻击》不会被打消”的攻击，然后把此卡上的樱花结晶全部移至虚。",
        textZhG1: "【展开中】主要阶段内不能移除此牌上的樱花结晶。准备阶段移除所有付与牌上的樱花结晶时，若你的其他付与牌上的樱花结晶将要移至虚，则改为移至此牌上。\n【展开中】若此牌上的种子结晶的数目变为5，则该回合的结束阶段开始时，进行一次“攻击距离5，伤害5/5 , 不可避，【常时】 此《攻击》不可被打消”的攻击，然后将此牌上的所有樱花结晶移至虚。",
        textKo: "【전개중】이 부여패 위의 벚꽃 결정은 메인 페이즈에 이동하지 않는다. 개시 페이즈의 처리에서 당신의 다른 부여패에서 벚꽃 결정이 더스트로 옮겨진다면, 대신에서 이 부여패로 이동시킨다.\n【전개중】이 부여패 위의 씨앗 결정이 5개가 된 턴의 종료 페이즈에 공격 『적정거리5, 5/5, 불가피, 【상시】이 《공격》은 무효화되지 않는다』를 하고 이 카드 위의 벚꽃 결정을 전부 더스트로 보낸다.",
        textEn: 'Ongoing: Sakura tokens cannot leave this card during a main phase. If a Sakura token would be moved from one of your other Enhancements in play to Shadow as part of the beginning of turn process, move it to this card instead.\n\nOngoing: At the end of either player\'s turn, if there were ever 5 Seed tokens on this card this turn, you attack with "Range: 5, Damage: 5/5, Unavoidable, Forced: This attack cannot be cancelled.", then move all Sakura tokens from this card to Shadow.',
    },
    "19-megumi-o-s-4": {
        megami: "megumi",
        name: "瀧河希の掌",
        nameEn: "Megumi's Spreading Palm",
        nameZh: "泷河希之掌",
        nameZhG1: "泷河希之掌",
        nameKo: "타키가와 메구미의 손바닥",
        ruby: "たきがわめぐみのたなごころ",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "0",
        growth: 5,
        cost: "3",
        text: "生育5\n【展開中】各ターンにあなたが初めて行うオーラへのダメージが3以下の《攻撃》は+1/+1となる。",
        textZh: "生长5\n【展开中】每回合你的第一次对装伤害不大于3的《攻击》得+1/+1。",
        textZhG1: "生长5\n【展开中】每个回合内你进行的第一次对装伤害小于等于3的《攻击》获得+1/+1。",
        textKo: "생육5\n【전개중】각 턴에 당신이 처음으로 하는 오라 데미지가 3이하의 《공격》은 +1/+1 된다.",
        textEn: "Growth 5\n\nOngoing: The first attack you make each turn that has 3 or less Damage to Aura gets +1/+1.",
    },
    "20-kanawe-o-n-1": {
        megami: "kanawe",
        name: "空想",
        nameEn: "Conception",
        nameZh: "空想",
        nameZhG1: "空想",
        nameKo: "공상",
        ruby: "くうそう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "0-10",
        damage: "X/1",
        text: "【常時】Xは現在の幕の値の半分（切り上げ）に等しい。\n【攻撃後】現在の幕の値が偶数ならば、間合⇔ダスト：1",
        textZh: "【常时】X等于现在的幕的值的一半(向上取整)。\n【攻击后】现在的幕的值是偶数的话：距↔1↔虚",
        textZhG1: "【常时】X等于当前剧幕的值的一半（向上取整）。\n【攻击后】若当前剧幕的值为偶数，则\n距（1）⇔虚",
        textKo: "【상시】X는 현재의 막의 수치의 절반(소수점 올림)과 같다.\n【공격후】현재의 막의 수치가 짝수라면,\n간격⇔더스트：1",
        textEn: "Forced: X is equal to half the value of the current Act, rounded up.\n\nAfter Attack: If the value of the current Act is even,\nDistance (1)⇔ Shadow",
    },
    "20-kanawe-o-n-2": {
        megami: "kanawe",
        name: "脚本化",
        nameEn: "Composition",
        nameZh: "剧本化",
        nameZhG1: "脚本化",
        nameKo: "각본화",
        ruby: "きゃくほんか",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-9",
        damage: "1/1",
        text: "【攻撃後】追加札から構想カードを1枚準備してもよい。\n【常時】あなたの終了フェイズにこのカードを捨て札から山札の底に置いてもよい。",
        textZh: "【攻击后】你可以从追加牌区的构想牌中准备1张构想。\n【常时】在你的结束阶段你可以将此牌从弃牌放到牌库底。",
        textZhG1: "【攻击后】你可以从追加区准备1张构想牌。\n【常时】你的结束阶段开始时，你可以将弃牌区中的此牌置于牌库底。",
        textKo: "【공격후】추가패에서 구상 카드를 1장 준비해도 좋다.\n【상시】당신의 종료 페이즈에 이 카드가 버림패에 있다면 패산의 아래에 두어도 좋다.あなたの終了フェイズにこのカードを捨て札から山札の底に置いてもよい。",
        textEn: "After Attack: You may prepare one of your set aside Plot cards.\n\nForced: At the end of your turn, you may move this card from your played pile to the bottom of your deck.",
    },
    "20-kanawe-o-n-3": {
        megami: "kanawe",
        name: "演出化",
        nameEn: "Staging",
        nameZh: "演出化",
        nameZhG1: "演出化",
        nameKo: "연출화",
        ruby: "えんしゅつか",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-3",
        damage: "2/1",
        text: "【常時】現在の幕の色が紫ならば、この《攻撃》は+0/+1となる。\n【攻撃後】あなたはこのターンに構想を進められない。",
        textZh: "【常时】现在的幕的颜色是《紫》的话，此攻击得+0/+1。\n【攻击后】你在这个回合构想无法推进。",
        textZhG1: "【常时】若当前剧幕的颜色为【紫】，则此《攻击》获得+0/+1。\n【攻击后】本回合内你不能达成构想。",
        textKo: "【상시】현재의 막의 색이 보라색이라면, 이 《공격》은 +0/+1된다.\n【공격후】당신은 이 턴에 구상을 진행시킬 수 없다.あなたはこのターンに構想を進められない。",
        textEn: "Forced: If the current Act is Purple, this attack gets +0/+1.\n\nAfter Attack: Your Plots cannot progress this turn.",
    },
    "20-kanawe-o-n-4": {
        megami: "kanawe",
        name: "断行",
        nameEn: "Performance",
        nameZh: "断行",
        nameZhG1: "断行",
        nameKo: "단행",
        ruby: "だんこう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "基本動作《纏い》を1回行ってもよい。その後、《纏い》以外の基本動作を1回行ってもよい。\n全力化：追加札または達成済から構想カードを1枚準備してもよい。相手を畏縮させる。",
        textZh: "你可以进行1次基本动作《装附》，然后你可以进行1次《装附》以外的基本动作。\n全力化：你可以从追加牌区或者已达成的构想牌里准备1张构想。令对手畏缩。",
        textZhG1: "你可以执行1次基本动作《装附》。然后你可以执行1次《装附》以外的基本动作。\n全力化：你可以从追加区或已达成区域准备1张构想牌。对手畏缩。",
        textKo: "기본 동작 《휘감기》를 1번 해도 좋다. 그 후, 《휘감기》 이외의 기본 동작을 1번 해도 좋다.\n전력화：추가패 또는 달성된 구상 카드를 1장 준비해도 좋다. 상대를 위축시킨다.",
        textEn: "You may perform a Recover basic action, then you may perform a non-Recover basic action.\n\nAll-Out: You may prepare one of your set aside or completed Plot cards. Flinch your opponent.",
    },
    "20-kanawe-o-n-5": {
        megami: "kanawe",
        name: "残光",
        nameEn: "Afterglow",
        nameZh: "残光",
        nameZhG1: "残光",
        nameKo: "잔광",
        ruby: "ざんこう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "相手の手札を見てその中から1枚を選び、それを山札の底に置く。相手は集中力を1得る。",
        textAdditional: "（自分の手札を右クリックすることで、手札を相手プレイヤーに公開することが可能）",
        textZh: "检视对手的手牌，选其中1张置于牌库底。对手获得1点集中力。",
        textZhG1: "查看对手手牌，从中选择1张置于对手的牌堆底。对手获得1点集中力。",
        textZhAdditional: "（右键自己的手牌区可以将手牌展示给对方玩家）",
        textZhG1Additional: "（右键自己的手牌区可以将手牌展示给对方玩家）",
        textKo: "상대의 손패를 보고 그 중에서 1장을 고르고 그것을 패산의 밑에 둔다. 상대는 집중력을 1 얻는다.",
        textKoAdditional: "(자신의 손패를 우클릭해서 손패를 상대 플레이어에게 공개할 수 있음)",
        textEn: "Look at your opponent's hand. Choose a card from it and put it at the bottom of their deck. They gain 1 Vigor.",
        textEnAdditional: "(To reveal your hand, right-click on the hand area.)",
    },
    "20-kanawe-o-n-6": {
        megami: "kanawe",
        name: "即興",
        nameEn: "Improvise",
        nameZh: "即兴",
        nameZhG1: "即兴",
        nameKo: "즉흥",
        ruby: "そっきょう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "手札から他のメガミの全力でない《攻撃》カードを1枚使用してもよい。このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。その後、現在の幕の色が緑かつそのカードが捨て札にあるならば、そのカードを手札に戻す。",
        textZh: "从手牌中选1张其他女神的非《全力》的《攻击》牌，你可以使用之。若此牌对应了一个《攻击》，则视为所选择的牌也对应了那个《攻击》。这之后，如果现在的幕的颜色是《绿》的话，将所选这的那张牌移回手牌。",
        textZhG1: "你可以从手牌中使用1张其他女神的非全力的《攻击》牌。若此牌对应了一个《攻击》，则视为所使用的牌也对应了该《攻击》。然后若当前剧幕的颜色为【绿】且该牌位于弃牌区，则将该牌置入手牌。",
        textKo: "손패에서 다른 여신의 전력이 아닌 《공격》 카드를 1장 사용해도 좋다. 이 카드로 대응하고 있는 《공격》이 있다면, 사용된 카드는 그것에 대응한 것처럼 취급한다. 그 후, 현재의 막의 색이 녹색에다가 그 카드가 버림패에 있다면, 그 카드를 손패로 되돌린다.",
        textEn: "You may choose a non-Kanawe, non-Throughout Attack card in your hand and play it. If this card was played as a Reaction to an attack, treat that card as if it were played as a Reaction to that attack. Then, if the current Act is Green and that card is in your played pile, return that card to your hand.",
    },
    "20-kanawe-o-n-7": {
        megami: "kanawe",
        name: "封殺",
        nameEn: "Censor",
        nameZh: "封杀",
        nameZhG1: "封杀",
        nameKo: "봉살",
        ruby: "ふうさつ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開時】カードの名前を1つ宣言する。\n【展開中】相手のターン中、相手は宣言された名前を持つ切札を使用できない。現在の幕の色が赤ならば、宣言された名前を持つ通常札も使用できない。\n【破棄時】あなたは集中力を1得る。",
        textZh: "【展开时】宣告1个卡牌名。\n【展开中】对手的回合中，对手不能使用具宣告的卡牌名的王牌。如果现在的幕的颜色是《红》的话，对手也不能使用具宣告的卡牌名的通常牌。\n【破弃时】你获得1点集中力。",
        textZhG1: "【展开时】宣言1个牌名。\n【展开中】对手的回合内，对手不能使用具有你所宣言的名称的王牌。若当前剧幕的颜色为【红】，对手不能使用具有你所宣言的名称的通常牌。\n【破弃时】你获得1点集中力。",
        textKo: "【전개시】카드의 이름을 1개 선언한다.\n【전개중】상대의 턴 중에 상대는 선언된 이름을 가진 비장패를 사용할 수 없다. 현재의 막의 색이 적색이라면 선언된 이름을 가진 통상패도 사용할 수 없다.\n【파기시】당신은 집중력을 1 얻는다.",
        textEn: "Initialize: Name a card.\n\nOngoing: During your opponent's turn, they cannot play Special cards with that name. If the current Act is Red, they also cannot play Normal cards with that name.\n\nDisenchant: Gain 1 Vigor.",
    },
    "20-kanawe-o-s-1": {
        megami: "kanawe",
        name: "たまゆらふみ",
        nameEn: "Action to the Word",
        nameZh: "玉响一瞬书成文",
        nameZhG1: "玉响书",
        nameKo: "타마유라후미",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "以下のどちらかを選ぶ。\n・追加札から構想カードを1枚準備する。このターンの終了フェイズにこのカードを未使用に戻す。\n・達成済から構想カードを1枚準備する。",
        textZh: "选择以下一项。\n●从追加牌区的构想牌中准备1张构想。这个回合的结束阶段让此牌变回未使用的状态。\n●从已达成的构想牌中准备1张构想。",
        textZhG1: "选择1项：\n·从追加区准备1张构想牌。本回合的结束阶段开始时，将此牌变为未使用状态。\n·从已达成区域准备1张构想牌。",
        textKo: "아래 중 1개를 고른다.\n・추가패에서 구상 카드를 1장 준비한다. 이 턴 종료 페이즈에 이 카드를 미사용으로 되돌린다.\n・달성된 구상 카드를 1장 준비한다.",
        textEn: "Choose one:\n・Prepare one of your set aside Plot cards. At the end of this turn, turn this card face-down.\n・Prepare one of your completed Plot cards.",
    },
    "20-kanawe-o-s-2": {
        megami: "kanawe",
        name: "ほかげきらぼし",
        nameEn: "Master of Fates",
        nameZh: "灯影簇宛若繁星",
        nameZhG1: "灯影辉星",
        nameKo: "호카게키라보시",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "X",
        text: "【常時】Xは現在の幕の値に等しい。\n基本動作を1回行う。その後、現在の幕の色が緑、赤、紫のいずれかならば、その効果を得る。\n----\n【即再起】次の幕へ向かう。",
        textZh: "【常时】X等于现在的幕的值。\n进行1次基本动作。然后，现在的幕的颜色是《绿》、《红》、《紫》中的任一种的话，获得对应的幕效果。\n----\n【即再起】进入下一幕。",
        textZhG1: "【常时】X等于当前剧幕的值。\n执行1次基本动作。然后若当前剧幕的颜色为【绿】、【红】、【紫】之一，则结算其对应的效果。\n----\n【即再起】进入下一个剧幕。",
        textKo: "【상시】X는 현재의 막의 수치와 같다.\n기본 동작을 1번 한다. 그 후, 현재의 막의 색이 보라색, 적색, 녹색 중 하나라면 그 효과를 얻는다.\n----\n【즉재기】다음 막으로 진행된다.",
        textEn: "Forced: X is the value of the current Act.\n\nPerform a basic action. Then, if the current Act is Green, Red, or Purple, resolve that color's effect.\n\nImmediate Resurgence: Advance to the next Act.",
    },
    "20-kanawe-o-s-3": {
        megami: "kanawe",
        name: "あたらよちよに",
        nameEn: "Better Part of Valor",
        nameZh: "虽千代可惜夜短",
        nameZhG1: "可惜夜续千代",
        nameKo: "아타라요치요니",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-4",
        damage: "2/1",
        cost: "4",
        text: "【攻撃後】対応した《攻撃》を打ち消す。\nその《攻撃》が通常札ならば、そのカードを山札の上に置く。その《攻撃》が切札ならば、そのカードを未使用に戻す。",
        textZh: "【攻击后】打消被对应的《攻击》。那个《攻击》是通常牌的话，将其置于牌库顶；那个《攻击》是王牌的话，将其变回未使用的状态。",
        textZhG1: "【攻击后】打消被对应的《攻击》。若被对应的《攻击》为通常牌，则将该牌置于牌库顶。若被对应的《攻击》为王牌，则将该牌变为未使用状态。",
        textKo: "【공격후】대응한 《공격》을 무효화한다.\n그 《공격》이 통상패라면 그 카드를 패산 위로 되돌린다. 그 《공격》이 비장패라면 그 카드를 미사용으로 되돌린다.",
        textEn: "After Attack: Cancel the attack this card was played as a Reaction to. If that attack was a Normal, put that card on the top of its owner's deck. If that attack was a Special, turn that card face-down.",
    },
    "20-kanawe-o-s-4": {
        megami: "kanawe",
        name: "はらからのあまつそら",
        nameEn: "The World's a Stage",
        nameZh: "同胞彼方之天穹",
        nameZhG1: "同胞的天空",
        nameKo: "하라카라노아마츠소라",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "あなたの手札から通常札を1枚公開し、それを取り除いてもよい。そうした場合、眼前構築で選んでいないあなたの通常札1枚を公開し、それを手札に加える。\nこのカードを取り除き、眼前構築で選んでいないあなたの切札1枚を未使用で得る。",
        textAdditional: "（表向きの状態で右クリックすることで効果を発動可能）",
        textZh: "你可以展示你的1张手牌里的通常牌并将其移出游戏，若如此做，展示1张眼前构筑时没有选用的通常牌，并将其加入手牌。\n将此牌移出游戏，以未使用的状态获得1张眼前构筑时没有选用的王牌。",
        textZhG1: "你可以从手牌中展示1张通常牌并将其移出游戏。若如此做，则展示1张你眼前构筑时没有选用的通常牌，将其加入手牌。\n将此牌移出游戏，然后将1张你眼前构筑时没有选用的王牌以未使用状态加入王牌。",
        textZhAdditional: "（面朝上的状态右键就可以发动这个效果）",
        textZhG1Additional: "（面朝上的状态右键就可以发动这个效果）",
        textKo: "당신의 손패에서 통상패를 1장 공개하고 그것을 제외해도 좋다. 그렇게 했다면 안전구축에서 고르지 않았던 당신의 통상패 1장을 공개하고 그것을 손패에 더한다.\n이 카드를 제외하고 안전구축에서 고르지 않은 당신의 비장패 1장을 미사용으로 얻는다.",
        textKoAdditional: "(앞면 표시 상태로 우클릭해서 효과를 발동할 수 있음)",
        textEn: "You may reveal a Normal card in your hand and remove it from the game. If you do, choose a Normal card you did not include in your deck during deck construction, reveal it, and add it to your hand.\n\nRemove this card from the game. Add a Special card you did not include in your deck during deck construction and add it to your Special cards, face-down.",
        textEnAdditional: "(To use this effect, right-click on this card while it is face-up.)",
    },
    "20-kanawe-o-p-01": {
        megami: "kanawe",
        name: "殺陣",
        nameEn: "Stage Combat",
        nameZh: "武打",
        nameZhG1: "杀阵",
        nameKo: "살진",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "2",
        text: "このターンに《攻撃》か対応が合計2回以上行われた。\n（達成回数：2）",
        textZh: "这个回合《攻击》和对应合计进行了至少2次。\n（所需完成次数：2）",
        textZhG1: "本回合内双方进行了至少2次《攻击》或对应。\n（达成次数：2次）",
        textKo: "이 턴에 《공격》이나 대응이 합계 2번 이상 이루어졌다.\n（달성회수：2）",
        textEn: "2 or more total attacks and Reactions to attacks were made this turn.\n(Required number of achievements: 2)",
    },
    "20-kanawe-o-p-01-will": {
        megami: "kanawe",
        name: "殺陣",
        nameEn: "Stage Combat",
        nameZh: "武打",
        nameZhG1: "杀阵",
        nameKo: "살진",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "1",
        text: "このターンに《攻撃》か対応が合計5回以上行われた。\n（達成回数：1）",
        textZh: "这个回合《攻击》和对应合计进行了至少5次。\n（所需完成次数：1）",
        textZhG1: "本回合内双方进行了至少5次《攻击》或对应。\n（达成次数：1次）",
        textKo: "이 턴에 《공격》이나 대응이 합계 5번 이상 이루어졌다.\n（달성회수：1）",
        textEn: "5 or more total attacks and Reactions to attacks were made this turn.\n(Required number of achievements: 1)",
    },
    "20-kanawe-o-p-02": {
        megami: "kanawe",
        name: "桜飛沫",
        nameEn: "Shower of Petals",
        nameZh: "樱飞沫",
        nameZhG1: "樱飞沫",
        nameKo: "벚꽃연막",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "1",
        text: "このターンに3個以上の桜花結晶が付与札以外の領域へ一度に移動した。\n（達成回数：1）",
        textZh: "这个回合有至少3个的樱花结晶一次性移向付与牌区以外的区域。\n（所需完成次数：1）",
        textZhG1: "本回合内有至少3个樱花结晶一次性移动到了付与区以外的区域。\n（达成次数：1次）",
        textKo: "이 턴에 3개 이상의 벚꽃결정이 부여패 이외의 영역으로 한 번에 이동했다.\n（달성회수：1）",
        textEn: "3 or more Sakura tokens were moved simultaneously this turn to zones other than an Enhancement in play.\n(Required number of achievements: 1)",
    },
    "20-kanawe-o-p-02-will": {
        megami: "kanawe",
        name: "桜飛沫",
        nameEn: "Shower of Petals",
        nameZh: "樱飞沫",
        nameZhG1: "樱飞沫",
        nameKo: "벚꽃연막",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "1",
        text: "このターンに5個以上の桜花結晶が一度に移動した。\n（達成回数：1）",
        textZh: "这个回合一次性移动了至少5个的樱花结晶。\n（所需完成次数：1）",
        textZhG1: "本回合内有至少5个樱花结晶一次性移动到了其他区域。\n（达成次数：1次）",
        textKo: "이 턴에 5개 이상의 벚꽃결정이 한 번에 이동했다.\n（달성회수：1）",
        textEn: "5 or more Sakura tokens were moved simultaneously this turn.\n(Required number of achievements: 1)",
    },
    "20-kanawe-o-p-03": {
        megami: "kanawe",
        name: "鼓動",
        nameEn: "Beat",
        nameZh: "鼓动",
        nameZhG1: "鼓动",
        nameKo: "고동",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "2",
        text: "このターンにライフが変化した。\n（達成回数：2）",
        textZh: "这个回合自命或敌命发生过变化。\n（所需完成次数：2）",
        textZhG1: "本回合内某一方命中的樱花结晶的数目发生变化。\n（达成次数：2次）",
        textKo: "이 턴에 라이프가 변화했다.\n（달성회수：2）",
        textEn: "A player's Life changed this turn.\n(Required number of achievements: 2)",
    },
    "20-kanawe-o-p-03-will": {
        megami: "kanawe",
        name: "鼓動",
        nameEn: "Beat",
        nameZh: "鼓动",
        nameZhG1: "鼓动",
        nameKo: "고동",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "1",
        text: "このターンにライフが一度に2以上変化した。\n（達成回数：1）",
        textZh: "这个回合自命或敌命发生过一次性至少2点的变化。\n（所需完成次数：1）",
        textZhG1: "本回合内某一方命中的樱花结晶的数目一次性变化了2及以上。\n（达成次数：1次）",
        textKo: "이 턴에 라이프가 한 번에 2이상 변화했다.\n（달성회수：1）",
        textEn: "A player's Life changed by 2 or more at once this turn.\n(Required number of achievements: 1)",
    },
    "20-kanawe-o-p-04": {
        megami: "kanawe",
        name: "明転",
        nameEn: "A Vista",
        nameZh: "明转",
        nameZhG1: "明转",
        nameKo: "명전",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "2",
        text: "このターンに矢印効果を解決した。\n（達成回数：2）",
        textZh: "这个回合结算过箭头效果。\n（所需完成次数：2）",
        textZhG1: "本回合内结算了箭头效果。\n（达成次数：2次）",
        textKo: "이 턴에 화살표 효과를 해결했다.\n（달성회수：2）",
        textEn: "An arrow effect was resolved this turn.\n(Required number of achievements: 2)",
    },
    "20-kanawe-o-p-04-will": {
        megami: "kanawe",
        name: "明転",
        nameEn: "A Vista",
        nameZh: "明转",
        nameZhG1: "明转",
        nameKo: "명전",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "2",
        text: "このターンに矢印効果を2回以上解決した。\n（達成回数：2）",
        textZh: "这个回合结算过至少2次箭头效果。\n（所需完成次数：2）",
        textZhG1: "本回合内结算了至少2次箭头效果。\n（达成次数：2次）",
        textKo: "이 턴에 화살표 효과를 2번 해결했다.\n（달성회수：2）",
        textEn: "2 or more arrow effects were resolved this turn.\n(Required number of achievements: 2)",
    },
    "20-kanawe-o-p-05": {
        megami: "kanawe",
        name: "粒立て",
        nameEn: "Line Read",
        nameZh: "出类拔萃",
        nameZhG1: "战栗",
        nameKo: "강조하기",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "1",
        text: "このターンに準備されたのでなく、このターンに《全力》カードが使用された。\n（達成回数：1）",
        textZh: "不是这个回合准备的构想，并且这个回合使用了《全力》牌。\n（所需完成次数：1）",
        textZhG1: "本回合内没有准备构想，且本回合内使用了《全力》卡。\n（达成次数：1次）",
        textKo: "이 턴에 준비되지 않았고, 이 턴에 《전력》 카드가 사용되었다.\n（달성회수：1）",
        textEn: "This Plot was not prepared this turn, and a Throughout card was played this turn.\n(Required number of achievements: 1)",
    },
    "20-kanawe-o-p-05-will": {
        megami: "kanawe",
        name: "粒立て",
        nameEn: "Line Read",
        nameZh: "出类拔萃",
        nameZhG1: "战栗",
        nameKo: "강조하기",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "2",
        text: "このターンに準備されたのでなく、このターンに《全力》カードが使用された。\n（達成回数：2）",
        textZh: "不是这个回合准备的构想，并且这个回合使用了《全力》牌。\n（所需完成次数：2）",
        textZhG1: "本回合内没有准备构想，且本回合内使用了《全力》卡。\n（达成次数：2次）",
        textKo: "이 턴에 준비되지 않았고, 이 턴에 《전력》 카드가 사용되었다.\n（달성회수：2）",
        textEn: "This Plot was not prepared this turn, and a Throughout card was played this turn.\n(Required number of achievements: 2)",
    },
    "20-kanawe-o-p-06": {
        megami: "kanawe",
        name: "位置取り",
        nameEn: "Mise-en-scène",
        nameZh: "自我定位",
        nameZhG1: "定位",
        nameKo: "위치잡기",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "2",
        text: "現在の間合がターン開始時の間合から2以上変化し、かつ8以下である。\n（達成回数：2）",
        textZh: "当前距为8或以下，并且与本回合开始时的距比相差2或者以上。\n（所需完成次数：2）",
        textZhG1: "当前距离与回合开始时距离之差的绝对值大于等于2，且当前距离小于等于8。\n（达成次数：2次）",
        textKo: "현재의 간격이 턴 개시 시의 간격에서 2이상 변화했고 간격이 8이하이다.\n（달성회수：2）",
        textEn: "The current Distance is 8 or less, and the difference between the current Distance and the Distance at the beginning of this turn is 2 or more.\n(Required number of achievements: 2)",
    },
    "20-kanawe-o-p-06-will": {
        megami: "kanawe",
        name: "位置取り",
        nameEn: "Mise-en-scène",
        nameZh: "自我定位",
        nameZhG1: "定位",
        nameKo: "위치잡기",
        ruby: "",
        rubyEn: "",
        baseType: "plan",
        extra: true,
        capacity: "1",
        text: "現在の間合がターン開始時の間合から5以上変化している。\n（達成回数：1）",
        textZh: "当前距与本回合开始时的距比相差5或者以上。\n（所需完成次数：1）",
        textZhG1: "当前距离与回合开始时距离之差的绝对值大于等于5。\n（达成次数：1次）",
        textKo: "현재의 간격이 턴 개시 시의 간격에서 5이상 변화되어 있다.\n（달성회수：1）",
        textEn: "The difference between the current Distance and the Distance at the beginning of this turn is 5 or more.\n(Required number of achievements: 1)",
    },
};
// シーズン6-2
exports.S6_2_UPDATED_CARD_DATA = {
    "02-saine-A1-s-2": {
        megami: "saine",
        anotherID: "A1",
        replace: "02-saine-o-s-2",
        name: "二重奏:弾奏氷瞑",
        nameEn: "Duet: Chilling Tranquility",
        nameZh: "二重奏：弹奏冰瞑",
        nameZhG1: "二重奏：弹奏冰瞑",
        nameKo: "이중주:탄주빙명",
        ruby: "にじゅうそう:だんそうひょうめい",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "終端\n相手を畏縮させる。あなたはカードを1枚引くか、集中力を1得る。\n【使用済】あなたの他のメガミによる《攻撃》は+0/+1となり、不可避を得る。\n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。",
        textZh: "终端\n令对手畏缩，你抓一张牌或获得1点集中力。\n【使用后】你的另一柱女神的《攻击》得+0/+1且不可避。\n----\n【即再起】自命受到除重铸牌库以外的1点或以上的伤害。",
        textZhG1: "终端\n对手畏缩。你抽1张牌或者获得1点集中力。\n【使用后】你的其他女神的《攻击》获得+0/+1和不可被闪避。\n----\n【即再起】自命受到除重鑄牌庫以外的1點及以上的傷害。",
        textKo: "종단\n상대를 위축시킨다.\n당신은 카드를 1장 뽑거나 집중력을 1 얻는다.\n【사용됨】당신의 다른 여신에 의한 《공격》은 +0/+1이 된다.  \n----  \n【즉재기】당신이 재구성 이외로 라이프에 1 이상의 대미지를 받는다.",
        textEn: "Terminal\n\nFlinch your opponent. Draw a card or gain 1 Vigor.\n\nDevoted: Your attacks from non-Saine Megami gain +0/+1 and Unavoidable.\n----\nImmediate Resurgence: You take 1 or more damage to your Life, excluding reshuffle damage.",
    },
    "02-saine-o-n-1": {
        megami: "saine",
        name: "八方振り",
        nameEn: "Swing Rush",
        nameZh: "八方斩",
        nameZhG1: "八面斩",
        nameKo: "팔방 휘두르기",
        ruby: "はっぽうぶり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "2/1",
        text: "【攻撃後】八相-あなたのオーラが1以下ならば、攻撃『適正距離4-5、2/1』を行う。",
        textZh: "【攻击后】八相～若自装中樱花结晶数仅1个或更少，则进行一次“攻击距离4-5、伤害2/1”的攻击。",
        textZhG1: "【攻击后】八相～若自装中的樱花结晶的数目小于等于1，则进行一次“攻击距离4-5、伤害2/1”的攻击。",
        textKo: "【공격후】팔상-당신의 오라가 1 이하라면, 공격『적정거리4-5、2/1』을 행한다.",
        textEn: 'After Attack: Idea - You attack with "Range: 4-5, Damage: 2/1" if you have 1 or fewer Sakura tokens on your Aura.',
    },
    "02-saine-o-n-3": {
        megami: "saine",
        name: "石突",
        nameEn: "Hilt Slam",
        nameZh: "石突",
        nameZhG1: "石突",
        nameKo: "석돌 치기",
        ruby: "いしづき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "2-3",
        damage: "2/1",
        text: "【攻撃後】八相-あなたのオーラが1以下ならば、ダスト→間合：1",
        textZh: "【攻击后】八相～若自装中樱花结晶数仅1个或更少，则：虚→1→距",
        textZhG1: "【攻击后】八相～若自装中的樱花结晶的数目小于等于，则：虚（1）→距",
        textKo: "【공격후】팔상-당신의 오라가 1이하라면, 더스트→간격：1",
        textEn: "After Attack: Idea - If you have 1 or fewer Sakura tokens on your Aura:\n\nShadow (1)→ Distance",
    },
    "02-saine-o-n-4": {
        megami: "saine",
        name: "見切り",
        nameEn: "Outclass",
        nameZh: "识破",
        nameZhG1: "识破",
        nameKo: "간파",
        ruby: "みきり",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "【常時】八相-あなたのオーラが1以下ならば、このカードを《対応》を持つかのように相手の《攻撃》に割り込んで使用できる。\n間合⇔ダスト：1",
        textZh: "【常时】八相～若自装中樱花结晶数仅1个或更少，则此牌可以如《对应》牌一样对应《攻击》使用。\n距↔1↔虚",
        textZhG1: "【常时】八相～若自装中的樱花结晶的数目小于等于1，则此牌可以如《对应》牌一样对应《攻击》使用。\n距↔1↔虚",
        textKo: "【상시】팔상-당신의 오라가 1이하라면, 이 카드를 《대응》을 갖는것과 같이 상대의 《공격》 에 끼어들어 사용 가능하다. \n간격⇔더스트：1",
        textEn: "Forced: Idea - You may play this card as if it were a Reaction if you have 1 or fewer Sakura tokens on your Aura.\n\nDistance (1)⇔ Shadow",
    },
    "02-saine-o-s-3": {
        megami: "saine",
        name: "音無砕氷",
        nameEn: "Silent Icebreaker",
        nameZh: "音无碎冰",
        nameZhG1: "音无碎冰",
        nameKo: "무음쇄빙",
        ruby: "おとなしさいひょう",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "1/1",
        cost: "2",
        text: "【攻撃後】対応した《攻撃》は-1/-1となる。\n----\n【再起】八相-あなたのオーラが1以下である。",
        textZh: "【攻击后】被对应的《攻击》得-1/-1。\n----\n【再起】八相～自装中樱花结晶数仅1个或更少。",
        textZhG1: "【攻击后】被对应的《攻击》得-1/-1。\n----\n【再起】八相～自装中的樱花结晶的数目小于等于1。",
        textKo: "【공격후】대응한 《공격》은 -1/-1이 된다.\n ----\n 【재기】팔상-당신의 오라가 1이하이다.",
        textEn: "After Attack: The attack you played this card as a Reaction to gets -1/-1.\n\nResurgence: Idea - You have 1 or fewer Sakura tokens on your Aura.",
    },
    "02-saine-A2-s-3": {
        megami: "saine",
        anotherID: "A2",
        replace: "02-saine-o-s-3",
        name: "絶唱絶華",
        nameEn: "Withering Fragment",
        nameZh: "绝唱绝华",
        nameZhG1: "絶唱絶华",
        nameKo: "절창절화",
        ruby: "ぜっしょうぜっか",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "2/-",
        cost: "1",
        text: "終端\n【攻撃後】対応した《攻撃》の解決後に、その《攻撃》でオーラへのダメージが選ばれ、かつあなたのオーラが0ならば現在のフェイズを終了する。",
        textZh: "终端\n【攻击后】被对应的《攻击》结算完毕后，若你选择由装承受此次《攻击》的伤害，且现自装中已没有樱花结晶，则结束当前阶段。",
        textZhG1: "终端\n【攻击后】被对应的《攻击》结算完毕后，若你选择由装承受此次《攻击》的伤害，且现自装中已没有樱花结晶，则结束当前阶段。",
        textKo: "종단\n대응한 《공격》 해결 후에 그 《공격》에서 오라 데미지를 선택했고 당신의 오라가 0이라면 현재의 페이즈를 종료한다.",
        textEn: "Terminal\n\nAfter Attack: After the attack you played this card as Reaction to resolves, if damage to Aura was chosen for that attack, and you now have no Sakura tokens on your Aura, end the current phase.",
    },
    "03-himika-A1-s-2": {
        megami: "himika",
        anotherID: "A1",
        replace: "03-himika-o-s-2",
        name: "炎天・紅緋弥香",
        nameEn: "Blazing Sun - Crimson Himika",
        nameZh: "炎天·红绯弥香",
        nameZhG1: "炎天·红绯弥香",
        nameKo: "염천・쿠레나이 히미카",
        ruby: "えんてん・くれないひみか",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "fullpower",
        range: "0-7",
        damage: "X/X",
        cost: "5",
        text: "対応不可 \n【常時】Xは8から現在の間合を引いた値に等しい。 \n【攻撃後】あなたは敗北する。",
        textZh: "不可被对应\n【常时】X等于8减去当前距离。\n【攻击后】你输掉这局游戏。",
        textZhG1: "不可被对应\n【常时】X等于8减去当前距离。\n【攻击后】你输掉这局游戏。",
        textKo: "대응불가 \n 【상시】X는 8에서 현재 간격을 뺀 수치와 같다.\n 【공격후】당신은 패배한다.",
        textEn: "No Reactions\n\nForced: X is equal to 8 minus the current Distance.\n\nAfter Attack: You lose the game.",
    },
    "04-tokoyo-o-n-7": {
        megami: "tokoyo",
        name: "晴舞台",
        nameEn: "Sunny Stage",
        nameZh: "晴舞台",
        nameZhG1: "晴舞台",
        nameKo: "맑음의 무대",
        ruby: "はれぶたい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "終端\n【展開時】あなたの集中力は2になる。\n【破棄時】攻撃『適正距離3-6、-/1』を行う。",
        textZh: "终端\n【展开时】你的集中力变成2。\n【破弃时】进行一次“攻击距离3-6、伤害-/1”的攻击。",
        textZhG1: "终端\n【展开时】你的集中力变成2。\n【破弃时】进行一次“攻击距离3-6、伤害-/1”的攻击。",
        textKo: "종단\n【전개시】당신의 집중력은 2가 된다.\n【파기시】공격 『적정거리 3-6, -/1』을 한다.",
        textEn: 'Terminal\n\nInitialize: Your Vigor becomes 2.\n\nDisenchant: You attack with "Range: 3-6, Damage: -/1".',
    },
    "08-hagane-o-n-4": {
        megami: "hagane",
        name: "超反動",
        nameEn: "Recoil",
        nameZh: "超反动",
        nameZhG1: "超反弹",
        nameKo: "초반동",
        ruby: "ちょうはんどう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の間合に応じて以下を行う。\n\n5以上…間合→自フレア：1\n4以下…相フレア→間合：1",
        textZh: "根据当前距离进行以下行动：\n\n5或以上…距→1→自气\n4或以下…敌气→1→距",
        textZhG1: "若当前距离小于等于4，则：敌气→1→距\n若当前距离大于等于5，则：距→1→自气",
        textKo: "현재 간격에 따라서 아래를 한다.\n5이상…간격→자신 플레어:1\n4이하...상대 플레어→간격：1",
        textEn: "Based on the current Distance, perform the following:\n\n5 or more: Distance (1)→ Your Flare\n4 or less: Opponent's Flare (1)→ Distance",
    },
    "09-chikage-A1-s-4": {
        megami: "chikage",
        anotherID: "A1",
        replace: "09-chikage-o-s-4",
        name: "残滓の絆毒",
        nameEn: "Vestigial Bondrot",
        nameZh: "残渣牵绊毒",
        nameZhG1: "残渣的绊毒",
        nameKo: "잔재의 인연독",
        ruby: "ざんしのきずなどく",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "0-1",
        damage: "4/X",
        cost: "4",
        text: "対応不可（通常札）\n【常時】Xは相手の手札にあるカードの枚数の2倍に等しい。",
        textZh: "不可被对应（通常牌）\n【常时】X等于对手的手牌张数的2倍。",
        textZhG1: "不可被对应（通常牌）\n【常时】X等同于对手手牌数量的两倍。",
        textKo: "대응불가(통상패)\n【상시】X는 상대의 손패에 있는 카드 장수의 2배와 같다.",
        textEn: "No Reactions (Normal)\n\nForced: X is twice the number of cards in your opponent's hand.",
    },
    "14-honoka-A1-s-1-ex3": {
        megami: "honoka",
        anotherID: "A1",
        replace: "",
        name: "桜花眩く輝かん",
        nameEn: "Blinded By Flowers",
        nameZh: "樱花光彩夺目",
        nameZhG1: "樱花正耀眼地闪耀",
        nameKo: "벚꽃은 눈부시게 빚나리",
        ruby: "おうかまばゆくかがやかん",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "14-honoka-A1-s-1",
        type: "attack",
        range: "3-5",
        damage: "X/2",
        cost: "1",
        text: "超克\n【常時】Xはこのカードの上の桜花結晶の数に等しい。\n【攻撃後】このカードの上にダストから1つ桜花結晶を置く。\n----\n【再起】桜花結晶がちょうど5つある領域が1つ以上ある。",
        textZh: "超克\n【常时】X等于此牌上的樱花结晶的个数。\n【攻击后】从虚中将1个樱花结晶置于此牌上。\n----\n【再起】樱花结晶恰好为5的区域至少有1个。",
        textZhG1: "超克\n【常时】X等于此牌上的樱花结晶的数目。\n【攻击后】将1个樱花结晶从虚移至此牌上。\n----\n【再起】至少1个区域中的樱花结晶的数目恰为5。",
        textKo: "초극\n【상시】X는 이 카드 위의 벚꽃결정의 수와 같다.\n【공격후】이 카드 위에 더스트에서 벚꽃결정을 1개 올려둔다.\n----\n【재기】벚꽃결정이 딱 5개인 영역이 1개 이상 있다.",
        textEn: "Overwhelm\n\nForced: X is equal to the number of Sakura tokens on this card.\n\nAfter Attack: Move a Sakura token from Shadow to this card.\n\nResurgence: At least 1 zone has exactly 5 Sakura tokens.",
    },
    "16-yatsuha-o-s-2": {
        megami: "yatsuha",
        name: "四葉鏡のわらべ唄",
        nameEn: "Lullaby of the Four Mirrors",
        nameZh: "四叶镜的童谣",
        nameZhG1: "四叶镜的童谣",
        nameKo: "네잎 거울의 전래동요",
        ruby: "よつばかがみのわらべうた",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "切札でない付与札を1つ選び、その上から桜花結晶全てをダストに送る。\nその《付与》カードがいずれかの捨て札にあるならば、そのカードを使用してもよい。そうした場合、そのカードが《全力》ならばこのカードは終端を得る。",
        textZh: "从付与区中选择1张展开中的王牌之外的付与牌，将其上所有樱花结晶移至虚。\n之后这张《付与》牌处于弃牌区的话，则你可以使用该牌，而不需支付其费用。若如此做，且该牌为《全力》，则此牌额外获得终端。",
        textZhG1: "从付与区中选择1张展开中的非王牌付与牌，将其上所有樱花结晶移至虚。\n之后这张《付与》牌处于弃牌区或是已使用的王牌的话，则你可以使用该牌，而不需支付其费用。若如此做，且该牌为《全力》，则此牌额外获得终端。",
        textKo: "비장패가 아닌부여패를 1장 고르고 그 위의 벚꽃 결정을 전부 더스트로 보낸다.\n그 《부여》카드가 버림패에 있다면 그 카드를 사용해도 좋다. 그렇게 한 경우, 그 카드가 《전력》이라면 이 카드는 종단을 얻는다.",
        textEn: "Choose a non-Special Enhancement in play. Move all Sakura tokens from that card to Shadow.\n\nIf that card is now in its owner's played pile, you may play it. If you did, and that card was Throughout, this card gains Terminal.",
    },
    "18-mizuki-o-t-3": {
        megami: "mizuki",
        name: "騎兵",
        nameEn: "Cavalry",
        nameZh: "骑兵",
        nameZhG1: "骑兵",
        nameKo: "기병",
        ruby: "きへい",
        rubyEn: "",
        baseType: "troop",
        type: "enhance",
        capacity: "2",
        text: "兵員（兵舎、使用中、付与札以外の領域に移動するならば、代わりに兵舎に戻る）\n----\n終端\n【展開中】相手の《攻撃》は対応不可を失う。\n【破棄時】あなたは集中力を1得る。",
        textZh: "兵员（移动到兵营、使用中、付与区之外的区域的时候，改为移回兵营）\n----\n终端\n【展开中】对手的《攻击》失去不可被对应。\n【破弃时】你获得1点集中力。",
        textZhG1: "兵员（移动到兵营、使用中、付与区之外的区域的时候，改为移回兵营）\n----\n终端\n【展开中】对手的《攻击》失去不可被对应。\n【破弃时】你获得1点集中力。",
        textKo: "병사（병영, 사용중, 부여패 이외의 영역에서 이동한다면, 대신에 병영으로 되돌린다）\n----\n종단\n【전개중】상대의 《공격》은 대등불가를 잃는다.\n【파기시】당신은 집중력을 1얻는다.",
        textEn: "Unit (If you move to an area other than the barracks, in use, or enhancements, return to the barracks instead)\n----\nTerminal\n\nOngoing: Your opponent's attacks lose No Reactions.\n\nDisenchant: Gain 1 Vigor.",
    },
    "20-kanawe-o-n-5": {
        megami: "kanawe",
        name: "残光",
        nameEn: "Afterglow",
        nameZh: "残光",
        nameZhG1: "残光",
        nameKo: "잔광",
        ruby: "ざんこう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の幕の色が紫または緑ならば、相手の手札を見てその中から1枚を選び、それを山札の底に置く。\n相手は集中力を1得る。",
        textAdditional: "（自分の手札を右クリックすることで、手札を相手プレイヤーに公開することが可能）",
        textZh: "现在的幕的颜色是《紫》或《绿》的话，检视对手的手牌，选其中1张置于牌库底。\n对手获得1点集中力。",
        textZhG1: "若当前剧幕的颜色为【紫】或【绿】，则检视对手的手牌，选其中1张置于牌库底。对手获得1点集中力。",
        textZhAdditional: "（右键自己的手牌区可以将手牌展示给对方玩家）",
        textZhG1Additional: "（右键自己的手牌区可以将手牌展示给对方玩家）",
        textKo: "현재의 막이 자색 또는 녹색이라면, 상대의 손패를 보고 그 중에서 1장을 고르고 그것을 패산의 밑에 둔다. 상대는 집중력을 1 얻는다.",
        textKoAdditional: "(자신의 손패를 우클릭해서 손패를 상대 플레이어에게 공개할 수 있음)",
        textEn: "If the current Act is Purple or Green, look at your opponent's hand. Choose a card from it and put it at the bottom of their deck. They gain 1 Vigor.",
        textEnAdditional: "(To reveal your hand, right-click on the hand area.)",
    },
    "20-kanawe-o-s-1": {
        megami: "kanawe",
        name: "たまゆらふみ",
        nameEn: "Action to the Word",
        nameZh: "玉响一瞬书成文",
        nameZhG1: "玉响书",
        nameKo: "타마유라후미",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "集中力を1支払ってもよい。そうした場合、追加札または達成済から構想カードを1枚準備する。達成済から準備したらこのカードを取り除く。\n【使用済】相手の開始フェイズの開始時に、あなたが直前のターンに構想を進めていないならば、このカードを未使用に戻す。",
        textZh: "你可以支付1点集中力，若如此做，从追加牌区或已达成的构想牌中准备1张构想。从已达成的构想牌中准备的情况下将此卡移出游戏。\n【使用后】对手的准备步骤开始时，若你在上一个回合没有推进构想的话，将此卡恢复为未使用的状态。",
        textZhG1: "你可以支付1点集中力。若如此做，则你可以从追加区或已达成区域准备1张构想牌。若以此法从已达成区域准备构想牌，则将此牌移出游戏。\n【使用后】对手的准备階段开始时，若你上回合內构想牌上的樱花結晶没有前进，则将此牌变为未使用状态。\n",
        textKo: "집중력을 1 지불할 수 있다. 그렇게 했다면, 추가패 또는 달선된 상태인 구상 카드를 1장 준비한다. 달성된 상태인 구상 카드를 준비했다면, 이 카드를 게임에서 제외한다.\n【사용됨】상대의 개시 페이즈가 시작될 때, 당신이 직전 턴에 구상을 진행하지 않았다면, 이 카드를 미사용으로 되돌린다.",
        textEn: "You may spend 1 Vigor. If you do, prepare one of your set aside or completed Plot cards. If it was a completed Plot card, remove this card from the game.\n\nDevoted: At the beginning of your opponent's turn, if you did not progress a Plot on your previous turn, turn this card face-down.",
    },
};
// シーズン7
exports.S7_UPDATED_CARD_DATA = {
    "14-honoka-A1-s-1": {
        megami: "honoka",
        anotherID: "A1",
        replace: "14-honoka-o-s-1",
        name: "ひとり目覚めて",
        nameEn: "From Slumber She Stirs",
        nameZh: "独自醒来",
        nameZhG1: "影之两手",
        nameKo: "나홀로 눈이 뜨여",
        ruby: "ひとりめざめて",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "3",
        text: "相オーラ→自オーラ：1\n開花―ダストに応じてこの「ひとり目覚めて」を以下のカードと交換し、それを山札の底に置く。\n5以下…「標をたどり」\n6以上…「影面見向き」",
        textZh: "敌装→1→自装\n开花～根据虚的数目将这张『独自醒来』与下述的牌交换，并将其置于你的牌库底。\n5或以下…『循向指引』\n6或以上…『窥见暗面』",
        textZhG1: "【攻击后】若对手选择由装承受此次伤害，则检视对手的手牌，从中选择1张弃置。若对手选择由命承受此次伤害，则敌气（2）→虚\n【攻击后】将这张『影之两手』与追加牌区域中的『樱之双剑』交换。若如此做，则你可以将『樱之双剑』置于你的牌堆底。",
        textKo: "상대 오라→자신 오라：1\n개화―더스트에 따라서 이 「나홀로 눈이 뜨여」를 아래의 카드와 교환하고 그것을 패산 밑에 둔다.\n5이하…「자취를 좇아가니」\n6이상…「그림자 바라보니」",
        textEn: "Opponent's Aura (1)→ Your Aura\n\nBloom - Based on the number Sakura tokens on Shadow, exchange this card with the corresponding set aside card, then put that card on the bottom of your deck.\n5 or less: Following the Guided Path\n6 or more: Turning Whither the Light Strikes",
    },
    "20-kanawe-o-n-7": {
        megami: "kanawe",
        name: "封殺",
        nameEn: "Censor",
        nameZh: "封杀",
        nameZhG1: "封杀",
        nameKo: "봉살",
        ruby: "ふうさつ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開時】カードの名前を1つ宣言する。\n【展開中】相手のターン中、相手は宣言された名前を持つ切札を使用できない。現在の幕の色が赤ならば、宣言された名前を持つ通常札も使用できない。\n【破棄時】あなたは集中力を1得る。",
        textZh: "【展开时】宣告1个卡牌名。\n【展开中】对手的回合中，对手不能使用具宣告的卡牌名的王牌。如果现在的幕的颜色是《红》的话，对手也不能使用具宣告的卡牌名的通常牌。\n【破弃时】你获得1点集中力。",
        textZhG1: "【展开时】宣言1个牌名。\n【展开中】对手的回合内，对手不能使用具有你所宣言的名称的王牌。若当前剧幕的颜色为【红】，对手不能使用具有你所宣言的名称的通常牌。\n【破弃时】你获得1点集中力。",
        textKo: "【전개시】카드의 이름을 1개 선언한다.\n【전개중】상대의 턴 중에 상대는 선언된 이름을 가진 비장패를 사용할 수 없다. 현재의 막의 색이 적색이라면 선언된 이름을 가진 통상패도 사용할 수 없다.\n【파기시】당신은 집중력을 1 얻는다.",
        textEn: "Initialize: Name a card.\n\nOngoing: During your opponent's turn, they cannot play Special cards with that name. If the current Act is Red, they also cannot play Normal cards with that name.\n\nDisenchant: Gain 1 Vigor.",
    },
    "20-kanawe-o-s-2": {
        megami: "kanawe",
        name: "ほかげきらぼし",
        nameEn: "Master of Fates",
        nameZh: "灯影簇宛若繁星",
        nameZhG1: "灯影辉星",
        nameKo: "호카게키라보시",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "X",
        text: "【常時】Xは現在の幕の値に等しい。\n現在の幕の色が緑、赤、紫のいずれかならば、その効果を得る。\n----\n【即再起】次の幕へ向かう。",
        textZh: "【常时】X等于现在的幕的值。\n现在的幕的颜色是《绿》、《红》、《紫》中的任一种的话，结算对应的幕效果。\n----\n【即再起】进入下一幕。",
        textZhG1: "【常时】X等同于现在的幕值。\n若现在的幕色为【绿】、【红】、【紫】之一，则结算对应的效果。\n----\n【即再起】进入下一个剧幕。",
        textKo: "【상시】X는 현재의 막의 수치와 같다.\n현재의 막의 색이 보라색, 적색, 녹색 중 하나라면 그 효과를 얻는다.\n----\n【즉재기】다음 막으로 진행된다.",
        textEn: "Forced: X is the value of the current Act.\n\nIf the current Act is Green, Red, or Purple, resolve that color's effect.\n----\nImmediate Resurgence: Advance to the next Act.",
    },
    "20-kanawe-o-s-3": {
        megami: "kanawe",
        name: "あたらよちよに",
        nameEn: "Better Part of Valor",
        nameZh: "虽千代可惜夜短",
        nameZhG1: "可惜夜续千代",
        nameKo: "아타라요치요니",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-4",
        damage: "2/1",
        cost: "4",
        text: "【攻撃後】対応した切札でない《攻撃》を打ち消す。その《攻撃》が通常札ならば、そのカードを山札の上に置く。",
        textZh: "【攻击后】打消被对应的非王牌的《攻击》。\n那个《攻击》是通常牌的话，将其置于牌库顶。",
        textZhG1: "【攻击后】打消被对应的非王牌的《攻击》。若被对应的《攻击》为通常牌，则将该牌置于牌库顶。",
        textKo: "【공격후】대응한 비장패가 아닌 《공격》을 무효화한다.\n그 《공격》이 통상패라면 그 카드를 패산 위로 되돌린다.",
        textEn: "After Attack: Cancel the non-Special attack this card was played as a Reaction to. If that attack was a Normal card, put that card on the top of its owner's deck.",
    },
    "16-yatsuha-A1-s-4": {
        megami: "yatsuha",
        anotherID: "A1",
        replace: "16-yatsuha-o-s-4",
        name: "八葉鏡の徒桜",
        nameEn: "Naughtbloom of the Eight Mirrors",
        nameZh: "八叶镜的徒樱",
        nameZhG1: "八叶镜的徒樱",
        nameKo: "야츠하거울의 허무의 벚꽃",
        ruby: "やつはかがみのあだざくら",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "0-7",
        damage: "1/0",
        cost: "2",
        text: "【使用済】あなたが山札を再構成するならば、その直前にあなたの捨て札または手札にあるヤツハのカード1枚を公開し、完全態にしてもよい。\n（例えば手札の「星の爪」を公開したなら追加札の「星辰の鉤爪」と交換され、手札に加わる）",
        textZh: "【使用后】如果你要重铸牌库，则在之前你可以公开你弃牌或者手牌中的一张八叶的牌并将其变为完全态。\n（例如将手牌中的『星之爪』公开的话就和追加牌区的『星辰之钩爪』作交换并加入手牌。）",
        textZhG1: "【使用后】每当你将要重铸牌库时，你可以从弃牌区或手牌中选择1张八叶的牌，展示该牌，然后将其变为完全态。\n（例如，若你展示了手牌中的『星之爪』，则将其与追加牌中的『星尘之利爪』交换，并加入手牌。）",
        textKo: "【사용됨】 당신이 패산의 재구성을 수행할 때, 직전에 당신의 버림패나 손패의 야츠하의 카드 1장을 공개한 뒤,완전태로 바꿀 수 있다.\n(예를 들어 손패의 별의 손톱을 공개했다면,\n추가패의 성진의 발톱과 교환하여 손패로 추가한다.)",
        textEn: 'Devoted: Immediately before reshuffling your deck, you may reveal a Yatsuha card from your hand or played pile and Perfect it. (For example, if you reveal "Astral Claw" from your hand, exchange it for your set aside "Celestial Talon" and add it your hand.)',
    },
    "16-yatsuha-A1-n-1-ex1": {
        megami: "yatsuha",
        anotherID: "A1",
        replace: "",
        name: "星辰の鉤爪",
        nameEn: "Celestial Talon",
        nameZh: "星辰之钩爪",
        nameZhG1: "星辰之利爪",
        nameKo: "성진의 발톱",
        ruby: "せいしんのかぎづめ",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "16-yatsuha-o-n-1",
        type: "attack",
        range: "3-4",
        damage: "2/1",
        text: "【攻撃後】相フレア→自オーラ：1",
        textZh: "【攻击后】敌气→1→自装",
        textZhG1: "【攻击后】敌气（1）→自装",
        textKo: "【공격후】 플레어(상대)→오라(자신) : 1",
        textEn: "After Attack: Opponent's Flare (1)→ Your Aura",
    },
    "16-yatsuha-A1-n-2-ex1": {
        megami: "yatsuha",
        anotherID: "A1",
        replace: "",
        name: "深淵の大口",
        nameEn: "Maw of the Abyss",
        nameZh: "深渊之巨口",
        nameZhG1: "深渊之巨吻",
        nameKo: "심연의 아귀",
        ruby: "しんえんのおおぐち",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "16-yatsuha-o-n-2",
        type: "attack",
        range: "4-5",
        damage: "2/1",
        text: "対応不可\n【常時】この《攻撃》は+X/+Xとなる。Xは鏡映数に等しい。",
        textZh: "不可被对应\n【常时】此攻击得+X/+X。X等于镜映数。",
        textZhG1: "不可被对应\n【常时】此攻击得+X/+X，X等于镜映数。",
        textKo: "대응불가\n【상시】이 《공격》은 +X/+X를 얻는다. X는 거울수와 동일하다.",
        textEn: "No Reactions\n\nForced: This attack gains +X/+X, where X is the number of Reflections.",
    },
    "16-yatsuha-A1-n-3-ex1": {
        megami: "yatsuha",
        anotherID: "A1",
        replace: "",
        name: "本当の怪物",
        nameEn: "The Real Monster",
        nameZh: "真正的怪物",
        nameZhG1: "现世之魔物",
        nameKo: "진정한 괴물",
        ruby: "ほんとうのかいぶつ",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "16-yatsuha-o-n-3",
        type: "attack",
        subType: "fullpower",
        range: "1-3",
        damage: "4/1",
        text: "【攻撃後】相手がライフへのダメージを選んだならば、相ライフ→自ライフ：1",
        textZh: "【攻击后】对手选择承受对命伤害的话，敌命→1→自命",
        textZhG1: "【攻击后】若对手选择由命承受此《攻击》的伤害，则\n敌命（1）→自命",
        textKo: "【공격후】 상대가 라이프 피해를 선택했다면,\n라이프(상대)→라이프(자신) : 1",
        textEn: "After Attack: If your opponent chose to take damage to Life,\n\nOpponent's Life (1)→ Your Life",
    },
    "16-yatsuha-A1-n-4-ex1": {
        megami: "yatsuha",
        anotherID: "A1",
        replace: "",
        name: "幻影連携",
        nameEn: "Phantom Confluence",
        nameZh: "幻影协作",
        nameZhG1: "幻影联动",
        nameKo: "환영연계",
        ruby: "げんえいれんけい",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "16-yatsuha-o-n-4",
        type: "action",
        text: "以下から1つを選ぶ。\n・このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\n・このターン中、現在の間合は1減少し、達人の間合は1小さくなる。\nその後、攻撃『適正距離3-5、2/1』を行う。",
        textZh: "选择1项：\n●本回合内，当前距离增大1，达人距离增大1；\n●本回合内，当前距离减小1，达人距离减小1。\n之后，进行一次“攻击距离3-5、伤害2/1”的攻击。",
        textZhG1: "选择1项：\n1.本回合内，当前距离增大1，达人距离增大1；\n2.本回合内，当前距离减小1，达人距离减小1。\n然后进行一次“攻击距离3-5 伤害2/1”的攻击。",
        textKo: "하나를 선택한다.\n* 이 턴 중 현재의 간격은 1 증가하고 달인의 간격이 1 증가한다.\n* 이 턴 중 현재의 간격은 1 감소하고 달인의 간격이 1 감소한다.\n그 후, 공격 「적정거리 3-5、2/1」을 수행한다.",
        textEn: 'Choose one:\n・For the rest of the turn, the current Distance is increased by 1, and the size of the Mastery Zone is increased by 1.\n・For the rest of the turn, the current Distance is decreased by 1, and the size of the Mastery Zone is decreased by 1.\n\nThen, you attack with "Range: 3-5, Damage: 2/1".',
    },
    "16-yatsuha-A1-n-5-ex1": {
        megami: "yatsuha",
        anotherID: "A1",
        replace: "",
        name: "決意",
        nameEn: "Conviction",
        nameZh: "决意",
        nameZhG1: "决意",
        nameKo: "결의",
        ruby: "けつい",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "16-yatsuha-o-n-5",
        type: "action",
        subType: "reaction",
        text: "以下のどちらかまたは両方を行う。\n・自オーラ⇔自フレア：1\n・対応した切札でない《攻撃》のオーラへのダメージがX以下ならば、その《攻撃》を打ち消す。Xは鏡映数に1を足した値に等しい。",
        textZh: "选择1项或都选：\n●自装↔1↔自气\n●若被对应的非王牌的《攻击》对装伤害小于等于X，则打消被对应的《攻击》。X为镜映数的值+1。",
        textZhG1: "选择1项或都选：\n1.自装（1）⇔自气\n2.若被对应的《攻击》非王牌且对装伤害小于等于X，则打消被对应的《攻击》。X等于镜映数加1。",
        textKo: "다음 중 하나 또는 둘 다 선택한다.\n* 오라(자신)⇔플레어(자신) : 1\n* 대응한 비장패가 아닌 《공격》의 오라 데미지가 X 이하라면, 그 《공격》을 무효화한다.\nX는 거울수에 1을 더한 값이다.",
        textEn: "Choose one or both:\n・Your Aura (1)⇔ Your Flare\n・Cancel the non-Special attack you played this card as a Reaction to if its Damage to Aura is X or less, where X is 1 greater than the number of Reflections.",
    },
    "16-yatsuha-A1-n-6-ex1": {
        megami: "yatsuha",
        anotherID: "A1",
        replace: "",
        name: "盟約",
        nameEn: "Covenant of Glass",
        nameZh: "盟约",
        nameZhG1: "盟约",
        nameKo: "맹약",
        ruby: "めいやく",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "16-yatsuha-o-n-6",
        type: "action",
        subType: "reaction",
        text: "以下から1つを選ぶ。\n・相オーラ⇔自フレア：1\n・相フレア⇔自オーラ：1",
        textZh: "选择1项：\n●敌装↔1↔自气\n●敌气↔1↔自装",
        textZhG1: "选择1项：\n1.敌装（1）⇔自气\n2.敌气（1）⇔自装",
        textKo: "다음 중 하나를 선택한다.\n오라(상대)⇔플레어(자신) : 1\n플레어(상대)⇔오라(자신) : 1",
        textEn: "Choose one:\n・Opponent's Aura (1)⇔ Your Flare\n・Opponent's Flare (1)⇔ Your Aura",
    },
    "16-yatsuha-A1-n-7-ex1": {
        megami: "yatsuha",
        anotherID: "A1",
        replace: "",
        name: "徒寄花",
        nameEn: "Naughtbloom Harvest",
        nameZh: "徒寄花",
        nameZhG1: "徒寄花",
        nameKo: "허무기생화",
        ruby: "あだよりばな",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "16-yatsuha-o-n-7",
        type: "enhance",
        capacity: "3",
        text: "【破棄時】完全態にした枚数に応じて以下を行う。\n3以下…あなたの捨て札または手札にあるヤツハのカード1枚を公開し、完全態にしてもよい。\n4以上…このカードを山札の底に置き、ライフ→ゲーム外：2",
        textZh: "【破弃时】根据已经变为完全态的牌的枚数结算以下内容：\n3或以下…你可以公开你弃牌或者手牌中的一张八叶的牌并将其变为完全态。\n4或以上…将此卡置于牌库底，敌命→2→游戏外。",
        textZhG1: "【破弃时】根据你的八叶的牌变为完全态的次数结算以下效果。\n小于等于3……你可以从弃牌区或手牌中选择1张八叶的牌，展示该牌，然后将其变为完全态。\n大于等于4……将此牌置于牌库底，敌命（2）→游戏外",
        textKo: "【파기시】완전태를 한 숫자에 따라 다음을 수행한다.\n3 이하: 당신의 버림패나 손패의 야츠하의 카드 1장을 공개한 뒤, 완전태로 바꿀 수 있다.\n4 이상: 이 카드를 패산의 아래에 둔 후,\n라이프(상대)→게임 외부:2",
        textEn: "Disenchant: Based on the number of cards you have Perfected, perform the following:\n3 or fewer: You may reveal a Yatsuha card in your hand or played pile and Perfect it.\n4 or more: Put this card on the bottom of your deck, and:\nOpponent's Life (2)→ Out-of-Game",
    },
    "10-kururu-A2-n-1": {
        megami: "kururu",
        anotherID: "A2",
        replace: "10-kururu-o-n-1",
        name: "ぶらすたー",
        nameEn: "Blaster",
        nameZh: "冲击波",
        nameZhG1: "激光枪",
        nameKo: "블래스터",
        ruby: "",
        rubyEn: "",
        rubyZh: "Blaster",
        baseType: "normal",
        type: "attack",
        range: "2-6",
        damage: "0/0",
        text: "対応不可（通常札）\n----\n<付> 【攻撃後】他のメガミのカードで組み立てたならば、攻撃『適正距離0-6、1/1』を行う。\n----\n<行対> 【攻撃後】他のメガミのカードで組み立てたならば、攻撃『適正距離0-6、1/1』を行う。",
        textZh: "不可被对应（通常牌）\n----\n<付> 【攻击后】如果是用其他女神的牌组装的机巧槽，则进行一次“攻击距离0-6、伤害1/1”的攻击。\n----\n<行对> 【攻击后】如果是用其他女神的牌组装的机巧槽，则进行一次“攻击距离0-6、伤害1/1”的攻击。",
        textZhG1: "不可被对应（通常牌）\n机巧：绿～【攻击后】若此机巧全部由其他女神的牌组装，则进行一次“攻击距离0-6 伤害1/1”的攻击。\n机巧：蓝紫～【攻击后】若此机巧全部由其他女神的牌组装，则进行一次“攻击距离0-6 伤害1/1”的攻击。",
        textKo: "대응불가(통상패)\n----\n<부> 【공격후】 다른 여신에 의해 기교가 완성됐다면,\n공격 『적정거리0-6、1/1』을 수행한다.\n----\n<행대> 【공격후】 다른 여신에 의해 기교가 완성됐다면,\n공격 『적정거리0-6、1/1』을 수행한다.",
        textEn: 'No Reactions (Normal)\n\n----------\n\nMechanism (ENH) - After Attack: If this was completed using only non-Kururu Megami cards, you attack with "Range: 0-6, Damage: 1/1."\n\n----------\n\nMechanism (ACT REA) - After Attack: If this was completed using only non-Kururu Megami cards, you attack with "Range: 0-6, Damage: 1/1."',
    },
    "10-kururu-A2-n-2": {
        megami: "kururu",
        anotherID: "A2",
        replace: "10-kururu-o-n-2",
        name: "れーるがん",
        nameEn: "Railgun",
        nameZh: "电磁炮",
        nameZhG1: "电磁炮",
        nameKo: "레일건",
        ruby: "",
        rubyEn: "",
        rubyZh: "Railgun",
        baseType: "normal",
        type: "attack",
        range: "2-6",
        damage: "1/1",
        text: "----\n<攻攻> 【常時】この《攻撃》が行われた時、この《攻撃》は+2/+0となる。\n----\n<全> 終端\n【常時】この《攻撃》が行われた時、この《攻撃》は+0/+1となり、打ち消されない。",
        textZh: "----\n<攻攻> 【常时】进行此《攻击》时，此《攻击》得+2/+0。\n----\n<全> 终端\n【常时】进行此《攻击》时，此《攻击》得+0/+1且不可被打消。",
        textZhG1: "机巧：红红～【常时】进行此《攻击》时，此《攻击》获得+2/+0。\n机巧：黄～终端\n【常时】进行此《攻击》时，此《攻击》获得+0/+1和不可被打消。",
        textKo: "----\n<공공> 【상시】 이 《공격》을 사용할 때, 이 《공격》은 +2/+0을 얻는다.\n----\n<전> 종단\n【상시】 이 《공격》을 사용할 때,\n이 《공격》은 +0/+1을 얻고, 무효화당하지 않는다.",
        textEn: "Mechanism (ATK ATK) - Forced: This attack gains +2/+0 as long as it has initiated.\n\n----------\n\nMechanism (THR) - Terminal\nForced: This attack gains +0/+1 and cannot be cancelled as long as it has initiated.",
    },
    "10-kururu-A2-s-4": {
        megami: "kururu",
        anotherID: "A2",
        replace: "10-kururu-o-s-4",
        name: "こねくとだいぶ",
        nameEn: "Connecdive",
        nameZh: "浸入连接",
        nameZhG1: "深层连结",
        nameKo: "커넥트 다이브",
        ruby: "",
        rubyEn: "",
        rubyZh: "Connect Dive",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "----\n<付行対> 【使用時/使用済】他のメガミのカードで組み立てたならば、使用時とあなたの終了フェイズにダストまたはあなたのオーラからこのカードの上に桜花結晶を1つ置いてもよい。\n----\n【使用済】あなたがある機巧枠の効果を解決するに際し、このカードの上の桜花結晶を1つダストに送ってもよい。そうした場合、その機巧枠の中に書かれた数字全てを2倍にする。",
        textZh: "----\n<付行对> 【使用时/使用后】如果是用其他女神的牌组装的机巧槽，在使用时和你的结束阶段可以从虚或自装中将1个樱花结晶放到此牌上。\n----\n【使用后】你结算机巧槽的效果的时候，可以将此牌上的1个樱花结晶移到虚。若如此做，则那个机巧槽中所写的数字全部变成两倍。",
        textZhG1: "机巧：绿蓝紫～【使用时/使用后】若此机巧全部由其他女神的牌组装，则使用此牌时和你的结束阶段开始时你可以从虚或自装中选择1个樱花结晶移至此牌上。\n【使用后】当你结算齿轮框中的效果时，你可以将此牌上的1个樱花结晶移至虚。若如此做，该齿轮框中记述的所有数字变为原来的2倍。",
        textKo: "----\n<부행대> 【사용시/사용됨】다른 여신의 카드로 기교가 완성되었다면, 사용시와 당신 턴의 종료 페이즈에 더스트 또는 당신의 오라로부터 이 카드 위에 벛꽃결정을 올릴 수 있다.\n----\n【사용됨】당신이 어떤 기교 조건의 효과를 해결할 때마다, 이 카드 위의 벛꽃결정을 하나 더스트로 보낼 수 있다.\n그렇게 하면 그 기교칸에 씌여진 숫자를 모두 2배로 한다.",
        textEn: "Mechanism (ENH ACT REA) - Played/Devoted: If this was completed using only non-Kururu Megami cards, when this card resolves, and at the end of your turn, you may move 1 Sakura token from Shadow or your Aura to this card.\n\n----------\n\nDevoted: When you would resolve a Mechanism effect, you may move 1 Sakura token from this card to Shadow. If you do, double the value of all numbers printed in that Mechanism.",
    },
    "17-hatsumi-A1-n-4": {
        megami: "hatsumi",
        anotherID: "A1",
        replace: "17-hatsumi-o-n-4",
        name: "潜雷",
        nameEn: "Divebomb",
        nameZh: "潜雷",
        nameZhG1: "潜雷",
        nameKo: "잠뢰",
        ruby: "せんらい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "隙\n【展開時】潜水を行う。\n【破棄時】攻撃『適正距離1-7、-/1、対応不可』を行う。",
        textZh: "破绽\n【展开时】进行潜水。\n【破弃时】进行一次“攻击距离1-7、伤害-/1、不可被对应”的攻击。",
        textZhG1: "破绽\n【展开时】进行一次潜水。\n【破弃时】进行一次“攻击距离1-7 伤害-/1 不可被对应”的攻击。",
        textKo: "빈틈\n【전개시】잠수를 수행한다.\n【파기시】공격 『적정거리1-7、-/1, 대응불가』 를 수행한다",
        textEn: 'Unguarded\n\nInitialize: Submerge.\n\nDisenchant: You attack with "Range: 1-7, Damage: -/1, No Reactions".',
    },
    "17-hatsumi-A1-s-1": {
        megami: "hatsumi",
        anotherID: "A1",
        replace: "17-hatsumi-o-s-1",
        name: "サギリ海域",
        nameEn: "Brumous Ocean",
        nameZh: "狭雾海域",
        nameZhG1: "峡雾海域",
        nameKo: "사기리 해역",
        ruby: "さぎりかいいき",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "reaction",
        capacity: "4",
        cost: "3",
        text: "【展開中】相手のターン中、適正距離を3つ以上持つ相手の《攻撃》はその中から最小と最大の値を除いて全ての適正距離を失う。\n（例えば3-5ならば3,5になる）",
        textZh: "【展开中】对手的回合中，攻击距离有至少3个的对手的《攻击》失去除了最小值和最大值之外的其他攻击距离。\n（例如攻击距离3-5会变成攻击距离3,5）",
        textZhG1: "【展开中】对手的回合内，若对手的《攻击》的攻击距离含有至少3个值，则该《攻击》失去除最大值与最小值以外的所有攻击距离。\n（例如3-5的攻击距离变为3,5）",
        textKo: "	【전개중】 상대 턴 동안, 적정거리를 3개 이상 가진 상대의 《공격》은 그 중에서 최소값과 최댓값을 제외한 적정거리를 모두 잃는다.\n(예를 들어 3-5라며 3, 5가 된다)",
        textEn: "Ongoing: On your opponent's turn, their attacks with 3 or more effective Range values lose all effective Range except the closest and farthest.\n(For example, an attack of Range: 3-5 becomes Range: 3, 5.)",
    },
    "17-hatsumi-A1-s-4": {
        megami: "hatsumi",
        anotherID: "A1",
        replace: "17-hatsumi-o-s-4",
        name: "ワダナカ航路",
        nameEn: "Benthic Strait",
        nameZh: "海中航路",
        nameZhG1: "汪洋航道",
        nameKo: "와다나가 항로",
        ruby: "わだなかこうろ",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "2",
        cost: "2",
        text: "【展開時】潜水を行い、相手を畏縮させる。\n【破棄時】順風ならば、相手のオーラとライフに1ダメージを与える。\n----\n【再起】逆風である。",
        textZh: "【展开时】进行潜水，令对手畏缩。\n【破弃时】如果是顺风的话，给予敌装和敌命各1点伤害。\n----\n【再起】当前为逆风。",
        textZhG1: "【展开时】进行一次潜水，对手畏缩。\n【破弃时】若你处于顺风状态，则对敌装与敌命各造成1点伤害。\n----\n【再起】你处于逆风状态。",
        textKo: "【전개시】잠수를 수행하고, 상대를 위축시킨다..\n【파기시】 순풍이라면, 상대의 오라와 라이프에 1데미지를 준다.\n----\n【재기】 역풍이다.",
        textEn: "Initialize: Submerge. Flinch your opponent.\n\nDisenchant: If there is a tailwind, deal 1 damage to your opponent's Aura and Life.\n\nResurgence: There is a headwind.",
    },
    "17-hatsumi-A1-d-1h": {
        megami: "hatsumi",
        anotherID: "A1",
        replace: "",
        name: "《潜水》",
        nameEn: "Submersion",
        nameZh: "《潜水》",
        nameZhG1: "潜水",
        nameKo: "《잠수》",
        ruby: "",
        rubyEn: "",
        baseType: "diving",
        type: undefined,
        text: "",
        textAdditional: "（ダブルクリックまたは右クリックで表向きにする）",
        textZh: "",
        textZhG1: "",
        textZhAdditional: "（双击或者右键来公开此牌）",
        textZhG1Additional: "（双击或右击将此牌翻为正面朝上）",
        textKo: "",
        textKoAdditional: "(더블 클릭 또는 우클릭으로 앞면 표시로 한다)",
        textEn: "",
        textEnAdditional: "(Double-click or right-click to reveal this card.)",
    },
    "17-hatsumi-A1-d-1": {
        megami: "hatsumi",
        anotherID: "A1",
        replace: "",
        name: "《潜水前進》",
        nameEn: "Forward Submersion",
        nameZh: "《潜水前进》",
        nameZhG1: "潜水前进",
        nameKo: "《잠수전진》",
        ruby: "",
        rubyEn: "",
        baseType: "diving",
        type: undefined,
        text: "このターン中、現在の間合は1減少し、達人の間合は1小さくなる。\nその後、これを公開させた《攻撃》があるならば直ちに間合を判定する。それが外れたならば《攻撃》を失敗として解決せずに終了し、次のターンにあなたは順風となる。\n\n攻撃が通常札によるものならば捨て札に、切札によるものならば使用済になる。\n失敗した攻撃への対応はできない。",
        textAdditional: "（潜水を行う場合、このカードを「使用済み」領域へ移動）",
        textZh: "这个回合中，当前的距减少1，达人距离减少1。\n这之后，如果是以《攻击》来公开的此潜水则立刻查看当前攻击距离是否符合，若是不符合则《攻击》直接失败不进行结算，且下个回合你成为顺风。\n\n攻击是通常牌的话置入弃牌，王牌的话变为已使用。\n无法对失败了的攻击进行对应。",
        textZhG1: "本回合内，当前距离减小1，达人距离减小1。\n然后，若此牌因使用《攻击》牌触发，则立即进行一次距离检查。若当前距离不包含于攻击距离，则视为对手没有进行过该《攻击》，并将你的下个回合固定为顺风状态，若该《攻击》由通常牌牌生成，则将该牌置入弃牌区；若由王牌生成，则将该牌变为使用后状态。失败的《攻击》不可被对应。",
        textZhAdditional: "（进行潜水时，将此牌移动到「已使用」的区域）",
        textZhG1Additional: "（进行潜水时，将此牌移至“使用后”区域）",
        textKo: "이 턴 중, 현재의 간격이 1 감소하고, 달인의 간격이 1 감소한다.\n만약 《공격》에 잠수전진/후퇴 카드 효과를 해결했다면, 간격 적용 후 바로 간격을 판정한다.\n만약 잠수전진/후퇴로 인해 그 공격이 적정간격을 벗어났다면, 그 《공격》을 실패로 간주하고,\n해결하지 않은 채로 버림패/사용됨으로 보낸 뒤, 다음 턴에 당신은 반드시 순풍이 된다.\n\n공격이 통상패라면 버림패로, 비장패라면 사용된 상태가 된다.\n실패한 공격에는 대응할 수 없다.",
        textKoAdditional: "(잠수를 할 때, 이 카드를 사용 영역으로 이동)",
        textEn: "For the rest of the turn, the current Distance is decreased by 1, and the size of the Mastery Zone is decreased by 1.\n\nThen, if an attack caused this card to be revealed, immediately check its Range. If the current Distance isn't in Range, that attack fails to initiate, and there is a tailwind next turn.\n\n(A failed Normal Attack card is put into its owner's played pile. A failed Special Attack card becomes Devoted. A failed attack cannot be Reacted to.)",
        textEnAdditional: "(To Submerge, move this card to your played pile.)",
    },
    "17-hatsumi-A1-d-2h": {
        megami: "hatsumi",
        anotherID: "A1",
        replace: "",
        name: "《潜水》",
        nameEn: "Submersion",
        nameZh: "《潜水》",
        nameZhG1: "潜水",
        nameKo: "《잠수》",
        ruby: "",
        rubyEn: "",
        baseType: "diving",
        type: undefined,
        text: "",
        textAdditional: "（ダブルクリックまたは右クリックで表向きにする）",
        textZh: "",
        textZhG1: "",
        textZhAdditional: "（双击或者右键来公开此牌）",
        textZhG1Additional: "（双击或右击将此牌翻为正面朝上）",
        textKo: "",
        textKoAdditional: "(더블 클릭 또는 우클릭으로 앞면 표시로 한다)",
        textEn: "",
        textEnAdditional: "(Double-click or right-click to reveal this card.)",
    },
    "17-hatsumi-A1-d-2": {
        megami: "hatsumi",
        anotherID: "A1",
        replace: "",
        name: "《潜水後退》",
        nameEn: "Backward Submersion",
        nameZh: "《潜水后退》",
        nameZhG1: "潜水后退",
        nameKo: "《잠수후퇴》",
        ruby: "",
        rubyEn: "",
        baseType: "diving",
        type: undefined,
        text: "このターン中、現在の間合は1増加し、達人の間合は1大きくなる。\nその後、これを公開させた《攻撃》があるならば直ちに間合を判定する。それが外れたならば《攻撃》を失敗として解決せずに終了し、次のターンにあなたは順風となる。\n\n攻撃が通常札によるものならば捨て札に、切札によるものならば使用済になる。\n失敗した攻撃への対応はできない。",
        textAdditional: "（潜水を行う場合、このカードを「使用済み」領域へ移動）",
        textZh: "这个回合中，当前的距增大1，达人距离增大1。\n这之后，如果是以《攻击》来公开的此潜水则立刻查看当前攻击距离是否符合，若是不符合则《攻击》直接失败不进行结算，且下个回合你成为顺风。\n\n攻击是通常牌的话置入弃牌，王牌的话变为已使用。\n无法对失败了的攻击进行对应。",
        textZhG1: "本回合内，当前距离增大1，达人距离增大1。\n然后，若此牌因使用《攻击》牌触发，则立即进行一次距离检查。若当前距离不包含于攻击距离，则视为对手没有进行过该《攻击》，并将你的下个回合固定为顺风状态，若该《攻击》由通常牌牌生成，则将该牌置入弃牌区；若由王牌生成，则将该牌变为使用后状态。失败的《攻击》不可被对应。",
        textZhAdditional: "（进行潜水时，将此牌移动到「已使用」的区域）",
        textZhG1Additional: "（进行潜水时，将此牌移至“使用后”区域）",
        textKo: "이 턴 중, 현재의 간격이 1 증가하고, 달인의 간격이 1 증가한다.\n만약 《공격》에 잠수전진/후퇴 카드 효과를 해결했다면, 간격 적용 후 바로 간격을 판정한다.\n만약 잠수전진/후퇴로 인해 그 공격이 적정간격을 벗어났다면, 그 《공격》을 실패로 간주하고,\n해결하지 않은 채로 버림패/사용됨으로 보낸 뒤, 다음 턴에 당신은 반드시 순풍이 된다.\n\n공격이 통상패라면 버림패로, 비장패라면 사용된 상태가 된다.\n실패한 공격에는 대응할 수 없다.",
        textKoAdditional: "(잠수를 할 때, 이 카드를 사용 영역으로 이동)",
        textEn: "For the rest of the turn, the current Distance is increased by 1, and the size of the Mastery Zone is increased by 1.\n\nThen, if an attack caused this card to be revealed, immediately check its Range. If the current Distance isn't in Range, that attack fails to initiate, and there is a tailwind next turn.\n\n(A failed Normal Attack card is put into its owner's played pile. A failed Special Attack card becomes Devoted. A failed attack cannot be Reacted to.)",
        textEnAdditional: "(To Submerge, move this card to your played pile.)",
    },
    "21-kamuwi-o-n-1": {
        megami: "kamuwi",
        name: "紅刃",
        nameEn: "Crimson Edge",
        nameZh: "红刃",
        nameZhG1: "红刃",
        nameKo: "붉은 칼날",
        ruby: "こうじん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3",
        damage: "3/1",
        text: "(+1) 【常時】この《攻撃》は+1/+1となる。",
        textZh: "(+1) 【常时】此《攻击》得+1/+1。",
        textZhG1: "禁忌+1～【常时】此《攻击》得+1/+1。",
        textKo: "(+1) 【상시】이 《공격》은 +1/+1을 얻는다.",
        textEn: "(+1): Forced: This attack gains +1/+1.",
    },
    "21-kamuwi-o-n-2": {
        megami: "kamuwi",
        name: "散華刃",
        nameEn: "Scattering Strike",
        nameZh: "散华刃",
        nameZhG1: "散华刃",
        nameKo: "산화인",
        ruby: "さんげじん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-4",
        damage: "3/1",
        text: "(+1) 【攻撃後】相手のオーラが4以下ならば、相手のオーラに1ダメージを与える。\n【攻撃後】基本動作《纏い》を1回行う。",
        textZh: "(+1) 【攻击后】敌装仅4或以下的话，给予敌装1点伤害。\n【攻击后】进行1次基本动作《装附》。",
        textZhG1: "禁忌+1～【攻击后】若敌装中樱花结晶的数目小于等于4，则对敌装造成1点伤害，执行1次基本动作《装附》。",
        textKo: "(+1) 【공격후】상대의 오라가 4 이하라면 상대의 오라에 1 피해를 준다.\n【공격후】기본동작 《휘감기》를 1번 한다.",
        textEn: "(+1): After Attack: If your opponent has 4 or fewer Sakura tokens on their Aura, deal 1 damage to their Aura.\n\nAfter Attack: Perform a Recover basic action.",
    },
    "21-kamuwi-o-n-3": {
        megami: "kamuwi",
        name: "四剣乱刃",
        nameEn: "Flurry of Blades",
        nameZh: "四剑乱刃",
        nameZhG1: "四剑乱刃",
        nameKo: "사검난인",
        ruby: "しけんらんじん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-4",
        damage: "2/1",
        text: "(+1) 全力化：【攻撃後】攻撃『適正距離2-4、1/1』を3回行う。",
        textZh: "(+1) 全力化：【攻击后】进行三次“攻击距离2-4、伤害1/1”的攻击。",
        textZhG1: "禁忌+1～全力化：【攻击后】进行3次“攻击距离2-4 伤害1/1”的攻击。",
        textKo: "(+1) 전력화：【공격후】공격 『적정거리 2-4, 1/1』을 3번 한다.",
        textEn: '(+1): All-Out: After Attack: You attack with "Range: 2-4, Damage: 1/1" three times.',
    },
    "21-kamuwi-o-n-4": {
        megami: "kamuwi",
        name: "斬り払い",
        nameEn: "Sever",
        nameZh: "斩除",
        nameZhG1: "格杀",
        nameKo: "베어내기",
        ruby: "きりはらい",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "1-4",
        damage: "1/1",
        text: "(+1) 【攻撃後】対応した《攻撃》を打ち消す。その《攻撃》が切札ならば、禁忌ゲージを2上げる。",
        textZh: "(+1) 【攻击后】打消被对应的《攻击》。该《攻击》为王牌的话，禁忌槽上升2。",
        textZhG1: "禁忌+1～【攻击后】打消被对应的《攻击》。若该《攻击》为王牌，则禁忌槽的值增加2。",
        textKo: "(+1) 【공격후】대응한 《공격》을 무효화한다. 그 《공격》이 비장패라면, 금기 게이지를 +2한다.",
        textEn: "(+1): After Attack: Cancel the attack you played this card as a Reaction to. If that attack was Special, increase your Taboo gauge by 2.",
    },
    "21-kamuwi-o-n-5": {
        megami: "kamuwi",
        name: "棘縫い",
        nameEn: "Jagged Weave",
        nameZh: "穿棘",
        nameZhG1: "织荆",
        nameKo: "바늘꿰기",
        ruby: "とげぬい",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "現在の間合に応じて以下を行う。\n5以上…間合→ダスト：2\n2以上4以下…このターンにあなたが次に行う他のメガミによる切札でない《攻撃》は+1/+0となり、対応不可（通常札）を得る。\n1以下…ダスト→間合：2",
        textZh: "根据当前距执行以下效果：\n5或以上…距→2→虚\n2到4之间…本回合你下次其他女神的非王牌的《攻击》得+1/+0和不可被对应（通常牌）。\n1或以下…ダスト→間合：2",
        textZhG1: "根据当前距离结算以下效果。\n大于等于5……距（2）→虚\n大于等于2小于等于4……本回合内你进行的下一次其他女神的非王牌的《攻击》获得+1/+0与不可被对应（通常牌）。\n小于等于1......虚（2）→距。",
        textKo: "현재 간격에 따라서 아래의 효과를 발동한다.\n5이상…간격→더스트：2\n2이상 4이하…이 턴에 당신이 다음에 하는 다른 여신의 비장패가 아닌 《공격》은 +1/+0을 얻고 대응불가(통상패)도 얻는다.\n1이하…더스트→간격：2",
        textEn: "Based on the current Distance, perform the following:\n5 or more: Distance (2)→ Shadow\n2 to 4: Your next non-Special attack from a non-Kamuwi Megami this turn gains +1/+0 and No Reactions (Normal).\n1 or less: Shadow (2)→ Distance",
    },
    "21-kamuwi-o-n-6": {
        megami: "kamuwi",
        name: "血晶乱流",
        nameEn: "Flowing Blood",
        nameZh: "血晶乱流",
        nameZhG1: "血晶乱流",
        nameKo: "혈정난류",
        ruby: "けっしょうらんりゅう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "以下から異なる2つを選び、上から順に行う。\n・攻撃『適正距離5-9、4/1』を行う。\n・現在の間合が5以上ならば、間合→ダスト：2\n・攻撃『適正距離2-4、2/2』を行う。\n・ダスト→自オーラ：2",
        textZh: "选择以下不同的两项，按从上到下的顺序执行：\n●进行一次“攻击距离5-9、伤害4/1”的攻击；\n●当前距离大于等于5，则：距→2→虚；\n●进行一次“攻击距离2-4、伤害2/2”的攻击；\n●虚→2→自装",
        textZhG1: "选择2项，按由上至下的顺序执行（不能选择同一项2次）：\n1.进行一次“攻击距离5-9 伤害4/1”的攻击；\n2.若当前距离大于等于5，则距（2）→虚\n3.进行一次“攻击距离2-4 伤害2/2”的攻击；\n4.虚（2）→自装",
        textKo: "아래에서 서로 다른 효과를 2개 고르고 위에서부터 발동한다.\n・공격 『적정거리 5-9, 4/1』을 한다.\n・현재의 간격이 5이상이라면, 간격→더스트：2\n・공격 『적정거리 2-4, 2/2』을 한다.\n・더스트→오라(자신)：2",
        textEn: 'Choose two, then resolve them starting with the topmost:\n・You attack with "Range: 5-9, Damage: 4/1".\n・If the current Distance is 5 or more, Distance (2)→ Shadow\n・You attack with "Range: 2-4, Damage: 2/2".\n・Shadow (2)→ Your Aura',
    },
    "21-kamuwi-o-n-7": {
        megami: "kamuwi",
        name: "血飛沫",
        nameEn: "Sanguine Spray",
        nameZh: "血飞溅",
        nameZhG1: "血飞沫",
        nameKo: "피보라",
        ruby: "ちしぶき",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "(+1) 【展開時】攻撃『適正距離3、2/2、不可避』を行う。\n----\n隙\n【展開中】相手のオーラへと桜花結晶が移動するならば、それは代わりにダストへと移動する。そうした場合、このカードの上から桜花結晶を1つダストに送る。",
        textZh: "(+1) 【展开时】进行一次“攻击距离3、伤害2/2、不可被闪避”的攻击。\n----\n破绽\n【展开中】樱花结晶移动到敌装中时，改为移动到虚。若如此做，将此牌上的1个樱花结晶移动到虚。",
        textZhG1: "禁忌+1～【展开时】进行一次“攻击距离3 伤害2/2 不可被闪避”的攻击。\n----\n破绽\n【展开中】若任意数量的樱花结晶将被移入敌装，则不将其移至敌装，而改为移至虚。若如此做，从此牌上移除1个樱花结晶。",
        textKo: "(+1) 【전개시】공격 『적정거리 3, 2/2, 불가피』를 한다.\n----\n빈틈\n【전개중】상대의 오라로 벛꽃결정이 이동한다면, 그 대신 더스트로 이동시킨다. 그렇게 했다면, 이 카드 위에서 벛꽃결정 하나를 더스트로 보낸다.",
        textEn: '(+1): Initialize: You attack with "Range: 3, Damage: 2/2, Unavoidable".\n----\nUnguarded\n\nOngoing: If Sakura tokens would be moved to your opponent\'s Aura, instead move them to Shadow. If you do, move 1 Sakura token from this card to Shadow.',
    },
    "21-kamuwi-o-s-1": {
        megami: "kamuwi",
        name: "灯",
        nameEn: "Kindle",
        nameZh: "灯",
        nameZhG1: "灯",
        nameKo: "등불",
        ruby: "ともしび",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "(+2) あなたのフレアが2以上ならば、フレアが1になるように桜花結晶をダストに送る。\n追加札から「暁」を未使用で得る。",
        textZh: "(+2) 若自气的樱花结晶数大于等于2，则保留其中1个，其余移至虚。\n从追加牌区以未使用的状态获得『晓』。",
        textZhG1: "禁忌+2～若自气中樱花结晶的数目大于等于2，则保留其中1个樱花结晶，其余移至虚。从追加牌中将『晓』以未使用状态加入王牌。",
        textKo: "(+2) 당신의 플레어가 1 이하가 될 때 까지 벛꽃결정을 더스트로 보낸다,\n추가패에서 「새벽」을 미사용 상태로 얻는다.",
        textEn: '(+2): If there are 2 or more Sakura tokens on your Flare, move all but 1 of them to Shadow. Add your set aside "Daybreak" to your Special cards, face-down.',
    },
    "21-kamuwi-o-s-1-ex-1": {
        megami: "kamuwi",
        name: "暁",
        nameEn: "Daybreak",
        nameZh: "晓",
        nameZhG1: "晓",
        nameKo: "새벽",
        ruby: "あかつき",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "21-kamuwi-o-s-1",
        type: "attack",
        range: "3-7",
        damage: "6/4",
        cost: "6",
        text: "超克\n【常時】この《攻撃》が通常札に対応されたならば、それを解決する代わりに捨て札に置き、この《攻撃》を-1/+0する。切札に対応されたならば、それを解決する代わりに使用済にし、この《攻撃》を-1/-1する。\n【攻撃後】このカードを取り除く。",
        textZh: "超克\n【常时】此《攻击》被通常牌对应时，不结算那张对应，改为弃置之，之后此《攻击》得-1/+0；此《攻击》被王牌对应时，不结算那张对应，改为将其变为已使用，之后此《攻击》得-1/-1。\n【攻击后】将此牌移出游戏。",
        textZhG1: "超克\n【常时】若此《攻击》被通常牌对应，则不结算该牌，而改为将其置入弃牌区，此《攻击》得-1/+0；若被王牌对应，则不结算该牌，而改为将其变为使用后状态，此攻击得-1/-1。\n【攻击后】将此牌移出游戏。",
        textKo: "초극\n【상시】이 《공격》이 통상패에 대응되었다면, 그것을 해결하는 대신 버림패로 보내고, 이 《공격》은 -1/+0을 얻는다.\n비장패에 대응되었다면, 그것을 해결하는 대신\n사용됨으로 보내고, 이 《공격》-1/-1을 얻는다.\n【공격후】이 카드를 게임에서 제외한다.",
        textEn: "Overwhelm\n\nForced: If a Normal Reaction is made to this attack, instead of resolving that Reaction, put it into its owner's played pile and this attack gets -1/+0. If a Special Reaction is made to this attack, instead of resolving that Reaction, it becomes Devoted and this attack gets -1/-1.\n\nAfter Attack: Remove this card from the game.",
        removable: true,
    },
    "21-kamuwi-o-s-2": {
        megami: "kamuwi",
        name: "阡",
        nameEn: "Gravewalk",
        nameZh: "阡",
        nameZhG1: "阡",
        nameKo: "무덤길",
        ruby: "はかみち",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "4",
        cost: "3",
        text: "(+1) 【展開時】攻撃『適正距離3-4、3/3、対応不可（通常札）』を行う。\n----\n【常時】このカードの上に桜花結晶が置かれているならば、あなたは勝利できない。",
        textZh: "(+1) 【展开时】进行一次“攻击距离3-4、伤害3/3、不可被对应（通常牌）”的攻击。\n----\n【常时】此牌上有樱花结晶放置时，你无法胜利。",
        textZhG1: "禁忌+1～【展开时】进行一次“攻击距离3-4 伤害3/3 不可被对应（通常牌）”的攻击。\n----\n【常时】若此牌上置有樱花结晶，则你不能因敌命中樱花结晶的数目降至0而赢得本局游戏。",
        textKo: "(+1) 【전개시】공격 『적정거리3-4、3/3, 대응불가(통상패)』를 수행한다.\n----\n【상시】이 카드 위에 벚꽃결정이 올려져 있다면, 당신은 승리할 수 없다.",
        textEn: '(+2): Initialize: You attack with "Range: 3-4, Damage: 3/3, No Reactions (Normal)".\n----\nForced: As long as there are Sakura tokens on this card, you cannot win the game.',
    },
    "21-kamuwi-o-s-3": {
        megami: "kamuwi",
        name: "尸",
        nameEn: "Carcass",
        nameZh: "尸",
        nameZhG1: "尸",
        nameKo: "주검",
        ruby: "かたしろ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "0-6",
        damage: "0/0",
        cost: "1",
        text: "【攻撃後】このターン中、このカードが対応した《攻撃》を行ったメガミのカードを相手が次に使用するならば、追加コストとして手札からそのメガミのカード1枚を捨て札にしなくてはならない。\n----\n【即再起】あなたの禁忌ゲージが6の倍数になる。",
        textZh: "【攻击后】本回合中，被此牌对应的《攻击》所属女神的牌，在下次使用时的时候不先弃一张那个女神的牌就不能使用。\n----\n【即再起】你的禁忌槽成为6的倍数。",
        textZhG1: "【攻击后】本回合内，对手下一次使用被对应的《攻击》的使用者的牌时，必须从手牌中弃置1张该女神的牌作为费用。\n----\n【即再起】你的禁忌槽的值变为6的倍数。",
        textKo: "【공격후】이 턴 중에, 이 카드로 대응한 공격을 수행한 여신의 카드를 상대가 다음에 사용할 때, 추가 코스트로 손패에서 해당 여신의 카드 1장을 버림패로 보내야 한다.\n----\n【즉재기】당신의 금기 게이지가 6의 배수가 된다.",
        textEn: "After Attack: The next time this turn your opponent plays a card from the same Megami as the card you played this card as a Reaction to, as an additional cost they must put a card from the same Megami from their hand into their played pile.\n\nImmediate Resurgence: Your Taboo gauge becomes a multiple of 6.",
    },
    "21-kamuwi-o-s-4": {
        megami: "kamuwi",
        name: "理",
        nameEn: "Balance",
        nameZh: "理",
        nameZhG1: "理",
        nameKo: "이치",
        ruby: "ことわり",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "3",
        text: "【常時】あなたのライフが6以下でないと、このカードは使用できない。\nダスト→自ライフ：1\n【使用済】相手が《行動》の切札を使用するならば、追加コストとして手札から同一のメガミのカード1枚を捨て札にしなくてはならない。",
        textZh: "【常时】只有在自命仅有6或更低的时候，才能使用此牌。\n虚→1→自命\n【使用后】对手使用《行动》王牌时不先弃一张那个女神的牌就不能使用。",
        textZhG1: "【常时】仅当自命中的樱花结晶的数目小于等于6时可以使用此牌。\n虚（1）→自命\n【使用后】对手使用《行动》王牌时，必须从手牌中弃置1张同使用者的牌作为费用。",
        textKo: "【상시】당신의 라이프가 6이하가 아니라면, 이 카드를 사용할 수 없다.\n더스트→라이프(자신)：1\n【사용됨】상대가 《행동》 비장패를 사용할 때, 추가 코스트로 손패에서 동일한 여신의 카드 1장을 버림패로 보내야 한다.",
        textEn: "Forced: You can't play this card unless your Life is 6 or less.\n\nShadow (1)→ Your Life\n\nDevoted: As an additional cost to play a Special Action card, your opponent must put a card from the same Megami from their hand into their played pile.",
    },
    "22-renri-o-n-1": {
        megami: "renri",
        name: "嘘突き",
        nameEn: "Charm",
        nameZh: "杀谎",
        nameZhG1: "荼酷谩言",
        nameKo: "거짓 찌르기",
        ruby: "うそつき",
        rubyEn: "",
        rubyZh: "撒谎",
        baseType: "normal",
        type: "attack",
        range: "1-2",
        damage: "2/1",
        text: "偽証\n【常時】この偽証が反証されなかったならば、このカードを公開してもよい。それが偽物だったならば、相手はオーラへのダメージを選べない。\n（公開したならば解決後に捨て札になる）",
        textZh: "伪证\n【常时】如果这个伪证没有被反证，则你可以公开这张牌。如果为假，则对手无法选择承受对装伤害。\n（如果公开了此牌则结算后置入弃牌）",
        textZhG1: "伪证\n【常时】若此伪证未被反证，则你可以展示用于伪证的牌。若该牌并非此牌，则对手不能选择由装承受此《攻击》的伤害。若你展示了该牌，则结算完毕后，不将该牌移至盖牌区，而改为移至弃牌区。",
        textKo: "위증\n【상시】이 위증이 반증되지 않았다면, 이 카드를\n공개해도 된다. 그것이 거짓이었다면, 상대는 오라 데미지를 선택할 수 없다.\n(공개했다면 해결한 후에 버림패가 된다.)",
        textEn: "Falsehood\n\nForced: If this Falsehood was not refuted, you may reveal this card. If it was a fake, your opponent cannot choose to take damage to Aura.\n(Put it into your played pile if it was revealed.)",
        removable: true,
        lie: true,
    },
    "22-renri-o-n-2": {
        megami: "renri",
        name: "都度討ち",
        nameEn: "Compound",
        nameZh: "嗟连",
        nameZhG1: "骛虚谝言",
        nameKo: "임시변통",
        ruby: "つどうち",
        rubyEn: "",
        rubyZh: "接连",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        damage: "2/1",
        text: "偽証\n【常時】あなたの捨て札と付与札に通常札が合計3枚以上あるならば、この《攻撃》は+1/+0となる。",
        textZh: "伪证\n【常时】你的弃牌和付与区的通常牌合计有3张或更多的话，此攻击得+1/+0。",
        textZhG1: "伪证\n【常时】若你的弃牌区与付与区的通常牌的张数之和大于等于3，则此《攻击》获得+1/+0。",
        textKo: "위증\n【상시】당신의 버림패 및 부여패 영역에 통상패가\n합계 3장 이상 있다면, 이 《공격》은 +1/+0 된다.",
        textEn: "Falsehood\n\nForced: If there are 3 or more Normal cards among your played pile and Enhancements in play, this attack gains +1/+0.",
        removable: true,
        lie: true,
    },
    "22-renri-o-n-3": {
        megami: "renri",
        name: "玄塗り",
        nameEn: "Redact",
        nameZh: "墨黑",
        nameZhG1: "涂污谗言",
        nameKo: "누명 씌우기",
        ruby: "くろぬり",
        rubyEn: "",
        rubyZh: "抹黑",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "1-5",
        damage: "1/2",
        text: "偽証（偽証は対応では行えない）\n【攻撃後】このターン中にダストから桜花結晶が移動しているならば、対応した《攻撃》に以下を行う。\nその《攻撃》はオーラへのダメージが3以上ならば-1/+0、そうでないならば+0/-1となる。",
        textZh: "伪证（不能用伪证来对应）\n【攻击后】这个回合如果有樱花结晶从虚移动到其他区域的话，被对应的《攻击》受以下效果：\n此《攻击》的对装伤害为3或以上的话得-1/+0，否则得+0/-1。",
        textZhG1: "伪证（对应时不能进行伪证）\n【攻击后】若本回合内有樱花结晶移出虚，则被对应的《攻击》结算以下效果。\n若该《攻击》的对装伤害大于等于3则获得-1/+0，否则获得+0/-1。",
        textKo: "위증（위증은 대응으로 사용할 수 없다）\n【공격후】이 턴 중에 더스트로부터 벛꽃결정이 이동한 적이 있다면, 대응한 《공격》에 다음을 수행한다;\n그 《공격》이 오라의 데미지가 3 이상이라면 -1/+0, 그렇지 않다면 +0/-1 된다.",
        textEn: "Falsehood (You cannot play cards face-down as a Reaction to an attack.)\n\nAfter Attack: If any Sakura tokens were moved from Shadow this turn:\nIf the attack you played this card as a Reaction to has 3 or more Damage to Aura, it gets -1/+0. Otherwise, it gets +0/-1.",
        removable: true,
        lie: true,
    },
    "22-renri-o-n-4": {
        megami: "renri",
        name: "煽り殺陣",
        nameEn: "Leverage",
        nameZh: "竦恿",
        nameZhG1: "唆使",
        nameKo: "약올리는 몸짓",
        ruby: "あおりたて",
        rubyEn: "",
        rubyZh: "怂恿",
        baseType: "normal",
        type: "action",
        text: "相手を畏縮させる。\nこのターン中に相手が反証に失敗しているならば、あなたの捨て札にある偽証を持つカード1枚を選び、手札に戻してもよい。",
        textZh: "令对手畏缩。\n这个回合对手反证失败过的话，可以选择你弃牌中的一张带伪证的牌移回手牌。",
        textZhG1: "对手畏缩。\n若对手本回合内曾反证失败，则你可以从弃牌区中选择1张具伪证关键字的牌置入手牌。",
        textKo: "상대를 위축시킨다.\n이번 턴 동안 상대가 반증에 실패한 적이 있다면,\n당신은 버림패에 있는 위증을 가진 카드 1장을 선택하고, 손패로 되돌려도 된다.",
        textEn: "Flinch your opponent.\n\nIf your opponent unsuccessfully refuted a Falsehood this turn, you may return a card with Falsehood from your played pile to your hand.",
    },
    "22-renri-o-n-5": {
        megami: "renri",
        name: "雲喰い",
        nameEn: "Beguile",
        nameZh: "喰云",
        nameZhG1: "鹘鹜谖言",
        nameKo: "뜬구름 잡기",
        ruby: "くもぐい",
        rubyEn: "",
        rubyZh: "吞云",
        baseType: "normal",
        type: "action",
        text: "偽証\nあなたの捨て札と付与札に通常札が合計3枚以上あるならば、相手は手札を1枚伏せ札にする。伏せ札にしようとした上で行えないならば、相手を畏縮させる。\n【常時】この偽証に反証されてこのカードが本物だったならば、相手は焦燥を1回でなく2回受ける。",
        textZh: "伪证\n你的弃牌和付与区的通常牌合计有3张或更多的话，对手将1张手牌盖伏。无法盖伏的话，令对手畏缩。\n【常时】这个伪证被反证时如果为真，对手承受2次焦躁而不是1次。",
        textZhG1: "伪证\n若你的弃牌区与付与区中的通常牌的张数之和大于等于3，则对手盖伏1张手牌。若对手不能如此做，则对手畏缩。\n【常时】若此伪证被对手反证，且用于伪证的牌为此牌，则对手因反证失败受到的焦躁改为2次。",
        textKo: "위증\n당신의 버림패 및 부여패 영역에 통상패가 합계 3장 이상 있다면, 상대는 손패 1장을 덮은패로 만든다.\n덮은패로 보내려 했으나 보낼 수 없었다면 상대를 위축시킨다.\n【상시】이 위증이 반증되었을 때 이 카드가 진짜임이 밝혀지면, 상대는 초조 데미지를 1번이 아닌 2번을 받는다.",
        textEn: "Falsehood\n\nIf there are 3 or more Normal cards among your played pile and Enhancements in play, your opponent discards a card. If they tried to do so but could not, flinch them.\n\nForced: If this Falsehood is unsuccessfully refuted, your opponent takes Burnout damage twice instead of once.",
        removable: true,
        lie: true,
    },
    "22-renri-o-n-6": {
        megami: "renri",
        name: "魚吊り",
        nameEn: "Motive",
        nameZh: "吊魚",
        nameZhG1: "辜毒谄言",
        nameKo: "낚시질",
        ruby: "うおつり",
        rubyEn: "",
        rubyZh: "钓鱼",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "偽証（偽証は対応では行えない）\n間合→ダスト：1",
        textZh: "伪证（不能用伪证来对应）\n距→1→虚",
        textZhG1: "伪证（对应时不能进行伪证）\n距（1）→虚",
        textKo: "위증（위증은 대응으로 사용할 수 없다）\n간격→더스트：1",
        textEn: "Falsehood (You cannot play cards face-down as a Reaction to an attack.)\n\nDistance (1)→ Shadow",
        removable: true,
        lie: true,
    },
    "22-renri-o-n-7": {
        megami: "renri",
        name: "惹き騙り",
        nameEn: "Enclose",
        nameZh: "搪唱",
        nameZhG1: "蛊惑",
        nameKo: "속임수",
        ruby: "ひきがたり",
        rubyEn: "",
        rubyZh: "弹唱",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開時/破棄時】現在の間合が2以上ならば、間合→ダスト：1",
        textZh: "【展开时/破弃时】当前的距为2或以上的话，距→1→虚",
        textZhG1: "【展开时/破弃时】若当前距离大于等于2，则距（1）→虚",
        textKo: "【전개시/파기시】현재 간격이 2이상이라면, \n간격→더스트：1",
        textEn: "Initialize/Disenchant: If the current Distance is 2 or more, Distance (1)→ Shadow.",
    },
    "22-renri-o-s-1": {
        megami: "renri",
        name: "ルルララリ",
        nameEn: '<span class="renri-hidden-letter-en">W</span>allow',
        nameZh: "布可桡术",
        nameZhG1: "谰戾淋漓",
        nameKo: "루루라라리",
        ruby: "＝ル＝＝＝",
        rubyEn: "",
        rubyZh: "不可饶恕",
        baseType: "special",
        type: "attack",
        range: "0-10",
        damage: "1/2",
        cost: "4",
        text: "【常時】この《攻撃》がダメージを与えるに際してこのターン中に相手が反証に失敗しているならば、相手は片方を選ぶのではなく両方のダメージを受ける。\n【使用済】あなたの終了フェイズに相手のオーラに1ダメージを与え、このカードを未使用に戻す。",
        textZh: "【常时】此《攻击》给予伤害的时候如果对手在本回合反证失败过，则改为对敌装和敌命均造成伤害。\n【使用后】在你的结束步骤，给予敌装1点伤害并将此卡恢复为未使用的状态。",
        textZhG1: "【常时】若本回合内对手曾反证失败，则此攻击对敌装和敌命均造成伤害。\n【使用后】当你的结束阶段开始时，对敌装造成1点伤害，然后将此牌变为未使用状态。",
        textKo: "【상시】이 공격이 데미지를 줄 때, 이번 턴에 상대가 반증에 실패한 적이 있다면, 오라와 라이프 양쪽의 데미지를 받는다.\n【사용됨】자신의 턴의 종료 페이즈에, 상대의 오라에 1 데미지를 준다.\n그 후 이 카드를 미사용으로 되돌린다.",
        textEn: "Forced: If your opponent unsuccessfully refuted a Falsehood this turn, this attack deals damage to both Aura and Life.\n\nDevoted: At the end of your turn, deal 1 damage to your opponent's Aura, then turn this card face-down.",
    },
    "22-renri-o-s-2": {
        megami: "renri",
        name: "ラナラロミレリラ",
        nameEn: 'Sp<span class="renri-hidden-letter-en">la</span>y',
        nameZh: "衎鉴你了",
        nameZhG1: "立睖凌厉",
        nameKo: "라나라로미레리라",
        ruby: "＝ナ＝＝ミ＝＝＝",
        rubyEn: "",
        rubyZh: "看见你了",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "4",
        text: "【常時】このカードは対応でしか使用できない。\n相手の手札を見て、《全力》でない他のメガミのカード1枚を選んでもよい。そうした場合、そのカードを使用するか伏せ札にする。使用されたカードはこのカードが対応している《攻撃》に対応しているものと扱う。",
        textZh: "【常时】此卡只能在对应时使用。\n查看对手手牌，你可以选择一张非全力的其他女神的《攻击》牌。若如此做，使用或者盖伏所选择的牌。使用了的话也视为对应了此卡所对应的那个《攻击》。",
        textZhG1: "【常时】仅当对应时可以使用此牌。\n检视对手的手牌，你可以从中选择1张其他女神的非《全力》的牌。若如此做，则你可以使用或盖伏该牌。所使用的牌视为对应了此牌对应的《攻击》。",
        textKo: "【상시】이 카드는 대응으로만 사용할 수 있다.\n상대의 손패를 보고 《전력》이 아닌 다른 여신의 카드 1장을 선택할 수 있다.\n그렇게 했다면, 그 카드를 사용하거나 덮은패로 만들 수 있다.\n사용한 카드는 이 카드가 대응하고 있는 《공격》에 대응하고 있는 것으로 취급한다.",
        textEn: "Forced: This card cannot be played except as a Reaction to an attack.\n\nLook at your opponent's hand. You may choose a non-Throughout card from a non-Renri Megami from it. If you do, either put it into their discard pile, or play it, treating it as if it were played as a Reaction to the original attack.",
    },
    "22-renri-o-s-3": {
        megami: "renri",
        name: "オリレテラレル",
        nameEn: 'Dumb<span class="renri-hidden-letter-en">found</span>',
        nameZh: "祰簌你罢",
        nameZhG1: "论理怜悧",
        nameKo: "내라라려루레",
        ruby: "オ＝＝テ＝＝ル",
        rubyEn: "",
        rubyZh: "告诉你吧",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "2",
        text: "眼前構築で選んでいないあなたの通常札から偽証を持つ1枚を公開し、それを使用する。その後、それを取り除く。このカードが対応している《攻撃》があるならば、使用されたカードはそれに対応しているものと扱う。\n----\n【再起】あなたの捨て札と付与札に通常札が合計3枚以上ある。",
        textZh: "从眼前构筑时没有被选上的通常牌里公开并使用1张带伪证的牌。之后，把那张牌移出游戏。若此牌对应了一个《攻击》，则视为所选择的牌也对应了那个《攻击》。\n----\n【再起】你的弃牌和付与区的通常牌合计有3张或更多。",
        textZhG1: "从眼前构筑时未选用的具伪证关键字的通常牌中选择1张，展示之，然后使用该牌。若此牌对应了一个《攻击》，则视为该牌也对应了该《攻击》。然后将该牌移出游戏。\n----\n【再起】你的弃牌区与付与区中的通常牌的张数之和大于等于3。",
        textKo: "	\n안전구축에서 선택하지 않은 당신의 통상패 중에서\n위증을 가진 카드 1장을 공개하고, 그 카드를 사용한다.그 후, 그 카드를 게임에서 제외한다.\n이 카드가 대응하고 있는 《공격》이 있다면,\n이 카드로 사용된 카드는 그 공격에 대응하고 있는 것으로 취급한다.\n----\n【재기】당신의 버림패 및 부여패 영역에 통상패가 합계 3장 이상 있다.",
        textEn: "Choose a Normal card with Falsehood that you did not include in your deck during deck construction, reveal it, and play it. Then, remove it from the game. If this card was played as a Reaction to an attack, treat that card as if it were played as a Reaction to that attack.\n\nResurgence: There are 3 or more Normal cards among your played pile and Enhancements in play.",
    },
    "22-renri-o-s-4": {
        megami: "renri",
        name: "夜山恋離のなれの果て",
        nameEn: "Renri's Last Gasp",
        nameZh: "夜山恋离的惯见之末",
        nameZhG1: "夜山恋离的终幕",
        nameKo: "요야마 렌리의 말로",
        ruby: "よやまれんりのなれのはて",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "3",
        cost: "1",
        text: "終端\n【展開時】追加札から「刻まれし衣」を未使用で得る。\n【展開中】この付与札の上の桜花結晶はあなたの開始フェイズの処理でしか移動しない。",
        textZh: "终端\n【展开时】从追加牌区域以未使用的状态获得『铭刻于衣』。\n【展开中】此付与牌上的樱花结晶只在你的准备阶段的处理步骤中才能被移动。\n",
        textZhG1: "终端\n【展开时】从追加牌中将『铭镌之衣』以未使用状态加入王牌。\n【展开中】仅在你的准备阶段移除所有付与牌上的樱花结晶时可以移除此牌上的樱花结晶。",
        textKo: "종단\n【전개시】추가패에서 『각인된 옷감』을 미사용으로 얻는다.\n【전개중】이 부여패 위의 벛꽃결정은 당신의 개시 페이즈의 처리에 의해서만 이동할 수 있다.",
        textEn: 'Terminal\n\nInitialize: Add your set aside "Sigiled Robe" to your Special cards, face-down.\n\nOngoing: Sakura tokens cannot leave this card except as part of the beginning of turn process on your turn.',
    },
    "22-renri-o-s-4-ex-1": {
        megami: "renri",
        name: "刻まれし衣",
        nameEn: "Sigiled Robe",
        nameZh: "铭刻于衣",
        nameZhG1: "铭镌之衣",
        nameKo: "각인된 옷감",
        ruby: "きざまれしころも",
        rubyEn: "",
        baseType: "special",
        extra: true,
        extraFrom: "22-renri-o-s-4",
        type: "variable",
        cost: "X",
        text: "【常時】このカードはあなたの「夜山恋離のなれの果て」の上の桜花結晶の個数に応じて、以下のカードの複製となる。\n3以上…「久遠ノ花」\n2…「完全論破」\n1…「望我」\n0…「御劔桐子の巫女神楽」",
        textAdditional: "（各カードの効果については、カードリストよりトコヨ、シンラ、終章ウツロ、レンリの該当カードを参照）",
        textZh: "【常时】此牌依照你的『夜山恋离的惯见之末』之上的樱花结晶的个数，成为以下对应卡牌的复制。\n3或以上…『久远之花』\n2…『完美驳倒』\n1…『夙愿』\n1…『御剑桐子的巫女神乐』",
        textZhG1: "【常时】根据你的『夜山恋离的终幕』上的樱花结晶的数目，此牌成为以下牌的复制。\n大于等于3……『久远之花』\n2……『完全论破』\n1……『夙愿』\n0……『御剑桐子的巫女神乐』",
        textZhAdditional: "（各张牌的具体效果，请参考卡牌一览中常世、森罗、终章虚路、恋离的对应卡牌。）",
        textKo: "【상시】이 카드는 당신의 『요야마 렌리의 말로』의 위에 놓인 벛꽃결정 수에 따라 이하의 카드의 복제가 된다.\n3이상…「영원의 꽃」\n2…「완전논파」\n1…「망아」\n0…「미츠루기 키리코의 무녀카구라」",
        textKoAdditional: "（각 카드의 효과는 토코요, 신라, 종장 우츠로, 렌리의 카드 리스트를 참조）",
        textEn: 'Forced: Based on the number of Sakura tokens on your "Renri\'s Last Gasp", this card is a copy of the following card:\n3 or more: "Immortal Flower"\n2: "Shake the Mind"\n1: "желание"\n0: "Kiriko\'s Sacred Dance"',
        textEnAdditional: '(The text of these cards can be found in the card list under "Tokoyo", "Shinra", "Final Chapter Utsuro", and "Renri".)',
        sealable: true,
    },
    "22-kiriko-o-s-1": {
        megami: "renri",
        name: "御劔桐子の巫女神楽",
        nameEn: "Kiriko's Sacred Dance",
        nameZh: "御剑桐子的巫女神乐",
        nameZhG1: "御剑桐子的巫女神乐",
        nameKo: "미츠루기 키리코의 무녀카구라",
        ruby: "みつるぎきりこのみこかぐら",
        rubyEn: "",
        baseType: "special",
        extra: true,
        type: "attack",
        range: "2-3",
        damage: "3/2",
        cost: "3",
        text: "【使用済】あなたが剣舞により基本動作《纏い》を行うならば、代わりに基本動作《宿し》を行ってもよい。\n【使用済】あなたがこのターンに3回目の剣舞を行った時、このカードを使用してもよい。（消費は支払う）",
        textAdditional: "（「剣舞」は現在のルール上では定義されておらず、意味を持たないキーワードである）",
        textZh: "【使用后】你因剑舞执行基本动作《装附》的时候，可以改为执行基本动作《聚气》。\n【使用后】你在每回合里执行第三次剑舞的时候，可以使用这张牌。（需要支付费用）",
        textZhG1: "【使用后】若你由剑舞执行基本动作《装附》，则你可以选择不执行基本动作《装附》，而改为执行基本动作《聚气》。\n【使用后】每当你进行本回合内的第3次剑舞时，结算完毕后你可以使用此牌。（需要支付费用）",
        textZhAdditional: "（「剑舞」在现在的规则中没有被定义，是没有意义的关键词）",
        textKo: "【사용됨】당신이 검무로 기본동작 《휘감기》를 수행할 때, 대신 기본동작《품기》를 수행할 수 있다.\n【사용됨】당신이 이번 턴에 3회째의 검무를 수행할 때,\n이 카드를 사용할 수 있다(비용은 지불한다)",
        textKoAdditional: "（「검무」는 현재 어떠한 정의도 되어 있지 않은 의미가 없는 키워드다）",
        textEn: "Devoted: If you would perform a Recover basic action with Sword Dance, you may instead perform a Focus basic action.\n\nDevoted: When you Sword Dance for the third time in a turn, you may play this card (paying its cost).",
        textEnAdditional: '("Sword Dance" currently has no rules associated with it, so the textbox of this card has no functional effect.)',
    },
};
// 物語セットのオリジナルカードデータ
exports.STORY_CARD_DATA = {
    "story-00-A-1": {
        megami: "yurina-story-0",
        name: "威風",
        nameEn: "Grandeur",
        nameZh: "威风",
        nameZhG1: "威风",
        nameKo: "위풍",
        ruby: "いふう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "0-4",
        damage: "1/-",
        text: "【攻撃後】対応した《攻撃》は-1/+0となる。",
        textZh: "【攻击后】被对应的《攻击》得-1/+0。",
        textZhG1: "【攻击后】被对应的《攻击》获得-1/-0。",
        textKo: "【공격후】대응한 《공격》은 -1/+0 된다.",
        textEn: "After Attack: The attack this card was played as a Reaction to gets -1/+0.",
    },
    "story-00-A-2": {
        megami: "yurina-story-0",
        name: "執着",
        nameEn: "Fixation",
        nameZh: "执着",
        nameZhG1: "执着",
        nameKo: "집착",
        ruby: "しゅうちゃく",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "相手を畏縮させる。\n自フレア→自オーラ：1",
        textZh: "令对手畏缩。\n自气→1→自装 ",
        textZhG1: "对手畏缩。\n自气（1）→自装",
        textKo: "상대를 위축시킨다.\n자신 플레어→자신 오라：1",
        textEn: "Flinch your opponent.\n\nYour Flare (1)→ Your Aura",
    },
    "story-00-A-3": {
        megami: "yurina-story-0",
        name: "斬華六道―羅",
        nameEn: "Realm of Rebirth - Asura",
        nameZh: "斩华六道—罗",
        nameZhG1: "斩华六道—罗",
        nameKo: "참화육도─나찰",
        ruby: "ざんかりくどう　ら",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "fullpower",
        cost: "2",
        text: "自ライフ→ダスト：1\n【使用済】あなたの《攻撃》は+1/+1となる。\n----\n【即再起】あなたが再構成以外でライフに1以上のダメージを受ける。",
        textZh: "自命→1→虚 \n【使用后】你的《攻击》得+1/+1。\n----\n【即再起】自命受到除重铸牌库以外的1点或以上的伤害。",
        textZhG1: "自命（1）→虚\n【使用后】你的《攻击》获得+1/+1。\n----\n【即再起】自命受到除重铸牌库以外的1点及以上的伤害。",
        textKo: "자신 라이프→더스트：1\n【사용됨】당신의 《공격》은 +1/+1 된다.\n----\n【즉재기】당신이 재구성 이외로 라이프에 1데미지 이상의 데미지를 받는다.",
        textEn: "Your Life (1)→ Shadow\n\nDevoted: Your attacks gain +1/+1.\n\nImmediate Resurgence: You take 1 or more damage to your Life, excluding reshuffle damage.",
    },
    "story-00-A-4": {
        megami: "yurina-story-0",
        name: "奥の手",
        nameEn: "Last Resort",
        nameZh: "杀手锏",
        nameZhG1: "玄奥之手",
        nameKo: "비장수",
        ruby: "おくのて",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "3",
        text: "対応した切札でない攻撃を打ち消し、相手の集中力は0となり、相手を畏縮させる。天音揺波と氷雨細音の因縁はここに結ばれる。",
        textZh: "打消被对应的非王牌的攻击，对手的集中力变为0，令对手畏缩。天音摇波和冰雨细音的命运在此相交。",
        textZhG1: "打消被对应的非王牌的《攻击》。对手的集中力变为0，对手畏缩。天音摇波与冰雨细音就此结下不解之缘。",
        textKo: "대응한 비장패가 아닌 공격을 무효로 하고, 상대의 집중력을 0으로 하고 위축시킨다. 아마네 유리나와 히사메 사이네의 인연은 여기서 맺어진다.",
        textEn: "Cancel the non-Special attack this card was played as a Reaction to. Your opponent's Vigor becomes 0. Flinch them. Thus do Yurina's and Saine's fates become entwined.",
    },
    "story-00-B-1": {
        megami: "saine-story-0",
        name: "氷刃",
        nameEn: "Shimmering Blade",
        nameZh: "冰刃",
        nameZhG1: "冰刃",
        nameKo: "얼음 칼날",
        ruby: "ひょうじん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-4",
        damage: "2/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "story-00-B-2": {
        megami: "saine-story-0",
        name: "渡渉",
        nameEn: "Fording",
        nameZh: "渡涉",
        nameZhG1: "涉渡",
        nameKo: "도섭",
        ruby: "としょう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "自オーラ→間合：1\n相オーラ→間合：1",
        textZh: "自装→1→距\n敌装→1→距 ",
        textZhG1: "自装（1）→距\n敌装（1）→距",
        textKo: "자신 오라→간격：1\n상대 오라→간격：1",
        textEn: "Your Aura (1)→ Distance\nOpponent's Aura (1)→ Distance",
    },
    "story-00-B-3": {
        megami: "saine-story-0",
        name: "雪上舞踏",
        nameEn: "Icy Terrain",
        nameZh: "雪上舞踏",
        nameZhG1: "雪上舞踏",
        nameKo: "설상무도",
        ruby: "せつじょうぶとう",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "0",
        text: "相オーラ→間合：1\n----\n【再起】このターンに3回以上の《攻撃》を行っている。",
        textZh: "敌装→1→距\n----\n【再起】在这个回合中进行了3次或以上的《攻击》。",
        textZhG1: "敌装（1）→距\n----\n【再起】本回合内你进行了3次或更多的《攻击》。",
        textKo: "상대 오라→간격：1\n----\n【재기】이 턴에 3번 이상의 《공격》을 했다.",
        textEn: "Opponent's Aura (1)→ Distance\n\nResurgence: You made 3 or more attacks this turn.",
    },
    "story-01-A-1": {
        megami: "yurina-story-1",
        name: "渾身",
        nameEn: "Full Swing",
        nameZh: "浑身",
        nameZhG1: "浑身",
        nameKo: "혼신",
        ruby: "こんしん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2",
        damage: "2/1",
        text: "【常時】奉納―あなたが意志を賭しているならば、この《攻撃》は+0/+2となり、不可避を得る。",
        textZh: "【常时】奉纳～如果你赌上意志的话，此攻击得+0/+2和不可避。",
        textZhG1: "【常时】奉纳～若你赌上了自己的意志，则此《攻击》获得+0/+2和不可被闪避。",
        textKo: "【상시】봉납―당신이 의지를 내걸고 있다면, 이 《공격》은 +0/+2 되고 불가피를 얻는다.",
        textEn: "Forced: Offering - If you're steeling your resolve, this attack gains +0/+2 and Unavoidable.",
    },
    "story-01-A-2": {
        megami: "yurina-story-1",
        name: "執念",
        nameEn: "Obsession",
        nameZh: "执念",
        nameZhG1: "执念",
        nameKo: "집념",
        ruby: "しゅうねん",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "相手を畏縮させる。\n奉納―あなたが意思を賭しているならば、相手は手札を1枚捨て札にする。",
        textZh: "令对手畏缩。\n奉纳～如果你赌上意志的话，对手弃1张牌。",
        textZhG1: "对手畏缩。\n奉纳～若你赌上了自己的意志，则对手弃1张牌。",
        textKo: "상대를 위축시킨다.\n봉납―당신이 의지를 내걸고 있다면, 상대는 손패를 1장 버림패로 한다.",
        textEn: "Flinch your opponent.\n\nOffering - If you're steeling your resolve, your opponent puts 1 card from their hand to their played pile.",
    },
    "story-01-A-3": {
        megami: "yurina-story-1",
        name: "斬華六道―人",
        nameEn: "Realm of Rebirth - Human",
        nameZh: "斩华六道—人",
        nameZhG1: "斩华六道—人",
        nameKo: "참화육도─사람",
        ruby: "ざんかりくどう　ひと",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "ダスト→自オーラ：2\n----\n【再起】奉納―あなたが意志を賭している。",
        textZh: "虚→2→自装\n----\n【再起】奉纳～如果你赌上意志的话。",
        textZhG1: "虚（2）→自装\n----\n【再起】奉纳～你赌上了自己的意志。",
        textKo: "더스트→자신 오라：2\n----\n【재기】봉납―당신이 의지를 내걸고 있다.",
        textEn: "Shadow (2)→ Your Aura\n\nResurgence: Offering - You are steeling your resolve.",
    },
    "story-01-A-4": {
        megami: "yurina-story-1",
        name: "天音揺波の底力：初日",
        nameEn: "Yurina's Final Blow - First Dawn",
        nameZh: "天音摇波的底力：初日",
        nameZhG1: "天音摇波的底力：初日",
        nameKo: "아마네 유리나의 저력:첫날",
        ruby: "あまねゆりなのそこぢから　はつひ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "fullpower",
        range: "1-4",
        damage: "5/5",
        cost: "5",
        text: "【常時】決死―あなたのライフが3以下でないと、このカードは使用できない。\n【常時】奉納―あなたが意志を賭しているならば、この《攻撃》は不可避を得る。",
        textAdditional: "（不可避を持つ攻撃は対応により現在の間合が変更されたとしても間合の再確認を行わない）",
        textZh: "【常时】决死～仅当自命中的樱花结晶数小于等于3时，才可以使用此牌。\n【常时】奉纳～如果你赌上意志的话，此攻击得不可避。",
        textZhG1: "【常时】决死～仅当自命中的樱花结晶的数目小于等于3时可以使用此牌。\n【常时】奉纳～若你赌上了自己的意志，则此《攻击》获得不可被闪避。",
        textZhAdditional: "（具有不可避的攻击即使因被对应导致当前的距的变动也不会再次检验攻击距离是否合法）",
        textKo: "【상시】필사―당신의 라이프가 3이하가 아니라면, 이 카드는 사용할 수 없다.\n【상시】봉납―당신이 의지를 내걸고 있다면, 이 《공격》은 불가피를 얻는다.",
        textEn: "Forced: Resolve - You can't play this card unless your Life is 3 or less.\n\nForced: Offering - If you're steeling your resolve, this attack gains Unavoidable.",
    },
    "story-01-B-1": {
        megami: "saine-story-1",
        name: "氷牙",
        nameEn: "Icefang",
        nameZh: "冰牙",
        nameZhG1: "冰牙",
        nameKo: "얼음 송곳니",
        ruby: "ひょうが",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3",
        damage: "2/2",
        text: "【常時】あなたの開始フェイズの開始時に相手のオーラが最大値ならば、捨て札にあるこのカードを手札に戻してもよい。",
        textZh: "【常时】你的准备阶段开始时敌装已达上限的话，可以将弃牌区中的此牌返回手牌。",
        textZhG1: "【常时】每当你的准备阶段开始时，若敌装中樱花结晶的数目等于最大值，则你可以将此牌从弃牌区置入手牌。",
        textKo: "【상시】당신의 개시 페이즈의 개시 시에 상대의 오라가 최대치라면, 버림패에 있는 이 카드를 손패로 되돌려도 좋다.",
        textEn: "Forced: At the beginning of your turn, if your opponent's Aura is equal to their maximum Aura, you may return this card from your played pile to your hand. ",
    },
    "story-01-B-2": {
        megami: "saine-story-1",
        name: "雪舞台",
        nameEn: "Snowy Stage",
        nameZh: "雪舞台",
        nameZhG1: "雪舞台",
        nameKo: "눈 무대",
        ruby: "ゆきぶたい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "5",
        text: "【展開中】達人の間合は1大きくなり、あなたと相手のオーラの最大値は1小さくなる。\n【展開中】現在のオーラが最大値より大きくなるならば、その分をダストへと移動させる。",
        textZh: "【展开中】达人距离的值增加1，自装和敌装的上限都减小1。\n【展开中】现在的装超出上限的部分移动到虚。",
        textZhG1: "【展开中】达人距离增大1，自装与敌装的最大值减小1。\n【展开中】若自装或敌装中樱花结晶的数目大于最大值，则将超出的结晶移至虚。",
        textKo: "【전개중】달인의 간격은 1늘리고, 당신과 상대의 최대 오라는 1적게 된다.\n【전개중】현재의 오라가 최대치보다 많다면, 그 만큼 더스트로 이동시킨다.",
        textEn: "Ongoing: The size of the Mastery Zone is increased by 1, and both players' maximum Aura is reduced by 1.\n\nOngoing: If a player has Aura in excess of their maximum, move those tokens to Shadow.",
    },
    "story-01-B-3": {
        megami: "saine-story-1",
        name: "氷雨細音の果ての果て：初雪",
        nameEn: "Saine's Final Stage - First Snow",
        nameZh: "冰雨细音的终焉之末",
        nameZhG1: "冰雨细音的终焉：初雪",
        nameKo: "히사메 사이네의 종말의 끝:첫눈",
        ruby: "ひさめさいねのはてのはて　はつゆき",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        subType: "reaction",
        range: "1-5",
        damage: "5/5",
        cost: "3",
        text: "【常時】このカードは切札に対する対応でしか使用できない。\n【常時】この《攻撃》によるダメージは対応した攻撃と同時に与えられる。",
        textZh: "【常时】仅当你对应王牌时可以使用此牌。\n【常时】此《攻击》造成的伤害和被对应的攻击同时结算。",
        textZhG1: "【常时】仅当你对应王牌时可以使用此牌。\n【常时】此《攻击》的伤害与被对应的《攻击》的伤害同时结算。",
        textKo: "【상시】이 카드는 비장패에 대한 대응으로만 사용할 수 있다.\n【상시】이 《공격》에 의한 데미지는 대응한 공격과 동시에 처리된다.",
        textEn: "Forced: This can only be played as a Reaction to a Special card.\n\nForced: This attack deals its damage simultaneously with the attack it was played as a Reaction to.",
    },
    "story-02-A-1": {
        megami: "chikage-story-2",
        name: "毒針・甲",
        nameEn: "Poison Needle - Kou",
        nameZh: "毒针・甲",
        nameZhG1: "毒针·甲",
        nameKo: "독침・갑",
        ruby: "どくばり　こう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3",
        damage: "1/1",
        text: "【攻撃後】滅灯毒が塗られていたならば、あなたは勝利する。",
        textZh: "【攻击后】如果涂上灭灯毒了的话，你直接获胜。",
        textZhG1: "【攻击后】若此毒针涂有灭灯毒，则你赢得本局游戏。",
        textKo: "【공격후】멸등독이 발라져 있었다면, 당신은 승리한다.",
        textEn: "After Attack: If Fading Light Toxin is applied to this needle, you win the game.",
    },
    "story-02-A-2": {
        megami: "chikage-story-2",
        name: "毒針・乙",
        nameEn: "Poison Needle - Otsu",
        nameZh: "毒针・乙",
        nameZhG1: "毒针·乙",
        nameKo: "독침・을",
        ruby: "どくばり　おつ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4",
        damage: "1/1",
        text: "【攻撃後】滅灯毒が塗られていたならば、あなたは勝利する。",
        textZh: "【攻击后】如果涂上灭灯毒了的话，你直接获胜。",
        textZhG1: "【攻击后】若此毒针涂有灭灯毒，则你赢得本局游戏。",
        textKo: "【공격후】멸등독이 발라져 있었다면, 당신은 승리한다.",
        textEn: "After Attack: If Fading Light Toxin is applied to this needle, you win the game.",
    },
    "story-02-A-3": {
        megami: "chikage-story-2",
        name: "毒針・丙",
        nameEn: "Poison Needle - Hei",
        nameZh: "毒针・丙",
        nameZhG1: "毒针·丙",
        nameKo: "독침・병",
        ruby: "どくばり　へい",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "5",
        damage: "1/1",
        text: "【攻撃後】滅灯毒が塗られていたならば、あなたは勝利する。",
        textZh: "【攻击后】如果涂上灭灯毒了的话，你直接获胜。",
        textZhG1: "【攻击后】若此毒针涂有灭灯毒，则你赢得本局游戏。",
        textKo: "【공격후】멸등독이 발라져 있었다면, 당신은 승리한다.",
        textEn: "After Attack: If Fading Light Toxin is applied to this needle, you win the game.",
    },
    "story-02-A-4": {
        megami: "chikage-story-2",
        name: "塗り替え",
        nameEn: "Reevaluate",
        nameZh: "重涂",
        nameZhG1: "重涂",
        nameKo: "재정비",
        ruby: "ぬりかえ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "滅灯毒が塗られている毒針を選び直す。",
        textZh: "重新选择被涂上灭灯毒的毒针。",
        textZhG1: "重新选择涂有灭灯毒的毒针。",
        textKo: "멸등독이 발라진 독침을 다시 고른다.",
        textEn: "Reapply Fading Light Toxin to one of your Poison Needles.",
    },
    "story-02-A-6": {
        megami: "chikage-story-2",
        name: "滅灯の隠毒",
        nameEn: "Ruinous Shroudtoxin",
        nameZh: "灭灯隐秘毒",
        nameZhG1: "隐毒藏灭灯",
        nameKo: "멸등의 은닉독",
        ruby: "ほろびのかくれどく",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "終端\n滅灯毒が塗られている毒針を選び直す。",
        textZh: "终端\n重新选择被涂上灭灯毒的毒针。",
        textZhG1: "终端\n重新选择涂有灭灯毒的毒针。",
        textKo: "종단\n멸등독이 발라진 독침을 다시 고른다.",
        textEn: "Terminal\n\nReapply Fading Light Toxin to one of your Poison Needles.",
    },
    "story-02-A-5": {
        megami: "chikage-story-2",
        name: "闇昏千影の生きる道：刹那",
        nameEn: "Chikage's Grim Path - Transcience",
        nameZh: "暗昏千影的生存之道",
        nameZhG1: "暗昏千影的信条：刹那",
        nameKo: "야미쿠라 치카게의 살아가는 방식:찰나",
        ruby: "やみくらちかげのいきるみち　せつな",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "1-3",
        damage: "2/0",
        cost: "2",
        text: "【攻撃後】相手がライフへのダメージを選んだならば、あなたは勝利する。",
        textZh: "【攻击后】如果对手选择承受对命伤害的话，你直接获胜。",
        textZhG1: "【攻击后】如果对手选择用命承受此次伤害，则你赢得本局游戏。",
        textKo: "【공격후】상대가 라이프 쪽 데미지를 골랐다면, 당신은 승리한다.",
        textEn: "After Attack: If your opponent chose to take damage to Life, you win the game.",
    },
    "story-02-B-1": {
        megami: "tatsu-story-2",
        name: "演習用鉄槌",
        nameEn: "Practice Hammer",
        nameZh: "练习用铁锤",
        nameZhG1: "练习用铁锤",
        nameKo: "연습용 철퇴",
        ruby: "えんしゅうようてっつい",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-6",
        damage: "4/3",
        text: "遠心",
        textZh: "远心",
        textZhG1: "远心",
        textKo: "원심",
        textEn: "Centrifuge",
    },
    "story-02-B-2": {
        megami: "tatsu-story-2",
        name: "体当たり",
        nameEn: "Tackle",
        nameZh: "冲撞",
        nameZhG1: "全身撞击",
        nameKo: "몸통 박치기",
        ruby: "たいあたり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-3",
        damage: "2/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "story-02-B-3": {
        megami: "tatsu-story-2",
        name: "追撃",
        nameEn: "No Escape",
        nameZh: "追击",
        nameZhG1: "追击",
        nameKo: "추격",
        ruby: "ついげき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "2/1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "story-02-B-4": {
        megami: "tatsu-story-2",
        name: "看破",
        nameEn: "Pierce",
        nameZh: "看破",
        nameZhG1: "看破",
        nameKo: "간파",
        ruby: "かんぱ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "集中力を1支払ってもよい。そうしたならば、相手が滅灯毒を塗っている毒針を見る。",
        textZh: "可以支付1集中力。若如此做，获知对手被涂上灭灯毒的毒针。",
        textZhG1: "你可以支付1集中力。若如此做，检视对手涂有灭灯毒的毒针。",
        textKo: "집중력을 1지불해도 좋다. 그렇게 했다면 상대가 멸등독을 바른 독침을 본다.",
        textEn: "You may spend 1 Vigor. If you do, look at your opponent's chosen Drenched Needle.",
    },
    "story-02-B-5": {
        megami: "tatsu-story-2",
        name: "飛び退き",
        nameEn: "Backward Leap",
        nameZh: "后跳",
        nameZhG1: "飞退",
        nameKo: "물러서기",
        ruby: "とびのき",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "ダスト→間合：1",
        textZh: "虚→1→距",
        textZhG1: "虚（1）→距",
        textKo: "더스트→간격：1",
        textEn: "Shadow (1)→ Distance",
    },
    "story-02-B-6": {
        megami: "tatsu-story-2",
        name: "龍の本能",
        nameEn: "Instinct of the Dragon",
        nameZh: "龙之本能",
        nameZhG1: "龙之本能",
        nameKo: "용의 본능",
        ruby: "りゅうのほんのう",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "2",
        text: "相手が滅灯毒を塗っている毒針を見る。その後、対応した1/1の《攻撃》を打ち消してもよい。そうしない場合、このカードを未使用に戻す。",
        textZh: "获知对手被涂上灭灯毒的毒针。之后，可以打消被对应的1/1的《攻击》。若未如此做，则将此牌恢复为未使用的状态。",
        textZhG1: "检视对手涂有灭灯毒的毒针。然后你可以打消被对应的伤害为1/1的《攻击》，否则将此牌变为未使用状态。",
        textKo: "상대의 멸등독을 바른 독침을 본다. 그 후, 대응한 1/1의 《공격》을 무효화해도 좋다. 그렇지 않은 경우, 이 카드를 미사용으로 되돌린다.",
        textEn: "Look at your opponent's chosen Drenched Needle. Then, you may cancel the 1/1 attack this card was played as a Reaction to. If you did not, turn this card face-down.",
    },
    "story-09-A-1": {
        megami: "yatsuha-story-9",
        name: "反攻",
        nameEn: "Counteroffensive",
        nameZh: "反攻",
        nameZhG1: "反攻",
        nameKo: "반공",
        ruby: "はんこう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-3",
        damage: "1/1",
        text: "【常時】あなたが直前のターンに対応しているならば、この《攻撃》は+1/+1となる。\n全力化：【常時】この《攻撃》は+2/+1となる。",
        textZh: "【常时】你在上个回合进行过对应的话，此《攻击》得+1/+1。\n全力化：【常时】此《攻击》得+2/+1。",
        textZhG1: "【常时】若上一回合内你进行过对应，则此《攻击》获得+1/+1。\n全力化：【常时】此《攻击》获得+2/+1。",
        textKo: "【상시】당신이 저번 턴에 대응했다면, 《공격》은 +1/+1 된다.\n전력화：【상시】이 《공격》은 +2/+1 된다.",
        textEn: "Forced: If you reacted to an attack last turn, this attack gains +1/+1.\n\nAll-Out: Forced: This attack gains +2/+1.",
    },
    "story-09-A-2": {
        megami: "yatsuha-story-9",
        name: "防壁",
        nameEn: "Bulwark",
        nameZh: "屏障",
        nameZhG1: "防壁",
        nameKo: "방벽",
        ruby: "ぼうへき",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "終端\nこのターンで最初の対応ならば、対応した《攻撃》のダメージを打ち消す。",
        textZh: "终端\n若为此回合的第一次对应，则打消被对应的《攻击》的伤害。",
        textZhG1: "终端\n若此牌为本回合内你进行的第一次对应，则打消被对应的《攻击》。",
        textKo: "종단\n이 턴의 최초의 대응이라면, 대응한 《공격》의 데미지를 무효화한다.",
        textEn: "Terminal\n\nCancel the damage of the attack you played this card as a Reaction to if this is the first time you are reacting to an attack this turn.",
    },
    "story-09-A-3": {
        megami: "yatsuha-story-9",
        name: "天主八龍閣",
        nameEn: 'Tenshu Keep "Hachiryou"',
        nameZh: "天主八龙阁",
        nameZhG1: "天主八龙阁",
        nameKo: "천주팔룡각",
        ruby: "てんしゅはちりょうかく",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        subType: "reaction",
        capacity: "3",
        cost: "5",
        text: "終端\n【展開時】対応した全力でない《攻撃》を打ち消す。\n【展開中】あなたの他のメガミの《攻撃》は+0/+1となる。",
        textZh: "终端\n【展开时】打消被对应的非全力的《攻击》。\n【展开中】你的其他女神的《攻击》得+0/+1。",
        textZhG1: "终端\n【展开时】打消被对应的非全力的《攻击》。\n【展开中】你的其他女神的《攻击》获得+0/+1。",
        textKo: "종단\n【전개시】대응한 전력이 아닌 《공격》을 무효화한다.\n【전개중】당신의 다른 여신의 《공격》은 +0/+1 된다.",
        textEn: "Terminal\n\nInitialize: Cancel the non-Throughout attack you played this card as a Reaction to.\n\nOngoing: Your attacks from non-Mizuki Megami gain +0/+1.",
    },
    "story-09-B-1": {
        megami: "yura-story-9",
        name: "鉄拳",
        nameEn: "Iron Fist",
        nameZh: "铁拳",
        nameZhG1: "铁拳",
        nameKo: "철권",
        ruby: "てっけん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-2",
        damage: "2/1",
        text: "【常時】不動―現在の間合がターン開始時の間合から変化してないならば、この《攻撃》は+0/+1となる。",
        textZh: "【常时】不动～现在的距和回合开始时的距比起来没有发生变化的话，此《攻击》得+0/+1。",
        textZhG1: "【常时】不动―若本回合内当前距离的值没有发生过变化，此《攻击》获得+0/+1。",
        textKo: "【상시】부동―현재의 간격이 턴 개시 시의 간격에서 변화되지 않았다면, 이 《공격》은 +0/+1 된다.",
        textEn: "Forced: Unwavering - This attack gains +0/+1 if the Distance hasn't changed this turn.",
    },
    "story-09-B-2": {
        megami: "yura-story-9",
        name: "撃ち落とし",
        nameEn: "Quash",
        nameZh: "击落",
        nameZhG1: "击落",
        nameKo: "쏘아떨구기",
        ruby: "うちおとし",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "1-5",
        damage: "1/1",
        text: "【常時】不動―現在の間合がターン開始時の間合から変化してないならば、対応した全力でも切札でもない《攻撃》を打ち消す。",
        textZh: "【常时】不动～现在的距和回合开始时的距比起来没有发生变化的话，打消被对应的非全力也非王牌的《攻击》。",
        textZhG1: "【常时】不动～若本回合内当前距离的值没有发生过变化，则打消被对应的非《全力》且非王牌的《攻击》。",
        textKo: "【상시】부동―현재의 간격이 턴 개시 시의 간격에서 변화되지 않았다면, 대응한 전력도 비장패도 아닌 《공격》을 무효화한다.",
        textEn: "After Attack: Unwavering - Cancel the non-Special, non-Throughout attack you played this card as a Reaction to if the Distance hasn't changed this turn.",
    },
    "story-09-B-3": {
        megami: "yura-story-9",
        name: "瞬腕",
        nameEn: "Breakneck Elbow",
        nameZh: "瞬拳",
        nameZhG1: "瞬腕",
        nameKo: "순완",
        ruby: "しゅんわん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "1-2",
        damage: "3/3",
        text: "対応不可",
        textZh: "不可被对应",
        textZhG1: "不可被对应",
        textKo: "대응불가",
        textEn: "No Reactions",
    },
    "story-09-B-4": {
        megami: "yura-story-9",
        name: "敷道弐式",
        nameEn: "Fudo - Second Form",
        nameZh: "敷道贰式",
        nameZhG1: "敷道二式",
        nameKo: "부도 2식",
        ruby: "ふどうにしき",
        rubyEn: "",
        rubyZh: "不动二式",
        baseType: "special",
        type: "enhance",
        capacity: "2",
        cost: "2",
        text: "【展開中】相手は基本動作《前進》と《後退》と《離脱》を行えない。",
        textZh: "【展开中】对手不能进行基本动作《前进》、《后退》、《离脱》。",
        textZhG1: "【展开中】对手不能执行基本动作《前进》、《后退》和《离脱》。",
        textKo: "【전개중】상대는 기본동작 《전진》과 《후퇴》와 《이탈》을 할 수 없다.",
        textEn: "Ongoing: Your opponent cannot perform the Forward Movement, Backward Movement, or Retreat basic actions.",
    },
    "story-09-B-5": {
        megami: "yura-story-9",
        name: "敷道肆式",
        nameEn: "Fudo - Fourth Form",
        nameZh: "敷道肆式",
        nameZhG1: "敷道四式",
        nameKo: "부도 4식",
        ruby: "ふどうよんしき",
        rubyEn: "",
        rubyZh: "不动四式",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "山札をすべて伏せ札にし、捨て札または伏せ札からカードを2枚まで取り除き、山札を再構成する。その後、取り除いたカードを任意の順で山札の上に置く。",
        textAdditional: "※取り除くカードは、「手札」領域に移動し、その後で再構成を行ってください",
        textZh: "盖伏整个牌库，然后从弃牌区和盖牌区中移除一共两张牌，再重铸牌库。之后，将被移除的牌以任意顺序放回牌库顶。",
        textZhG1: "盖伏自己的牌库，从自己的弃牌区或盖牌区中移除至多2张牌，之后重铸牌库。然后将被移除的牌以任意顺序置于牌库顶。",
        textZhAdditional: "※请先把被移除的牌放进「手牌区」，之后再重铸牌库。",
        textKo: "패산을 전부 덮임패로 하고, 버림패 또는 덮임패에서 2장까지 제외하고 패산을 재구성한다. 그 후, 제외했던 카드를 임의의 순서대로 패산 위에 올려둔다.",
        textEn: "Put your deck into your discard pile. Then, choose up to two cards from among your discard and played piles, and set them aside. Reshuffle your deck, then put the set aside cards on top in any order.",
    },
    "15-korunu-o-n-a-normal": {
        megami: "korunu-story-10",
        name: "永久凍土",
        nameEn: "Permafrost",
        nameZh: "永久冻土",
        nameZhG1: "永久冻土",
        nameKo: "영구동토",
        ruby: "えいきゅうとうど",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "4",
        text: "【展開時/展開中】展開時と各ターンの開始フェイズに、以下を行ってもよい。\n・このターン中、相手のオーラの上限は1少なくなる。\n【展開中】現在の相手オーラが最大値より大きくなるならば、その分をダストへと移動させる。",
        textZh: "【展开时/展开中】展开时以及每个回合的准备阶段，可以执行下述效果。\n・本回合敌装上限减少1。\n【展开中】现在的敌装超出上限的部分移动到虚。",
        textZhG1: "【展开时/展开中】展开时和每回合的准备阶段开始时，可以执行以下效果。\n・本回合内，敌装的最大值减小1。\n【展开中】对手存在于装中的樱花结晶数量如果超出了装的最大值，则将超出数量的樱花结晶移动到虚。",
        textKo: "【전개시/전개중】전개시와 각 턴의 개시 페이즈에 아래의 효과를 해도 좋다.\n・이 턴 동안, 상대의 오라의 상한은 1적어진다.\n【전개중】현재의 상대 오라가 최대치보다 많을 경우, 그 만큼 더스트로 이동시킨다.",
        textEn: "Initialize/Ongoing: When this initializes and at the beginning of each turn, you may decrease your opponent's maximum Aura by 1.\n\nOngoing: If a player has Aura in excess of their maximum, move those tokens to Shadow.",
    },
    "15-korunu-o-n-a-heroic": {
        megami: "korunu-story-10",
        name: "永久凍土",
        nameEn: "Permafrost",
        nameZh: "永久冻土",
        nameZhG1: "永久冻土",
        nameKo: "영구동토",
        ruby: "えいきゅうとうど",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開時/展開中】展開時と各ターンの開始フェイズに、以下を行ってもよい。\n・このターン中、相手のオーラの上限は2少なくなる。\n【展開中】現在の相手オーラが最大値より大きくなるならば、その分をダストへと移動させる。",
        textZh: "【展开时/展开中】展开时以及每个回合的准备阶段，可以执行下述效果。\n・本回合敌装上限减少2。\n【展开中】现在的敌装超出上限的部分移动到虚。",
        textZhG1: "【展开时/展开中】展开时和每回合的开始阶段，可以进行以下操作。\n・本回合中，对手的装上限减少2。\n【展开中】若敌装中樱花结晶的数目大于最大值，则将超出的结晶移至虚。",
        textKo: "【전개시/전개중】전개시와 각 턴의 개시 페이즈에 아래의 효과를 해도 좋다.\n・이 턴 동안, 상대의 오라의 상한은 2적어진다.\n【전개중】현재의 상대 오라가 최대치보다 많을 경우, 그 만큼 더스트로 이동시킨다.",
        textEn: "Initialize/Ongoing: When this initializes and at the beginning of each turn, you may decrease your opponent's maximum Aura by 2.\n\nOngoing: If a player has Aura in excess of their maximum, move those tokens to Shadow.",
    },
    "15-korunu-o-s-a-normal": {
        megami: "korunu-story-10",
        name: "コルヌコラムヌカラ",
        nameEn: "Korunu Ko Ramu Nukar",
        nameZh: "凝努验心",
        nameZhG1: "凝努的力之试炼",
        nameKo: "코르누코라무누카라",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "2",
        text: "対応した《攻撃》を打ち消す。\n【使用済】あなたの開始フェイズに相手のオーラに空きがなければ、相手はオーラから桜花結晶を1つダストに送り、1回凍結する。その後、相手が5つ以上凍結しているならば、相手は敗北する。",
        textZh: "打消被对应的《攻击》。\n【使用后】你的准备阶段中敌装中没有空位的话，自敌装中将1个樱花结晶移至虚，冻结对手1次。这之后，对手有5个或以上的冻结指示物的话，对手直接输掉这局游戏。",
        textZhG1: "打消被对应的 《攻击》。\n【使用后】你的准备阶段开始时，若敌装中没有空位，则将敌装中的1个樱花结晶移至虚，并冻结1次。然后若敌装中有至少5个冻结指示物，则对手输掉这局游戏。",
        textKo: "대응한 《공격》을 무효화한다.\n【사용됨】당신의 개시 페이즈에 상대의 오라에 빈 공간이 없다면, 상대는 오라에서 벚꽃 결정을 1개 더스트로 보내고 1번 동결한다. 그 후, 상대가 5개 이상 동결되어 있다면, 상대는 패배한다.",
        textEn: "Cancel the attack this card was played as a Reaction to.\n\nDevoted: At the beginning of your turn, if your opponent's Aura is full, move 1 of those Sakura tokens to Shadow, then freeze them. If your opponent has 5 or more Ice counters, they lose the game.",
    },
    "15-korunu-o-s-a-heroic": {
        megami: "korunu-story-10",
        name: "コルヌコラムヌカラ",
        nameEn: "Korunu Ko Ramu Nukar",
        nameZh: "凝努验心",
        nameZhG1: "凝努的力之试炼",
        nameKo: "코르누코라무누카라",
        ruby: "",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "2",
        text: "対応した《攻撃》を打ち消す。その《攻撃》がカードによるものならばそのカードをこのカードに封印し、現在のフェイズを終了する。\n【使用済】あなたの開始フェイズに相手のオーラに空きがなければ、相手はオーラから桜花結晶を1つダストに送り、1回凍結する。その後、相手が5つ以上凍結しているならば、相手は敗北する。",
        textZh: "打消被对应的《攻击》。此《攻击》是攻击牌的话就将那张牌封印于此牌下，结束当前阶段。\n【使用后】你的准备阶段中敌装中没有空位的话，自敌装中将1个樱花结晶移至虚，冻结对手1次。这之后，对手有5个或以上的冻结指示物的话，对手直接输掉这局游戏。",
        textZhG1: "打消被对应的《攻击》。若该《攻击》是由《攻击》牌发起的，则将该牌封印于此牌下，结束当前阶段。（《攻击》牌发起的《攻击》仅限由其自身记述的距离、伤害等信息构造的《攻击》，而不含由各类效果构造的《攻击》）\n【使用后】你的准备阶段开始时，若敌装中没有空位，则将对手装中的1个樱花结晶移至虚，并冻结1次。那之后，然后若敌装中有至少5个冻结指示物，则对手输掉这局游戏。",
        textKo: "대응한 《공격》을 무효화한다. 그 《공격》이 카드에 의한 것이라면 그 카드를 이 카드에 봉인하고 현재 페이즈를 종료한다.\n【사용됨】당신의 개시 페이즈에 상대의 오라에 빈 공간이 없다면, 상대는 오라에서 벚꽃 결정을 1개 더스트로 보내고 1번 동결한다. 그 후, 상대가 5개 이상 동결되어 있다면, 상대는 패배한다.",
        textEn: "Cancel the attack this card was played as a Reaction to. If that attack was from a card, seal that card and end the current phase.\n\nDevoted: At the beginning of your turn, if your opponent's Aura is full, move 1 of those Sakura tokens to Shadow, then freeze them. If your opponent has 5 or more Ice counters, they lose the game.",
        sealable: true,
    },
    "02-saine-A2-n-a-normal": {
        megami: "saine-story-12",
        name: "雪月",
        nameEn: "Waning Frostbloom",
        nameZh: "雪月",
        nameZhG1: "雪月",
        nameKo: "설월",
        ruby: "せつげつ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "2-7",
        damage: "2/1",
        text: "【常時】八相―あなたのオーラが0ならば、この《攻撃》は+0/+1となる。\n【常時】現在が相手のターンならば、この《攻撃》のダメージはあなたが選ぶ。",
        textZh: "【常时】八相～若自装中没有樱花结晶，则此《攻击》得+0/+1。\n【常时】现在是对手的回合的话，此《攻击》如何承受伤害由你来选择。",
        textZhG1: "【常时】八相～若自装中的樱花结晶的数目等于0，则此《攻击》获得+0/+1。\n【常时】若当前回合为对手的回合，则由你选择对手用装还是命承受此《攻击》的伤害。",
        textKo: "【상시】팔상―당신의 오라가 0이라면, 이 《공격》은 +0/+1 된다.\n【상시】현재가 상대 턴이라면 이 《공격》의 데미지는 당신이 고른다.",
        textEn: "Forced: Idea - This attack gains +0/+1 if you have no Sakura tokens on your Aura.\n\nForced: If it's your opponent's turn, you choose if this attack's deals damage to Aura or Life.",
    },
    "02-saine-A2-n-a-heroic": {
        megami: "saine-story-12",
        name: "雪月",
        nameEn: "Waning Frostbloom",
        nameZh: "雪月",
        nameZhG1: "雪月",
        nameKo: "설월",
        ruby: "せつげつ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "2-7",
        damage: "3/1",
        text: "【常時】八相―あなたのオーラが0ならば、この《攻撃》は+0/+1となる。\n【常時】現在が相手のターンならば、この《攻撃》のダメージはあなたが選ぶ。",
        textZh: "【常时】八相～若自装中没有樱花结晶，则此《攻击》得+0/+1。\n【常时】现在是对手的回合的话，此《攻击》如何承受伤害由你来选择。",
        textZhG1: "【常时】八相～若自装中的樱花结晶的数目等于0，则此《攻击》获得+0/+1。\n【常时】若当前回合为对手的回合，则由你选择对手用装还是命承受此《攻击》的伤害。",
        textKo: "【상시】팔상―당신의 오라가 0이라면, 이 《공격》은 +0/+1 된다.\n【상시】현재가 상대 턴이라면 이 《공격》의 데미지는 당신이 고른다.",
        textEn: "Forced: Idea - This attack gains +0/+1 if you have no Sakura tokens on your Aura.\n\nForced: If it's your opponent's turn, you choose if this attack's deals damage to Aura or Life.",
    },
    "02-saine-A2-s-a-normal": {
        megami: "saine-story-12",
        name: "絶華絶景",
        nameEn: "Wilt and Wither",
        nameZh: "绝华绝景",
        nameZhG1: "绝华绝景",
        nameKo: "절화절경",
        ruby: "ぜっかぜっけい",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "5",
        text: "対応した《攻撃》の解決後に、あなたと相手のオーラを好きなだけダストに送り、現在のフェイズを終了する。",
        textZh: "被对应的《攻击》结算后，将自装和敌装的任意数目移至虚，i结束当前阶段。",
        textZhG1: "被对应的《攻击》结算完毕后，你可以从自装和敌装中将任意数量的樱花结晶移至虚，然后结束当前阶段。",
        textKo: "대응한 《공격》의 해결 후에 당신과 상대의 오라를 원하는 만큼 더스트로 보내고 현재 페이즈를 종료한다.",
        textEn: "After the attack this card was played as a Reaction to resolves, move any number of Sakura tokens in any combination from each player's Aura to Shadow, and end the current phase.",
    },
    "02-saine-A2-s-a-heroic": {
        megami: "saine-story-12",
        name: "絶華絶景",
        nameEn: "Wilt and Wither",
        nameZh: "绝华绝景",
        nameZhG1: "绝华绝景",
        nameKo: "절화절경",
        ruby: "ぜっかぜっけい",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "3",
        text: "対応した《攻撃》の解決後に現在のフェイズを終了する。\n【使用済】あなたのメインフェイズの開始時に、あなたと相手のオーラをすべてダストへと送り、このカードを未使用に戻す。",
        textZh: "被对应的《攻击》结算后，结束当前阶段。\n【使用后】你的主要阶段开始时，将自装和敌装全部移至虚，将此卡变为未使用的状态。",
        textZhG1: "打消被对应的《攻击》。\n【使用后】你的主要阶段开始时，将自装与敌装中的所有樱花结晶移至虚，将此牌变为未使用状态。",
        textKo: "대응한 《공격》의 해결 후에 현재 페이즈를 종료한다.\n【사용됨】당신의 메인 페이즈 개시 시에 당신과 상대의 오라를 전부 더스트로 보내고 이 카드를 미사용으로 되돌린다.",
        textEn: "After the attack this card was played as a Reaction to resolves, end the current phase.\n\nDevoted: At the beginning of your main phase, move all Sakura tokens from both players' Aura to Shadow, and turn this card face-down.",
    },
    "04-tokoyo-o-n-a-normal": {
        megami: "tokoyo-story-13",
        name: "蝶の舞",
        nameEn: "Flutter Dance",
        nameZh: "蝶之舞",
        nameZhG1: "蝶之舞",
        nameKo: "나비의 무대",
        ruby: "ちょうのまい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "4",
        text: "【展開時/破棄時】攻撃『適正距離2-5、-/1』を行う。",
        textZh: "【展开时/破弃时】进行一次“攻击距离2-5、伤害-/1”的攻击。",
        textZhG1: "【展开时/破弃时】进行一次『攻击距离2-5 伤害-/1』的攻击。",
        textKo: "【전개시/파기시】공격『적정거리2-5, -/1』을 한다.",
        textEn: 'Initialize/Disenchant: You attack with "Range: 2-5, Damage: -/1".',
    },
    "04-tokoyo-o-n-a-heroic": {
        megami: "tokoyo-story-13",
        name: "蝶の舞",
        nameEn: "Flutter Dance",
        nameZh: "蝶之舞",
        nameZhG1: "蝶之舞",
        nameKo: "나비의 무대",
        ruby: "ちょうのまい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開時/破棄時】攻撃『適正距離2-6、-/1、対応不可』を行う。\n【展開中】相手のターンにこのカードの上の桜花結晶は移動しない。",
        textZh: "【展开时/破弃时】进行一次“攻击距离2-6、伤害-/1、不可被对应”的攻击。\n【展开中】对手的回合内，此牌上的樱花结晶不会移动。",
        textZhG1: "【展开时/破弃时】进行一次『攻击距离2-5 伤害-/1 不可被对应』的攻击。\n【展开中】对手的回合内，此牌上的樱花结晶不会被移除。",
        textKo: "【전개시/파기시】공격『적정거리2-6, -/1, 대응불가』를 한다.\n【전개중】상대의 턴에 이 카드 위의 벚꽃 결정은 이동하지 않는다.",
        textEn: 'Initialize/Disenchant: You attack with "Range: 2-6, Damage: -/1, No Reactions".\n\nOngoing: Sakura tokens cannot leave this card on your opponent\'s turn.',
    },
    "04-tokoyo-o-s-a-normal": {
        megami: "tokoyo-story-13",
        name: "花鳥風月常世郷",
        nameEn: "Realm of Flawless Beauty",
        nameZh: "花鸟风月常世乡",
        nameZhG1: "花鸟风月常世乡",
        nameKo: "화초풍월 영원향",
        ruby: "かちょうふうげつとこよざと",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "【使用済】あなたの手札の最大枚数は1増加し、相手の手札の最大枚数は1減少する。",
        textZh: "【使用后】你的手牌上限增加1，对手的手牌上限减少1。",
        textZhG1: "【使用后】你的手牌上限增大1，对手的手牌上限减小1。",
        textKo: "【사용됨】당신의 손패의 최대치는 1증가하고, 상대의 손패의 최대치는 1감소한다.",
        textEn: "Devoted: Your maximum hand size is increased by 1. Your opponent's maximum hand size is decreased by 1.",
    },
    "04-tokoyo-o-s-a-heroic": {
        megami: "tokoyo-story-13",
        name: "花鳥風月常世郷",
        nameEn: "Realm of Flawless Beauty",
        nameZh: "花鸟风月常世乡",
        nameZhG1: "花鸟风月常世乡",
        nameKo: "화초풍월 영원향",
        ruby: "かちょうふうげつとこよざと",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "1",
        text: "【使用済】あなたの手札の最大枚数は1増加し、相手の手札の最大枚数は1減少する。\n【使用済】境地―あなたの終了フェイズにあなたの集中力が2ならば、相手は畏縮する。",
        textZh: "【使用后】你的手牌上限增加1，对手的手牌上限减少1。\n【使用后】境地～你在结束阶段有2点集中力的话，令对手畏缩。",
        textZhG1: "【使用后】你的手牌上限增大1，对手的手牌上限减小1。\n【使用后】境地～你的结束阶段开始时，若你的集中力等于2，则对手畏缩。",
        textKo: "【사용됨】당신의 손패의 최대치는 1증가하고, 상대의 손패의 최대치는 1감소한다.\n【사용됨】경지―당신의 종료 페이즈에 당신의 집중력이 2라면, 상대는 위축한다.",
        textEn: "Devoted: Your maximum hand size is increased by 1. Your opponent's maximum hand size is decreased by 1.\n\nDevoted: Artistic - At the end of your turn, if your Vigor is 2, flinch your opponent.",
    },
    "story-15-A-1": {
        megami: "yatsuha-story-15",
        name: "自我咆哮",
        nameEn: "Spirithowl",
        nameZh: "自我咆哮",
        nameZhG1: "自我咆哮",
        nameKo: "자아포효",
        ruby: "じがほうこう",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "3",
        text: "あなたのオーラに置かれた凍結トークンを全て取り除く。\nあなたの伏せ札か捨て札を1枚取り除いてもよい。そうした場合、あなたの手札に追加札から「魂」を加える。",
        textAdditional: "※伏せ札や捨て札を右クリックすることで、そのカードを取り除くことができます",
        textZh: "移除你的装内的所有冻结指示物。\n你可以将你的1张弃牌或者盖牌移除游戏。若如此做，从追加牌区中将『魂』置入你的手牌。",
        textZhG1: "将自装中的所有冻结标记全部移除。\n你可以从盖牌区或弃牌区中将1张牌移出游戏。这么做的话，从追加牌中把「魂」加入你的手牌。",
        textZhAdditional: "※右键弃牌或者盖牌，可以将牌移出游戏。",
        textKo: "당신의 오라에 있는 동결 토큰을 전부 제거한다.\n당신의 덮임패 또는 버림패를 1장 제외해도 좋다. 그렇게 했다면 추가패로부터 당신의 손패에 「영혼」을 추가한다.",
        textEn: 'Remove all Ice counters from your Aura.\n\nYou may remove a card in your discard or played pile from the game. If you did, add your set aside "Soul" to your hand.',
    },
    "16-yatsuha-o-n-a-normal": {
        megami: "yatsuha-story-15",
        name: "魂",
        nameEn: "Soul",
        nameZh: "魂",
        nameZhG1: "魂",
        nameKo: "영혼",
        ruby: "たましい",
        rubyEn: "",
        baseType: "normal",
        extra: true,
        extraFrom: "story-15-A-1",
        type: "action",
        text: "相オーラ→自フレア：2",
        textZh: "敌装→2→自气",
        textZhG1: "敌装（2）→自气",
        textKo: "상대 오라→자신 플레어：2",
        textEn: "Opponent's Aura (2)→ Your Flare",
    },
    "00-hajimari-a-n-1": {
        megami: "utsuro-hajimari",
        name: "投射",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "とうしゃ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "5-9",
        damage: "3/1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-n-2": {
        megami: "utsuro-hajimari",
        name: "脇斬り",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "わきぎり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-3",
        damage: "2/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-n-3": {
        megami: "utsuro-hajimari",
        name: "牽制",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "けんせい",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-3",
        damage: "2/1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-n-4": {
        megami: "utsuro-hajimari",
        name: "背中刺し",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "せなかざし",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1",
        damage: "3/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-n-5": {
        megami: "utsuro-hajimari",
        name: "二刀一閃",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "にとういっせん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "fullpower",
        range: "2-3",
        damage: "4/2",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-n-6": {
        megami: "utsuro-hajimari",
        name: "歩法",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ほほう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "集中力を1得る。\n間合⇔ダスト：1",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-n-7": {
        megami: "utsuro-hajimari",
        name: "潜り",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "もぐり",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "間合→ダスト：1",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-n-8": {
        megami: "utsuro-hajimari",
        name: "患い",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "わずらい",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "対応した《攻撃》は-1/+0となる。\n相手を畏縮させる（相手の集中力カードに畏縮トークンを置く。相手は次に集中力を得る際に得られず、代わりに畏縮トークンを取り除く）。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-n-9": {
        megami: "utsuro-hajimari",
        name: "陰の罠",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "かげのわな",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "隙（あなたが再構成以外でライフへと1以上のダメージを受けたら、このカードの破棄時効果は失敗する。この上の桜花結晶はすべてダストに送られ、このカードは伏せ札となる）\n【破棄時】攻撃『適正距離2-3、3/2、対応不可』を行う。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-s-1": {
        megami: "utsuro-hajimari",
        name: "数多ノ刃",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "あまたのやいば",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "1-2",
        damage: "4/3",
        cost: "5",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-s-2": {
        megami: "utsuro-hajimari",
        name: "闇凪ノ声",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "やみなぎのこえ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "4",
        text: "カードを2枚引く。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-s-3": {
        megami: "utsuro-hajimari",
        name: "苦ノ外套",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "くのがいとう",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "3",
        text: "対応した《攻撃》は-2/+0となる。\n相オーラ→ダスト：2",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-a-s-4": {
        megami: "utsuro-hajimari",
        name: "奪イノ茨",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "うばいのいばら",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "fullpower",
        cost: "1",
        text: "相手は手札を全て捨て札にし、集中力が0になる。\n----\n【再起】ダストが10以上である。\n（あなたの終了フェイズに条件を満たしていたら、使用済から未使用に戻る）",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-1": {
        megami: "honoka-hajimari",
        name: "花弁刃",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "かべんじん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4-5",
        damage: "-/1",
        text: "（相手はオーラへのダメージを選べない）",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-2": {
        megami: "honoka-hajimari",
        name: "桜刀",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "さくらがたな",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-4",
        damage: "3/1",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-3": {
        megami: "honoka-hajimari",
        name: "瞬霊式",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "しゅんれいしき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "5",
        damage: "3/2",
        text: "対応不可（この《攻撃》は対応されない）",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-4": {
        megami: "honoka-hajimari",
        name: "返し斬り",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "かえしぎり",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "3-4",
        damage: "2/1",
        text: "【攻撃後】このカードを対応で使用したならば、\nダスト→自オーラ：1",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-5": {
        megami: "honoka-hajimari",
        name: "歩法",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ほほう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "集中力を1得る。\n間合⇔ダスト：1",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-6": {
        megami: "honoka-hajimari",
        name: "桜寄せ",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "さくらよせ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "相オーラ→自オーラ：1",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-7": {
        megami: "honoka-hajimari",
        name: "光輝収束",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "こうきしゅうそく",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "fullpower",
        text: "ダスト→自オーラ：2\nダスト→自フレア：1",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-8": {
        megami: "honoka-hajimari",
        name: "光の刃",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ひかりのやいば",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-5",
        damage: "X/1",
        text: "超克（オーラへのダメージの上限は5である。しかし、超克を持っていればそれを突破し、ダメージの計算でオーラへのダメージを6以上にできる）\n【常時】Xはあなたのフレアに等しい。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-n-9": {
        megami: "honoka-hajimari",
        name: "精霊連携",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "せいれいれんけい",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "終端（あなたはこのターン中はもうカードの使用と基本動作が行えない。あなたのターンならばそのままメインフェイズが終了し、相手のターンならばもう対応できない）\n【展開中】あなたの《攻撃》は+1/0となる。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-s-1": {
        megami: "honoka-hajimari",
        name: "光満ちる一刀",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ひかりみちるいっとう",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3-4",
        damage: "4/3",
        cost: "5",
        text: "",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-s-2": {
        megami: "honoka-hajimari",
        name: "花吹雪の景色",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "はなふぶきのけしき",
        rubyEn: "",
        baseType: "special",
        type: "action",
        capacity: "3",
        cost: "4",
        text: "相オーラ→間合：2",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-s-3": {
        megami: "honoka-hajimari",
        name: "精霊たちの風",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "せいれいたちのかぜ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        subType: "reaction",
        cost: "3",
        text: "対応した切札でない《攻撃》を打ち消す。\nカードを1枚引く。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "00-hajimari-b-s-4": {
        megami: "honoka-hajimari",
        name: "煌めきの乱舞",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "きらめきのらんぶ",
        rubyEn: "",
        baseType: "special",
        type: "attack",
        range: "3",
        damage: "2/2",
        cost: "2",
        text: "不可避（対応により間合が外されてもこの攻撃は無効化されない）\n----\n【即再起】あなたが2以上のライフへのダメージを受ける。\n（条件を満たしたら、直ちに使用済から未使用に戻る）",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "05-oboro-o-n-a": {
        megami: "oboro-original",
        name: "仙人呼法",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "せんじんこほう",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        text: "集中力を1得て、あなたの山札の一番上を伏せ札にする。\n【常時】このカードは捨て札にあるならば、伏せ札の枚数に数える。\n【常時】このカードが捨て札にあるならば、あなたは再構成によるダメージを受けない。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "05-oboro-o-n-b": {
        megami: "oboro-original",
        name: "緋色手裏剣",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ひいろしゅりけん",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "3-6",
        damage: "2/1",
        text: "設置\n【常時】あなたはこのカードを手札にあるかのように伏せ札から使用してもよい。\n【常時】あなたの終了フェイズに両者の伏せ札が合計5枚以上あるならば、このカードを捨て札から伏せ札にしてもよい。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "05-oboro-o-s-a": {
        megami: "oboro-original",
        name: "朧霞",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "おぼろがすみ",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "【使用済】各ターンにあなたが初めて伏せ札から《攻撃》でないカードを使用した時、その解決後に基本動作を1回行ってもよい。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "05-oboro-o-s-b": {
        megami: "oboro-original",
        name: "朧霞・血桜開花",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "おぼろがすみ・ちざくらかいか",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "【使用済】各ターンにあなたが初めて伏せ札から《攻撃》でないカードを使用した時、その解決後に基本動作を1回行ってもよい。\n【使用済】あなたが伏せ札から使用した《攻撃》カードによる《攻撃》は+0/+1となる。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "09-chikage-o-n-a": {
        megami: "chikage-original",
        name: "歪の目",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "いびつのめ",
        rubyEn: "",
        baseType: "normal",
        type: "action",
        subType: "reaction",
        text: "相手の手札にある毒カード全てを見て、その中から1枚選び、あなたの毒袋に戻してもよい。そうした場合、対応した《攻撃》を-2/-1し、このカードを手札に戻す。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "09-chikage-o-n-b": {
        megami: "chikage-original",
        name: "歪の刃",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "いびつのやいば",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "0-10",
        damage: "1/2",
        text: "【攻撃後】相手の手札にある毒カード全てを見て、その中から1枚選び、あなたの毒袋に戻してもよい。そうした場合、対応した《攻撃》を-2/-1し、このカードを手札に戻す。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "09-chikage-o-n-y": {
        megami: "chikage-original",
        name: "結び番傘",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "むすびばんがさ",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "4",
        damage: "2/2",
        text: "不可避\n【常時】相手の手札が2枚以上あるならば、この《攻撃》は距離拡大（近2）と距離拡大（遠2）を得る。\n（他に何もなければ、適正距離は2-6となる）",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "09-chikage-o-s-a": {
        megami: "chikage-original",
        name: "不朽の絆毒",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ふきゅうのきずなどく",
        rubyEn: "",
        baseType: "special",
        type: "action",
        cost: "2",
        text: "毒袋から「雪灯毒」を1枚選び、相手の山札の一番上に置く。\n【使用済】あなたの開始フェイズの開始時にこのカードを未使用に戻してもよい。そうした場合、攻撃『適正距離0-2、X/X、【常時】Xは相手の手札にある毒カードの枚数に等しい』を行う。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "09-chikage-o-p-a": {
        megami: "chikage-original",
        name: "滅灯毒",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ほろびどく",
        rubyEn: "",
        baseType: "poison",
        type: "action",
        text: "終端\nあなたのオーラに2ダメージを与える。\n【常時】このカードは捨て札から移動しない。\n【常時】このカードが捨て札にあるならば、あなたの毒カードに書かれた数字と桜花結晶の数は2倍になる。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "09-chikage-o-p-b": {
        megami: "chikage-original",
        name: "雪灯毒",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ゆきひどく",
        rubyEn: "",
        baseType: "poison",
        type: "action",
        text: "【常時】このターン中にあなたが通常札を使用しているならば、このカードは使用できない。\n【常時】このカードが毒袋に戻るならば、その直前に相手は基本動作を1回行ってもよい。\nこのカードを相手の毒袋に戻す。その後、このフェイズを終了する。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "12-raira-o-n-a": {
        megami: "raira-original",
        name: "乱動",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "らんどう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "1-8",
        damage: "1/1",
        text: "終端\n【攻撃後】手札の《全力》カード1枚を使用してもよい。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "12-raira-o-n-b": {
        megami: "raira-original",
        name: "大乱動",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "だいらんどう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        subType: "reaction",
        range: "1-8",
        damage: "2/1",
        text: "対応不可\n【攻撃後】手札のカード1枚を使用してもよい。（全力でもよい）\n",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "12-raira-o-n-y": {
        megami: "raira-original",
        name: "原初暴風",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "げんしょぼうふう",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        range: "2-4",
        damage: "2/1",
        text: "【攻撃後】風神ゲージを1上げる。その後、嵐の力を1回使用してもよい。",
        textZh: "【攻击后】风神槽的值增加1。然后，你可以使用一次风暴之力。",
        textZhG1: "【攻击后】风神槽的值增加1。然后你可以使用1次岚之力。",
        textKo: "【공격후】풍신 게이지를 1올린다. 그 후에 태풍의 힘을 1번 사용해도 좋다.",
        textEn: "After Attack: Increase your Wind Gauge by 1, then you may harness the storm once.",
    },
    "12-raira-storm-a": {
        megami: "raira-original",
        name: "【原初なる嵐の力】",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "",
        rubyEn: "",
        baseType: "storm",
        text: "【風1】間合⇔ダスト：1\n【風2】あなたは集中力を1得て、相手は集中力を1失う。\n【風3】カードを1枚引く。\n----\n【雷1】このターンにあなたが次に行う《攻撃》は+1/+0となる。\n【雷2】このターンにあなたが次に行うオーラへのダメージが「-」でない《攻撃》は+0/+1となる。\n【雷3】攻撃『適正距離0-4、2/2』を行う。",
        textZh: "<风1>距↔1↔虚\n<风2>你获得1点集中力，对手失去1点集中力。\n<风3>抓1张牌。\n\n<雷1>本回合你的下次《攻击》得+1/+0。\n<雷2>本回合你的下次对装伤害不为「-」的《攻击》得+0/+1。\n<雷3>进行一次“攻击距离0-4、伤害2/2”的攻击。",
        textZhG1: "风1：距（1）⇔虚\n风2：你获得1点集中力，对手失去1点集中力。\n风3：抽1张牌。\n雷1：本回合内你进行的下一次《攻击》得+1/+0。\n雷2：本回合内你进行的下一次对装的伤害不是“-”的攻击得+0/+1。\n雷3：进行一次“攻击距离0-4 伤害2/2”的攻击。",
        textKo: "【풍1】간격⇔더스트：1\n【풍2】당신은 집중력을 1얻고 상대는 집중력을 1잃는다.\n【풍3】카드를 1장 뽑는다.\n----\n【뇌1】이 턴에 당신이 다음에 하는 《공격》은 +1/+0된다.\n【뇌2】이 턴에 당신이 다음에 하는 오라 데미지가 「-」이 아닌 《공격》은 +0/+1된다.\n【뇌3】공격 『적정 거리0-4, 2/2』를 한다.",
        textEn: '(When you harness the storm, choose an ability from this list. Decrease its corresponding Gauge by the appropriate amount to get its effect.)\n\nWind 1: Shadow (1)⇔ Distance\nWind 2: Gain 1 Vigor. Your opponent loses 1 Vigor.\nWind 3: Draw a card.\n\nThunder 1: The next attack you make this turn gains +1/+0.\nThunder 2: The next attack you make this turn that doesn\'t have "-" Damage to Aura gains +0/+1.\nThunder 3: You attack with "Range: 0-4, Damage: 2/2".',
    },
    "12-raira-o-s-a": {
        megami: "raira-original",
        name: "天理天道覆載圏",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "てんりてんどうふうさいけん",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "5",
        cost: "1",
        text: "【展開中】あなたがカードを使用するたびに風神ゲージか雷神ゲージを1上げてもよい。\n【破棄時】嵐の力を好きなだけ使用する。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "19-megumi-o-n-a": {
        megami: "megumi-original",
        name: "宿木",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "やどりぎ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "0",
        growth: 2,
        text: "生育2\n【展開時】捨て札または伏せ札から《全力》でない《付与》カード1枚を使用してもよい。\n【展開中】このカードは他の通常札の付与札すべての隙でない【展開中】効果を持つ。（相手の付与札も含む）",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "19-megumi-o-n-b": {
        megami: "megumi-original",
        name: "片喰",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "かたばみ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "2",
        text: "【展開中/破棄時】あなたの終了フェイズと破棄時に攻撃『適正距離4-10、1/1』を行う。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
    "19-megumi-o-s-a": {
        megami: "megumi-original",
        name: "その先の青空",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "そのさきのあおぞら",
        rubyEn: "",
        baseType: "special",
        type: "enhance",
        capacity: "3",
        cost: "2",
        text: "【常時】このカードはこの効果でのみ使用できる。あなたが初めて敗北するならば、代わりにこのカードを使用してもよい。そうした場合、このターン中にあなたはダメージを受けない。\n【常時】このカードの上の種結晶をあなたのライフにあるかのように扱う。\n【展開中】あなたの他の付与札から桜花結晶が移動するならば、代わりにこの上に移動する。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "19-megumi-o-n-e": {
        megami: "megumi-original",
        name: "英雄の一撃",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "えいゆうのいちげき",
        rubyEn: "",
        baseType: "normal",
        type: "attack",
        extra: true,
        range: "4-5",
        damage: "3/2",
        text: "対応不可",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "19-megumi-o-n-y": {
        megami: "megumi-original",
        name: "勇者の杖",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "ゆうしゃのつえ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "1",
        growth: 2,
        text: "生育2\n【展開時】捨て札、伏せ札、切札のいずれかから《全力》でない《付与》カード1枚を使用してもよい。（使用済でもよく、消費は支払う）\n【展開中】このカードは他の付与札すべての隙でない【展開中】効果を持つ。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
        original: true,
    },
    "19-megumi-o-n-o": {
        megami: "megumi-original",
        name: "魔女の杖",
        nameEn: "",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        ruby: "まじょのつえ",
        rubyEn: "",
        baseType: "normal",
        type: "enhance",
        capacity: "3",
        text: "【展開中/破棄時】あなたの終了フェイズと破棄時に攻撃『適正距離4-10、1/1』を行う。",
        textZh: "",
        textZhG1: "",
        textKo: "",
        textEn: "",
    },
};
// カード情報を格納
exports.CARD_DATA["na-s2"] = exports.S2_BASE_CARD_DATA;
exports.CARD_DATA["na-s3"] = Object.assign({}, exports.CARD_DATA["na-s2"]);
for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.S3_UPDATED_CARD_DATA)) {
    let data = exports.S3_UPDATED_CARD_DATA[key];
    if (data === null || data === undefined) {
        delete exports.CARD_DATA["na-s3"][key];
    }
    else {
        exports.CARD_DATA["na-s3"][key] = data;
    }
}
exports.CARD_DATA["na-s4"] = Object.assign({}, exports.CARD_DATA["na-s3"]);
for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.S4_UPDATED_CARD_DATA)) {
    let data = exports.S4_UPDATED_CARD_DATA[key];
    if (data === null || data === undefined) {
        delete exports.CARD_DATA["na-s4"][key];
    }
    else {
        exports.CARD_DATA["na-s4"][key] = data;
    }
}
exports.CARD_DATA["na-s5"] = Object.assign({}, exports.CARD_DATA["na-s4"]);
for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.S5_UPDATED_CARD_DATA)) {
    let data = exports.S5_UPDATED_CARD_DATA[key];
    if (data === null || data === undefined) {
        delete exports.CARD_DATA["na-s5"][key];
    }
    else {
        exports.CARD_DATA["na-s5"][key] = data;
    }
}
exports.CARD_DATA["na-s6"] = Object.assign({}, exports.CARD_DATA["na-s5"]);
for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.S6_UPDATED_CARD_DATA)) {
    let data = exports.S6_UPDATED_CARD_DATA[key];
    if (data === null || data === undefined) {
        delete exports.CARD_DATA["na-s6"][key];
    }
    else {
        exports.CARD_DATA["na-s6"][key] = data;
    }
}
exports.CARD_DATA["na-s6-2"] = Object.assign({}, exports.CARD_DATA["na-s6"]);
for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.S6_2_UPDATED_CARD_DATA)) {
    let data = exports.S6_2_UPDATED_CARD_DATA[key];
    if (data === null || data === undefined) {
        delete exports.CARD_DATA["na-s6-2"][key];
    }
    else {
        exports.CARD_DATA["na-s6-2"][key] = data;
    }
}
exports.CARD_DATA["na-s7"] = Object.assign({}, exports.CARD_DATA["na-s6-2"]);
for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.S7_UPDATED_CARD_DATA)) {
    let data = exports.S7_UPDATED_CARD_DATA[key];
    if (data === null || data === undefined) {
        delete exports.CARD_DATA["na-s7"][key];
    }
    else {
        exports.CARD_DATA["na-s7"][key] = data;
    }
}
// 物語セットで使用するカード (シーズン5を基本とし、物語セットのカードを追加する)
exports.CARD_DATA["story-0"] = Object.assign({}, exports.CARD_DATA["na-s5"]);
for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.STORY_CARD_DATA)) {
    let data = exports.STORY_CARD_DATA[key];
    if (data === null || data === undefined) {
        delete exports.CARD_DATA["story-0"][key];
    }
    else {
        exports.CARD_DATA["story-0"][key] = data;
    }
}
for (let cardSet of [
    "story-1",
    "story-2",
    "story-9",
    "story-10",
    "story-10-heroic",
    "story-12",
    "story-12-heroic",
    "story-13",
    "story-13-heroic",
    "story-15",
]) {
    exports.CARD_DATA[cardSet] = Object.assign({}, exports.CARD_DATA["story-0"]);
}
// 物語セット0, 1では足捌き使用可能
exports.CARD_DATA["story-0"]["01-yurina-o-n-5"] = exports.CARD_DATA["na-s4"]["01-yurina-o-n-5"];
exports.CARD_DATA["story-1"]["01-yurina-o-n-5"] = exports.CARD_DATA["na-s4"]["01-yurina-o-n-5"];
// 物語セット1では返し刃使用可能
exports.CARD_DATA["story-1"]["02-saine-o-n-3"] = exports.CARD_DATA["na-s2"]["02-saine-o-n-3"];
// はじまりの決闘で使用するカード
exports.CARD_DATA.hajimari = {};
for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.STORY_CARD_DATA)) {
    let data = exports.STORY_CARD_DATA[key];
    if (data === null || data === undefined) {
        delete exports.CARD_DATA["hajimari"][key];
    }
    else {
        exports.CARD_DATA["hajimari"][key] = data;
    }
}
// メガミへの挑戦で使用するカード（シーズン7ベース）
for (let cardSet of [
    "oboro-challenge",
    "oboro-challenge-heroic",
    "chikage-challenge",
    "chikage-challenge-heroic",
    "raira-challenge",
    "raira-challenge-heroic",
    "megumi-challenge",
    "megumi-challenge-heroic",
]) {
    exports.CARD_DATA[cardSet] = Object.assign({}, exports.CARD_DATA["na-s7"]);
    for (let key of (0, typedObjectKeys_1.typedObjectKeys)(exports.STORY_CARD_DATA)) {
        let data = exports.STORY_CARD_DATA[key];
        if (data === null || data === undefined) {
            delete exports.CARD_DATA[cardSet][key];
        }
        else {
            exports.CARD_DATA[cardSet][key] = data;
        }
    }
}
// ソートキーを自動で割り振り、また同時にカードIDとソートキーの対応を記憶
let cardSortKeys = [];
exports.CARD_SORT_KEY_MAP = {};
for (let cardSet of (0, typedObjectKeys_1.typedObjectKeys)(exports.CARD_DATA)) {
    for (let cardId of (0, typedObjectKeys_1.typedObjectKeys)(exports.CARD_DATA[cardSet])) {
        let card = exports.CARD_DATA[cardSet][cardId];
        if (cardId === cardId_1.CardId.KIRIKO_O_S_1 ||
            cardId === cardId_1.CardId.HATSUMI_A1_D_1 ||
            cardId === cardId_1.CardId.HATSUMI_A1_D_2) {
            // 《御劔桐子の巫女神楽》《潜水前進》《潜水後退》は特殊（カード一覧で最後に並べるため）
            card.sortKey === `99-${cardId}`;
        }
        else if (card.extraFrom) {
            // 追加札
            card.sortKey = `${exports.CARD_DATA[cardSet][card.extraFrom].sortKey}_${cardId}`;
        }
        else if (card.replace) {
            // 別のカードを置き換えるアナザー
            card.sortKey = `${card.replace}_${card.anotherID}`;
        }
        else if (card.baseType === "poison") {
            // 毒 (末尾)
            card.sortKey = `99-${cardId}`;
        }
        else {
            // 上記以外
            card.sortKey = cardId;
        }
        cardSortKeys.push([cardId, card.sortKey]);
        exports.CARD_SORT_KEY_MAP[cardId] = card.sortKey;
    }
}
// カードIDをソートキー順に並べ替える
let sortedAllCardIds = (0, sortedUniq_1.default)((0, sortBy_1.default)(cardSortKeys, (p) => p[1]).map((p) => p[0]));
// 全カードをソートキー順にソートして、（カードセット別に）全カードIDの配列と、全カードの配列を作成
exports.ALL_CARD_ID_LIST = {};
exports.ALL_CARD_LIST = {};
for (let cardSet of (0, typedObjectKeys_1.typedObjectKeys)(exports.CARD_DATA)) {
    exports.ALL_CARD_ID_LIST[cardSet] = [];
    exports.ALL_CARD_LIST[cardSet] = [];
    for (let cardId of sortedAllCardIds) {
        if (exports.CARD_DATA[cardSet][cardId]) {
            exports.ALL_CARD_ID_LIST[cardSet].push(cardId);
            exports.ALL_CARD_LIST[cardSet].push(exports.CARD_DATA[cardSet][cardId]);
        }
    }
}


/***/ }),

/***/ 667:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LIE_CARD_IDS = exports.CardId = void 0;
var CardId;
(function (CardId) {
    /** 《斬》 */ CardId.YURINA_O_N_1 = "01-yurina-o-n-1";
    /** 《乱打》 */ CardId.YURINA_A1_N_1 = "01-yurina-A1-n-1";
    /** 《一閃》 */ CardId.YURINA_O_N_2 = "01-yurina-o-n-2";
    /** 《柄打ち》 */ CardId.YURINA_O_N_3 = "01-yurina-o-n-3";
    /** 《居合》 */ CardId.YURINA_O_N_4 = "01-yurina-o-n-4";
    /** 《圧気》 */ CardId.YURINA_O_N_6 = "01-yurina-o-n-6";
    /** 《癇癪玉》 */ CardId.YURINA_A1_N_6 = "01-yurina-A1-n-6";
    /** 《気炎万丈》 */ CardId.YURINA_O_N_7 = "01-yurina-o-n-7";
    /** 《月影落》 */ CardId.YURINA_O_S_1 = "01-yurina-o-s-1";
    /** 《浮舟宿》 */ CardId.YURINA_O_S_3 = "01-yurina-o-s-3";
    /** 《天音揺波の底力》 */ CardId.YURINA_O_S_4 = "01-yurina-o-s-4";
    /** 《八方振り》 */ CardId.SAINE_O_N_1 = "02-saine-o-n-1";
    /** 《薙斬り》 */ CardId.SAINE_O_N_2 = "02-saine-o-n-2";
    /** 《氷の音》 */ CardId.SAINE_A1_N_3 = "02-saine-A1-n-3";
    /** 《見切り》 */ CardId.SAINE_O_N_4 = "02-saine-o-n-4";
    /** 《伴奏》 */ CardId.SAINE_A1_N_6 = "02-saine-A1-n-6";
    /** 《無音壁》 */ CardId.SAINE_O_N_7 = "02-saine-o-n-7";
    /** 《律動弧戟》 */ CardId.SAINE_O_S_1 = "02-saine-o-s-1";
    /** 《響鳴共振》 */ CardId.SAINE_O_S_2 = "02-saine-o-s-2";
    /** 《二重奏:弾奏氷瞑》 */ CardId.SAINE_A1_S_2 = "02-saine-A1-s-2";
    /** 《音無砕氷》 */ CardId.SAINE_O_S_3 = "02-saine-o-s-3";
    /** 《氷雨細音の果ての果て》 */ CardId.SAINE_O_S_4 = "02-saine-o-s-4";
    /** 《シュート》 */ CardId.HIMIKA_O_N_1 = "03-himika-o-n-1";
    /** 《火炎流》 */ CardId.HIMIKA_A1_N_2 = "03-himika-A1-n-2";
    /** 《マグナムカノン》 */ CardId.HIMIKA_O_N_3 = "03-himika-o-n-3";
    /** 《フルバースト》 */ CardId.HIMIKA_O_N_4 = "03-himika-o-n-4";
    /** 《バックステップ》 */ CardId.HIMIKA_O_N_5 = "03-himika-o-n-5";
    /** 《殺意》 */ CardId.HIMIKA_A1_N_5 = "03-himika-A1-n-5";
    /** 《スモーク》 */ CardId.HIMIKA_O_N_7 = "03-himika-o-n-7";
    /** 《レッドバレット》 */ CardId.HIMIKA_O_S_1 = "03-himika-o-s-1";
    /** 《クリムゾンゼロ》 */ CardId.HIMIKA_O_S_2 = "03-himika-o-s-2";
    /** 《炎天・紅緋弥香》 */ CardId.HIMIKA_A1_S_2 = "03-himika-A1-s-2";
    /** 《スカーレットイマジン》 */ CardId.HIMIKA_O_S_3 = "03-himika-o-s-3";
    /** 《ヴァーミリオンフィールド》 */ CardId.HIMIKA_O_S_4 = "03-himika-o-s-4";
    /** 《梳流し》 */ CardId.TOKOYO_O_N_1 = "04-tokoyo-o-n-1";
    /** 《奏流し》 */ CardId.TOKOYO_A1_N_1 = "04-tokoyo-A1-n-1";
    /** 《雅打ち》 */ CardId.TOKOYO_O_N_2 = "04-tokoyo-o-n-2";
    /** 《跳ね兎》 */ CardId.TOKOYO_O_N_3 = "04-tokoyo-o-n-3";
    /** 《詩舞》 */ CardId.TOKOYO_O_N_4 = "04-tokoyo-o-n-4";
    /** 《要返し》 */ CardId.TOKOYO_O_N_5 = "04-tokoyo-o-n-5";
    /** 《風舞台》 */ CardId.TOKOYO_O_N_6 = "04-tokoyo-o-n-6";
    /** 《晴舞台》 */ CardId.TOKOYO_O_N_7 = "04-tokoyo-o-n-7";
    /** 《久遠ノ花》 */ CardId.TOKOYO_O_S_1 = "04-tokoyo-o-s-1";
    /** 《千歳ノ鳥》 */ CardId.TOKOYO_O_S_2 = "04-tokoyo-o-s-2";
    /** 《無窮ノ風》 */ CardId.TOKOYO_O_S_3 = "04-tokoyo-o-s-3";
    /** 《常世ノ月》 */ CardId.TOKOYO_O_S_4 = "04-tokoyo-o-s-4";
    /** 《鋼糸》 */ CardId.OBORO_O_N_1 = "05-oboro-o-n-1";
    /** 《影菱》 */ CardId.OBORO_O_N_2 = "05-oboro-o-n-2";
    /** 《斬撃乱舞》 */ CardId.OBORO_O_N_3 = "05-oboro-o-n-3";
    /** 《誘導》 */ CardId.OBORO_O_N_5 = "05-oboro-o-n-5";
    /** 《分身の術》 */ CardId.OBORO_O_N_6 = "05-oboro-o-n-6";
    /** 《生体活性》 */ CardId.OBORO_O_N_7 = "05-oboro-o-n-7";
    /** 《熊介》 */ CardId.OBORO_O_S_1 = "05-oboro-o-s-1";
    /** 《虚魚》 */ CardId.OBORO_O_S_3 = "05-oboro-o-s-3";
    /** 《しこみばり / ふくみばり》 */ CardId.YUKIHI_O_N_1 = "06-yukihi-o-n-1";
    /** 《しこみび / ねこだまし》 */ CardId.YUKIHI_O_N_2 = "06-yukihi-o-n-2";
    /** 《ふりはらい / たぐりよせ》 */ CardId.YUKIHI_O_N_3 = "06-yukihi-o-n-3";
    /** 《ふりまわし / つきさし》 */ CardId.YUKIHI_O_N_4 = "06-yukihi-o-n-4";
    /** 《かさまわし》 */ CardId.YUKIHI_O_N_5 = "06-yukihi-o-n-5";
    /** 《ひきあし / もぐりこみ》 */ CardId.YUKIHI_O_N_6 = "06-yukihi-o-n-6";
    /** 《えんむすび》 */ CardId.YUKIHI_O_N_7 = "06-yukihi-o-n-7";
    /** 《はらりゆき》 */ CardId.YUKIHI_O_S_1 = "06-yukihi-o-s-1";
    /** 《ゆらりび》 */ CardId.YUKIHI_O_S_2 = "06-yukihi-o-s-2";
    /** 《どろりうら》 */ CardId.YUKIHI_O_S_3 = "06-yukihi-o-s-3";
    /** 《くるりみ》 */ CardId.YUKIHI_O_S_4 = "06-yukihi-o-s-4";
    /** 《立論》 */ CardId.SHINRA_O_N_1 = "07-shinra-o-n-1";
    /** 《反論》 */ CardId.SHINRA_O_N_2 = "07-shinra-o-n-2";
    /** 《詭弁》 */ CardId.SHINRA_O_N_3 = "07-shinra-o-n-3";
    /** 《引用》 */ CardId.SHINRA_O_N_4 = "07-shinra-o-n-4";
    /** 《煽動》 */ CardId.SHINRA_O_N_5 = "07-shinra-o-n-5";
    /** 《論破》 */ CardId.SHINRA_O_N_7 = "07-shinra-o-n-7";
    /** 《完全論破》 */ CardId.SHINRA_O_S_1 = "07-shinra-o-s-1";
    /** 《皆式理解》 */ CardId.SHINRA_O_S_2 = "07-shinra-o-s-2";
    /** 《天地反駁》 */ CardId.SHINRA_O_S_3 = "07-shinra-o-s-3";
    /** 《森羅判証》 */ CardId.SHINRA_O_S_4 = "07-shinra-o-s-4";
    /** 《遠心撃》 */ CardId.HAGANE_O_N_1 = "08-hagane-o-n-1";
    /** 《砂風塵》 */ CardId.HAGANE_O_N_2 = "08-hagane-o-n-2";
    /** 《大地砕き》 */ CardId.HAGANE_O_N_3 = "08-hagane-o-n-3";
    /** 《超反発》 */ CardId.HAGANE_O_N_4 = "08-hagane-o-n-4";
    /** 《円舞錬》 */ CardId.HAGANE_O_N_5 = "08-hagane-o-n-5";
    /** 《鐘鳴らし》 */ CardId.HAGANE_O_N_6 = "08-hagane-o-n-6";
    /** 《引力場》 */ CardId.HAGANE_O_N_7 = "08-hagane-o-n-7";
    /** 《大破鐘メガロベル》 */ CardId.HAGANE_O_S_2 = "08-hagane-o-s-2";
    /** 《大重力アトラクト》 */ CardId.HAGANE_O_S_3 = "08-hagane-o-s-3";
    /** 《大山脈リスペクト》 */ CardId.HAGANE_O_S_4 = "08-hagane-o-s-4";
    /** 《飛苦無》 */ CardId.CHIKAGE_O_N_1 = "09-chikage-o-n-1";
    /** 《毒針》 */ CardId.CHIKAGE_O_N_2 = "09-chikage-o-n-2";
    /** 《首切り》 */ CardId.CHIKAGE_O_N_4 = "09-chikage-o-n-4";
    /** 《毒霧》 */ CardId.CHIKAGE_O_N_5 = "09-chikage-o-n-5";
    /** 《抜き足》 */ CardId.CHIKAGE_O_N_6 = "09-chikage-o-n-6";
    /** 《泥濘》 */ CardId.CHIKAGE_O_N_7 = "09-chikage-o-n-7";
    /** 《滅灯の魂毒》 */ CardId.CHIKAGE_O_S_1 = "09-chikage-o-s-1";
    /** 《叛旗の纏毒》 */ CardId.CHIKAGE_O_S_2 = "09-chikage-o-s-2";
    /** 《流転の霞毒》 */ CardId.CHIKAGE_O_S_3 = "09-chikage-o-s-3";
    /** 《闇昏千影の生きる道》 */ CardId.CHIKAGE_O_S_4 = "09-chikage-o-s-4";
    /** 《麻痺毒》 */ CardId.CHIKAGE_O_P_1 = "09-chikage-o-p-1";
    /** 《幻覚毒》 */ CardId.CHIKAGE_O_P_2 = "09-chikage-o-p-2";
    /** 《弛緩毒》 */ CardId.CHIKAGE_O_P_3 = "09-chikage-o-p-3";
    /** 《滅灯毒》 */ CardId.CHIKAGE_O_P_4 = "09-chikage-o-p-4";
    /** 《えれきてる》 */ CardId.KURURU_O_N_1 = "10-kururu-o-n-1";
    /** 《あくせらー》 */ CardId.KURURU_O_N_2 = "10-kururu-o-n-2";
    /** 《くるるーん》 */ CardId.KURURU_O_N_3 = "10-kururu-o-n-3";
    /** 《とるねーど》 */ CardId.KURURU_O_N_4 = "10-kururu-o-n-4";
    /** 《りげいなー》 */ CardId.KURURU_O_N_5 = "10-kururu-o-n-5";
    /** 《もじゅるー》 */ CardId.KURURU_O_N_6 = "10-kururu-o-n-6";
    /** 《りふれくた》 */ CardId.KURURU_O_N_7 = "10-kururu-o-n-7";
    /** 《どれーんでびる》 */ CardId.KURURU_O_S_1 = "10-kururu-o-s-1";
    /** 《びっぐごーれむ》 */ CardId.KURURU_O_S_2 = "10-kururu-o-s-2";
    /** 《神渉装置:枢式》 */ CardId.KURURU_O_S_4 = "10-kururu-o-s-4";
    /** 《でゅーぷりぎあ》 */ CardId.KURURU_O_S_3_EX1 = "10-kururu-o-s-3-ex1";
    /** 《Burning Steam》 */ CardId.THALLYA_O_N_1 = "11-thallya-o-n-1";
    /** 《Waving Edge》 */ CardId.THALLYA_O_N_2 = "11-thallya-o-n-2";
    /** 《Shield Charge》 */ CardId.THALLYA_O_N_3 = "11-thallya-o-n-3";
    /** 《Steam Cannon》 */ CardId.THALLYA_O_N_4 = "11-thallya-o-n-4";
    /** 《Stunt》 */ CardId.THALLYA_O_N_5 = "11-thallya-o-n-5";
    /** 《Roaring》 */ CardId.THALLYA_O_N_6 = "11-thallya-o-n-6";
    /** 《Turbo Switch》 */ CardId.THALLYA_O_N_7 = "11-thallya-o-n-7";
    /** 《Alpha-Edge》 */ CardId.THALLYA_O_S_1 = "11-thallya-o-s-1";
    /** 《Omega-Burst》 */ CardId.THALLYA_O_S_2 = "11-thallya-o-s-2";
    /** 《Form: YAKSHA》 */ CardId.TRANSFORM_01 = "transform-01";
    /** 《Form: NAGA》 */ CardId.TRANSFORM_02 = "transform-02";
    /** 《Form: GARUDA》 */ CardId.TRANSFORM_03 = "transform-03";
    /** 《獣爪》 */ CardId.RAIRA_O_N_1 = "12-raira-o-n-1";
    /** 《風雷撃》 */ CardId.RAIRA_O_N_2 = "12-raira-o-n-2";
    /** 《流転爪》 */ CardId.RAIRA_O_N_3 = "12-raira-o-n-3";
    /** 《風走り》 */ CardId.RAIRA_O_N_4 = "12-raira-o-n-4";
    /** 《風雷の知恵》 */ CardId.RAIRA_O_N_5 = "12-raira-o-n-5";
    /** 《呼び声》 */ CardId.RAIRA_O_N_6 = "12-raira-o-n-6";
    /** 《空駆け》 */ CardId.RAIRA_O_N_7 = "12-raira-o-n-7";
    /** 《雷螺風神爪》 */ CardId.RAIRA_O_S_1 = "12-raira-o-s-1";
    /** 《天雷召喚陣》 */ CardId.RAIRA_O_S_2 = "12-raira-o-s-2";
    /** 《風魔旋風》 */ CardId.RAIRA_O_S_3_EX1 = "12-raira-o-s-3-ex1";
    /** 《風魔纏廻》 */ CardId.RAIRA_O_S_3_EX2 = "12-raira-o-s-3-ex2";
    /** 《風魔天狗道》 */ CardId.RAIRA_O_S_3_EX3 = "12-raira-o-s-3-ex3";
    /** 《円月》 */ CardId.UTSURO_O_N_1 = "13-utsuro-o-n-1";
    /** 《黒き波動》 */ CardId.UTSURO_O_N_2 = "13-utsuro-o-n-2";
    /** 《刈取り》 */ CardId.UTSURO_O_N_3 = "13-utsuro-o-n-3";
    /** 《重圧》 */ CardId.UTSURO_O_N_4 = "13-utsuro-o-n-4";
    /** 《影の翅》 */ CardId.UTSURO_O_N_5 = "13-utsuro-o-n-5";
    /** 《影の壁》 */ CardId.UTSURO_O_N_6 = "13-utsuro-o-n-6";
    /** 《遺灰呪》 */ CardId.UTSURO_O_N_7 = "13-utsuro-o-n-7";
    /** 《灰滅》 */ CardId.UTSURO_O_S_1 = "13-utsuro-o-s-1";
    /** 《虚偽》 */ CardId.UTSURO_O_S_2 = "13-utsuro-o-s-2";
    /** 《終末》 */ CardId.UTSURO_O_S_3 = "13-utsuro-o-s-3";
    /** 《石突》 */ CardId.SAINE_O_N_3 = "02-saine-o-n-3";
    /** 《衝音晶》 */ CardId.SAINE_O_N_6 = "02-saine-o-n-6";
    /** 《陽の音》※シーズン2 */ CardId.TOKOYO_A1_N_7 = "04-tokoyo-A1-n-7";
    /** 《陽の音》※シーズン3以降 */ CardId.TOKOYO_A1_N_5 = "04-tokoyo-A1-n-5";
    /** 《二重奏:吹弾陽明》 */ CardId.TOKOYO_A1_S_2 = "04-tokoyo-A1-s-2";
    /** 《忍歩》 */ CardId.OBORO_O_N_4 = "05-oboro-o-n-4";
    /** 《鳶影》 */ CardId.OBORO_O_S_2 = "05-oboro-o-s-2";
    /** 《壬蔓》 */ CardId.OBORO_O_S_4 = "05-oboro-o-s-4";
    /** 《壮語》 */ CardId.SHINRA_O_N_6 = "07-shinra-o-n-6";
    /** 《Thallya's Masterpiece》 */ CardId.THALLYA_O_S_3 = "11-thallya-o-s-3";
    /** 《Julia's BlackBox》 */ CardId.THALLYA_O_S_4 = "11-thallya-o-s-4";
    /** 《手裏剣》 */ CardId.OBORO_A1_N_2 = "05-oboro-A1-n-2";
    /** 《神代枝》 */ CardId.OBORO_A1_S_4 = "05-oboro-A1-s-4";
    /** 《仕掛け番傘》 */ CardId.CHIKAGE_A1_N_5 = "09-chikage-A1-n-5";
    /** 《奮迅》 */ CardId.CHIKAGE_A1_N_6 = "09-chikage-A1-n-6";
    /** 《残滓の絆毒》 */ CardId.CHIKAGE_A1_S_4 = "09-chikage-A1-s-4";
    /** 《蝕みの塵》 */ CardId.UTSURO_A1_N_2 = "13-utsuro-A1-n-2";
    /** 《望我》 */ CardId.UTSURO_A1_S_1_EX1 = "13-utsuro-A1-s-1-ex1";
    /** 《万象乖ク殲滅ノ影》 */ CardId.UTSURO_A1_S_1_EX2 = "13-utsuro-A1-s-1-ex2";
    /** 《我ヲ亡クシテ静寂ヲ往ク》 */ CardId.UTSURO_A1_S_1_EX3 = "13-utsuro-A1-s-1-ex3";
    /** 《終焉、来タレ》 */ CardId.UTSURO_A1_S_1_EX4 = "13-utsuro-A1-s-1-ex4";
    /** 《精霊式》 */ CardId.HONOKA_O_N_1 = "14-honoka-o-n-1";
    /** 《守護霊式》 */ CardId.HONOKA_O_N_1_EX1 = "14-honoka-o-n-1-ex1";
    /** 《突撃霊式》 */ CardId.HONOKA_O_N_1_EX2 = "14-honoka-o-n-1-ex2";
    /** 《神霊ヲウカ》 */ CardId.HONOKA_O_N_1_EX3 = "14-honoka-o-n-1-ex3";
    /** 《義旗共振》 */ CardId.HONOKA_O_N_3 = "14-honoka-o-n-3";
    /** 《桜の翅》 */ CardId.HONOKA_O_N_4 = "14-honoka-o-n-4";
    /** 《再生》 */ CardId.HONOKA_O_N_4_EX1 = "14-honoka-o-n-4-ex1";
    /** 《桜花のお守り》 */ CardId.HONOKA_O_N_5 = "14-honoka-o-n-5";
    /** 《仄かなる輝き》 */ CardId.HONOKA_O_N_5_EX1 = "14-honoka-o-n-5-ex1";
    /** 《追い風》 */ CardId.HONOKA_O_N_7 = "14-honoka-o-n-7";
    /** 《胸に想いを》 */ CardId.HONOKA_O_S_1 = "14-honoka-o-s-1";
    /** 《そして新たな幕開けを》 */ CardId.HONOKA_O_S_1_EX2 = "14-honoka-o-s-1-ex2";
    /** 《この旗の名の下に》 */ CardId.HONOKA_O_S_2 = "14-honoka-o-s-2";
    /** 《満天の花道で》 */ CardId.HONOKA_O_S_4 = "14-honoka-o-s-4";
    /** 《ラピッドファイア》 */ CardId.HIMIKA_O_N_2 = "03-himika-o-n-2";
    /** 《風魔招来孔》 */ CardId.RAIRA_O_S_3 = "12-raira-o-s-3";
    /** 《残響装置:枢式》 */ CardId.UTSURO_A1_S_1 = "13-utsuro-A1-s-1";
    /** 《指揮》 */ CardId.HONOKA_O_N_6 = "14-honoka-o-n-6";
    /** 《四季はまた廻り来る》 */ CardId.HONOKA_O_S_3 = "14-honoka-o-s-3";
    /** 《裏斬り》 */ CardId.SAINE_A2_N_2 = "02-saine-A2-n-2";
    /** 《遺響壁》 */ CardId.SAINE_A2_N_7 = "02-saine-A2-n-7";
    /** 《絶唱絶華》 */ CardId.SAINE_A2_S_3 = "02-saine-A2-s-3";
    /** 《真言》 */ CardId.SHINRA_A1_N_2 = "07-shinra-A1-n-2";
    /** 《使徒》 */ CardId.SHINRA_A1_N_7 = "07-shinra-A1-n-7";
    /** 《全知経典》 */ CardId.SHINRA_A1_S_3 = "07-shinra-A1-s-3";
    /** 《あならいず》 */ CardId.KURURU_A1_N_1 = "10-kururu-A1-n-1";
    /** 《だうじんぐ》 */ CardId.KURURU_A1_N_3 = "10-kururu-A1-n-3";
    /** 《らすとりさーち》 */ CardId.KURURU_A1_S_3 = "10-kururu-A1-s-3";
    /** 《ぐらんがりばー》 */ CardId.KURURU_A1_S_3_EX1 = "10-kururu-A1-s-3-ex1";
    /** 《雪刃》 */ CardId.KORUNU_O_N_1 = "15-korunu-o-n-1";
    /** 《旋回刃》 */ CardId.KORUNU_O_N_2 = "15-korunu-o-n-2";
    /** 《剣の舞》 */ CardId.KORUNU_O_N_3 = "15-korunu-o-n-3";
    /** 《雪渡り》 */ CardId.KORUNU_O_N_4 = "15-korunu-o-n-4";
    /** 《絶対零度》 */ CardId.KORUNU_O_N_5 = "15-korunu-o-n-5";
    /** 《かじかみ》 */ CardId.KORUNU_O_N_6 = "15-korunu-o-n-6";
    /** 《コンルルヤンペ》 */ CardId.KORUNU_O_S_1 = "15-korunu-o-s-1";
    /** 《レタルレラ》 */ CardId.KORUNU_O_S_2 = "15-korunu-o-s-2";
    /** 《ウパシトゥム》 */ CardId.KORUNU_O_S_3 = "15-korunu-o-s-3";
    /** 《鏡の悪魔》 */ CardId.YATSUHA_O_N_3 = "16-yatsuha-o-n-3";
    /** 《幻影歩法》 */ CardId.YATSUHA_O_N_4 = "16-yatsuha-o-n-4";
    /** 《意志》 */ CardId.YATSUHA_O_N_5 = "16-yatsuha-o-n-5";
    /** 《契約》 */ CardId.YATSUHA_O_N_6 = "16-yatsuha-o-n-6";
    /** 《寄花》 */ CardId.YATSUHA_O_N_7 = "16-yatsuha-o-n-7";
    /** 《双葉鏡の祟り神》 */ CardId.YATSUHA_O_S_1 = "16-yatsuha-o-s-1";
    /** 《四葉鏡のわらべ唄》 */ CardId.YATSUHA_O_S_2 = "16-yatsuha-o-s-2";
    /** 《六葉鏡の星の海》 */ CardId.YATSUHA_O_S_3 = "16-yatsuha-o-s-3";
    /** 《八葉鏡の向こう側》 */ CardId.YATSUHA_O_S_4 = "16-yatsuha-o-s-4";
    /** 《気迫》 */ CardId.YURINA_O_N_5 = "01-yurina-o-n-5";
    /** 《浦波嵐》 */ CardId.YURINA_O_S_2 = "01-yurina-o-s-2";
    /** 《不完全浦波嵐》 */ CardId.YURINA_A1_S_2 = "01-yurina-A1-s-2";
    /** 《圏域》 */ CardId.SAINE_O_N_5 = "02-saine-o-n-5";
    /** 《バックドラフト》 */ CardId.HIMIKA_O_N_6 = "03-himika-o-n-6";
    /** 《不意打ち》 */ CardId.OBORO_A1_N_3 = "05-oboro-A1-n-3";
    /** 《最後の結晶》 */ CardId.OBORO_A1_S_4_EX1 = "05-oboro-A1-s-4-ex1";
    /** 《大天空クラッシュ》 */ CardId.HAGANE_O_S_1 = "08-hagane-o-s-1";
    /** 《遁術》 */ CardId.CHIKAGE_O_N_3 = "09-chikage-o-n-3";
    /** 《いんだすとりあ》 */ CardId.KURURU_O_S_3 = "10-kururu-o-s-3";
    /** 《円環輪廻旋》 */ CardId.RAIRA_O_S_4 = "12-raira-o-s-4";
    /** 《魔食》 */ CardId.UTSURO_O_S_4 = "13-utsuro-o-s-4";
    /** 《桜吹雪》 */ CardId.HONOKA_O_N_2 = "14-honoka-o-n-2";
    /** 《両手に華を》 */ CardId.HONOKA_O_S_1_EX1 = "14-honoka-o-s-1-ex1";
    /** 《星の爪》 */ CardId.YATSUHA_O_N_1 = "16-yatsuha-o-n-1";
    /** 《昏い咢》 */ CardId.YATSUHA_O_N_2 = "16-yatsuha-o-n-2";
    /** 《ちからぞえ / おどしつけ》 */ CardId.YUKIHI_A1_N_2 = "06-yukihi-A1-n-2";
    /** 《よこいと / たていと》 */ CardId.YUKIHI_A1_N_4 = "06-yukihi-A1-n-4";
    /** 《ひらりおり》 */ CardId.YUKIHI_A1_S_2 = "06-yukihi-A1-s-2";
    /** 《Quick Change》 */ CardId.THALLYA_A1_N_5 = "11-thallya-A1-n-5";
    /** 《BlackBox NEO》 */ CardId.THALLYA_A1_S_1 = "11-thallya-A1-s-1";
    /** 《OMNIS-Blaster》 */ CardId.THALLYA_A1_S_2 = "11-thallya-A1-s-2";
    /** 《Form: KINNARI》 */ CardId.TRANSFORM_A1_01 = "transform-A1-01";
    /** 《Form: DEVA》 */ CardId.TRANSFORM_A1_04 = "transform-A1-04";
    /** 《大嵐》 */ CardId.RAIRA_A1_N_6 = "12-raira-a1-n-6";
    /** 《陣風祭天儀》 */ CardId.RAIRA_A1_S_3 = "12-raira-a1-s-3";
    /** 《水雷球》 */ CardId.HATSUMI_O_N_1 = "17-hatsumi-o-n-1";
    /** 《水流》 */ CardId.HATSUMI_O_N_2 = "17-hatsumi-o-n-2";
    /** 《強酸》 */ CardId.HATSUMI_O_N_3 = "17-hatsumi-o-n-3";
    /** 《海嘯》 */ CardId.HATSUMI_O_N_4 = "17-hatsumi-o-n-4";
    /** 《準備万端》 */ CardId.HATSUMI_O_N_5 = "17-hatsumi-o-n-5";
    /** 《羅針盤》 */ CardId.HATSUMI_O_N_6 = "17-hatsumi-o-n-6";
    /** 《波呼び》 */ CardId.HATSUMI_O_N_7 = "17-hatsumi-o-n-7";
    /** 《イサナ海域》 */ CardId.HATSUMI_O_S_1 = "17-hatsumi-o-s-1";
    /** 《オヨギビ砲火》 */ CardId.HATSUMI_O_S_2 = "17-hatsumi-o-s-2";
    /** 《カラハリ灯台》 */ CardId.HATSUMI_O_S_3 = "17-hatsumi-o-s-3";
    /** 《ミオビキ航路》 */ CardId.HATSUMI_O_S_4 = "17-hatsumi-o-s-4";
    /** 《陣頭》 */ CardId.MIZUKI_O_N_1 = "18-mizuki-o-n-1";
    /** 《撃ち落とし》 */ CardId.MIZUKI_O_N_3 = "18-mizuki-o-n-3";
    /** 《号令》 */ CardId.MIZUKI_O_N_4 = "18-mizuki-o-n-4";
    /** 《防壁》 */ CardId.MIZUKI_O_N_5 = "18-mizuki-o-n-5";
    /** 《戦場》 */ CardId.MIZUKI_O_N_7 = "18-mizuki-o-n-7";
    /** 《天主八龍閣》 */ CardId.MIZUKI_O_S_1 = "18-mizuki-o-s-1";
    /** 《三重膝丸櫓》 */ CardId.MIZUKI_O_S_2 = "18-mizuki-o-s-2";
    /** 《大手楯無門》 */ CardId.MIZUKI_O_S_3 = "18-mizuki-o-s-3";
    /** 《闘神》 */ CardId.MIZUKI_O_S_3_EX1 = "18-mizuki-o-s-3-ex1";
    /** 《山城水津城の鬨の声》 */ CardId.MIZUKI_O_S_4 = "18-mizuki-o-s-4";
    /** 《槍兵》 */ CardId.MIZUKI_O_T_1 = "18-mizuki-o-t-1";
    /** 《盾兵》 */ CardId.MIZUKI_O_T_2 = "18-mizuki-o-t-2";
    /** 《騎兵》 */ CardId.MIZUKI_O_T_3 = "18-mizuki-o-t-3";
    /** 《Form: ASURA》 */ CardId.TRANSFORM_A1_03 = "transform-A1-03";
    /** 《暴風》 */ CardId.RAIRA_A1_N_2 = "12-raira-a1-n-2";
    /** 《【嵐の力】》 */ CardId.RAIRA_STORM = "12-raira-storm";
    /** 《霜の茨》 */ CardId.KORUNU_O_N_7 = "15-korunu-o-n-7";
    /** 《ポルチャルトー》 */ CardId.KORUNU_O_S_4 = "15-korunu-o-s-4";
    /** 《反攻》 */ CardId.MIZUKI_O_N_2 = "18-mizuki-o-n-2";
    /** 《制圧前進》 */ CardId.MIZUKI_O_N_6 = "18-mizuki-o-n-6";
    /** 《畏掠め》 */ CardId.TOKOYO_A2_N_2 = "04-tokoyo-A2-n-2";
    /** 《悠久ノ雪》 */ CardId.TOKOYO_A2_S_2 = "04-tokoyo-A2-s-2";
    /** 《徒寄ノ八重桜》 */ CardId.TOKOYO_A2_S_3 = "04-tokoyo-A2-s-3";
    /** 《炉火》 */ CardId.HAGANE_A1_N_1 = "08-hagane-A1-n-1";
    /** 《旋回起》 */ CardId.HAGANE_A1_N_2 = "08-hagane-A1-n-2";
    /** 《大錬成マテリアル》 */ CardId.HAGANE_A1_S_1 = "08-hagane-A1-s-1";
    /** 《錬成攻撃》 */ CardId.HAGANE_A1_S_1_EX1 = "08-hagane-A1-s-1-ex1";
    /** 《桜の双剣》 */ CardId.HONOKA_A1_N_1 = "14-honoka-A1-n-1";
    /** 《影の両手》 */ CardId.HONOKA_A1_N_1_EX1 = "14-honoka-A1-n-1-ex1";
    /** 《ひとり目覚めて》 */ CardId.HONOKA_A1_S_1 = "14-honoka-A1-s-1";
    /** 《標をたどり》 */ CardId.HONOKA_A1_S_1_EX1 = "14-honoka-A1-s-1-ex1";
    /** 《影面見向き》 */ CardId.HONOKA_A1_S_1_EX2 = "14-honoka-A1-s-1-ex2";
    /** 《桜花眩く輝かん》 */ CardId.HONOKA_A1_S_1_EX3 = "14-honoka-A1-s-1-ex3";
    /** 《ふたり震える手を取ろう》 */ CardId.HONOKA_A1_S_1_EX4 = "14-honoka-A1-s-1-ex4";
    /** 《旧き虚路を歩みゆく》 */ CardId.HONOKA_A1_S_1_EX5 = "14-honoka-A1-s-1-ex5";
    /** 《空閃》 */ CardId.MEGUMI_O_N_1 = "19-megumi-o-n-1";
    /** 《打擲》 */ CardId.MEGUMI_O_N_2 = "19-megumi-o-n-2";
    /** 《殻打ち》 */ CardId.MEGUMI_O_N_3 = "19-megumi-o-n-3";
    /** 《棹穿ち》 */ CardId.MEGUMI_O_N_4 = "19-megumi-o-n-4";
    /** 《葦》 */ CardId.MEGUMI_O_N_5 = "19-megumi-o-n-5";
    /** 《鳳仙花》 */ CardId.MEGUMI_O_N_6 = "19-megumi-o-n-6";
    /** 《野茨》 */ CardId.MEGUMI_O_N_7 = "19-megumi-o-n-7";
    /** 《因果律の根》 */ CardId.MEGUMI_O_S_1 = "19-megumi-o-s-1";
    /** 《可能性の枝》 */ CardId.MEGUMI_O_S_2 = "19-megumi-o-s-2";
    /** 《結末の果実》 */ CardId.MEGUMI_O_S_3 = "19-megumi-o-s-3";
    /** 《瀧河希の掌》 */ CardId.MEGUMI_O_S_4 = "19-megumi-o-s-4";
    /** 《空想》 */ CardId.KANAWE_O_N_1 = "20-kanawe-o-n-1";
    /** 《脚本化》 */ CardId.KANAWE_O_N_2 = "20-kanawe-o-n-2";
    /** 《演出化》 */ CardId.KANAWE_O_N_3 = "20-kanawe-o-n-3";
    /** 《断行》 */ CardId.KANAWE_O_N_4 = "20-kanawe-o-n-4";
    /** 《残光》 */ CardId.KANAWE_O_N_5 = "20-kanawe-o-n-5";
    /** 《即興》 */ CardId.KANAWE_O_N_6 = "20-kanawe-o-n-6";
    /** 《封殺》 */ CardId.KANAWE_O_N_7 = "20-kanawe-o-n-7";
    /** 《たまゆらふみ》 */ CardId.KANAWE_O_S_1 = "20-kanawe-o-s-1";
    /** 《ほかげきらぼし》 */ CardId.KANAWE_O_S_2 = "20-kanawe-o-s-2";
    /** 《あたらよちよに》 */ CardId.KANAWE_O_S_3 = "20-kanawe-o-s-3";
    /** 《はらからのあまつそら》 */ CardId.KANAWE_O_S_4 = "20-kanawe-o-s-4";
    /** 《殺陣》 */ CardId.KANAWE_O_P_01 = "20-kanawe-o-p-01";
    /** 《殺陣》 */ CardId.KANAWE_O_P_01_WILL = "20-kanawe-o-p-01-will";
    /** 《桜飛沫》 */ CardId.KANAWE_O_P_02 = "20-kanawe-o-p-02";
    /** 《桜飛沫》 */ CardId.KANAWE_O_P_02_WILL = "20-kanawe-o-p-02-will";
    /** 《鼓動》 */ CardId.KANAWE_O_P_03 = "20-kanawe-o-p-03";
    /** 《鼓動》 */ CardId.KANAWE_O_P_03_WILL = "20-kanawe-o-p-03-will";
    /** 《明転》 */ CardId.KANAWE_O_P_04 = "20-kanawe-o-p-04";
    /** 《明転》 */ CardId.KANAWE_O_P_04_WILL = "20-kanawe-o-p-04-will";
    /** 《粒立て》 */ CardId.KANAWE_O_P_05 = "20-kanawe-o-p-05";
    /** 《粒立て》 */ CardId.KANAWE_O_P_05_WILL = "20-kanawe-o-p-05-will";
    /** 《位置取り》 */ CardId.KANAWE_O_P_06 = "20-kanawe-o-p-06";
    /** 《位置取り》 */ CardId.KANAWE_O_P_06_WILL = "20-kanawe-o-p-06-will";
    /** 《八葉鏡の徒桜》 */ CardId.YATSUHA_A1_S_4 = "16-yatsuha-A1-s-4";
    /** 《深淵の大口》 */ CardId.YATSUHA_A1_N_2_EX1 = "16-yatsuha-A1-n-2-ex1";
    /** 《徒寄花》 */ CardId.YATSUHA_A1_N_7_EX1 = "16-yatsuha-A1-n-7-ex1";
    /** 《ぶらすたー》 */ CardId.KURURU_A2_N_1 = "10-kururu-A2-n-1";
    /** 《れーるがん》 */ CardId.KURURU_A2_N_2 = "10-kururu-A2-n-2";
    /** 《こねくとだいぶ》 */ CardId.KURURU_A2_S_4 = "10-kururu-A2-s-4";
    /** 《潜雷》 */ CardId.HATSUMI_A1_N_4 = "17-hatsumi-A1-n-4";
    /** 《サギリ海域》 */ CardId.HATSUMI_A1_S_1 = "17-hatsumi-A1-s-1";
    /** 《ワダナカ航路》 */ CardId.HATSUMI_A1_S_4 = "17-hatsumi-A1-s-4";
    /** 《《潜水》》 */ CardId.HATSUMI_A1_D_1H = "17-hatsumi-A1-d-1h";
    /** 《《潜水前進》》 */ CardId.HATSUMI_A1_D_1 = "17-hatsumi-A1-d-1";
    /** 《《潜水》》 */ CardId.HATSUMI_A1_D_2H = "17-hatsumi-A1-d-2h";
    /** 《《潜水後退》》 */ CardId.HATSUMI_A1_D_2 = "17-hatsumi-A1-d-2";
    /** 《紅刃》 */ CardId.KAMUWI_O_N_1 = "21-kamuwi-o-n-1";
    /** 《散華刃》 */ CardId.KAMUWI_O_N_2 = "21-kamuwi-o-n-2";
    /** 《四剣乱刃》 */ CardId.KAMUWI_O_N_3 = "21-kamuwi-o-n-3";
    /** 《斬り払い》 */ CardId.KAMUWI_O_N_4 = "21-kamuwi-o-n-4";
    /** 《棘縫い》 */ CardId.KAMUWI_O_N_5 = "21-kamuwi-o-n-5";
    /** 《血晶乱流》 */ CardId.KAMUWI_O_N_6 = "21-kamuwi-o-n-6";
    /** 《血飛沫》 */ CardId.KAMUWI_O_N_7 = "21-kamuwi-o-n-7";
    /** 《灯》 */ CardId.KAMUWI_O_S_1 = "21-kamuwi-o-s-1";
    /** 《暁》 */ CardId.KAMUWI_O_S_1_EX_1 = "21-kamuwi-o-s-1-ex-1";
    /** 《阡》 */ CardId.KAMUWI_O_S_2 = "21-kamuwi-o-s-2";
    /** 《尸》 */ CardId.KAMUWI_O_S_3 = "21-kamuwi-o-s-3";
    /** 《理》 */ CardId.KAMUWI_O_S_4 = "21-kamuwi-o-s-4";
    /** 《嘘突き》 */ CardId.RENRI_O_N_1 = "22-renri-o-n-1";
    /** 《都度討ち》 */ CardId.RENRI_O_N_2 = "22-renri-o-n-2";
    /** 《玄塗り》 */ CardId.RENRI_O_N_3 = "22-renri-o-n-3";
    /** 《煽り殺陣》 */ CardId.RENRI_O_N_4 = "22-renri-o-n-4";
    /** 《雲喰い》 */ CardId.RENRI_O_N_5 = "22-renri-o-n-5";
    /** 《魚吊り》 */ CardId.RENRI_O_N_6 = "22-renri-o-n-6";
    /** 《惹き騙り》 */ CardId.RENRI_O_N_7 = "22-renri-o-n-7";
    /** 《ルルララリ》 */ CardId.RENRI_O_S_1 = "22-renri-o-s-1";
    /** 《ラナラロミレリラ》 */ CardId.RENRI_O_S_2 = "22-renri-o-s-2";
    /** 《オリレテラレル》 */ CardId.RENRI_O_S_3 = "22-renri-o-s-3";
    /** 《夜山恋離のなれの果て》 */ CardId.RENRI_O_S_4 = "22-renri-o-s-4";
    /** 《刻まれし衣》 */ CardId.RENRI_O_S_4_EX_1 = "22-renri-o-s-4-ex-1";
    /** 《御劔桐子の巫女神楽》 */ CardId.KIRIKO_O_S_1 = "22-kiriko-o-s-1";
    // 物語セット
    /** 《威風》 */ CardId.STORY_00_A_1 = "story-00-A-1";
    /** 《執着》 */ CardId.STORY_00_A_2 = "story-00-A-2";
    /** 《斬華六道―羅》 */ CardId.STORY_00_A_3 = "story-00-A-3";
    /** 《奥の手》 */ CardId.STORY_00_A_4 = "story-00-A-4";
    /** 《氷刃》 */ CardId.STORY_00_B_1 = "story-00-B-1";
    /** 《渡渉》 */ CardId.STORY_00_B_2 = "story-00-B-2";
    /** 《雪上舞踏》 */ CardId.STORY_00_B_3 = "story-00-B-3";
    /** 《渾身》 */ CardId.STORY_01_A_1 = "story-01-A-1";
    /** 《執念》 */ CardId.STORY_01_A_2 = "story-01-A-2";
    /** 《斬華六道―人》 */ CardId.STORY_01_A_3 = "story-01-A-3";
    /** 《天音揺波の底力：初日》 */ CardId.STORY_01_A_4 = "story-01-A-4";
    /** 《氷牙》 */ CardId.STORY_01_B_1 = "story-01-B-1";
    /** 《雪舞台》 */ CardId.STORY_01_B_2 = "story-01-B-2";
    /** 《氷雨細音の果ての果て：初雪》 */ CardId.STORY_01_B_3 = "story-01-B-3";
    /** 《毒針・甲》 */ CardId.STORY_02_A_1 = "story-02-A-1";
    /** 《毒針・乙》 */ CardId.STORY_02_A_2 = "story-02-A-2";
    /** 《毒針・丙》 */ CardId.STORY_02_A_3 = "story-02-A-3";
    /** 《塗り替え》 */ CardId.STORY_02_A_4 = "story-02-A-4";
    /** 《滅灯の隠毒》 */ CardId.STORY_02_A_6 = "story-02-A-6";
    /** 《闇昏千影の生きる道：刹那》 */ CardId.STORY_02_A_5 = "story-02-A-5";
    /** 《演習用鉄槌》 */ CardId.STORY_02_B_1 = "story-02-B-1";
    /** 《体当たり》 */ CardId.STORY_02_B_2 = "story-02-B-2";
    /** 《追撃》 */ CardId.STORY_02_B_3 = "story-02-B-3";
    /** 《看破》 */ CardId.STORY_02_B_4 = "story-02-B-4";
    /** 《飛び退き》 */ CardId.STORY_02_B_5 = "story-02-B-5";
    /** 《龍の本能》 */ CardId.STORY_02_B_6 = "story-02-B-6";
    /** 《反攻》 */ CardId.STORY_09_A_1 = "story-09-A-1";
    /** 《防壁》 */ CardId.STORY_09_A_2 = "story-09-A-2";
    /** 《天主八龍閣》 */ CardId.STORY_09_A_3 = "story-09-A-3";
    /** 《鉄拳》 */ CardId.STORY_09_B_1 = "story-09-B-1";
    /** 《撃ち落とし》 */ CardId.STORY_09_B_2 = "story-09-B-2";
    /** 《瞬腕》 */ CardId.STORY_09_B_3 = "story-09-B-3";
    /** 《敷道弐式》 */ CardId.STORY_09_B_4 = "story-09-B-4";
    /** 《敷道肆式》 */ CardId.STORY_09_B_5 = "story-09-B-5";
    /** 《永久凍土》 */ CardId.KORUNU_O_N_A_NORMAL = "15-korunu-o-n-a-normal";
    /** 《永久凍土》 */ CardId.KORUNU_O_N_A_HEROIC = "15-korunu-o-n-a-heroic";
    /** 《コルヌコラムヌカラ》 */ CardId.KORUNU_O_S_A_NORMAL = "15-korunu-o-s-a-normal";
    /** 《コルヌコラムヌカラ》 */ CardId.KORUNU_O_S_A_HEROIC = "15-korunu-o-s-a-heroic";
    /** 《雪月》 */ CardId.SAINE_A2_N_A_NORMAL = "02-saine-A2-n-a-normal";
    /** 《雪月》 */ CardId.SAINE_A2_N_A_HEROIC = "02-saine-A2-n-a-heroic";
    /** 《絶華絶景》 */ CardId.SAINE_A2_S_A_NORMAL = "02-saine-A2-s-a-normal";
    /** 《絶華絶景》 */ CardId.SAINE_A2_S_A_HEROIC = "02-saine-A2-s-a-heroic";
    /** 《蝶の舞》 */ CardId.TOKOYO_O_N_A_NORMAL = "04-tokoyo-o-n-a-normal";
    /** 《蝶の舞》 */ CardId.TOKOYO_O_N_A_HEROIC = "04-tokoyo-o-n-a-heroic";
    /** 《花鳥風月常世郷》 */ CardId.TOKOYO_O_S_A_NORMAL = "04-tokoyo-o-s-a-normal";
    /** 《花鳥風月常世郷》 */ CardId.TOKOYO_O_S_A_HEROIC = "04-tokoyo-o-s-a-heroic";
    /** 《自我咆哮》 */ CardId.STORY_15_A_1 = "story-15-A-1";
    /** 《魂》 */ CardId.YATSUHA_O_N_A_NORMAL = "16-yatsuha-o-n-a-normal";
    /** 《投射》 */ CardId.HAJIMARI_A_N_1 = "00-hajimari-a-n-1";
    /** 《脇斬り》 */ CardId.HAJIMARI_A_N_2 = "00-hajimari-a-n-2";
    /** 《牽制》 */ CardId.HAJIMARI_A_N_3 = "00-hajimari-a-n-3";
    /** 《背中刺し》 */ CardId.HAJIMARI_A_N_4 = "00-hajimari-a-n-4";
    /** 《二刀一閃》 */ CardId.HAJIMARI_A_N_5 = "00-hajimari-a-n-5";
    /** 《歩法》 */ CardId.HAJIMARI_A_N_6 = "00-hajimari-a-n-6";
    /** 《潜り》 */ CardId.HAJIMARI_A_N_7 = "00-hajimari-a-n-7";
    /** 《患い》 */ CardId.HAJIMARI_A_N_8 = "00-hajimari-a-n-8";
    /** 《陰の罠》 */ CardId.HAJIMARI_A_N_9 = "00-hajimari-a-n-9";
    /** 《数多ノ刃》 */ CardId.HAJIMARI_A_S_1 = "00-hajimari-a-s-1";
    /** 《闇凪ノ声》 */ CardId.HAJIMARI_A_S_2 = "00-hajimari-a-s-2";
    /** 《苦ノ外套》 */ CardId.HAJIMARI_A_S_3 = "00-hajimari-a-s-3";
    /** 《奪イノ茨》 */ CardId.HAJIMARI_A_S_4 = "00-hajimari-a-s-4";
    /** 《花弁刃》 */ CardId.HAJIMARI_B_N_1 = "00-hajimari-b-n-1";
    /** 《桜刀》 */ CardId.HAJIMARI_B_N_2 = "00-hajimari-b-n-2";
    /** 《瞬霊式》 */ CardId.HAJIMARI_B_N_3 = "00-hajimari-b-n-3";
    /** 《返し斬り》 */ CardId.HAJIMARI_B_N_4 = "00-hajimari-b-n-4";
    /** 《歩法》 */ CardId.HAJIMARI_B_N_5 = "00-hajimari-b-n-5";
    /** 《桜寄せ》 */ CardId.HAJIMARI_B_N_6 = "00-hajimari-b-n-6";
    /** 《光輝収束》 */ CardId.HAJIMARI_B_N_7 = "00-hajimari-b-n-7";
    /** 《光の刃》 */ CardId.HAJIMARI_B_N_8 = "00-hajimari-b-n-8";
    /** 《精霊連携》 */ CardId.HAJIMARI_B_N_9 = "00-hajimari-b-n-9";
    /** 《光満ちる一刀》 */ CardId.HAJIMARI_B_S_1 = "00-hajimari-b-s-1";
    /** 《花吹雪の景色》 */ CardId.HAJIMARI_B_S_2 = "00-hajimari-b-s-2";
    /** 《精霊たちの風》 */ CardId.HAJIMARI_B_S_3 = "00-hajimari-b-s-3";
    /** 《煌めきの乱舞》 */ CardId.HAJIMARI_B_S_4 = "00-hajimari-b-s-4";
    /** 《仙人呼法》 */ CardId.OBORO_O_N_A = "05-oboro-o-n-a";
    /** 《緋色手裏剣》 */ CardId.OBORO_O_N_B = "05-oboro-o-n-b";
    /** 《朧霞》 */ CardId.OBORO_O_S_A = "05-oboro-o-s-a";
    /** 《朧霞・血桜開花》 */ CardId.OBORO_O_S_B = "05-oboro-o-s-b";
    /** 《歪の目》 */ CardId.CHIKAGE_O_N_A = "09-chikage-o-n-a";
    /** 《歪の刃》 */ CardId.CHIKAGE_O_N_B = "09-chikage-o-n-b";
    /** 《結び番傘》 */ CardId.CHIKAGE_O_N_Y = "09-chikage-o-n-y";
    /** 《不朽の絆毒》 */ CardId.CHIKAGE_O_S_A = "09-chikage-o-s-a";
    /** 《滅灯毒》 */ CardId.CHIKAGE_O_P_A = "09-chikage-o-p-a";
    /** 《雪灯毒》 */ CardId.CHIKAGE_O_P_B = "09-chikage-o-p-b";
    /** 《乱動》 */ CardId.RAIRA_O_N_A = "12-raira-o-n-a";
    /** 《大乱動》 */ CardId.RAIRA_O_N_B = "12-raira-o-n-b";
    /** 《原初暴風》 */ CardId.RAIRA_O_N_Y = "12-raira-o-n-y";
    /** 《【原初なる嵐の力】》 */ CardId.RAIRA_STORM_A = "12-raira-storm-a";
    /** 《天理天道覆載圏》 */ CardId.RAIRA_O_S_A = "12-raira-o-s-a";
    /** 《宿木》 */ CardId.MEGUMI_O_N_A = "19-megumi-o-n-a";
    /** 《片喰》 */ CardId.MEGUMI_O_N_B = "19-megumi-o-n-b";
    /** 《その先の青空》 */ CardId.MEGUMI_O_S_A = "19-megumi-o-s-a";
    /** 《英雄の一撃》 */ CardId.MEGUMI_O_N_E = "19-megumi-o-n-e";
    /** 《勇者の杖》 */ CardId.MEGUMI_O_N_Y = "19-megumi-o-n-y";
    /** 《魔女の杖》 */ CardId.MEGUMI_O_N_O = "19-megumi-o-n-o";
})(CardId = exports.CardId || (exports.CardId = {}));
/** 偽証カードのIDリスト */
exports.LIE_CARD_IDS = [
    CardId.RENRI_O_N_1,
    CardId.RENRI_O_N_2,
    CardId.RENRI_O_N_3,
    CardId.RENRI_O_N_5,
    CardId.RENRI_O_N_6,
];


/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CARD_SETS = exports.CARD_SET_DATA = void 0;
const typedObjectKeys_1 = __nccwpck_require__(210);
/** カードセット情報 */
exports.CARD_SET_DATA = {
    'na-s2': {
        name: '新幕 シーズン2',
        listName: '新幕 シーズン2 (2018/8/17～ 『第壱拡張：神語起譚』以降)',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'na-s3': {
        name: '新幕 シーズン3',
        listName: '新幕 シーズン3 (2018/11/30～ 『第弐拡張：神語転晴』以降)',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'na-s4': {
        name: '新幕 シーズン4',
        listName: '新幕 シーズン4 (2019/6/7～ 『第参拡張：零限突破』以降)',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'na-s5': {
        name: '新幕 シーズン5',
        listName: '新幕 シーズン5 (2019/11/23～ 『第四拡張：大洋航路』以降)',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'na-s6': {
        name: '新幕 シーズン6',
        listName: '新幕 シーズン6 (2020/9/11～ 『第伍拡張：異語邂逅』以降)',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'na-s6-2': {
        name: '新幕 シーズン6-2',
        listName: '新幕 シーズン6-2 (2021/2/1～)',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'na-s7': {
        name: '新幕 シーズン7',
        listName: '新幕 シーズン7 (2021/12/3～ 『第六拡張：失楽飛翔』以降)',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-0': {
        name: '物語0：神語りのはじまり',
        listName: '物語0：神語りのはじまり',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-1': {
        name: '物語1：天音揺波 対 氷雨細音',
        listName: '物語1：天音揺波 対 氷雨細音',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-2': {
        name: '物語2：龍ノ宮一志暗殺計画',
        listName: '物語2：龍ノ宮一志暗殺計画',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-9': {
        name: '物語9：はじめての代理戦争',
        listName: '物語9：はじめての代理戦争',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-10': {
        name: '物語10：コルヌに挑戦！',
        listName: '物語10：コルヌに挑戦！',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-10-heroic': {
        name: '物語10：コルヌに挑戦！（英雄戦）',
        listName: '物語10：コルヌに挑戦！（英雄戦）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-12': {
        name: '物語12：徒神サイネに挑戦！',
        listName: '物語12：徒神サイネに挑戦！',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-12-heroic': {
        name: '物語12：徒神サイネに挑戦！（英雄戦）',
        listName: '物語12：徒神サイネに挑戦！（英雄戦）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-13': {
        name: '物語13：新幕トコヨに挑戦！',
        listName: '物語13：新幕トコヨに挑戦！',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-13-heroic': {
        name: '物語13：新幕トコヨに挑戦！（英雄戦）',
        listName: '物語13：新幕トコヨに挑戦！（英雄戦）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'story-15': {
        name: '物語15：彼女の挑戦',
        listName: '物語15：彼女の挑戦',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'hajimari': {
        name: 'はじまりの決闘',
        listName: 'はじまりの決闘（初心者向け）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'oboro-challenge': {
        name: 'オボロへの挑戦',
        listName: 'メガミへの挑戦　第1回：オボロへの挑戦',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'oboro-challenge-heroic': {
        name: 'オボロへの挑戦（英雄戦）',
        listName: 'メガミへの挑戦　第1回：オボロへの挑戦（英雄戦）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'chikage-challenge': {
        name: 'チカゲへの挑戦',
        listName: 'メガミへの挑戦　第2回：チカゲへの挑戦',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'chikage-challenge-heroic': {
        name: 'チカゲへの挑戦（英雄戦）',
        listName: 'メガミへの挑戦　第2回：チカゲへの挑戦（英雄戦）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'raira-challenge': {
        name: 'ライラへの挑戦',
        listName: 'メガミへの挑戦　第3回：ライラへの挑戦',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'raira-challenge-heroic': {
        name: 'ライラへの挑戦（英雄戦）',
        listName: 'メガミへの挑戦　第3回：ライラへの挑戦（英雄戦）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'megumi-challenge': {
        name: 'メグミへの挑戦',
        listName: 'メガミへの挑戦　第4回：メグミへの挑戦',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'megumi-challenge-heroic': {
        name: 'メグミへの挑戦（英雄戦）',
        listName: 'メガミへの挑戦　第4回：メグミへの挑戦（英雄戦）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'shinra-challenge': {
        name: 'シンラへの挑戦',
        listName: 'メガミへの挑戦　第5回：シンラへの挑戦',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    },
    'shinra-challenge-heroic': {
        name: 'シンラへの挑戦（英雄戦）',
        listName: 'メガミへの挑戦　第5回：シンラへの挑戦（英雄戦）',
        nameZh: '',
        listNameZh: '',
        nameKo: '',
        listNameKo: '',
        nameEn: '',
        listNameEn: ''
    }
};
/** 全カードセット一覧 */
exports.CARD_SETS = (0, typedObjectKeys_1.typedObjectKeys)(exports.CARD_SET_DATA);


/***/ }),

/***/ 974:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(353), exports);
__exportStar(__nccwpck_require__(667), exports);
__exportStar(__nccwpck_require__(645), exports);
__exportStar(__nccwpck_require__(311), exports);


/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MEGAMI_DATA = void 0;
const MEGAMI_DATA_BASE = {
    yurina: {
        name: "ユリナ",
        nameZh: "摇波",
        nameZhG1: "摇波",
        nameKo: "유리나",
        nameEn: "Yurina",
        symbol: "刀",
        symbolZh: "刀",
        symbolZhG1: "刀",
        symbolKo: "도",
        symbolEn: "Katana",
        tarotNo: "01",
    },
    "yurina-a1": {
        name: "第一章ユリナ",
        nameZh: "第一章摇波",
        nameZhG1: "第一章摇波",
        nameKo: "제1장 유리나",
        nameEn: "First Chapter Yurina",
        symbol: "古刀",
        symbolZh: "古刀",
        symbolZhG1: "古刀",
        symbolKo: "고도",
        symbolEn: "Kotō",
        base: "yurina",
        anotherID: "A1",
        tarotNo: "01",
    },
    saine: {
        name: "サイネ",
        nameZh: "细音",
        nameZhG1: "细音",
        nameKo: "사이네",
        nameEn: "Saine",
        symbol: "薙刀",
        symbolZh: "薙刀",
        symbolZhG1: "薙刀",
        symbolKo: "나기나타",
        symbolEn: "Naginata",
        tarotNo: "02",
    },
    "saine-a1": {
        name: "第二章サイネ",
        nameZh: "第二章细音",
        nameZhG1: "第二章细音",
        nameKo: "제2장 사이네",
        nameEn: "Second Chapter Saine",
        symbol: "琵琶",
        symbolZh: "琵琶",
        symbolZhG1: "琵琶",
        symbolKo: "비파",
        symbolEn: "Biwa",
        base: "saine",
        anotherID: "A1",
        tarotNo: "02",
    },
    "saine-a2": {
        name: "徒神サイネ",
        nameZh: "徒神细音",
        nameZhG1: "徒神细音",
        nameKo: "허무신 사이네",
        nameEn: "Adagami Saine",
        symbol: "拒絶",
        symbolZh: "拒绝",
        symbolZhG1: "拒绝",
        symbolKo: "거절",
        symbolEn: "Refuse",
        base: "saine",
        anotherID: "A2",
        notExistCardSets: ["na-s2", "na-s3"],
        tarotNo: "02",
    },
    himika: {
        name: "ヒミカ",
        nameZh: "绯弥香",
        nameZhG1: "绯弥香",
        nameKo: "히미카",
        nameEn: "Himika",
        symbol: "銃",
        symbolZh: "铳",
        symbolZhG1: "火枪",
        symbolKo: "총",
        symbolEn: "Arquebus",
        tarotNo: "03",
    },
    "himika-a1": {
        name: "原初ヒミカ",
        nameZh: "原初绯弥香",
        nameZhG1: "原初绯弥香",
        nameKo: "원초 히미카",
        nameEn: "Originally Himika",
        symbol: "炎",
        symbolZh: "炎",
        symbolZhG1: "炎",
        symbolKo: "화염",
        symbolEn: "Flame",
        base: "himika",
        anotherID: "A1",
        tarotNo: "03",
    },
    tokoyo: {
        name: "トコヨ",
        nameZh: "常世",
        nameZhG1: "常世",
        nameKo: "토코요",
        nameEn: "Tokoyo",
        symbol: "扇",
        symbolZh: "扇",
        symbolZhG1: "扇",
        symbolKo: "부채",
        symbolEn: "Fan",
        tarotNo: "04",
    },
    "tokoyo-a1": {
        name: "旅芸人トコヨ",
        nameZh: "旅艺人常世",
        nameZhG1: "旅艺人常世",
        nameKo: "음유시인 토코요",
        nameEn: "Bard Tokoyo",
        symbol: "笛",
        symbolZh: "笛",
        symbolZhG1: "笛",
        symbolKo: "피리",
        symbolEn: "Flute",
        base: "tokoyo",
        anotherID: "A1",
        tarotNo: "04",
    },
    "tokoyo-a2": {
        name: "徒神トコヨ",
        nameZh: "徒神常世",
        nameZhG1: "徒神常世",
        nameKo: "허무신 토코요",
        nameEn: "Adagami Tokoyo",
        symbol: "恐怖",
        symbolZh: "恐惧",
        symbolZhG1: "恐怖",
        symbolKo: "공포",
        symbolEn: "Fear",
        base: "tokoyo",
        anotherID: "A2",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
        ],
        tarotNo: "04",
    },
    oboro: {
        name: "オボロ",
        nameZh: "胧",
        nameZhG1: "胧",
        nameKo: "오보로",
        nameEn: "Oboro",
        symbol: "忍",
        symbolZh: "忍",
        symbolZhG1: "忍",
        symbolKo: "인술",
        symbolEn: "Ninjutsu",
        tarotNo: "05",
    },
    "oboro-a1": {
        name: "第三章オボロ",
        nameZh: "第三章胧",
        nameZhG1: "第三章胧",
        nameKo: "제3장 오보로",
        nameEn: "Third Chapter Oboro",
        symbol: "戦略",
        symbolZh: "战略",
        symbolZhG1: "战略",
        symbolKo: "전략",
        symbolEn: "Strategy",
        base: "oboro",
        anotherID: "A1",
        notExistCardSets: ["na-s2"],
        tarotNo: "05",
    },
    yukihi: {
        name: "ユキヒ",
        nameZh: "雪灯",
        nameZhG1: "雪灯",
        nameKo: "유키히",
        nameEn: "Yukihi",
        symbol: "傘/簪",
        symbolZh: "伞/簪",
        symbolZhG1: "伞/簪",
        symbolKo: "우산/비녀",
        symbolEn: "Umbrella/Hairpin",
        tarotNo: "06",
    },
    "yukihi-a1": {
        name: "社交界ユキヒ",
        nameZh: "社交界雪灯",
        nameZhG1: "社交界雪灯",
        nameKo: "사교계 유키히",
        nameEn: "Society Yukihi",
        symbol: "社交",
        symbolZh: "社交",
        symbolZhG1: "社交",
        symbolKo: "사교",
        symbolEn: "Society",
        base: "yukihi",
        anotherID: "A1",
        notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"],
        tarotNo: "06",
    },
    shinra: {
        name: "シンラ",
        nameZh: "森罗",
        nameZhG1: "森罗",
        nameKo: "신라",
        nameEn: "Shinra",
        symbol: "書",
        symbolZh: "书",
        symbolZhG1: "书",
        symbolKo: "책",
        symbolEn: "Scroll",
        tarotNo: "07",
    },
    "shinra-a1": {
        name: "教主シンラ",
        nameZh: "教主森罗",
        nameZhG1: "教主森罗",
        nameKo: "교주 신라",
        nameEn: "Hierarch Shinra",
        symbol: "経典",
        symbolZh: "经卷",
        symbolZhG1: "经典",
        symbolKo: "경전",
        symbolEn: "Classics",
        base: "shinra",
        anotherID: "A1",
        notExistCardSets: ["na-s2", "na-s3"],
        tarotNo: "08",
    },
    hagane: {
        name: "ハガネ",
        nameZh: "破钟",
        nameZhG1: "破钟",
        nameKo: "하가네",
        nameEn: "Hagane",
        symbol: "鎚",
        symbolZh: "锤",
        symbolZhG1: "锤",
        symbolKo: "망치",
        symbolEn: "Hammer",
        tarotNo: "08",
    },
    "hagane-a1": {
        name: "鍛治師ハガネ",
        nameZh: "锻造师破钟",
        nameZhG1: "锻造师破钟",
        nameKo: "대장장이 하가네",
        nameEn: "Blacksmith Hagane",
        symbol: "金床",
        symbolZh: "铁砧",
        symbolZhG1: "铁砧",
        symbolKo: "모루",
        symbolEn: "Anvil",
        base: "hagane",
        anotherID: "A1",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
        ],
        tarotNo: "08",
    },
    chikage: {
        name: "チカゲ",
        nameZh: "千影",
        nameZhG1: "千影",
        nameKo: "치카게",
        nameEn: "Chikage",
        symbol: "毒",
        symbolZh: "毒",
        symbolZhG1: "毒",
        symbolKo: "독",
        symbolEn: "Poison",
        tarotNo: "09",
    },
    "chikage-a1": {
        name: "第四章チカゲ",
        nameZh: "第四章千影",
        nameZhG1: "第四章千影",
        nameKo: "제4장 치카게",
        nameEn: "Fourth Chapter Chikage",
        symbol: "絆",
        symbolZh: "绊",
        symbolZhG1: "绊",
        symbolKo: "인연",
        symbolEn: "Kizuna",
        base: "chikage",
        anotherID: "A1",
        notExistCardSets: ["na-s2"],
        tarotNo: "09",
    },
    kururu: {
        name: "クルル",
        nameZh: "枢",
        nameZhG1: "枢",
        nameKo: "쿠루루",
        nameEn: "Kururu",
        symbol: "絡繰",
        symbolZh: "机关",
        symbolZhG1: "机巧",
        symbolKo: "꼭두각시",
        symbolEn: "Karakuri",
        tarotNo: "10",
    },
    "kururu-a1": {
        name: "探索者クルル",
        nameZh: "探索者枢",
        nameZhG1: "探索者枢",
        nameKo: "탐색자 쿠루루",
        nameEn: "Explorer Kururu",
        symbol: "機器",
        symbolZh: "机器",
        symbolZhG1: "机器",
        symbolKo: "기계",
        symbolEn: "Machanism",
        base: "kururu",
        anotherID: "A1",
        notExistCardSets: ["na-s2", "na-s3"],
        tarotNo: "10",
    },
    "kururu-a2": {
        name: "徒神クルル",
        nameZh: "徒神枢",
        nameZhG1: "徒神枢",
        nameKo: "허무신 쿠루루",
        nameEn: "Adagami Kururu",
        symbol: "友情",
        symbolZh: "友情",
        symbolZhG1: "友情",
        symbolKo: "우정",
        symbolEn: "Friendship",
        base: "kururu",
        anotherID: "A2",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
            "na-s6",
            "na-s6-2",
        ],
        tarotNo: "10",
    },
    thallya: {
        name: "サリヤ",
        nameZh: "萨莉娅",
        nameZhG1: "萨莉娅",
        nameKo: "탈리야",
        nameEn: "Thallya",
        symbol: "乗騎",
        symbolZh: "骑",
        symbolZhG1: "车",
        symbolKo: "탈것",
        symbolEn: "Mount",
        tarotNo: "11",
    },
    "thallya-a1": {
        name: "帰還サリヤ",
        nameZh: "回返萨莉娅",
        nameZhG1: "归还萨莉娅",
        nameKo: "귀향 탈리야",
        nameEn: "Return Thallya",
        symbol: "新型",
        symbolZh: "新型",
        symbolZhG1: "新型",
        symbolKo: "신형",
        symbolEn: "New Form",
        base: "thallya",
        anotherID: "A1",
        notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"],
        tarotNo: "11",
    },
    raira: {
        name: "ライラ",
        nameZh: "雷螺",
        nameZhG1: "雷螺",
        nameKo: "라이라",
        nameEn: "Raira",
        symbol: "爪",
        symbolZh: "爪",
        symbolZhG1: "爪",
        symbolKo: "발톱",
        symbolEn: "Claw",
        tarotNo: "12",
    },
    "raira-a1": {
        name: "祈祷師ライラ",
        nameZh: "祈祷师雷螺",
        nameZhG1: "祈祷师雷螺",
        nameKo: "기도사 라이라",
        nameEn: "Prayer Raira",
        symbol: "嵐",
        symbolZh: "飓",
        symbolZhG1: "岚",
        symbolKo: "폭풍",
        symbolEn: "Storm",
        base: "raira",
        anotherID: "A1",
        notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"],
        tarotNo: "12",
    },
    utsuro: {
        name: "ウツロ",
        nameZh: "虚路",
        nameZhG1: "虚路",
        nameKo: "우츠로",
        nameEn: "Utsuro",
        symbol: "鎌",
        symbolZh: "镰",
        symbolZhG1: "镰",
        symbolKo: "낫",
        symbolEn: "Scythe",
        tarotNo: "13",
    },
    "utsuro-a1": {
        name: "終章ウツロ",
        nameZh: "终章虚路",
        nameZhG1: "终章虚路",
        nameKo: "종장 우츠로",
        nameEn: "Final Chapter Utsuro",
        symbol: "塵",
        symbolZh: "尘",
        symbolZhG1: "尘",
        symbolKo: "먼지",
        symbolEn: "Dust",
        base: "utsuro",
        anotherID: "A1",
        notExistCardSets: ["na-s2"],
        tarotNo: "13",
    },
    honoka: {
        name: "ホノカ",
        nameZh: "仄佳",
        nameZhG1: "仄佳",
        nameKo: "호노카",
        nameEn: "Honoka",
        symbol: "旗",
        symbolZh: "旗",
        symbolZhG1: "旗",
        symbolKo: "깃발",
        symbolEn: "Flag",
        notExistCardSets: ["na-s2"],
        tarotNo: "14",
    },
    "honoka-a1": {
        name: "桜花拝ホノカ",
        nameZh: "拜樱仄佳",
        nameZhG1: "樱花拜仄佳",
        nameKo: "앵화배 호노카",
        nameEn: "Sakuraist Honoka",
        symbol: "勾玉",
        symbolZh: "勾玉",
        symbolZhG1: "勾玉",
        symbolKo: "곡옥",
        symbolEn: "Magatama",
        base: "honoka",
        anotherID: "A1",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
        ],
        tarotNo: "14",
    },
    korunu: {
        name: "コルヌ",
        nameZh: "凝努",
        nameZhG1: "凝努",
        nameKo: "코르누",
        nameEn: "Korunu",
        symbol: "橇",
        symbolZh: "橇",
        symbolZhG1: "橇",
        symbolKo: "썰매",
        symbolEn: "Skate blade",
        notExistCardSets: ["na-s2", "na-s3"],
        tarotNo: "15",
    },
    yatsuha: {
        name: "ヤツハ",
        nameZh: "八叶",
        nameZhG1: "八叶",
        nameKo: "야츠하",
        nameEn: "Yatsuha",
        symbol: "鏡",
        symbolZh: "镜",
        symbolZhG1: "镜",
        symbolKo: "거울",
        symbolEn: "Mirror",
        notExistCardSets: ["na-s2", "na-s3"],
        tarotNo: "16",
    },
    "yatsuha-a1": {
        name: "完全態ヤツハ",
        nameZh: "完全态八叶",
        nameZhG1: "完全态八叶",
        nameKo: "완전태 야츠하",
        nameEn: "Perfect Yatsuha",
        symbol: "花",
        symbolZh: "花",
        symbolZhG1: "花",
        symbolKo: "꽃",
        symbolEn: "Flowers",
        base: "yatsuha",
        anotherID: "A1",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
            "na-s6",
            "na-s6-2",
        ],
        tarotNo: "16",
    },
    hatsumi: {
        name: "ハツミ",
        nameZh: "初海",
        nameZhG1: "初海",
        nameKo: "하츠미",
        nameEn: "Hatsumi",
        symbol: "櫂",
        symbolZh: "桨",
        symbolZhG1: "棹",
        symbolKo: "노",
        symbolEn: "Quant",
        notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"],
        tarotNo: "17",
    },
    "hatsumi-a1": {
        name: "徒神ハツミ",
        nameZh: "徒神初海",
        nameZhG1: "徒神初海",
        nameKo: "허무신 하츠미",
        nameEn: "Adagami Hatsumi",
        symbol: "信頼",
        symbolZh: "信赖",
        symbolZhG1: "信赖",
        symbolKo: "신뢰",
        symbolEn: "Trust",
        base: "hatsumi",
        anotherID: "A1",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
            "na-s6",
            "na-s6-2",
        ],
        tarotNo: "17",
    },
    mizuki: {
        name: "ミズキ",
        nameZh: "水津城",
        nameZhG1: "水津城",
        nameKo: "미즈키",
        nameEn: "Mizuki",
        symbol: "兜",
        symbolZh: "盔",
        symbolZhG1: "兜",
        symbolKo: "투구",
        symbolEn: "Armet",
        notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"],
        tarotNo: "18",
    },
    megumi: {
        name: "メグミ",
        nameZh: "希",
        nameZhG1: "希",
        nameKo: "메구미",
        nameEn: "Megumi",
        symbol: "唐棹",
        symbolZh: "连枷",
        symbolZhG1: "梿枷",
        symbolKo: "도리깨",
        symbolEn: "Flail",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
        ],
        tarotNo: "19",
    },
    kanawe: {
        name: "カナヱ",
        nameZh: "叶慧",
        nameZhG1: "叶慧",
        nameKo: "카나에",
        nameEn: "Kanawe",
        symbol: "仮面",
        symbolZh: "假面",
        symbolZhG1: "面具",
        symbolKo: "가면",
        symbolEn: "Masks",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
        ],
        tarotNo: "20",
    },
    kamuwi: {
        name: "カムヰ",
        nameZh: "神威",
        nameZhG1: "神居",
        nameKo: "카무이",
        nameEn: "Kamuwi",
        symbol: "剣",
        symbolZh: "剑",
        symbolZhG1: "剑",
        symbolKo: "검",
        symbolEn: "Sword",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
            "na-s6",
            "na-s6-2",
        ],
        tarotNo: "21",
    },
    renri: {
        name: "レンリ",
        nameZh: "恋离",
        nameZhG1: "恋离",
        nameKo: "렌리",
        nameEn: "Renri",
        symbol: "衣",
        symbolZh: "衣",
        symbolZhG1: "衣",
        symbolKo: "옷",
        symbolEn: "Robe",
        notExistCardSets: [
            "na-s2",
            "na-s3",
            "na-s4",
            "na-s4-pre",
            "na-s5",
            "na-s6",
            "na-s6-2",
        ],
        tarotNo: "22",
    },
    "yurina-story-0": {
        name: "天音揺波",
        nameZh: "天音摇波",
        nameZhG1: "天音摇波",
        nameKo: "아마네 유리나",
        nameEn: "Yurina Amane",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        base: "yurina",
        anotherID: "S0",
        tarotNo: "01",
    },
    "saine-story-0": {
        name: "氷雨細音",
        nameZh: "冰雨细音",
        nameZhG1: "冰雨细音",
        nameKo: "히사메 사이네",
        nameEn: "Saine Hisame",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        base: "saine",
        anotherID: "S0",
        tarotNo: "02",
    },
    "yurina-story-1": {
        name: "天音揺波",
        nameZh: "天音摇波",
        nameZhG1: "天音摇波",
        nameKo: "아마네 유리나",
        nameEn: "Yurina Amane",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        base: "yurina",
        anotherID: "S1",
        tarotNo: "01",
    },
    "saine-story-1": {
        name: "氷雨細音",
        nameZh: "冰雨细音",
        nameZhG1: "冰雨细音",
        nameKo: "히사메 사이네",
        nameEn: "Saine Hisame",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        base: "saine",
        anotherID: "S1",
        tarotNo: "02",
    },
    "chikage-story-2": {
        name: "闇昏千影",
        nameZh: "暗昏千影",
        nameZhG1: "暗昏千影",
        nameKo: "야미쿠라 치카게",
        nameEn: "Chikage Yamikura",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        base: "yurina",
        anotherID: "S2",
        tarotNo: "09",
    },
    "tatsu-story-2": {
        name: "龍ノ宮一志",
        nameZh: "龙之宫一志",
        nameZhG1: "龙之宫一志",
        nameKo: "타츠노미야 잇시",
        nameEn: "Isshi Tatsunomiya",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        anotherID: "S2",
        tarotNo: "91",
    },
    "yatsuha-story-9": {
        name: "ヤツハ",
        nameZh: "八叶",
        nameZhG1: "八叶",
        nameKo: "야츠하",
        nameEn: "Yatsuha",
        symbol: "鏡",
        symbolZh: "镜",
        symbolZhG1: "镜",
        symbolKo: "부채",
        symbolEn: "Mirror",
        base: "yatsuha",
        anotherID: "S9",
        tarotNo: "16",
    },
    "yura-story-9": {
        name: "遥原夕羅",
        nameZh: "遥原夕罗",
        nameZhG1: "遥原夕罗",
        nameKo: "하루하라 유라",
        nameEn: "Yura Harubara",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        anotherID: "S9",
        tarotNo: "92",
    },
    "korunu-story-10": {
        name: "コルヌ",
        nameZh: "凝努",
        nameZhG1: "凝努",
        nameKo: "코르누",
        nameEn: "Korunu",
        symbol: "橇",
        symbolZh: "橇",
        symbolZhG1: "橇",
        symbolKo: "썰매",
        symbolEn: "Skate blade",
        base: "korunu",
        anotherID: "S10",
        notExistCardSets: ["na-s2", "na-s3"],
        tarotNo: "15",
    },
    "saine-story-12": {
        name: "徒神サイネ",
        nameZh: "徒神细音",
        nameZhG1: "徒神细音",
        nameKo: "도신 사이네",
        nameEn: "Adagami Saine",
        symbol: "拒絶",
        symbolZh: "拒绝",
        symbolZhG1: "拒绝",
        symbolKo: "거절",
        symbolEn: "Refuse",
        base: "saine",
        anotherID: "S12",
        notExistCardSets: ["na-s2", "na-s3"],
        tarotNo: "02",
    },
    "tokoyo-story-13": {
        name: "トコヨ",
        nameZh: "常世",
        nameZhG1: "常世",
        nameKo: "토코요",
        nameEn: "Tokoyo",
        symbol: "扇",
        symbolZh: "扇",
        symbolZhG1: "扇",
        symbolKo: "부채",
        symbolEn: "Fan",
        base: "tokoyo",
        anotherID: "S13",
        tarotNo: "04",
    },
    "yatsuha-story-15": {
        name: "ヤツハ",
        nameZh: "八叶",
        nameZhG1: "八叶",
        nameKo: "야츠하",
        nameEn: "Yatsuha",
        symbol: "鏡",
        symbolZh: "镜",
        symbolZhG1: "镜",
        symbolKo: "부채",
        symbolEn: "Mirror",
        base: "yatsuha",
        anotherID: "S15",
        notExistCardSets: ["na-s2", "na-s3"],
        tarotNo: "16",
    },
    "utsuro-hajimari": {
        name: "ウツロの欠片",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        nameEn: "",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        tarotNo: "93",
    },
    "honoka-hajimari": {
        name: "ホノカの欠片",
        nameZh: "",
        nameZhG1: "",
        nameKo: "",
        nameEn: "",
        symbol: "",
        symbolZh: "",
        symbolZhG1: "",
        symbolKo: "",
        symbolEn: "",
        tarotNo: "94",
    },
    "oboro-original": {
        name: "オボロ",
        nameZh: "胧",
        nameZhG1: "胧",
        nameKo: "오보로",
        nameEn: "Oboro",
        symbol: "忍",
        symbolZh: "忍",
        symbolZhG1: "忍",
        symbolKo: "인술",
        symbolEn: "Ninjutsu",
        base: "oboro",
        anotherID: "C1",
        tarotNo: "05",
    },
    "chikage-original": {
        name: "チカゲ",
        nameZh: "千影",
        nameZhG1: "千影",
        nameKo: "치카게",
        nameEn: "Chikage",
        symbol: "毒",
        symbolZh: "毒",
        symbolZhG1: "毒",
        symbolKo: "독",
        symbolEn: "Poison",
        base: "chikage",
        anotherID: "C2",
        tarotNo: "09",
    },
    "raira-original": {
        name: "ライラ",
        nameZh: "雷螺",
        nameZhG1: "雷螺",
        nameKo: "라이라",
        nameEn: "Raira",
        symbol: "爪",
        symbolZh: "爪",
        symbolZhG1: "爪",
        symbolKo: "발톱",
        symbolEn: "Claw",
        base: "raira",
        anotherID: "C3",
        tarotNo: "12",
    },
    "megumi-original": {
        name: "メグミ",
        nameZh: "希",
        nameZhG1: "希",
        nameKo: "메구미",
        nameEn: "Megumi",
        symbol: "唐棹",
        symbolZh: "连枷",
        symbolZhG1: "梿枷",
        symbolKo: "도리깨",
        symbolEn: "Flail",
        base: "megumi",
        anotherID: "C4",
        tarotNo: "19",
    },
};
exports.MEGAMI_DATA = MEGAMI_DATA_BASE;


/***/ }),

/***/ 144:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(974), exports);
__exportStar(__nccwpck_require__(971), exports);
__exportStar(__nccwpck_require__(252), exports);


/***/ }),

/***/ 349:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 971:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(349), exports);
__exportStar(__nccwpck_require__(514), exports);


/***/ }),

/***/ 514:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 598:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isMegamiChallengeSet = exports.isStorySet = void 0;
// 指定したカードセットが物語セットであるかどうかを判定
function isStorySet(cardSet) {
    return (cardSet === "story-0" ||
        cardSet === "story-1" ||
        cardSet === "story-2" ||
        cardSet === "story-9" ||
        cardSet === "story-10" ||
        cardSet === "story-10-heroic" ||
        cardSet === "story-12" ||
        cardSet === "story-12-heroic" ||
        cardSet === "story-13" ||
        cardSet === "story-13-heroic" ||
        cardSet === "story-15" ||
        cardSet === "hajimari" ||
        isMegamiChallengeSet(cardSet));
}
exports.isStorySet = isStorySet;
// 指定したカードセットが「メガミへの挑戦」であるかどうかを判定
function isMegamiChallengeSet(cardSet) {
    return (cardSet === "oboro-challenge" ||
        cardSet === "oboro-challenge-heroic" ||
        cardSet === "chikage-challenge" ||
        cardSet === "chikage-challenge-heroic" ||
        cardSet === "raira-challenge" ||
        cardSet === "raira-challenge-heroic" ||
        cardSet === "megumi-challenge" ||
        cardSet === "megumi-challenge-heroic");
}
exports.isMegamiChallengeSet = isMegamiChallengeSet;


/***/ }),

/***/ 252:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(598), exports);
__exportStar(__nccwpck_require__(407), exports);


/***/ }),

/***/ 407:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCardListDefaultMegami = exports.getMegamiKeys = exports.GetMegamiKeyMode = exports.isMegamiCanLie = exports.isMegamiHasTabooGuage = exports.isMegamiHasWindThunderGuage = exports.isMegamiPoisonBagAreaVisible = exports.isMegamiExtraCardAreaVisible = exports.isSymbolShownMegami = exports.getMegamiDispName = exports.getMegamiDispNameWithSymbol = void 0;
const data_1 = __nccwpck_require__(974);
/** メガミの表示名を取得（象徴武器表示あり） */
function getMegamiDispNameWithSymbol(language, zhValiation, megami) {
    // 象徴武器表示なしメガミ
    if (!isSymbolShownMegami(megami)) {
        return getMegamiDispName(language, zhValiation, megami);
    }
    let data = data_1.MEGAMI_DATA[megami];
    if (language === "zh") {
        return `${zhValiation === "G1" ? data.nameZhG1 : data.nameZh}(${zhValiation === "G1" ? data.symbolZhG1 : data.symbolZh})`;
    }
    else if (language === "ko") {
        return `${data.nameKo} (${data.symbolKo})`;
    }
    else if (language === "en") {
        return `${data.nameEn} (${data.symbolEn})`;
    }
    else {
        return `${data.name}(${data.symbol})`;
    }
}
exports.getMegamiDispNameWithSymbol = getMegamiDispNameWithSymbol;
/** メガミの表示名を取得 */
function getMegamiDispName(language, zhValiation, megami) {
    let data = data_1.MEGAMI_DATA[megami];
    if (language === "zh") {
        return `${zhValiation === "G1" ? data.nameZhG1 : data.nameZh}`;
    }
    else if (language === "ko") {
        return `${data.nameKo}`;
    }
    else if (language === "en") {
        return `${data.nameEn}`;
    }
    else {
        return `${data.name}`;
    }
}
exports.getMegamiDispName = getMegamiDispName;
// 象徴武器を表示するメガミであるかどうかを判定
function isSymbolShownMegami(megami) {
    return !(megami === "yurina-story-0" ||
        megami === "saine-story-0" ||
        megami === "yurina-story-1" ||
        megami === "saine-story-1" ||
        megami === "chikage-story-2" ||
        megami === "tatsu-story-2" ||
        megami === "yatsuha-story-9" ||
        megami === "yura-story-9" ||
        megami === "honoka-hajimari" ||
        megami === "utsuro-hajimari");
}
exports.isSymbolShownMegami = isSymbolShownMegami;
/** 追加札領域を表示するメガミかどうかを判定 */
function isMegamiExtraCardAreaVisible(megami) {
    return (megami === "kururu" ||
        megami === "kururu-a1" ||
        megami === "kururu-a2" ||
        megami === "thallya" ||
        megami === "thallya-a1" ||
        megami === "raira" ||
        megami === "raira-a1" ||
        megami === "raira-original" ||
        megami === "oboro" ||
        megami === "oboro-a1" ||
        megami === "utsuro-a1" ||
        megami === "hagane-a1" ||
        megami === "honoka" ||
        megami === "honoka-a1" ||
        megami === "mizuki" ||
        megami === "yatsuha-a1" ||
        megami === "yatsuha-story-15" ||
        megami === "hatsumi-a1" ||
        megami === "megumi-original" ||
        megami === "kanawe" ||
        megami === "kamuwi" ||
        megami === "renri");
}
exports.isMegamiExtraCardAreaVisible = isMegamiExtraCardAreaVisible;
/** 毒袋領域を表示するメガミかどうかを判定 */
function isMegamiPoisonBagAreaVisible(megami) {
    return (megami === "chikage" ||
        megami === "chikage-a1" ||
        megami === "chikage-story-2" ||
        megami === "chikage-original");
}
exports.isMegamiPoisonBagAreaVisible = isMegamiPoisonBagAreaVisible;
/** 風雷ゲージを持つメガミかどうかを判定 */
function isMegamiHasWindThunderGuage(megami) {
    return (megami === "raira" ||
        megami === "raira-a1" ||
        megami === "raira-original" ||
        megami === "yura-story-9");
}
exports.isMegamiHasWindThunderGuage = isMegamiHasWindThunderGuage;
/** 禁忌ゲージを持つメガミかどうかを判定 */
function isMegamiHasTabooGuage(megami) {
    return megami === "kamuwi";
}
exports.isMegamiHasTabooGuage = isMegamiHasTabooGuage;
/** 偽証可能なメガミかどうかを判定 */
function isMegamiCanLie(megami) {
    return megami === "renri";
}
exports.isMegamiCanLie = isMegamiCanLie;
// メガミのキー一覧取得モード
exports.GetMegamiKeyMode = {
    /** 双掌繚乱時（使用メガミ数を数える時にも使用） */
    MegamiSelecting: "MegamiSelecting",
    /** カードリスト表示時 */
    CardList: "CardList",
};
/** 指定したカードセットに対応するメガミのキー一覧を取得 */
function getMegamiKeys(mode, cardSet) {
    // 物語セットやはじまりの決闘で、使用するメガミが決まっている場合の特殊処理
    if (cardSet === "story-0") {
        return ["yurina-story-0", "saine-story-0"];
    }
    if (cardSet === "story-1") {
        return ["yurina-story-1", "saine-story-1"];
    }
    if (cardSet === "story-2") {
        return ["chikage-story-2", "tatsu-story-2"];
    }
    if (cardSet === "story-9") {
        return ["yatsuha-story-9", "yura-story-9"];
    }
    if (cardSet === "story-15") {
        return ["yatsuha-story-15", "korunu-story-10"];
    }
    if (cardSet === "hajimari") {
        return ["utsuro-hajimari", "honoka-hajimari"];
    }
    let keys = [];
    for (let key in data_1.MEGAMI_DATA) {
        let megami = key;
        let megamiData = data_1.MEGAMI_DATA[megami];
        // 原初メガミは対応する物語セットでなければスキップ
        if (megami === "korunu-story-10" &&
            cardSet !== "story-10" &&
            cardSet !== "story-10-heroic")
            continue;
        if (megami === "saine-story-12" &&
            cardSet !== "story-12" &&
            cardSet !== "story-12-heroic")
            continue;
        if (megami === "tokoyo-story-13" &&
            cardSet !== "story-13" &&
            cardSet !== "story-13-heroic")
            continue;
        if (megami === "oboro-original" &&
            cardSet !== "oboro-challenge" &&
            cardSet !== "oboro-challenge-heroic")
            continue;
        if (megami === "chikage-original" &&
            cardSet !== "chikage-challenge" &&
            cardSet !== "chikage-challenge-heroic")
            continue;
        if (megami === "raira-original" &&
            cardSet !== "raira-challenge" &&
            cardSet !== "raira-challenge-heroic")
            continue;
        if (megami === "megumi-original" &&
            cardSet !== "megumi-challenge" &&
            cardSet !== "megumi-challenge-heroic")
            continue;
        // 物語セット・はじまりの決闘用のメガミは対応する物語セットでなければスキップ
        if (megami === "yurina-story-0")
            continue;
        if (megami === "saine-story-0")
            continue;
        if (megami === "yurina-story-1")
            continue;
        if (megami === "saine-story-1")
            continue;
        if (megami === "chikage-story-2")
            continue;
        if (megami === "tatsu-story-2")
            continue;
        if (megami === "yatsuha-story-9")
            continue;
        if (megami === "yura-story-9")
            continue;
        if (megami === "yatsuha-story-15")
            continue;
        if (megami === "utsuro-hajimari")
            continue;
        if (megami === "honoka-hajimari")
            continue;
        // メガミへの挑戦では、挑戦を請ける側のメガミは双掌繚乱で選択不可
        // カードリストへの原初メガミ情報の表示のみ行う
        if (cardSet === "story-10" || cardSet === "story-10-heroic") {
            let isKorunu = megami === "korunu" || megamiData.base === "korunu";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isKorunu)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isKorunu && megami !== "korunu-story-10")
                    continue;
            }
        }
        if (cardSet === "story-12" || cardSet === "story-12-heroic") {
            let isSaine = megami === "saine" || megamiData.base === "saine";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isSaine)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isSaine && megami !== "saine-story-12")
                    continue;
            }
        }
        if (cardSet === "story-13" || cardSet === "story-13-heroic") {
            let isTokoyo = megami === "tokoyo" || megamiData.base === "tokoyo";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isTokoyo)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isTokoyo && megami !== "tokoyo-story-13")
                    continue;
            }
        }
        if (cardSet === "oboro-challenge" || cardSet === "oboro-challenge-heroic") {
            let isOboro = megami === "oboro" || megamiData.base === "oboro";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isOboro)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isOboro && megami !== "oboro-original")
                    continue;
            }
        }
        if (cardSet === "chikage-challenge" ||
            cardSet === "chikage-challenge-heroic") {
            let isChikage = megami === "chikage" || megamiData.base === "chikage";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isChikage)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isChikage && megami !== "chikage-original")
                    continue;
            }
        }
        if (cardSet === "raira-challenge" || cardSet === "raira-challenge-heroic") {
            let isRaira = megami === "raira" || megamiData.base === "raira";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isRaira)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isRaira && megami !== "raira-original")
                    continue;
            }
        }
        if (cardSet === "megumi-challenge" ||
            cardSet === "megumi-challenge-heroic") {
            let isRaira = megami === "megumi" || megamiData.base === "megumi";
            if (mode === exports.GetMegamiKeyMode.MegamiSelecting) {
                if (isRaira)
                    continue;
            }
            if (mode === exports.GetMegamiKeyMode.CardList) {
                if (isRaira && megami !== "megumi-original")
                    continue;
            }
        }
        // そのカードセットに存在するメガミなら追加
        if (megamiData.notExistCardSets === undefined ||
            megamiData.notExistCardSets.indexOf(cardSet) === -1) {
            keys.push(megami);
        }
    }
    return keys;
}
exports.getMegamiKeys = getMegamiKeys;
/** カードリストに初期表示するメガミを取得 */
function getCardListDefaultMegami(cardSet) {
    return getMegamiKeys(exports.GetMegamiKeyMode.CardList, cardSet)[0];
}
exports.getCardListDefaultMegami = getCardListDefaultMegami;


/***/ }),

/***/ 703:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ 337:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lodash_es_sortBy)
});

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayPush.js
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ const _arrayPush = (arrayPush);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const _freeGlobal = (freeGlobal);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ const _root = (root);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ const _Symbol = (Symbol);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const _getRawTag = (getRawTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const _objectToString = (objectToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ const _baseGetTag = (baseGetTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const lodash_es_isObjectLike = (isObjectLike);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return lodash_es_isObjectLike(value) && _baseGetTag(value) == argsTag;
}

/* harmony default export */ const _baseIsArguments = (baseIsArguments);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return lodash_es_isObjectLike(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const lodash_es_isArguments = (isArguments);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const lodash_es_isArray = (isArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isFlattenable.js




/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return lodash_es_isArray(value) || lodash_es_isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/* harmony default export */ const _isFlattenable = (isFlattenable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFlatten.js



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/* harmony default export */ const _baseFlatten = (baseFlatten);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayMap.js
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ const _arrayMap = (arrayMap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isSymbol.js



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag);
}

/* harmony default export */ const lodash_es_isSymbol = (isSymbol);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isKey.js



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (lodash_es_isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || lodash_es_isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ const _isKey = (isKey);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const lodash_es_isObject = (isObject);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isFunction.js



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const lodash_es_isFunction = (isFunction);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["__core-js_shared__"];

/* harmony default export */ const _coreJsData = (coreJsData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const _isMasked = (isMasked);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const _toSource = (toSource);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
    _baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }
  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ const _baseIsNative = (baseIsNative);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const _getValue = (getValue);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ const _getNative = (getNative);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

/* harmony default export */ const _nativeCreate = (nativeCreate);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ const _hashClear = (hashClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const _hashDelete = (hashDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var _hashGet_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const _hashGet = (hashGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ const _hashHas = (hashHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const _hashSet = (hashSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ const _Hash = (Hash);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const _listCacheClear = (listCacheClear);

// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __nccwpck_require__(703);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,eq/* default */.Z)(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const _assocIndexOf = (assocIndexOf);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const _listCacheDelete = (listCacheDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const _listCacheGet = (listCacheGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ const _listCacheHas = (listCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const _listCacheSet = (listCacheSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ const _ListCache = (ListCache);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

/* harmony default export */ const _Map = (Map);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

/* harmony default export */ const _mapCacheClear = (mapCacheClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const _isKeyable = (isKeyable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const _getMapData = (getMapData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const _mapCacheDelete = (mapCacheDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ const _mapCacheGet = (mapCacheGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ const _mapCacheHas = (mapCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const _mapCacheSet = (mapCacheSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ const _MapCache = (MapCache);

;// CONCATENATED MODULE: ./node_modules/lodash-es/memoize.js


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

/* harmony default export */ const lodash_es_memoize = (memoize);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_memoizeCapped.js


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = lodash_es_memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ const _memoizeCapped = (memoizeCapped);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stringToPath.js


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ const _stringToPath = (stringToPath);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseToString.js





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (lodash_es_isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (lodash_es_isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const _baseToString = (baseToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/toString.js


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString_toString(value) {
  return value == null ? '' : _baseToString(value);
}

/* harmony default export */ const lodash_es_toString = (toString_toString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_castPath.js





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (lodash_es_isArray(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(lodash_es_toString(value));
}

/* harmony default export */ const _castPath = (castPath);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_toKey.js


/** Used as references for various `Number` constants. */
var _toKey_INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || lodash_es_isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -_toKey_INFINITY) ? '-0' : result;
}

/* harmony default export */ const _toKey = (toKey);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGet.js



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ const _baseGet = (baseGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

/* harmony default export */ const _stackClear = (stackClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const _stackDelete = (stackDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const _stackGet = (stackGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const _stackHas = (stackHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const _stackSet = (stackSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ const _Stack = (Stack);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var _setCacheAdd_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, _setCacheAdd_HASH_UNDEFINED);
  return this;
}

/* harmony default export */ const _setCacheAdd = (setCacheAdd);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setCacheHas.js
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ const _setCacheHas = (setCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_SetCache.js




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

/* harmony default export */ const _SetCache = (SetCache);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arraySome.js
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ const _arraySome = (arraySome);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_cacheHas.js
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ const _cacheHas = (cacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalArrays.js




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ const _equalArrays = (equalArrays);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

/* harmony default export */ const _Uint8Array = (Uint8Array);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapToArray.js
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ const _mapToArray = (mapToArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setToArray.js
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ const _setToArray = (setToArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    _equalByTag_symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var _equalByTag_symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = _equalByTag_symbolProto ? _equalByTag_symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,eq/* default */.Z)(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case _equalByTag_symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ const _equalByTag = (equalByTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetAllKeys.js



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return lodash_es_isArray(object) ? result : _arrayPush(result, symbolsFunc(object));
}

/* harmony default export */ const _baseGetAllKeys = (baseGetAllKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ const _arrayFilter = (arrayFilter);

;// CONCATENATED MODULE: ./node_modules/lodash-es/stubArray.js
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ const lodash_es_stubArray = (stubArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var _getSymbols_objectProto = Object.prototype;

/** Built-in value references. */
var _getSymbols_propertyIsEnumerable = _getSymbols_objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return _getSymbols_propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ const _getSymbols = (getSymbols);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const _baseTimes = (baseTimes);

;// CONCATENATED MODULE: ./node_modules/lodash-es/stubFalse.js
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ const lodash_es_stubFalse = (stubFalse);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isBuffer.js



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || lodash_es_stubFalse;

/* harmony default export */ const lodash_es_isBuffer = (isBuffer);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isIndex.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const _isIndex = (isIndex);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var isLength_MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= isLength_MAX_SAFE_INTEGER;
}

/* harmony default export */ const lodash_es_isLength = (isLength);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    _baseIsTypedArray_boolTag = '[object Boolean]',
    _baseIsTypedArray_dateTag = '[object Date]',
    _baseIsTypedArray_errorTag = '[object Error]',
    _baseIsTypedArray_funcTag = '[object Function]',
    _baseIsTypedArray_mapTag = '[object Map]',
    _baseIsTypedArray_numberTag = '[object Number]',
    objectTag = '[object Object]',
    _baseIsTypedArray_regexpTag = '[object RegExp]',
    _baseIsTypedArray_setTag = '[object Set]',
    _baseIsTypedArray_stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var _baseIsTypedArray_arrayBufferTag = '[object ArrayBuffer]',
    _baseIsTypedArray_dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[_baseIsTypedArray_arrayBufferTag] = typedArrayTags[_baseIsTypedArray_boolTag] =
typedArrayTags[_baseIsTypedArray_dataViewTag] = typedArrayTags[_baseIsTypedArray_dateTag] =
typedArrayTags[_baseIsTypedArray_errorTag] = typedArrayTags[_baseIsTypedArray_funcTag] =
typedArrayTags[_baseIsTypedArray_mapTag] = typedArrayTags[_baseIsTypedArray_numberTag] =
typedArrayTags[objectTag] = typedArrayTags[_baseIsTypedArray_regexpTag] =
typedArrayTags[_baseIsTypedArray_setTag] = typedArrayTags[_baseIsTypedArray_stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return lodash_es_isObjectLike(value) &&
    lodash_es_isLength(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

/* harmony default export */ const _baseIsTypedArray = (baseIsTypedArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const _baseUnary = (baseUnary);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_nodeUtil.js


/** Detect free variable `exports`. */
var _nodeUtil_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var _nodeUtil_freeModule = _nodeUtil_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var _nodeUtil_moduleExports = _nodeUtil_freeModule && _nodeUtil_freeModule.exports === _nodeUtil_freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = _nodeUtil_moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = _nodeUtil_freeModule && _nodeUtil_freeModule.require && _nodeUtil_freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const _nodeUtil = (nodeUtil);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ const lodash_es_isTypedArray = (isTypedArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var _arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = lodash_es_isArray(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && lodash_es_isBuffer(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _arrayLikeKeys = (arrayLikeKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || _isPrototype_objectProto;

  return value === proto;
}

/* harmony default export */ const _isPrototype = (isPrototype);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const _overArg = (overArg);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

/* harmony default export */ const _nativeKeys = (nativeKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var _baseKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _baseKeys = (baseKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !lodash_es_isFunction(value);
}

/* harmony default export */ const lodash_es_isArrayLike = (isArrayLike);

;// CONCATENATED MODULE: ./node_modules/lodash-es/keys.js




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

/* harmony default export */ const lodash_es_keys = (keys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
}

/* harmony default export */ const _getAllKeys = (getAllKeys);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var _equalObjects_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ const _equalObjects = (equalObjects);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

/* harmony default export */ const _DataView = (DataView);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var Promise = _getNative(_root, 'Promise');

/* harmony default export */ const _Promise = (Promise);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

/* harmony default export */ const _Set = (Set);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

/* harmony default export */ const _WeakMap = (WeakMap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var _getTag_mapTag = '[object Map]',
    _getTag_objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    _getTag_setTag = '[object Set]',
    _getTag_weakMapTag = '[object WeakMap]';

var _getTag_dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag) ||
    (_Map && getTag(new _Map) != _getTag_mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != _getTag_setTag) ||
    (_WeakMap && getTag(new _WeakMap) != _getTag_weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == _getTag_objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return _getTag_dataViewTag;
        case mapCtorString: return _getTag_mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return _getTag_setTag;
        case weakMapCtorString: return _getTag_weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ const _getTag = (getTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var _baseIsEqualDeep_argsTag = '[object Arguments]',
    _baseIsEqualDeep_arrayTag = '[object Array]',
    _baseIsEqualDeep_objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = lodash_es_isArray(object),
      othIsArr = lodash_es_isArray(other),
      objTag = objIsArr ? _baseIsEqualDeep_arrayTag : _getTag(object),
      othTag = othIsArr ? _baseIsEqualDeep_arrayTag : _getTag(other);

  objTag = objTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : objTag;
  othTag = othTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : othTag;

  var objIsObj = objTag == _baseIsEqualDeep_objectTag,
      othIsObj = othTag == _baseIsEqualDeep_objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && lodash_es_isBuffer(object)) {
    if (!lodash_es_isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || lodash_es_isTypedArray(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ const _baseIsEqualDeep = (baseIsEqualDeep);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsEqual.js



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!lodash_es_isObjectLike(value) && !lodash_es_isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ const _baseIsEqual = (baseIsEqual);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsMatch.js



/** Used to compose bitmasks for value comparisons. */
var _baseIsMatch_COMPARE_PARTIAL_FLAG = 1,
    _baseIsMatch_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, _baseIsMatch_COMPARE_PARTIAL_FLAG | _baseIsMatch_COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/* harmony default export */ const _baseIsMatch = (baseIsMatch);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isStrictComparable.js


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !lodash_es_isObject(value);
}

/* harmony default export */ const _isStrictComparable = (isStrictComparable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getMatchData.js



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = lodash_es_keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

/* harmony default export */ const _getMatchData = (getMatchData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_matchesStrictComparable.js
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/* harmony default export */ const _matchesStrictComparable = (matchesStrictComparable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMatches.js




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

/* harmony default export */ const _baseMatches = (baseMatches);

;// CONCATENATED MODULE: ./node_modules/lodash-es/get.js


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ const lodash_es_get = (get);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseHasIn.js
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/* harmony default export */ const _baseHasIn = (baseHasIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hasPath.js







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && lodash_es_isLength(length) && _isIndex(key, length) &&
    (lodash_es_isArray(object) || lodash_es_isArguments(object));
}

/* harmony default export */ const _hasPath = (hasPath);

;// CONCATENATED MODULE: ./node_modules/lodash-es/hasIn.js



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

/* harmony default export */ const lodash_es_hasIn = (hasIn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMatchesProperty.js








/** Used to compose bitmasks for value comparisons. */
var _baseMatchesProperty_COMPARE_PARTIAL_FLAG = 1,
    _baseMatchesProperty_COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = lodash_es_get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? lodash_es_hasIn(object, path)
      : _baseIsEqual(srcValue, objValue, _baseMatchesProperty_COMPARE_PARTIAL_FLAG | _baseMatchesProperty_COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ const _baseMatchesProperty = (baseMatchesProperty);

;// CONCATENATED MODULE: ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ const lodash_es_identity = (identity);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseProperty.js
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ const _baseProperty = (baseProperty);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_basePropertyDeep.js


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

/* harmony default export */ const _basePropertyDeep = (basePropertyDeep);

;// CONCATENATED MODULE: ./node_modules/lodash-es/property.js





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

/* harmony default export */ const lodash_es_property = (property);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIteratee.js






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return lodash_es_identity;
  }
  if (typeof value == 'object') {
    return lodash_es_isArray(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return lodash_es_property(value);
}

/* harmony default export */ const _baseIteratee = (baseIteratee);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ const _createBaseFor = (createBaseFor);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

/* harmony default export */ const _baseFor = (baseFor);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseForOwn.js



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, lodash_es_keys);
}

/* harmony default export */ const _baseForOwn = (baseForOwn);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseEach.js


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!lodash_es_isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/* harmony default export */ const _createBaseEach = (createBaseEach);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseEach.js



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

/* harmony default export */ const _baseEach = (baseEach);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMap.js



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = lodash_es_isArrayLike(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ const _baseMap = (baseMap);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSortBy.js
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/* harmony default export */ const _baseSortBy = (baseSortBy);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_compareAscending.js


/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = lodash_es_isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = lodash_es_isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/* harmony default export */ const _compareAscending = (compareAscending);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_compareMultiple.js


/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = _compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/* harmony default export */ const _compareMultiple = (compareMultiple);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseOrderBy.js










/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = _arrayMap(iteratees, function(iteratee) {
      if (lodash_es_isArray(iteratee)) {
        return function(value) {
          return _baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [lodash_es_identity];
  }

  var index = -1;
  iteratees = _arrayMap(iteratees, _baseUnary(_baseIteratee));

  var result = _baseMap(collection, function(value, key, collection) {
    var criteria = _arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return _baseSortBy(result, function(object, other) {
    return _compareMultiple(object, other, orders);
  });
}

/* harmony default export */ const _baseOrderBy = (baseOrderBy);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const _apply = (apply);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ const _overRest = (overRest);

;// CONCATENATED MODULE: ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const lodash_es_constant = (constant);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_defineProperty.js


var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const _defineProperty = (defineProperty);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? lodash_es_identity : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ const _baseSetToString = (baseSetToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const _shortOut = (shortOut);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ const _setToString = (setToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}

/* harmony default export */ const _baseRest = (baseRest);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!lodash_es_isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (lodash_es_isArrayLike(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return (0,eq/* default */.Z)(object[index], value);
  }
  return false;
}

/* harmony default export */ const _isIterateeCall = (isIterateeCall);

;// CONCATENATED MODULE: ./node_modules/lodash-es/sortBy.js





/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = _baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && _isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && _isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return _baseOrderBy(collection, _baseFlatten(iteratees, 1), []);
});

/* harmony default export */ const lodash_es_sortBy = (sortBy);


/***/ }),

/***/ 786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __nccwpck_require__) => {

// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lodash_es_sortedUniq)
});

// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __nccwpck_require__(703);
;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSortedUniq.js


/**
 * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseSortedUniq(array, iteratee) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    if (!index || !(0,eq/* default */.Z)(computed, seen)) {
      var seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

/* harmony default export */ const _baseSortedUniq = (baseSortedUniq);

;// CONCATENATED MODULE: ./node_modules/lodash-es/sortedUniq.js


/**
 * This method is like `_.uniq` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniq([1, 1, 2]);
 * // => [1, 2]
 */
function sortedUniq(array) {
  return (array && array.length)
    ? _baseSortedUniq(array)
    : [];
}

/* harmony default export */ const lodash_es_sortedUniq = (sortedUniq);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(144);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map