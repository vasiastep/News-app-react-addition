import { FETCH_NOTES, TOGGLE_BTN } from "../urls_and_types"

export const NewsReducer = (state, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                news: [...action.payload],

            }
        case TOGGLE_BTN:
            return {
                ...state,
                disabledBtn: !state.disabledBtn
            }
        default: 
            return state
    }
}