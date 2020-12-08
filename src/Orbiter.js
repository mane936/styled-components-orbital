import React from 'react';
import { Circle } from './Orbiter.elements'


function Orbiter(props) {
	const { relativeDistance, parentRadius, relativeRadius, speed, color, offset } = props;
	console.log(props)
	const radius = Math.ceil((relativeRadius * parentRadius) / 100)
	console.log("rendered")
	return (
		<>
			<Circle 
				color={color}
				radius={radius}
				parentRadius={parentRadius}
				distance={2*parentRadius*relativeDistance + parentRadius + radius}
				speed={speed}
				offset={offset}
			/>	
		</>
	);
}

Orbiter.defaultProps = {};

Orbiter.propTypes = {
};

export default Orbiter;
