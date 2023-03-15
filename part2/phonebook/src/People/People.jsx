export const People = ({ people }) => (
    <ul>
        {people.map(person => <li key={person.name}>{person.name} {person.phone}</li>)}
    </ul>
)
