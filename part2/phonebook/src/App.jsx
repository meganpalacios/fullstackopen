import { useState, useEffect } from "react";
import { InputField } from "./InputField/InputField";
import { Error } from "./Error/Error";
import { People } from "./People/People";
import axios from "axios";
import "./App.css";

const App = () => {
	const [people, setPeople] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			console.log("promise fulfilled");
			setPeople(response.data);
		});
	}, []);

	const onChangeName = (event) => {
		setNewName(event.target.value);
		if (errorMessage) setErrorMessage("");
	};
	const onChangePhone = (event) => setNewPhone(event.target.value);
	const addContact = (event) => {
		event.preventDefault();
		const comparableArray = people.map((person) => person.name);
		if (comparableArray.includes(newName)) {
			setErrorMessage(`${newName} is already in your phonebook`);
		} else {
			setPeople(people.concat({ name: newName, phone: newPhone }));
			setNewName("");
			setNewPhone("");
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addContact}>
				<h3>Add a new contact</h3>
				<InputField label="Name" state={newName} onChange={onChangeName} />
				<InputField label="Phone" state={newPhone} onChange={onChangePhone} />
				<Error error={errorMessage} />
				<button type="submit">add</button>
			</form>
			<h2>Numbers</h2>
			<People people={people} />
		</div>
	);
};

export default App;
