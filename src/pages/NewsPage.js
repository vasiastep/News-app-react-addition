import React from 'react'
import { Form } from '../components/Form'
import { NewsContainer } from '../components/NewsContainer'
import { PageHeader } from '../components/PageHeader'
import { ToolBar } from '../components/ToolBar'

export const NewsPage = () => {
    return (
        <>
            <ToolBar />
            <PageHeader />
            <Form />
            <NewsContainer />
        </>
    )
}
