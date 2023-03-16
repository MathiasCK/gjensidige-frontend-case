import React from "react";
import Move from "../Move";
import {Move as IMove} from "../../types";

interface Props {
  moves: IMove[];
}

const Moves: React.FC<Props> = ({moves}) => {
  return (
    <div>
      <h1>Top 3 moves</h1>
      {moves.map((e, i) => {
        // eslint-disable-next-line array-callback-return
        if (i > 2) return;
        return <Move key={e.move.name} move={e.move} />;
      })}
    </div>
  );
};

export default Moves;
