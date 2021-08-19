import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

export default function Section({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
