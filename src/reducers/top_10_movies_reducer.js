import { TOP_10_MOVIES } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case TOP_10_MOVIES:
		return action.payload.data;
	}
	return state;
}