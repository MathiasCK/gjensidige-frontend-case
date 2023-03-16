import React from "react";
import {Pokemon} from "../../types";
import styles from "./Card.module.css";
import Header from "../Header";

interface Props {
  pokemon?: Pokemon;
}

const Card: React.FunctionComponent<Props> = ({pokemon}) => {
  if (!pokemon) {
    return <div>"Loading..."</div>;
  }
  console.log(pokemon);
  return (
    <div className={styles.infoContainer}>
      <Header name={pokemon.name} height={pokemon.height} />
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={`${pokemon.name} illustration`}
      />
    </div>
  );
};
export default Card;
