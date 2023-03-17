import {err, notFound} from "./responses";

export const fetchPokemon = async (pokemonName: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
    );

    if (response.status === 404) {
      return notFound(pokemonName);
    }

    const data = await response.json();
    return data;
  } catch (e: any) {
    err(e);
  }
};

export const fetchAllPokemons = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`,
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e: any) {
    err(e);
  }
};
