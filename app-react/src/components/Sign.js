import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Sign extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-background"></div>
          <div className="modal-content">
            Any other Bulma elements you want
          </div>
       <button className="modal-close"></button>
    </div>
    );
  }
}

export default Sign;