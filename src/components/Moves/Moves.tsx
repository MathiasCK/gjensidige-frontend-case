import React from "react";
import Move from "../Move";
import {Move as IMove} from "../../types";
import styles from "./Moves.module.css";

interface Props {
  moves: IMove[];
}

const Moves: React.FC<Props> = ({moves}) => {
  return (
    <div className={styles.moves}>
      <center>
        <h1>Top 3 moves</h1>
      </center>
      <div className={styles.container}>
        {moves.map((e, i) => {
          // eslint-disable-next-line array-callback-return
          if (i > 2) return;
          return <Move key={e.move.name} move={e.move} />;
        })}
      </div>
    </div>
  );
};

export default Moves;
