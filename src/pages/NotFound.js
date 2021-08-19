import React from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'

const Container = styled.div``

export default function NotFound({ cart }) {
  return (
    <Container>
      <Header cart={cart} />
      Not Found
      <Footer />
    </Container>
  )
}
