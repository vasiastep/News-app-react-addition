import { FETCH_NOTES } from "../constants"

export const NewsReducer = (state, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                news: [...action.payload]
            }
        default: 
            return state
    }
}