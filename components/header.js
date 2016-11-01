import React from 'react'


var header = React.createClass({
      render: function() {
        var hdstyle={
          border:'solid red'
        };
        return (
          <div style={hdstyle}>
             <h2>þeta er heder</h2>
          </div>
        );
  }
});

export default header;
