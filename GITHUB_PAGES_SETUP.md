# GitHub Pages デプロイ手順

このプロジェクトをGitHub Pagesで公開するための手順です。

## 前提条件

- GitHubアカウント
- リポジトリがGitHubにプッシュされていること

## デプロイ方法

### 方法1: GitHub Actions（推奨）

1. **リポジトリの設定**
   - GitHubリポジトリの Settings > Pages に移動
   - Source を "GitHub Actions" に設定

2. **リポジトリ名の確認**
   - リポジトリ名が `sample-site-recruitment` の場合、そのまま使用
   - 異なる場合は、`.github/workflows/deploy.yml` の `BASE_PATH` を確認

3. **自動デプロイ**
   - `main` ブランチにプッシュすると自動的にデプロイされます
   - デプロイ状況は Actions タブで確認できます

### 方法2: 手動デプロイ

1. **ビルド**
   ```bash
   npm run build
   ```

2. **outディレクトリをコミット**
   ```bash
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **GitHub Pagesの設定**
   - Settings > Pages に移動
   - Source を "Deploy from a branch" に設定
   - Branch を `main`、フォルダを `/out` に設定

## カスタムドメインを使用する場合

`next.config.js` の `basePath` を空文字または削除してください：

```javascript
basePath: '',
```

## トラブルシューティング

### 404エラーが発生する場合

- `basePath` の設定を確認
- リポジトリ名と `basePath` が一致しているか確認

### 画像が表示されない場合

- `images.unoptimized: true` が設定されているか確認
- 外部画像のURLが正しいか確認

### CSSが適用されない場合

- `.nojekyll` ファイルが存在するか確認
- ビルドが正常に完了しているか確認
