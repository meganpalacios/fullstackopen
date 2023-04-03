import "./People.css";

export const People = ({ people, onEdit, onDelete }) => (
	<ul>
		{people.map((person) => (
			<li className="container" key={person.id}>
				{person.name} {person.number}

				<div className="actions">
					<button
						className="button"
						key={"edit-" + person.id}
						onClick={() => onEdit(person.id)}
					>
						Edit
					</button>
					<button
						className="button delete"
						key={"delete-" + person.id}
						onClick={() => onDelete(person.id)}
					>
						Delete
					</button>
				</div>
			</li>
		))}
	</ul>
);
