import { combineReducers } from 'redux';
import { ADD_TO_FAVOURITE, FETCH_ALL_GAMES } from '../actions/types';

const INTIAL_STATE = {
  favouriteGames: [],
}

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

const favouriteGames = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favouriteGames: action.payload
      };
    default:
      return state
  }
}

export default combineReducers({
  games: gamesReducer,
  favourites: favouriteGames
});