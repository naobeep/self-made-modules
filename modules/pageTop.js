import { IOConstructor } from './IOConstructor.js';
import { elementGenerator } from './elementGenerator.js';

export class PageTop {
  constructor({
    baseColor,
    borderColor,
    borderRadius,
    fontWeight,
    marginRight,
    marginBottom,
    size,
    textColor,
    transition,
  }) {
    this.baseColor = baseColor || '#040';
    this.borderColor = borderColor || '#000';
    this.fontWeight = fontWeight || '500';
    this.marginBottom = marginBottom ?? 20;
    this.marginRight = marginRight ?? 10;
    this.size = size ?? 50;
    this.textColor = textColor || '#fff';
    this.transition = transition || '.3s linear';
    this.borderRadius = borderRadius ?? this.size / 5;
    this.fontSize = (this.size / 50) * 15;
    this.triangleBaseSize = (this.size / 50) * 5;
    this.elementSource = [
      {
        tagName: 'div',
        attr: {
          id: 'pageTop',
          class: 'page_top',
        },
        style: {
          width: this.size + 'px',
          height: this.size + 'px',
          position: 'fixed',
          bottom: this.marginBottom + 'px',
          right: -(this.size + 1) + 'px',
          'border-radius': this.borderRadius + 'px',
          display: '-webkit-box',
          display: '-ms-flexbox',
          display: 'flex',
          '-webkit-box-pack': 'center',
          '-ms-flex-pack': 'center',
          'justify-content': 'center',
          '-webkit-box-align': 'center',
          '-ms-flex-align': 'center',
          'align-items': 'center',
          '-webkit-transition': '.3s linear',
          transition: this.transition,
          opacity: '0',
          'background-color': this.baseColor,
          '-webkit-box-shadow': `1px 1px ${this.borderColor}, 1px -1px ${this.borderColor}, -1px 1px ${this.borderColor}, -1px -1px ${this.borderColor}`,
          'box-shadow': `1px 1px ${this.borderColor}, 1px -1px ${this.borderColor}, -1px 1px ${this.borderColor}, -1px -1px ${this.borderColor}`,
        },
      },
      {
        tagName: 'a',
        attr: {
          href: '#',
          class: 'pageTop_anchor',
        },
        parents: '#pageTop',
        style: {
          color: this.textColor,
          'text-decoration': 'none',
          display: '-webkit-box',
          display: '-ms-flexbox',
          display: 'flex',
          '-webkit-box-pack': 'center',
          '-ms-flex-pack': 'center',
          'justify-content': 'center',
          '-webkit-box-align': 'center',
          '-ms-flex-align': 'center',
          'align-items': 'center',
          fontSize: this.fontSize + 'px',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        },
      },
      {
        tagName: 'div',
        attr: {
          class: 'inner',
        },
        parents: '.pageTop_anchor',
        style: {
          'text-align': 'center',
          'padding-top': `${this.triangleBaseSize * 0.8}px`,
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
          'border-width': `0 ${this.triangleBaseSize * 2}px ${
            this.triangleBaseSize * 3
          }px ${this.triangleBaseSize * 2}px`,
          'border-color': `transparent transparent ${this.textColor} transparent`,
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
  _init() {
    elementGenerator(this.elementSource);
    const topBtn = document.getElementById('pageTop');
    const size = this.size;
    const marginRight = this.marginRight;
    new IOConstructor({
      target: 'body',
      callback: function (entry) {
        const isIntersecting = entry[0].isIntersecting;
        topBtn.style.transform = `translateX(${
          -(size + marginRight) * +isIntersecting
        }px)`;
        topBtn.style.opacity = +isIntersecting;
      },
      options: { rootMargin: '0px 0px -100%' },
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
  }
}
