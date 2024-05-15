import { Pokemon } from "@/interfaces/Pokemon.interface";
import Image from "next/image";

interface Props {
  pokemon: Pokemon;
}
export default function PokemonInfoSection({ pokemon }: Props) {
  return (
    <div className="header-main-pokemon">
      <span className="number-pokemon">#{pokemon.id}</span>
      <div className="header-info">
        <div className="container-img-pokemon">
          <Image
            src={
              pokemon.sprites.other.dream_world.front_default ?? "/noImage.jpeg"
            }
            alt={`Pokemon ${pokemon?.name}`}
            height={300}
            width={300}
          />
        </div>

        <div className="container-info-pokemon">
          <h1>{pokemon.name}</h1>
          <div className="card-types info-pokemon-type">
            {pokemon.types.map((type) => (
              <span key={type.type.name} className={`${type.type.name}`}>
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="info-pokemon">
            <div className="group-info">
              <p>Altura</p>
              <span>{pokemon.height}</span>
            </div>
            <div className="group-info">
              <p>Peso</p>
              <span>{pokemon.weight}KG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
