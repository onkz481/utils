---
title: isEmpty
sidebar_position: 3
---

`isEmpty`メソッドは、渡された値が空であるかどうかを判別します。

```js
isEmpty(undefined); // true
isEmpty(null); // true
isEmpty(0); // true
isEmpty(''); // true
isEmpty([]); // true
isEmpty({}); // true

isEmpty('val'); // false
isEmpty(['']); // false
isEmpty({ val: 'val' }); // false
```

## 使い方

```js
import { isEmpty } from '@onkz481/conditionals';

isEmpty(value);
```
