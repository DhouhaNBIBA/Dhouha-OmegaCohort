import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import  '../components/create.css'
import {  useNavigate , useParams} from 'react-router-dom';

const One = (props) => {
    const navigate = useNavigate();
    const [movies, setMovies]= useState({});
    const{ id } = useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then(res => {
            console.log(res.data);
            setMovies(res.data)
        })
        .catch(err=> console.log("XXXXX", err))
    }, [id]);
    const deleteHandler = (noteID) => {
        axios
            .delete("http://localhost:8000/api/movies/delete/"+noteID)
            .then(() => {
            navigate("/movies")
            console.log('Author deleted');
            })
            .catch((err) => console.log(err));
        };

    return (
        <div> 
            <h2>{movies.name}</h2>
            <table>
            <thead>
                <tr>
                    <th>Reviewers</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody>
            {
                    <tr>
                        <td>{movies.name}</td>
                        <td>{movies.rating}</td>
                        <td>{movies.review}</td>
                    </tr>}
            </tbody>
        </table>
        <button onClick={()=> {deleteHandler(movies._id)}} className='delete'>Delete</button>
        </div>
    )
}

export default One