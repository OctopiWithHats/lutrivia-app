import React, { Component } from "react"
import CurrentScore from './CurrentScore'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Game name</h1>
        <button>New game</button>
        <CurrentScore />
      </div>
    )
  }
}


export default Header
