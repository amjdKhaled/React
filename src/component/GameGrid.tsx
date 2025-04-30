import { useState } from "react";
import useGames from "../Hooks/usegames";

import { GameCard } from "./GameCard";

const GameGrid: React.FC = () => {
  const { games, error } = useGames();

  return (
    <div className="container mt-4">
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-4">
        {games.map((game) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
