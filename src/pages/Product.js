import React from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'
import { useRouteMatch } from 'react-router'
import productsData from '../data/productsData'

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(120deg, #999999, #eeeeee);
  position: relative;
`

const Frame = styled.div`
  display: flex;
`

const Foot = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`

const Inner = styled.div`
  border: 1.5px solid #aaaaaa;
  border-radius: 10px;
  margin: auto;
  width: 70%;
  background-color: #111111;
  margin-top: 40px;
  margin-bottom: 40px;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px 0px 10px;
  border: 1.5px solid #aaaaaa;
  background-color: white;
  width: 350px;
  overflow: hidden;
  padding: 10px 0px 10px 0px;

  img {
    width: auto;
    height: 350px;
    object-fit: cover;
    overflow: hidden;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70%;
  color: #e85a4f;

  h1 {
    width: 80%;
    padding-left: 10%;
    word-wrap: break-word;
  }

  h3 {
    width: 80%;
    padding-left: 10%;
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    text-align: justify;
    width: 80%;
    padding-left: 10%;
  }

  button {
    margin: auto;
    background-color: #e85a4f;
    border: none;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    width: 11rem;
    height: 3.5rem;
    font-size: 25px;
    transition: 200ms ease-in-out;

    i {
      transition: transform 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    &:hover {
      background-color: #d74b3e;
      color: white;
    }

    &:hover > i {
      transform: translateX(10px);
    }
  }
`

export default function Product({ cart }) {
  const match = useRouteMatch()
  const { id } = match.params

  return (
    <Container>
      <Header cart={cart} />
      <Inner>
        <Frame>
          <ImageContainer>
            <img src={`/images/products/${id}.jpg`} alt={productsData[id]} />
          </ImageContainer>
          <TextContainer>
            <h1>{productsData[id].name}</h1>
            <h3>
              ${(Math.round(productsData[id].price * 100) / 100).toFixed(2)}
            </h3>
            <p>{productsData[id].description}</p>
            <button>
              Add <i className="fas fa-shopping-cart"></i>
            </button>
          </TextContainer>
        </Frame>
      </Inner>
      <Foot>
        <Footer />
      </Foot>
    </Container>
  )
}
