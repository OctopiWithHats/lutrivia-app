import React, { Component } from "react"
import GameQuestions from './GameQuestions'
import SubmitForm from './SubmitForm'

class GameContainer extends Component {
  render() {
    return (
      <div>
        <GameQuestions questions={this.props.questions}/>
        <SubmitForm />
      </div>
    )
  }
}

export default GameContainer
