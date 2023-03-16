import React from "react";
import {NameUrlPair} from "../../types";

interface Props {
  stat: NameUrlPair;
}

const Stat: React.FC<Props> = ({stat}) => {
  return <div>{stat.name}</div>;
};

export default Stat;
