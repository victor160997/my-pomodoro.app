import React, { Component } from 'react'

export default class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({seconds: prevState.seconds + 1}))
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds === 59) {
      this.setState((prevState) => ({minutes: prevState.minutes + 1}));
      this.setState((prevState) => ({seconds: 0}));
    }
    if (prevState.seconds === 59 && prevState.minutes === 59) {
      this.setState((prevState) => ({minutes: 0}));
      this.setState((prevState) => ({seconds: 0}));
      this.setState((prevState) => ({hours: 1}));
    }
    if (prevState.hours === 23 && prevState.minutes === 59 && prevState.seconds === 59) {
      this.setState((prevState) => ({minutes: 0}));
      this.setState((prevState) => ({seconds: 0}));
      this.setState((prevState) => ({hours: 0}));
    }
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div>
        <h1>{ hours }: { minutes }: { seconds }</h1>
      </div>
    )
  }
}