import styled, {keyframes} from 'styled-components'

const orbitAnimation = (distance, offset) => keyframes`
	rom {transform: rotate(${offset}deg) translateX(${distance}px)}
	to {transform: rotate(${offset+360}deg) translateX(${distance}px) }
`


export const Circle = styled.div`
	background: ${props => props.color};
	border-radius: 50%;
	width: ${props => props.radius * 2 }px;
	height: ${props => props.radius * 2 }px;

	position: absolute;
  top: ${props => (props.parentRadius - props.radius)}px;
	left: ${props => (props.parentRadius - props.radius)}px;

animation:
	${props => orbitAnimation(props.distance, props.offset)}
	${props => props.distance/props.speed}s linear infinite;
`;
