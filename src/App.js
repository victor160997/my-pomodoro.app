import React, { Component } from 'react';
import Cronometro from './components/Cronometro';
import Form from './components/Form';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Cronometro />
      </div>
    )
  }
}

