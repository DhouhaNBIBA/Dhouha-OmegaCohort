import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import  '../components/create.css'
import {  useNavigate , useParams} from 'react-router-dom';

const One = (props) => {
    const navigate = useNavigate();
    const [movies, setMovies]= useState({});
    const{ id } = useParams()
    useEffect (()=>{
        axios.get(`http://127.0.0.1:8000/api/movies/${id}`)
        .then(res => {
            console.log(res.data);
            setMovies(res.data)
        })
        .catch(err => console.log(err))
    },[id])

    const deleteHandler = (noteID) => {
        axios
            .delete("http://localhost:8000/api/movies/delete/"+noteID)
            .then(() => {
            navigate("/movies")
            console.log(' deleted');
            })
            .catch((err) => console.log(err));
        };

    return (
        <div> 
            <h2>{movies.title}</h2>
            <table>
            <thead>
                <tr>
                    <th>Reviewers</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{movies.name}</td>
                        <td>{movies.rating}</td>
                        <td>{movies.review}</td>
                    </tr>
                    {movies.otherReview?.map( m => {
                        return (
                    <tr key={m._id}>
                    <td>{m.oName}</td>
                    <td>{m.oRating}</td>
                    <td>{m.oReview}</td>
                    </tr>) })}
            </tbody>
        </table>
        <button onClick={()=> {deleteHandler(movies._id)}} className='delete'>Delete</button>
        </div>
    )
}

export default One