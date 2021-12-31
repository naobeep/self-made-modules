import { IOConstructor } from './ioConstructor';
// optionsのサンプル
// const options = {
//   root: null,  // Element | document | null
//   rootMargin: '0px', // string
//   threshold: 0,  // number | number[]
//   once: true,  // boolean
//   className: 'targetIsIntersecting', // string
// };

// callbackのサンプル
// const cb = function (
//   entries: IntersectionObserverEntry[],
//   observer: IntersectionObserver
// ) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('任意のクラス名');
//       options.once && observer.unobserve(entry.target);
//     } else {
//       entry.target.classList.remove('任意のクラス名');
//     }
//   });
// };
const boxObserver = new IOConstructor({
  target: '.box',
  // callback: cb,
  // options: options,
});
