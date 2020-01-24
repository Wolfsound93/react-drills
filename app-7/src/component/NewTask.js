import React, { Component } from 'react';

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  handleClick = value => {
    this.setState({ input: value });
  };

  handleAdd = () => {
    const { input } = this.state;

    this.props.addTaskProp(input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <input
          value={input}
          placeholder='Enter new task'
          onChange={e => this.handleClick(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;
