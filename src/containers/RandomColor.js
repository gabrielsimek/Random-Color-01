import React, { Component } from 'react';
import RandomColorDisplay from '../components/random-color/RandomColorDisplay';
const colors = ['red', 'blue', 'green', 
  'pink', 'purple', 'yellow', 'black', 'brown'];
export default class RandomColor extends Component {
  state = {
    selectedColor: 'blue'
  }
  componentDidMount = () => {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * colors.length);
      this.setState({ selectedColor: colors[randomNumber] });
    }, 1000);
  }
  render() {
    return (
      <RandomColorDisplay backgroundColor={this.state.selectedColor}/>
    );
  }

}
