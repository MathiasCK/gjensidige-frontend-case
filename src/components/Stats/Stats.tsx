import React from "react";
import Stat from "../Stat";
import {Stat as IStat} from "../../types";

interface Props {
  stats: IStat[];
}

const Stats: React.FC<Props> = ({stats}) => {
  return (
    <div>
      <h1>Stats</h1>
      {stats.map(stat => (
        <Stat stat={stat.stat} />
      ))}
    </div>
  );
};

export default Stats;
