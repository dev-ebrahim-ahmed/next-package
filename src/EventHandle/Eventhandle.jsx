import { Component } from 'react'

export default class EventHandle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changeValue: ''
      }
    }


    handleChange = (e) => {
       this.setState({
        changeValue: e.target.value
       },  ()=>{
        console.log(this.state.changeValue)
       })
    }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange}/>
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
