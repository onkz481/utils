---
title: isNull
sidebar_position: 5
---

`isNull`メソッドは、渡された値が`null`または`undefined`であるかどうかを判別します。

```js
isNull(null); // true
isNull(undefined); // true

isNull(''); // false
isNull([]); // false
```

## 使い方

```js
import { isNull } from '@onkz481/conditionals';

isNull(value);
```
