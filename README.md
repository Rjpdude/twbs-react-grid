# Bootstrap React Grid

[![npm](https://img.shields.io/npm/v/twbs-react-grid.svg)](https://www.npmjs.com/package/twbs-react-grid) [![Minzipped size](https://img.shields.io/bundlephobia/minzip/twbs-react-grid.svg)](https://bundlephobia.com/result?p=twbs-react-grid) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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
* [Grid Theme](#grid-theme)
* [Container](#container)
* [Row](#row)
* [Column](#column)
* [Element Properties](#element-properties)
* [Demo](#demo)

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

**Reference:** [Bootstrap 4.4 - Containers](https://getbootstrap.com/docs/4.4/layout/overview/#containers)

The `Container` component accepts the `size` property - which can be either `fluid`, `sm`, `md`, `lg` or `xl`. This property controls the fluidity of the container. See the reference above for more information. Containers conform to the layout spacing and sizing supplied through the [Grid Theme](#grid-theme).

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

## Row

**Reference:** [Bootstrap 4.4 - Row Columns](https://getbootstrap.com/docs/4.4/layout/grid/#row-columns)

The `Row` component wraps columns, and can optionally control the sizing of it's column children by declaring how many columns to render per row on each breakpoint through the `cols_*` prop. See the reference above for more information on how this works.

Taking it a step further, row's can also automatically apply [Element Properties](#element-properties) to it's column children on each breakpoint through the `col_props_*` property (this is useful, for example, to set a bottom margin on each child column).

```tsx
import { Row } from 'twbs-react-grid';

function Elem() {
  return (
    <Row cols={2} cols_lg={4} col_props={{ mB: 20 }}>
      ...
    </Row>
  )
}
```

## Column

**Reference:** [Bootstrap 4.4 - Grid Options](https://getbootstrap.com/docs/4.4/layout/grid/#grid-options)

The `Col` element is the meat of the grid layout. A column can declare it's size on each breakpoint (1 through 12, equal or auto). Columns will assume an equal size by default. For more information on how column sizing works, see the reference above. The `size` property is the extra small / default size of the column.

The breakpoint values for column elements can also be an object describing the [Element Properties](#element-properties) at the given breakpoint and/or the actual breakpoint size.

```tsx
import { Col } from 'twbs-react-grid';

function Elem() {
  return (
    <Col size={12} md={6} xl={{ size: 4, p: 16 }}>
      ...
    </Col>
  )
}
```

## Element Properties

**Reference:** [Bootstrap 4.4 - Layout Utilities](https://getbootstrap.com/docs/4.4/layout/utilities-for-layout/)

Each of the `Container`, `Row` and `Col` elements can be assigned layout properties to easily control their display, alignment and spacing.

For more fine grained control, [Column](#column) elements can also set their properties on each breakpoint. For example, a column can be hidden by default, and be displayed on the medium breakpoint and up. As described above in the [Row](#row) section, column properties can also be applied at the row level for ease of application.

| Property | Details | Values |
| :------- |:--------| :-------------|
|display|Controls the element's CSS **display** property.|`none`, `inline`, `block`, `inline-block`, `table`, `table-row`, `table-cell`, `flex`, `inline-flex`
|direction|Controls the element's CSS **flex-direction** property.|`row`, `row-reverse`, `column`, `column-reverse`
|justifyContent|Controls the element's CSS **justify-content** property.|`start`, `end`, `center`, `between`, `around`, `evenly`
|alignContent|Controls the element's CSS **align-content** property.|`start`, `end`, `center`, `between`, `around`, `stretch`
|alignItems|Controls the element's CSS **align-items** property.|`start`, `end`, `center`, `baseline`, `stretch`
|alignSelf|Controls the element's CSS **align-self** property.|`start`, `end`, `center`, `auto`, `baseline`, `stretch`
|wrap|Controls the element's CSS **flex-wrap** property.|`true`, `false`, `reverse`
|grow<br>shrink|Controls the element's CSS **grow** and **shrink** properties.|`0`, `1`
|fill|When true, sets the element's CSS **flex** property to `1 1 auto`.|`true`, `false`
|order|Controls the element's CSS **order** property. This property is ideally used to dynamically re-order columns. See [Reordering](https://getbootstrap.com/docs/4.4/layout/grid/#reordering) for more info.|`first`, `last`, `0-12`
|offset|This property is used to dynamically offset columns. See [Offsetting Columns](https://getbootstrap.com/docs/4.4/layout/grid/#offsetting-columns) for more info.|`1-11`
|m *and* p<br>mX *and* pX<br>mY *and* pY<br>mT *and* pT<br>mB *and* pB<br>mL *and* pL<br>mR *and* pR|Spacing properties are used to control the element's margin and padding. Spacing values can either be numeric (in pixels) or string values (such as `auto` or `2em`).|-

## Demo

This repo is configured to run a local demo through a basic `webpack-dev-server` configuration on port 7200. To run the demo locally, simply run the following commands:

```
git clone https://github.com/Rjpdude/twbs-react-grid.git
cd twbs-react-grid
npm install
npm run demo
```

The demo application is configured to run through the `scripts/demo/demo.tsx` file.
