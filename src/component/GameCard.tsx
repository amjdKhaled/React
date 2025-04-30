import React from "react";
import { Game } from "../Hooks/usegames";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <div className="card h-100" style={{ width: "100%" }}>
      <img
        src={game.background_image}
        className="card-img-top"
        alt={game.name}
      />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <p className="card-text">Explore more details about this game.</p>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </div>
    </div>
  );
};
