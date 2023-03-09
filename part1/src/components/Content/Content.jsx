export const Content = (props) => {
	const content = props.content;
	const contentElement = content.map((element, index) => (
		<p key={index}>
			{element.part} {element.exercises}
		</p>
	));
	return contentElement;
};
