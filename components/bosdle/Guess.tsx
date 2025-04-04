import { checkGuess, range } from "../../utils/bosdle";
import bosdleStyles from "../../styles/Bosdle.module.css";
import { Cell, GuessWrapper } from "./Bosdle.styled";

export default function Guess({
  answer,
  value,
}: {
  answer: string;
  value?: string;
}) {
  const renderCells = range(5).map((i) => {
    let cellStatus, val;
    if (value) {
      val = value[i];
      cellStatus = checkGuess(value, answer)[i].status;
    }
    return <Cell status={cellStatus}>{val}</Cell>;
  });

  return <GuessWrapper>{renderCells}</GuessWrapper>;
}
