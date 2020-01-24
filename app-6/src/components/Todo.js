import React, { Component } from 'react';

class Todo extends Component {
  render() {
    let mappedList = this.props.listProp.map(val => {
      console.log(val);
      return <div>{val}</div>;
    });
    return (
      <div>
        <div>{mappedList}</div>
      </div>
    );
  }
}

export default Todo;
