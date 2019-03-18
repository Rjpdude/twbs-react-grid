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

# Element Properties

All of the grid elements (`Container`, `Row`, `Col`) and column breakpoints (`sm`, `md`, `lg`, `xl`) have access to any of the following properties:

## Flex Properties

```js
import { Flex } from 'twbs-react-grid'
```

| Property | Possible Values | Example Usage |
| ------------- |:-------------| -----:|
|direction|`Flex.Direction.Row`<br>`Flex.Direction.Column`|`direction={Flex.Direct.Row}`|
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

| Properties | Possible Values | Example Usages |
|:---------|:----------------| -------------:|
|m<br>mT<br>mB<br>mY<br>mL<br>mR<br>mX|`-5` through `5`<br>`"auto"`|`mT={5}`<br>`mB={2}`<br>`mX="auto"`|
|p<br>pT<br>pB<br>pY<br>pL<br>pR<br>pX|`0` through `5`|`p="auto"`<br>`pY={3}`<br>`pB={1}`

## Misc. Properties

| Property | Possible Values | Example Usages |
|:---------|:----------------| --------------:|
|size *|`1` to `12`<br>`"equal"`<br>`"auto"`|`<Col size={6} />`<br>`<Col size="equal" md={{ size: 6 }} />`
|classNames|`string`<br>`string[]`|`classNames="tick tock"`<br>`classNames={['tick', 'tock']}`

**- The `size` property is only available on `Col` elements and their breakpoints.*