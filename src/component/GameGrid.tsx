import React from "react";
import useGames from "../Hooks/usegames";
import { GameCard } from "./GameCard";
import { GenreList } from "./GenreList";
import useData from "../Hooks/useData";
import { Genre } from "../Hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  darkMode: boolean;
}

const GameGrid: React.FC<Props> = ({ darkMode, selectedGenre }: Props) => {
  const { data: games, error } = useGames(selectedGenre);

  return (
    <div className="row g-4">
      {error && <div className="alert alert-danger">{error}</div>}
      {games.map((game) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={game.id}>
          <GameCard game={game} darkMode={darkMode} />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
