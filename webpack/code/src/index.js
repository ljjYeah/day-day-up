import './style/style1.css';
import './style/style2.less';

import moment from 'moment';
import 'moment/locale/zh-cn'; // 手动引入中文语言包
moment.locale('zh-cn');
console.log('locale', moment.locale());
console.log('date', moment().format('ll'));

import { sum } from './math';

const sumResult = sum(10,20);
console.log(sumResult);

// if(module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10,10);
//         console.log(sumRes);
//     })
// }

// import _ from 'lodash';
// console.log(_.forEach);
//
// console.log('window.ENV', ENV);
//
// function insertImgElem(imgFile) {
//     const img = new Image();
//     img.src = imgFile;
//     document.body.appendChild(img);
// }
//
// import img1 from './img/1.png';
// insertImgElem(img1);
//
// import img2 from './img/2.jpeg';
// insertImgElem(img2);
//
// // 动态引入数据，懒加载
// setTimeout(() => {
//     import('./dynamic-data').then(res=>{
//         console.log(res.default.message);
//     })
// }, 1500);

