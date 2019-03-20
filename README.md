# Bootstrap React Grid

A full implementation of the standalone Bootstrap 4 flexbox grid system for React, written in TypeScript and built down to ES5 for any web project.

* Access the standalone [Bootstrap 4](https://github.com/twbs/bootstrap) flexbox grid system expressed as React.js stateless components
* Implement all of the flexbox properties on any grid element *(including column breakpoints)*
* Flexbox property declarations for seamless component expressions
* Super lightweight! No additional build dependencies other than React, and set to build in ES5 JS

# Getting Started

To install the package, run the following command within your project's root directory:

```
npm i --save twbs-react-grid
```

Then, import any of the elements directly from anywhere in your project:

```js
import { 
  Container, 
  Row, 
  Col, 
  Flex, 
  Display
} from 'twbs-react-grid'
```

Examples to follow...  Please submit PR requests

# Grid Elements

This package provides three grid elements - `Container`, `Row`, and `Col`. While all of them have access to the properties outlined below (see [Grid Element Properties](#grid-element-properties)), each of them have their own individual properties.

## Container

```js
import { Container } from 'twbs-react-grid'
```

| Property | Details | Possible Values | Default Value |
| :------- |:--------| :---------------| :-------------|
|fluid|Controls whether the container should assume a fluid width *(100% across viewports)* or a responsive pixel width.|`boolean`|`false`

## Row

```js
import { Row } from 'twbs-react-grid'
```

| Property | Details | Possible Values | Default Value |
| :------- |:--------| :---------------| :-------------|
|noGutters|When true, it disables the margin of the row and the padding of it's columns.|`boolean`|`false`

## Col

```js
import { Col } from 'twbs-react-grid'
```

| Property | Details | Possible Values |
| :------- | :------ | --------------: |
|size|The `xs` breakpoint and default size of the column. Defaults to `"equal"`.|`1` to `12`<br>`"equal"`<br>`"auto"`
|sm<br>md<br>lg<br>xl| Each breakpoint can either be a number/string representing it's size, or an object of Grid Element Properties.  |`1` to `12`<br>`"equal"`<br>`"auto"`<br>`{}` of [Grid Element Properties](#grid-element-properties)

# Example
```js
import React from 'react'

import { 
  Container, 
  Row, 
  Col, 
  Flex,
  Display 
} from 'twbs-react-grid'

const SimpleGrid = () => (
  <Container>
    // Auto Columns
    <Row>
      <Col>1/3</Col>
      <Col>1/3</Col>
      <Col>1/3</Col>
    </Row> 
    
    // Half Columns
    <Row>
      <Col size={6}>1/2</Col>
      <Col size={6}>1/2</Col>
    </Row>

    // Wrapped Columns
    <Row>
      <Col size={3}>1/4</Col>
      <Col>2/4</Col>
      <Col size={3}>1/4</Col>
    </Row>

    // Responsive Columns
    <Row>
      <Col size={12} md={6} xl={4} />
      <Col size={12} md={6} xl={4} />
      <Col size={12} md={6} xl={4} />
      <Col size={12} md={6} xl={4} />
    </Row>
  </Container>
)

const AdvancedGrid = () => (
  <Container>
    <Row alignItems={Flex.AlignItems.Center} classNames="advanced columns">
      <Col 
        size={12} 
        direction={Flex.Direction.Row}
        sm={{ size: 6, order: "last" }} 
        md={{ size: "auto", justifyContent: Flex.JustifyContent.End }}
        xl={{ display: Display.None }}
      />
      <Col 
        size={12} 
        direction={Flex.Direction.Column}
        sm={{ size: 6, order: "first" }} 
        md={{ size: "auto", reverse: true, alignItems: Flex.AlignItems.Center }}
      />
    </Row>
  </Container>
)
```

# Grid Element Properties

All of the grid elements (`Container`, `Row`, `Col`) and column breakpoints (`sm`, `md`, `lg`, `xl`) have access to any of the following properties:

## Flex Properties

```js
import { Flex } from 'twbs-react-grid'
```

| Property | Possible Values | Example Usage |
| ------------- |:-------------| -----:|
|direction|`Flex.Direction.Row`<br>`Flex.Direction.Column`|`direction={Flex.Direction.Row}`|
|wrap|`Flex.Wrap.Wrap`<br>`Flex.Wrap.NoWrap`<br>`Flex.Wrap.Reverse`|`wrap={Flex.Wrap.Reverse}`|
|justifyContent|`Flex.JustifyContent.Start`<br>`Flex.JustifyContent.End`<br>`Flex.JustifyContent.Center`<br>`Flex.JustifyContent.Between`<br>`Flex.JustifyContent.Around`<br>|`justifyContent={Flex.JustifyContent.Center}`|
|alignItems|`Flex.AlignItems.Start`<br>`Flex.AlignItems.End`<br>`Flex.AlignItems.Center`<br>`Flex.AlignItems.Baseline`<br>`Flex.AlignItems.Stretch`|`alignItems={Flex.AlignItems.End}`|
|alignContent|`Flex.AlignContent.Start`<br>`Flex.AlignContent.End`<br>`Flex.AlignContent.Center`<br>`Flex.AlignContent.Between`<br>`Flex.AlignContent.Around`<br>`Flex.AlignContent.Stretch`<br>|`alignContent={Flex.AlignContent.Between}`|
|alignSelf|`Flex.AlignSelf.Auto`<br>`Flex.AlignSelf.Start`<br>`Flex.AlignSelf.End`<br>`Flex.AlignSelf.Center`<br>`Flex.AlignSelf.Baseline`<br>`Flex.AlignSelf.Stretch`|`alignSelf={Flex.AlignSelf.Start}`|
|order|`0` -  `12`<br>`"first"`<br>`"last"`|`order={2}`<br>`order="last"`|
|offset|`1` - `11`|`offset={5}`|
|reverse|`boolean`|`reverse={true}`|
|fill|`boolean`|`fill={true}`|
|grow|`0` or `1`|`grow={0}`|
|shrink|`0` or `1`|`shrink={1}`|

## Display Properties

```js
import { Display } from 'twbs-react-grid'
```

| Property | Possible Values | Example Usage |
|:---------|:----------------| -------------:|
|display|`Display.None`<br>`Display.Inline`<br>`Display.InlineBlock`<br>`Display.Block`<br>`Display.Table`<br>`Display.TableRow`<br>`Display.TableCell`|`display={Display.None}`

## Margin & Padding Properties

The margin and padding properties are provided as shorthand identifiers. For example, the property `mB` stands for `marginBottom`. The `Y` and `X` properties represent the element's axis. For example, `pY` will effect the top and bottom padding.

| Properties | Possible Values | Example Usages |
|:---------|:----------------| -------------:|
|m<br>mT<br>mB<br>mY<br>mL<br>mR<br>mX|`-5` through `5`<br>`"auto"`|`mT={5}`<br>`mB={2}`<br>`mX="auto"`|
|p<br>pT<br>pB<br>pY<br>pL<br>pR<br>pX|`0` through `5`|`p="auto"`<br>`pY={3}`<br>`pB={1}`

## Misc. Properties


| Property | Possible Values | Example Usages |
|:---------|:----------------| --------------:|
|classNames *|`string`<br>`string[]`|`classNames="tick tock"`<br>`classNames={['tick', 'tock']}`

**- The `classNames` property is not available on column breakpoints, but it is available on the column itself.*

Please provide comments, feedback and PR's
