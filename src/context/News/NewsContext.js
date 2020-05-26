import React, { useReducer } from 'react'
import { FETCH_URL, API_KEY, FETCH_NOTES } from '../constants'
import { NewsReducer } from './NewsReducer'

export const NewsContext = React.createContext()

// initial state of news
const initialNewsState = {
    news: []
}

export const NewsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(NewsReducer, initialNewsState)

    const fetchNews = async (keyword = '', language, sphere) => {

        const url = `${FETCH_URL}country=${language}&${keyword ? `q=${keyword}&` : ''}category=${sphere}&apiKey=${API_KEY}`
        const proxy = 'https://cors-anywhere.herokuapp.com/'

        const data = await fetch(proxy + url).then(res => res.json());

        console.log(data.articles);
        await dispatch({
            type: FETCH_NOTES,
            payload: data.articles
        })

    }

    return (
        <NewsContext.Provider value={{
            fetchNews, news: state.news || []
        }}>
            {children}
        </NewsContext.Provider>
    )
}