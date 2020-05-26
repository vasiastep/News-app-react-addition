import React, { useContext } from 'react'
import { ModalContext } from '../context/Modal/ModalContext'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const NewsItem = ({newsItem, colored}) => {

    const { showModal } = useContext(ModalContext)
    const { darkTheme } = useContext(ThemeContext)

    const showDetailed = () => showModal(newsItem)

    return (
        <>
            <div 
                className={`d-flex m-0 p-3 news-block ${darkTheme && colored ? 'dark-theme-darken' : '' } ${ colored ? 'darken' : '' } ${ darkTheme ? 'text-white' : '' } `}
                onClick={showDetailed}
            >
                <p className="mb-0 mr-3">{new Date(newsItem.publishedAt).toLocaleTimeString().replace(/:\d\d$/g, '')}</p>
                <p className="m-0">{newsItem.title}</p>
            </div>
            <hr className="m-0" />
        </>
    )
}
