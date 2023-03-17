export interface NameUrlPair {
  name: string;
  url: string;
}

export interface PokemonList {
  count?: number;
  next?: string;
  results: NameUrlPair[];
}

export interface Ability {
  ability: NameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface Item {
  item: NameUrlPair;
}

export interface Move {
  move: NameUrlPair;
}

interface SimpleSprite {
  front_default: string;
}

interface Sprites extends SimpleSprite {
  other: OtherSprites;
}

interface OtherSprites {
  dream_world: SimpleSprite;
  "official-artwork": SimpleSprite;
}

interface TypeOfPokemon {
  slot: number;
  type: NameUrlPair;
}

export interface Stat {
  base_stat: 45;
  effort: 0;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameUrlPair[];
  height: number;
  held_items: Item[];
  id: number;
  moves: Move[];
  name: string;
  species: NameUrlPair;
  sprites: Sprites;
  types: TypeOfPokemon[];
  weight: number;
  stats: Stat[];
}
