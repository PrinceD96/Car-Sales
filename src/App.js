import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
// import { connect } from "react-redux";

//For Stretch Goals I will refactor from HOCs to Redux hooks
// Step 1 Import useSelector hook
import { useSelector } from "react-redux";
// Step 2 Delete all props

const App = () => {
	// Step 3 Implement useSelector to get the pieces of state needed from Redux store
	const additionalPrice = useSelector(state => state.additionalPrice);
	const car = useSelector(state => state.car);
	const additionalFeatures = useSelector(state => state.additionalFeatures);

	return (
		<div className='boxes'>
			<div className='box'>
				<Header car={car} />
				<AddedFeatures car={car} />
			</div>
			<div className='box'>
				<AdditionalFeatures additionalFeatures={additionalFeatures} />
				<Total car={car} additionalPrice={additionalPrice} />
			</div>
		</div>
	);
};

//Step 4 Change the export to not use connect anymore
export default App;

// const mapStateToProps = state => {
// 	return {
// 		additionalPrice: state.additionalPrice,
// 		car: state.car,
// 		additionalFeatures: state.additionalFeatures
// 	};
// };

// export default connect(mapStateToProps, {})(App);
