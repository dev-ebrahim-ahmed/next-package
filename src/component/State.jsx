import { Component } from 'react'

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    handleIncreament = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }
    handleDecreament = () => {
        this.setState ({
            count: this.state.count - 1
        })
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.handleIncreament} disabled={count === 5 ? true : false}>+</button>
        <button onClick={this.handleDecreament} disabled={count === 0 ? true : false}>-</button>
      </div>
    )
  }
}
