import React from "react";
export function Card() {
	const cardTitles = ["title1", "title2", "title3", "title4"];
	const cardlist = cardTitles.map((singlecard, i) => {
		return (
			<div key={i} className="card" style={{ width: "18rem;" }}>
				<img
					src="http://placehold.it/500x325.jpg"
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						hflgfklkdglkldfkldfklfklklfsklsfklsfksfklsfklfsklsfklsfklfsklfsklsfklsfklfsklklsfklfs
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});
	return <div className="d-flex justify-content-around">{cardlist}</div>;
}
