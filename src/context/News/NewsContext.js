import React, { useReducer } from 'react'
import {
	FETCH_URL,
	API_KEY,
	FETCH_NOTES,
	TOGGLE_BTN,
	SET_ERROR,
	TOGGLE_LOADER
} from '../urls_and_types'
import { NewsReducer } from './NewsReducer'

export const NewsContext = React.createContext()

// initial state of news
const initialNewsState = {
	news: JSON.parse(localStorage.getItem('data')) || [],
	disabledBtn: false,
	loading: false,
	error: false
}

export const NewsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(NewsReducer, initialNewsState)

	const fetchNews = async (keyword = '', language, sphere) => {
		const url = `${FETCH_URL}country=${language}&${
			keyword ? `q=${keyword}&` : ''
		}category=${sphere}&apiKey=${API_KEY}`
		const proxy = 'https://cors-anywhere.herokuapp.com/'

		dispatch({ type: TOGGLE_BTN })
		dispatch({ type: TOGGLE_LOADER })
		await fetch(proxy + url)
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem('data', JSON.stringify(data.articles))
				localStorage.setItem('timeOfRequest', JSON.stringify(new Date().getMinutes()))
				return data
			})
			.then((data) => {
				dispatch({
					type: FETCH_NOTES,
					payload: data.articles
				})
				dispatch({ type: TOGGLE_BTN })
				dispatch({ type: TOGGLE_LOADER })
			})
			.catch((err) => {
				dispatch({ type: SET_ERROR })
				dispatch({ type: TOGGLE_BTN })
				dispatch({ type: TOGGLE_LOADER })
			})
	}

	return (
		<NewsContext.Provider
			value={{
				fetchNews,
				news: state.news || [],
				disabled: state.disabledBtn,
				error: state.error,
				loading: state.loading
			}}
		>
			{children}
		</NewsContext.Provider>
	)
}
