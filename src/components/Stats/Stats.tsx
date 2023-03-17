import React from "react";
import Stat from "../Stat";
import {Stat as IStat} from "../../types";
import styles from "./Stats.module.css";
import {useSelector} from "react-redux";

const Stats: React.FC = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <div>Loading...</div>;
  }

  const stats: IStat[] = pokemon.stats;
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
