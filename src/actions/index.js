export const addToFavourites = (game) => {
  return {
    type: 'ADD_TO_FAVOURITE',
    payload: game
  };
};