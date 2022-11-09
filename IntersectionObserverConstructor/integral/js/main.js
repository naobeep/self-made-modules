'use strict';

var options = {
  once: false,
};

var cb = function cb(entries, observer) {
  console.log(entries);
  console.log(observer);
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // console.log(this.options);
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
};

var hoge = new IOConstructor({
  target: '.box',
  callback: cb,
  options: options,
});
