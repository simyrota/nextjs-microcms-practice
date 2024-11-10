![nextjs-microcms-book](https://github.com/nextjs-microcms-book/nextjs-website-sample/assets/4659294/eea23868-1c43-4833-9cd8-97e4298ff3e4)

#### 「[Next.js+ヘッドレスCMSではじめる！ かんたんモダンWebサイト制作入門](https://www.amazon.co.jp/dp/4798183660/)」のハンズオンで作成したリポジトリです。

## 作成環境
- Mac：Sequoia 15.0.1
- Node.js v23.1.0
- Next.js v14.2.15

## ディレクトリ構成
### appディレクトリ
このディレクトリは、アプリケーションの主要な機能やロジックを含む部分をまとめたものです。

- _actions：Next.jsのServerActions処理を格納。
- _components：再利用可能なReactコンポーネントを格納。
- _constants：定数を格納。各ページのデータ取得件数を定義。
- _libs：共通のユーティリティ関数やライブラリを格納します。データフォーマット関数やAPI呼び出しのヘルパー関数など。
- contact：お問い合わせページに関するビューやロジックを格納。
- members：メンバーページに関するビューやロジックを格納。
- news：ニュースページに関するビューやロジックを格納。

### contents ディレクトリ
このディレクトリは、ニュースとしてCMSにインポートするためのコンテンツを格納。

### public ディレクトリ
このディレクトリは、静的ファイル（画像、フォント、その他のアセット）を格納。
Next.jsでは、このディレクトリ内のファイルはURLパスで直接アクセス可能。

### 開発環境の立ち上げ方法
```
npm run dev
```
コマンドラインにて上記コマンドを入力後、[http://localhost:3000](http://localhost:3000)アクセス。
