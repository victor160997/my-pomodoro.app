import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cronometro from './components/Cronometro'
import Form from './components/Form'

class HomePage extends Component {
  render() {
    const { pomodoro } = this.props;
    return (
      <div>
        <h1>Pomodoro</h1>
        <Form />
        { pomodoro && pomodoro.ativo ? <Cronometro pomodoro={ pomodoro } /> : <h1>Clique em começar!</h1> }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pomodoro: state.time.time,
})

export default connect(mapStateToProps)(HomePage)
