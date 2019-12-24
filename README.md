# Bootstrap React Grid

A full implementation of the standalone [Bootstrap Flexbox Grid](https://getbootstrap.com/docs/4.4/layout/overview/) for [React](https://github.com/facebook/react) using [Styled Components](https://github.com/styled-components/styled-components).

```tsx
import { Container, Row, Col } from 'twbs-react-grid';

function Page() {
  return (
    <Container>
      <Row>
        <Col size={3} lg={4}>
          <SideNav />
        </Col>

        <Col size={9} lg={8}>
          <PageBody />
        </Col>
      </Row>
    </Container>
  )
}
```

## Getting Started

This package offers all of the main grid layout elements supplied by Bootstrap (**container**, **row** and **column**) along with a higher ordered **theme** component for overriding the Bootstrap sizing defaults.

### Table of Contents

* [Installation](#installation)
* [Grid Theme]()
* [Container]()
* [Row]()
* [Column]()
* [Element Properties]()

#### Installation

To get started, install the `twbs-react-grid` and `styled-components` packages on your React project using your preferred package manager.

```
npm install --save styled-components twbs-react-grid
```
