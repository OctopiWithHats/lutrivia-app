import React, { Component } from 'react';
import Header from './Header'
import GameContainer from './GameContainer'
import data from './data'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     answerMatch: false
  //   }
  //   this.checkAnswers = this.checkAnswers.bind(this)
  // }

  render() {
    // checkAnswers(event) {
    //   return {
    //     console.log(this.value)
    //   }
    // }

    let green = {
      backgroundColor: 'green'
    }
    const questionsList = data.questions.map(question => {
      let answer = question.answer
      return <li key={question.text}>
        {question.text}
        <button value="true" onClick={(event) => {
            event.target.value == answer.toString() ? event.target.style.backgroundColor = "green" : event.target.style.backgroundColor = "red"
          }}>True</button>
        <button value="false" onClick={(event) => {
            event.target.value == answer.toString() ? event.target.style.backgroundColor = "green" : event.target.style.backgroundColor = "red"
          }}>False</button>
      </li>
    }).slice(0, 5)

    return (
      <div>
        <Header />
        <GameContainer questions={questionsList} />

      </div>
    );
  }
}

export default App;
