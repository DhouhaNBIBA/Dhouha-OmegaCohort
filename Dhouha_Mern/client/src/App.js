
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/create';
import Main from './components/Main';
import One from './components/one';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/Pirates/new" element={<Create /> } />
      <Route path="/Pirates" element={<Main /> } />
      <Route path="/Pirates/:id" element={<One /> } />
     </Routes>
    </div>
  );
}

export default App;
