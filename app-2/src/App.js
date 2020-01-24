import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: ['Toyota', 'Honda', 'Mazda', 'Mercedes', 'BMW', 'Reno']
    };
  }

  render() {
    let showCars = this.state.cars.map((val, index) => {
      return <h1 key={index}>{val}</h1>;
    });

    return <div className='App'>{showCars}</div>;
  }
}

export default App;
