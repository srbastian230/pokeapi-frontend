import { Pokemon } from "@/interfaces/Pokemon.interface";
import Image from "next/image";
import Link from "next/link";

interface Props {
  pokemon: Pokemon
}
export const CardPokemon = ({ pokemon }: Props) => {
		return (
			<Link href={`/pokemon/${pokemon.id}`} className='card-pokemon'>
				<div className='card-img'>
					<Image
						src={pokemon.sprites.other.dream_world.front_default ?? '/noImage.jpeg'}
						alt={`Pokemon ${pokemon.name}`}
						height={250}
						width={285}
						priority
					/>
				</div>
				<div className='card-info'>
					<span className='pokemon-id'>N° {pokemon.id}</span>
					<h3>{pokemon.name}</h3>
					<div className='card-types'>
						{pokemon.types.map(type => (
							<span key={type.type.name} className={type.type.name}>
								{type.type.name}
							</span>
						))}
					</div>
				</div>
			</Link>
		);
	};
	
export default CardPokemon;
