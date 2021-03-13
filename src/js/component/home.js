import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Foot } from "./foot.js";
import { Card } from "./card.js";
import { Card1 } from "./card1.js";
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card />
			<Foot />
		</>
	);
}
