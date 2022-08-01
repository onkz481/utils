---
title: isInt
sidebar_position: 4
---

The `isInt` method determines if the value passed is an integer.

```js
isInt(0); // true
isInt(23); // true
isInt(-23); // true

isInt(undefined); // false
isInt(null); // false
isInt('23'); // false
isInt(23.5); // false
isInt('23.5'); // false
```

## Usage

```js
import { isInt } from '@onkz481/conditionals';

isInt(value);
```
