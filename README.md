# Bootstrap React Grid

A full implementation of the standalone Bootstrap 4.4 flexbox grid for [React](https://github.com/facebook/react) using [Styled Components](https://github.com/styled-components/styled-components).

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
