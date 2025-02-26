import React from "react";
import {Move, Spinner} from "@Components";
import {Move as IMove} from "@Utils/types";
import "./moves.scss";
import {useSelector} from "react-redux";

const Moves: React.FC = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  const moves: IMove[] = pokemon.moves;

  return (
    <article className="info__container">
      <h1 className={`${pokemon.types[0].type.name}`}>Top 3 moves</h1>
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
