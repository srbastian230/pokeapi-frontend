import React from "react";
import { Pokemon } from "./Pokemon.interface";

export interface PokemonContextState {
  allPokemons: Pokemon[];
  getPokemonByID: (id: string) => Promise<Pokemon | null>;
  getAllPokemons: () => void;
  setOffset: React.Dispatch<React.SetStateAction<number | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  pagination: {
    totalItems: number;
    sizePage: number;
  };
}
