import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <p className="square">
        {this.state.value}
      </p>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
  }
  renderSquare(i) {
    return <Square value={i} />;
  }

  render(){
    let sqrRen = [];
    for(let i = 0; i < 30; i=i+5){
      sqrRen.push(<div className = "board-row">
        {this.renderSquare(0+i)}
        {this.renderSquare(1+i)}
        {this.renderSquare(2+i)}
        {this.renderSquare(3+i)} 
        {this.renderSquare(4+i)}  
      </div>);
    }
    return (
      <div>
          <p>Hello, this is Wordle. </p>
          {/* <p>You are currently on square: {this.props.value.spot}<br></br>
          You assigned the letter: {this.props.value.key}</p> */}
          {sqrRen}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spot: 0,
      key: null,
    }
    this.typedLetter = this.typedLetter.bind(this);
    this.backSpace = this.backSpace.bind(this);
  }

  typedLetter(){
    /* action when a letter is pressed */
  }

  backSpace(){
    /* action when backspace is pressed */
  }

  render() {
    return (
      /* event handler? */
      <div className="game">
        <div className="game-board">
          <Board value={this.state} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
