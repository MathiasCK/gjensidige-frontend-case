import {Spinner} from "@Components";
import {setPokemonListAction} from "@Redux/actions";
import {fetchPokemonTypes} from "@Utils";
import {useDispatch, useSelector} from "react-redux";

const Buttons = () => {
  const {pokemonList} = useSelector((state: any) => state);
  const dispatch = useDispatch();

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

  const fetchType = async (value: string) => {
    const data: any = await fetchPokemonTypes(value);

    dispatch(
      setPokemonListAction({
        results: data.pokemon.map((pokemon: any) => ({
          name: pokemon.pokemon.name,
          url: pokemon.pokemon.url,
        })),
      }),
    );
  };

  if (!pokemonList || Object.keys(pokemonList).length === 0) {
    return <Spinner />;
  }

  return (
    <section className="buttons">
      <button
        onClick={() => {
          sort("ASC");
        }}
      >
        ASC
      </button>
      <button
        onClick={() => {
          sort("DESC");
        }}
      >
        DESC
      </button>
      <button
        className="fire"
        onClick={() => {
          fetchType("fire");
        }}
      >
        Fire
      </button>
      <button
        className="water"
        onClick={() => {
          fetchType("water");
        }}
      >
        Water
      </button>
      <button
        className="green"
        onClick={() => {
          fetchType("grass");
        }}
      >
        Grass
      </button>
    </section>
  );
};

export default Buttons;
