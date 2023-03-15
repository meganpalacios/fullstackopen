import { Part } from "../Part/Part";

export const Content = ({ parts }) => (
	parts.map((part) => (
		<Part key={part.id} part={part} />
	))
)

