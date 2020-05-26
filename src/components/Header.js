import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const Header = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <div className="header rellax" data-rellax-speed="-5"> 
            <div className="header__overlay"></div>
            <div className="header__content">
                <h1 className="header__text text-white">News PROvider</h1>
                <button 
                    className="btn mt-3 custom-btn"
                >
                    <Link 
                        className={`link ${ darkTheme ? 'dark-theme-background' : 'light-theme-background' }`} 
                        to="/read-news"
                    >
                        Get started
                    </Link>
                </button>
            </div>
        </div>
    )
}
