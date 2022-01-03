import { elementGenerator } from './elementGenerator.js';

export class PageTop {
  constructor({
    baseColor,
    borderColor,
    borderThickness,
    borderRadius,
    fontWeight,
    marginRight,
    marginBottom,
    size,
    textColor,
    transition,
  }) {
    this.baseColor = baseColor || '#040';
    this.borderColor = borderColor || '#FFF';
    this.borderThickness = borderThickness ?? 1;
    this.fontWeight = fontWeight || '500';
    this.marginBottom = marginBottom ?? 20;
    this.marginRight = marginRight ?? 20;
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
          '-webkit-box-shadow': `${this.borderThickness}px ${this.borderThickness}px ${this.borderColor}, ${this.borderThickness}px -${this.borderThickness}px ${this.borderColor}, -${this.borderThickness}px ${this.borderThickness}px ${this.borderColor}, -${this.borderThickness}px -${this.borderThickness}px ${this.borderColor}`,
          'box-shadow': `${this.borderThickness}px ${this.borderThickness}px ${this.borderColor}, ${this.borderThickness}px -${this.borderThickness}px ${this.borderColor}, -${this.borderThickness}px ${this.borderThickness}px ${this.borderColor}, -${this.borderThickness}px -${this.borderThickness}px ${this.borderColor}`,
          'line-height': 1.15,
        },
      },
      {
        tagName: 'a',
        attr: {
          href: '#',
          id: 'pageTop_anchor',
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
          id: 'pageTop_inner',
        },
        parents: '#pageTop_anchor',
        style: {
          'text-align': 'center',
          'padding-top': `0px`,
          'padding-top': `${this.triangleBaseSize * 0.4}px`,
        },
      },
      {
        tagName: 'div',
        attr: {
          class: 'triangle',
        },
        parents: '#pageTop_inner',
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
        parents: '#pageTop_inner',
        style: {
          'font-family': 'Meiryo',
          'font-weight': this.fontWeight,
          margin: 0,
          padding: `${this.fontSize * 0.4}px 0 0`,
        },
      },
    ];
    this._init();
  }
  _init() {
    // ボタンの生成
    elementGenerator(this.elementSource);

    // ボタンの出し入れ
    const topBtn = document.getElementById('pageTop');
    const observer = new IntersectionObserver(
      function (entry) {
        const isIntersecting = entry[0].isIntersecting;
        topBtn.style.transform = `translateX(${
          -(this.size + this.marginRight) * +isIntersecting
        }px)`;
        topBtn.style.opacity = `${+isIntersecting}`;
      }.bind(this),
      { rootMargin: '0px 0px -100%' }
    );
    observer.observe(document.body);

    // ボタンホバー時のエフェクト
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
