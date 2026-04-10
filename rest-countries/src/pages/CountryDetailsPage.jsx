import { useParams } from "react-router-dom"
import { getCountryById } from "../services/countryService"
import CountryDetails from "../components/countries/CountryDetails"

function CountryDetailsPage() {
  const { id } = useParams()
  const country = getCountryById(id)

  if (!country) {
    return <h1>Country not found</h1>
  }

  return (
    <main>
      <CountryDetails country={country} />
    </main>
  )
}

export default CountryDetailsPage