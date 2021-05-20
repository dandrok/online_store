import './App.css'

import Home from './pages/Home'
import Error from './pages/Error'
import Basket from './pages/Basket'
import ProductPage from './pages/ProductPage'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/basket'>
            <Basket />
          </Route>
          <Route path='/products'>
            <ProductPage />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
