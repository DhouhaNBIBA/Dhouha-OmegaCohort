import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Number from './components/number';
import Coler from './components/hello-c-c';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:number' element={<Number />} />
        <Route path='/:number/:col1/:col2' element={<Coler />} />
      </Routes>

    </div>
  );
}

export default App;
