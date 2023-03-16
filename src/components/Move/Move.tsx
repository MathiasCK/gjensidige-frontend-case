import React from "react";
import {NameUrlPair} from "../../types";

interface Props {
  move: NameUrlPair;
}

const Move: React.FC<Props> = ({move}) => {
  return <div>{move.name}</div>;
};

export default Move;
