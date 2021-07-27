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
      console.log(colors[randomNumber]);
    }, 1000);
  }
    componentDidUpdate = (prevProp, prevState) => {
      if(prevState.selectedColor === this.state.selectedColor){
        console.log('samesies');
        this.setState({ selectedColor: 'url(\'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg\')' });
      }

    }
    render() {
      return (
        <RandomColorDisplay backgroundColor={this.state.selectedColor}/>
      );
    }

}
