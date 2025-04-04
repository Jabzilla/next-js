import { useState } from "react";
import Input from "../components/bosdle/Input";
import { range, sample } from "../utils/bosdle";
import Guess from "../components/bosdle/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../constants/bosdle";
import Header from "../components/bosdle/Header";
import { WORDS } from "../data/bosdle";
import HappyBanner from "../components/bosdle/HappyBanner";
import SadBanner from "../components/bosdle/SadBanner";

import {
  GameWrapper,
  GuessResults,
  Wrapper,
} from "../components/bosdle/Bosdle.styled";

export default function Bosdle() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState<Array<string>>([]);

  const renderGuesses = range(NUM_OF_GUESSES_ALLOWED).map((i) => {
    return <Guess answer={answer} value={guesses[i]} key={`guess-${i}`} />;
  });

  return (
    <Wrapper>
      <Header />
      {guesses.includes(answer) && <HappyBanner numGuesses={guesses.length} />}
      {guesses.length === NUM_OF_GUESSES_ALLOWED &&
        !guesses.includes(answer) && <SadBanner answer={answer} />}
      <GameWrapper>
        <GuessResults>{renderGuesses}</GuessResults>
        <Input setGuesses={setGuesses} />
      </GameWrapper>
    </Wrapper>
  );
}
