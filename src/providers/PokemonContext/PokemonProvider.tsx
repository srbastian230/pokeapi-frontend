"use client";

import React, { useEffect, useState } from "react";
import { PokemonContext } from ".";
import { axiosInstance } from "@/config/axiosInstance";
import { Pokemon } from "@/interfaces/Pokemon.interface";
import { PokemonUrl } from "@/interfaces/PokemonUrl.interface";
import { ResponseData } from "@/interfaces/Response.interface";

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [pagination, setPagination] = useState({
    totalItems: 0,
    sizePage: 20,
  });
  const [offset, setOffset] = useState<number | null>(null);

  // Estados para la aplicación simples
  const [loading, setLoading] = useState(true);

  // lLamar 20 pokemones a la API
  const getAllPokemons = async () => {
    if (offset === null) return;

    const { data } = await axiosInstance.get<ResponseData<PokemonUrl>>(
      `pokemon?limit=${pagination.sizePage}&offset=${offset}`,
    );

    setPagination((p) => {
      const auxPagination = { ...p };
      auxPagination.totalItems = data.count;
      return auxPagination;
    });
    const promises = data.results.map(async (pokemon: PokemonUrl) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setAllPokemons(results);
    setLoading(false);
  };

  // Llamar a un pokemon por ID
  const getPokemonByID = async (id: string) => {
    const { data } = await axiosInstance.get<Pokemon>(`pokemon/${id}`);
    return data;
  };

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        getAllPokemons,
        getPokemonByID,
        // Loader
        loading,
        setLoading,
        // Pagination
        pagination,
        setOffset,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
