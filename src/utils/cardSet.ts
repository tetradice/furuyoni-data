import {
  CardSet,
  StoryCardSet,
} from '../typings/data';

// 指定したカードセットが物語セットであるかどうかを判定
export function isStorySet(cardSet: CardSet): cardSet is StoryCardSet {
  return (
    cardSet === "story-0" ||
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
    isMegamiChallengeSet(cardSet)
  );
}

// 指定したカードセットが「メガミへの挑戦」であるかどうかを判定
export function isMegamiChallengeSet(
  cardSet: CardSet
): cardSet is StoryCardSet {
  return (
    cardSet === "oboro-challenge" ||
    cardSet === "oboro-challenge-heroic" ||
    cardSet === "chikage-challenge" ||
    cardSet === "chikage-challenge-heroic" ||
    cardSet === "raira-challenge" ||
    cardSet === "raira-challenge-heroic" ||
    cardSet === "megumi-challenge" ||
    cardSet === "megumi-challenge-heroic"
  );
}
