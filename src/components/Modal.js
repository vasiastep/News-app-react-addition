import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/Modal/ModalContext'

export const Modal = ({options, newsItem}) => {

    const { hideModal, isOpened } = useContext(ModalContext)
    const [modalPosition, setModalPosition] = useState(window.scrollY)
    
    const itemContent = (
    <>
        <div className="modal-news-img-and-title">
            <h2 className="modal-news-title">{newsItem.title || ''}</h2>
            <img className="modal-news-img" src={newsItem.urlToImage} alt="Oops..." />
        </div>
        <div className="modal-news-main-body">
            <p className="modal-news-description">{newsItem.description || ''}</p>
            <div className="modal-news-link">Read this article on&nbsp;
                <a 
                    className="modal-news-link-target" 
                    href={newsItem.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                >{newsItem.source.name}</a>
            </div>
        </div>
    </>)
// ************************************************************
    const customContent = {  }

    const closeModal = () => hideModal()

    const scrollHandler = () => setModalPosition(window.scrollY)

    window.addEventListener('scroll', scrollHandler )
    !isOpened && window.removeEventListener('scroll', scrollHandler )
    
    return (
        <div className={`vmodal ${isOpened ? 'open' : 'hide'}`}>
            <div className="modal-overlay">
                <div className="modal-window" style={{top: modalPosition}}>
                    <div className="modal-window-header">
                        <h4 className="m-0">{options.title}</h4>
                        {options.closable ? 
                            <p 
                                id="close-btn" 
                                data-close="true"
                                onClick = {closeModal}
                            >
                                &times;
                            </p> : ''}
                    </div>
                    <div className="modal-window-body" data-content>
                        {newsItem ? itemContent : customContent}
                    </div>                
                </div>
            </div>
        </div>
    )
}
