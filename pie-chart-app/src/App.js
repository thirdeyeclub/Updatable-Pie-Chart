import React, { Component } from 'react';
import './App.css';
import Pie from './Components/Pie';
import Form from './Components/Form';
import styled from 'styled-components';

const FluidContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
align-items: center;
`

class App extends Component {
  render() {
    return (
      <FluidContainer>
        <Pie />
        <Form />
      </FluidContainer>
      
    );
  }
}

export default App;
