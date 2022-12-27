import React from 'react'
import '../components/create.css'
import {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
const Create = (props) => {
    const [errors, setErrors] = useState([]);  
    const navigate= useNavigate()
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');
    const [NameError, setNameError] = useState("");
    const [name, setName] = useState('');
    const [ratingError, setRatingError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [reviewError, setReviewError] = useState(""); 
    const createMovie = (e)=>{
        e.preventDefault();
    const newMovie={
            title,
            name,
            rating,
            review,
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

        
        const nameMessage = (e) => {
            setName(e.target.value);
            if(e.target.value.length < 3) {
                setNameError("Name  must be at least 2 characters!!");
                setName(e.target.value);
            } else {
                setNameError("");
            }
        };
    
        const titleMessage = (e) => {
            setTitle(e.target.value);
            if(e.target.value.length < 3) {
                setTitleError("Title must be at least 4 characters!!");
            } else {
                setTitleError("");
            }
        };
        const ratingMessage = (e) => {
            setRating(e.target.value);
            if(e.target.value.length < 3) {
                setRatingError("Rating must be positiv number!!");
            } else {
                setRatingError("");
            }
        };
        const revMessage = (e) => {
            setReview(e.target.value);
            if(e.target.value.length < 3) {
                setReview("Review  must be at least 8 characters!!");
            } else {
                setReviewError("");
            }
        };

    return (
    <div>

        <h2>Submit a Movie and Review</h2>
        <form  className="form" onSubmit={createMovie}>
                {
                    NameError ?
                    <p style={{color:'pink'}}>{ NameError }</p> :
                    ''
                }
                {
                    titleError ?
                    <p style={{color:'pink'}}>{ titleError }</p> :
                    ''
                }
                {
                    ratingError ?
                    <p style={{color:'pink'}}>{ ratingError }</p> :
                    ''
                }
                {
                    reviewError ?
                    <p style={{color:'pink'}}>{ reviewError }</p> :
                    ''
                }
            {errors.map((err, index) => <p key={index} style={{color:"purple" ,fontSize: "1.6rem"}} >{err}</p>)}
                Movie Title: <br/><input className="inp" onChange={titleMessage} value={title}/> <br/><br/>
                Your Name: <br/><input className="inp" onChange= {nameMessage}  value={name} /> <br/><br/>
                Rating: <br/><input className="inp" onChange={ratingMessage} value={rating} /> <br/><br/>
                Your Review: <br/><input style={{height: "200px" ,width: "400px"}} className="inp" onChange={revMessage} value={review} /> <br/><br/>
                <br/><button className="edit">Submit</button> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/"} style={{textDecoration: 'none', color:'black' }} ><button className="delete">Cancel</button></Link>
        </form>
    </div>
    )
    }

export default Create


        