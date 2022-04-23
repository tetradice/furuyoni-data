import { CardSet, MegamiDataItem } from "../typings/data";
declare const MEGAMI_DATA_BASE: {
    readonly yurina: {
        readonly name: "ユリナ";
        readonly nameZh: "摇波";
        readonly nameZhG1: "摇波";
        readonly nameKo: "유리나";
        readonly nameEn: "Yurina";
        readonly symbol: "刀";
        readonly symbolZh: "刀";
        readonly symbolZhG1: "刀";
        readonly symbolKo: "도";
        readonly symbolEn: "Katana";
        readonly tarotNo: "01";
    };
    readonly "yurina-a1": {
        readonly name: "第一章ユリナ";
        readonly nameZh: "第一章摇波";
        readonly nameZhG1: "第一章摇波";
        readonly nameKo: "제1장 유리나";
        readonly nameEn: "First Chapter Yurina";
        readonly symbol: "古刀";
        readonly symbolZh: "古刀";
        readonly symbolZhG1: "古刀";
        readonly symbolKo: "고도";
        readonly symbolEn: "Kotō";
        readonly base: "yurina";
        readonly anotherID: "A1";
        readonly tarotNo: "01";
    };
    readonly saine: {
        readonly name: "サイネ";
        readonly nameZh: "细音";
        readonly nameZhG1: "细音";
        readonly nameKo: "사이네";
        readonly nameEn: "Saine";
        readonly symbol: "薙刀";
        readonly symbolZh: "薙刀";
        readonly symbolZhG1: "薙刀";
        readonly symbolKo: "나기나타";
        readonly symbolEn: "Naginata";
        readonly tarotNo: "02";
    };
    readonly "saine-a1": {
        readonly name: "第二章サイネ";
        readonly nameZh: "第二章细音";
        readonly nameZhG1: "第二章细音";
        readonly nameKo: "제2장 사이네";
        readonly nameEn: "Second Chapter Saine";
        readonly symbol: "琵琶";
        readonly symbolZh: "琵琶";
        readonly symbolZhG1: "琵琶";
        readonly symbolKo: "비파";
        readonly symbolEn: "Biwa";
        readonly base: "saine";
        readonly anotherID: "A1";
        readonly tarotNo: "02";
    };
    readonly "saine-a2": {
        readonly name: "徒神サイネ";
        readonly nameZh: "徒神细音";
        readonly nameZhG1: "徒神细音";
        readonly nameKo: "허무신 사이네";
        readonly nameEn: "Adagami Saine";
        readonly symbol: "拒絶";
        readonly symbolZh: "拒绝";
        readonly symbolZhG1: "拒绝";
        readonly symbolKo: "거절";
        readonly symbolEn: "Refuse";
        readonly base: "saine";
        readonly anotherID: "A2";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "02";
    };
    readonly himika: {
        readonly name: "ヒミカ";
        readonly nameZh: "绯弥香";
        readonly nameZhG1: "绯弥香";
        readonly nameKo: "히미카";
        readonly nameEn: "Himika";
        readonly symbol: "銃";
        readonly symbolZh: "铳";
        readonly symbolZhG1: "火枪";
        readonly symbolKo: "총";
        readonly symbolEn: "Arquebus";
        readonly tarotNo: "03";
    };
    readonly "himika-a1": {
        readonly name: "原初ヒミカ";
        readonly nameZh: "原初绯弥香";
        readonly nameZhG1: "原初绯弥香";
        readonly nameKo: "원초 히미카";
        readonly nameEn: "Originally Himika";
        readonly symbol: "炎";
        readonly symbolZh: "炎";
        readonly symbolZhG1: "炎";
        readonly symbolKo: "화염";
        readonly symbolEn: "Flame";
        readonly base: "himika";
        readonly anotherID: "A1";
        readonly tarotNo: "03";
    };
    readonly tokoyo: {
        readonly name: "トコヨ";
        readonly nameZh: "常世";
        readonly nameZhG1: "常世";
        readonly nameKo: "토코요";
        readonly nameEn: "Tokoyo";
        readonly symbol: "扇";
        readonly symbolZh: "扇";
        readonly symbolZhG1: "扇";
        readonly symbolKo: "부채";
        readonly symbolEn: "Fan";
        readonly tarotNo: "04";
    };
    readonly "tokoyo-a1": {
        readonly name: "旅芸人トコヨ";
        readonly nameZh: "旅艺人常世";
        readonly nameZhG1: "旅艺人常世";
        readonly nameKo: "음유시인 토코요";
        readonly nameEn: "Bard Tokoyo";
        readonly symbol: "笛";
        readonly symbolZh: "笛";
        readonly symbolZhG1: "笛";
        readonly symbolKo: "피리";
        readonly symbolEn: "Flute";
        readonly base: "tokoyo";
        readonly anotherID: "A1";
        readonly tarotNo: "04";
    };
    readonly "tokoyo-a2": {
        readonly name: "徒神トコヨ";
        readonly nameZh: "徒神常世";
        readonly nameZhG1: "徒神常世";
        readonly nameKo: "허무신 토코요";
        readonly nameEn: "Adagami Tokoyo";
        readonly symbol: "恐怖";
        readonly symbolZh: "恐惧";
        readonly symbolZhG1: "恐怖";
        readonly symbolKo: "공포";
        readonly symbolEn: "Fear";
        readonly base: "tokoyo";
        readonly anotherID: "A2";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "04";
    };
    readonly oboro: {
        readonly name: "オボロ";
        readonly nameZh: "胧";
        readonly nameZhG1: "胧";
        readonly nameKo: "오보로";
        readonly nameEn: "Oboro";
        readonly symbol: "忍";
        readonly symbolZh: "忍";
        readonly symbolZhG1: "忍";
        readonly symbolKo: "인술";
        readonly symbolEn: "Ninjutsu";
        readonly tarotNo: "05";
    };
    readonly "oboro-a1": {
        readonly name: "第三章オボロ";
        readonly nameZh: "第三章胧";
        readonly nameZhG1: "第三章胧";
        readonly nameKo: "제3장 오보로";
        readonly nameEn: "Third Chapter Oboro";
        readonly symbol: "戦略";
        readonly symbolZh: "战略";
        readonly symbolZhG1: "战略";
        readonly symbolKo: "전략";
        readonly symbolEn: "Strategy";
        readonly base: "oboro";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "05";
    };
    readonly yukihi: {
        readonly name: "ユキヒ";
        readonly nameZh: "雪灯";
        readonly nameZhG1: "雪灯";
        readonly nameKo: "유키히";
        readonly nameEn: "Yukihi";
        readonly symbol: "傘/簪";
        readonly symbolZh: "伞/簪";
        readonly symbolZhG1: "伞/簪";
        readonly symbolKo: "우산/비녀";
        readonly symbolEn: "Umbrella/Hairpin";
        readonly tarotNo: "06";
    };
    readonly "yukihi-a1": {
        readonly name: "社交界ユキヒ";
        readonly nameZh: "社交界雪灯";
        readonly nameZhG1: "社交界雪灯";
        readonly nameKo: "사교계 유키히";
        readonly nameEn: "Society Yukihi";
        readonly symbol: "社交";
        readonly symbolZh: "社交";
        readonly symbolZhG1: "社交";
        readonly symbolKo: "사교";
        readonly symbolEn: "Society";
        readonly base: "yukihi";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "06";
    };
    readonly shinra: {
        readonly name: "シンラ";
        readonly nameZh: "森罗";
        readonly nameZhG1: "森罗";
        readonly nameKo: "신라";
        readonly nameEn: "Shinra";
        readonly symbol: "書";
        readonly symbolZh: "书";
        readonly symbolZhG1: "书";
        readonly symbolKo: "책";
        readonly symbolEn: "Scroll";
        readonly tarotNo: "07";
    };
    readonly "shinra-a1": {
        readonly name: "教主シンラ";
        readonly nameZh: "教主森罗";
        readonly nameZhG1: "教主森罗";
        readonly nameKo: "교주 신라";
        readonly nameEn: "Hierarch Shinra";
        readonly symbol: "経典";
        readonly symbolZh: "经卷";
        readonly symbolZhG1: "经典";
        readonly symbolKo: "경전";
        readonly symbolEn: "Classics";
        readonly base: "shinra";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "08";
    };
    readonly hagane: {
        readonly name: "ハガネ";
        readonly nameZh: "破钟";
        readonly nameZhG1: "破钟";
        readonly nameKo: "하가네";
        readonly nameEn: "Hagane";
        readonly symbol: "鎚";
        readonly symbolZh: "锤";
        readonly symbolZhG1: "锤";
        readonly symbolKo: "망치";
        readonly symbolEn: "Hammer";
        readonly tarotNo: "08";
    };
    readonly "hagane-a1": {
        readonly name: "鍛治師ハガネ";
        readonly nameZh: "锻造师破钟";
        readonly nameZhG1: "锻造师破钟";
        readonly nameKo: "대장장이 하가네";
        readonly nameEn: "Blacksmith Hagane";
        readonly symbol: "金床";
        readonly symbolZh: "铁砧";
        readonly symbolZhG1: "铁砧";
        readonly symbolKo: "모루";
        readonly symbolEn: "Anvil";
        readonly base: "hagane";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "08";
    };
    readonly chikage: {
        readonly name: "チカゲ";
        readonly nameZh: "千影";
        readonly nameZhG1: "千影";
        readonly nameKo: "치카게";
        readonly nameEn: "Chikage";
        readonly symbol: "毒";
        readonly symbolZh: "毒";
        readonly symbolZhG1: "毒";
        readonly symbolKo: "독";
        readonly symbolEn: "Poison";
        readonly tarotNo: "09";
    };
    readonly "chikage-a1": {
        readonly name: "第四章チカゲ";
        readonly nameZh: "第四章千影";
        readonly nameZhG1: "第四章千影";
        readonly nameKo: "제4장 치카게";
        readonly nameEn: "Fourth Chapter Chikage";
        readonly symbol: "絆";
        readonly symbolZh: "绊";
        readonly symbolZhG1: "绊";
        readonly symbolKo: "인연";
        readonly symbolEn: "Kizuna";
        readonly base: "chikage";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "09";
    };
    readonly kururu: {
        readonly name: "クルル";
        readonly nameZh: "枢";
        readonly nameZhG1: "枢";
        readonly nameKo: "쿠루루";
        readonly nameEn: "Kururu";
        readonly symbol: "絡繰";
        readonly symbolZh: "机关";
        readonly symbolZhG1: "机巧";
        readonly symbolKo: "꼭두각시";
        readonly symbolEn: "Karakuri";
        readonly tarotNo: "10";
    };
    readonly "kururu-a1": {
        readonly name: "探索者クルル";
        readonly nameZh: "探索者枢";
        readonly nameZhG1: "探索者枢";
        readonly nameKo: "탐색자 쿠루루";
        readonly nameEn: "Explorer Kururu";
        readonly symbol: "機器";
        readonly symbolZh: "机器";
        readonly symbolZhG1: "机器";
        readonly symbolKo: "기계";
        readonly symbolEn: "Machanism";
        readonly base: "kururu";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "10";
    };
    readonly "kururu-a2": {
        readonly name: "徒神クルル";
        readonly nameZh: "徒神枢";
        readonly nameZhG1: "徒神枢";
        readonly nameKo: "허무신 쿠루루";
        readonly nameEn: "Adagami Kururu";
        readonly symbol: "友情";
        readonly symbolZh: "友情";
        readonly symbolZhG1: "友情";
        readonly symbolKo: "우정";
        readonly symbolEn: "Friendship";
        readonly base: "kururu";
        readonly anotherID: "A2";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "10";
    };
    readonly thallya: {
        readonly name: "サリヤ";
        readonly nameZh: "萨莉娅";
        readonly nameZhG1: "萨莉娅";
        readonly nameKo: "탈리야";
        readonly nameEn: "Thallya";
        readonly symbol: "乗騎";
        readonly symbolZh: "骑";
        readonly symbolZhG1: "车";
        readonly symbolKo: "탈것";
        readonly symbolEn: "Mount";
        readonly tarotNo: "11";
    };
    readonly "thallya-a1": {
        readonly name: "帰還サリヤ";
        readonly nameZh: "回返萨莉娅";
        readonly nameZhG1: "归还萨莉娅";
        readonly nameKo: "귀향 탈리야";
        readonly nameEn: "Return Thallya";
        readonly symbol: "新型";
        readonly symbolZh: "新型";
        readonly symbolZhG1: "新型";
        readonly symbolKo: "신형";
        readonly symbolEn: "New Form";
        readonly base: "thallya";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "11";
    };
    readonly raira: {
        readonly name: "ライラ";
        readonly nameZh: "雷螺";
        readonly nameZhG1: "雷螺";
        readonly nameKo: "라이라";
        readonly nameEn: "Raira";
        readonly symbol: "爪";
        readonly symbolZh: "爪";
        readonly symbolZhG1: "爪";
        readonly symbolKo: "발톱";
        readonly symbolEn: "Claw";
        readonly tarotNo: "12";
    };
    readonly "raira-a1": {
        readonly name: "祈祷師ライラ";
        readonly nameZh: "祈祷师雷螺";
        readonly nameZhG1: "祈祷师雷螺";
        readonly nameKo: "기도사 라이라";
        readonly nameEn: "Prayer Raira";
        readonly symbol: "嵐";
        readonly symbolZh: "飓";
        readonly symbolZhG1: "岚";
        readonly symbolKo: "폭풍";
        readonly symbolEn: "Storm";
        readonly base: "raira";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "12";
    };
    readonly utsuro: {
        readonly name: "ウツロ";
        readonly nameZh: "虚路";
        readonly nameZhG1: "虚路";
        readonly nameKo: "우츠로";
        readonly nameEn: "Utsuro";
        readonly symbol: "鎌";
        readonly symbolZh: "镰";
        readonly symbolZhG1: "镰";
        readonly symbolKo: "낫";
        readonly symbolEn: "Scythe";
        readonly tarotNo: "13";
    };
    readonly "utsuro-a1": {
        readonly name: "終章ウツロ";
        readonly nameZh: "终章虚路";
        readonly nameZhG1: "终章虚路";
        readonly nameKo: "종장 우츠로";
        readonly nameEn: "Final Chapter Utsuro";
        readonly symbol: "塵";
        readonly symbolZh: "尘";
        readonly symbolZhG1: "尘";
        readonly symbolKo: "먼지";
        readonly symbolEn: "Dust";
        readonly base: "utsuro";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "13";
    };
    readonly honoka: {
        readonly name: "ホノカ";
        readonly nameZh: "仄佳";
        readonly nameZhG1: "仄佳";
        readonly nameKo: "호노카";
        readonly nameEn: "Honoka";
        readonly symbol: "旗";
        readonly symbolZh: "旗";
        readonly symbolZhG1: "旗";
        readonly symbolKo: "깃발";
        readonly symbolEn: "Flag";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "14";
    };
    readonly "honoka-a1": {
        readonly name: "桜花拝ホノカ";
        readonly nameZh: "拜樱仄佳";
        readonly nameZhG1: "樱花拜仄佳";
        readonly nameKo: "앵화배 호노카";
        readonly nameEn: "Sakuraist Honoka";
        readonly symbol: "勾玉";
        readonly symbolZh: "勾玉";
        readonly symbolZhG1: "勾玉";
        readonly symbolKo: "곡옥";
        readonly symbolEn: "Magatama";
        readonly base: "honoka";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "14";
    };
    readonly korunu: {
        readonly name: "コルヌ";
        readonly nameZh: "凝努";
        readonly nameZhG1: "凝努";
        readonly nameKo: "코르누";
        readonly nameEn: "Korunu";
        readonly symbol: "橇";
        readonly symbolZh: "橇";
        readonly symbolZhG1: "橇";
        readonly symbolKo: "썰매";
        readonly symbolEn: "Skate blade";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "15";
    };
    readonly yatsuha: {
        readonly name: "ヤツハ";
        readonly nameZh: "八叶";
        readonly nameZhG1: "八叶";
        readonly nameKo: "야츠하";
        readonly nameEn: "Yatsuha";
        readonly symbol: "鏡";
        readonly symbolZh: "镜";
        readonly symbolZhG1: "镜";
        readonly symbolKo: "거울";
        readonly symbolEn: "Mirror";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "16";
    };
    readonly "yatsuha-a1": {
        readonly name: "完全態ヤツハ";
        readonly nameZh: "完全态八叶";
        readonly nameZhG1: "完全态八叶";
        readonly nameKo: "완전태 야츠하";
        readonly nameEn: "Perfect Yatsuha";
        readonly symbol: "花";
        readonly symbolZh: "花";
        readonly symbolZhG1: "花";
        readonly symbolKo: "꽃";
        readonly symbolEn: "Flowers";
        readonly base: "yatsuha";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "16";
    };
    readonly hatsumi: {
        readonly name: "ハツミ";
        readonly nameZh: "初海";
        readonly nameZhG1: "初海";
        readonly nameKo: "하츠미";
        readonly nameEn: "Hatsumi";
        readonly symbol: "櫂";
        readonly symbolZh: "桨";
        readonly symbolZhG1: "棹";
        readonly symbolKo: "노";
        readonly symbolEn: "Quant";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "17";
    };
    readonly "hatsumi-a1": {
        readonly name: "徒神ハツミ";
        readonly nameZh: "徒神初海";
        readonly nameZhG1: "徒神初海";
        readonly nameKo: "허무신 하츠미";
        readonly nameEn: "Adagami Hatsumi";
        readonly symbol: "信頼";
        readonly symbolZh: "信赖";
        readonly symbolZhG1: "信赖";
        readonly symbolKo: "신뢰";
        readonly symbolEn: "Trust";
        readonly base: "hatsumi";
        readonly anotherID: "A1";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "17";
    };
    readonly mizuki: {
        readonly name: "ミズキ";
        readonly nameZh: "水津城";
        readonly nameZhG1: "水津城";
        readonly nameKo: "미즈키";
        readonly nameEn: "Mizuki";
        readonly symbol: "兜";
        readonly symbolZh: "盔";
        readonly symbolZhG1: "兜";
        readonly symbolKo: "투구";
        readonly symbolEn: "Armet";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "18";
    };
    readonly megumi: {
        readonly name: "メグミ";
        readonly nameZh: "希";
        readonly nameZhG1: "希";
        readonly nameKo: "메구미";
        readonly nameEn: "Megumi";
        readonly symbol: "唐棹";
        readonly symbolZh: "连枷";
        readonly symbolZhG1: "梿枷";
        readonly symbolKo: "도리깨";
        readonly symbolEn: "Flail";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "19";
    };
    readonly kanawe: {
        readonly name: "カナヱ";
        readonly nameZh: "叶慧";
        readonly nameZhG1: "叶慧";
        readonly nameKo: "카나에";
        readonly nameEn: "Kanawe";
        readonly symbol: "仮面";
        readonly symbolZh: "假面";
        readonly symbolZhG1: "面具";
        readonly symbolKo: "가면";
        readonly symbolEn: "Masks";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "20";
    };
    readonly kamuwi: {
        readonly name: "カムヰ";
        readonly nameZh: "神威";
        readonly nameZhG1: "神居";
        readonly nameKo: "카무이";
        readonly nameEn: "Kamuwi";
        readonly symbol: "剣";
        readonly symbolZh: "剑";
        readonly symbolZhG1: "剑";
        readonly symbolKo: "검";
        readonly symbolEn: "Sword";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "21";
    };
    readonly renri: {
        readonly name: "レンリ";
        readonly nameZh: "恋离";
        readonly nameZhG1: "恋离";
        readonly nameKo: "렌리";
        readonly nameEn: "Renri";
        readonly symbol: "衣";
        readonly symbolZh: "衣";
        readonly symbolZhG1: "衣";
        readonly symbolKo: "옷";
        readonly symbolEn: "Robe";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "22";
    };
    readonly "yurina-story-0": {
        readonly name: "天音揺波";
        readonly nameZh: "天音摇波";
        readonly nameZhG1: "天音摇波";
        readonly nameKo: "아마네 유리나";
        readonly nameEn: "Yurina Amane";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly base: "yurina";
        readonly anotherID: "S0";
        readonly tarotNo: "01";
    };
    readonly "saine-story-0": {
        readonly name: "氷雨細音";
        readonly nameZh: "冰雨细音";
        readonly nameZhG1: "冰雨细音";
        readonly nameKo: "히사메 사이네";
        readonly nameEn: "Saine Hisame";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly base: "saine";
        readonly anotherID: "S0";
        readonly tarotNo: "02";
    };
    readonly "yurina-story-1": {
        readonly name: "天音揺波";
        readonly nameZh: "天音摇波";
        readonly nameZhG1: "天音摇波";
        readonly nameKo: "아마네 유리나";
        readonly nameEn: "Yurina Amane";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly base: "yurina";
        readonly anotherID: "S1";
        readonly tarotNo: "01";
    };
    readonly "saine-story-1": {
        readonly name: "氷雨細音";
        readonly nameZh: "冰雨细音";
        readonly nameZhG1: "冰雨细音";
        readonly nameKo: "히사메 사이네";
        readonly nameEn: "Saine Hisame";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly base: "saine";
        readonly anotherID: "S1";
        readonly tarotNo: "02";
    };
    readonly "chikage-story-2": {
        readonly name: "闇昏千影";
        readonly nameZh: "暗昏千影";
        readonly nameZhG1: "暗昏千影";
        readonly nameKo: "야미쿠라 치카게";
        readonly nameEn: "Chikage Yamikura";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly base: "yurina";
        readonly anotherID: "S2";
        readonly tarotNo: "09";
    };
    readonly "tatsu-story-2": {
        readonly name: "龍ノ宮一志";
        readonly nameZh: "龙之宫一志";
        readonly nameZhG1: "龙之宫一志";
        readonly nameKo: "타츠노미야 잇시";
        readonly nameEn: "Isshi Tatsunomiya";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly anotherID: "S2";
        readonly tarotNo: "91";
    };
    readonly "yatsuha-story-9": {
        readonly name: "ヤツハ";
        readonly nameZh: "八叶";
        readonly nameZhG1: "八叶";
        readonly nameKo: "야츠하";
        readonly nameEn: "Yatsuha";
        readonly symbol: "鏡";
        readonly symbolZh: "镜";
        readonly symbolZhG1: "镜";
        readonly symbolKo: "부채";
        readonly symbolEn: "Mirror";
        readonly base: "yatsuha";
        readonly anotherID: "S9";
        readonly tarotNo: "16";
    };
    readonly "yura-story-9": {
        readonly name: "遥原夕羅";
        readonly nameZh: "遥原夕罗";
        readonly nameZhG1: "遥原夕罗";
        readonly nameKo: "하루하라 유라";
        readonly nameEn: "Yura Harubara";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly anotherID: "S9";
        readonly tarotNo: "92";
    };
    readonly "korunu-story-10": {
        readonly name: "コルヌ";
        readonly nameZh: "凝努";
        readonly nameZhG1: "凝努";
        readonly nameKo: "코르누";
        readonly nameEn: "Korunu";
        readonly symbol: "橇";
        readonly symbolZh: "橇";
        readonly symbolZhG1: "橇";
        readonly symbolKo: "썰매";
        readonly symbolEn: "Skate blade";
        readonly base: "korunu";
        readonly anotherID: "S10";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "15";
    };
    readonly "saine-story-12": {
        readonly name: "徒神サイネ";
        readonly nameZh: "徒神细音";
        readonly nameZhG1: "徒神细音";
        readonly nameKo: "도신 사이네";
        readonly nameEn: "Adagami Saine";
        readonly symbol: "拒絶";
        readonly symbolZh: "拒绝";
        readonly symbolZhG1: "拒绝";
        readonly symbolKo: "거절";
        readonly symbolEn: "Refuse";
        readonly base: "saine";
        readonly anotherID: "S12";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "02";
    };
    readonly "tokoyo-story-13": {
        readonly name: "トコヨ";
        readonly nameZh: "常世";
        readonly nameZhG1: "常世";
        readonly nameKo: "토코요";
        readonly nameEn: "Tokoyo";
        readonly symbol: "扇";
        readonly symbolZh: "扇";
        readonly symbolZhG1: "扇";
        readonly symbolKo: "부채";
        readonly symbolEn: "Fan";
        readonly base: "tokoyo";
        readonly anotherID: "S13";
        readonly tarotNo: "04";
    };
    readonly "yatsuha-story-15": {
        readonly name: "ヤツハ";
        readonly nameZh: "八叶";
        readonly nameZhG1: "八叶";
        readonly nameKo: "야츠하";
        readonly nameEn: "Yatsuha";
        readonly symbol: "鏡";
        readonly symbolZh: "镜";
        readonly symbolZhG1: "镜";
        readonly symbolKo: "부채";
        readonly symbolEn: "Mirror";
        readonly base: "yatsuha";
        readonly anotherID: "S15";
        readonly notExistCardSets: CardSet[];
        readonly tarotNo: "16";
    };
    readonly "utsuro-hajimari": {
        readonly name: "ウツロの欠片";
        readonly nameZh: "";
        readonly nameZhG1: "";
        readonly nameKo: "";
        readonly nameEn: "";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly tarotNo: "93";
    };
    readonly "honoka-hajimari": {
        readonly name: "ホノカの欠片";
        readonly nameZh: "";
        readonly nameZhG1: "";
        readonly nameKo: "";
        readonly nameEn: "";
        readonly symbol: "";
        readonly symbolZh: "";
        readonly symbolZhG1: "";
        readonly symbolKo: "";
        readonly symbolEn: "";
        readonly tarotNo: "94";
    };
    readonly "oboro-original": {
        readonly name: "オボロ";
        readonly nameZh: "胧";
        readonly nameZhG1: "胧";
        readonly nameKo: "오보로";
        readonly nameEn: "Oboro";
        readonly symbol: "忍";
        readonly symbolZh: "忍";
        readonly symbolZhG1: "忍";
        readonly symbolKo: "인술";
        readonly symbolEn: "Ninjutsu";
        readonly base: "oboro";
        readonly anotherID: "C1";
        readonly tarotNo: "05";
    };
    readonly "chikage-original": {
        readonly name: "チカゲ";
        readonly nameZh: "千影";
        readonly nameZhG1: "千影";
        readonly nameKo: "치카게";
        readonly nameEn: "Chikage";
        readonly symbol: "毒";
        readonly symbolZh: "毒";
        readonly symbolZhG1: "毒";
        readonly symbolKo: "독";
        readonly symbolEn: "Poison";
        readonly base: "chikage";
        readonly anotherID: "C2";
        readonly tarotNo: "09";
    };
    readonly "raira-original": {
        readonly name: "ライラ";
        readonly nameZh: "雷螺";
        readonly nameZhG1: "雷螺";
        readonly nameKo: "라이라";
        readonly nameEn: "Raira";
        readonly symbol: "爪";
        readonly symbolZh: "爪";
        readonly symbolZhG1: "爪";
        readonly symbolKo: "발톱";
        readonly symbolEn: "Claw";
        readonly base: "raira";
        readonly anotherID: "C3";
        readonly tarotNo: "12";
    };
    readonly "megumi-original": {
        readonly name: "メグミ";
        readonly nameZh: "希";
        readonly nameZhG1: "希";
        readonly nameKo: "메구미";
        readonly nameEn: "Megumi";
        readonly symbol: "唐棹";
        readonly symbolZh: "连枷";
        readonly symbolZhG1: "梿枷";
        readonly symbolKo: "도리깨";
        readonly symbolEn: "Flail";
        readonly base: "megumi";
        readonly anotherID: "C4";
        readonly tarotNo: "19";
    };
    readonly "shinra-original": {
        readonly name: "シンラ";
        readonly nameZh: "森罗";
        readonly nameZhG1: "森罗";
        readonly nameKo: "신라";
        readonly nameEn: "Shinra";
        readonly symbol: "書";
        readonly symbolZh: "书";
        readonly symbolZhG1: "书";
        readonly symbolKo: "책";
        readonly symbolEn: "Scroll";
        readonly base: "shinra";
        readonly anotherID: "C5";
        readonly tarotNo: "07";
    };
};
export declare type Megami = keyof typeof MEGAMI_DATA_BASE;
export declare const MEGAMI_DATA: {
    [megami in Megami]: MegamiDataItem;
};
export {};
//# sourceMappingURL=megami.d.ts.map