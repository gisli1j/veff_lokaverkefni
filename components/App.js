import React from 'react'
import { render } from 'react-dom'
import CommentBox from './CommentBox'
import Header from './header'
import Footer from './Footer'

var App = React.createClass({
  render: function(){
    return (
    <div>
     <Header />
     <CommentBox url="/api/comments" pollInterval={2000} />
     <Footer />
    </div>
  );
  }
});

export default App;
