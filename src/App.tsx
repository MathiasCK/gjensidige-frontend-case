/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {fetchPokemon} from "./utils";
import {Pokemon} from "./types";

import InfoContainer from "./components/InfoContainer";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const pokemon: Pokemon = await fetchPokemon("bulbasaur");
      setPokemon(pokemon);
    };
    fetchData();
  }, []);

  return <InfoContainer pokemon={pokemon} />;
};

export default App;
