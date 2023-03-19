import Popup from "@Components/List/Popup";
import Spinner from "@Components/Spinner";
import {setPokemonAction} from "@Redux/actions";
import {NameUrlPair, Pokemon} from "@Utils/types";
import {fetchPokemon} from "@Utils/utils";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import uuid from "react-uuid";
import Empty from "./Empty";

const Favourites = () => {
  const {favouritesList} = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState(false);

  if (!favouritesList) {
    return <Spinner />;
  }

  if (favouritesList.length === 0) {
    return <Empty />;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="list">
      <header className="list__header">
        <h1>Favourites</h1>
      </header>
      {favouritesList.map((pokemon: NameUrlPair) => (
        <article key={uuid()} className="list__container">
          <h2>{pokemon.name}</h2>
          <button
            onClick={async () => {
              scrollToTop();
              const data: Pokemon = await fetchPokemon(pokemon.name);
              dispatch(setPokemonAction(data));
              setPopUp(true);
              document.body.style.overflow = "hidden";
            }}
          >
            Fetch info
          </button>
        </article>
      ))}
      {popUp ? <Popup popUp={popUp} setPopUp={setPopUp} /> : null}
    </section>
  );
};

export default Favourites;
