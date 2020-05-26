import React, { useContext } from 'react'
import { NewsList } from './NewsList'
import { NewsContext } from '../context/News/NewsContext'

export const NewsContainer = () => {
    const { news } = useContext(NewsContext)

    return (
        <div className="mt-4">
            <div className="container">
                {news.length ? <NewsList news={news} /> : (
                    <div className="text-center">
                        Find a piece of news and it will be displayed here.
                    </div>
                )}
            </div>
        </div>
    )
}
