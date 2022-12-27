import React from 'react'
import '../components/create.css'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Review = (props) => {
    const navigate= useNavigate();
    const{id}= useParams();
    const [inputs, setInputs]= useState({title:"", name:"", rating:0, review:""});
    const [errors, setErrors] = useState([]); 
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then(res=> {
            console.log(res.data);
            setInputs(res.data)
        })
        .catch(err => console.log(err))
    },[id])
    const UpdateMovie = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/movies/${id}/reviews`, {name: inputs.content,review: inputs.review,rating: inputs.rating })
            .then(res=> {
                navigate("/movies/"+id)
                console.log(res.data);
                // setInputs(res.data)
            })
            .catch(err=>{
                console.log(err);
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
            {/* <div>{JSON.stringify(inputs)} </div> */}
            <form  className="form" onSubmit={UpdateMovie}>
            {errors.map((err, index) => <p key={index} style={{color:"pink" ,fontSize: "1.6rem"}} >{err}</p>)}
            Your Name: <br/><input className="inp" onChange={(e)=> setInputs({...inputs, name: e.target.value})} value={inputs.name} /> <br/><br/>
            Rating: <br/><input className="inp" onChange={(e)=> setInputs({...inputs, rating: e.target.value})} value={inputs.rating} /> <br/><br/>
            Your Review: <br/><input style={{height: "200px" ,width: "400px"}} className="inp" onChange={(e)=> setInputs({...inputs, review: e.target.value})} value={inputs.review} /> <br/><br/>
            <br/><button className="edit">Submit</button><br/>
            <Link to={"/movies"} style={{textDecoration: 'none', color:'black' }} ><button className="delete">Cancel</button></Link>
        </form>
            
        </div>
    )
}

export default Review