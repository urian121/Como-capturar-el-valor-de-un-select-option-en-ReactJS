import { useState } from "react";

const CountrySelector = () => {
  // Definimos un estado para almacenar el país seleccionado
  const [selectedCountry, setSelectedCountry] = useState("");

  // Lista de países de América
  const countries = [
    "Selecciona un país",
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "México",
    "Perú",
    "Venezuela",
  ];

  // Manejador de eventos para actualizar el país seleccionado
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <h1>Cómo capturar el valor de un select option en ReactJS</h1>
      <br />
      <br />
      <p>Selecciona un país:</p>
      <select onChange={handleCountryChange}>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <h3>País seleccionado: {selectedCountry}</h3>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
