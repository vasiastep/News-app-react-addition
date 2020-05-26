import React from 'react'
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {NewsPage} from './pages/NewsPage'
import { NewsContextProvider } from './context/News/NewsContext'
import { ModalProvider } from './context/Modal/ModalContext'
import {ThemeContextProvider} from './context/Theme/ThemeContext'


function App() {
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0)  
  })
  return (
    <>
    <BrowserRouter>
      <Switch>
        <ThemeContextProvider>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/read-news">
            <ModalProvider>
              <NewsContextProvider>
                <NewsPage />
              </NewsContextProvider>
            </ModalProvider>
          </Route>
          <Route>
            <Redirect to="/"/>
          </Route>
        </ThemeContextProvider>
      </Switch>

    </BrowserRouter>
    </>
  );
}

export default App;
