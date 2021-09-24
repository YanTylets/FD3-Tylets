import { combineReducers } from 'redux';

import moviesListReducer from "./moviesListReducer";

let combinedReducer=combineReducers({
    movies: moviesListReducer, // редьюсер countriesReducer отвечает за раздел state под именем countries
    // + другие редьюсеры
});

export default combinedReducer;