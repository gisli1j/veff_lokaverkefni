import React from 'react'
import { render } from 'react-dom'
import App from './App'

var routerr = React.createClass({
  render: function(){
    return (
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
  );
  }
});
export default routerr;
