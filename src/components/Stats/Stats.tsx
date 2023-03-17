import React from "react";
import Stat from "../Stat";
import {Stat as IStat} from "../../types";
import styles from "./Stats.module.css";

interface Props {
  stats: IStat[];
}

const Stats: React.FC<Props> = ({stats}) => {
  return (
    <div className={styles.stats}>
      <center>
        <h1>Stats</h1>
      </center>
      <div className={styles.container}>
        {stats.map(stat => (
          <Stat key={stat.stat.name} stat={stat.stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
