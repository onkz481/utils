# 既存パッケージを monorepo プロジェクトに移行する手順

## Workspace を作成

### 1. NPM プロジェクト作成

```sh
mkdir sample
cd sample
npm init
```

### 2. package.json を編集

```json:pakcage.json
{
  "private": true // 追加
}
```

### 3. workspace を追加

```sh
npm init -w packages/pack1
```

### 4. モジュールのインストール

```sh
npm install
```

### 5. 開発用の依存パッケージをインストール

以下は、パッケージの一例です。

- typescript
  - ts-node
  - @types/node
- jest
  - ts-jest
  - @types/jest
  - @jest/types
- prettier
- eslint
  - eslint-config-prettier
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser
- rimraf
- npm-run-all
- simple-git-hooks

### 6. 必要な設定ファイルをコピー

### 7. simple-git-hooks の設定をルートの package.json に移動

### 8. ローカルリンクの生成

```sh
npm link --workspace @onkz481/conditionals
```
