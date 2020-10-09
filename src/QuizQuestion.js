import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {

    render() { 
        return (
            <main>
                <section>
                <p>
                    {this.props.quiz_question.instruction_text}
                </p>
                </section>
                <section className="buttons">
                
                <ul>
                    {this.props.quiz_question.answer_options.map((answer_options, index) => (
                        <li key={index}>
                            <QuizQuestionButton button_text={answer_options} />
                        </li>
                    ))}
                </ul>
                </section>
            </main>
        );
    }    

    handleClick (button_text) {
        console.log(button_text);
        //console.log(button_text);
    }
}

export default QuizQuestion
