import React from 'react'

var gasstesons =react.createClass({
  gasstationsdata: function(){
    $.ajax({
      url: this.props.url,
      cache: false,
      type: 'GET',
      dataType: 'json',
      success: function(incomingData) {
        this.setState({data: incomingData});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getinitialState: function(){
    return {thegasdata:[]}
  },
  oncomponentdidmount:function(){
    this.getgasstationsdata();
  },
  render: function(){
      return();
  }
});

export default gasstesons;
