import React from "react";

// FourWheel as a stateless Component
export const FourWheeler = (props) => {
    return ( 
		 <div className="container">
			<div className="row">
				<div className="row">
					<h1 style={{color:'red'}}> Four Wheeler </h1>
					<ul>
						<li>
							<b>Name :</b>  {props.name}
						</li>
						<li>
							<b>By :</b>  {props.specs.manufacturer}
						</li>
						<li>
							<b>Discount :</b>  {props.discount}
						</li>
						<li>
							<b>Visitor :</b>  {props.visitor}
						</li>
						
					</ul>
				</div>
			</div>
		  </div>
        );
};
