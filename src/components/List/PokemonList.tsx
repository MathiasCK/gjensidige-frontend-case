import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPokemonListAction} from "@Redux/actions";
import {PokemonList as IPokemonList} from "@Utils/types";
import {fetchAllPokemons} from "@Utils/utils";
import "./list.scss";
import {List, Spinner} from "@Components";

const PokemonList = () => {
  const {pokemonList} = useSelector((state: any) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data: IPokemonList = await fetchAllPokemons();
      dispatch(setPokemonListAction(data));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pokemonList || Object.keys(pokemonList).length === 0) {
    return <Spinner />;
  }

  return <List list={pokemonList.results} />;
};

export default PokemonList;
