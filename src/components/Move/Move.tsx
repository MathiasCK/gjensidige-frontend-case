import React from "react";

interface Props {
  move: {
    name: string;
    url: string;
  };
}

const Move: React.FC<Props> = ({move}) => {
  return <div>{move.name}</div>;
};

export default Move;
