import {err, notFound} from "@Utils/responses";

const base_url = "https://pokeapi.co/api/v2";

const fetcher = async (path: string) => {
  try {
    const response = await fetch(`${base_url}/${path}`);

    if (response.status === 404) {
      return notFound(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (e: any) {
    err(e);
  }
};

export const fetchPokemon = async (pokemonName: string) =>
  await fetcher(`pokemon/${pokemonName.toLowerCase()}`);

export const fetchAllPokemons = async () =>
  await fetcher("pokemon?limit=100&offset=0");

export const fetchPokemonTypes = async (type: string) =>
  await fetcher(`type/${type}`);
