import { useState, useEffect } from "react";
import "./App.css";
import { getPeople } from "./api/people";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then((data) => { setPeople(data.results)});
  }, []) //array de dependencias que si se pone vacio lo ejecutara solo una vez al principio de la carga

  return (
    <ul>
      {people.map((character) => (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  );
}

export default App;
