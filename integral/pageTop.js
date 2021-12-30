'use strict';

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
  function PageTop(_ref) {
    var _style, _style2;

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
    this.borderColor = borderColor || '#000';
    this.borderThickness =
      borderThickness !== null && borderThickness !== void 0
        ? borderThickness
        : 1;
    this.fontWeight = fontWeight || '500';
    this.marginBottom =
      marginBottom !== null && marginBottom !== void 0 ? marginBottom : 20;
    this.marginRight =
      marginRight !== null && marginRight !== void 0 ? marginRight : 10;
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
        style: {
          'text-align': 'center',
          'padding-top': ''.concat(this.triangleBaseSize * 0.8, 'px'),
        },
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
          'margin-top': this.fontSize * 0.4 + 'px',
          'font-weight': this.fontWeight,
        },
      },
    ];

    this._init();
  }

  _createClass(PageTop, [
    {
      key: '_init',
      value: function _init() {
        elementGenerator(this.elementSource);
        var topBtn = document.getElementById('pageTop');
        var size = this.size;
        var marginRight = this.marginRight;
        new IOConstructor({
          target: 'body',
          callback: function callback(entry) {
            var isIntersecting = entry[0].isIntersecting;
            topBtn.style.transform = 'translateX('.concat(
              -(size + marginRight) * +isIntersecting,
              'px)'
            );
            topBtn.style.opacity = +isIntersecting;
          },
          options: {
            rootMargin: '0px 0px -100%',
          },
        });
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
