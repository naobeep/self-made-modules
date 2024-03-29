function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

var body = document.querySelector('body');

var elementGenerator = function elementGenerator(elementSource) {
  var _iterator = _createForOfIteratorHelper(elementSource),
    _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _obj$textContent;

      var obj = _step.value;
      var element = document.createElement(obj.tagName);

      for (var key in obj.attr) {
        element.setAttribute(key, obj.attr[key]);
      }

      element.textContent =
        (_obj$textContent = obj.textContent) !== null &&
        _obj$textContent !== void 0
          ? _obj$textContent
          : null;

      for (var _key in obj.style) {
        element.style[_key] = obj.style[_key];
      }

      obj.parents
        ? document.querySelector(obj.parents).append(element)
        : body.append(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}; // usage
//
// import { PageTop } from './pageTop.js';
// const settings = {
//   baseColor: '#14641e', //  string
//   borderColor: '#fff', //  string
//   borderRadius: 10, //  number
//   borderThickness: 1, //  number
//   fontWeight: '500', //  string
//   marginRight: 20, //  number
//   marginBottom: 20, //  number
//   size: 50, //  number
//   textColor: '#fff', //  string
//   transition: '.3s linear', //  string
// };
// new PageTop(settings);

var PageTop = /*#__PURE__*/ (function () {
  'use strict';

  function PageTop(enteredSettings) {
    var _enteredSettings$bord, _style, _style2;

    _classCallCheck(this, PageTop);

    var defaultSettings = {
      baseColor: '#14641e',
      borderColor: '#fff',
      borderThickness: 1,
      fontWeight: '500',
      marginBottom: 20,
      marginRight: 20,
      size: 50,
      textColor: '#fff',
      transition: '0.3s linear',
    };
    this.settings = _objectSpread(
      _objectSpread({}, defaultSettings),
      enteredSettings
    );
    this.settings.fontSize = (this.settings.size / 50) * 15;
    this.settings.borderRadius =
      (_enteredSettings$bord = enteredSettings.borderRadius) !== null &&
      _enteredSettings$bord !== void 0
        ? _enteredSettings$bord
        : this.settings.size / 5;
    this.settings.triangleBaseSize = (this.settings.size / 50) * 5;
    this.elementSource = [
      {
        tagName: 'div',
        attr: {
          id: 'pageTop',
          class: 'page_top',
        },
        style:
          ((_style = {
            margin: 0,
            padding: 0,
            width: this.settings.size + 'px',
            height: this.settings.size + 'px',
            position: 'fixed',
            bottom: this.settings.marginBottom + 'px',
            right: -(this.settings.size + 1) + 'px',
            'border-radius': this.settings.borderRadius + 'px',
            display: '-webkit-box',
          }),
          _defineProperty(_style, 'display', '-ms-flexbox'),
          _defineProperty(_style, 'display', 'flex'),
          _defineProperty(_style, '-webkit-box-pack', 'center'),
          _defineProperty(_style, '-ms-flex-pack', 'center'),
          _defineProperty(_style, 'justify-content', 'center'),
          _defineProperty(_style, '-webkit-box-align', 'center'),
          _defineProperty(_style, '-ms-flex-align', 'center'),
          _defineProperty(_style, 'align-items', 'center'),
          _defineProperty(_style, '-webkit-transition', '.3s linear'),
          _defineProperty(_style, 'transition', this.settings.transition),
          _defineProperty(_style, 'opacity', '0'),
          _defineProperty(_style, 'background-color', this.settings.baseColor),
          _defineProperty(
            _style,
            '-webkit-box-shadow',
            ''
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderColor, ', ')
              .concat(this.settings.borderThickness, 'px -')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderColor, ', -')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderColor, ', -')
              .concat(this.settings.borderThickness, 'px -')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderColor)
          ),
          _defineProperty(
            _style,
            'box-shadow',
            ''
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderColor, ', ')
              .concat(this.settings.borderThickness, 'px -')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderColor, ', -')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderColor, ', -')
              .concat(this.settings.borderThickness, 'px -')
              .concat(this.settings.borderThickness, 'px ')
              .concat(this.settings.borderColor)
          ),
          _defineProperty(_style, 'line-height', 1.15),
          _style),
      },
      {
        tagName: 'a',
        attr: {
          href: '#',
          id: 'pageTop_anchor',
        },
        parents: '#pageTop',
        style:
          ((_style2 = {
            color: this.settings.textColor,
            'text-decoration': 'none',
            display: '-webkit-box',
          }),
          _defineProperty(_style2, 'display', '-ms-flexbox'),
          _defineProperty(_style2, 'display', 'flex'),
          _defineProperty(_style2, '-webkit-box-pack', 'center'),
          _defineProperty(_style2, '-ms-flex-pack', 'center'),
          _defineProperty(_style2, 'justify-content', 'center'),
          _defineProperty(_style2, '-webkit-box-align', 'center'),
          _defineProperty(_style2, '-ms-flex-align', 'center'),
          _defineProperty(_style2, 'align-items', 'center'),
          _defineProperty(_style2, 'width', '100%'),
          _defineProperty(_style2, 'height', '100%'),
          _style2),
      },
      {
        tagName: 'div',
        attr: {
          id: 'pageTop_inner',
        },
        parents: '#pageTop_anchor',
        style: {
          'padding-top': ''.concat(this.settings.triangleBaseSize * 0.4, 'px'),
          height: '76.5%',
        },
      },
      {
        tagName: 'div',
        attr: {
          id: 'pageTop_triangle',
        },
        parents: '#pageTop_inner',
        style: {
          width: '0',
          height: 0,
          'border-style': 'solid',
          'border-width': '0 '
            .concat(this.settings.triangleBaseSize * 2, 'px ')
            .concat(this.settings.triangleBaseSize * 3, 'px ')
            .concat(this.settings.triangleBaseSize * 2, 'px'),
          'border-color': 'transparent transparent '.concat(
            this.settings.textColor,
            ' transparent'
          ),
          margin: '0px auto',
        },
      },
      {
        tagName: 'p',
        attr: {
          id: 'pageTop_text',
        },
        textContent: 'TOP',
        parents: '#pageTop_inner',
        style: {
          'font-family': 'Meiryo',
          'font-weight': this.settings.fontWeight,
          margin: 0,
          padding: ''.concat(this.settings.fontSize * 0.4, 'px 0 0'),
          fontSize: this.settings.fontSize + 'px',
        },
      },
    ];

    this._init();
  }

  _createClass(PageTop, [
    {
      key: '_init',
      value: function _init() {
        // ボタンの生成
        elementGenerator(this.elementSource); // ボタンの出し入れ

        var topBtn = document.getElementById('pageTop');
        var observer = new IntersectionObserver(
          function (entry) {
            var isAppear = entry[0].boundingClientRect.top < 0;
            topBtn.style.transform = 'translateX('.concat(
              -(this.settings.size + this.settings.marginRight) * +isAppear,
              'px)'
            );
            topBtn.style.opacity = ''.concat(+isAppear);
          }.bind(this),
          {
            rootMargin: '0px 0px -100%',
          }
        );
        observer.observe(document.body); // ボタンホバー時のエフェクト

        topBtn.addEventListener(
          'mouseenter',
          function () {
            this.style.opacity = 0.7;
          },
          true
        );
        topBtn.addEventListener(
          'mouseleave',
          function () {
            this.style.opacity = 1;
          },
          true
        );
      },
    },
  ]);

  return PageTop;
})();
