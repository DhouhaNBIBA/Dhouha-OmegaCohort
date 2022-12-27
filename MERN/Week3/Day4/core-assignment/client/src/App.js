import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import AuthorForm from './components/AuthorForm'
import Update from './components/Update';
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <h1>Authors 👩🏻‍💻👩🏻‍🏫</h1>
      <Routes>
        <Route path="/" element={< Main /> } />
        <Route path='/create' element={<AuthorForm />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/details/:id' element={<Details />} />

        {/* <Route path="/create" element={<Create  /> } />
        <Route path='/notes/:id' element={< One />} />
        <Route path='/notes/update/:id' element={< Update />} /> */}
      </Routes>
    </div>
  );
}

export default App;
