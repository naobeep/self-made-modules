import { IOConstructor } from '../../../IntersectionObserverConstructor/module/js/IOConstructor.js';
import { elementGenerator } from './elementGenerator.js';
import { smoothScroll } from '../../../smoothScroll/module/js/smoothScroll_module.js';

const elementSource = [
  {
    tagName: 'div',
    attr: {
      id: 'pageTop',
      class: 'page_top',
    },
    style: {
      width: '50px',
      height: '50px',
      position: 'fixed',
      bottom: '20px',
      right: '-51px',
      'border-radius': '10px',
      color: '#fff',
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
      transition: '.3s linear',
      opacity: '0',
      'background-color': '#3c0e92',
      '-webkit-box-shadow':
        '1px 1px #000, 1px -1px #000, -1px 1px #000, -1px -1px #000',
      'box-shadow':
        '1px 1px #000, 1px -1px #000, -1px 1px #000, -1px -1px #000',
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
      color: '#fff',
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
      'border-width': '0 10px 15px 10px',
      'border-color': 'transparent transparent #ffffff transparent',
      margin: '0px auto',
    },
  },
  {
    tagName: 'p',
    attr: {},
    textContent: 'TOP',
    parents: '.inner',
    style: {
      'margin-top': '8px',
    },
  },
];

elementGenerator(elementSource);
smoothScroll();

const topBtn = document.getElementById('pageTop');
const methodsList = ['remove', 'add'];

const hoge = new IOConstructor({
  target: 'body',
  callback: function (entry) {
    topBtn.classList[methodsList[+entry[0].isIntersecting]]('appear');
  },
  options: { rootMargin: '0px 0px -100%' },
});
