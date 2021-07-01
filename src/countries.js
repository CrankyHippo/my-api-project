import React from "react";
import axios from "axios";

function Countries() {
  const [all, setCount] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCount(response.data));
  }, []);

  return (
    <ul className="Count">
      {all.map((all) => (
        <li className="Count" key={all.name}>
          <p>The Capital of <b>{all.name}</b> is {all.capital}</p>
        
        </li>
      ))}
    </ul>
  );
}

export default Countries;