import { Header } from "../Header/Header";
import { Content } from "../Content/Content";
import { Total } from "../Total/Total";

export const Course = ({ course }) => (
	<>
		<Header text={course.name} />
		<Content parts={course.parts}></Content>
		<Total parts={course.parts}></Total>
	</>
);
