import React from "react";
/* import Navbar from "./Navbar" */
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotrom";
import { Card } from "./card";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
					<div className="col-3">
						<Card />
					</div>
				</div>
			</div>
			
			<Footer />
		</>
	);
};

export default Home;
