import React from 'react';
import ReactDOM from 'react-dom';
import image from './images/images.jpeg';
import './search.less';

class Search extends React.Component{
  render() {
    return <div>
      search
      <img src={image} alt='图片'/>
    </div>
  }
}

ReactDOM.render(<Search/>, document.getElementById('app'));