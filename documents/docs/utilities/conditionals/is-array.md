---
title: isArray
sidebar_position: 1
---

The `isArray` method determines if the passed value is `Array`.

```js
isArray([]); // true
isArray([1]); // true
isArray(new Array(1)); // true

isArray({}); // false
isArray(null); // false
isArray(undefined); // false
```

## Usage

```js
import { isArray } from '@onkz481/conditionals';

isArray(value);
```
