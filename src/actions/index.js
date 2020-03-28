import { ADD_TO_FAVOURITE, FETCH_ALL_GAMES, FETCH_ONE_GAME } from './types';

export const addToFavourites = (game) => {
  console.log("game", game)
  return {
    type: ADD_TO_FAVOURITE,
    payload: game
  };
};

export const fetchAllGames = () => {
  return (dispatch, getState) => {
    const { games } = getState();
    if (games.length > 0) return;

    fetch('https://api.rawg.io/api/games')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_ALL_GAMES,
          payload: data.results
        })
      });
  }
}

export const fetchOneGame = (gameId) => {
  return (dispatch) => {
    fetch(`https://api.rawg.io/api/games/${gameId}`)
      .then(res => res.json())
      .then(data => {
        console.log("DATA", data)
        dispatch({
          type: FETCH_ONE_GAME,
          payload: data
        })
      });
  }
}