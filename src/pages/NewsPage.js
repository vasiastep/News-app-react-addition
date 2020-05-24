import React, { useContext } from 'react'
import { Form } from '../components/Form'
import { NewsContext } from '../context/News/NewsContext'
import { NewsContainer } from '../components/NewsContainer'

export const NewsPage = () => {

    const {news} = useContext(NewsContext)
    return (
        <div>
            <Form />
            <NewsContainer news={news} />
        </div>
    )
}
