import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeWork: 0,
      timePausa: 0,
      ciclos: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    this.setState({ [key]: event.target.value })
  }

  render() {
    const { timeWork, timePausa, ciclos } = this.state;
    return (
      <form>
        <label htmlFor="work">
          Tempo Focado:
          <input 
            value={ timeWork }
            type="number"
            id="work"
            name="timeWork" 
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="pausa">
          Tempo de pausa:
          <input
            value={ timePausa } 
            type="number"
            id="pausa"
            name="timePausa"
            onChange={ this.handleChange } 
          />
        </label>
        <label htmlFor="ciclos">
          Quantos ciclos:
          <input
            value={ ciclos } 
            type="number"
            id="ciclos"
            name="ciclos"
            onChange={ this.handleChange } 
          />
        </label>
        <button type="button">Começar</button>
      </form>
    )
  }
}
