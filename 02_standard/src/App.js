import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Pie';
import Form from './Components/Form';
import InfoTable from './Components/InfoTable';
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
        <Chart />
        <InfoTable/>
        <Form />
      </FluidContainer>
      
    );
  }
}

export default App;
