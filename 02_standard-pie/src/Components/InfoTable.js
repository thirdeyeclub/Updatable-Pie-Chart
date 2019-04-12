import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//const data = require('../../database/pieBase.db3')

const InfoDiv = styled.h1`
margin-top:-60px;
line-height: 10%;`

const InfoTable = function(){
    const [pops, setUsers] = useState([]);

useEffect(e => {
    const endpoint = `/pop`;
    axios.get(endpoint)
    .then(res => {
        console.log(res.data);
        setUsers(res.data);
    })
    .catch(error => {
        console.log('USERS ERROR');
    });
}, []);
    return(
        <InfoDiv>
            <p>Data</p>
            <ul>
            {pops.map(pop => (
        <li key={pop.id}>{pop.country}:{pop.population}</li>))}
            </ul>
        </InfoDiv>
    )
}

export default InfoTable;
