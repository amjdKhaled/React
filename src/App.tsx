import React, { useState } from "react";
import { NavBar } from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import { GenreList } from "./component/GenreList";
import { Genre } from "./Hooks/useGenres";

export const App = () => {
  return (
    <>
      <NavBar />
    </>
  );
};

export default App;
