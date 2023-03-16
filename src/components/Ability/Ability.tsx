import React from "react";
import {NameUrlPair} from "../../types";

interface Props {
  ability: NameUrlPair;
}

const Ability: React.FC<Props> = ({ability}) => {
  return <div>{ability.name}</div>;
};

export default Ability;
