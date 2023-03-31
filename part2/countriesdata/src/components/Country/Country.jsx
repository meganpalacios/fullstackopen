import { useState, useEffect } from "react";
import weatherService from "../../services/weather";
import "./Country.css";

export const Country = ({ country }) => {
	console.log(country);

	const [weather, setWeather] = useState(null);
	const [weatherIcon, setWeatherIcon] = useState("");

	useEffect(() => {
		weatherService
			.getWeather(country.latlng[0], country.latlng[1])
			.then((response) => {
				setWeather(response.data);
				setWeatherIcon(
					`http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
				);
			});
	}, []);

	return (
		<div className="country">
			<h2>{country.name.common}</h2>
			<p>Capital: {country.capital[0]}</p>
			<p>Area: {country.area}</p>
			<details open>
				<summary>Languages</summary>
				<ul className="languageList">
					{Object.values(country.languages).map((lan) => (
						<li key={lan}>{lan}</li>
					))}
				</ul>
			</details>
			{weather && (
				<>
					<h3>Weather in {country.name.common}</h3>
					<p>Temperature {weather.main.temp}° C</p>
					<img src={weatherIcon} alt={weather.weather[0].description} />
					<p>Wind {weather.wind.speed} m/s</p>
				</>
			)}
		</div>
	);
};
