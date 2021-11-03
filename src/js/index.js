//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle

import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application

ReactDOM.render(<Home />, document.querySelector("#app"));
