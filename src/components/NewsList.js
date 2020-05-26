import React from 'react'
import { NewsItem } from './NewsItem'

export const NewsList = ({ news }) => {
    return (
        <>
            {news.map( (newsItem, index, newsArr) => {
                let lastInThisDay = false
                try {
                    if( new Date(newsArr[index].publishedAt).getDate() > 
                    new Date(newsArr[index + 1].publishedAt).getDate() ) {
                        lastInThisDay = true
                    }       
                } catch (error) {}
                
                return (
                <React.Fragment key={newsItem.publishedAt}>
                    {index === 0 ? (<h2 className="text-center">
                        {new Date(newsItem.publishedAt).toLocaleDateString()}
                    </h2>) : null}
                    <NewsItem 
                        newsItem={newsItem} 
                        colored={index % 2 === 0}
                    />
                    {lastInThisDay ? (<h2 className="text-center mt-3">
                        {new Date(newsArr[index + 1].publishedAt).toLocaleDateString()}
                    </h2>) : null}
                </React.Fragment>
                )}
            )}   
        </>
    )
}
