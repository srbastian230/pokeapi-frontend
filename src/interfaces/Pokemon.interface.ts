import { PokemonUrl } from "./PokemonUrl.interface";

export interface AbilitiesEntity {
  ability: PokemonUrl;
  is_hidden: boolean;
  slot: number;
}

export interface Cries {
  latest: string;
  legacy?: string;
}
export interface GameIndicesEntity {
  game_index: number;
  version: PokemonUrl;
}
export interface VersionDetailsEntity {
  rarity: number;
  version: PokemonUrl;
}
export interface HeldItemsEntity {
  item: PokemonUrl;
  version_details?: VersionDetailsEntity[] | null;
}

export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  move_learn_method: PokemonUrl;
  version_group: PokemonUrl;
}
export interface MovesEntity {
  move: PokemonUrl;
  version_group_details?: VersionGroupDetailsEntity[] | null;
}

export interface PastAbilitiesEntity {
  abilities?: AbilitiesEntity[] | null;
  generation: PokemonUrl;
}
export interface DreamWorld {
  front_default: string;
  front_female?: string | null;
}

export interface Other {
  dream_world: DreamWorld;
  home: { [key: string]: string | null };
  "official-artwork": { [key: string]: string };
  showdown: { [key: string]: string | null };
}

export interface Sprites {
  back_default: string;
  back_female?: string | null;
  back_shiny: string;
  back_shiny_female?: string | null;
  front_default: string;
  front_female?: string | null;
  front_shiny: string;
  front_shiny_female?: string | null;
  other: Other;
  versions?: { [key: string]: string };
}

export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: PokemonUrl;
}

export interface TypesEntity {
  slot: number;
  type: PokemonUrl;
}

export interface Pokemon {
  abilities?: AbilitiesEntity[];
  base_experience: number;
  cries: Cries;
  past_types?: string[];
  forms?: PokemonUrl[];
  game_indices?: GameIndicesEntity[];
  height: number;
  held_items?: HeldItemsEntity[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: MovesEntity[] | null;
  name: string;
  order: number;
  past_abilities?: PastAbilitiesEntity[];
  species: PokemonUrl;
  sprites: Sprites;
  stats: StatsEntity[];
  types: TypesEntity[];
  weight: number;
}
