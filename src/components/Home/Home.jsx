import React, { useState, useEffect }from 'react';

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
      <div>{game.name}</div>
    ))}

    </>
  )
}