import { combineReducers } from 'redux';
import { ADD_TO_FAVOURITE, FETCH_ALL_GAMES, FETCH_ONE_GAME } from '../actions/types';

const gamesReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_ALL_GAMES:
      return [
        ...state, 
        ...action.payload 
      ];
    default:
      return state;
  }
};

const gameReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_ONE_GAME:
      return action.payload;
    default:
      return state;
  }
};

const favouriteGames = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_FAVOURITE:
      return [
        ...state,
        action.payload
      ];
    default:
      return state
  }
}

export default combineReducers({
  game: gameReducer,
  games: gamesReducer,
  favourites: favouriteGames
});