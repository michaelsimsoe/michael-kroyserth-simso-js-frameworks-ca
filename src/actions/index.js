import { ADD_TO_FAVOURITE, FETCH_ALL_GAMES } from './types';

export const addToFavourites = (game) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: game
  };
};

export const fetchAllGames = () => {
  return (dispatch) => {
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