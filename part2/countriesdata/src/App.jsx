import "./App.css";
import { Country } from "./components/Country/Country";
import countriesService from "./services/countries";
import weatherService from "./services/weather";
import { useState, useEffect } from "react";

const App = () => {
	const [searchPrompt, setSearchPrompt] = useState("");
	const [filteredResults, setFilteredResults] = useState([]);
	const [resultCount, setResultCount] = useState(0);
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		const lat = filteredResults[0].latlng[0];
		const lon = filteredResults[0].latlng[1];
		if (resultCount === 1) {
			weatherService.getWeather(lat, lon).then((response) => {
				setWeather(response.data);
			});
		} else {
			setWeather(null);
		}
	}, [resultCount]);

	useEffect(() => {
		countriesService.getFiltered(searchPrompt).then((response) => {
			if (response === null) {
				setFilteredResults([]);
				setResultCount(0);
				setWeather(null);
			} else {
				setFilteredResults(response.data);
				setResultCount(response.data.length);
			}
		});
	}, [searchPrompt]);

	const onChangeSearchField = (event) => {
		setSearchPrompt(event.target.value);
		if (event.target.value === "") {
			setFilteredResults([]);
			setResultCount(0);
		}
	};

	const expandCountry = (countryObj) => {
		setFilteredResults([countryObj]);
		setResultCount(1);
	};

	return (
		<div className="App">
			<label htmlFor="search">
				<h2>Search for a country</h2>
			</label>
			<input
				type="text"
				name="search"
				id="search"
				onChange={onChangeSearchField}
			/>
			{filteredResults && resultCount > 10 && <p>Try being more specific</p>}
			{resultCount === 1 && (
				<Country country={filteredResults[0]} weather={weather} />
			)}
			{filteredResults && resultCount < 10 && resultCount > 1 && (
				<ul className="resultList">
					{filteredResults.map((country) => (
						<li key={country.fifa} className="listItem">
							<p className="listedCountry">{country.name.common}</p>
							<button
								key={country.fifa}
								className="expand"
								onClick={() => expandCountry(country)}
							>
								expand
							</button>
						</li>
					))}
				</ul>
			)}
			<footer>Total results: {resultCount}</footer>
		</div>
	);
};

export default App;
