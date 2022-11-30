// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';


    
const Number = (props) => {
    const {number } = useParams();
    return (
        <div>
<h1>{isNaN (+ number) ? "The word is 👄: " + number : "The number is 🧸: "+ number}</h1>
    </div>
    )
}

export default Number


