export const Total = ({ parts }) => {
	const exercises = parts.map(part => part.exercises)

	const initialValue = 0;
	const sum = exercises.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	);
	return <b>Number of exercises {sum}</b>;
};
