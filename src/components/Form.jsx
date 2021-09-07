import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInfoTimeAction } from '../actions';
import PlayRap from './PlayRap';
import PlayJazz from './PlayJazz';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeWork: 25,
      pausaCurta: 5,
      pausaLonga: 30,
      ciclos: 8,
      ativo: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickInfo = this.handleClickInfo.bind(this);
    this.handleInterruption = this.handleInterruption.bind(this);
  }

  handleChange(event) {
    const key = event.target.name;
    this.setState({ [key]: event.target.value })
  }

  handleClickInfo() {
    const { timeWork, pausaCurta, pausaLonga, ciclos, ativo } = this.state;
    const { getInfoTimeProps } = this.props;
    if (Number(timeWork) < 25 || Number(timeWork) > 50) {
      return alert('É recomendado que o tempo de foco seja de 25 a 50 minutos!')
    } else if (Number(pausaCurta) < 5 || Number(pausaCurta) > 10){
      return alert('É recomendado que o tempo de pausa curta seja de 5 a 10 minutos!')
    } else if (Number(pausaLonga) < 20 || Number(pausaLonga) > 45){
      return alert('É recomendado que o tempo de pausa longa seja de 20 a 45 minutos!')
    } else if (Number(ciclos) < 2 || Number(ciclos) > 8){
      return alert('É recomendado que seja feito de 2 a 8 ciclos!')
    }
    getInfoTimeProps({ timeWork, pausaCurta, pausaLonga, ciclos, ativo: true });
    this.setState({ ativo: true })
  }

  handleInterruption() {
    const { getInfoTimeProps } = this.props;
    this.setState({
      timeWork: 25,
      pausaCurta: 5,
      pausaLonga: 30,
      ciclos: 8,
      ativo: false,
      selectMusic: '',
    });
    getInfoTimeProps({ timeWork: 25,
      pausaCurta: 5,
      pausaLonga: 30,
      ciclos: 8,
      ativo: false, });
  }

  render() {
    const { timeWork, pausaCurta, pausaLonga, ciclos, ativo, selectMusic } = this.state;
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
          Pausa curta(minutos):
          <input
            value={ pausaCurta } 
            type="number"
            id="pausaCurta"
            name="pausaCurta"
            onChange={ this.handleChange } 
          />
        </label>
        <label htmlFor="pausa">
          Pausa longa(minutos):
          <input
            value={ pausaLonga } 
            type="number"
            id="pausaLonga"
            name="pausaLonga"
            onChange={ this.handleChange } 
          />
        </label>
        <label htmlFor="ciclos">
          Número de ciclos:
          <input
            value={ ciclos } 
            type="number"
            id="ciclos"
            name="ciclos"
            onChange={ this.handleChange } 
          />
        </label>
        <button 
          type="button"
          onClick={ this.handleClickInfo }
          disabled ={ ativo ? true : false }
        >
          Começar
        </button>
        <button
          type="button"
          onClick={ this.handleInterruption }
          disabled ={ ativo ? false : true }
        >
          Interromper
        </button>
        <label htmlFor="selectMusic">
          <select 
            name="selectMusic" 
            id="selectMusic"
            value={ selectMusic }
            onChange={ this.handleChange }
          >
            <option value="nenhuma">Nenhuma</option>
            <option value="rap">Rap</option>
            <option value="jazz">Jazz</option>
          </select>
        </label>
        { selectMusic==='rap' ? <PlayRap /> : '' }
        { selectMusic==='jazz' ? <PlayJazz /> : '' }
      </form>
    )
  }
}

Form.propTypes = {
  getInfoTimeProps: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  getInfoTimeProps: (payload) => dispatch(getInfoTimeAction(payload))
})

export default connect(null, mapDispatchToProps)(Form)
