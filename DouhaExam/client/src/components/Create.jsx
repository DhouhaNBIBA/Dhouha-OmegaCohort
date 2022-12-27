import React from 'react'
import '../components/create.css'
import {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
const Create = (props) => {
    const [errors, setErrors] = useState([]);  
    const navigate= useNavigate()
    const [inputs, setInputs]= useState({title:"", name:"", rating:0, review:""});
    const createMovie = (e)=>{
        e.preventDefault();
        const newMovie={
            title: inputs.title,
            name: inputs.name,
            rating: inputs.rating,
            review: inputs.review
        }

        axios.post("http://localhost:8000/api/movies/new",newMovie)
            .then(res => {
                console.log("Sucsess");
                console.log(res.data);
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            

        }
    return (
    <div>

        <h2>Submit a Movie and Review</h2>
        <form  className="form" onSubmit={createMovie}>
            {errors.map((err, index) => <p key={index} style={{color:"pink" ,fontSize: "1.6rem"}} >{err}</p>)}
                Movie Title: <br/><input className="inp" onChange={(e)=> setInputs({...inputs, title: e.target.value}) } value={inputs.title}/> <br/><br/>
                Your Name: <br/><input className="inp" onChange={(e)=> setInputs({...inputs, name: e.target.value})} value={inputs.name} /> <br/><br/>
                Rating: <br/><input className="inp" onChange={(e)=> setInputs({...inputs, rating: e.target.value})} value={inputs.rating} /> <br/><br/>
                Your Review: <br/><input style={{height: "200px" ,width: "400px"}} className="inp" onChange={(e)=> setInputs({...inputs, review: e.target.value})} value={inputs.review} /> <br/><br/>
                <br/><button className="edit">Submit</button> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/movies"} style={{textDecoration: 'none', color:'black' }} ><button className="delete">Cancel</button></Link>
        </form>
    </div>
    )
    }

export default Create


        