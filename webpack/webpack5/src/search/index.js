import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import image from '../images/images.jpeg';
import './search.less';
import 'core-js';
import 'regenerator-runtime/runtime';

const Search = () => {
  const [Test, setTestContent] = useState(null);
  
  const loadTest = () => {
    import('./Test').then(TestContent => {
      console.log(TestContent.default);
      setTestContent(TestContent.default);
    })
    
  }
  return <div className={'container'}>
    search3232
    {
      Test && <Test/>
    }
    <img src={image} alt='图片' onClick={loadTest}/>
  </div>
}

ReactDOM.render(<Search/>, document.getElementById('app'));


//
// ƒ Test() {
//   return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "\u52A8\u6001");
// }