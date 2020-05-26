import { SHOW_MODAL, HIDE_MODAL } from "../constants";

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