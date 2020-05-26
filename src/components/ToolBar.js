import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const ToolBar = () => {
    const { changeTheme, darkTheme } = useContext(ThemeContext)
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light ${ darkTheme ? 'bg-dark' : 'bg-light' }`}>
                <div className="container">
                    <Link to="/" className={`navbar-brand ${darkTheme ? 'text-white' : ''} `}>Back to home</Link>
                    <button 
                        type="button" 
                        className={`btn btn-${darkTheme ? 'light' : 'dark'}`}
                        onClick={changeTheme}
                    >
                        { darkTheme ? 'Light theme' : 'Dark theme'}
                    </button>
                </div>
            </nav>          
        </>
    )
}
