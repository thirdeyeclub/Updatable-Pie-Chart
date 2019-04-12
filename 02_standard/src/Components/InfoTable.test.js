import React from 'react';
import ReactDOM from 'react-dom';
import {render , fireEvent} from "react-testing-library"
import InfoTable from './InfoTable';
const db = require('../../database/config00');
const tbl = require('./InfoTable.js');

describe('INFO TABLE TEST', () => {
    beforeEach(async () => {
    await db('pop').truncate();
    });
    it('render?', () => {
        render(<InfoTable />);
    });
    it('renders title of data and therefore the div where the data should be', () => {
        const {getByText , queryByText} = render(<InfoTable />)
        
        //getByText(/hello world/i)
        expect(queryByText(/data/i)).not.toBeNull();
    });
  
    //   it('greets?', () => {
    //     const {getByText} = render(<App />);
    //     const button =  getByText(/greet/i);
    //     fireEvent.click(button);
    //     getByText(/welcome/i);
    //   });
  
    //   it('bye works', () => {
    //     const {getByText} = render(<App />);
    //     const button =  getByText(/bye/i);
    //     fireEvent.click(button);
    //          getByText(/bye/i);
});
