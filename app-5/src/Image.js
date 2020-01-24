import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} />
        <span>
          <h1>Error 100</h1>
        </span>
      </div>
    );
  }
}

export default Image;
