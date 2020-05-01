import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
  value1: Math.floor(Math.random() * 100),
  value2: Math.floor(Math.random() * 100),
  value3: Math.floor(Math.random() * 100),
  proposedAnswer: Math.floor(Math.random() * 300),
  numQuestions: 0,
  numCorrect: 0,
  }

	createQuestion(){
          const v1 = Math.floor(Math.random() * 10);
  		  const v2 = Math.floor(Math.random() * 10);
          const v3 = Math.floor(Math.random() * 10);
    	this.setState((prevState)=>({
          value1: v1,
  		  value2: v2,
          value3: v3,
          proposedAnswer: Math.floor(Math.random() * 10) + v1 + v2 +v3,
    }))
    }

  Check(Ans){
    const { value1, value2, value3, proposedAnswer } = this.state;
  	if (value1 + value2 + value3 === proposedAnswer && Ans === true){
      	this.createQuestion()
    	this.setState((prevState)=>({
          numQuestions: prevState.numQuestions + 1,
  		  numCorrect: prevState.numCorrect + 1,
          
        }))
    }
    else if(value1 + value2 + value3 !== proposedAnswer && Ans ===false){
      	this.createQuestion()
    	this.setState((prevState)=>({
          numQuestions: prevState.numQuestions + 1,
  		  numCorrect: prevState.numCorrect + 1,
          
        }))
    }
	else{
      	this.createQuestion()
    	this.setState((prevState)=>({
          numQuestions: prevState.numQuestions + 1,
        }))
    }
  }
  render() {
    const {value1, value2, value3, proposedAnswer, numCorrect, numQuestions } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} =${proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.Check(true)}>True</button>
          <button onClick={()=>this.Check(false)}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
