export const Total = (props) => {
	const initialValue = 0;
	const sum = props.array.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	);
	return <h3>Number of exercises {sum}</h3>;
};
