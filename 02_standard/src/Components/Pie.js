import React, { PureComponent } from 'react';
import { PieChart, Pie, } from 'recharts';

const data01 = [
{ name: 'China', value: 1389618778 }, 
{ name: 'India', value: 1311559204 },
{ name: 'US', value: 331883986	 }, 
{ name: 'Indonesia', value: 264935824 },
{ name: 'Pakistan', value: 210797836 },
{ name: 'Brazil', value: 	210301591 }]


export default class Chart extends PureComponent {

render() {
    return (
    <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={true} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
    </PieChart>
    );
}
}