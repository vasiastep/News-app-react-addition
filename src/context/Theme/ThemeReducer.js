import { CHANGE_THEME } from '../urls_and_types'

export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, dark: !state.dark}
        default:
            return state
    }
}