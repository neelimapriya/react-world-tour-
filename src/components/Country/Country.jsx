import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, capital, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  // console.log(handleVisitedCountry);

  const passWithParams = () => {
    handleVisitedCountry(country);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "pink" : "white" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <h5>Capital : {capital}</h5>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>{" "}
      </p>
      {/* <button onClick={passWithParams}>Mark Visited</button> */}
      {/* alternative */}
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br/>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>

      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited && "i have visited this country"}
    </div>
  );
};

export default Country;
