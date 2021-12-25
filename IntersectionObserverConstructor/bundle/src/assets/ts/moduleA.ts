interface Options {
  root?: null | Element;
  rootMargin?: string | undefined;
  threshold?: number | number[];
  once?: boolean;
  className?: string;
}

export class IOConstructor {
  targets: NodeList;
  cb: IntersectionObserverCallback;
  options: Options;
  constructor({
    target,
    callback,
    options,
  }: {
    target: string;
    callback?: IntersectionObserverCallback;
    options?: Options;
  }) {
    this.targets = document.querySelectorAll(target);
    const defaultOptions: Options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      once: true,
      className: 'targetIsIntersecting',
    };
    this.options = Object.assign(defaultOptions, options);
    const defaultCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(this.options.className!);
            this.options.once && observer.unobserve(entry.target);
          } else {
            entry.target.classList.remove(this.options.className!);
          }
      });
    };
    this.cb = callback || defaultCallback;
    this._init();
  }

  _init() {
    this.targets.forEach(target => {
      const observer = new IntersectionObserver(this.cb, this.options);
      observer.observe(target as Element);
    });
  }
}
