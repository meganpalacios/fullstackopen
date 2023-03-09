import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Total } from "./components/Total/Total";

const App = () => {
	const course = "Half Stack application development";
	const content = [
		{ part: "Fundamentals of React", exercises: 10 },
		{ part: "Using props to pass data", exercises: 7 },
		{ part: "State of a component", exercises: 14 },
	];

	return (
		<div>
			<Header course={course}></Header>
			<Content content={content} />
			<Total
				array={[
					content[0].exercises,
					content[1].exercises,
					content[2].exercises,
				]}
			></Total>
			{/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
		</div>
	);
};

export default App;
