import { Part } from "../Part/Part";

export const Content = (props) => {
	const contentElement = props.parts.map((element, index) => (
		<Part key={index} element={element} />
	));
	return contentElement;
};
