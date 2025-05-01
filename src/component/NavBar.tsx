import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import GameGrid from "./GameGrid";
import SerchInput from "../component/serchInput";
import { GenreList } from "./GenreList";
import App from "../App";
import { Genre } from "../Hooks/useGenres";
import { PlatformSelector } from "./PlatformSelector";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

interface GameQuery {
  gere: Genre | null;
}

export const NavBar: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleMode = () => setDarkMode(!darkMode);

  const pageStyle = {
    backgroundColor: darkMode ? "#1e1b2e" : "#f8f9fa",
    color: darkMode ? "#e0d4fc" : "#212529",
    minHeight: "100vh",
  };

  const inputStyle = {
    backgroundColor: darkMode ? "#2b2a3d" : "#fff",
    color: darkMode ? "#e0d4fc" : "#000",
    border: "1px solid #555",
  };

  const dropdownStyle = {
    backgroundColor: darkMode ? "#2b2a3d" : "#fff",
    color: darkMode ? "#e0d4fc" : "#000",
  };

  document.documentElement.style.setProperty(
    "--card-bg",
    darkMode ? "#2a223a" : "#fff"
  );
  document.documentElement.style.setProperty(
    "--card-text",
    darkMode ? "#e0d4fc" : "#000"
  );

  return (
    <div style={pageStyle}>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: darkMode ? "#1e1b2e" : "#f8f9fa",
          color: darkMode ? "#e0d4fc" : "#212529",
        }}>
        <div className="container-fluid">
          <img
            src={Logo}
            className="rounded"
            style={{ width: "60px", height: "60px" }}
            alt="Logo"
          />
          <a className="navbar-brand" href="#" style={{ color: "inherit" }}>
            GamingWeb
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <form className="d-flex align-items-center" role="search">
              <button
                className="btn btn-outline-primary me-2"
                type="button"
                onClick={toggleMode}>
                {darkMode ? <CiLight /> : <CiDark />}
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <GenreList
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              darkMode={darkMode}
            />
          </div>

          <div className="col-md-9">
            <PlatformSelector />
            <GameGrid darkMode={darkMode} selectedGenre={selectedGenre} />
          </div>
        </div>
      </div>
    </div>
  );
};
