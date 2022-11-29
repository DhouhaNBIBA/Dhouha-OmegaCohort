import './App.css';
import { useState } from 'react';
function App() {

  const [Pokemon, setPokemon] = useState([]);
  const fetchPokemon = () => {
      fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
      .catch(someError => {
        console.log(someError)
      })
  }
  return (
    <div className="App">
      <div className='container mt-5'>
        <h1> Pokemon API 🦸‍♀️🦸‍♂️</h1>
        <hr />
        <button className='btn btn-outline-dark shadow p-3 mb-5 rounded' onClick={fetchPokemon}>Fetch Pokemon ⚡</button>
        <hr />
        {/* {JSON.stringify(Pokemon)} */}
        <br />
            {Pokemon.map((pok, idx) => {
              return (
                <ul key={idx}>
                  <li>{pok.name}</li>
                </ul>
              )
            })}
      </div>
    </div>
  );
}

export default App;