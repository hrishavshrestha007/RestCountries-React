function CountryDetails({country}) {
    return (
        <div className="country-details">
            <img src={country.flagUrl} alt={`${country.name} flag`} />
            <div>
            <h2>{country.name}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
            <p><strong>Languages:</strong> {country.languages.join(', ')}</p>
            <p><strong>Currencies:</strong> {country.currencies.join(', ')}</p>
            <p><strong>Continents:</strong> {country.continents.join(', ')}</p>
            <p><strong>Independent:</strong> {country.independent ? 'Yes' : 'No'}</p>
            <p>{country.description}</p>
            </div>
        </div>
    )
}

export default CountryDetails