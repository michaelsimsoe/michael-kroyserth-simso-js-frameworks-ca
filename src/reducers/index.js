import { combineReducers } from 'redux';
import { 
  ADD_TO_FAVOURITE, 
  FETCH_ALL_GAMES, 
  FETCH_ONE_GAME, 
  REMOVE_FROM_FAVOURITE,
  SUBMIT_FORM 
} from '../actions/types';

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

const gameReducer = (state = [], action) => {
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
      if (state.includes(action.payload)) return state;
      return [
        ...state,
        action.payload
      ];
    case REMOVE_FROM_FAVOURITE:
      return state.filter(game => game.id !== action.payload.id)
    default:
      return state
  }
}

const forms = (state = {}, action) => {
  switch(action.type) {
    case SUBMIT_FORM:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  game: gameReducer,
  games: gamesReducer,
  favourites: favouriteGames,
  formData: forms
});