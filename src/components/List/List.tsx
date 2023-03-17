import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPokemonListAction, setPokemonAction} from "@Redux/actions";
import {NameUrlPair, Pokemon, PokemonList} from "@Types";
import {fetchAllPokemons, fetchPokemon} from "@Utils";
import "./list.scss";
import {Popup, Spinner} from "@Components";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const sort = (value: string) => {
    if (value === "ASC") {
      pokemonList.results = pokemonList.results.sort((a: any, b: any) =>
        a.name > b.name ? 1 : -1,
      );
    } else {
      pokemonList.results = pokemonList.results.sort((a: any, b: any) =>
        a.name > b.name ? -1 : 1,
      );
    }

    dispatch(setPokemonListAction(pokemonList));
  };

  return (
    <section className="list">
      <section className="sort">
        <button
          className="green"
          onClick={() => {
            sort("ASC");
          }}
        >
          ASC
        </button>
        <button
          className="red"
          onClick={() => {
            sort("DESC");
          }}
        >
          DESC
        </button>
      </section>
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
