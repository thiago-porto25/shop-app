import React from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'

const Container = styled.div``

export default function Cart({ cart, setCart }) {
  console.log(cart)
  return (
    <Container>
      <Header cart={cart} />
      <p>{cart[0].id}</p>
      <Footer />
    </Container>
  )
}
