import React from 'react'
import {ButtonToolbar,Button} from 'react-bootstrap'

var header = React.createClass({
      render: function() {
        var hdstyle={
          border:'solid red',
          backgroundColor: 'Crimson',
          fontSize: 45
        };
        return (
          <div style={hdstyle}>
             <h2>Welcomin á shíðu mína</h2>
             <ButtonToolbar>
                <Button bsStyle="primary" bsSize="large" href="https://github.com/gisli1j">till Gísla github</Button>
                <Button bsSize="large" href="https://github.com/gisli1j/skilaverkefni1">till Gísla github verkefnið sjálft</Button>
              </ButtonToolbar>
          </div>
        );
  }
});

export default header;
