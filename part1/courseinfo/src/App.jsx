import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Total } from "./components/Total/Total";

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{ name: "Fundamentals of React", exercises: 10 },
		{ name: "Using props to pass data", exercises: 7 },
		{ name: "State of a component", exercises: 14 },
	];

	return (
		<div>
			<Header course={course}></Header>
			<Content parts={parts} />
			<Total parts={parts}></Total>
		</div>
	);
};

export default App;
