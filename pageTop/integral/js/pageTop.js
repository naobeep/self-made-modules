'use strict';

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
};

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

var PageTop = /*#__PURE__*/ (function () {
  'use strict';

  function PageTop(_ref) {
    var _style, _style2, _style3;

    var baseColor = _ref.baseColor,
      borderColor = _ref.borderColor,
      borderThickness = _ref.borderThickness,
      borderRadius = _ref.borderRadius,
      fontWeight = _ref.fontWeight,
      marginRight = _ref.marginRight,
      marginBottom = _ref.marginBottom,
      size = _ref.size,
      textColor = _ref.textColor,
      transition = _ref.transition;

    _classCallCheck(this, PageTop);

    this.baseColor = baseColor || '#040';
    this.borderColor = borderColor || '#FFF';
    this.borderThickness =
      borderThickness !== null && borderThickness !== void 0
        ? borderThickness
        : 1;
    this.fontWeight = fontWeight || '500';
    this.marginBottom =
      marginBottom !== null && marginBottom !== void 0 ? marginBottom : 20;
    this.marginRight =
      marginRight !== null && marginRight !== void 0 ? marginRight : 20;
    this.size = size !== null && size !== void 0 ? size : 50;
    this.textColor = textColor || '#fff';
    this.transition = transition || '.3s linear';
    this.borderRadius =
      borderRadius !== null && borderRadius !== void 0
        ? borderRadius
        : this.size / 5;
    this.fontSize = (this.size / 50) * 15;
    this.triangleBaseSize = (this.size / 50) * 5;
    this.elementSource = [
      {
        tagName: 'div',
        attr: {
          id: 'pageTop',
          class: 'page_top',
        },
        style:
          ((_style = {
            width: this.size + 'px',
            height: this.size + 'px',
            position: 'fixed',
            bottom: this.marginBottom + 'px',
            right: -(this.size + 1) + 'px',
            'border-radius': this.borderRadius + 'px',
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
          _defineProperty(_style, 'transition', this.transition),
          _defineProperty(_style, 'opacity', '0'),
          _defineProperty(_style, 'background-color', this.baseColor),
          _defineProperty(
            _style,
            '-webkit-box-shadow',
            ''
              .concat(this.borderThickness, 'px ')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderColor, ', ')
              .concat(this.borderThickness, 'px -')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderColor, ', -')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderColor, ', -')
              .concat(this.borderThickness, 'px -')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderColor)
          ),
          _defineProperty(
            _style,
            'box-shadow',
            ''
              .concat(this.borderThickness, 'px ')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderColor, ', ')
              .concat(this.borderThickness, 'px -')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderColor, ', -')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderColor, ', -')
              .concat(this.borderThickness, 'px -')
              .concat(this.borderThickness, 'px ')
              .concat(this.borderColor)
          ),
          _style),
      },
      {
        tagName: 'a',
        attr: {
          href: '#',
          class: 'pageTop_anchor',
        },
        parents: '#pageTop',
        style:
          ((_style2 = {
            color: this.textColor,
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
          _defineProperty(_style2, 'fontSize', this.fontSize + 'px'),
          _defineProperty(_style2, 'position', 'absolute'),
          _defineProperty(_style2, 'top', '0'),
          _defineProperty(_style2, 'left', '0'),
          _defineProperty(_style2, 'width', '100%'),
          _defineProperty(_style2, 'height', '100%'),
          _style2),
      },
      {
        tagName: 'div',
        attr: {
          class: 'inner',
        },
        parents: '.pageTop_anchor',
        style:
          ((_style3 = {
            'text-align': 'center',
            'padding-top': '0px',
          }),
          _defineProperty(
            _style3,
            'padding-top',
            ''.concat(this.triangleBaseSize * 0.4, 'px')
          ),
          _defineProperty(_style3, 'height', '76.5%'),
          _style3),
      },
      {
        tagName: 'div',
        attr: {
          class: 'triangle',
        },
        parents: '.inner',
        style: {
          width: '0',
          height: 0,
          'border-style': 'solid',
          'border-width': '0 '
            .concat(this.triangleBaseSize * 2, 'px ')
            .concat(this.triangleBaseSize * 3, 'px ')
            .concat(this.triangleBaseSize * 2, 'px'),
          'border-color': 'transparent transparent '.concat(
            this.textColor,
            ' transparent'
          ),
          margin: '0px auto',
        },
      },
      {
        tagName: 'p',
        attr: {},
        textContent: 'TOP',
        parents: '.inner',
        style: {
          'font-family': 'Meiryo',
          'font-weight': this.fontWeight,
          'line-height': 1.15,
          margin: 0,
          padding: ''.concat(this.fontSize * 0.4, 'px 0 0'),
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
            var isIntersecting = entry[0].isIntersecting;
            topBtn.style.transform = 'translateX('.concat(
              -(this.size + this.marginRight) * +isIntersecting,
              'px)'
            );
            topBtn.style.opacity = ''.concat(+isIntersecting);
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
