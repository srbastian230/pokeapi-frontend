"use client";

import { PokemonContext } from "@/providers/PokemonContext";
import { useContext } from "react";
import Loader from "@/components/atoms/Loader";
import CardPokemon from "@/components/molecules/CardPokemon";

export const PokemonList = () => {
  const { allPokemons, loading } = useContext(PokemonContext);

  return (
    <div className="list-pokemon-wrapper">
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon container">
          <>
            {allPokemons.map((pokemon) => (
              <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
          </>
        </div>
      )}
    </div>
  );
};
