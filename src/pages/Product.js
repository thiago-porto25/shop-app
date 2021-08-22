import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'
import { useRouteMatch, useHistory } from 'react-router'
import productsData from '../data/productsData'
import * as ROUTES from '../constants/Routes'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(120deg, #999999, #eeeeee);
  min-height: 100vh;
  height: fit-content;
`

const Frame = styled.div`
  display: flex;
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
  color: #dddddd;

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
    margin-bottom: 20px;
    background-color: #e85a4f;
    border: none;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    width: 11rem;
    height: 3.5rem;
    font-size: 25px;
    font-weight: bold;
    transition: 300ms ease-in-out;

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    i {
      transition: transform 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    &:hover {
      background-color: #c63a2d;
      color: white;
    }

    &:hover > i {
      transform: translateX(10px);
    }
  }
`

export default function Product({ cart, setCart }) {
  const [isCartFull, setIsCartFull] = useState(false)
  const {
    params: { id },
  } = useRouteMatch()
  const history = useHistory()

  const handleAddToCart = () => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity += 1
        return item
      } else return item
    })
    const isOldItem = cart.some((item) => item.id === id)
    if (cart[0] && isOldItem) setCart(newCart)
    else setCart([...cart, { id, quantity: 1 }])

    history.push(ROUTES.CART)
  }

  useEffect(() => {
    if (cart.length >= 20) setIsCartFull(true)
  }, [cart])

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
            <button disabled={isCartFull} onClick={handleAddToCart}>
              {isCartFull ? (
                <>
                  Full <i className="fas fa-shopping-cart"></i>
                </>
              ) : (
                <>
                  Add <i className="fas fa-shopping-cart"></i>
                </>
              )}
            </button>
          </TextContainer>
        </Frame>
      </Inner>
      <Footer />
    </Container>
  )
}
