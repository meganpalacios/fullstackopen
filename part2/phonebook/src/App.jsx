import { useState, useEffect } from "react";
import { InputField } from "./InputField/InputField";
import { Error } from "./Error/Error";
import { Success } from "./Success/Success";
import { People } from "./People/People";
import peopleService from "./services/people";
import "./App.css";

const App = () => {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [currentId, setCurrentId] = useState(0);

	useEffect(() => {
		peopleService.getAll().then((response) => {
			setPeople(response.data);
		});
	}, []);

	const onChangeName = (event) => {
		setNewName(event.target.value);
		if (errorMessage) setErrorMessage("");
		if (successMessage) setSuccessMessage("");
	};
	const onChangePhone = (event) => setNewPhone(event.target.value);

	const addContact = (newPerson) => {
		const comparableArray = people.map((person) => person.name);
		if (comparableArray.includes(newName)) {
			setErrorMessage(`${newName} is already in your phonebook`);
		} else {
			peopleService.create(newPerson).then((response) => {
				setPeople(people.concat(response.data));
			});
			const selectedContact = newName
			setSuccessMessage(`${selectedContact} has been added to your phonebook`)
			setNewName("");
			setNewPhone("");
		}
	};

	const onEdit = (id) => {
		setEditMode(true);
		const contact = people.find((person) => person.id === id);
		setNewName(contact.name);
		setNewPhone(contact.number);
		setCurrentId(contact.id);
	};

	const save = (event) => {
		event.preventDefault();
		const newPerson = { name: newName, number: newPhone };
		if (!editMode) {
			addContact(newPerson);
		} else {
			peopleService.update(currentId, newPerson).then((response) => {
				setPeople(
					people.map((person) => (person.id !== currentId ? person : response.data))
				);
			}).catch((error) => {
				const selectedContact = people.find(p => p.id === currentId)
				setErrorMessage(`${selectedContact.name} was already deleted from server`)
				setPeople(people.filter(p => p.id !== currentId))
			})
			setNewName("");
			setNewPhone("");
			setEditMode(false);
			setCurrentId(0);
		}
	};

	const terminate = (id) => {
		const selectedContact = people.find(p => p.id === id)
		if (window.confirm('Do you want to delete ' + selectedContact.name + '?')) {
			peopleService.terminate(id).then((response) => {
				console.log(response.data)
				setPeople(people.filter(p => p.id !== id))
			})
		}
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={save}>
				<h3>Add a new contact</h3>
				<InputField label="Name" state={newName} onChange={onChangeName} />
				<InputField label="Phone" state={newPhone} onChange={onChangePhone} />
				<Success message={successMessage} />
				<Error error={errorMessage} />
				<button type="submit">Save</button>
			</form>
			<h2>Contacts</h2>
			<People people={people} onEdit={onEdit} onDelete={terminate} />
		</div>
	);
};

export default App;
