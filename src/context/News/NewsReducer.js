import { FETCH_NOTES, TOGGLE_BTN, SET_ERROR, TOGGLE_LOADER } from '../urls_and_types'

export const NewsReducer = (state, action) => {
	switch (action.type) {
		case FETCH_NOTES:
			return {
				...state,
				news: [...action.payload],
				error: false
			}
		case TOGGLE_BTN:
			return {
				...state,
				disabledBtn: !state.disabledBtn
			}
		case TOGGLE_LOADER:
			return {
				...state,
				loading: !state.loading
			}
		case SET_ERROR:
			return {
				...state,
				error: true
			}
		default:
			return state
	}
}
