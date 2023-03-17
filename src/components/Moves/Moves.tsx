import React from "react";
import Move from "../Move";
import {Move as IMove} from "../../types";
import styles from "./Moves.module.css";
import {useSelector} from "react-redux";
import Spinner from "../Spinner";

const Moves: React.FC = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  const moves: IMove[] = pokemon.moves;

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
