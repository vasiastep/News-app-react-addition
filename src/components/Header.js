import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header rellax" data-rellax-speed="-5"> 
            <div className="header__overlay"></div>
            <div className="header__content">
                <h1 className="header__text text-white">News PROvider</h1>
                <button 
                    className="btn btn-success mt-3 custom-btn"
                ><Link className="link" to="/read-news">Get started</Link></button>
            </div>
        </div>
    )
}
