# Intersection Observer Constructor

Intersection Observer API を手軽に使うためのコンストラクタです。
ターゲットを指定してインスタンスするだけで使えます。

## 使い方

- Module
  - モジュールとして使用します。Internet Explorer では利用できません。
  1. `IOConstructor.js`から class`IOConstructor`をインポートしてインスタンスします。
- Integral
  - `IOConstructor`を単体で使用します。Internet Explorer で利用する場合は先に`polyfills.js`を読み込んでください。
  1. (`polyfills.js`を読み込む)
  2. `IOConstructor.js`を読み込む
  3. `IOConstructor`をインスタンスする
- Bundle
  - 全てを一つのファイルにバンドルします。es5 でコンパイルするので Internet Explorer でも利用可能です。
  1. `package.json`に従って`node_modules`をインストールする
  1. NPM スクリプトのコマンドを使って build する
  1. `dist`フォルダにアウトプットされた`main.js`を html で読み込む

### 書式

```js
new IOConstructor({ target: 'selector'[, callback: callbackFunc, options: {}] });
```

- target（必須）: セレクタを文字列で指定します。
- callback（任意）: コールバック関数を指定します。デフォルトでは`target`に指定した要素が領域に交差した際に`.targetIsIntersecting`というクラスを付与する関数が設定されています。

  ```js
  {callback: function(){
    // メソッドとして扱われるので一番外側はレギュラー関数でwrapする必要があります。
    // アロー関数でwrapするとthisが取得できません。

    // entries: IntersectionObserverEntry[]
    // 個別のentryはforEachなどで個別に回す必要あり。
    // entry.target: targetで指定した要素のDOMが入ります。
    // entry.isIntersecting: `entry.target`が領域に入ってるか否かをbooleanで返します。

    // observer: IntersectionObserverオブジェクト
    // observer.unobserve(entry.target): entry.targetの監視を解除します。一度だけ発火する設定の際に使用するとブラウザの負荷が抑えられます。
  }}
  ```

- options（任意）: オプションを指定します。

  ```js
  {
    // root(省略可): 基点となる要素をDOMで指定します。デフォルトではブラウザのビューポートとなっています。,
    // rootMargin(省略可): コールバックが発火するまでのマージンを文字列で設定します。CSSと違い、値が０のときでも単位は省略出来ません。デフォルトでは上下左右0pxです。,
    // threshold(省略可): 要素がどのくらい表示されたらコールバックが発火するかを0~1の数字で設定します。0(=0%)ならは要素が領域に交差した瞬間と要素が全て領域外に出た瞬間、1(=100%)なら要素が全て領域に入った瞬間と要素が100%を維持できなくなった瞬間となります。配列で指定した場合はその割合を経過するたびに発火します。デフォルト値は0です。,
    // once(省略可): コールバックの呼び出しを一度限りにするか否かをbooleanで指定します。デフォルトではtrue(一回限り)となっています。,
    // className(省略可): デフォルトコールバックでターゲットに付与するクラスを変更できます。デフォルトでは`.targetIsIntersecting`のクラスが付与される設定になっています。,
  }
  ```

## CHANGELOG

- 2021.12.26

  - README 修正

- 2021.12.25

  - デフォルトのコールバックで付与するクラス名を`.targetIsIntersecting`に変更
  - `options`に`className`のプロパティを追加
  - `IOConstructor`を単体で使用する Integral バージョンと、TypeScript で記述された Bundle バージョンを追加
