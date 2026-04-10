import { getAllCountries } from "../services/countryService"
import CountryRegion from "../components/countries/CountryRegion"

function CountriesPage() {
  const countries = getAllCountries()

  return (
    <main>
      <CountryRegion countries={countries} />
    </main>
  )
}

export default CountriesPage