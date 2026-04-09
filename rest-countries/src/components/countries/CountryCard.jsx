import { Link } from 'react-router-dom'

function CountryCard({ country }) {
    return (
        <div className="country-card">
            <img src={country.flagUrl} alt={`${country.name} flag`} />
            <h3>{country.name}</h3>
            <p>{country.shortDescription}</p>
            <Link to={`/countries/${country.id}`} className="details-link">
            View Details
            </Link>
        </div>
            )
        }

export default CountryCard