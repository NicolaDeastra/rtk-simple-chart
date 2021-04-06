import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import CartPage from './page'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <CartPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
