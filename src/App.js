import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

class App extends Component {

state = {rates: '' };

async  getData(){
  try{
    const link = await fetch('http://api.fixer.io/latest?base=USD');
    const data = await link.json();
    const req = data.rates;
    this.setState({rates: req});
    console.log(this.state)
  } catch (e) {
    console.error(e);
  }
}

componentDidMount(){
  this.getData()
}

  render() {
    console.log(this.state.rates)

let some_array = [];

const {rates} = this.state;
if (rates !== undefined){
for (var key in rates) {
let all_array = [key, rates[key]];
   some_array.push(all_array);
}

console.log(some_array);

}

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
