import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Main from './components/main';
import Create from './components/create';
import One from './components/one';
import Update from './components/update';
function App() {
  return (
    <div className="App">
      <h1>Notes 🗒 </h1>
      <Link to="/notes" style={{textDecoration: 'none', color:'black',fontStyle:' oblique', fontSize:' 1.8rem' }}> Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create" style={{textDecoration: 'none', color:'black',fontStyle:' oblique', fontSize:' 1.8rem' }}> create</Link>
      <hr/>
      <Routes>
        <Route path="/notes" element={<Main /> } />
        <Route path="/create" element={<Create  /> } />
        <Route path='/notes/:id' element={< One />} />
        <Route path='/notes/update/:id' element={< Update />} />
      </Routes>
    </div>
  );
}

export default App;
