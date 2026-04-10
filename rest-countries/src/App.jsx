import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CountriesPage from "./pages/countriesPage"
import CountryDetailsPage from "./pages/CountryDetailsPage"
import NavBar from "./components/shared/NacBar"
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/countries/:id" element={<CountryDetailsPage />} />
      </Routes>
    </>
  )
}

export default App