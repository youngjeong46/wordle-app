import React from 'react';
import Square from '../Square'

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spot: this.props.spot,
      letter: this.props.letter,
      try: this.props.try,
    }
  }
  renderSquare(i) {
    return <Square key={i.toString()} value={this.state} />;
  }

  render(){
    let sqrRen = [];
    for(let i = 0; i < 6; i=i+1){
      sqrRen.push(<div key={i} className = "board-row">
        {this.renderSquare(0+5*i)}
        {this.renderSquare(1+5*i)}
        {this.renderSquare(2+5*i)}
        {this.renderSquare(3+5*i)} 
        {this.renderSquare(4+5*i)}  
      </div>);
    }
    return (
      <div>
          {sqrRen}
      </div>
    );
  }
}