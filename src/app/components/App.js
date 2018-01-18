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
			<div className="container">
                <div className="row col-xs-10 col-xs-offset-1 alert alert-success">
				    <br/>   
                    <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
							<TwoWheeler name="Enfield Classic" 
									  specs={twoWheelSpecs} 
									  price="0" 
									  changeVisitor={() => this.props.setVisitorName("New Visitor")} 
									  discount={this.props.discountProp.discount}/>
						</div>
					</div> <br/>
            
				   <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
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
