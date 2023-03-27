import './Country.css'

export const Country = ({country, weather}) => {
  console.log(country)
  const weatherIcon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <details open>
        <summary>Languages</summary>
        <ul className='languageList'>
          {Object.values(country.languages).map(lan => <li key={lan}>{lan}</li>)}
        </ul>
      </details>
      <h3>Weather in {country.name.common}</h3>
      <p>Temperature {weather.main.temp}</p>
      <img src={weatherIcon} alt={weather.weather[0].description} />
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  )
}
