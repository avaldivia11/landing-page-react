import React from "react";
export const Jumbotron = props => {
	return (
		<>
			<div className="">
				<div className="jumbotron bg-light">
					<h1 className="display-4">A Warm, Welcome!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin et vestibulum lectus. Quisque lacinia urna vel
						purus commodo, nec sagittis sapien venenatis. Donec
						tempor, turpis eu dictum faucibus, nibh ex efficitur
						mauris, ac lacinia est nulla id nisi. Donec vel
						consectetur massa, vel suscipit magna. Ut id semper
						nunc. Mauris auctor tincidunt ex nec posuere. Morbi
						scelerisque blandit enim, at sagittis metus posuere ut.
						Orci varius natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus. Proin laoreet luctus
						nibh, non laoreet elit euismod sed. Pellentesque
						vehicula turpis non turpis auctor, placerat ullamcorper
						lorem rutrum.
					</p>
					{/* <hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to
						space content out within the larger container.
					</p> */}
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="#"
							role="button">
							Learn more
						</a>
					</p>
				</div>
			</div>
		</>
	);
};
