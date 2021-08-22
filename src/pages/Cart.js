/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header, Footer } from '../components'
import productsData from '../data/productsData'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(120deg, #999999, #eeeeee);
  min-height: 100vh;
  height: fit-content;
`

const Frame = styled.div``

const Inner = styled.div`
  margin: auto;
  width: 80%;
  max-width: 800px;
  background-color: black;
`

const Total = styled.p`
  color: white;
`

const TotalLabel = styled.label``

export default function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculateTotal = () => {
      let newTotal = total
      cart.forEach((item) => {
        newTotal += productsData[item.id].price * item.quantity
      })
      setTotal((Math.round(newTotal * 100) / 100).toFixed(2))
    }

    calculateTotal()
  }, [cart])

  console.log(cart)

  return (
    <Container>
      <Header cart={cart} />
      <Inner>
        <Frame></Frame>
        <Frame>
          <TotalLabel>Total:</TotalLabel>
          <Total>${total}</Total>
        </Frame>
      </Inner>
      <Footer />
    </Container>
  )
}
