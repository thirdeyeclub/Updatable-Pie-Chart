import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

//const data = require('../../database/pieBase.db3')


const InfoDiv = styled.h1`
margin-top:-60px;
line-height: 10%;`

class InfoTable extends React.Component{
    state = {
    pops:[]
    };

    componentDidMount(){
    const endpoint = `/pop/`;
    axios.get(endpoint)
    .then(res => {
        this.setState({pops : res.data})
        console.log(res.data);
    })
    .catch(error => {
        console.log(error, '*** DATA ERROR ***');
    });
}
render(){ return(
    <InfoDiv>
            <p>Data</p>
            <ul>
            { this.state.pops.map(pop => (<li>{pop.country}:{pop.population}</li>))}
            </ul>
        </InfoDiv>)
}

//     return(
//         <InfoDiv>
//             <p>Data</p>
//             <ul>
//             {pops.map(pop => (
//         <li>{pop.country}:{pop.population}</li>))}
//             </ul>
//         </InfoDiv>
// )
}

export default InfoTable;
