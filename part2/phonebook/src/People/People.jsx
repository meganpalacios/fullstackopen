import "./People.css";

export const People = ({ people, onEdit }) => (
	<ul className="peopleListing">
		{people.map((person) => (
			<div className="container" key={person.id}>
				<li key={person.name}>
					{person.name} {person.number}
				</li>
				<button
					className="edit"
					key={person.id}
					onClick={() => onEdit(person.id)}
				>
					Edit
				</button>
			</div>
		))}
	</ul>
);
