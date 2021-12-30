export const smoothScroll = () => {
  require('smoothscroll-polyfill');
  // 他のページからID指定で飛んできたときに一度トップで止めてからスクロールする
  location.hash &&
    setTimeout(() => {
      scroll({ top: 0 });

      setTimeout(() => {
        const locationTarget: HTMLElement =
          document.querySelector(location.hash) ?? document.body;
        scroll({
          top: locationTarget.offsetTop,
          behavior: 'smooth',
        });
      }, 300);
    }, 70); //  ページ外から飛んできたときにスムーススクロールが働かないときはここの数値を調整（ミリ秒）

  // ページ内リンクを踏んだときの制御
  const anchorLinks: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target: HTMLElement = document.querySelector(a.hash || 'body')!;
      scroll({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    });
  });
};
