import React from 'react';
// import { Line, LineChart } from 'rechart';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import './DashBoard.css';
const DashBoard = () => {
	const data = [
		{
		  name: 'Page A',
		  price: 4000,
		  pv: 2400,
		  amt: 2400,
		},
		{
		  name: 'Page B',
		  price: 3000,
		  pv: 1398,
		  amt: 2210,
		},
		{
		  name: 'Page C',
		  price: 2000,
		  pv: 9800,
		  amt: 2290,
		},
		{
		  name: 'Page D',
		  price: 2780,
		  pv: 3908,
		  amt: 2000,
		},
		{
		  name: 'Page E',
		  price: 1890,
		  pv: 4800,
		  amt: 2181,
		},
		{
		  name: 'Page F',
		  price: 2390,
		  pv: 3800,
		  amt: 2500,
		},
		{
		  name: 'Page G',
		  price: 3490,
		  pv: 4300,
		  amt: 2100,
		},
	  ];
	return (
		<LineChart  width={1000} height={400} data={data}>
          <Line type="monotone" dataKey="price" stroke="black"></Line> 
        <XAxis dataKey={'name'} stroke='red' ></XAxis> 
        <YAxis dataKey={'price'} stroke = 'red' />
      </LineChart>
	);
};

export default DashBoard;