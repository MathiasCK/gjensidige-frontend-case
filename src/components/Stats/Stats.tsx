import React from "react";
import {Stat, Spinner} from "@Components";
import {Stat as IStat} from "../../types";
import "./stats.scss";
import {useSelector} from "react-redux";

const Stats: React.FC = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  const stats: IStat[] = pokemon.stats;
  return (
    <article className="info__container">
      <h1 className={`${pokemon.types[0].type.name}`}>Stats</h1>
      <div className="info__container-children">
        {stats.map(stat => (
          <Stat key={stat.stat.name} stat={stat.stat} level={stat.base_stat} />
        ))}
      </div>
    </article>
  );
};

export default Stats;
