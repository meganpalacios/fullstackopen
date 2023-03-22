import "./People.css";

export const People = ({ people, onEdit, onDelete }) => (
	<ul className="peopleListing">
		{people.map((person) => (
			<div className="container" key={person.id}>
				<li key={person.name}>
					{person.name} {person.number}
				</li>
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
			</div>
		))}
	</ul>
);
