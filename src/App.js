import React, { Component } from 'react';
// import './assets/style.css';
import {Container, Jumbotron} from 'react-bootstrap';
import quizService from './quizService';
import QuestionBox from './components/questionbox.component';
import Result from './components/result.component';

class QuizBee extends Component
{
	state = {
		questionBank: [],
		score: 0,
		response: 0,
	};

	getQuestions = () => {
		quizService().then(questions => {
			this.setState({
				questionBank: questions
			});
		});	
	};

	computeAnswer = (answer, correct) => {
		if(answer === correct)
			this.setState({
				score: this.state.score + 1
			});
		this.setState({
			response: this.state.response < 5 ? this.state.response + 1: 5
		});
	}

	playAgain = () => {
		this.getQuestions();
		this.setState({
			score: 0,
			response: 0
		});
	}

	componentDidMount() {
		this.getQuestions();
	}

	render() {
		return (
			<Container>
				<div className="my-5">
					<Jumbotron className="bg-dark text-white"><h1>QuizBee</h1></Jumbotron>
					{ this.state.questionBank.length > 0 && 
						this.state.response < 5 &&
						this.state.questionBank.map(
							({question, answers, correct, questionId}) => (
								<QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computeAnswer(answer, correct)} />
							)
					)}	
					{ this.state.response === 5 ? (<Result score={this.state.score} response={this.state.response} playAgain={this.playAgain} />):null }
					<div></div>			
				</div>
			</Container>
		);
	}
}

export default QuizBee;
