import React from "react";
import Ability from "../Ability";

interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Props {
  abilities: IAbility[];
}

const Abilities: React.FC<Props> = ({abilities}) => {
  return (
    <div>
      <h1>Abilities</h1>
      {abilities.map(e => (
        <Ability ability={e.ability} />
      ))}
    </div>
  );
};

export default Abilities;
