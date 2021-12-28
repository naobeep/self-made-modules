const topBtn = document.getElementById('pageTop');
const methodsList = ['remove', 'add'];
const elementSource = [
  {
    tagName: 'div',
    id: 'pageTop',
    className: 'page_top',
  },
  {
    tagName: 'a',
    href: '#',
  },
  {
    tagName: 'div',
    className: 'inner',
  },
  {
    tagName: 'div',
    className: 'triangle',
  },
  {
    tagName: 'p',
    textContent: 'TOP',
  },
];
const btnElements = [];

for (const obj of elementSource) {
  console.log(obj);
  const element = document.createElement(obj.tagName);
  obj.id && element.setAttribute('id', obj.id);
  obj.href && element.setAttribute('href', obj.href);
  obj.className && element.classList.add(obj.className);
  element.textContent = obj.textContent;
  btnElements.push(element);
}
console.log(btnElements);

const hoge = new IOConstructor({
  target: 'body',
  callback: function (entry) {
    topBtn.classList[methodsList[+entry[0].isIntersecting]]('appear');
  },
  options: { rootMargin: '0px 0px -100%' },
});
