import React, { useContext } from 'react'
import { NewsItem } from './NewsItem'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const NewsList = ({ news }) => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <>
            {news.map((newsItem, index, newsArr) => {
                let lastInThisDay = false
                try {
                    if (
                        new Date(newsArr[index].publishedAt).getDate() >
                        new Date(newsArr[index + 1].publishedAt).getDate()
                    ) {
                        lastInThisDay = true
                    }
                } catch (error) {}

                return (
                    <React.Fragment key={Math.random()}>
                        {index === 0 ? (
                            <h2 className={`text-center ${darkTheme ? 'text-white' : ''}`}>
                                {new Date(newsItem.publishedAt).toLocaleDateString()}
                            </h2>
                        ) : null}
                        <NewsItem newsItem={newsItem} colored={index % 2 === 0} />
                        {lastInThisDay ? (
                            <h2 className={`text-center mt-3 ${darkTheme ? 'text-white' : ''}`}>
                                {new Date(newsArr[index + 1].publishedAt).toLocaleDateString()}
                            </h2>
                        ) : null}
                    </React.Fragment>
                )
            })}
        </>
    )
}
