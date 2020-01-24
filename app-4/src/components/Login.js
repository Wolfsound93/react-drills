import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = name => {
    this.setState({ username: name });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  handleLogin = () => {
    alert(`user name: ${this.state.username} Password: ${this.state.password}`);
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleUsernameChange(e.target.value)}
          type='text'
          placeholder='username'
        />
        <input
          onChange={e => this.handlePasswordChange(e.target.value)}
          type='text'
          placeholder='password'
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
