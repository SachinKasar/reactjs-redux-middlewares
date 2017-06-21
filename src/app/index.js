import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./components/App";
 
const visitorReducer = (state={visitorName:"XYZ", discount:"10000"}, action) => {
	
	switch (action.type) {
		case 'ADD_VISITOR':
			state = { 
			          ...state,
			          visitorName: action.payload
					};
			// throw Error('an error from sum');
		}
	
	return state;
};


function funcWithError(){
    throw Error('an error from sum');
}

const discountReducer = (state={visitorName:"XYZ", discount:"10000"}, action) => {
	switch (action.type) {
		case 'ADD_DISCOUNT':
			state = { 
			          ...state,
			          discount: action.payload
					};
			break;
		
	}
	return state;
};

// const newLogger = (store) => (next) => (action) => {
//	 console.log("Logger - ", action);
//	 next(action);
// };

const loggerMiddleware = function(store) {
	return function(next) {
		return function(action) { 
			console.group(" Begin loggerMiddleware ");
			console.log(" Current state --- ", store.getState());
			console.log(" Action --- ", action);
			next(action);
			console.log(" New state --- ", store.getState());
			console.groupEnd(" End loggerMiddleware ");
		}
	}
} 

const errorMiddleware = function(store) {
	return function(next) {
		return function(action) { 
			try {
				next(action);
			} catch (err) {
				console.group(" Begin errorMiddleware ");
				console.error(" errorMiddleware --- ", store.getState());
				console.error(" Error in Action --- ", action);
				console.error(err);
				console.groupEnd(" End errorMiddleware ");
			}
			
		}
	}
} 

const store = createStore(
	combineReducers({visitorReducer,discountReducer}),
	{},
	applyMiddleware(loggerMiddleware,errorMiddleware)  
	);

store.subscribe(() => {
	// console.log("Store state - ", store.getState());
});

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

