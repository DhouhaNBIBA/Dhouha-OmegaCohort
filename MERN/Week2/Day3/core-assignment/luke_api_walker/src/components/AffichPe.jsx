// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';


    
const Affich = (props) => {
    const {search } = useParams();
    const {id } = useParams();
    return (
        <div>
            <div style={{color:col1,backgroundColor:col2, border:'2px solid'}}>
                <h1></h1>
                {/* <h1>{isNaN (+ number) ? "The word is 👄: " + number : "The number is 🧸: "+ number}</h1> */}
            </div>
        </div>
    )
}

export default Affich