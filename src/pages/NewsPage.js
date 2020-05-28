import React from 'react'
import { Form } from '../components/Form'
import { NewsContainer } from '../components/NewsContainer'
import { PageHeader } from '../components/PageHeader'
import { ToolBar } from '../components/ToolBar'
import { ModalProvider } from '../context/Modal/ModalContext'
import { NewsContextProvider } from '../context/News/NewsContext'

export const NewsPage = () => {
    return (
        <ModalProvider>
            <NewsContextProvider>
                <ToolBar />
                <PageHeader />
                <Form />
                <NewsContainer />
            </NewsContextProvider>
        </ModalProvider>
    )
}
