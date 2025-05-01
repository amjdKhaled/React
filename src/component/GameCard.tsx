import React from "react";
import { Game } from "../Hooks/usegames";
import { PlatformIconList } from "./PlatformIconList";
import { CriticSscore } from "./CriticSscore";
import getCroppedImageUrl from "../services/img-url";
import { GenreList } from "./GenreList";

interface Props {
  game: Game;
  darkMode: boolean;
}

export const GameCard = ({ game, darkMode }: Props) => {
  return (
    <div
      className="card h-100"
      style={{
        backgroundColor: darkMode ? "#2a223a" : "#fff",
        color: darkMode ? "#e0d4fc" : "#000",
      }}>
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
        <CriticSscore score={game.metacritic} />
      </div>
    </div>
  );
};
