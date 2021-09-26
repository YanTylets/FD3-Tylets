import { combineReducers } from 'redux';

import moviesListReducer from "./moviesListReducer";

import favoriteListReducer from './favoriteListReducer'

let combinedReducer=combineReducers({
    movies: moviesListReducer,
    favorites: favoriteListReducer,
    
});

export default combinedReducer;