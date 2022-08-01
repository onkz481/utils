---
title: isString
sidebar_position: 8
---

The `isString` method determines if the passed value is `String`.

```js
isString(''); // true
isString('val'); // true

isString(undefined); // false
isString(null); // false
isString(0); // false
isString([]); // false
isString({}); // false
```

## Usage

```js
import { isString } from '@onkz481/conditionals';

isString(value);
```
