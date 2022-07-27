---
title: isNumeric
sidebar_position: 6
---

`isNumeric`メソッドは、渡された値が数値であるかどうかを判別します。

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

## 使い方

```js
import { isNumeric } from '@onkz481/conditionals';

isNumeric(value);
```
