import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotrom";
import { Card } from "./card";
//create your first component
const Home = () => {
	return (
		<>
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
		</>
	);
};

export default Home;
