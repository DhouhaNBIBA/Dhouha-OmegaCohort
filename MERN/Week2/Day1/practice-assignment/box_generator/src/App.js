import React, { useState } from 'react';
import BoxColor from './components/box';
import DisplayBox from './components/box_display';

function App() {
  const [boxes, setBoxes] = useState([]);
  const getValues = (color,width) => {
    setBoxes([...boxes, { color:color, width:width}]);
  } 

    return (
      <div className="App">
        <BoxColor getValues={getValues}/>
        <DisplayBox boxes={boxes}  />
      </div>
    );
  }
export default App;
