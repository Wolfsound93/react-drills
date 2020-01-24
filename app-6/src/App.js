import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ''
    };
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  addButton = () => {
    const { list, input } = this.state;
    this.setState({ list: [...list, input] });
  };

  render() {
    const { list } = this.state;
    return (
      <div className='App'>
        <h1>My to-do List:</h1>

        <div>
          <input onChange={this.handleChange} />
          <button onClick={this.addButton}>Add Task!</button>
        </div>
        <br />
        <br />
        <Todo listProp={list} />
      </div>
    );
  }
}

export default App;
