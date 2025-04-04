import { checkGuess, range } from "../../utils/bosdle";
import bosdleStyles from "../../styles/Bosdle.module.css";

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
    return <span className={bosdleStyles[`cell ${cellStatus}`]}>{val}</span>;
  });

  return <p className={bosdleStyles.guess}>{renderCells}</p>;
}
