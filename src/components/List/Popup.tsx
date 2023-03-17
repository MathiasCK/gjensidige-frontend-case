import React, {FC} from "react";
import {Pokemon} from "../../types";
import Spinner from "../Spinner";

interface Props {
  popUp: boolean;
  setPopUp: (value: boolean) => void;
  pokemon: Pokemon | any;
  setPokemon: (value: Pokemon | any) => void;
}

const Popup: FC<Props> = ({popUp, setPopUp, pokemon, setPokemon}) => {
  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  return (
    <div className="popup__bg">
      <div className="popup">
        <p>I'm A Pop Up!!!</p>
        <h1>{pokemon.name}</h1>
        <button
          onClick={() => {
            setPopUp(!popUp);
            setPokemon({});
            document.body.style.overflow = "scroll";
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
