import React from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'

const Container = styled.div``

const Inner = styled.div``

export default function Cart({ cart, setCart }) {
  console.log(cart)
  return (
    <Container>
      <Header cart={cart} />
      <Inner></Inner>
      <Footer />
    </Container>
  )
}
