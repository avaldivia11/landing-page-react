import React from "react";
/* import Navbar from "./Navbar" */
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid p-0">
				<div className="row"></div>
				<div className="row">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
