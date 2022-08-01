---
title: isString
sidebar_position: 8
---

`isString`メソッドは、渡された値が`String`であるかどうかを判別します。

```js
isString(''); // true
isString('val'); // true

isString(undefined); // false
isString(null); // false
isString(0); // false
isString([]); // false
isString({}); // false
```

## 使い方

```js
import { isString } from '@onkz481/conditionals';

isString(value);
```
