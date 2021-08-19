import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Shop from './pages/Shop'
import * as ROUTES from './constants/Routes'

const Container = styled.div``

function App() {
  return (
    <Container>
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
    </Container>
  )
}

export default App
