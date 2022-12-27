import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/display.css'
import { Link, useNavigate } from 'react-router-dom';
// import { format} from 'date-fns';


const Main = (props) => {
    const navigate = useNavigate();
    const [pirate, setPirates]= useState([]);
    
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
        .then(res => {
            console.log(res.data);
            setPirates(res.data)
        })
        .catch(err=> console.log("XXXXX", err))
    }, [])
    const goToUpdate=(noteID)=>{
        navigate("/pirates/" +noteID)
    }
    const deletePirate= (noteID)=>{
        axios.delete("http://localhost:8000/api/pirates/delete/"+noteID)
            .then(res=> {
                console.log((res.data));
                console.log("Deleted with success!!");
                setPirates(pirate.filter((notes)=>notes._id  !==noteID))
            })
            .catch( err => console.log(err))
    }
    return (
        <div style={{backgroundColor:'#D27D2D'}} > 
                        <div className='header'>
                            <h2 >Pirate Crew</h2>
                            <Link to={"/pirates/new"} ><button className="edit" >Add Pirate</button></Link>
                        </div>
                <div  >
                {pirate.map((pira) => {
                // const sort = date.sort(compareAsc)
                return(
                        <div className='div1'> 
                            <div ><img key={pira._id} src={pira.image} alt="pirate" width="150" height="200" /></div>
                            <div>
                                <h2 >{pira.name}</h2><br/>
                                <button  onClick={()=> goToUpdate(pira._id)} className='edit'>View Pirate</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                <button  onClick={()=> deletePirate(pira._id)}className='delete'>Walk the Plank</button>
                            </div>
                        </div>
                    )})}
                    </div>
            </div>


            
    )
                }
export default Main