import React, { Component } from 'react'

class Counter extends Component {
  // YOUR CODE GOES BELOW
  constructor(props) {
    super(props);
  
    this.state = {
      count: props.count ? props.count : 0
    }
    this.decrementCount = this.decrementCount.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
  }

  decrementCount() {
    return this.setState((state) => {return {count: state.count - 1}})
  }

  incrementCount() {
    return this.setState((state) => {return {count: state.count + 1}})
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.decrementCount}>Decrement Count</button>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>      
    )
  }
}

export default Counter
