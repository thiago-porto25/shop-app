import React from 'react'
import styled from 'styled-components'
import { Contact, Header, Footer } from '../components'

const Container = styled.div``

export default function About({ cart }) {
  return (
    <Container>
      <Header cart={cart} />
      About
      <Footer>
        <Contact />
      </Footer>
    </Container>
  )
}
