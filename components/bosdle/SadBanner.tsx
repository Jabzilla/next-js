import { Banner } from "./Bosdle.styled";

export default function SadBanner({ answer }: { answer: string }) {
  return (
    <Banner variant="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}
