export default function HappyBanner({ numGuesses }: { numGuesses: number }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  );
}
