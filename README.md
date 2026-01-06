# 採用サイトサンプル - Next.js版

ナリタイカンパニー株式会社の採用サイトをNext.js + TypeScript + Tailwind CSSで構築したサンプルサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14+ (App Router)
- **言語**: TypeScript (strict mode)
- **スタイリング**: Tailwind CSS
- **アイコン**: lucide-react
- **フォント**: Next.js Font Optimization (Noto Sans JP)
- **Lint**: ESLint (最も厳格な設定)
- **フォーマット**: Prettier

## セキュリティ機能

- Content Security Policy (CSP)
- セキュアヘッダー（XSS保護、Frame保護、HTTPS強制等）
- Next.js Image最適化による画像セキュリティ
- TypeScript strict modeによる型安全性

## 開発環境セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn または pnpm

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境起動

```bash
npm start
```

### Lintチェック

```bash
npm run lint
```

### 型チェック

```bash
npm run type-check
```

## プロジェクト構造

```
sample-site-recruitment/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # メインページ
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
│   ├── header/           # ヘッダーコンポーネント
│   ├── sections/         # 各セクションコンポーネント
│   └── footer/           # フッターコンポーネント
├── lib/                   # ユーティリティ関数
├── types/                 # TypeScript型定義
├── public/                # 静的ファイル
└── config/               # 設定ファイル
```

## 主な機能

- レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- スムーススクロール
- モバイルメニュー
- 画像最適化（Next.js Image）
- SEO最適化（メタデータ）
- アクセシビリティ対応（ARIA属性、キーボードナビゲーション）

## コード品質

- ESLint: 最も厳格な設定
- TypeScript: strict mode
- Prettier: コードフォーマット統一
- 型安全性: すべてのコンポーネントに型定義

## GitHub Pagesでの公開

このプロジェクトはGitHub Pagesで公開できます。詳細は [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) を参照してください。

### クイックスタート

1. **GitHubリポジトリにプッシュ**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **GitHub Pagesの設定**
   - リポジトリの Settings > Pages に移動
   - Source を "GitHub Actions" に設定

3. **自動デプロイ**
   - `main` ブランチにプッシュすると自動的にデプロイされます
   - デプロイ完了後、`https://[ユーザー名].github.io/[リポジトリ名]` でアクセスできます

## ライセンス

このプロジェクトはサンプルサイトとして作成されています。
