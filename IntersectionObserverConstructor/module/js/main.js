const options = { once: false};
const cb = function (entries, observer) {
  console.log(entries);
  console.log(observer);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log(this.options);
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
