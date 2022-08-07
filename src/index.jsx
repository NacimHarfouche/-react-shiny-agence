import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'

const root = document.getElementById('root')

render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey:questionNumber">
          <Survey />
        </Route>
        <Route>
          <Error />
        </Route>
        <Route>
          <Results path="/results" />
        </Route>
        <Route>
          <Freelances path="/freelances" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  root
)
