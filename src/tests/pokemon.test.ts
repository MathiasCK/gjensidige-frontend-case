import {randomPokemon, pokemonNames} from "@Utils/pokemon";

describe("randomPokemon()", () => {
  it("randomPokemon returns a string", () => {
    const pokemon = randomPokemon();
    expect(typeof pokemon).toBe("string");
  });

  it("randomPokemon returns a string in lowercase", () => {
    const pokemon = randomPokemon();
    expect(typeof pokemon).toBe("string");
    expect(pokemon).toEqual(pokemon.toLowerCase());
  });

  it("randomPokemon returns a valid Pokémon name", () => {
    const random = randomPokemon();
    const includes = pokemonNames.some(
      pokemon => pokemon.toLowerCase() === random,
    );
    expect(includes).toBe(true);
  });

  it("returns different Pokemon names on consecutive calls", () => {
    const pokemon1 = randomPokemon();
    const pokemon2 = randomPokemon();
    expect(pokemon1).not.toEqual(pokemon2);
  });
});
