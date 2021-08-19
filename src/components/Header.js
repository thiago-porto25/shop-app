import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
import styled from 'styled-components'

const CartCounter = styled.div`
  background-color: #e85a4f;
  font-size: 12px;
  color: black !important;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  text-align: center;
  transform: translateX(-20px);
  padding-top: 3px;
  padding-right: 1.5px;
  padding-left: 1.5px;
`

const Container = styled.nav`
  background-color: black;
  height: 6rem;
  display: flex;
  align-items: center;
  position: relative;
`
const Logo = styled.h1`
  font-size: 35px;
  margin-left: 10%;
  color: #d8c3a5;
  pointer-events: none;

  span {
    color: #e85a4f;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;

  & * {
    margin-left: 40px;
    text-decoration: none;
    list-style: none;
    color: #e85a4f;
    transition: 200ms ease-in-out;

    &:hover {
      color: #d8c3a5;
    }

    &:hover > ${CartCounter} {
      background-color: #d8c3a5;
    }
  }
`

const ListItem = styled.li`
  margin-left: 0;
  font-size: 20px;

  i {
    margin-left: 0;
    position: relative;
  }
`

export default function Header({ cart }) {
  return (
    <Container>
      <Logo>
        Music <span>Store</span>
      </Logo>
      <List>
        <Link to={ROUTES.HOME}>
          <ListItem>Home</ListItem>
        </Link>
        <Link to={ROUTES.ABOUT}>
          <ListItem>About</ListItem>
        </Link>
        <Link to={ROUTES.SHOP}>
          <ListItem>Shop</ListItem>
        </Link>
        <Link to={ROUTES.CART}>
          <ListItem>
            <i className="fas fa-shopping-cart">
              <CartCounter>{cart.length}</CartCounter>
            </i>
          </ListItem>
        </Link>
      </List>
    </Container>
  )
}
