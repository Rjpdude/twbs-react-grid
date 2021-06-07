import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { GridTheme, Container, Row, Col } from '../../src'

const ContainerOverride = styled.div`
  ${Container} {
    background-color: #eaeaea;
    padding-top: 24px;
  }
`

const ColOverride = styled(Col)``

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
      <ContainerOverride>
        <Container className="custom-container-classname" size="lg">
          <Row cols={1} cols_md={3} mB={24} gutters={false}>
            <ColOverride>
              <Box bg="#21618C">Box 1</Box>
            </ColOverride>
            <ColOverride>
              <Box bg="#F4D03F">Box 2</Box>
            </ColOverride>
            <ColOverride>
              <Box bg="#AF7AC5">Box 3</Box>
            </ColOverride>
          </Row>

          <Row cols={1} cols_md={2} cols_xl={4} col_props={{ mB: 24 }}>
            <Col order={2}>
              <Box bg="#95A5A6">Box 1</Box>
            </Col>

            <Col order={1}>
              <Box bg="#D35400">Box 2</Box>
            </Col>

            <Col size={6} order={4}>
              <Box bg="#3498DB">Box 3</Box>
            </Col>

            <Col size={6} order={3}>
              <Box bg="#52BE80">Box 4</Box>
            </Col>
          </Row>
        </Container>
      </ContainerOverride>
    </GridTheme>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
