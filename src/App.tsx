/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {fetchPokemon} from "./utils";
import {Pokemon} from "./types";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

import "./app.scss";
import {useDispatch, useSelector} from "react-redux";
import {setPokemonAction} from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const {pokemon} = useSelector((state: any) => state);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const pokemon: Pokemon = await fetchPokemon("pikachu");
      dispatch(setPokemonAction(pokemon));
    };
    fetchData();
  }, []);

  return (
    <>
      <SearchBar />
      <Card pokemon={pokemon} />
    </>
  );
};

export default App;
