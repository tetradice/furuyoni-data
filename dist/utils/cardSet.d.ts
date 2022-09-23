import { Language } from "../typings/index.js";
import { CardSet, StoryCardSet } from "../typings/data.js";
/** 言語に応じたカードセット名を取得 */
export declare function getCardSetName(cardSet: CardSet, lang: Language): string;
/** 言語に応じたカードセットの一覧表示名を取得 */
export declare function getCardSetListName(cardSet: CardSet, lang: Language): string;
/** 指定したカードセットが物語セットであるかどうかを判定 */
export declare function isStorySet(cardSet: CardSet): cardSet is StoryCardSet;
/** 指定したカードセットが「メガミへの挑戦」であるかどうかを判定 */
export declare function isMegamiChallengeSet(cardSet: CardSet): cardSet is StoryCardSet;
//# sourceMappingURL=cardSet.d.ts.map