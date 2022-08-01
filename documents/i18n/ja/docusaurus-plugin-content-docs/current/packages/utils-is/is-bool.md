---
title: isBool
sidebar_position: 2
---

`isBool`メソッドは、渡された値が`Boolean`であるかどうかを判別します。

```js
isBool(true); // true
isBool(false); // true

isBool(0); // false
isBool(null); // false
isBool(undefined); // false
```

## 使い方

```js
import { isBool } from '@onkz481/conditionals';

isBool(value);
```
