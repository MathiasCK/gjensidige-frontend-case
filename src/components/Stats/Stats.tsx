import React from "react";
import Stat from "../Stat";

interface IStat {
  base_stat: 45;
  effort: 0;
  stat: {
    name: string;
    url: string;
  };
}

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
