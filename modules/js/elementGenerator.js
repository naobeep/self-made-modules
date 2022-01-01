const body = document.querySelector('body');

export const elementGenerator = elementSource => {
  for (const obj of elementSource) {
    const element = document.createElement(obj.tagName);
    for (const key in obj.attr) {
      element.setAttribute(key, obj.attr[key]);
    }
    element.textContent = obj.textContent ?? null;
    for (const key in obj.style) {
      element.style[key] = obj.style[key];
    }

    obj.parents
      ? document.querySelector(obj.parents).append(element)
      : body.append(element);
  }
};
