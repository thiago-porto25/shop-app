import React from 'react'
import styled from 'styled-components'
import { Contact, Header, Footer } from '../components'

const Container = styled.div``

export default function Home({ cart }) {
  return (
    <Container>
      <Header cart={cart} />
      Home
      <Footer>
        <Contact />
      </Footer>
    </Container>
  )
}
