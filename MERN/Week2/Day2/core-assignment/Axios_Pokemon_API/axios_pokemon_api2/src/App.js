
import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [Pokemon, setPokemon] = useState([]);
  const axiosPokemon = () => {
  axios.get(' https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response=>setPokemon(response.data.results))
            .catch(someError => {
                    console.log(someError)
                  })
                }
  return (
    <div className="App">
      <div className='container mt-5'>
        <h1> Pokemon API 🦸‍♀️🦸‍♂️</h1>
        <hr />
        <button className='btn btn-outline-dark shadow p-3 mb-5 rounded' onClick={axiosPokemon}>Fetch Pokemon ⚡</button>
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
