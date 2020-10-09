import React, { Component } from 'react'

class QuizQuestionButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick   = this.handleClick.bind(this);
    }

    render() {
        return (
            <li><button onClick={() => this.handleClick('me') }>{this.props.button_text}</button></li>
        );
    }   

    handleClick () {
        console.log(this.props.button_text);
        //console.log(button_text);
    }
}

export default QuizQuestionButton
