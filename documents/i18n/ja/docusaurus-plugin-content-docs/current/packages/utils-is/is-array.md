---
title: isArray
sidebar_position: 1
---

`isArray`メソッドは、渡された値が`Array`であるかどうかを判別します。

```js
isArray([]); // true
isArray([1]); // true
isArray(new Array(1)); // true

isArray({}); // false
isArray(null); // false
isArray(undefined); // false
```

これは基本的に`Array.isArray`と同等です。

## 使い方

```js
import { isArray } from '@onkz481/conditionals';

isArray(value);
```
