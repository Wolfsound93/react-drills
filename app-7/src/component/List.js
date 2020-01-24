import React, { Component } from 'react';
import Todo from './ToDo';

class List extends Component {
  render() {
    let list = this.props.tasks.map((val, index) => {
      return <Todo key={index} task={val} />;
    });

    return <div>{list}</div>;
  }
}

export default List;
