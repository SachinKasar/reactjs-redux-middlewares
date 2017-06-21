import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";
import {TwoWheeler} from "./TwoWheeler";
import {FourWheeler} from "./FourWheeler";

class App extends React.Component {
    render() {
		var twoWheelSpecs = {manufacturer : "Royal Enfield"};
		var fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div style={{border: '5px solid grey'}}>
				 <div className="container">
					<div className="row">
						<div className="row">
							<TwoWheeler name="Enfield Classic" 
									  specs={twoWheelSpecs} 
									  price="0" 
									  changeVisitor={() => this.props.setVisitorName("New Visitor")} 
									  discount={this.props.discountProp.discount}/>
						</div>
					</div>
				  </div>
			  <hr/>
				  <div className="container">
					<div className="row">
						<div className="row">
							<FourWheeler 
								name="Grand Vitara" 
								specs={fourWheelSpecs} 
								visitor={this.props.visitorProp.visitorName}
								discount={this.props.discountProp.discount}/>
						</div>
					</div>
				  </div>
			  </div>
        );
    } 
}

const mapStateToProps = (state) => {
	return {
		visitorProp : state.visitorReducer,
		discountProp : state.discountReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setVisitorName: (name) => {
			dispatch({
				type: "ADD_VISITOR",
				payload: name
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// render( < App / > , document.getElementById("app"));