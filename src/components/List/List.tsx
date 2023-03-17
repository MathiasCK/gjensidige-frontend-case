import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPokemonListAction} from "../../redux/actions";
import {NameUrlPair, PokemonList} from "../../types";
import {fetchAllPokemons} from "../../utils";
import Spinner from "../Spinner";
import "./list.scss";

const List = () => {
  const {pokemonList} = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data: PokemonList = await fetchAllPokemons();
      dispatch(setPokemonListAction(data));
    };
    fetchData();
  }, []);

  if (!pokemonList || Object.keys(pokemonList).length === 0) {
    return <Spinner />;
  }

  return (
    <div>
      {pokemonList.results.map((pokemon: NameUrlPair) => (
        <h1>{pokemon.name}</h1>
      ))}
    </div>
  );
};

export default List;
