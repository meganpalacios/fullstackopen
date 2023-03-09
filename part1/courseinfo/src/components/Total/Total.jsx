export const Total = (props) => {
	const array=[
		props.parts[0].exercises,
		props.parts[1].exercises,
		props.parts[2].exercises,
	]
	const initialValue = 0;
	const sum = array.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	);
	return <h3>Number of exercises {sum}</h3>;
};
