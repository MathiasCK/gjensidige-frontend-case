import React from "react";
import Ability from "../Ability";
import {Ability as IAbility} from "../../types";

interface Props {
  abilities: IAbility[];
}

const Abilities: React.FC<Props> = ({abilities}) => {
  return (
    <div>
      <h1>Abilities</h1>
      {abilities.map(e => (
        <Ability key={e.ability.name} ability={e.ability} />
      ))}
    </div>
  );
};

export default Abilities;
