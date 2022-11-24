import { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  const person1= {
        first_name: "Doe",
        last_name: "Jane",
        age: 45,
        hairColor: "Black",
  }
  const person2= {
    first_name: "Smith",
    last_name: "John",
    age: 88,
    hairColor: "Brown",
}
const person3= {
  first_name: "Fillmore",
  last_name: "Millard",
  age: 50,
  hairColor: "Brown",
}
const person4= {
  first_name: "Smith",
  last_name: "Maria",
  age: 62,
  hairColor: "Brown",
}
  return (
  <div className="App">
    {/* <h1>More State</h1> */}
    {/* //* every componenet has its own state */}
    {/* <ClassComponent num={10} person={person} /> */}
    {/* <PersonCard person1={person1} />
    <PersonCard person2={person2} />
    <PersonCard person3={person3} />
    <PersonCard person4={person4} /> */}
    <PersonCard person1={person1}  person2={person2} person3={person3} person4={person4}/>
  </div>
);
}

export default App;