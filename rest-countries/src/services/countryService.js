import countries from "../data/countries";

function getAllCountries() {
    return countries.map (c => ({
        id : c.id,  
        name : c.name,
        officialName : c.officialName,
        flagUrl : c.flagUrl,
        shortDescription : c.shortDescription,
        description : c.description
    }))
}

function getCountryById(id) {
    const country = countries.find(c => c.id === id);
    return country;
}

export { getAllCountries, getCountryById }