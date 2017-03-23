import { FIND_SERIE } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case FIND_SERIE:
		return action.payload.data;
	}
	return state;
}