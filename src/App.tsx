/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {fetchPokemon} from "./utils";
import {Pokemon} from "./types";

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

import "./app.scss";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const pokemon: Pokemon = await fetchPokemon("pikachu");
      setPokemon(pokemon);
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
