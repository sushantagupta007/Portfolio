import React from 'react';

import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import './Skilled.css'
const data = [
	{
	  name: 'HTML',
	  Projects: 20,

	},
	{
		name: 'Pure CSS',
		Projects: 15,
	},
	{
		name: 'CSS FrameWork',
		Projects: 10,
	},
	{
		name: 'Vanila JS',
		Projects: 4,
	},
	{
		name: 'React',
		Projects: 5,
	},
	{
		name: 'MongoDb',
		Projects: 4,
	},
	{
		name: 'Express',
		Projects: 3,
	},
  ];
const Skilled = () => {
	return (
	<div id="mobileViewSkilled" className="d-sm-none">
		<h4 className="text-white text-center pt-2"> Completed Projects</h4>
		<BarChart 
			width={300}
			height={300}
			data={data}
			
	  	>
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="Projects" barSize="20" fill="#8884d8" />
			
	 	 </BarChart>
	</div>	
		
		
		
	)
};

export default Skilled;