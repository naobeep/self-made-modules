# IntersectionObserverConstructor

Intersection Observer APIを手軽に使うためのコンストラクタモジュール。
exportを外せば単体のコンストラクタとしても使えます。

## 使い方

`IOConstructor.js`からclass`IOConstructor`をインポートしてインスタンスします。

### 書式

```js
new IOConstructor({ target: 'selector', callback: callbackFunc, options: {} })
```

* target（必須）: セレクタを文字列で指定します。
* callback（任意）: コールバック関数を指定します。
* options（任意）: オプションを指定します。
