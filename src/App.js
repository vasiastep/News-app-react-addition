import React from 'react'
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';



function App() {
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0)
  })
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <ParallaxProvider>
            <Parallax className="custom-class" y={[-40, 40]} tagOuter="figure">
              <Header />
            </Parallax>
            <About />
            <Footer />
          </ParallaxProvider>
        </Route>
        <Route path="/read-news">
          <h1>News</h1>
        </Route>
        <Redirect path="/"/>
      </Switch>

    </BrowserRouter>
    </>
  );
}

export default App;
