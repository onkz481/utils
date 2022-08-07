# getMdColor

Gets the specified material design color. Available colors can be checked with [mdColors](../variables/mdColors.mdx).

```js
getMdColor('red', 'base'); // #F44336
getMdColor('deepPurple', 'lighten5'); // #EDE7F6
getMdColor('black'); // #000000
```

## Usage

```js
import { getMdColor } from '@onkz481/utils-color';

const color = 'red';
const shade = 'base';

getMdColor(color, shade);
```
