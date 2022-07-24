# 既存プロジェクトに Docusaurus をインストール

## 初期セットアップ

### 1. ディレクトリの生成

```sh
npx create-docusaurus@latest ./documents classic --typescript
```

### 2. docusaurus.config.js の編集

```js
const config = {
  ...,
  baseUrl: '/documents/', // 生成したディレクトリをルートに変更
  ...,
  organizationName: 'onkz481',
  projectName: 'onkz481/utils',
}
```
