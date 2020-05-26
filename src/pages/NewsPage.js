import React, { useContext } from 'react'
import { Form } from '../components/Form'
import { NewsContainer } from '../components/NewsContainer'
import { Modal } from '../components/Modal'
import { ModalContext } from '../context/Modal/ModalContext'
import { PageHeader } from '../components/PageHeader'

export const NewsPage = () => {

    const { isOpened, element } = useContext(ModalContext)

    const modalOptions = {
        title: 'NewsPROvider',
        closable: true
    }

    return (
        <>
            <PageHeader />
            <Form />
            <NewsContainer />
            {isOpened ? <Modal options={modalOptions} newsItem={element} /> : null}
        </>
    )
}
