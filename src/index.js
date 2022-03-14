import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.key,
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
    for(let i = 0; i < 6; i=i+1){
      sqrRen.push(<div key={i} className = "board-row">
        {this.renderSquare(0+i*5)}
        {this.renderSquare(1+i*5)}
        {this.renderSquare(2+i*5)}
        {this.renderSquare(3+i*5)} 
        {this.renderSquare(4+i*5)}  
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
      key: 'A',
    }
    this.word=""
    this.typedLetter = this.typedLetter.bind(this);
    this.backSpace = this.backSpace.bind(this);
    this.printCurrentStates()
  }

  printCurrentStates(){
    console.log("Current Spot: "+this.state.spot);
    console.log("Current Word: "+this.word);
  }

  handleKeyDown(e) {
    const keyCode = e.keyCode;

    if (keyCode > 64 && keyCode < 91){
      let letter = String.fromCharCode(keyCode);
      this.typedLetter(letter);
    }

    if (keyCode === 8){
      this.backSpace(e);
    }
  }

  typedLetter = function(letter){
    console.log(letter)
    this.word += letter;
  }

  backSpace(e){
    if (this.state.spot > 0){
      this.setState({spot: this.state.spot-1});
      this.word = this.word.substring(0, (this.word.length)-1);
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown);
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
