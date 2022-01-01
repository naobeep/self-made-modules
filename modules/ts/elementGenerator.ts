const body = document.querySelector('body');

export const elementGenerator = (elementSource: any) => {
  for (const obj of elementSource) {
    const element = document.createElement(obj.tagName);
    for (const key in obj.attr) {
      element.setAttribute(key, obj.attr[key]);
    }
    element.textContent = obj.textContent ?? null;
    for (const key in obj.style) {
      element.style[key] = obj.style[key];
    }

    document.querySelector(obj.parents)?.appendChild(element) ??
      body!.appendChild(element);
  }
};
