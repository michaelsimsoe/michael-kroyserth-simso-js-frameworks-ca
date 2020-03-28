import React, { useState, useEffect }from 'react';

import { GameCard } from './GameCard'

export const Home = () => {
  const [games, setGames ] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games')
      .then(res => res.json())
      .then(data => setGames(data.results));
  })
  return (
    <>
    {games.map((game) => (
      <GameCard key={game.id} game={game}></GameCard>
    ))}

    </>
  )
}