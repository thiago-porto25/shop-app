import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Shop from './pages/Shop'
import * as ROUTES from './constants/Routes'

function App() {
  return (
    <>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.SHOP}>
          <Shop />
        </Route>
        <Route path={ROUTES.PRODUCT}>
          <Product />
        </Route>
        <Route path={ROUTES.CART}>
          <Cart />
        </Route>
        <Route path={ROUTES.NOT_FOUND}>
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}

export default App
