# react-simple-qrcode

> Simple React QR code/ 2D barcode, Using [node.qrcode](https://github.com/soldair/node-qrcode) in React is easy, based on Qrcode encapsulation

- [Install](#install)
- [Usage](#usage)

## Install

Inside your project folder do:

```shell
npm install react-simple-qrcode
```

or

```shell
yarn add react-simple-qrcode
```

## Usage

`react-simple-qrcode` exports components that render `img` and `canvas`

### Image

```javascript
import { Image } from 'react-simple-qrcode';

<Image text="https://reactjs.org/" />;
```

#### Props

`text`

Type: `String|Array`

Text to encode or a list of objects describing segments.

`options`

- `type`

  Type: `String`  
   Default: `image/png`

  Data URI format.

  Possible values are: `image/png`, `image/jpeg`, `image/webp`.

- `rendererOpts.quality`

  Type: `Number`

  Default: 0.92

  A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp.

See [Options](#options) for other settings.

### Canvas

```javascript
import { Canvas } from 'react-simple-qrcode';

<Canvas text="https://reactjs.org/" />;
```

#### Props

`text`

Type: `String|Array`

Text to encode or a list of objects describing segments.

`options`

See [Options](#options).

<br />

### Options

#### QR Code options

##### `version`

Type: `Number`

QR Code version. If not specified the more suitable value will be calculated.

##### `errorCorrectionLevel`

Type: `String`

Default: `M`

Error correction level.

Possible values are `low, medium, quartile, high` or `L, M, Q, H`.

##### `maskPattern`

Type: `Number`

Mask pattern used to mask the symbol.

Possible values are `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`.

If not specified the more suitable value will be calculated.

##### `toSJISFunc`

Type: `Function`

Helper function used internally to convert a kanji to its Shift JIS value.

Provide this function if you need support for Kanji mode.

#### Renderers options

##### `margin`

Type: `Number`

Default: `4`

Define how much wide the quiet zone should be.

##### `scale`

Type: `Number`

Default: `4`

Scale factor. A value of `1` means 1px per modules (black dots).

##### `small`

Type: `Boolean`

Default: `false`

Relevant only for terminal renderer. Outputs smaller QR code.

##### `width`

Type: `Number`

Forces a specific width for the output image.

If width is too small to contain the qr symbol, this option will be ignored.

Takes precedence over `scale`.

##### `color.dark`

Type: `String`

Default: `#000000ff`

Color of dark module. Value must be in hex format (RGBA).

Note: dark color should always be darker than `color.light`.

##### `color.light`

Type: `String`

Default: `#ffffffff`

Color of light module. Value must be in hex format (RGBA).
