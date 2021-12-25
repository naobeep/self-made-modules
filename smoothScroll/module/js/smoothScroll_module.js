export const smoothScroll = () => {
  // 他のページからID指定で飛んできたときに一度トップで止めてからスクロールする
  location.hash &&
    setTimeout(() => {
      scroll({ top: 0 });

      setTimeout(() => {
        const locationTarget = document.querySelector(location.hash) ?? document.body;
        scroll({
          top: locationTarget.offsetTop,
          behavior: 'smooth',
        });
      }, 300);
    }, 70); //  ページ外から飛んできたときにスムーススクロールが働かないときはここの数値を調整（ミリ秒）

  // ページ内リンクを踏んだときの制御
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target =
        a.hash === '' ? document.body : document.querySelector(a.hash);
      scroll({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    });
  });
};
