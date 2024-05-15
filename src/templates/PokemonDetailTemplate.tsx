"use client";

import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '@/providers/PokemonContext';
import { Pokemon } from '@/interfaces/Pokemon.interface';
import Loader from '@/components/Loader';
import Image from 'next/image';
import { ProgressBar } from '@/components/ProgressBar';

export const PokemonDetailTemplate = ({ id } : {id: string}) => {
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
		<div className='main-pokemon-wrapper'>
		<main className='container main-pokemon'>
			{loading ? (
				<Loader />
			) : pokemon && (
				<>
					<div className='header-main-pokemon'>
						<span className='number-pokemon'>#{pokemon.id}</span>
						<div className='header-info'>
							<div className='container-img-pokemon'>
								<Image
									src={pokemon.sprites.other.dream_world.front_default ?? '/noImage.jpeg'}
									alt={`Pokemon ${pokemon?.name}`}
									height={300}
									width={300}
								/>
							</div>

							<div className='container-info-pokemon'>
								<h1>{pokemon.name}</h1>
								<div className='card-types info-pokemon-type'>
									{pokemon.types.map(type => (
										<span key={type.type.name} className={`${type.type.name}`}>
											{type.type.name}
										</span>
									))}
								</div>
								<div className='info-pokemon'>
									<div className='group-info'>
										<p>Altura</p>
										<span>{pokemon.height}</span>
									</div>
									<div className='group-info'>
										<p>Peso</p>
										<span>{pokemon.weight}KG</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='container-stats'>
						<h1>Estadísticas</h1>
						<div className='stats'>
							<div className='stat-group'>
								<span>Hp</span>
								<ProgressBar percentage={pokemon.stats[0].base_stat} />
							</div>
							<div className='stat-group'>
								<span>Attack</span>
								<ProgressBar percentage={pokemon.stats[1].base_stat} />
							</div>
							<div className='stat-group'>
								<span>Defense</span>
								<ProgressBar percentage={pokemon.stats[2].base_stat} />
							</div>
							<div className='stat-group'>
								<span>Special Attack</span>
								<ProgressBar percentage={pokemon.stats[3].base_stat} />
							</div>
							<div className='stat-group'>
								<span>Special Defense</span>
								<ProgressBar percentage={pokemon.stats[4].base_stat} />
							</div>
							<div className='stat-group'>
								<span>Speed</span>
								<ProgressBar percentage={pokemon.stats[5].base_stat} />
							</div>
						</div>
					</div>
				</>
			)}
		</main>
		</div>
	);
};

export default PokemonDetailTemplate;