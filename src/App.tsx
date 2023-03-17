/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from "react";
import {fetchPokemon} from "@Utils/utils";
import {Pokemon} from "@Utils/types";

import {Card, SearchBar} from "./components";

import "./app.scss";
import {useDispatch} from "react-redux";
import {setPokemonAction} from "./redux/actions";

import {randomPokemon} from "./utils/pokemon";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const pokemon: Pokemon = await fetchPokemon(randomPokemon());
      dispatch(setPokemonAction(pokemon));
    };
    fetchData();
  }, []);

  return (
    <>
      <SearchBar />
      <Card />
    </>
  );
};

export default App;
