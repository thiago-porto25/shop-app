/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CartItem, Header, Footer } from '../components'
import productsData from '../data/productsData'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(120deg, #999999, #eeeeee);
  min-height: 100vh;
  height: fit-content;
`

const CheckoutButton = styled.button``

const Frame = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`

const Inner = styled.div`
  border-radius: 5px;
  margin: auto;
  width: 80%;
  max-width: 700px;
  background-color: black;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Line = styled.hr`
  width: 75%;
  color: #555555;
`

const Total = styled.p`
  font-size: 20px;
  font-weight: normal;
  text-align: right;
  color: white;
`

const TotalLabel = styled.label`
  margin-right: 15px;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  text-align: right;
  color: white;
`

export default function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculateTotal = () => {
      let newTotal = 0
      cart.forEach((item) => {
        newTotal =
          newTotal +
          parseInt(productsData[item.id].price, 10) *
            parseInt(item.quantity, 10)
      })
      setTotal(newTotal)
    }
    calculateTotal()
  }, [cart])

  return (
    <Container>
      <Header cart={cart} />
      <Inner>
        <Frame>
          {cart.map((item, i) => (
            <CartItem
              key={`${item}-${i}`}
              itemInfo={item}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </Frame>
        <Line />
        <Frame>
          <TotalLabel>
            Total
            <Total>${(Math.round(total * 100) / 100).toFixed(2)}</Total>
          </TotalLabel>
        </Frame>
        <CheckoutButton>Checkout</CheckoutButton>
      </Inner>
      <Footer />
    </Container>
  )
}
