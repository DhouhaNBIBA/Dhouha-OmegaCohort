import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/create.css'
import { Link, useNavigate } from 'react-router-dom';
// import { format} from 'date-fns';


const Main = (props) => {
    // const navigate = useNavigate();
    const [movies, setMovies]= useState([]);
    
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/movies")
        .then(res => {
            console.log(res.data);
            setMovies(res.data)
        })
        .catch(err=> console.log("XXXXX", err))
    }, [])
    // const goToUpdate=(movieID)=>{
    //     navigate("/movies/update/" +movieID)
    // }
    // const deleteMovie= (movieID)=>{
    //     axios.delete("http://localhost:8000/api/movies/delete/"+movieID)
    //         .then(res=> {
    //             console.log((res.data));
    //             console.log("Deleted with success!!");
    //             setMovies(movies.filter((movies)=>movies._id  !==movieID))
    //         })
    //         .catch( err => console.log(err))
    // }
    return (
        <div> 
            <h3>Movie List &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to={`/movies/new`} style={{textDecoration: 'none', color:'black' }} ><button className='edit'>Add a New MOvie</button></Link> </h3>
            <table  style={{ color:'black', Border:'1px solid black' }}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {movies.map((movie) => {
                    return <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>
                        <Link to={`/movies/${movie._id}`} style={{textDecoration: 'none', color:'black' }} ><button className='edit'>Read Reviews</button></Link> &nbsp;&nbsp;&nbsp;&nbsp; 
                        <Link to={`/movies/${movie._id}/reviews`} style={{textDecoration: 'none', color:'black' }} ><button className='delete'>Write a Review</button></Link>
                            {/* <Link to={`details/${movie._id}`}>Write a Review</Link>
                            <h5>Added on:{format (new Date(date),"yyyy-MM-dd 'At' HH:mm:ss")}</h5>
                            <button onClick={()=> {deleteAuthor(author._id)}}>Delete</button>                             */}
                        </td>

                    </tr>})}
            </tbody>
        </table>
        </div>
    )
}

export default Main