import './App.css';
import { Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import One from './components/one';
import Review from './components/Review';
function App() {
  return (
    <div className="App">
        <h2> Moldy Tomatoes 🍅 </h2>
        <Routes>
          <Route path="/movies/new" element={<Create /> } />
          <Route path="/movies" element={<Main /> } />
          <Route path='/movies/:id' element={<One /> } />
          <Route path='/movies/:id/reviews' element={<Review/> } />
        </Routes>
    </div>
  );
}

export default App;
