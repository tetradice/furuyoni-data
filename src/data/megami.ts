import { CardSet, MegamiDataItem } from "../typings/data.js";

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
  "yurina-a2": {
    name: "調停者ユリナ",
    nameZh: "调停者摇波",
    nameZhG1: "调停者摇波",
    nameKo: "조정자 유리나",
    nameEn: "Arbitrator Yurina",
    symbol: "心",
    symbolZh: "心",
    symbolZhG1: "心",
    symbolKo: "마음",
    symbolEn: "Heart",
    base: "yurina",
    anotherID: "A2",
    notExistCardSets: [
      "na-s2",
      "na-s3",
      "na-s4",
      "na-s4-pre",
      "na-s5",
      "na-s6",
      "na-s6-2",
      "na-s7",
    ] as CardSet[],
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
    symbolKo: "장도",
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
    notExistCardSets: ["na-s2", "na-s3"] as CardSet[],
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
    symbolKo: "불꽃",
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
    ] as CardSet[],
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
    notExistCardSets: ["na-s2"] as CardSet[],
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
    notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"] as CardSet[],
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
    symbolKo: "서책",
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
    notExistCardSets: ["na-s2", "na-s3"] as CardSet[],
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
    ] as CardSet[],
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
    notExistCardSets: ["na-s2"] as CardSet[],
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
    symbolKo: "자동장치",
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
    notExistCardSets: ["na-s2", "na-s3"] as CardSet[],
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
    ] as CardSet[],
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
    symbolKo: "기승",
    symbolEn: "Mount",
    tarotNo: "11",
  },
  "thallya-a1": {
    name: "帰還サリヤ",
    nameZh: "回返萨莉娅",
    nameZhG1: "归还萨莉娅",
    nameKo: "귀환 탈리야",
    nameEn: "Return Thallya",
    symbol: "新型",
    symbolZh: "新型",
    symbolZhG1: "新型",
    symbolKo: "신형",
    symbolEn: "New Form",
    base: "thallya",
    anotherID: "A1",
    notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"] as CardSet[],
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
    symbolKo: "손톱",
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
    notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"] as CardSet[],
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
    symbolKo: "대낫",
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
    notExistCardSets: ["na-s2"] as CardSet[],
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
    notExistCardSets: ["na-s2"] as CardSet[],
    tarotNo: "14",
  },
  "honoka-a1": {
    name: "桜花拝ホノカ",
    nameZh: "拜樱仄佳",
    nameZhG1: "樱花拜仄佳",
    nameKo: "오우카 호노카",
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
    ] as CardSet[],
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
    symbolKo: "썰매날",
    symbolEn: "Skate blade",
    notExistCardSets: ["na-s2", "na-s3"] as CardSet[],
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
    notExistCardSets: ["na-s2", "na-s3"] as CardSet[],
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
    ] as CardSet[],
    tarotNo: "16",
  },
  "yatsuha-aa1": {
    name: "自我ヤツハ",
    nameZh: "自我八叶",
    nameZhG1: "自我八叶",
    nameKo: "자아 야츠하",
    nameEn: "Yatsuha Realized",
    symbol: "魂",
    symbolZh: "魂",
    symbolZhG1: "魂",
    symbolKo: "혼",
    symbolEn: "Soul",
    base: "yatsuha",
    anotherID: "AA1",
    notExistCardSets: [
      "na-s2",
      "na-s3",
      "na-s4",
      "na-s4-pre",
      "na-s5",
      "na-s6",
      "na-s6-2",
      "na-s7",
    ] as CardSet[],
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
    notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"] as CardSet[],
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
    ] as CardSet[],
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
    notExistCardSets: ["na-s2", "na-s3", "na-s4", "na-s4-pre"] as CardSet[],
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
    ] as CardSet[],
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
    ] as CardSet[],
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
    ] as CardSet[],
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
    ] as CardSet[],
    tarotNo: "22",
  },
  "renri-a1": {
    name: "歴史家レンリ",
    nameZh: "史学家恋离",
    nameZhG1: "",
    nameKo: "역사가 렌리",
    nameEn: "Relic",
    symbol: "遺物",
    symbolZh: "遗物",
    symbolZhG1: "",
    symbolKo: "유물",
    symbolEn: "",
    base: "renri",
    anotherID: "A1",
    notExistCardSets: [
      "na-s2",
      "na-s3",
      "na-s4",
      "na-s4-pre",
      "na-s5",
      "na-s6",
      "na-s6-2",
      "na-s7",
      "na-s7-2",
      "na-s8",
    ] as CardSet[],
    tarotNo: "22",
  },
  akina: {
    name: "アキナ",
    nameZh: "安歧那",
    nameZhG1: "",
    nameKo: "아키나",
    nameEn: "Akina",
    symbol: "算盤",
    symbolZh: "算盘",
    symbolZhG1: "",
    symbolKo: "주판",
    symbolEn: "Abacus",
    notExistCardSets: [
      "na-s2",
      "na-s3",
      "na-s4",
      "na-s4-pre",
      "na-s5",
      "na-s6",
      "na-s6-2",
      "na-s7",
      "na-s7-2",
    ] as CardSet[],
    tarotNo: "23",
  },
  shisui: {
    name: "シスイ",
    nameZh: "志水",
    nameZhG1: "",
    nameKo: "시스이",
    nameEn: "Shisui",
    symbol: "鋸",
    symbolZh: "锯",
    symbolZhG1: "",
    symbolKo: "톱",
    symbolEn: "Saw",
    notExistCardSets: [
      "na-s2",
      "na-s3",
      "na-s4",
      "na-s4-pre",
      "na-s5",
      "na-s6",
      "na-s6-2",
      "na-s7",
      "na-s7-2",
    ] as CardSet[],
    tarotNo: "24",
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
    notExistCardSets: ["na-s2", "na-s3"] as CardSet[],
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
    notExistCardSets: ["na-s2", "na-s3"] as CardSet[],
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
    notExistCardSets: ["na-s2", "na-s3"] as CardSet[],
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
  "shinra-original": {
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
    base: "shinra",
    anotherID: "C5",
    tarotNo: "07",
  },
  "korunu-original": {
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
    anotherID: "C7",
    tarotNo: "15",
  },
  "hagane-original": {
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
    base: "hagane",
    anotherID: "C8",
    tarotNo: "08",
  },
  "yukihi-original": {
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
    base: "yukihi",
    anotherID: "C9",
    tarotNo: "06",
  },
} as const;
export type Megami = keyof typeof MEGAMI_DATA_BASE;
export const MEGAMI_DATA: { [megami in Megami]: MegamiDataItem } =
  MEGAMI_DATA_BASE;
