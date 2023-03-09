import { Part } from "../Part/Part";

export const Content = (props) => {
	const content = props.content;
	const contentElement = content.map((element, index) => (
		<Part key={index} element={element} />
	));
	return contentElement;
};
