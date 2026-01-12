# デプロイ完了

## デプロイ状況

✅ コードをGitHubリポジトリにプッシュしました
- リポジトリ: https://github.com/naritai-dev/sample-site-recruitment.git
- ブランチ: main

## 次のステップ

### 1. GitHub Pagesの設定

1. GitHubリポジトリにアクセス: https://github.com/naritai-dev/sample-site-recruitment
2. **Settings** > **Pages** に移動
3. **Source** を **"GitHub Actions"** に設定
4. 保存

### 2. デプロイの確認

- **Actions** タブでデプロイの進行状況を確認できます
- デプロイが完了すると、以下のURLでアクセスできます:
  - **https://naritai-dev.github.io/sample-site-recruitment**

### 3. 自動デプロイ

- `main` ブランチにプッシュすると自動的にデプロイされます
- デプロイには通常5-10分かかります

## トラブルシューティング

### デプロイが失敗する場合

1. **Actions** タブでエラーログを確認
2. ビルドエラーの場合は、ローカルで `npm run build` を実行して確認
3. `basePath` の設定を確認（`/sample-site-recruitment` に設定されているか）

### 404エラーが発生する場合

- `basePath` が正しく設定されているか確認
- GitHub PagesのURLと `basePath` が一致しているか確認

### 画像が表示されない場合

- 外部画像のURLが正しいか確認
- `images.unoptimized: true` が設定されているか確認

## 設定内容

- **basePath**: `/sample-site-recruitment`
- **output**: `export` (静的エクスポート)
- **画像最適化**: 無効（静的エクスポートのため）
