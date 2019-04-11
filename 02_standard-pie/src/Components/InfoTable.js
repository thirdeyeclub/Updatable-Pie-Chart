import React from 'react';
import styled from 'styled-components';

//const data = require('../../database/pieBase.db3')

const InfoDiv = styled.h4`
margin-top:-60px;
line-height: 10%;`

const InfoTable = function(){
    return(
        <InfoDiv>
    <h6>China Population: 1389618778</h6>
    <h6>India Population: 1311559204 </h6>
    <h6>US Population: 331883986</h6>
    <h6>Indonesia Population: 264935824</h6>
    <h6>Pakistan Population: 210797836 </h6>
    <h6>Brazil Population: 	210301591 </h6>
        </InfoDiv>
    )
}

export default InfoTable;
