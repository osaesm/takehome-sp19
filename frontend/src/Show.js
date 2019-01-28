import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  // YOUR CODE GOES BELOW

  render() {
    return (
      <div>
        <b><i>{this.props.name}</i></b>
        <Counter count={this.props.episodes_seen} />
      </div>
    )
  }
}

export default App
