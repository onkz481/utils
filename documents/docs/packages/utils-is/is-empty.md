---
title: isEmpty
sidebar_position: 3
---

The `isEmpty` method determines if the passed value is empty.

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

## Usage

```js
import { isEmpty } from '@onkz481/conditionals';

isEmpty(value);
```
