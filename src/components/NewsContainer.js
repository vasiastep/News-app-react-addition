import React, { useContext, useState, useEffect } from 'react'
import { NewsList } from './NewsList'
import { NewsContext } from '../context/News/NewsContext'
import { Modal } from './Modal'
import { ModalContext } from '../context/Modal/ModalContext'
import { ThemeContext } from '../context/Theme/ThemeContext'


export const NewsContainer = () => {
    const { news } = useContext(NewsContext)
    const { darkTheme } = useContext(ThemeContext)
    const { isOpened, element } = useContext(ModalContext)

    const [ modalPosition, setModalPosition ] = useState(window.scrollY)

    const modalOptions = {
        title: 'NewsPROvider',
        closable: true,
        positionTop: modalPosition || window.scrollY
    }

    const scrollHandler = () => setModalPosition(window.scrollY)

    useEffect(() => {
        isOpened 
            ? window.addEventListener('scroll', scrollHandler ) 
            : window.removeEventListener('scroll', scrollHandler )
    }, [isOpened])

    useEffect(() => {
        if( darkTheme ) {
            document.body.style.backgroundColor = '#343A40'
        } else {
            document.body.style.backgroundColor = '#fff'
        }
    }, [darkTheme])

    useEffect(() => {
        const timeNow = new Date().getMinutes()

        if( timeNow - JSON.parse( localStorage.getItem('timeOfRequest')) >= 10  || 
            timeNow - JSON.parse( localStorage.getItem('timeOfRequest')) < 0 
        ) {
            localStorage.removeItem('data')
            localStorage.removeItem('timeOfRequest')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className={`container mt-4 ${ darkTheme ? 'bg-dark' : ''}`}>
                {news.length ? <NewsList news={news} /> : (
                    <div className={`text-center ${ darkTheme ? 'text-white' : '' }`}>
                        Find a piece of news and it will be displayed here.
                    </div>
                )}
            </div>
            { isOpened ? <Modal options={modalOptions} newsItem={element} /> : null }
        </>
    )
}
