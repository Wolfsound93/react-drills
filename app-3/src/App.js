import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filtered: '',
      countries: [
        'Usa',
        'Mexico',
        'Israel',
        'Brazil',
        'Russia',
        'Thailand',
        'India'
      ]
    };
  }

  handleChange(filter) {
    this.setState({ filtered: filter });
  }
  render() {
    let showCountries = this.state.countries
      .filter(val => {
        return val.includes(this.state.filtered);
      })
      .map((val, index) => {
        return <h2 key={index}>{val}</h2>;
      });

    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        {showCountries}
      </div>
    );
  }
}

export default App;
