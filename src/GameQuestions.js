import React, { Component } from "react"

class GameQuestions extends Component {
  render() {
    return (
      <ul>
        {this.props.questions}
      </ul>
    )
  }
}

export default GameQuestions
