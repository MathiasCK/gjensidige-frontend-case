import React from "react";

interface Props {
  ability: {
    name: string;
    url: string;
  };
}

const Ability: React.FC<Props> = ({ability}) => {
  return <div>{ability.name}</div>;
};

export default Ability;
