import React, { useState, useEffect }from 'react';

export const Home = () => {
  // [games, setGames ] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games')
      .then(res => res.json())
      .then(data => console.log(data.results));
  })
  return (
    <p>Home</p>
  )
}