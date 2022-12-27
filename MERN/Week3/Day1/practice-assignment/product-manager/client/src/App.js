import './App.css';
import { Route, Routes} from 'react-router-dom';
import AddProduct  from "./components/AddProduct";
// import {  } from "./components/create.module";

// import Create from './components/create';
// import One from './components/one';
// import Update from './components/update';
function App() {
  return (
    <div className="App">
      <h1>Products 🧚🏻‍♂️ </h1>
      {/* <Link to="/notes" style={{textDecoration: 'none', color:'black',fontStyle:' oblique', fontSize:' 1.8rem' }}> Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create" style={{textDecoration: 'none', color:'black',fontStyle:' oblique', fontSize:' 1.8rem' }}> create</Link>
      <hr/> */}
      <Routes>
        <Route path="/" element={<AddProduct /> } />
        {/* <Route path="/create" element={<Create  /> } />
        <Route path='/notes/:id' element={< One />} />
        <Route path='/notes/update/:id' element={< Update />} /> */}
      </Routes>
    </div>
  );
}

export default App;

