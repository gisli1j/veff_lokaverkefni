import React from 'react'
import { render } from 'react-dom'
import CommentBox from './CommentBox'
import Header from './header'
import Footer from './Footer'
import Petrol from './Petrol'



var App = React.createClass({
  render: function(){
    return (
    <div>
     <Header />
     {this.props.children}
     <Footer />
    </div>
  );
  }
});

export default App;
