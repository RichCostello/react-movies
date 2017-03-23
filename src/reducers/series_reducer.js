import { SEARCH_SERIES } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case SEARCH_SERIES:
			return action.payload.data;
	}
	return state;
}