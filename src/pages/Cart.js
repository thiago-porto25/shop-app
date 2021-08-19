import React from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'

const Container = styled.div``

export default function Cart({ cart, setCart }) {
  return (
    <Container>
      <Header cart={cart} />
      Cart
      <Footer />
    </Container>
  )
}
