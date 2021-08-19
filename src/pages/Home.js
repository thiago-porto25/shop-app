import React from 'react'
import styled from 'styled-components'
import * as ROUTES from '../constants/Routes'
import { Link } from 'react-router-dom'
import { Contact, Header, Footer, Section } from '../components'

const Container = styled.div``

const FirstSection = styled(Section)`
  background: linear-gradient(120deg, #999999, #ffffff);
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const Image = styled.img`
  width: 60%;
  height: 100%;
`

const ShopButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 50px;
  color: #e85a4f;
  height: 4rem;
  width: 11rem;
  font-size: 25px;
  font-weight: bold;
  transition: 200ms ease;
  cursor: pointer;

  &:hover {
    background-color: #222222;
  }
`

const TextContainer = styled.div`
  width: 40%;
  color: #e85a4f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Home({ cart }) {
  return (
    <Container>
      <Header cart={cart} />
      <FirstSection>
        <TextContainer>
          <h1>
            We are Music. <br />
            There's no denying.
          </h1>
          <Link to={ROUTES.SHOP}>
            <ShopButton>Shop now</ShopButton>
          </Link>
        </TextContainer>
        <Image src="/images/backgrounds/background1.jpg" />
      </FirstSection>
      <Footer>
        <Contact />
      </Footer>
    </Container>
  )
}
