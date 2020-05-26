import { SHOW_MODAL, HIDE_MODAL } from "../urls_and_types";

export const ModalReducer = (state, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { ...state, opened: true, element: action.payload }
        case HIDE_MODAL:
            return { ...state, opened: false, element: null }
        default:
            return state
    }
}