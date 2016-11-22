import React from 'react'

var Footer = React.createClass({

  render:function(){
    var footerStyle = {
      border:'color green',
      marginTop:'20px'
    };
    return(
      <div style={footerStyle}>
      <h2>Gísli janus sem á þesa síðu og her er um mig er í fss og her firir neðan er github mit</h2>
      </div>

    );
  }
});

export default Footer;
