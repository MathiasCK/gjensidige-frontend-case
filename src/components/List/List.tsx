import {setPokemonAction} from "@Redux/actions";
import {NameUrlPair, Pokemon} from "@Utils/types";
import {fetchPokemon} from "@Utils/utils";
import "./list.scss";
import {Popup} from "@Components";
import uuid from "react-uuid";
import {useDispatch} from "react-redux";
import {FC, useState} from "react";
import Buttons from "./Buttons";

interface Props {
  list: Pokemon[];
  favourites?: boolean;
}

const List: FC<Props> = ({list, favourites}) => {
  const [popUp, setPopup] = useState(false);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="list">
      {favourites ? (
        <header className="list__header">
          <h1>Favourites</h1>
        </header>
      ) : (
        <Buttons />
      )}
      {list.map((pokemon: NameUrlPair | Pokemon) => (
        <article key={uuid()} className="list__container">
          <h2>{pokemon.name}</h2>
          <button
            onClick={async () => {
              scrollToTop();
              const data: Pokemon = await fetchPokemon(pokemon.name);
              dispatch(setPokemonAction(data));
              setPopup(true);
              document.body.style.overflow = "hidden";
            }}
          >
            Fetch info
          </button>
        </article>
      ))}
      {popUp ? <Popup popUp={popUp} setPopUp={setPopup} /> : null}
    </section>
  );
};

export default List;
