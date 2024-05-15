"use client";

import { createContext } from "react";
import { PokemonContextState } from "@/interfaces/PokemonContextState.interface";

export const initialPokemonContextState: PokemonContextState = {
  allPokemons: [],
  getAllPokemons: async () => ({}),
  getPokemonByID: async () => null,
  // Loader
  loading: false,
  setLoading: () => ({}),
  setOffset: () => ({}),
  pagination: {
    totalItems: 0,
    sizePage: 20,
  },
};
export const PokemonContext = createContext<PokemonContextState>(
  initialPokemonContextState
);
