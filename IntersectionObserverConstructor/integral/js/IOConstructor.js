'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

/**
 * targetに指定した要素が画面に入った際に.targetIsIntersectingのクラスを付与します。callback,optionsは省略可能です。
 * @module IOConstructor
 * @constructor
 * @param {string} target
 * @param {Function} callback
 * @param {object} options
 */
var IOConstructor = /*#__PURE__*/ (function () {
  function IOConstructor(_ref) {
    var _this = this;

    var target = _ref.target,
      callback = _ref.callback,
      options = _ref.options;

    _classCallCheck(this, IOConstructor);

    this.targets = document.querySelectorAll(target);
    this.methodsList = ['remove', 'add'];
    var defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      once: true,
      className: 'targetIsIntersecting',
    };

    var defaultCallback = function defaultCallback(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add(_this.options.className);
          _this.options.once && observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove(_this.options.className);
        }
      });
    };

    this.cb = callback || defaultCallback;
    this.options = Object.assign(defaultOptions, options);

    this._init();
  }

  _createClass(IOConstructor, [
    {
      key: '_init',
      value: function _init() {
        var observer = new IntersectionObserver(
          this.cb.bind(this),
          this.options
        );
        this.targets.forEach(function (target) {
          return observer.observe(target);
        });
      },
    },
  ]);

  return IOConstructor;
})();
