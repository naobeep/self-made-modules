# smoothScroll

スムーススクロールを実装するためのモジュールです。

## 使い方

- module
  - モジュール化されたファイルです
  1. `smoothScroll_module.js`をインポートする
  2. `smoothScroll()`を実行する
- integral
  - 単体で使用するファイルです。
  - 読み込むと同時に実行されます。
  - es5でコンパイルされています
  - Internet Explorerで使用する際は併せて`polyfills.js`も読み込む必要があります。
  1. `polyfills.js`を読み込む
  2. `smoothScroll_IE.js`を読み込む
