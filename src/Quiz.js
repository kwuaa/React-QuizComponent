import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1}
        this.showNextQuestion  = this.showNextQuestion.bind(this);
    }

    render() {
        console.log("rendering");
        //const isQuizEnd = (quizData.quiz_questions.length === (this.state.quiz_position-1))
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)

        return ( 
            <div>
                {isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />}
            </div>
        )
    }

    showNextQuestion() {
        console.log("change state");
        this.setState((state) => {
          return { quiz_position: state.quiz_position + 1 }
        })
     }
}

export default Quiz
