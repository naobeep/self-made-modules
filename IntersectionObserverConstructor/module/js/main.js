import { IOConstructor } from "./IOConstructor.js";
const options = { once: false };
const cb = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('targetIsIntersecting');
      observer.unobserve(entry.target);
    }
  });
};
const hoge = new IOConstructor({
  target: '.box',
  callback: cb,
  options,
});
