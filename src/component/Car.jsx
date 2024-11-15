import { Component } from 'react'

export default class Car extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         brand: "Ford",
         model: "Mustang",
         color: "red",
         year: 1964
      };
    }

    changeColor = () => {
        this.setState({color: "blue"})
    }

  render() {
    const {brand, model, color, year} = this.state;
    return (
      <div>
        <h1>My Car {brand}</h1>
        <p>My Car Model {model}</p>
        <p>Color {color}</p>
        <p>Car Year {year}</p>
        <button type='button' onClick={this.changeColor}>Color Change</button>

      </div>

    )
  }
}
