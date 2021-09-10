import React, { Component } from 'react'
import PlaySound from './PlaySound'
import { connect } from 'react-redux';
import { resetAction } from '../actions';

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoro: {
        timeWork: 25,
        pausaCurta: 5,
        paulaLonga: 10,
        ciclos: 8,
      },
      /* hours: 0, */
      minutes: 24,
      seconds: 45,
      quantidadeCiclos: 1,
      pausa: false,
      pausaLonga: false,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({seconds: prevState.seconds + 1}))
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    const { pomodoro, reset } = prevProps;
    if (prevState.seconds === 59) {
      this.setState((prevState) => ({minutes: prevState.minutes + 1}));
      this.setState((prevState) => ({seconds: 0}));
    }
    if (prevState.seconds === 59 && prevState.minutes === pomodoro.timeWork - 1) {
      this.setState((prevState) => ({minutes: 0}));
      this.setState((prevState) => ({seconds: 0}));
      this.setState((prevState) => ({pausa: true}));
      this.setState((prevState) => ({quantidadeCiclos: prevState.quantidadeCiclos + 1}));
      // this.setState((prevState) => ({hours: 1}));
    }
    // if (prevState.hours === 23 && prevState.minutes === 59 && prevState.seconds === 59) {
    //   this.setState((prevState) => ({minutes: 0}));
    //   this.setState((prevState) => ({seconds: 0}));
    //   this.setState((prevState) => ({hours: 0}));
    // }
    if (prevState.pausa === true && prevState.seconds === 59 && prevState.minutes === prevState.pomodoro.pausaCurta - 1) {
      this.setState((prevState) => ({minutes: 0}));
      this.setState((prevState) => ({seconds: 0}));
      this.setState((prevState) => ({pausa: false}));
      // this.setState((prevState) => ({hours: 1}));
    }
    if (prevState.seconds === 59 && 
      prevState.minutes === pomodoro.timeWork - 1 &&
      prevState.quantidadeCiclos === prevProps.pomodoro.ciclos) {
        this.setState((prevState) => ({minutes: 0}));
        this.setState((prevState) => ({seconds: 0}));
        this.setState((prevState) => ({pausaLonga: true}));
      }
    if (prevState.paulaLonga === true &&
      prevState.minutes === pomodoro.paulaLonga - 1 &&
      prevState.seconds === 59) {
        this.setState((prevState) => ({minutes: 0}));
        this.setState((prevState) => ({seconds: 0}));
        this.setState((prevState) => ({pausaLonga: false}));
        reset({
          timeWork: 25,
          pausaCurta: 5,
          pausaLonga: 30,
          ciclos: 8,
          ativo: false,
        });
      };
  }

  render() {
    const { minutes, seconds, quantidadeCiclos, pausa } = this.state;
    const { pomodoro } = this.props;
    return (
      <div>
        { minutes === pomodoro.timeWork - 1  && seconds > 50 ? <PlaySound /> : ''}
        { pausa ? <h1>Pausa curta</h1> : <h1>Ciclo { quantidadeCiclos }</h1>}
        <h1>{ minutes < 10 ? 0 : ''}{ minutes }: { seconds < 10 ? 0 : ''}{ seconds }</h1>
        <br />
        <ul>
          <li>Tempo focado: { pomodoro.timeWork }</li>
          <li>Pausa curta: { pomodoro.pausaCurta }</li>
          <li>Pausa longa: { pomodoro.pausaLonga }</li>
          <li>Quantidade de ciclos: { pomodoro.ciclos }</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pomodoro: state.time.time,
});

const mapDispatchToProps = (dispatch) => ({
  reset: (payload) => dispatch(resetAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cronometro)