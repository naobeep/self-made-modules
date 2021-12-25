import { IOConstructor } from './moduleA';
const options = { once: false, className: 'targetIsIntersecting' };
const boxObserver = new IOConstructor({
  target: '.box',
  options: options,
});
