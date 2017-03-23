import { FIND_MOVIE } from '../actions/index';
	
export default function (state = null, action) {
	switch (action.type) {
		case FIND_MOVIE:
		return action.payload.data;
	}
	switch (action.type) {
		case 'UKINI':
		return null;
	}
	return state;
}