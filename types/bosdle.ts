export type LetterStatus = "correct" | "incorrect" | "misplaced";

export type BannerVariant = "happy" | "sad";

export interface LetterResult {
  letter: string;
  status: LetterStatus;
}
