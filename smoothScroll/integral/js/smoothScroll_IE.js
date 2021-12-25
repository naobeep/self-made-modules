'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.smoothScroll = void 0;

var smoothScroll = function smoothScroll() {
  // 他のページからID指定で飛んできたときに一度トップで止めてからスクロールする
  location.hash &&
    setTimeout(function () {
      scroll({
        top: 0,
      });
      setTimeout(function () {
        var _document$querySelect;

        var locationTarget =
          (_document$querySelect = document.querySelector(location.hash)) !==
            null && _document$querySelect !== void 0
            ? _document$querySelect
            : document.body;
        scroll({
          top: locationTarget.offsetTop,
          behavior: 'smooth',
        });
      }, 300);
    }, 70); //  ページ外から飛んできたときにスムーススクロールが働かないときはここの数値を調整（ミリ秒）
  // ページ内リンクを踏んだときの制御

  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var target =
        a.hash === '' ? document.body : document.querySelector(a.hash);
      scroll({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    });
  });
};

exports.smoothScroll = smoothScroll;
