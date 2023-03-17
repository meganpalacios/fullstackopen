import './People.css'

export const People = ({ people }) => (
    <ul className="peopleListing">
        {people.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </ul>
)
