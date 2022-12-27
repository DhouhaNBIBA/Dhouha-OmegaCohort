import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import styles from '../components/main.module.css'
// import { Link } from 'react-router-dom';
// import { format} from 'date-fns';
import { useParams } from 'react-router-dom';


const One = (props) => {
    // const navigate = useNavigate();
    const [pirate, setPirates]= useState([]);
    const{ id } = useParams()
    
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates/${id}`)
        .then(res => {
            console.log(res.data);
            setPirates(res.data)
        })
        .catch(err=> console.log("XXXXX", err))
    }, [id])
    
    return (
        <div style={{backgroundColor:'#D27D2D'}}>       
                    <div  className='header'>
                        <h1>{pirate.name}</h1>
                    </div>
                    <div className='div3'>
                        <div className='div4' >
                            <img src={pirate.image} alt="pirate" width="150" height="200" />
                            <h2>"{pirate.phrase}"</h2>
                        </div>
                        <div className='div4' >
                            <h2>About</h2>
                            <hr/>
                            <h4 style={{textAlign: "left", margin:'20px'}}>Position:&nbsp;&nbsp;&nbsp;{pirate.position}</h4>
                            <h4 style={{textAlign: "left", margin:'20px'}}>Treasure:&nbsp;&nbsp;&nbsp;{pirate.chests}</h4>
                            <h4 style={{textAlign: "left", margin:'20px'}}>Peg Leg:&nbsp;&nbsp;&nbsp;{pirate.pegLeg? "Yes": "No"}</h4>
                            <h4 style={{textAlign: "left", margin:'20px'}}>Eye Patch:&nbsp;&nbsp;&nbsp;{pirate.eyePatch? "Yes": "No"}</h4>
                            <h4 style={{textAlign: "left", margin:'20px'}}>Hook Hand:&nbsp;&nbsp;&nbsp;{pirate.hookHand? "Yes": "No"}</h4>
                        </div> 
                    </div>             
        </div>
            )
                }
export default One