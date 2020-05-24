import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import { Header } from '../components/Header';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export const HomePage = () => {
    return (
        <>
            <ParallaxProvider>
                <Parallax className="custom-class" y={[-40, 40]} tagOuter="figure">
                    <Header />
                </Parallax>
                <About />
                <Footer />
            </ParallaxProvider>
        </>
    )
}
