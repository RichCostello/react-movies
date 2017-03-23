import axios from 'axios';

const API_KEY = '3ee38cf8180d524b63c76f9ab19004f4';

export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export function searchMovie (searchTerm) {
	const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
	const movie = axios.get(URL);
	return {
		type: SEARCH_MOVIE,
		payload: movie
	};
}

export const TOP_10_MOVIES = 'TOP_10_MOVIES';

export function top10Movies () {
	const URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3ee38cf8180d524b63c76f9ab19004f4';
	const top10Movies = axios.get(URL);
	return {
		type: TOP_10_MOVIES,
		payload: top10Movies
	};
}

export const TOP_10_SERIES = 'TOP_10_SERIES';

export function top10Series () {
	const URL = 'https://api.themoviedb.org/3/tv/top_rated?api_key=3ee38cf8180d524b63c76f9ab19004f4&page=1';
	const top10Series = axios.get(URL);
	return {
		type: TOP_10_SERIES,
		payload: top10Series
	};
}

export const SEARCH_SERIES = 'SEARCH_SERIES';

export function searchSeries (searchTerm) {
	const URL = `https://api.themoviedb.org/3/search/tv?api_key=3ee38cf8180d524b63c76f9ab19004f4&page=1&query=${searchTerm}`;
	const foundSeries = axios.get(URL);
	console.log('od actiona', foundSeries);
	return {
		type: SEARCH_SERIES,
		payload: foundSeries
	};
}

export const FIND_MOVIE = 'FIND_MOVIE';

export function findMovieById(id){
	const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=3ee38cf8180d524b63c76f9ab19004f4`;
	const foundMovie = axios.get(URL);
	return {
		type: FIND_MOVIE,
		payload: foundMovie
	};
}

// Action to set state to null when component unmounts (remove bug-a)
export function ukini (){
	return {
		type: 'UKINI'
	};
}

export const FIND_SERIE ='FIND_SERIE';

export function findSerieById(id) {
	const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=3ee38cf8180d524b63c76f9ab19004f4`;
	const foundSerie = axios.get(URL);
	return {
		type: FIND_SERIE,
		payload: foundSerie
	};
}