import React, { useContext } from 'react'
import { ModalContext } from '../context/Modal/ModalContext'

export const Modal = ({ options, newsItem }) => {

    const { hideModal, isOpened } = useContext(ModalContext)
    
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
    
    const closeModal = () => hideModal()

    return (
        <div className={`vmodal ${isOpened ? 'open' : 'hide'}`}>
            <div className="modal-overlay">
                <div className="modal-window" style={{top: options.positionTop}}>
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
                        { itemContent }
                    </div>                
                </div>
            </div>
        </div>
    )

}
