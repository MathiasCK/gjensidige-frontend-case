import React from "react";
import Move from "../Move";
import {Move as IMove} from "../../types";
import "./moves.scss";
import {useSelector} from "react-redux";
import Spinner from "../Spinner";

const Moves: React.FC = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  const moves: IMove[] = pokemon.moves;

  return (
    <article className="info__container">
      <h1>Top 3 moves</h1>
      <div className="info__container-children">
        {moves.map((e, i) => {
          // eslint-disable-next-line array-callback-return
          if (i > 2) return;
          return <Move key={e.move.name} move={e.move} />;
        })}
      </div>
    </article>
  );
};

export default Moves;
