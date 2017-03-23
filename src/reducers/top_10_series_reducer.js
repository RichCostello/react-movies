import { TOP_10_SERIES } from '../actions/index';

export default function (state = null, action) {
	switch (action.type) {
		case TOP_10_SERIES:
		return action.payload.data;
	}
	return state;
}