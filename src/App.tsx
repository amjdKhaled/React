import React, { useState } from "react";
import { NavBar } from "./component/NavBar";
import { GameGrid } from "./component/GameGrid";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <GameGrid />
    </>
  );
};

export default App;
