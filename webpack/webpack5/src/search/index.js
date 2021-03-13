import React from 'react';
import ReactDOM from 'react-dom';
import image from '../images/images.jpeg';
import './search.less';
import test from '../../common';

test()

class Search extends React.Component {
  render() {
    return <div className={'container'}>
      search3232
      <img src={image} alt='图片'/>
    </div>
  }
}

ReactDOM.render(<Search/>, document.getElementById('app'));