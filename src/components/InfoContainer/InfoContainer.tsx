import React from "react";
import {Pokemon} from "../../types";
import styles from "./InfoContainer.module.css";

interface Props {
  pokemon?: Pokemon;
}

const InfoContainer: React.FunctionComponent<Props> = ({pokemon}) => {
  if (pokemon) {
    return (
      <div className={styles.infoContainer}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
        <h1>Nå er det kun litt koding som gjenstår, lykke til!</h1>
      </div>
    );
  }
  return null;
};
export default InfoContainer;
