import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPokemonListAction, setPokemonAction} from "../../redux/actions";
import {NameUrlPair, Pokemon, PokemonList} from "../../types";
import {fetchAllPokemons, fetchPokemon} from "../../utils";
import Spinner from "../Spinner";
import "./list.scss";
import Popup from "./Popup";

const List = () => {
  const [popUp, setPopUp] = useState(false);

  const {pokemonList} = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data: PokemonList = await fetchAllPokemons();
      dispatch(setPokemonListAction(data));
    };
    fetchData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!pokemonList || Object.keys(pokemonList).length === 0) {
    return <Spinner />;
  }

  return (
    <section className="list">
      {pokemonList.results.map((pokemon: NameUrlPair) => (
        <article className="list__container" key={pokemon.name}>
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

export default List;
