import React from 'react';
import Board from '../Board'

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spot: -1,
      letter: null,
      try: 0,
    }
    // this.word=""
    this.printCurrentStates()
  }

  printCurrentStates(){
    console.log("Current Spot: "+this.state.spot);
    console.log("Current Letter: "+this.state.letter);
    console.log("Current Try: "+this.state.try);
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

    if (keyCode === 10){
      this.newLine(e);
    }
  }

  typedLetter = function(letter){
    this.setState({spot: (this.state.spot<4) ? this.state.spot+1 : this.state.spot, letter: letter});
    // this.word += letter;
    this.printCurrentStates()
  }

  backSpace(e){
    if (this.state.spot > 0){
      this.setState({spot: this.state.spot-1});
      // this.word = this.word.substring(0, (this.word.length)-1);
      this.printCurrentStates();
    }
  }

  newLine(e){
    if(this.state.spot === 4) {
      this.setState({
        try: (this.state.try<6) ? this.state.try+1 : this.state.try,
        spot: 0,
        letter: null,
      })
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  render() {
    return (
      /* event handler? */
      <div className="game">
        <div className="game-board">
          <p>Hello, this is Wordle. </p>
          <Board value={this.state} />
        </div>
      </div>
    );
  }
}