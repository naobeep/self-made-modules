// usage
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

import { elementGenerator } from './elementGenerator.js';

export class PageTop {
  constructor(enteredSettings) {
    const defaultSettings = {
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
    this.settings = {
      ...defaultSettings,
      ...enteredSettings,
    };
    this.settings.fontSize = (this.settings.size / 50) * 15;
    this.settings.borderRadius =
      enteredSettings.borderRadius ?? this.settings.size / 5;
    this.settings.triangleBaseSize = (this.settings.size / 50) * 5;
    this.elementSource = [
      {
        tagName: 'div',
        attr: {
          id: 'pageTop',
          class: 'page_top',
        },
        style: {
          width: this.settings.size + 'px',
          height: this.settings.size + 'px',
          position: 'fixed',
          bottom: this.settings.marginBottom + 'px',
          right: -(this.settings.size + 1) + 'px',
          'border-radius': this.settings.borderRadius + 'px',
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
          transition: this.settings.transition,
          opacity: '0',
          'background-color': this.settings.baseColor,
          '-webkit-box-shadow': `${this.settings.borderThickness}px ${this.settings.borderThickness}px ${this.settings.borderColor}, ${this.settings.borderThickness}px -${this.settings.borderThickness}px ${this.settings.borderColor}, -${this.settings.borderThickness}px ${this.settings.borderThickness}px ${this.settings.borderColor}, -${this.settings.borderThickness}px -${this.settings.borderThickness}px ${this.settings.borderColor}`,
          'box-shadow': `${this.settings.borderThickness}px ${this.settings.borderThickness}px ${this.settings.borderColor}, ${this.settings.borderThickness}px -${this.settings.borderThickness}px ${this.settings.borderColor}, -${this.settings.borderThickness}px ${this.settings.borderThickness}px ${this.settings.borderColor}, -${this.settings.borderThickness}px -${this.settings.borderThickness}px ${this.settings.borderColor}`,
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
          color: this.settings.textColor,
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
          'padding-top': `${this.settings.triangleBaseSize * 0.4}px`,
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
          'border-width': `0 ${this.settings.triangleBaseSize * 2}px ${
            this.settings.triangleBaseSize * 3
          }px ${this.settings.triangleBaseSize * 2}px`,
          'border-color': `transparent transparent ${this.settings.textColor} transparent`,
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
          padding: `${this.settings.fontSize * 0.4}px 0 0`,
          fontSize: this.settings.fontSize + 'px',
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
        const isAppear = entry[0].boundingClientRect.top < 0;
        topBtn.style.transform = `translateX(${
          -(this.settings.size + this.settings.marginRight) * +isAppear
        }px)`;
        topBtn.style.opacity = `${+isAppear}`;
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
