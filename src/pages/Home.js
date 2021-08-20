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

const SecondSection = styled(Section)`
  background: linear-gradient(120deg, #000000, #333333);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: #e85a4f;
  min-height: 100vh;
  height: fit-content;

  header {
    font-size: 52px;
    font-weight: bold;
    padding-top: 50px;
  }

  p {
    width: 60%;
    text-align: justify;
    margin-bottom: 40px;
  }

  hr {
    color: #d8c3a5;
    background-color: #d8c3a5;
    width: 200px;
    height: 5px;
  }
`

const ProductsContainer = styled.div`
  width: 90%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding-bottom: 50px;
  height: fit-content;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 20px;
  }

  div {
    width: 250px;
    height: 250px;
    color: #e85a4f;
    box-shadow: 0px 0px 10px #e85a4f22;
    padding: 15px 15px 15px 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    i {
      font-size: 70px;
    }

    h2 {
      word-wrap: break-word;
      text-align: center;
      font-weight: bold;
    }

    p {
      margin-top: 10px;
      margin-bottom: 10px;
      word-wrap: break-word;
      text-align: center;
      width: auto;
    }
  }
`

const ThirdSection = styled(Section)`
  background: linear-gradient(120deg, #999999, #ffffff);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

const ReviewsContainer = styled.div`
  display: flex;
  width: 80%;
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
        <Image
          src="/images/backgrounds/background1.jpg"
          alt="A vinil player in a white background"
        />
      </FirstSection>
      <SecondSection>
        <header>
          Our Diferencial
          <br />
          <hr />
        </header>
        <p>
          Cras ut sem tincidunt mi finibus aliquet. Pellentesque a sapien ex.
          Proin non suscipit nisi, eu laoreet lorem. Donec non risus sit amet
          leo malesuada ultrices. Pellentesque eget lobortis ex. Phasellus
          ultrices nec sapien at sodales. Ut ac varius dolor.
        </p>
        <ProductsContainer>
          <div>
            <i className="fas fa-shipping-fast"></i>
            <h2>Fast Shipping</h2>
            <p>
              Quisque et tristique lacus. Quisque tristique finibus ante sit
              amet mollis.
            </p>
          </div>
          <div>
            <i className="fas fa-award"></i>
            <h2>Best Quality Products</h2>
            <p>
              Suspendisse in laoreet quam. Quisque non diam placerat, placerat
              lacus ut.
            </p>
          </div>
          <div>
            <i className="fas fa-globe-americas"></i>
            <h2>Worldwide Shipping</h2>
            <p>
              Cras ut sem tincidunt mi finibus aliquet. Pellentesque a sapien
              ex.
            </p>
          </div>
        </ProductsContainer>
      </SecondSection>
      <ThirdSection>
        <header>
          Customer Reviews
          <br />
          <hr />
        </header>
        <ReviewsContainer></ReviewsContainer>
      </ThirdSection>
      <Footer>
        <Contact />
      </Footer>
    </Container>
  )
}
