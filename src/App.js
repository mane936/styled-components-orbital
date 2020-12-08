import React from 'react';
import Orbiter from './Orbiter'
import styled from 'styled-components'

	const Sun = styled.div`
		background: yellow; 
		width: ${({radius}) => radius*2}px;
		height: ${({radius}) => radius*2}px;
		border-radius: 50%;

		position: absolute;
		top: calc(50% - ${props => props.radius}px);
		left: calc(50% - ${props => props.radius}px);
	`

	const orbiterData = [{
		relativeDistance: 1,
		relativeRadius: 70,
		speed: 20,
		color: "blue",
		offset: 220,
	},
		{
		relativeDistance: 0.2,
		relativeRadius: 20,
		speed: 20,
		color: "blue",
		offset: 220,
		}];

function App() {
  return (
		<div style={{height: "100vh", width: "100vw", backgroundColor: "rgb(48, 48, 48)"}}>
			<Sun radius={40}>
				{orbiterData.map( (orbiter, idx) => {
					return <Orbiter key={idx} {...orbiter} parentRadius={40}  />
				})}
			</Sun>
		</div>
  );
}

export default App;
