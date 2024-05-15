"use client";

import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "@/providers/PokemonContext";
import { Pokemon } from "@/interfaces/Pokemon.interface";
import Loader from "@/components/atoms/Loader";
import StatisticSection from "../organism/StatisticSection";
import PokemonInfoSection from "../organism/PokemonInfoSection";

export const PokemonDetailTemplate = ({ id }: { id: string }) => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>();

  const fetchPokemon = async (id: string) => {
    const data = await getPokemonByID(id);
    if (data) setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-pokemon-wrapper">
      <main className="container main-pokemon">
        {loading ? (
          <Loader />
        ) : (
          pokemon && (
            <>
              <PokemonInfoSection pokemon={pokemon} />
              <StatisticSection pokemonStats={pokemon.stats} />
            </>
          )
        )}
      </main>
    </div>
  );
};

export default PokemonDetailTemplate;
