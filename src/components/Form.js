import React, { useState, useEffect, useContext } from 'react'
import { NewsContext } from '../context/News/NewsContext'
import { ThemeContext } from '../context/Theme/ThemeContext'

export const Form = () => {

    const languages = ['Select language', 'ua', 'ru', 'us', 'it', 'de', 'pl', 'gb', 'cn']
    const spheres = ['Select sphere', 'general', 'technology', 'business', 'science', 'sports', 'entertainment', 'health']
    
    const [keyword, setKeyword] = useState(localStorage.getItem('options') 
    ? JSON.parse(localStorage.getItem('options')).keyword
    : ''
    )
    const [language, setLanguage] = useState(
        localStorage.getItem('options') 
        ? JSON.parse(localStorage.getItem('options')).language 
        : 'us'
    )
    const [sphere, setSphere] = useState(
        localStorage.getItem('options') 
        ? JSON.parse(localStorage.getItem('options')).sphere 
        : 'technology'
    )

    const { fetchNews, disabled } = useContext(NewsContext)
    const { darkTheme } = useContext(ThemeContext)
    
    useEffect(() => {
        const options = {keyword, language, sphere}
        localStorage.setItem('options', JSON.stringify(options))

    }, [keyword, language, sphere])

    useEffect(() => {
        console.log( disabled )
    }, [disabled])

    const submitHandler = (event) => {
        event.preventDefault()

        // Send request
        fetchNews(keyword || '', language, sphere)
    }

    return (
        <div className="container mt-4">
            <form onSubmit={submitHandler}>
                <div className="form-row align-items-center">
                    <div className="col-3 my-1">
                        <input 
                            className="form-control" 
                            placeholder="Key words (not required)"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                        />
                    </div>
                    <div className="col-3 my-1">
                        <select 
                            className="custom-select mr-sm-2" 
                            id="language"
                            onChange={e => setLanguage(e.target.value)}
                            value={language}
                        >
                            {languages.map((lang, index) => (
                                <option disabled={index === 0} key={lang}>{lang}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-3 my-1">
                        <select 
                            className='custom-select mr-sm-2' 
                            id='sphere'
                            value={sphere}
                            onChange={e => setSphere(e.target.value)}
                        >
                            {spheres.map((zone, index) => (
                                <option disabled={index === 0} key={zone}>{zone}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-auto my-1">
                        <button 
                            type="submit" 
                            className={`btn no-border text-white ${disabled ? 'disabled' : ''} ${ darkTheme ? 'dark-theme-background' : 'light-theme-background'}`}
                            disabled={disabled}
                        >Read</button>
                    </div>
                </div>
            </form>    
        </div>

    )
}
