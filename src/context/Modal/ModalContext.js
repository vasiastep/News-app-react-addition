import React, {createContext, useReducer} from 'react'
import { ModalReducer } from './ModalReducer'
import { SHOW_MODAL, HIDE_MODAL } from '../urls_and_types'

export const ModalContext = createContext()

const initialModalState = {
    opened: false,
    element: null
}

export const ModalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ModalReducer, initialModalState)

    const showModal = (newsItem = {}) => dispatch({type: SHOW_MODAL, payload: newsItem})
    
    const hideModal = () => dispatch({type: HIDE_MODAL})

    return (
        <ModalContext.Provider value={{
            showModal, 
            hideModal, 
            isOpened: state.opened, 
            element: state.element
        }}>
            { children }
        </ModalContext.Provider>
    )
}