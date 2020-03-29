import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, FETCH_ALL_GAMES, FETCH_ONE_GAME, SUBMIT_FORM } from './types';

export const addToFavourites = (game) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: game
  };
};

export const removeFromFavourites = (game) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
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

// export const fetchOneGame = (gameId) => {
//   return (dispatch, getState) => {
//     const gameOrEmptyString = getState().games.find(game => game.id === +gameId) || "";
//     dispatch({
//       type: FETCH_ONE_GAME,
//       payload: gameOrEmptyString
//     })
//   }
// }

export const fetchOneGame = (gameId) => {
  return (dispatch) => {
    fetch(`https://api.rawg.io/api/games/${gameId}`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_ONE_GAME,
          payload: data
        })
      });
  }
}

export const subitForm = (formData) => {
  return {
    type: SUBMIT_FORM,
    payload: formData
  }
}