import React from "react";
import Stat from "../Stat";
import {Stat as IStat} from "../../types";
import "./stats.scss";
import {useSelector} from "react-redux";
import Spinner from "../Spinner";

const Stats: React.FC = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  const stats: IStat[] = pokemon.stats;
  return (
    <article className="info__container">
      <h1>Stats</h1>
      <div className="info__container-children">
        {stats.map(stat => (
          <Stat key={stat.stat.name} stat={stat.stat} level={stat.base_stat} />
        ))}
      </div>
    </article>
  );
};

export default Stats;
