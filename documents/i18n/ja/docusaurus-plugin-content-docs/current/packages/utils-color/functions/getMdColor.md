# getMdColor

指定されたマテリアル デザインの色を取得します。 使用可能な色は [mdColors](../variables/mdColors.mdx) で確認できます。

```js
getMdColor('red', 'base'); // #F44336
getMdColor('deepPurple', 'lighten5'); // #EDE7F6
getMdColor('black'); // #000000
```

## 使い方

```js
import { getMdColor } from '@onkz481/utils-color';

const color = 'red';
const shade = 'base';

getMdColor(color, shade);
```
