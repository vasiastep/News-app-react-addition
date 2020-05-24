import React, { useState, useEffect, useContext } from 'react'
import {NewsContext} from '../context/News/NewsContext'

export const Form = () => {

    const languages = ['ua', 'ru', 'us', 'it', 'de', 'pl', 'gb', 'cn']
    const spheres = ['general', 'technology', 'business', 'science', 'sports', 'entertainment', 'health']
    
    const [keyword, setKeyword] = useState('')
    const [language, setLanguage] = useState('ua')
    const [sphere, setSphere] = useState('general')

    const {fetchNews} = useContext(NewsContext)
    
    useEffect(() => {
        // console.log(language);
        // console.log(sphere);
    }, [language, sphere])


    const submitHandler = (event) => {
        event.preventDefault()
        console.log( language )
        console.log( sphere )
        console.log( keyword )

        // Send request
        fetchNews(keyword || '', language, sphere)
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="form-row align-items-center">
                    <div className="col-3 my-1">
                        <input 
                            className="form-control" 
                            placeholder="Not required..."
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
                            {languages.map(lang => (
                                <option key={lang}>{lang}</option>
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
                            {spheres.map( zone => (
                                <option key={zone}>{zone}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-auto my-1">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >Read</button>
                    </div>
                </div>
            </form>    
        </div>

    )
}
