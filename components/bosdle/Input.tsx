import { Dispatch, SetStateAction, useState } from "react";
import {
  GuessInputInput,
  GuessInputLabel,
  GuessInputWrapper,
} from "./Bosdle.styled";

export default function Input({
  setGuesses,
}: {
  setGuesses: Dispatch<SetStateAction<Array<String>>>;
}) {
  const [guess, setGuess] = useState("");

  return (
    <GuessInputWrapper
      onSubmit={(e) => {
        e.preventDefault();
        setGuesses((guesses) => [...guesses, guess.toUpperCase()]);
        setGuess("");
      }}
    >
      <GuessInputLabel htmlFor="guess-input">Enter guess:</GuessInputLabel>
      <GuessInputInput
        required
        id="guess-input"
        type="text"
        onChange={(e) => {
          let val = e.target.value;
          if (val) {
            val = val.toUpperCase();
          }
          setGuess(val);
        }}
        value={guess}
        pattern="^.{5}$"
        title="5 Letter Word"
        minLength={5}
        maxLength={5}
      />
    </GuessInputWrapper>
  );
}
