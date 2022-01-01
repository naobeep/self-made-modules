/**
 * targetに指定した要素が画面に入った際に.targetIsIntersectingのクラスを付与します。callback,optionsは省略可能です。
 * @module IOConstructor
 * @constructor
 * @param {string} target
 * @param {Function} callback
 * @param {object} options
 */
export class IOConstructor {
  constructor({ target, callback, options }) {
    this.targets = document.querySelectorAll(target);
    this.methodsList = ['remove', 'add'];
    const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      once: true,
      className: 'targetIsIntersecting',
    };
    const defaultCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(this.options.className);
          this.options.once && observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove(this.options.className);
        }
      });
    };
    this.cb = callback || defaultCallback;
    this.options = Object.assign(defaultOptions, options);
    this._init();
  }

  _init() {
    const observer = new IntersectionObserver(this.cb.bind(this), this.options);
    this.targets.forEach(target => observer.observe(target));
  }
}
