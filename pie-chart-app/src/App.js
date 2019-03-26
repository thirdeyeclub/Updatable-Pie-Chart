import React, { Component } from 'react';
import './App.css';
import Pie from './Components/Pie';
import Form from './Components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <Pie />
        <Form />
      </div>
      
    );
  }
}

export default App;
