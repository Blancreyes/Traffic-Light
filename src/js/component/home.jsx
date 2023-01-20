import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [color, setcolor] = useState ("traffic_light red");
	
	return (
		<div className="traffic_light">
			<div 
				className={"red" + (color === "red" ? " glow" : "")} 
				onClick={()=>setcolor("red")}>

			</div>
			<div 
				className={"yellow" + (color === "yellow" ? " glow" : "")} 
				onClick={()=>setcolor("yellow")}>

			</div>
			<div 
				className={"green" + (color === "green" ? " glow" : "")} 
				onClick={()=>setcolor("green")}>

			</div>
		</div>
	);
};

export default Home;