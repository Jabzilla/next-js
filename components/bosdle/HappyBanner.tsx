import { Banner } from "./Bosdle.styled";

export default function HappyBanner({ numGuesses }: { numGuesses: number }) {
  return (
    <Banner variant="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}
