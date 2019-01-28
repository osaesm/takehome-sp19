import React, { Component } from 'react'
import Instructions from './Instructions'
import Show from './Show'
import Counter from './Counter'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [
        { id: 1, name: "Game of Thrones", episodes_seen: 0 },
        { id: 2, name: "Naruto", episodes_seen: 220 },
        { id: 3, name: "Black Mirror", episodes_seen: 3 },
      ],
      nextId: 4,
      newName: '',
    }
    
    this.addShow = this.addShow.bind(this)
  }

  addShow() {
    if (this.state.newName) {
      this.setState((state) => {return {shows: state.shows.concat([{id: state.nextId, name: state.newName, episodes_seen: 0}]), nextId: state.nextId + 1}})
    }
  }
  render() {
    return (
      <div className="dont-hug-left">
        <Instructions complete />
        <Counter />
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}
        <input type='text' onChange={(e) => this.setState({newName: e.target.value})}/>
        <button onClick={this.addShow} type='button'>Add new show</button>
      </div>
    )
  }
}

export default App
