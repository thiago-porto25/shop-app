import React from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'

const Container = styled.div``

export default function Product({ cart }) {
  return (
    <Container>
      <Header cart={cart} />
      Product
      <Footer />
    </Container>
  )
}
