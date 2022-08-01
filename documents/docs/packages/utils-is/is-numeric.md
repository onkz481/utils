---
title: isNumeric
sidebar_position: 6
---

The `isNumeric` method determines if the passed value is a number.

```js
isNumeric(0); // true
isNumeric('0'); // true
isNumeric(1.1); // true
isNumeric(-1.1); // true

isNumeric(undefined); // false
isNumeric(null); // false
isNumeric(''); // false
isNumeric([]); // false
```

## Usage

```js
import { isNumeric } from '@onkz481/conditionals';

isNumeric(value);
```
