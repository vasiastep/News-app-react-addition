import React from 'react'
import { NewsItem } from './NewsItem'

export const NewsList = ({ news }) => {
    return (
        <>
            {news.map( newsItem => (
            <NewsItem 
                newsItem={newsItem} 
                key={newsItem.publishedAt} 
                
            />))}   
        </>
    )
}
