import React, { Component } from 'react';

class InputFiled extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = value => {
    this.setState({ message: value });
  };

  render() {
    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default InputFiled;
