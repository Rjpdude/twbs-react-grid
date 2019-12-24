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

This package offers all of the main grid layout elements supplied by Bootstrap (**container**, **row** and **column**) along with a higher ordered **theme** component for overriding the Bootstrap layout defaults.

### Table of Contents

* [Installation](#installation)
* [Grid Theme]()
* [Container]()
* [Row]()
* [Column]()
* [Element Properties]()

## Installation

To get started, install the `twbs-react-grid` and `styled-components` packages on your React project using your preferred package manager.

```
npm install --save styled-components twbs-react-grid
```

## Grid Theme

The `GridTheme` component allows you to override the default Bootstrap layout sizing options (such as breakpoint widths / container sizes). It also (optionally) applies the global page styling.

The grid theme uses the [React Context API](https://reactjs.org/docs/context.html), and must wrap your application at the top level.

```tsx
import { GridTheme } from 'twbs-react-grid';

function App() {
  return (
    <GridTheme spacing={12} xlWidth={1260}>
      ...
    </GridTheme>
  )
}
```

| Property | Details | Default Value |
| :------- |:--------| :-------------|
|themeStyle|When true, the default Bootstrap `html` styling will be applied to the webpage.|`true`
|spacing|The value in pixels to use for the layout margin and padding. Also referred to as `gutters` by Bootstrap.|`15`
|sm<br>md<br>lg<br>xl|The minimum widths for each breakpoint. For example, by default, the `sm` breakpoint will activate when the screen hits `576px`. You can supply any numeric value to override these defaults.|See [Grid Options](https://getbootstrap.com/docs/4.4/layout/grid/#grid-options)
|smWidth<br>mdWidth<br>lgWidth<br>xlWidth|The maximum widths for each breakpoint container. For example, the `md` breakpoint will have a container with a maximum width of `720px` by default. You can supply any numeric value to override these defaults.|See [Grid Options](https://getbootstrap.com/docs/4.4/layout/grid/#grid-options)

## Container

**Reference:** [Bootstrap 4.4 Containers](https://getbootstrap.com/docs/4.4/layout/overview/#containers)

The `Container` component accepts only one property - `size` - which can be either `fluid`, `sm`, `md`, `lg` or `xl`. This property controls the fluidity of the container. See the reference above for more information. Containers do conform to the layout spacing supplied through the [Grid Theme](#grid-theme).

```tsx
import { Container } from 'twbs-react-grid';

function Page() {
  return (
    <Container size="md">
      ...
    </Container>
  )
}
```
