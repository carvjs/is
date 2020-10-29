# @carv/is

Type checking utilities.

[![License](https://flat.badgen.net/github/license/carvjs/is)](https://github.com/carvjs/is/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@carv/is?label=release)](https://www.npmjs.com/package/@carv/is)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@carv/is?icon=packagephobia&label&color=blue)](https://bundlephobia.com/result?p=@carv/is)
[![Typescript](https://flat.badgen.net/badge/icon/included?icon=typescript&label)](https://unpkg.com/browse/@carv/is@1.0.3/dist/index.d.ts)
[![Sponsor](https://flat.badgen.net/badge/sponsored%20by/Kenoxa/2980b9)](https://www.kenoxa.com)

## Installation

```sh
npm install @carv/is
```

## Usage

**Namespace Import**

```js
// ESM
import * as is from '@carv/is'

// CommonJS
const is = require('@carv/is')

is.string('a string') // => true
is.string(123) // => false
```

**Named Imports**

```js
// ESM
import { isString } from '@carv/is'

// CommonJS
const { isString } = require('@carv/is')

isString('a string') // => true
isString(123) // => false
```

## API

- [isArray](https://github.com/carvjs/is/blob/main/docs/README.md#isarray)
- [isBigInt](https://github.com/carvjs/is/blob/main/docs/README.md#isbigint)
- [isBoolean](https://github.com/carvjs/is/blob/main/docs/README.md#isboolean)
- [isDate](https://github.com/carvjs/is/blob/main/docs/README.md#isdate)
- [isDefined](https://github.com/carvjs/is/blob/main/docs/README.md#isdefined)
- [isEmptyArray](https://github.com/carvjs/is/blob/main/docs/README.md#isemptyarray)
- [isEmptyString](https://github.com/carvjs/is/blob/main/docs/README.md#isemptystring)
- [isFinite](https://github.com/carvjs/is/blob/main/docs/README.md#isfinite)
- [isFunction](https://github.com/carvjs/is/blob/main/docs/README.md#isfunction)
- [isInfinite](https://github.com/carvjs/is/blob/main/docs/README.md#isinfinite)
- [isInteger](https://github.com/carvjs/is/blob/main/docs/README.md#isinteger)
- [isNaN](https://github.com/carvjs/is/blob/main/docs/README.md#isnan)
- [isNativePromise](https://github.com/carvjs/is/blob/main/docs/README.md#isnativepromise)
- [isNil](https://github.com/carvjs/is/blob/main/docs/README.md#isnil)
- [isNonEmptyArray](https://github.com/carvjs/is/blob/main/docs/README.md#isnonemptyarray)
- [isNonEmptyString](https://github.com/carvjs/is/blob/main/docs/README.md#isnonemptystring)
- [isNull](https://github.com/carvjs/is/blob/main/docs/README.md#isnull)
- [isNumber](https://github.com/carvjs/is/blob/main/docs/README.md#isnumber)
- [isObject](https://github.com/carvjs/is/blob/main/docs/README.md#isobject)
- [isPlainObject](https://github.com/carvjs/is/blob/main/docs/README.md#isplainobject)
- [isPrimitive](https://github.com/carvjs/is/blob/main/docs/README.md#isprimitive)
- [isPromise](https://github.com/carvjs/is/blob/main/docs/README.md#ispromise)
- [isPromiseLike](https://github.com/carvjs/is/blob/main/docs/README.md#ispromiselike)
- [isRegExp](https://github.com/carvjs/is/blob/main/docs/README.md#isregexp)
- [isSafeInteger](https://github.com/carvjs/is/blob/main/docs/README.md#issafeinteger)
- [isString](https://github.com/carvjs/is/blob/main/docs/README.md#isstring)
- [isSymbol](https://github.com/carvjs/is/blob/main/docs/README.md#issymbol)
- [isType](https://github.com/carvjs/is/blob/main/docs/README.md#istype)
- [isUndefined](https://github.com/carvjs/is/blob/main/docs/README.md#isundefined)
- [isValidDate](https://github.com/carvjs/is/blob/main/docs/README.md#isvaliddate)

## Support

This project is free and open-source, so if you think this project can help you or anyone else, you may [star it on GitHub](https://github.com/carvjs/is). Feel free to [open an issue](https://github.com/carvjs/is/issues) if you have any idea, question, or you've found a bug.

## Contribute

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

We are following the [Conventional Commits](https://www.conventionalcommits.org) convention.

### Develop

- `yarn test`: Run test suite
- `yarn build`: Generate bundles
- `yarn lint`: Lints code

## Sponsors

[![Kenoxa GmbH](https://images.opencollective.com/kenoxa/9c25796/logo/68.png)](https://www.kenoxa.com) [Kenoxa GmbH](https://www.kenoxa.com)

## License

[MIT](https://github.com/carvjs/is/blob/main/LICENSE) © [Kenoxa GmbH](https://kenoxa.com)
