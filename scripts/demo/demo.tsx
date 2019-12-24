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
    <GridTheme>
      <Container size="md">
        <Row col_props={{ mB: 24 }}>
          <Col>
            <Box bg="#21618C">Box 1</Box>
          </Col>
          <Col>
            <Box bg="#F4D03F">Box 2</Box>
          </Col>
          <Col size={12} order="first" md={{ size: "equal", order: 'last' }}>
            <Box bg="#AF7AC5">Box 3</Box>
          </Col>
        </Row>

        <Row cols={1} cols_md={2} cols_xl={4} col_props={{ mB: 24 }}>
          <Col>
            <Box bg="#95A5A6">Box 1</Box>
          </Col>

          <Col>
            <Box bg="#D35400">Box 2</Box>
          </Col>

          <Col size={6}>
            <Box bg="#3498DB">Box 3</Box>
          </Col>

          <Col size={6}>
            <Box bg="#52BE80">Box 4</Box>
          </Col>
        </Row>
      </Container>
    </GridTheme>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
