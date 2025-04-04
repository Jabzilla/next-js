import { Dispatch, SetStateAction, useState } from "react";

export default function Input({
  setGuesses,
}: {
  setGuesses: Dispatch<SetStateAction<Array<String>>>;
}) {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setGuesses((guesses) => [...guesses, guess.toUpperCase()]);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
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
    </form>
  );
}
