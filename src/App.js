import React from 'react'
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {NewsPage} from './pages/NewsPage'
import { NewsContextProvider } from './context/News/NewsContext'


function App() {
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0)  
  })
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/read-news">
          <NewsContextProvider>
            <NewsPage />
          </NewsContextProvider>
        </Route>
        <Redirect to="/"/>
      </Switch>

    </BrowserRouter>
    </>
  );
}

export default App;
