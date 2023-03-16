import React from "react";
import {Pokemon} from "../../types";
import styles from "./Card.module.css";

interface Props {
  pokemon?: Pokemon;
}

const Card: React.FunctionComponent<Props> = ({pokemon}) => {
  if (!pokemon) {
    return <div>"Loading..."</div>;
  }
  debugger;
  return (
    <div className={styles.infoContainer}>
      <h1>Name: {pokemon.name}</h1>
      <h1>Height: {pokemon.height}</h1>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={`${pokemon.name} illustration`}
      />
    </div>
  );
};
export default Card;
