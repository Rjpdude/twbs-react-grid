import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { GridTheme, Container, Row, Col } from '../../src'

const Box = styled.div<{ bg: string }>`
  background: ${({ bg }) => bg};
  text-align: center;
  padding: 10px;
  color: #fff;
  height: 250px;
`

function App() {
  return (
    <GridTheme spacing={12} xlWidth={1264}>
      <Container>
        <Row>
          <Col mB={24}>
            <Box bg="#0099cc">Box 1</Box>
          </Col>
          <Col mB={24}>
            <Box bg="#5c358d">Box 2</Box>
          </Col>
          <Col mB={24} size={12} md="equal">
            <Box bg="#ff9900">Box 3</Box>
          </Col>
        </Row>
      </Container>
    </GridTheme>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
