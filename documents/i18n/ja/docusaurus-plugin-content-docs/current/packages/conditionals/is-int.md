---
title: isInt
sidebar_position: 4
---

`isInt`メソッドは、渡された値が整数であるかどうかを判別します。

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

## 使い方

```js
import { isInt } from '@onkz481/conditionals';

isInt(value);
```
