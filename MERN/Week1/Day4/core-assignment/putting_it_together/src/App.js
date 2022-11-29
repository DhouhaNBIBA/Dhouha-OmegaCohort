// import { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
function App() {

  return (
  <div className="App">
    <PersonCard first_name = {"Jane"} last_name = {"Doe"} age = {45} hairColor = {"Black"} />
		<PersonCard first_name = {"John"} last_name = {"Smith"} age = {88} hairColor = {"Brown"} />
  </div>
);
}

export default App;