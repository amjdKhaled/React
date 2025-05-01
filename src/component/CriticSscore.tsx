import React from "react";

interface Props {
  score: number;
}
export const CriticSscore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <p style={{ color }}>{score}</p>
    </>
  );
};
