import React from 'react';
// import { Line, LineChart } from 'rechart';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css';

const DashBoard = () => {
	const data = [
		{
			"month": "Mar",
			"investment": 100000,
			"sell": 241,
			"revenue": 10401
		},
		{
			"month": "Apr",
			"investment": 200000,
			"sell": 423,
			"revenue": 24500
		},
		{
			"month": "May",
			"investment": 500000,
			"sell": 726,
			"revenue": 67010
		},
		{
			"month": "Jun",
			"investment": 500000,
			"sell": 529,
			"revenue": 40405
		},
		{
			"month": "Jul",
			"investment": 600000,
			"sell": 601,
			"revenue": 50900
		},
		{
			"month": "Aug",
			"investment": 700000,
			"sell": 670,
			"revenue": 61000
		}
	];
	return (
		<div className="dash-container">
			<h2 className="dash-title"> Dash Board of book selling </h2>
			<div className="dash-wrapper">
				<div className="single-dash">
					<h3 className="bash-subtitle"> Monthly selling </h3>
					<LineChart width={500} height={400} data={data}>
						<Line type="monotone" dataKey="sell" stroke="red"></Line>
						<XAxis dataKey={'month'} stroke='black' ></XAxis>
						<YAxis dataKey={'sell'} stroke='black' />
						<Tooltip stroke='white'></Tooltip>
					</LineChart>
				</div>
				<div className="single-dash">
					<h3 className="bash-subtitle"> Monthly investments </h3>
					<BarChart width={500} height={400} data={data}>
						<CartesianGrid strokeDasharray="2 3" />
						<XAxis dataKey="month"/>
						<YAxis dataKey="investment"/>
						<Tooltip className = 'tooltip'/>
						{/* <Legend /> */}
						<Bar dataKey="investment" fill="#8884d8" />
						<Bar dataKey="month" fill="White" />
					</BarChart>
				</div>

			</div>
		</div>
	);
};

export default DashBoard;