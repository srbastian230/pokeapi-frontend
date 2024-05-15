"use client";

import { PokemonList } from "@/components/ListPokemon";
import Pagination from "@/components/Pagination";
import { PokemonContext } from "@/providers/PokemonContext";
import { useContext, useEffect } from "react";

export default function ListPokemonTemplate () {
  const {
    getAllPokemons
  } = useContext(PokemonContext)

	useEffect(() => {
		getAllPokemons();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


  return (
    <>
      <PokemonList />
      <Pagination />
    </>
  )
}