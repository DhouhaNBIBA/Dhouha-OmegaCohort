import './App.css';
import PersonCard from './components/PersonCard';
function App() {

  return (
  <div className="App">
    <PersonCard first_name = {"Jane"} last_name = {"Doe"} age = {45} hairColor = {"Black"} />
		<PersonCard first_name = {"John"} last_name = {"Smith"} age = {88} hairColor = {"Brown"} />
    <PersonCard first_name = {"Fillmore"} last_name = {"Millard"} age = {50} hairColor = {"Brown"} />
    <PersonCard first_name = {"Smith"} last_name = {"Maria"} age = {62} hairColor = {"Brown"} />
  </div>
);
}

export default App;