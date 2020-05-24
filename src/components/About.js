import React from 'react'

export const About = () => {
    return (
        <div className="container about">
            <div className="about__content">Folow me on:
                <ul className="about__list">
                    <li><a href="https://www.instagram.com/stepanov.vasya/" rel="noopener noreferrer" target="_blank">
                        <div className="instagram"></div>
                    </a></li>
                    <li><a href="https://www.facebook.com/vasya.stepanov.56" rel="noopener noreferrer" target="_blank">
                        <div className="facebook"></div>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/vasyl-stepanov-0485921a6/" rel="noopener noreferrer" target="_blank">
                        <div className="linkedIn"></div>
                    </a></li>
                    <li><a href="https://github.com/vasiastep" rel="noopener noreferrer" target="_blank">
                        <div className="github"></div>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}
