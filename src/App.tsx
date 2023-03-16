/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {fetchPokemon} from "./utils";
import {Pokemon} from "./types";

import Card from "./components/Card";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const pokemon: Pokemon = await fetchPokemon("bulbasaur");
      setPokemon(pokemon);
    };
    fetchData();
  }, []);

  return <Card pokemon={pokemon} />;
};

export default App;
