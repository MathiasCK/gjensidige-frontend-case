import React from "react";
import {Pokemon} from "../../types";
import styles from "./Card.module.css";
import Header from "../Header";
import Abilities from "../Abilities";
import Moves from "../Moves";
import Stats from "../Stats";

interface Props {
  pokemon?: Pokemon;
}

const Card: React.FunctionComponent<Props> = ({pokemon}) => {
  if (!pokemon) {
    return <div>"Loading..."</div>;
  }
  console.log(pokemon);
  return (
    <div className={styles.container}>
      <Header
        name={pokemon.name}
        experience={pokemon.base_experience}
        src={pokemon.sprites.other.dream_world.front_default}
        type={pokemon.types[0].type.name}
      />

      {/* <Abilities abilities={pokemon.abilities} /> */}
      <Moves moves={pokemon.moves} />
      <Stats stats={pokemon.stats} />
    </div>
  );
};
export default Card;
