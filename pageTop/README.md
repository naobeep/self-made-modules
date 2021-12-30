# pageTop

トップに戻るボタンを作成・制御する class モジュール。

## 使い方

- module
  - モジュールとして import してつかいます。Internet Explorer では使用できません。
  - 使用には`elementGenerator.js`,`IOConstructor.js`が必要になります。
  1. `elementGenerator.js`,`IOConstructor.js`を`pageTop.js`と同じ階層に格納する
  2. `main.js`に`pageTop.js`を import し、`PageTop`をインスタンスする
- integral
  - `pageTop.js`を直接読み込んで使用します。
  - 依存ファイルである`elementGenerator.js`,`IOConstructor.js`も読み込む必要があります。
  - Internet Explorer で使用する場合は`polyfills.js`も読み込む必要があります。
  - スムーススクロールを実装する場合は`smoothScroll.js`も読み込む必要があります。
  1. (`polyfills.js`を読み込む)
  2. `IOConstructor.js`を読み込む
  3. `elementGenerator.js`を読み込む
  4. `pageTop.js`を読み込む
  5. (`smoothScroll`を読み込む)
  6. `main.js`等で`PageTop`をインスタンスする。
  7. (`smoothScroll()`を呼び出す。)

### 書式

```js
const settings = {
  // プロパティはすべて省略可。省略した場合は下記の値がデフォルト値として設定されます。
  baseColor: '#040', //  (string) ボタンの色
  borderColor: '#000', //  (string) ボタンの縁取りの色
  borderRadius: 10, //  (number) ボタンの角丸の設定
  borderThickness: 1, //  (number) ボタンの縁取りの幅
  fontWeight: '500', //  (string) `TOP`の文字のfont-weight
  marginRight: 20, //  (number) ボタンの画面右端からの距離(px)
  marginBottom: 20, //  (number) ボタンの画面下端かｒなお距離(px9
  size: 50, //  (number) ボタンのサイズ(px)。`TOP`の文字、上向きの`△`のサイズはボタンサイズに連動します。
  textColor: '#000', //  (string) `TOP`の文字色。上向きの`△`の色もこれに連動します。
  transition: '.3s linear', //  (string) ボタン要素に掛かるtransition
};
```

```js
new PageTop(settings);
```
