import React from 'react';

export default class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      letter: this.props.letter,
    }
  }
  render() {
    return (
      <button className="square">
        {this.state.letters}
      </button>
    );
  }
}