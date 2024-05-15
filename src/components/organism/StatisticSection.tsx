import ProgressBar from "../atoms/ProgressBar";
import { StatsEntity } from "@/interfaces/Pokemon.interface";

interface Props {
  pokemonStats: StatsEntity[];
}

export default function StatisticSection({ pokemonStats }: Props) {
  return (
    <div className="container-stats">
      <h1>Estadísticas</h1>
      <div className="stats">
        <div className="stat-group">
          <span>Hp</span>
          <ProgressBar percentage={pokemonStats[0].base_stat} />
        </div>
        <div className="stat-group">
          <span>Attack</span>
          <ProgressBar percentage={pokemonStats[1].base_stat} />
        </div>
        <div className="stat-group">
          <span>Defense</span>
          <ProgressBar percentage={pokemonStats[2].base_stat} />
        </div>
        <div className="stat-group">
          <span>Special Attack</span>
          <ProgressBar percentage={pokemonStats[3].base_stat} />
        </div>
        <div className="stat-group">
          <span>Special Defense</span>
          <ProgressBar percentage={pokemonStats[4].base_stat} />
        </div>
        <div className="stat-group">
          <span>Speed</span>
          <ProgressBar percentage={pokemonStats[5].base_stat} />
        </div>
      </div>
    </div>
  );
}
