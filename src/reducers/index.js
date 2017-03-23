import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';
import Top10MoviesReducer from './top_10_movies_reducer';
import Top10SeriesReducer from './top_10_series_reducer';
import SeriesReducer from './series_reducer';
import FindMovieReducer from './find_movie_reducer';
import FindSerieReducer from './find_serie_reducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  top10Movies: Top10MoviesReducer,
  top10Series: Top10SeriesReducer,
  series: SeriesReducer,
  foundMovie: FindMovieReducer,
  foundSerie: FindSerieReducer
});

export default rootReducer;
