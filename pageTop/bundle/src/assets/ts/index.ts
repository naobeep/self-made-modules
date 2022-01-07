require('intersection-observer');
import { PageTop } from './pageTop';
import { smoothScroll } from './smoothScroll_module';

const settings = {
  // baseColor: '#14641e', //  string
  // borderColor: '#fff', //  string
  // borderRadius: 10, //  number
  // borderThickness: 1,  //  number
  // fontWeight: '500', //  string
  // marginRight: 20, //  number
  // marginBottom: 20,  //  number
  // size: 50,  //  number
  // textColor: '#fff', //  string
  // transition: '.3s linear',  //  string
};
new PageTop(settings);

smoothScroll();
