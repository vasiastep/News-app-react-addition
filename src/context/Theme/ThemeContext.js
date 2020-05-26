import React, { createContext, useReducer } from 'react'
import {ThemeReducer} from './ThemeReducer'
import { CHANGE_THEME } from '../urls_and_types'

export const ThemeContext = createContext()

const existingDark = JSON.parse( localStorage.getItem('dark_theme') )

const initialThemeState = {
    dark: existingDark || false
}

export const ThemeContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ThemeReducer, initialThemeState)

    const changeTheme = () => {
        localStorage.setItem('dark_theme', JSON.stringify( !state.dark ))
        dispatch({ type: CHANGE_THEME })
    }

    return (
        <ThemeContext.Provider value={{
            changeTheme, darkTheme: state.dark
        }}>
            {children}
        </ThemeContext.Provider>
    )
}