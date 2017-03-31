import React, { Component } from 'react'
import { browserHistory } from 'react-router'


class App extends Component {

  render() {
    return <div>
      <h1>Iron Glory ajax & Route Testing</h1>
      <a onClick={() => browserHistory.push('/categories/2')}>home</a>
      {this.props.children}
    </div>
  }
}

export default App;
