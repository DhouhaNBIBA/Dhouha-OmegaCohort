import './App.css';
import { Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import One from './components/one';
import AddReviews from './components/Review';
function App() {
  return (
    <div className="App">
        <h2> Moldy Tomatoes 🍅 </h2>
        <Routes>
          <Route path="/movies/new" element={<Create /> } />
          <Route path="/" element={<Main /> } />
          <Route path='/movies/:id' element={<One /> } />
          <Route path='/movies/:id/reviews' element={<AddReviews/> } />
        </Routes>
    </div>
  );
}

export default App;
