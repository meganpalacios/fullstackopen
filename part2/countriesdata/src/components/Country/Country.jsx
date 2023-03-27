import './Country.css'

export const Country = ({country}) => {
  console.log(country)
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
    </div>
  )
}
