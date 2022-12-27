import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import AffichPe from './components/AffichPe';
import Home from './components/Home';
import AffichP from './components/AffichP';

function App() {
  return (
    <div className="App">
        <h1>Routing Example</h1>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/people/:id" element={<AffichPe/>} />
          <Route path="/planet/:id" element={<AffichP/>} />
        </Routes>
    </div>
  );
}

export default App;
