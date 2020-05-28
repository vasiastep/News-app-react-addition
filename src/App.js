import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {NewsPage} from './pages/NewsPage'
import {ThemeContextProvider} from './context/Theme/ThemeContext'


function App() {
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0)  
  })
  return (
    <>
    <BrowserRouter>
      <ThemeContextProvider>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/read-news" exact>
            <NewsPage />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </ThemeContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
