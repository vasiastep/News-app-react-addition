import React from 'react'
import { NewsList } from './NewsList'

export const NewsContainer = ({ news }) => {
    return (
        <div className="container">
            {news.length ? <NewsList news={news} /> : (
                <div>
                    No news yet
                </div>
            )}
        </div>
    )
}
