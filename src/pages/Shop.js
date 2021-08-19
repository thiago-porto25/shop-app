import React from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'

const Container = styled.div``

export default function Shop({ cart }) {
  return (
    <Container>
      <Header cart={cart} />
      Shop
      <Footer />
    </Container>
  )
}
