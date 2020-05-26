import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const Footer = () => {
    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={`footer ${ darkTheme && 'text-white dark-footer' }`}>
            <div className="footer__content">&copy; Vasyl Stepanov 2020</div>
            <div className="footer__content">Lviv, Ukraine</div>
        </div>
    )
}
