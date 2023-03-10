import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()} // modern/new method

  //   constructor(props) {             // older method
  //     super(props)
  //     this.state = {date: new Date()}
  //     console.log('Constructor Called')
  //   }

  componentDidMount = () => {
    console.log('componentDidMount called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
