import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const Loader = () => {
	const { darkTheme } = useContext(ThemeContext)
	return (
		<div className="loader-overlay">
			<div className={`spinner-border ${darkTheme ? 'text-white' : ''}`} role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	)
}
