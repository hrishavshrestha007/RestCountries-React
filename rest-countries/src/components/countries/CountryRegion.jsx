import CountryCard from "./CountryCard";

function CountryRegion({ countries, region }) {
    const filteredCountries = countries.filter(c => c.region === region);
    
    return (
        <div className="country-region">
            <h2>{region}</h2>
            <div className="country-list">
                {filteredCountries.map(country => (
                    <CountryCard key={country.id} country={country} />
                ))}
            </div>
        </div>
    )
}

export default CountryRegion